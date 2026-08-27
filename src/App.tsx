import "./App.css";
import type { ReactNode } from "react";
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { appProjects, featuredProjects, type Project } from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = ["experience", "work", "about", "skills", "contact"];

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const experienceBullets = [
  "Built responsive React UI components from Figma wireframes and product requirements.",
  "Connected front-end features to REST API-backed data and debugged the usual suspects: rendering, state, and UI behavior.",
  "Worked through Git, GitHub, code reviews, stand-ups, and sprint planning during a completed 2024 contract.",
];

const experienceStack = [
  "React",
  "Figma",
  "REST APIs",
  "GitHub",
  "Code review",
  "Responsive UI",
];

const toolbox = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "HTML / CSS",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Figma",
  "Accessibility",
  "Responsive UI",
];

const capabilityGroups = [
  {
    title: "Interface",
    text: "Component structure, page hierarchy, typography, responsive layouts, and interaction states.",
  },
  {
    title: "Integration",
    text: "Front-end work connected to APIs, authentication, data, payments, and email flows when the product requires it.",
  },
  {
    title: "Delivery",
    text: "Debugging, deployment, Git workflows, accessibility checks, and iteration from feedback.",
  },
];

const contactLinks = [
  {
    label: "Email",
    detail: "angelinamai8386@gmail.com",
    href: "mailto:angelinamai8386@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    detail: "Profile",
    href: "https://www.linkedin.com/in/angelina-mai-b7b9b1176/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    detail: "angelinamai",
    href: "https://github.com/angelinamai",
    icon: FaGithub,
  },
  {
    label: "Resume",
    detail: "PDF",
    href: "/angelina-mai-resume.pdf",
    icon: FaFilePdf,
  },
];

const tracyEngineering = [
  {
    label: "Structure",
    text: "React/Vite pages with React Router, bilingual content flows, and clear service paths.",
  },
  {
    label: "The not-just-a-website part",
    text: "Clerk, Supabase, Stripe, Express, and Resend handle auth, data, payments, API surfaces, and email.",
  },
  {
    label: "Shipping",
    text: "Responsive forms, deployment, debugging, and iteration as requirements kept doing what requirements do.",
  },
];

function requireProject(id: string) {
  const project = featuredProjects.find((item) => item.id === id);

  if (!project) {
    throw new Error(`Missing featured project: ${id}`);
  }

  return project;
}

const tracyProject = requireProject("tracy-counselling");
const interpretingProject = requireProject("angelina-interpreting");
const swimProject = requireProject("swim-with-leah");
const veganProject = requireProject("vegan-restaurant");

const selectedProjects = [
  {
    number: "02",
    project: interpretingProject,
    heading: ["Angelina", "Interpreting"],
  },
  {
    number: "03",
    project: swimProject,
    heading: ["Swim With", "Leah"],
  },
];

function isExternalLink(href: string) {
  return href.startsWith("http") || href.endsWith(".pdf");
}

function linkProps(href: string) {
  const external = isExternalLink(href);

  return {
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  };
}

function EditorialLabel({ children }: { children: ReactNode }) {
  return <p className="editorial-label">{children}</p>;
}

function ArrowLink({
  href,
  children,
  variant = "ink",
}: {
  href: string;
  children: ReactNode;
  variant?: "ink" | "light";
}) {
  return (
    <a
      href={href}
      {...linkProps(href)}
      className={`arrow-link arrow-link--${variant}`}
    >
      <span>{children}</span>
      <FaArrowUpRightFromSquare aria-hidden="true" />
    </a>
  );
}

