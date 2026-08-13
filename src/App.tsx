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

const sectionIds = [
  "work",
  "experience",
  "about",
  "projects",
  "skills",
  "contact",
];

const experienceBullets = [
  "Built responsive React interfaces from product and UI designs.",
  "Integrated front-end features with API-backed application data.",
  "Built and maintained reusable UI components for product screens.",
  "Debugged front-end issues affecting application behavior and user experience.",
  "Used Git, GitHub, code-review workflows, and sprint collaboration to ship changes with a team.",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "React Router"],
  },
  {
    title: "UI",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Data & Integrations",
    skills: ["REST APIs", "Supabase", "Clerk", "Stripe", "Express", "Resend"],
  },
  {
    title: "Tooling",
    skills: ["Git", "GitHub", "Vite", "Vercel"],
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:angelinamai8386@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Resume",
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
                Production websites and front-end systems
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Real client and production projects come first here, with Tracy
                Counselling presented as the strongest case study.
              </p>
            </div>

            <article className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 shadow-2xl shadow-slate-950/25">
              <div className="preview-frame preview-frame--featured preview-frame--tracy-counselling border-b border-slate-700/50">
                <img
                  src={primaryProject.screenshot}
                  alt={`${primaryProject.name} website preview`}
                  loading="eager"
                  decoding="async"
                  style={{
                    objectPosition:
                      primaryProject.screenshotPosition ?? "center 18%",
                  }}
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
                    Strongest Case Study
                  </span>
                  <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-teal-100">
                    Production
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-100">
                  {primaryProject.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">
                  {primaryProject.description}
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {primaryProject.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      My Role
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {primaryProject.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-700/60 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Technical Implementation
                  </h4>
                  <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-slate-400 sm:grid-cols-2">
                    {[
                      "React/Vite front end with multi-page React Router navigation.",
                      "Responsive public service pages, forms, FAQs, resources, blog, and course surfaces.",
                      "Clerk, Supabase, Stripe, Express, and Resend appear in the supported project stack.",
                      "Production deployment with real content and client-facing paths.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Technologies
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {primaryProject.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
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
              <ul className="group/list mt-4 space-y-2">
                {supportingFeaturedProjects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </ul>
            </div>
          </section>

          <section
            id="experience"
            aria-labelledby="experience-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Professional Experience</SectionLabel>
              <h2
                id="experience-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Previous front-end developer experience
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Product UI work, API-backed features, reusable components,
                debugging, Git workflow, and team collaboration.
              </p>
            </div>

            <article className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
                    Previous Role
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-100">
                    Front-End Developer
                  </h3>
                  <p className="mt-1 font-medium text-slate-300">
                    Hit the Books
                  </p>
                </div>
                <p className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  July 2024 - [End date to add]
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-400">
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
                Production React work, practical UI decisions, and ownership
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I am a Front-End Developer with professional React experience
                and shipped production websites. My work focuses on{" "}
                <span className="font-medium text-slate-200">
                  TypeScript/JavaScript, reusable UI components, responsive
                  layouts, accessible markup, and clear front-end structure
                </span>
                .
              </p>
              <p>
                My project work includes API integration, authentication,
                payment flows, persistent data, transactional email, routing,
                deployment, and client-facing delivery for real services and
                businesses.
              </p>
            </div>
          </section>

          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>More Projects</SectionLabel>
              <h2
                id="projects-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Learning projects and React practice
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                These projects are intentionally secondary. They show React
                fundamentals, state, routing, API calls, forms, cart behavior,
                and small app workflows.
              </p>
            </div>
            <ul className="group/list space-y-2">
              {appProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </ul>
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
                Front-end skills organized for engineering teams
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                The stack below is grounded in the current portfolio projects
                and professional front-end work.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-5"
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
                I&apos;m interested in front-end engineering opportunities where
                I can build production React/TypeScript products, collaborate
                with engineering and design teams, and continue growing as an
                engineer.
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
