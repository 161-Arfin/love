import Image from "next/image";
import { loveData } from "@/src/data/loveData";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#f7f0ff] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Galeri"
          title="Sedikit gambaran tentang kamu"
          description="Moment indah yang berhasil diabadikan."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {loveData.gallery.map((item, index) => (
            <FadeIn key={item.src} delay={index * 0.08}>
              <figure className="group overflow-hidden rounded-[8px] border border-[#ded0f2] bg-white shadow-[0_24px_70px_rgba(75,45,96,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5 text-sm leading-6 text-[#6f5c78]">
                  {item.caption}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
