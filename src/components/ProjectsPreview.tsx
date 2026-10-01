"use client";

import Link from "next/link";
import { images } from "@/content/site";
import { Marquee } from "@/components/Marquee";
import { PillButton } from "@/components/PillButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionFrame } from "@/components/SectionFrame";

export function ProjectsPreview() {
  return (
    <SectionFrame>
      <Reveal className="mb-6 flex items-end justify-between gap-4">
        <p className="font-display text-4xl text-white md:text-6xl">PROJECTS</p>
        <Link href="/projects" className="text-sm text-muted hover:text-[var(--foreground)]">
          View all projects →
        </Link>
      </Reveal>
      <Marquee slow>
        {images.projects.map((p) => (
          <div key={p.slug} className="w-[280px] shrink-0 px-2 md:w-[420px]">
            <ProjectCard
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
              href={`/projects/${p.slug}`}
            />
          </div>
        ))}
      </Marquee>
      <div className="mt-10 flex justify-center">
        <PillButton href="/projects" variant="light">
          View all Projects
        </PillButton>
      </div>
    </SectionFrame>
  );
}
