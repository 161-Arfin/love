import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function OurStory() {
  return (
    <section id="story" className="bg-white/48 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Cerita kita"
          title="Beberapa momen yang menjadi kenangan kita berdua"
          description="Setiap momen yang kita lalui bersama adalah bagian dari kisah indah yang kita tulis bersama."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-[#ded0f2] sm:left-1/2" />
          <div className="space-y-8">
            {loveData.timeline.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.06}
                className={`relative sm:flex ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className="absolute left-2 top-6 h-4 w-4 rounded-full border-4 border-[#fbf7ff] bg-[#8f65c8] sm:left-1/2 sm:-ml-2" />
                <article className="ml-12 rounded-[8px] border border-[#ded0f2] bg-[#f7f0ff] p-6 shadow-[0_18px_50px_rgba(75,45,96,0.07)] sm:ml-0 sm:w-[44%]">
                  <time className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f65c8]">
                    {item.date}
                  </time>
                  <h3 className="mt-3 font-serif text-2xl text-[#35243f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#6f5c78]">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
