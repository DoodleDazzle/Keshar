import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionFrame } from "@/components/SectionFrame";
import { bubbles, images, projectCapabilities } from "@/content/site";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="PROJECTS"
        bubble={bubbles.projects}
        image={images.projectsHero}
      />
      <div className="border-y border-white/10 py-3">
        <Marquee>
          {projectCapabilities.map((item) => (
            <span
              key={item.label}
              className="mx-6 inline-flex items-center gap-2 text-sm text-white"
            >
              <item.icon aria-hidden className="h-4 w-4 text-muted" strokeWidth={1.8} />
              {item.label}
            </span>
          ))}
        </Marquee>
      </div>
      <SectionFrame>
        <ProjectsGrid />
      </SectionFrame>
      <Footer />
    </main>
  );
}
