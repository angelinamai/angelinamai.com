import "./App.css";
import {
  FaArrowDown,
  FaArrowRight,
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

const contactLinks = [
  {
    label: "Email Me",
    href: "mailto:angelinamai8386@gmail.com",
    icon: FaEnvelope,
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
  {
    label: "Resume",
    href: "/angelina-mai-resume.pdf",
    icon: FaFilePdf,
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/82 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-md py-2 pr-3 text-sm font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white text-sm font-black text-[#080b12] transition group-hover:-rotate-3 group-hover:bg-lime-200">
              AM
            </span>
            <span>Angelina Mai</span>
          </a>
          <ul className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-lime-300/70 bg-lime-300 px-4 py-2 text-sm font-black text-[#080b12] shadow-[0_0_26px_rgba(190,242,100,0.22)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate">
          <div
            className="absolute inset-0 -z-10 hero-field"
            aria-hidden="true"
          />
          <div className="mx-auto grid min-h-[calc(100vh-66px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-md border border-teal-300/35 bg-teal-300/10 px-3 py-2 text-xs font-black uppercase text-teal-200">
                Front-End Developer
              </p>
              <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-6xl">
                I build responsive, accessible, and user-friendly websites and
                web applications for real people, services, and businesses.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                I create clean front-end experiences across production-style
                websites and React applications, with attention to structure,
                usability, responsive layouts, and maintainable code.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#featured-websites"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-[#080b12] shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition hover:-translate-y-1 hover:bg-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
                >
                  View My Work
                  <FaArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-teal-300/70 hover:bg-teal-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
              <div
                className="absolute -left-3 top-10 hidden h-28 w-28 border-l border-t border-lime-300/70 md:block"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 right-8 hidden h-24 w-24 border-b border-r border-fuchsia-300/70 md:block"
                aria-hidden="true"
              />
              <div className="hero-showcase">
                <a
                  href={featuredProjects[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hero-main focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
                >
                  <img
                    src={featuredProjects[0].screenshot}
                    alt={`${featuredProjects[0].name} website screenshot`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                    decoding="async"
                  />
                  <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border border-white/15 bg-[#080b12]/84 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                    {featuredProjects[0].name}
                    <span className="text-lime-200">Live</span>
                  </span>
                </a>

                <div
                  className="hero-stack"
                  aria-label="Featured website previews"
                >
                  {featuredProjects.slice(1).map((project) => (
                    <a
                      key={project.id}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hero-mini focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
                    >
                      <img
                        src={project.screenshot}
                        alt={`${project.name} website screenshot`}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.05]"
                        decoding="async"
                      />
                      <span>{project.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="intro-title"
          className="border-y border-slate-200 bg-white text-slate-950"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-teal-700">
                Professional Introduction
              </p>
              <h2
                id="intro-title"
                className="mt-4 max-w-xl text-4xl font-black text-slate-950 md:text-5xl"
              >
                Practical front-end work with a client-focused eye.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <p className="intro-panel">
                My strongest work combines real-world service websites with
                interactive React apps. I focus on clear navigation, polished
                interface details, accessible markup, and layouts that hold up
                on smaller screens.
              </p>
              <p className="intro-panel accent">
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
          className="relative border-b border-slate-200 bg-[#f7f2ea] text-slate-950"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <SectionHeader
              id="featured-websites-title"
              eyebrow="Featured Client Work"
              title="Selected Client Projects"
              description="These are the most prominent projects: public, responsive websites with clear business goals, real content, and production deployment paths."
              variant="light"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        <section
          id="web-applications"
          aria-labelledby="web-applications-title"
          className="border-b border-slate-200 bg-white text-slate-950"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <SectionHeader
              id="web-applications-title"
              eyebrow="Web Applications"
              title="React apps with state, routing, and API behavior"
              description="These smaller projects show hands-on React application work, including form state, list operations, routing, API data, and cart workflows."
              variant="light"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {appProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-title"
          className="border-b border-teal-100 bg-[#eef7f4] text-slate-950"
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <SectionHeader
              id="skills-title"
              eyebrow="Skills and Technologies"
              title="Front-end tools I use to build polished interfaces"
              description="The stack varies by project, but the through-line is responsive React development, component thinking, clear data flow, and careful styling."
              variant="light"
            />
            <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-teal-100 bg-teal-100 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group flex min-h-24 items-center justify-between bg-white px-5 py-5 transition hover:bg-teal-50"
                >
                  <span className="font-black text-slate-950">{label}</span>
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 text-teal-700 transition group-hover:-translate-y-1 group-hover:scale-105"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="bg-[#f7f2ea] text-slate-950"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-teal-700">
                About Me
              </p>
              <h2
                id="about-title"
                className="mt-4 text-4xl font-black text-slate-950 md:text-5xl"
              >
                I care about building useful, clear, human front ends.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <p className="about-panel">
                I am Angelina Mai, a Front-End Developer building websites and
                React applications with a practical, detail-oriented approach. I
                like turning real content and real workflows into interfaces
                that feel organized, friendly, and easy to use.
              </p>
              <p className="about-panel dark">
                My work includes service websites for counselling, coaching, and
                restaurants, plus React applications that demonstrate state
                management, API fetching, routing, forms, and responsive UI
                polish.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative isolate bg-[#080b12]"
        >
          <div
            className="absolute inset-0 -z-10 contact-field"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <div className="grid gap-10 border-y border-white/15 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
              <div>
                <p className="text-sm font-black uppercase text-lime-200">
                  Contact
                </p>
                <h2
                  id="contact-title"
                  className="mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl"
                >
                  Let's build a clear, responsive web experience.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  I am open to front-end website and React application work
                  where thoughtful UI, accessibility, and maintainable
                  implementation matter.
                </p>
              </div>
              <div className="grid content-center gap-3 sm:grid-cols-2">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={
                      href.startsWith("http") || href.endsWith(".pdf")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http") || href.endsWith(".pdf")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex min-h-16 items-center justify-between gap-4 rounded-md border border-white/12 bg-white/[0.06] px-5 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-lime-200/70 hover:bg-lime-200 hover:text-[#080b12] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b12]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                      {label}
                    </span>
                    <FaArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080b12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            (c) {new Date().getFullYear()} Angelina Mai. Front-End Developer.
          </p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
