import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

type BrowserMockupProps = {
  project: Project;
  featured: boolean;
};

function BrowserMockup({ project, featured }: BrowserMockupProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-md border bg-white",
        featured
          ? "border-slate-200 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
          : "border-slate-200 shadow-sm",
      ].join(" ")}
    >
      <div className="flex h-9 items-center gap-2 border-b border-slate-200 bg-slate-50 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef6f6c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4c95d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5bc48f]" />
        <span className="ml-2 h-3 flex-1 rounded-sm bg-slate-200/80" />
      </div>
      <div className="project-preview">
        <img
          src={project.screenshot}
          alt={`${project.name} project screenshot`}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: project.screenshotPosition ?? "top center" }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const isFeatured = featured;

  if (isFeatured) {
    return (
      <article className="group flex h-full flex-col rounded-md border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <BrowserMockup project={project} featured />

        <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-bold uppercase text-teal-800">
              {project.eyebrow}
            </span>
            {project.status ? (
              <span className="rounded-sm border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800">
                {project.status}
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-2xl font-black text-slate-950">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            {project.description}
          </p>

          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-xs font-bold uppercase text-slate-500">Role</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {project.role}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase text-slate-500">
              Technologies
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-sm bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
            >
              Live Site
              <FaArrowUpRightFromSquare
                aria-hidden="true"
                className="h-3.5 w-3.5"
              />
            </a>
            {project.codeUrl ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                View Code
              </a>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-md border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <BrowserMockup project={project} featured={false} />

      <div className="flex flex-1 flex-col px-2 pb-3 pt-5 sm:px-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold uppercase text-slate-600">
            {project.eyebrow}
          </span>
          {project.status ? (
            <span className="rounded-sm border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800">
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-black text-slate-950">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <div className="mt-4">
          <p className="text-xs font-bold uppercase text-slate-500">Role</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {project.role}
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:border-teal-700 hover:text-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            Live Site
            <FaArrowUpRightFromSquare
              aria-hidden="true"
              className="h-3.5 w-3.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
