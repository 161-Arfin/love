import { loveData } from "@/src/data/loveData";
import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function FutureWithYou() {
  return (
    <section id="future" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Masa depan bersamamu"
          title="Beberapa mimpi yang aku simpan dekat"
          description="Rencana lembut, harapan yang tenang, dan masa depan yang terasa damai."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loveData.bucketList.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card className="h-full p-6">
                <span className="text-sm font-semibold text-[#8f65c8]">
                  Mimpi {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-[#35243f]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#6f5c78]">
                  {item.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
