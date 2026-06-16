import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index?: number;
};

const accentStyles = [
  {
    border: "border-teal-500/35",
    chip: "border-teal-500/30 bg-teal-500/10 text-teal-700",
    dot: "bg-teal-500",
    glow: "shadow-[0_24px_80px_rgba(20,184,166,0.16)]",
  },
  {
    border: "border-fuchsia-500/30",
    chip: "border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-700",
    dot: "bg-fuchsia-500",
    glow: "shadow-[0_24px_80px_rgba(217,70,239,0.14)]",
  },
  {
    border: "border-lime-500/35",
    chip: "border-lime-600/25 bg-lime-600/10 text-lime-800",
    dot: "bg-lime-500",
    glow: "shadow-[0_24px_80px_rgba(132,204,22,0.14)]",
  },
  {
    border: "border-sky-500/35",
    chip: "border-sky-500/25 bg-sky-500/10 text-sky-700",
    dot: "bg-sky-500",
    glow: "shadow-[0_24px_80px_rgba(14,165,233,0.13)]",
  },
];

function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const accent = accentStyles[index % accentStyles.length];
  const isFeatured = featured;

  return (
    <article
      className={[
        "group relative isolate overflow-hidden rounded-md border transition duration-300",
        isFeatured
          ? `bg-white ${accent.border} ${accent.glow} lg:grid lg:grid-cols-[1.12fr_0.88fr]`
          : "border-white/10 bg-white/[0.055] text-white shadow-[0_18px_70px_rgba(0,0,0,0.28)] hover:border-white/24",
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden",
          isFeatured
            ? "bg-[#101723] lg:min-h-[520px]"
            : "border-b border-white/10 bg-[#101723]",
        ].join(" ")}
      >
        <img
          src={project.screenshot}
          alt={`${project.name} project screenshot`}
          loading="lazy"
          decoding="async"
          className={[
            "w-full transition duration-500 group-hover:scale-[1.025]",
            isFeatured
              ? "h-full min-h-[320px] bg-slate-100 object-cover object-left-top lg:absolute lg:inset-0"
              : "aspect-[16/10] h-full object-cover object-top",
          ].join(" ")}
        />
        {!isFeatured ? (
          <>
            <div
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b12]/70 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute left-4 top-4 rounded-md border border-white/15 bg-[#080b12]/78 px-3 py-2 text-xs font-black uppercase text-white backdrop-blur">
              {project.eyebrow}
            </div>
          </>
        ) : null}
      </div>

      <div
        className={[
          "flex flex-1 flex-col",
          isFeatured
            ? "p-6 text-[#101723] md:p-8 lg:p-10"
            : "p-5 text-white md:p-6",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={[
              "rounded-md border px-3 py-1 text-xs font-black uppercase",
              isFeatured
                ? accent.chip
                : "border-lime-300/25 bg-lime-300/10 text-lime-200",
            ].join(" ")}
          >
            {project.eyebrow}
          </span>
          {project.status ? (
            <span className="rounded-md border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-black text-amber-200">
              {project.status}
            </span>
          ) : null}
        </div>

        <h3
          className={[
            "mt-5 font-black",
            isFeatured
              ? "text-3xl text-[#101723] md:text-4xl"
              : "text-2xl text-white",
          ].join(" ")}
        >
          {project.name}
        </h3>
        <p
          className={[
            "mt-4 text-sm leading-7",
            isFeatured ? "text-slate-700" : "text-slate-300",
          ].join(" ")}
        >
          {project.description}
        </p>

        <dl
          className={[
            "mt-6 grid gap-4 text-sm leading-6",
            isFeatured ? "text-slate-700" : "text-slate-300",
          ].join(" ")}
        >
          {[
            ["Purpose", project.purpose],
            ["Problem Solved", project.problem],
            ["My Role", project.role],
          ].map(([label, value]) => (
            <div key={label} className="border-l border-current/20 pl-4">
              <dt
                className={[
                  "font-black",
                  isFeatured ? "text-[#101723]" : "text-white",
                ].join(" ")}
              >
                {label}
              </dt>
              <dd className="mt-1">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <h4
            className={[
              "text-sm font-black",
              isFeatured ? "text-[#101723]" : "text-white",
            ].join(" ")}
          >
            Main Features
          </h4>
          <ul
            className={[
              "mt-3 grid gap-2 text-sm leading-6",
              isFeatured ? "text-slate-700" : "text-slate-300",
            ].join(" ")}
          >
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span
                  className={[
                    "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                    isFeatured ? accent.dot : "bg-lime-300",
                  ].join(" ")}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4
            className={[
              "text-sm font-black",
              isFeatured ? "text-[#101723]" : "text-white",
            ].join(" ")}
          >
            Technologies
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className={[
                  "rounded-md px-3 py-1 text-xs font-bold",
                  isFeatured
                    ? "bg-[#101723] text-white"
                    : "border border-white/10 bg-white/10 text-slate-200",
                ].join(" ")}
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <p
          className={[
            "mt-6 text-sm leading-6",
            isFeatured ? "text-slate-700" : "text-slate-300",
          ].join(" ")}
        >
          <span
            className={[
              "font-black",
              isFeatured ? "text-[#101723]" : "text-white",
            ].join(" ")}
          >
            Responsive Design:
          </span>{" "}
          {project.responsive}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-black transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isFeatured
                ? "bg-[#101723] text-white hover:bg-teal-700 focus-visible:ring-teal-600 focus-visible:ring-offset-white"
                : "bg-white text-[#080b12] hover:bg-lime-200 focus-visible:ring-white focus-visible:ring-offset-[#080b12]",
            ].join(" ")}
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
              className={[
                "inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-black transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isFeatured
                  ? "border-slate-300 text-[#101723] hover:border-[#101723] hover:bg-slate-50 focus-visible:ring-teal-600 focus-visible:ring-offset-white"
                  : "border-white/20 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-[#080b12]",
              ].join(" ")}
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
