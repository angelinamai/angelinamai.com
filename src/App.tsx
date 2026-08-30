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
import { tracyCaseStudy } from "./data/caseStudies";
import { appProjects, featuredProjects, type Project } from "./data/projects";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = ["experience", "work", "about", "skills", "contact"];

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

function formatShowcaseNumber(number: string) {
  return `${number.padStart(2, "0")} / ${featuredProjects.length
    .toString()
    .padStart(2, "0")}`;
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
}: {
  project: Project;
  number: string;
  priority?: boolean;
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
          <span>{formatShowcaseNumber(number)}</span>
          <span>{project.name}</span>
          <span>Desktop / Production</span>
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
        <h3>{project.name}</h3>
        {project.roleContext && (
          <p className="project-context">{project.roleContext}</p>
        )}
        <p className="project-deck">{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
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
        <h3>{project.name}</h3>
        {project.roleContext && (
          <p className="project-context">{project.roleContext}</p>
        )}
        <p className="project-deck">{project.description}</p>
        <TechLine items={project.keyTechnologies.slice(0, 4)} />
      </div>

      <ProjectShowcaseFrame project={project} number={number} />

      <div className="client-aside__details">
        <ProjectMetadata project={project} />
        <ProjectActions project={project} />
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
      <ProjectArchive />
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
        <h2 id="about-heading">Okay, who is Angelina?</h2>
      </div>

      <div className="about-section__copy">
        <p>
          I&apos;m Angelina. I build websites and web apps for a living, which
          mostly means turning perfectly reasonable-looking designs into 47 very
          specific decisions nobody warned you about.
        </p>
        <p>
          I work with React, TypeScript, and Next.js. I care way too much about
          spacing, buttons that actually feel clickable, and whether something
          looks weird by three pixels. Unfortunately, I will notice.
        </p>
        <p>
          I like the part of frontend where design meets reality: where
          &quot;just make it responsive&quot; becomes six screen sizes, three
          edge cases, one suspicious API response, and somehow a perfectly
          normal Tuesday.
        </p>
        <p>
          And I&apos;m stubborn about the final 10%. If the client isn&apos;t
          happy yet, I&apos;m not done. I&apos;ll keep tweaking, fixing, and
          probably staring at that one button until we both stop having opinions
          about it.
        </p>
      </div>

      <aside className="about-section__rules" aria-label="Working style">
        <p className="about-section__rules-kicker">How I work</p>
        <ul>
          <li>
            <span>01</span>
            <strong>Turn loose requirements into clear user flows.</strong>
          </li>
          <li>
            <span>02</span>
            <strong>
              Build responsive UI that holds up past the happy path.
            </strong>
          </li>
          <li>
            <span>03</span>
            <strong>
              Debug the awkward bits: state, APIs, auth, and deployment.
            </strong>
          </li>
        </ul>
        <p className="about-section__rules-note">
          The tiny details are where the product either feels finished or starts
          quietly judging everyone involved.
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

function CaseStudySections() {
  return (
    <div className="case-study-sections">
      {tracyCaseStudy.sections.map((section) => (
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

function TracyCaseStudyPage() {
  return (
    <main className="case-study-page">
      <section className="case-study-hero" aria-labelledby="case-study-heading">
        <a className="case-study-back" href="/#work">
          <FaArrowLeft aria-hidden="true" />
          Back to selected work
        </a>

        <div className="case-study-hero__grid">
          <div>
            <EditorialLabel>{tracyCaseStudy.eyebrow}</EditorialLabel>
            <h1 id="case-study-heading">{tracyCaseStudy.title}</h1>
            <p className="case-study-hero__summary">{tracyCaseStudy.summary}</p>
            <TechLine items={tracyCaseStudy.stack.slice(0, 5)} />
            <ProjectActions project={tracyProject} includeCaseStudy={false} />
          </div>

          <dl className="case-study-hero__meta">
            {tracyCaseStudy.meta.map((item) => (
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
        aria-label="Tracy Counselling previews"
      >
        <ProjectShowcaseFrame project={tracyProject} number="01" priority />
      </section>

      <CaseStudySections />
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
  const isTracyCaseStudy =
    window.location.pathname === "/case-studies/tracy-counselling";

  useEffect(() => {
    document.title = isTracyCaseStudy
      ? "Tracy Counselling Case Study | Angelina Mai"
      : "Angelina Mai | Front-End Developer · React · Next.js";
  }, [isTracyCaseStudy]);

  if (isTracyCaseStudy) {
    return (
      <div
        id="top"
        className={`site-shell site-shell--${designVariant}`}
        data-design-variant={designVariant}
      >
        <TopNav activeId="work" navBasePath="/" />
        <TracyCaseStudyPage />
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
                I turn &quot;it should be pretty simple&quot; into production
                code.
              </p>
              <p className="hero-section__stack">
                React · TypeScript · Next.js · APIs
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

      <SiteFooter />
    </div>
  );
}

export default App;
