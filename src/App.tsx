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

const protectedEmailParts = ["angelinamai8386", "gmail", "com"];

const contactLinks = [
  {
    label: "Email",
    detail: "Click to email",
    href: "#contact",
    icon: FaEnvelope,
    kind: "email",
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

function getProtectedEmailHref() {
  const [name, host, tld] = protectedEmailParts;

  return `mailto:${name}@${host}.${tld}`;
}

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
  },
  {
    number: "03",
    project: swimProject,
  },
];

const projectMetadata: Record<string, { label: string; value: string }[]> = {
  "tracy-counselling": [
    { label: "Role", value: "Front-End Developer" },
    { label: "Year", value: "2025" },
    {
      label: "Focus",
      value:
        "Authentication, database-backed features, payments, email flows, responsive UI",
    },
  ],
  "angelina-interpreting": [
    { label: "Role", value: "Front-End Developer" },
    {
      label: "Focus",
      value:
        "Bilingual content, service pages, scheduling flow, responsive UI",
    },
  ],
  "swim-with-leah": [
    { label: "Role", value: "Front-End Developer" },
    {
      label: "Focus",
      value: "Lesson sections, booking calls to action, contact flow, responsive UI",
    },
  ],
  "vegan-restaurant": [
    { label: "Role", value: "Front-End Developer" },
    {
      label: "Focus",
      value: "Menu sections, gallery, ordering contact paths, responsive UI",
    },
  ],
};

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

function projectEyebrow(number: string) {
  return `${number} — SELECTED WORK`;
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
      <picture>
        {project.mobileScreenshot && (
          <source
            media="(max-width: 640px)"
            srcSet={project.mobileScreenshot}
            width={project.mobileScreenshotWidth}
            height={project.mobileScreenshotHeight}
          />
        )}
        <img
          src={project.screenshot}
          alt={`${project.name} project preview`}
          width={project.screenshotWidth}
          height={project.screenshotHeight}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            objectPosition: project.screenshotPosition ?? "top center",
          }}
        />
      </picture>
    </div>
  );
}

function TechLine({ items }: { items: string[] }) {
  return <p className="tech-line">{items.join(" · ")}</p>;
}

function ProjectMetadata({ project }: { project: Project }) {
  const rows = projectMetadata[project.id] ?? [
    { label: "Role", value: project.roleContext ?? project.context },
    { label: "Focus", value: project.uiFocus },
  ];

  return (
    <dl className="project-meta">
      {rows.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
      <div>
        <dt>Stack</dt>
        <dd>{project.keyTechnologies.join(" · ")}</dd>
      </div>
    </dl>
  );
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
      <div className="flagship-project__intro">
        <p className="project-number">{projectEyebrow("01")}</p>
        <div>
          <h3>{project.name}</h3>
          <p className="project-deck">
            Production React application for a private counselling practice.
          </p>
          <TechLine items={["React", "Vite", "Clerk", "Supabase", "Stripe"]} />
        </div>
      </div>

      <ProjectMedia project={project} priority variant="flagship" />

      <div className="flagship-project__details">
        <ProjectMetadata project={project} />
        <ArrowLink href={project.liveUrl}>View live site</ArrowLink>
      </div>
    </article>
  );
}

function SupportingProject({
  number,
  project,
}: {
  number: string;
  project: Project;
}) {
  return (
    <article className="project-strip">
      <div className="project-strip__intro">
        <p className="project-number">{projectEyebrow(number)}</p>
        <h3>{project.name}</h3>
        <p className="project-deck">{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
      </div>

      <ProjectMedia project={project} variant="mini" />

      <div className="project-strip__details">
        <ProjectMetadata project={project} />
        <ArrowLink href={project.liveUrl}>View live site</ArrowLink>
      </div>
    </article>
  );
}

function ClientAside({ number, project }: { number: string; project: Project }) {
  return (
    <article className="client-aside">
      <div className="client-aside__intro">
        <p className="project-number">{projectEyebrow(number)}</p>
        <h3>{project.name}</h3>
        <p className="project-deck">{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
      </div>

      <ProjectMedia project={project} variant="archive" />

      <div className="client-aside__details">
        <ProjectMetadata project={project} />
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
          />
        ))}
      </div>

      <ClientAside number="04" project={veganProject} />
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
          I&apos;m a front-end developer in Richmond Hill focused on React,
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
          <span>I should probably give you a way to reach me.</span>
        </h2>
        <p>
          Open to Front-End Developer, React Developer, and UI Engineer
          opportunities where product thinking, UI polish, and careful
          implementation all matter.
        </p>
      </div>

      <div className="contact-links">
        {contactLinks.map(({ label, detail, href, icon: Icon, kind }) => {
          const isProtectedEmail = kind === "email";
          const content = (
            <>
              <span>
                <Icon aria-hidden="true" />
                {label}
              </span>
              <small>{detail}</small>
            </>
          );

          if (isProtectedEmail) {
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  window.location.href = getProtectedEmailHref();
                }}
              >
                {content}
              </button>
            );
          }

          return (
            <a key={href} href={href} {...linkProps(href)}>
              {content}
            </a>
          );
        })}
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
            <span>Richmond Hill, Canada ↗</span>
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
