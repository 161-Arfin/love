import { loveData } from "@/src/data/loveData";
import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function ThingsILove() {
  return (
    <section id="love" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Detail kecil"
          title="Hal-hal yang aku suka darimu"
          description="Hal-hal sederhana dan spesifik yang membuatmu selalu sulit dilupakan."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {loveData.thingsILove.map((thing, index) => (
            <FadeIn key={thing} delay={index * 0.05}>
              <Card className="h-full p-6">
                <span className="text-sm font-semibold text-[#8f65c8]">
                  0{index + 1}
                </span>
                <p className="mt-5 leading-7 text-[#5f4f68]">{thing}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
