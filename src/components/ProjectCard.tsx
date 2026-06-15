import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl",
        featured ? "lg:grid lg:grid-cols-[1.08fr_1fr]" : "",
      ].join(" ")}
    >
      <div className="border-b border-slate-200 bg-slate-100 lg:border-b-0 lg:border-r">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.screenshot}
            alt={`${project.name} project screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
            {project.eyebrow}
          </span>
          {project.status ? (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <dl className="mt-5 grid gap-4 text-sm leading-6 text-slate-700">
          <div>
            <dt className="font-semibold text-slate-950">Purpose</dt>
            <dd>{project.purpose}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">Problem Solved</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-950">My Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <h4 className="text-sm font-semibold text-slate-950">
            Main Features
          </h4>
          <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-700">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="text-sm font-semibold text-slate-950">
            Technologies
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          <span className="font-semibold text-slate-950">
            Responsive Design:
          </span>{" "}
          {project.responsive}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
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
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              View Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
