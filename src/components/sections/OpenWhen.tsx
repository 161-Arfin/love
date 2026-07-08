"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { OpenWhenLetter } from "@/src/data/loveData";
import { loveData } from "@/src/data/loveData";
import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function OpenWhen() {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(
    null,
  );

  useEffect(() => {
    if (!selectedLetter) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedLetter(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLetter]);

  return (
    <section id="open-when" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Buka saat"
          title="Surat kecil untuk momen yang membutuhkannya"
          description="Beberapa catatan yang bisa dia buka kapan pun ia butuh sedikit kelembutan tambahan."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loveData.openWhenLetters.map((letter, index) => (
            <FadeIn key={letter.title} delay={index * 0.05}>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setSelectedLetter(letter)}
                className="block h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-[#8f65c8] focus:ring-offset-4"
              >
                <Card className="h-full p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f65c8]">
                    Surat
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-[#35243f]">
                    {letter.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6f5c78]">
                    {letter.preview}
                  </p>
                </Card>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedLetter ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#281c34]/45 px-5 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="presentation"
            onMouseDown={() => setSelectedLetter(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="open-when-title"
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-[#ded0f2] bg-[#f7f0ff] p-7 shadow-[0_35px_100px_rgba(40,28,52,0.3)] sm:p-10"
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f65c8]">
                    Buka saat
                  </p>
                  <h3
                    id="open-when-title"
                    className="mt-3 font-serif text-3xl text-[#35243f]"
                  >
                    {selectedLetter.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLetter(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ded0f2] text-xl leading-none text-[#5f4f68] transition hover:border-[#8f65c8] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#8f65c8]"
                  aria-label="Tutup surat"
                >
                  x
                </button>
              </div>
              <p className="mt-8 whitespace-pre-line font-serif text-2xl leading-relaxed text-[#4c3658]">
                {selectedLetter.letter}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
