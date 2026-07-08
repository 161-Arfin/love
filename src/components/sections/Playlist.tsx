import { loveData } from "@/src/data/loveData";
import { Card } from "../ui/Card";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

export function Playlist() {
  return (
    <section id="playlist" className="bg-white/48 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Playlist"
          title="Lagu-lagu yang terasa seperti kamu"
          description="Tanpa autoplay, hanya daftar lagu sederhana dan alasan kenapa lagu-lagu ini ada di sini."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {loveData.playlist.map((song, index) => (
            <FadeIn key={`${song.title}-${song.artist}`} delay={index * 0.06}>
              <Card className="h-full p-6">
                <div className="mb-6 h-1 w-16 rounded-full bg-[#b895e8]" />
                <h3 className="font-serif text-2xl text-[#35243f]">
                  {song.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8f65c8]">
                  {song.artist}
                </p>
                <p className="mt-5 leading-7 text-[#6f5c78]">{song.reason}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
