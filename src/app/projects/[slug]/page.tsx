import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionFrame } from "@/components/SectionFrame";
import { images } from "@/content/site";
import { ArrowUpRight, Bell, Briefcase, Calendar, ChevronLeft, User } from "lucide-react";

export function generateStaticParams() {
  return images.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = images.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const relatedProjects = images.projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const gallery = project.gallery ?? ["", "", "", "", ""];

  return (
    <main>
      <SectionFrame>
        <div className="grid gap-6 border-b border-white/10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 md:p-10 lg:p-14">
            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Back
            </Link>

            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              {project.subtitle}
            </p>

            <h1 className="max-w-xl break-words font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-tight text-white">
              {project.title}
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {project.description ?? `A considered digital experience for ${project.title}.`}
            </p>

            <a
              href={project.liveDemo ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="pill-cta inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-1"
            >
              Live Demo
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="flex items-center p-6 md:p-10 lg:p-14">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[var(--card-surface)]">
              <PlaceholderImage src={project.image} label={project.title} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </SectionFrame>

      <SectionFrame>
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-white/10 md:grid-cols-4">
          {[
            {
              icon: Briefcase,
              label: "Services",
              value: project.services ?? "UX/UI Design",
            },
            {
              icon: User,
              label: "Client",
              value: project.client ?? project.title,
            },
            {
              icon: Bell,
              label: "Duration",
              value: project.duration ?? "8 Weeks",
            },
            {
              icon: Calendar,
              label: "Date",
              value: project.date ?? "2025",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex min-h-[170px] flex-col justify-center gap-4 bg-black px-6 py-8 text-left md:px-8">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              <div className="space-y-1">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="text-base leading-relaxed text-white md:text-lg">{value}</dd>
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame>
        <div className="grid gap-5 md:grid-cols-2">
          {gallery.map((image, index) => (
            <div
              key={`${project.slug}-gallery-${index}`}
              className={index === 0 || index === gallery.length - 1 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"}
            >
              <div className="h-full overflow-hidden rounded-3xl bg-[var(--card-surface)]">
                <PlaceholderImage
                  src={image}
                  label={`${project.title} ${index + 1}`}
                  className={
                    project.slug === "rare-time-ny" && index === gallery.length - 1
                      ? "!object-contain scale-[1.35]"
                      : project.slug === "rare-time-ny" && index === 0
                        ? "!object-contain"
                      : "object-contain"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame>
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-10">
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.85] tracking-tight text-white">
            More Projects
          </h2>
          <Link href="/projects" className="pill-cta hidden rounded-full bg-white px-5 py-3 text-sm text-black md:inline-flex">
            View all Projects
          </Link>
        </div>
        <div className="grid gap-6 pt-10 md:grid-cols-2">
          {relatedProjects.map((item) => (
            <ProjectCard
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              href={`/projects/${item.slug}`}
              image={item.image}
            />
          ))}
        </div>
        <Link href="/projects" className="pill-cta mx-auto mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm text-black md:hidden">
          View all Projects
        </Link>
      </SectionFrame>
      <Footer />
    </main>
  );
}