function TopNav({ activeId }: { activeId: string }) {
  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#top" aria-label="Back to top">
        Angelina Mai
      </a>

      <nav className="site-nav__links" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={isActive ? "is-active" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

function HeroMark() {
  return (
    <div className="hero-mark" aria-hidden="true">
      <div className="hero-mark__grid" />
      <p className="hero-mark__monogram">AM</p>
      <div className="hero-mark__window">
        <span>UI</span>
        <span>API</span>
        <span>SHIP</span>
      </div>
      <p className="hero-mark__cursor">↗</p>
      <p className="hero-mark__caption">React / Next.js / TypeScript</p>
    </div>
  );
}

function ProjectMedia({
  project,
  priority = false,
  variant = "default",
}: {
  project: Project;
  priority?: boolean;
  variant?: "default" | "flagship" | "mini" | "archive";
}) {
  return (
    <div className={`project-media project-media--${variant}`}>
      <div className="project-media__chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className="project-media__screen">
        <img
          src={project.screenshot}
          alt={`${project.name} project preview`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            objectPosition: project.screenshotPosition ?? "top center",
          }}
        />
      </div>
    </div>
  );
}

function TechLine({ items }: { items: string[] }) {
  return <p className="tech-line">{items.join(" / ")}</p>;
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section section--ink experience-section"
    >
      <div className="section__index">01</div>
      <div className="experience-section__header">
        <EditorialLabel>Professional Experience / 2024</EditorialLabel>
        <h2 id="experience-heading">
          Turns out, real software has other developers.
        </h2>
        <p>
          At Hit the Books, I worked from Figma, integrated API-backed features,
          debugged existing UI behavior, and shipped responsive React work
          through a team workflow.
        </p>
      </div>

      <div className="experience-panel">
        <div>
          <p className="experience-panel__role">
            Hit the Books · Front-End Developer (Contract)
          </p>
          <p className="experience-panel__status">Completed contract · 2024</p>
        </div>

        <ul className="experience-panel__bullets">
          {experienceBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="experience-panel__stack" aria-label="Experience tools">
          {experienceStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FlagshipProject({ project }: { project: Project }) {
  return (
    <article className="flagship-project">
      <div className="flagship-project__heading">
        <p className="project-number">01 / {project.name.toUpperCase()}</p>
        <h3>
          <span>Tracy </span>
          <span>Counselling</span>
        </h3>
      </div>

      <ProjectMedia project={project} priority variant="flagship" />

      <div className="flagship-project__details">
        <div className="flagship-project__summary">
          <p className="project-context">{project.roleContext}</p>
          <p>{project.description}</p>
          <TechLine items={project.keyTechnologies} />
          <ArrowLink href={project.liveUrl}>View live site</ArrowLink>
        </div>

        <div className="engineering-grid">
          {tracyEngineering.map((item) => (
            <div key={item.label}>
              <h4>{item.label}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function SupportingProject({
  number,
  project,
  heading,
}: {
  number: string;
  project: Project;
  heading: string[];
}) {
  return (
    <article className="project-strip">
      <div className="project-strip__meta">
        <p className="project-number">{number} / {project.eyebrow}</p>
        <h3>
          {heading.map((line, index) => (
            <span key={line}>
              {line}
              {index < heading.length - 1 ? " " : ""}
            </span>
          ))}
        </h3>
        <p>{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
        <ArrowLink href={project.liveUrl}>View live site</ArrowLink>
      </div>

      <ProjectMedia project={project} variant="mini" />
    </article>
  );
}

function ClientAside({ project }: { project: Project }) {
  return (
    <article className="client-aside">
      <ProjectMedia project={project} variant="archive" />
      <div>
        <p className="project-number">04 / {project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
        <ArrowLink href={project.liveUrl}>View live site</ArrowLink>
      </div>
    </article>
  );
}

function ProjectArchive() {
  return (
    <div className="project-archive" aria-label="Project archive">
      <div>
        <EditorialLabel>Additional React Projects</EditorialLabel>
        <h3>Small builds, useful scars.</h3>
        <p>State, routing, APIs, and ordering flows in compact React builds.</p>
      </div>

      <ul>
        {appProjects.map((project) => (
          <li key={project.id}>
            <a
              href={project.liveUrl}
              {...linkProps(project.liveUrl)}
              aria-label={`Open ${project.name} project`}
            >
              <span>{project.name}</span>
              <small>{project.keyTechnologies.slice(0, 3).join(" / ")}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SelectedWorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section selected-work"
    >
      <div className="section__index">02</div>
      <div className="section-heading">
        <EditorialLabel>Featured Work</EditorialLabel>
        <h2 id="work-heading">Some things that survived production.</h2>
        <p>
          React and Next.js work with real clients, real constraints,
          responsive UI, integrations, and public deployments.
        </p>
      </div>

      <FlagshipProject project={tracyProject} />

      <div className="supporting-projects">
        {selectedProjects.map((item) => (
          <SupportingProject
            key={item.project.id}
            number={item.number}
            project={item.project}
            heading={item.heading}
          />
        ))}
      </div>

      <ClientAside project={veganProject} />
      <ProjectArchive />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section about-section">
      <div className="section__index">03</div>
      <div>
        <EditorialLabel>About</EditorialLabel>
        <h2 id="about-heading">Okay, who is Angelina?</h2>
      </div>

      <div className="about-section__copy">
        <p>
          I&apos;m a front-end developer in Toronto focused on React,
          TypeScript, Next.js, and UI that holds up under real requirements.
          Give me a broken layout, a mysterious API response, and too many
          browser tabs and I&apos;m weirdly calm.
        </p>
        <p>
          I like turning rough product needs into clear screens, resilient
          components, and interfaces people can actually use. The part I care
          about most is where design judgment and implementation meet.
        </p>
      </div>

      <div className="about-section__rules" aria-label="Working style">
        <p>Requirements → user flows</p>
        <p>Design → responsive UI</p>
        <p>Frontend → integration</p>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section skills-section">
      <div className="section__index">04</div>
      <div className="skills-section__headline">
        <EditorialLabel>Technical Capabilities</EditorialLabel>
        <h2 id="skills-heading">
          <span>The toolbox isn&apos;t </span>
          <span>the interesting part.</span>
        </h2>
        <p>
          Nobody has ever hired a developer because she had the prettiest list
          of programming languages. The useful part is knowing what to do with
          them.
        </p>
      </div>

      <ul className="toolbox-list" aria-label="Technologies and practices">
        {toolbox.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="capability-lanes">
        {capabilityGroups.map((group) => (
          <section key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </section>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section contact-section"
    >
      <div className="section__index">05</div>
      <div className="contact-section__headline">
        <EditorialLabel>Contact</EditorialLabel>
        <h2 id="contact-heading">
          <span>Still here?</span>
          <span>I should probably give you my email.</span>
        </h2>
        <p>
          Open to Front-End Developer, React Developer, and UI Engineer
          opportunities where product thinking, UI polish, and careful
          implementation all matter.
        </p>
      </div>

      <div className="contact-links">
        {contactLinks.map(({ label, detail, href, icon: Icon }) => (
          <a key={href} href={href} {...linkProps(href)}>
            <span>
              <Icon aria-hidden="true" />
              {label}
            </span>
            <small>{detail}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <div id="top" className="site-shell">
      <TopNav activeId={activeId} />

      <main>
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-section__topline">
            <span>Angelina Mai</span>
            <span>Toronto, Canada ↗</span>
          </div>

          <div className="hero-section__grid">
            <div className="hero-section__copy">
              <EditorialLabel>Front-End Developer</EditorialLabel>
              <h1 id="hero-heading">
                <span>Front-End </span>
                <span>Developer.</span>
              </h1>
              <p className="hero-section__lede">
                I design and build polished React products from interface to
                integration. Clean UI, real constraints, fewer mystery divs.
              </p>
              <p className="hero-section__stack">
                React / TypeScript / Next.js
              </p>
              <a className="hero-section__cta" href="#work">
                <span>See the shipped stuff</span>
                <FaArrowDown aria-hidden="true" />
              </a>
            </div>

            <HeroMark />
          </div>
        </section>

        <ExperienceSection />
        <SelectedWorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="site-footer">
        <p>Designed and built by Angelina Mai. Yes, the CSS is mine.</p>
        <p>React / Vite / Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
