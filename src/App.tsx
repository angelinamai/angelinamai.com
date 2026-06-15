import "./App.css";
import {
  FaArrowDown,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
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
import ProjectCard from "./components/ProjectCard";
import SectionHeader from "./components/SectionHeader";
import { appProjects, featuredProjects } from "./data/projects";

const navItems = [
  { label: "Work", href: "#featured-websites" },
  { label: "Apps", href: "#web-applications" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { label: "React", icon: SiReact },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Vite", icon: SiVite },
  { label: "CSS", icon: SiCss3 },
  { label: "Git", icon: SiGit },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="text-base font-bold tracking-tight text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
          >
            Angelina Mai
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Front-End Developer
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              I build responsive, accessible, and user-friendly websites and
              web applications for real people, services, and businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I create clean front-end experiences across production-style
              websites and React applications, with attention to structure,
              usability, responsive layouts, and maintainable code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#featured-websites"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                View My Work
                <FaArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-950 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {featuredProjects.slice(0, 2).map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} website screenshot`}
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    decoding="async"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold text-slate-950">
                    {project.name}
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">
                    Live
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="intro-title"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Professional Introduction
              </p>
              <h2
                id="intro-title"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950"
              >
                Practical front-end work with a client-focused eye.
              </h2>
            </div>
            <div className="grid gap-5 text-base leading-8 text-slate-600 md:grid-cols-2">
              <p>
                My strongest work combines real-world service websites with
                interactive React apps. I focus on clear navigation, polished
                interface details, accessible markup, and layouts that hold up
                on smaller screens.
              </p>
              <p>
                The projects below show both client-facing websites and app
                workflows: service discovery, menus, forms, account/payment
                infrastructure, API data, routing, and state management.
              </p>
            </div>
          </div>
        </section>

        <section
          id="featured-websites"
          aria-labelledby="featured-websites-title"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <SectionHeader
            id="featured-websites-title"
            eyebrow="Featured Websites"
            title="Real websites for services and businesses"
            description="These are the most prominent projects: public, responsive websites with clear business goals, real content, and production deployment paths."
          />
          <div className="mt-10 grid gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>

        <section
          id="web-applications"
          aria-labelledby="web-applications-title"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <SectionHeader
              id="web-applications-title"
              eyebrow="Web Applications"
              title="React apps with state, routing, and API behavior"
              description="These smaller projects show hands-on React application work, including form state, list operations, routing, API data, and cart workflows."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {appProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-title"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <SectionHeader
            id="skills-title"
            eyebrow="Skills and Technologies"
            title="Front-end tools I use to build polished interfaces"
            description="The stack varies by project, but the through-line is responsive React development, component thinking, clear data flow, and careful styling."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-4 shadow-sm"
              >
                <Icon aria-hidden="true" className="h-5 w-5 text-emerald-700" />
                <span className="font-semibold text-slate-900">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" aria-labelledby="about-title" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                About Me
              </p>
              <h2
                id="about-title"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
              >
                I care about building useful, clear, human front ends.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am Angelina Mai, a Front-End Developer building websites and
                React applications with a practical, detail-oriented approach.
                I like turning real content and real workflows into interfaces
                that feel organized, friendly, and easy to use.
              </p>
              <p>
                My work includes service websites for counselling, coaching,
                and restaurants, plus React applications that demonstrate state
                management, API fetching, routing, forms, and responsive UI
                polish.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8"
        >
          <div className="grid gap-8 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                Let's build a clear, responsive web experience.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                I am open to front-end website and React application work where
                thoughtful UI, accessibility, and maintainable implementation
                matter.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
              <a
                href="mailto:angelinamai8386@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaEnvelope aria-hidden="true" />
                Email Me
              </a>
              <a
                href="https://github.com/angelinamai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/angelina-mai-b7b9b1176/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="/angelina-mai-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <FaFilePdf aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Angelina Mai. Front-End Developer.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
