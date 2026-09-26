import { graphicWorks } from "@/content/site";
import { PillButton } from "@/components/PillButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function GraphicWorks() {
  return (
    <SectionFrame>
      <Reveal className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Graphic Works</p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-6xl">Other Creative Work</h2>
          </div>
          <PillButton href="/resume.pdf" variant="light" dot>
            Resume
          </PillButton>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {graphicWorks.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010]">
              <div className="aspect-[4/3] overflow-hidden">
                <PlaceholderImage src={item.src} label={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionFrame>
  );
}
