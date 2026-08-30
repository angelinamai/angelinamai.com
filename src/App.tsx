import "./App.css";
import { useEffect, type ReactNode } from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { caseStudies, type CaseStudy } from "./data/caseStudies";
import {
  allProjects,
  appProjects,
  featuredProjects,
  type Project,
} from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = [
  "experience",
  "work",
  "about",
  "skills",
  "react-projects",
  "contact",
];

const designVariantIds = [
  "editorial",
  "gallery",
  "casefile",
  "studio",
  "product",
] as const;

type DesignVariant = (typeof designVariantIds)[number];

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "react-projects", label: "React Projects" },
  { id: "contact", label: "Contact" },
];

const experienceBullets = [
  "Built responsive React UI components from Figma wireframes and product requirements.",
  "Connected front-end features to REST API-backed data and debugged the usual suspects: rendering, state, and UI behavior.",
  "Collaborated through GitHub, code reviews, stand-ups, and sprint planning within a professional development team.",
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
  "Vite",
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
const favoriteAppProjectId = "fast-react-pizza";
const orderedAppProjects = [
  ...appProjects.filter((project) => project.id === favoriteAppProjectId),
  ...appProjects.filter((project) => project.id !== favoriteAppProjectId),
];

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
    {
      label: "Problem",
      value:
        "Translate evolving counselling and course-access requirements into a clear bilingual visitor flow.",
    },
    {
      label: "Owned",
      value:
        "React routes, responsive UI, forms, debugging, deployment, and client feedback iterations.",
    },
    {
      label: "Engineering",
      value:
        "Clerk auth, Supabase purchase records, Stripe checkout, Express APIs, and Resend email handling.",
    },
  ],
  "angelina-interpreting": [
    {
      label: "Problem",
      value:
        "Visitors need to understand service types, language options, and booking paths quickly.",
    },
    {
      label: "Owned",
      value:
        "Next.js pages, bilingual content, service sections, schedule/contact flows, and responsive UI.",
    },
    {
      label: "Engineering",
      value:
        "Language state, schedule request handling, metadata, structured data, and analytics.",
    },
  ],
  "swim-with-leah": [
    {
      label: "Problem",
      value:
        "Families and adult swimmers need lesson options, credentials, service areas, and an easy inquiry path.",
    },
    {
      label: "Owned",
      value:
        "Next.js layout, responsive lesson sections, contact form route, SEO metadata, and deployment.",
    },
    {
      label: "Engineering",
      value:
        "TypeScript components, Resend contact handling, structured data, and analytics.",
    },
  ],
  "vegan-restaurant": [
    {
      label: "Problem",
      value:
        "Customers need a phone-friendly menu and direct ordering details.",
    },
    {
      label: "Owned",
      value:
        "Menu/gallery sections, Vietnamese content hierarchy, contact CTAs, and responsive layout.",
    },
    {
      label: "Engineering",
      value:
        "Next.js sections, image-driven menu cards, phone/Zalo paths, SEO metadata, and analytics.",
    },
  ],
};

function findCaseStudyByPath(pathname: string) {
  const match = pathname.match(/^\/case-studies\/([^/]+)\/?$/);
  const slug = match?.[1];

  return slug
    ? caseStudies.find((caseStudy) => caseStudy.slug === slug)
    : undefined;
}

function findProjectForCaseStudy(caseStudy: CaseStudy) {
  return allProjects.find((project) => project.id === caseStudy.projectId);
}

function getProjectShowcaseNumber(project: Project) {
  if (project.category === "featured") {
    const featuredIndex = featuredProjects.findIndex(
      (item) => item.id === project.id,
    );

    return String(Math.max(featuredIndex + 1, 1)).padStart(2, "0");
  }

  const appIndex = orderedAppProjects.findIndex(
    (item) => item.id === project.id,
  );

  return String(Math.max(appIndex + 1, 1)).padStart(2, "0");
}

function getProjectShowcaseTotal(project: Project) {
  return project.category === "featured"
    ? featuredProjects.length
    : orderedAppProjects.length;
}

function getProjectShowcaseLabel(project: Project) {
  return project.category === "featured"
    ? "Desktop / Production"
    : "Desktop / React App";
}

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

function isDesignVariant(value: string): value is DesignVariant {
  return designVariantIds.includes(value as DesignVariant);
}

