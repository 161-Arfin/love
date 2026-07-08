import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";

export function OpeningMessage() {
  return (
    <section id="opening" className="px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#8f65c8]">
          Kenapa ini dibuat
        </p>
        <p className="font-serif text-3xl leading-relaxed text-[#35243f] sm:text-4xl">
          {loveData.openingMessage}
        </p>
      </FadeIn>
    </section>
  );
}
