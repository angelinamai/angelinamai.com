import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/projects";

type ProjectRowProps = {
  project: Project;
  variant?: "featured" | "compact";
};

function ProjectRow({ project, variant = "featured" }: ProjectRowProps) {
  const isCompact = variant === "compact";
  const previewClassName = [
    "preview-frame rounded-md border border-slate-700/60 transition group-hover:border-teal-300/40 sm:order-1",
    project.category === "app"
      ? "preview-frame--app"
      : "preview-frame--featured",
  ].join(" ");
  const imageClassName =
    project.category === "featured"
      ? "transition duration-300 group-hover:scale-[1.03]"
      : "transition duration-300";

  return (
    <li>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name} live project`}
        className={[
          "group relative grid gap-4 rounded-lg transition-colors duration-200 hover:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 lg:hover:!opacity-100 lg:group-hover/list:opacity-55",
          isCompact
            ? "p-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4"
            : "p-4 sm:grid-cols-[9rem_1fr] sm:gap-6",
        ].join(" ")}
      >
        <div className={previewClassName}>
          <img
            src={project.screenshot}
            alt={`${project.name} preview`}
            loading="lazy"
            decoding="async"
            style={{
              objectPosition: project.screenshotPosition ?? "top center",
            }}
            className={imageClassName}
          />
        </div>

        <div className="sm:order-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
              {project.eyebrow}
            </span>
            {project.status ? (
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-amber-300">
                {project.status}
              </span>
            ) : null}
          </div>

          <h4
            className={[
              "mt-2 flex items-center gap-2 font-semibold text-slate-100 transition-colors group-hover:text-teal-200",
              isCompact ? "text-base" : "text-lg",
            ].join(" ")}
          >
            {project.name}
            <FaArrowUpRightFromSquare
              aria-hidden="true"
              className="h-3 w-3 translate-y-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-200"
            />
          </h4>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {isCompact ? project.context : project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key technologies">
            {project.keyTechnologies.map((technology) => (
              <li
                key={technology}
                className={[
                  "rounded-full px-3 py-1 text-xs font-medium",
                  isCompact
                    ? "bg-slate-900/70 text-slate-300"
                    : "bg-teal-400/10 text-teal-200",
                ].join(" ")}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}

export default ProjectRow;
