import "./App.css";
import type { ReactNode } from "react";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import ProjectRow from "./components/ProjectRow";
import Sidebar from "./components/Sidebar";
import { appProjects, featuredProjects } from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = ["work", "about", "skills", "projects", "contact"];

const experienceBullets = [
  "Built responsive React UI components from Figma wireframes and product requirements.",
  "Integrated front-end features with REST API-backed data and debugged rendering, state, and UI behavior.",
  "Worked with Git, GitHub, code reviews, daily stand-ups, and Agile sprint planning during a completed 2024 contract.",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "React Router"],
  },
  {
    title: "UI",
    skills: [
      "Tailwind CSS",
      "CSS",
      "Responsive Design",
      "Accessibility",
      "Typography/Layout",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "Vercel", "Figma"],
  },
  {
    title: "Integrations",
    skills: ["REST APIs", "Clerk", "Supabase", "Stripe", "Express", "Resend"],
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:angelinamai8386@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "View Resume",
    href: "/angelina-mai-resume.pdf",
    icon: FaFilePdf,
  },
  {
    label: "GitHub",
    href: "https://github.com/angelinamai",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angelina-mai-b7b9b1176/",
    icon: FaLinkedin,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
      {children}
    </p>
  );
}

function isExternalLink(href: string) {
  return href.startsWith("http") || href.endsWith(".pdf");
}

function BrowserPreview({
  project,
  priority = false,
}: {
  project: (typeof featuredProjects)[number];
  priority?: boolean;
}) {
  return (
    <div className="browser-shell">
      <div className="browser-chrome" aria-hidden="true">
        <span className="browser-dot bg-rose-400" />
        <span className="browser-dot bg-amber-300" />
        <span className="browser-dot bg-emerald-400" />
        <span className="browser-address" />
      </div>
      <div className="preview-frame preview-frame--featured">
        <img
          src={project.screenshot}
          alt={`${project.name} website preview`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            objectPosition: project.screenshotPosition ?? "center 18%",
          }}
        />
      </div>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}

