"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

const STORAGE_KEY = "daily-love-capsule";
const STORAGE_EVENT = "daily-love-capsule-change";
const CAPSULE_LOCK_MS = 24 * 60 * 60 * 1000;
let capsuleSnapshot: string | null = null;
let timeSnapshot = 0;

type StoredCapsule = {
  date: string;
  noteIndex: number;
  openedAt: string;
};

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getRandomNoteIndex(totalNotes: number) {
  return Math.floor(Math.random() * totalNotes);
}

function getUnlockTime(openedAt?: string) {
  if (!openedAt) {
    return 0;
  }

  const openedTime = new Date(openedAt).getTime();

  if (Number.isNaN(openedTime)) {
    return 0;
  }

  return openedTime + CAPSULE_LOCK_MS;
}

function getRemainingTime(openedAt?: string, now = Date.now()) {
  return Math.max(0, getUnlockTime(openedAt) - now);
}

function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
}

function subscribeToCapsuleChanges(onStoreChange: () => void) {
  const syncSnapshot = () => {
    capsuleSnapshot = window.localStorage.getItem(STORAGE_KEY);
    onStoreChange();
  };

  queueMicrotask(syncSnapshot);
  window.addEventListener("storage", syncSnapshot);
  window.addEventListener(STORAGE_EVENT, syncSnapshot);

  return () => {
    window.removeEventListener("storage", syncSnapshot);
    window.removeEventListener(STORAGE_EVENT, syncSnapshot);
  };
}

function subscribeToTimeChanges(onStoreChange: () => void) {
  const syncSnapshot = () => {
    timeSnapshot = Date.now();
    onStoreChange();
  };

  queueMicrotask(syncSnapshot);
  const intervalId = window.setInterval(syncSnapshot, 1000);

  return () => window.clearInterval(intervalId);
}

function getStoredCapsuleSnapshot() {
  return capsuleSnapshot;
}

function getTimeSnapshot() {
  return timeSnapshot;
}

function getServerCapsuleSnapshot() {
  return null;
}

function getServerTimeSnapshot() {
  return 0;
}

function parseStoredCapsule(
  storedCapsule: string | null,
  totalNotes: number,
  now: number,
) {
  if (!storedCapsule) {
    return null;
  }

  try {
    const parsedCapsule = JSON.parse(storedCapsule) as StoredCapsule;

    if (
      parsedCapsule.noteIndex >= 0 &&
      parsedCapsule.noteIndex < totalNotes &&
      getRemainingTime(parsedCapsule.openedAt, now) > 0
    ) {
      return parsedCapsule;
    }
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    capsuleSnapshot = null;
  }

  return null;
}

