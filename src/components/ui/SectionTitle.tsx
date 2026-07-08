import { FadeIn } from "./FadeIn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8f65c8]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl text-[#35243f] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#6f5c78]">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
