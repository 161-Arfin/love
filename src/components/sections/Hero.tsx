import Image from "next/image";
import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(251,247,255,0.96),rgba(225,214,247,0.76),rgba(255,255,255,0.88))]" />
      <div className="absolute right-0 top-0 h-full w-full opacity-35 md:w-1/2">
        <Image
          src="/images/mylove1.jpeg"
          alt="Background romantis lembut yang bisa diganti"
          fill
          preload
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf7ff] via-[#fbf7ff]/72 to-transparent" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl">
        <FadeIn className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#8f65c8]">
            My Love
          </p>
          <h1 className="font-serif text-5xl leading-tight text-[#35243f] sm:text-7xl lg:text-8xl">
            {loveData.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5c78] sm:text-xl">
            {loveData.hero.subtitle}
          </p>
          <a
            href="#opening"
            className="mt-10 inline-flex rounded-full bg-[#35243f] px-7 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(53,36,63,0.22)] transition hover:-translate-y-0.5 hover:bg-[#6d4bab] focus:outline-none focus:ring-2 focus:ring-[#8f65c8] focus:ring-offset-4"
          >
            {loveData.hero.cta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
