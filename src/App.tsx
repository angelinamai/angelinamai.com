import "./App.css";
import {
  SiCss3,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import ProjectRow from "./components/ProjectRow";
import Sidebar from "./components/Sidebar";
import { appProjects, featuredProjects } from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = ["about", "work", "apps", "skills"];

const skills = [
  { label: "React", icon: SiReact },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Vite", icon: SiVite },
  { label: "CSS", icon: SiCss3 },
  { label: "Git", icon: SiGit },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-teal-300/90">
      {children}
    </p>
  );
}

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div id="top" className="min-h-screen page-glow">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 md:px-12 lg:flex lg:gap-16 lg:px-16 lg:py-0">
        <Sidebar activeId={activeId} />

        <main className="mt-16 lg:mt-0 lg:w-[56%] lg:py-24">
          {/* About */}
          <section
            id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-24"
          >
            <h3
              id="about-heading"
              className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400 lg:sr-only"
            >
              About
            </h3>
            <div className="space-y-4 leading-relaxed text-slate-400">
              <p>
                I&apos;m a front-end developer who turns real content and
                everyday workflows into interfaces that feel{" "}
                <span className="font-medium text-slate-200">
                  organized, clear, and easy to use
                </span>
                . I care about clean structure, accessible markup, and layouts
                that hold up on every screen size.
              </p>
              <p>
                My work spans two areas: production-ready{" "}
                <span className="font-medium text-slate-200">
                  service websites
                </span>{" "}
                for counselling, coaching, and restaurant clients, and{" "}
                <span className="font-medium text-slate-200">
                  React applications
                </span>{" "}
                that demonstrate state management, routing, API data, and form
                handling.
              </p>
              <p>
                I focus on the details that make products feel trustworthy:
                thoughtful navigation, responsive behavior, and maintainable
                code that&apos;s easy to build on.
              </p>
            </div>
          </section>

          {/* Featured client work */}
          <section
            id="work"
            aria-labelledby="work-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Selected Work</SectionLabel>
              <h3
                id="work-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Client &amp; service websites
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                Public, responsive websites with real content, clear business
                goals, and live production deployments.
              </p>
            </div>
            <ul className="group/list space-y-2">
              {featuredProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </ul>
          </section>

          {/* Web applications */}
          <section
            id="apps"
            aria-labelledby="apps-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Web Applications</SectionLabel>
              <h3
                id="apps-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                React apps &amp; experiments
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                Smaller builds that show hands-on React work: component state,
                routing, API fetching, and cart workflows.
              </p>
            </div>
            <ul className="group/list space-y-2">
              {appProjects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="mb-8">
              <SectionLabel>Toolkit</SectionLabel>
              <h3
                id="skills-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Skills &amp; technologies
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                The stack shifts per project, but it always comes back to
                responsive React, clear data flow, and careful styling.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 transition-colors hover:border-teal-300/40 hover:bg-slate-800/60"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-teal-300"
                  />
                  <span className="text-sm font-medium text-slate-200">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mt-20 scroll-mt-24"
          >
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-8">
              <SectionLabel>Contact</SectionLabel>
              <h3
                id="contact-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-100"
              >
                Let&apos;s build something clear and responsive.
              </h3>
              <p className="mt-3 leading-relaxed text-slate-400">
                I&apos;m open to front-end website and React application work
                where thoughtful UI, accessibility, and maintainable code
                matter.
              </p>
              <a
                href="mailto:angelinamai8386@gmail.com"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Get in touch
              </a>
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