function TechnologyLine({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <p className="text-xs font-semibold text-teal-200">
      {technologies.join(" · ")}
    </p>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <article className="group rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 transition hover:border-teal-300/30 hover:bg-slate-800/45 sm:p-5">
      <BrowserPreview project={project} />
      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
            {project.eyebrow}
          </span>
          <span className="rounded-full border border-slate-700/80 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-slate-400">
            Production
          </span>
        </div>
        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-100">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-300">
          {project.roleContext ?? project.context}
        </p>
        <div className="mt-2">
          <TechnologyLine technologies={project.keyTechnologies} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 grid gap-4 border-t border-slate-700/60 pt-5">
          <DetailBlock title="Problem">{project.problem}</DetailBlock>
          <DetailBlock title="Owned">{project.role}</DetailBlock>
          <DetailBlock title="Technical Work">
            {project.technicalFocus}
          </DetailBlock>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-700/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
          >
            Live Site
            <FaArrowUpRightFromSquare aria-hidden="true" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const activeId = useActiveSection(sectionIds);
  const primaryProject =
    featuredProjects.find((project) => project.id === "tracy-counselling") ??
    featuredProjects[0];
  const supportingFeaturedProjects = featuredProjects.filter(
    (project) => project.id !== primaryProject.id,
  );

  return (
    <div id="top" className="min-h-screen page-glow">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:px-12 lg:flex lg:gap-16 lg:px-16 lg:py-0">
        <Sidebar activeId={activeId} />

        <main className="mt-16 lg:mt-0 lg:w-[56%] lg:py-24">
          <section
            id="work"
            aria-labelledby="work-heading"
            className="scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Featured Work</SectionLabel>
              <h2
                id="work-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Selected projects
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Production work spanning React interfaces, responsive design,
                integrations, and real client requirements.
              </p>
            </div>

            <article className="rounded-2xl border border-teal-300/20 bg-slate-800/45 p-4 shadow-2xl shadow-slate-950/25 sm:p-6">
              <BrowserPreview project={primaryProject} priority />

              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
                    {primaryProject.eyebrow}
                  </span>
                  <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-teal-100">
                    Client Project
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-100">
                  {primaryProject.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {primaryProject.roleContext ?? primaryProject.context}
                </p>
                <div className="mt-2">
                  <TechnologyLine technologies={primaryProject.keyTechnologies} />
                </div>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {primaryProject.description}
                </p>

                <div className="mt-6 grid gap-5 border-t border-slate-700/60 pt-6 sm:grid-cols-2">
                  <DetailBlock title="Problem">
                    {primaryProject.problem}
                  </DetailBlock>
                  <DetailBlock title="Owned">
                    {primaryProject.role}
                  </DetailBlock>
                  <DetailBlock title="Technical Work">
                    {primaryProject.technicalFocus}
                  </DetailBlock>
                </div>

                <a
                  href={primaryProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Live Site
                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                </a>
              </div>
            </article>

            <div className="mt-10">
              <SectionLabel>Selected Client Projects</SectionLabel>
              <div className="mt-5 space-y-5">
                {supportingFeaturedProjects.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section
            id="about"
            aria-labelledby="about-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>About</SectionLabel>
              <h2
                id="about-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                React development with practical product judgment
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I build with React, TypeScript, JavaScript, and Tailwind CSS,
                working from requirements and designs through implementation,
                debugging, and deployment. I have shipped production websites
                for real services and worked directly with non-technical
                stakeholders when the product path was still taking shape.
              </p>
              <p>
                I care about interfaces that are responsive, accessible, and
                maintainable: clear navigation, readable content hierarchy,
                reusable components, form behavior, interaction states, and
                mobile details that do not feel like an afterthought.
              </p>
              <p>
                When requirements move beyond the front end, I am comfortable
                learning the surrounding concepts needed to ship the work,
                including authentication, user data, database-backed features,
                payments, and email integrations.
              </p>
            </div>

            <article className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
                    Completed Contract
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-100">
                    Front-End Developer · Hit the Books
                  </h3>
                </div>
                <p className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-semibold text-slate-300">
                  2024
                </p>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-400">
                {experienceBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Skills</SectionLabel>
              <h2
                id="skills-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Front-end toolkit for product UI work
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                A focused set of technologies that appears in the current
                portfolio, resume, or connected project source.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 transition hover:border-teal-300/25 hover:bg-slate-800/45"
                >
                  <h3 className="font-semibold text-slate-100">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Additional React Projects</SectionLabel>
              <h2
                id="projects-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Smaller builds for React fundamentals
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                These are intentionally secondary to the production client work.
                They show state, routing, API calls, forms, cart behavior, and
                small interaction flows.
              </p>
            </div>
            <ul className="group/list space-y-2">
              {appProjects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  variant="compact"
                />
              ))}
            </ul>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 sm:p-8">
              <SectionLabel>Contact</SectionLabel>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Looking for a Front-End Developer?
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                I&apos;m currently looking for front-end opportunities where I can
                contribute to thoughtful, user-facing products with React,
                TypeScript, and careful UI execution.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={isExternalLink(href) ? "_blank" : undefined}
                    rel={
                      isExternalLink(href) ? "noopener noreferrer" : undefined
                    }
                    className="inline-flex min-h-11 items-center justify-between gap-3 rounded-md border border-slate-700/70 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                      {label}
                    </span>
                    <FaArrowUpRightFromSquare
                      aria-hidden="true"
                      className="h-3 w-3 text-slate-500"
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <footer className="mt-16 pb-12 text-sm leading-relaxed text-slate-500">
            <p>
              Designed and built by Angelina Mai with React, Vite, and Tailwind
              CSS. &copy; {new Date().getFullYear()}.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
