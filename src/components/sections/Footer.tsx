import { loveData } from "@/src/data/loveData";

export function Footer() {
  return (
    <footer className="border-t border-[#ded0f2] bg-[#fbf7ff] px-6 py-10 text-center">
      <p className="text-sm text-[#6f5c78]">{loveData.footer}</p>
    </footer>
  );
}