export function DailyCapsule() {
  const { dailyCapsule } = loveData;
  const storedCapsule = useSyncExternalStore(
    subscribeToCapsuleChanges,
    getStoredCapsuleSnapshot,
    getServerCapsuleSnapshot,
  );
  const currentTime = useSyncExternalStore(
    subscribeToTimeChanges,
    getTimeSnapshot,
    getServerTimeSnapshot,
  );
  const todaysCapsule = parseStoredCapsule(
    storedCapsule,
    dailyCapsule.notes.length,
    currentTime,
  );
  const isOpen = Boolean(todaysCapsule);
  const noteIndex = todaysCapsule?.noteIndex ?? 0;

  const activeNote = dailyCapsule.notes[noteIndex];

  const openTodaysCapsule = () => {
    if (isOpen || dailyCapsule.notes.length === 0) {
      return;
    }

    const randomNoteIndex = getRandomNoteIndex(dailyCapsule.notes.length);

    const nextCapsule = JSON.stringify({
      date: getTodayKey(),
      noteIndex: randomNoteIndex,
      openedAt: new Date().toISOString(),
    } satisfies StoredCapsule);

    window.localStorage.setItem(STORAGE_KEY, nextCapsule);
    capsuleSnapshot = nextCapsule;
    window.dispatchEvent(new Event(STORAGE_EVENT));
  };

  const capsuleButtonLabel = isOpen
    ? dailyCapsule.lockedButton
    : dailyCapsule.openButton;
  const remainingTime = getRemainingTime(
    todaysCapsule?.openedAt,
    currentTime,
  );
  const countdownText = formatCountdown(remainingTime);

  if (!activeNote) {
    return (
      <DailyCapsuleShell dailyCapsule={dailyCapsule}>
        <FadeIn className="mx-auto max-w-3xl">
          <div className="rounded-[8px] border border-[#ded0f2] bg-[#f7f0ff] p-8 text-center text-[#6f5c78] shadow-[0_28px_90px_rgba(75,45,96,0.12)]">
            {dailyCapsule.emptyMessage}
          </div>
        </FadeIn>
      </DailyCapsuleShell>
    );
  }

  return (
    <DailyCapsuleShell dailyCapsule={dailyCapsule}>
      <FadeIn className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[8px] border border-[#ded0f2] bg-[#f7f0ff] p-6 shadow-[0_28px_90px_rgba(75,45,96,0.12)] sm:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8f65c8] via-[#d9c6f3] to-[#b895e8]" />
          {isOpen ? (
            <div className="absolute right-5 top-5 rounded-full border border-[#ded0f2] bg-white/75 px-4 py-2 text-sm font-semibold tabular-nums text-[#6f5c78] shadow-[0_10px_28px_rgba(75,45,96,0.08)]">
              {countdownText}
            </div>
          ) : null}
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[8px] border border-[#ded0f2] bg-white/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f65c8]">
                {dailyCapsule.closedLabel}
              </p>
              <CapsuleVisual isOpen={isOpen} />
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? activeNote.title : "closed"}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {isOpen ? (
                    <p className="text-sm font-semibold text-[#8f65c8]">
                      {dailyCapsule.counterLabel} {dailyCapsule.todayLabel}
                    </p>
                  ) : null}
                  <h3 className="mt-4 font-serif text-3xl text-[#35243f] sm:text-4xl">
                    {isOpen ? activeNote.title : dailyCapsule.closedLabel}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-[#6f5c78]">
                    {isOpen ? activeNote.message : dailyCapsule.closedMessage}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={openTodaysCapsule}
                disabled={isOpen}
                className="mt-8 rounded-full bg-[#35243f] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(53,36,63,0.2)] transition hover:-translate-y-0.5 hover:bg-[#6d4bab] focus:outline-none focus:ring-2 focus:ring-[#8f65c8] focus:ring-offset-4 disabled:cursor-not-allowed disabled:bg-[#806b8a] disabled:hover:translate-y-0"
              >
                {capsuleButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </DailyCapsuleShell>
  );
}

function CapsuleVisual({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className="mt-8 flex aspect-square items-center justify-center rounded-full border border-[#ded0f2] text-center shadow-inner"
      style={{
        background:
          "radial-gradient(circle, rgba(224,210,247,0.9), rgba(251,247,255,0.94) 58%, rgba(255,255,255,0.95))",
      }}
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        aria-hidden="true"
      >
        {isOpen ? (
          <div className="relative flex h-48 w-48 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-[#b895e8]/45"
              animate={{
                scale: [0.92, 1.08, 0.92],
                opacity: [0.45, 0.18, 0.45],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute h-40 w-40 rounded-full bg-white/70 shadow-[0_18px_45px_rgba(93,60,124,0.18)]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              style={{
                position: "relative",
                zIndex: 5,
                display: "flex",
                width: 144,
                height: 144,
                alignItems: "center",
                justifyContent: "center",
                color: "#8f5bb8",
                fontFamily: "Arial, sans-serif",
                fontSize: 124,
                fontWeight: 700,
                lineHeight: 1,
                textShadow: "0 18px 30px rgba(93,60,124,0.22)",
                transform: "translateY(16px)",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {"\u2764"}
            </motion.div>
            {[0, 1, 2, 3].map((particle) => (
              <motion.span
                key={particle}
                className="absolute h-3 w-3 rounded-full bg-[#b895e8]"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos((particle * Math.PI) / 2) * 82, 0],
                  y: [0, Math.sin((particle * Math.PI) / 2) * 82, 0],
                  opacity: [0, 0.9, 0],
                  scale: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  delay: particle * 0.16,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="relative flex h-40 w-48 items-center justify-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute h-24 w-40 rounded-[8px] border border-[#b895e8]/65 bg-[#f7f0ff] shadow-[0_18px_35px_rgba(75,45,96,0.12)]" />
            <div className="absolute mt-2 text-6xl text-[#8f5bb8]">
              {"\u2709"}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

type DailyCapsuleShellProps = {
  dailyCapsule: typeof loveData.dailyCapsule;
  children: ReactNode;
};

function DailyCapsuleShell({ dailyCapsule, children }: DailyCapsuleShellProps) {
  return (
    <section id="daily-capsule" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow={dailyCapsule.eyebrow}
          title={dailyCapsule.title}
          description={dailyCapsule.description}
        />
        {children}
      </div>
    </section>
  );
}
