import { DailyCapsule } from "@/src/components/sections/DailyCapsule";
import { FinalLetter } from "@/src/components/sections/FinalLetter";
import { Footer } from "@/src/components/sections/Footer";
import { FutureWithYou } from "@/src/components/sections/FutureWithYou";
import { Gallery } from "@/src/components/sections/Gallery";
import { Hero } from "@/src/components/sections/Hero";
import { OpenWhen } from "@/src/components/sections/OpenWhen";
import { OpeningMessage } from "@/src/components/sections/OpeningMessage";
import { OurStory } from "@/src/components/sections/OurStory";
import { Playlist } from "@/src/components/sections/Playlist";
import { ThingsILove } from "@/src/components/sections/ThingsILove";

export default function Home() {
  return (
    <main>
      <Hero />
      <OpeningMessage />
      <OurStory />
      <ThingsILove />
      <DailyCapsule />
      <Gallery />
      <OpenWhen />
      <Playlist />
      <FutureWithYou />
      <FinalLetter />
      <Footer />
    </main>
  );
}