function getDesignVariant(): DesignVariant {
  const queryVariant = new URLSearchParams(window.location.search).get(
    "variant",
  );
  const envVariant = import.meta.env.VITE_PORTFOLIO_VARIANT;
  const requestedVariant = (
    queryVariant ||
    envVariant ||
    "editorial"
  ).toLowerCase();

  return isDesignVariant(requestedVariant) ? requestedVariant : "editorial";
}

function projectEyebrow(number: string) {
  return `${number} — SELECTED WORK`;
}

function formatShowcaseNumber(number: string, total = featuredProjects.length) {
  return `${number.padStart(2, "0")} / ${total.toString().padStart(2, "0")}`;
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
  variant?: "ink" | "light" | "solid";
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

function TopNav({
  activeId,
  navBasePath = "",
}: {
  activeId: string;
  navBasePath?: string;
}) {
  const sectionHref = (id: string) => `${navBasePath}#${id}`;

  return (
    <header className="site-nav">
      <a
        className="site-nav__brand"
        href={navBasePath ? "/" : "#top"}
        aria-label="Angelina Mai portfolio home"
      >
        AM
      </a>

      <nav className="site-nav__links" aria-label="Primary navigation">
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={sectionHref(item.id)}
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
      <p className="hero-mark__monogram">AM</p>
      <span className="hero-mark__rule" />
    </div>
  );
}

function ProjectShowcaseFrame({
  project,
  number,
  priority = false,
  total = featuredProjects.length,
  frameLabel = getProjectShowcaseLabel(project),
}: {
  project: Project;
  number: string;
  priority?: boolean;
  total?: number;
  frameLabel?: string;
}) {
  const desktopAlt =
    project.screenshotAlt ?? `${project.name} desktop project preview.`;

  return (
    <div className="project-showcase-frame">
      <a
        className="project-showcase-frame__link"
        href={project.liveUrl}
        {...linkProps(project.liveUrl)}
        aria-label={`Open ${project.name} live project`}
      >
        <div className="project-showcase-frame__header" aria-hidden="true">
          <span>{formatShowcaseNumber(number, total)}</span>
          <span>{project.name}</span>
          <span>{frameLabel}</span>
        </div>

        <div className="project-showcase-frame__mat">
          <div className="project-showcase-frame__viewport">
            <img
              src={project.screenshot}
              alt={desktopAlt}
              width={project.screenshotWidth}
              height={project.screenshotHeight}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              style={{
                objectPosition: project.screenshotPosition ?? "top center",
              }}
            />
          </div>
        </div>

        <div className="project-showcase-frame__footer" aria-hidden="true">
          <span>Angelina Mai — Selected Work</span>
          <span className="project-showcase-frame__mark" />
          <span>AM</span>
        </div>
      </a>
    </div>
  );
}

function TechLine({ items }: { items: string[] }) {
  return <p className="tech-line">{items.join(" · ")}</p>;
}

function ProjectActions({
  project,
  includeCaseStudy = true,
}: {
  project: Project;
  includeCaseStudy?: boolean;
}) {
  return (
    <div className="project-actions" aria-label={`${project.name} links`}>
      <ArrowLink href={project.liveUrl} variant="solid">
        View live site
      </ArrowLink>
      {includeCaseStudy && project.caseStudyUrl && (
        <ArrowLink href={project.caseStudyUrl}>Read case study</ArrowLink>
      )}
      {project.codeUrl && (
        <ArrowLink href={project.codeUrl}>View code</ArrowLink>
      )}
    </div>
  );
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
        <h2 id="experience-heading">Front-end work in a product team.</h2>
      </div>

      <div className="experience-panel">
        <div>
          <p className="experience-panel__role">
            Hit the Books · Front-End Developer (Contract)
          </p>
          <p className="experience-panel__status">2024</p>
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
          <p className="project-context">{project.roleContext}</p>
          <p className="project-deck">{project.description}</p>
          <TechLine items={project.keyTechnologies.slice(0, 5)} />
        </div>
      </div>

      <ProjectShowcaseFrame project={project} number="01" priority />

      <div className="flagship-project__details">
        <ProjectMetadata project={project} />
        <ProjectActions project={project} />
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
        <div>
          <h3>{project.name}</h3>
          {project.roleContext && (
            <p className="project-context">{project.roleContext}</p>
          )}
          <p className="project-deck">{project.description}</p>
          <TechLine items={project.keyTechnologies.slice(0, 4)} />
        </div>
      </div>

      <ProjectShowcaseFrame project={project} number={number} />

      <div className="project-strip__details">
        <ProjectMetadata project={project} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

function ClientAside({
  number,
  project,
}: {
  number: string;
  project: Project;
}) {
  return (
    <article className="client-aside">
      <div className="client-aside__intro">
        <p className="project-number">{projectEyebrow(number)}</p>
        <div>
          <h3>{project.name}</h3>
          {project.roleContext && (
            <p className="project-context">{project.roleContext}</p>
          )}
          <p className="project-deck">{project.description}</p>
          <TechLine items={project.keyTechnologies.slice(0, 4)} />
        </div>
      </div>

      <ProjectShowcaseFrame project={project} number={number} />

      <div className="client-aside__details">
        <ProjectMetadata project={project} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

function ReactProjectsSection() {
  return (
    <section
      id="react-projects"
      aria-labelledby="react-projects-heading"
      className="section react-projects-section"
    >
      <div className="section__index">05</div>
      <div className="react-projects-section__headline">
        <EditorialLabel>React Practice / Product Logic</EditorialLabel>
        <h2 id="react-projects-heading">Additional React Projects</h2>
        <p>State, routing, APIs, and ordering flows in compact React builds.</p>
      </div>

      <ul
        className="react-projects-grid"
        aria-label="Additional React projects"
      >
        {orderedAppProjects.map((project, index) => {
          const isFavoriteProject = project.id === favoriteAppProjectId;

          return (
            <li
              key={project.id}
              className={
                isFavoriteProject
                  ? "react-projects-grid__item react-projects-grid__item--featured"
                  : "react-projects-grid__item"
              }
            >
              <article className="react-projects-grid__card">
                <span className="react-projects-grid__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  {isFavoriteProject && (
                    <span className="react-projects-grid__tag">
                      Favorite React build
                    </span>
                  )}
                  <span className="react-projects-grid__name">
                    {project.name}
                  </span>
                  <span className="react-projects-grid__description">
                    {project.description}
                  </span>
                </span>
                <small>{project.keyTechnologies.slice(0, 4).join(" · ")}</small>
                <div
                  className="react-projects-grid__actions"
                  aria-label={`${project.name} links`}
                >
                  <ArrowLink href={project.liveUrl} variant="solid">
                    Live site
                  </ArrowLink>
                  {project.caseStudyUrl && (
                    <ArrowLink href={project.caseStudyUrl}>
                      Case study
                    </ArrowLink>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
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
        <h2 id="work-heading">Selected production projects.</h2>
        <p>
          React and Next.js work with real clients, real constraints, responsive
          UI, integrations, and public deployments.
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
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section about-section"
    >
      <div className="section__index">03</div>
      <div>
        <EditorialLabel>About</EditorialLabel>
        <h2 id="about-heading">About Angelina</h2>
      </div>

      <div className="about-section__copy">
        <p>
          I&apos;m Angelina, a front-end developer and enthusiastic
          problem-solver working with React, TypeScript, and Next.js.
        </p>
        <p>
          I care deeply about what I build, notice when something is off by
          three pixels, and don&apos;t give up easily in my work or in life. If
          the client isn&apos;t happy yet, I&apos;m not done.
        </p>
      </div>

      <aside className="about-section__rules" aria-label="Working style">
        <p className="about-section__rules-kicker">How I work</p>
        <ul>
          <li>
            <span>01</span>
            <strong>Translate open-ended requirements into clear flows.</strong>
          </li>
          <li>
            <span>02</span>
            <strong>
              Build responsive interfaces that stay clear across devices.
            </strong>
          </li>
          <li>
            <span>03</span>
            <strong>
              Debug the details across state, APIs, auth, and deployment.
            </strong>
          </li>
        </ul>
        <p className="about-section__rules-note">
          I keep refining until the interface feels reliable, usable, and ready
          for real people.
        </p>
      </aside>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section skills-section"
    >
      <div className="section__index">04</div>
      <div className="skills-section__headline">
        <EditorialLabel>Technical Capabilities</EditorialLabel>
        <h2 id="skills-heading">
          <span>Practical front-end </span>
          <span>skills.</span>
        </h2>
        <p>
          Tools I use to build responsive interfaces, connect product flows,
          debug edge cases, and ship polished front-end work.
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
      <div className="section__index">06</div>
      <div className="contact-section__headline">
        <EditorialLabel>Contact</EditorialLabel>
        <h2 id="contact-heading">
          <span>Front-end roles </span>
          <span>and product teams.</span>
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

function CaseStudySections({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="case-study-sections">
      {caseStudy.sections.map((section) => (
        <section className="case-study-section" key={section.title}>
          <h2>{section.title}</h2>
          <div>
            <p>{section.body}</p>
            {section.points && (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function CaseStudyPage({
  caseStudy,
  project,
}: {
  caseStudy: CaseStudy;
  project: Project;
}) {
  const backHref = project.category === "app" ? "/#react-projects" : "/#work";
  const backText =
    project.category === "app"
      ? "Back to React projects"
      : "Back to selected work";
  const showcaseNumber = getProjectShowcaseNumber(project);

  return (
    <main className="case-study-page">
      <section className="case-study-hero" aria-labelledby="case-study-heading">
        <a className="case-study-back" href={backHref}>
          <FaArrowLeft aria-hidden="true" />
          {backText}
        </a>

        <div className="case-study-hero__grid">
          <div>
            <EditorialLabel>{caseStudy.eyebrow}</EditorialLabel>
            <h1 id="case-study-heading">{caseStudy.title}</h1>
            <p className="case-study-hero__summary">{caseStudy.summary}</p>
            <TechLine items={caseStudy.stack.slice(0, 5)} />
            <ProjectActions project={project} includeCaseStudy={false} />
          </div>

          <dl className="case-study-hero__meta">
            {caseStudy.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="case-study-media"
        aria-label={`${project.name} project preview`}
      >
        <ProjectShowcaseFrame
          project={project}
          number={showcaseNumber}
          total={getProjectShowcaseTotal(project)}
          frameLabel={getProjectShowcaseLabel(project)}
          priority
        />
      </section>

      <CaseStudySections caseStudy={caseStudy} />
    </main>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Designed and built by Angelina Mai. Yes, the CSS is mine.</p>
      <p>React / Vite / Tailwind CSS</p>
    </footer>
  );
}

function App() {
  const activeId = useActiveSection(sectionIds);
  const designVariant = getDesignVariant();
  const currentCaseStudy = findCaseStudyByPath(window.location.pathname);
  const currentCaseStudyProject = currentCaseStudy
    ? findProjectForCaseStudy(currentCaseStudy)
    : undefined;

  useEffect(() => {
    document.title = currentCaseStudy
      ? `${currentCaseStudy.title} Case Study | Angelina Mai`
      : "Angelina Mai | Front-End Developer · React · Next.js";
  }, [currentCaseStudy]);

  if (currentCaseStudy && currentCaseStudyProject) {
    const caseStudyActiveId =
      currentCaseStudyProject.category === "app" ? "react-projects" : "work";

    return (
      <div
        id="top"
        className={`site-shell site-shell--${designVariant}`}
        data-design-variant={designVariant}
      >
        <TopNav activeId={caseStudyActiveId} navBasePath="/" />
        <CaseStudyPage
          caseStudy={currentCaseStudy}
          project={currentCaseStudyProject}
        />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div
      id="top"
      className={`site-shell site-shell--${designVariant}`}
      data-design-variant={designVariant}
    >
      <TopNav activeId={activeId} />

      <main>
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-section__topline">
            <span>Open to Front-End opportunities</span>
            <span>Richmond Hill, Canada ↗</span>
          </div>

          <div className="hero-section__grid">
            <div className="hero-section__copy">
              <p className="hero-section__name">Angelina Mai</p>
              <EditorialLabel>Front-End Developer</EditorialLabel>
              <h1 id="hero-heading">
                <span>Front-End </span>
                <span>Developer.</span>
              </h1>
              <p className="hero-section__lede">
                I turn &quot;Can we also...&quot; into clean, production-ready
                code.
              </p>
              <p className="hero-section__stack">
                React · TypeScript · Next.js · APIs
              </p>
              <a className="hero-section__cta" href="#work">
                <span>View selected work</span>
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
        <ReactProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
