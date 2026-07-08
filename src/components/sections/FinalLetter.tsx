import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";

export function FinalLetter() {
  return (
    <section id="final-letter" className="bg-[#f7f0ff] px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-4xl rounded-[8px] border border-[#ded0f2] bg-white/72 p-8 text-center shadow-[0_24px_70px_rgba(75,45,96,0.08)] sm:p-14">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8f65c8]">
          Surat terakhir
        </p>
        <p className="font-serif text-3xl leading-relaxed text-[#35243f] sm:text-4xl">
          {loveData.finalLetter}
        </p>
      </FadeIn>
    </section>
  );
}
