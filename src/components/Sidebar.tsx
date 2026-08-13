import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa6";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:angelinamai8386@gmail.com",
    icon: FaEnvelope,
  },
  { label: "GitHub", href: "https://github.com/angelinamai", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angelina-mai-b7b9b1176/",
    icon: FaLinkedin,
  },
  { label: "Resume", href: "/angelina-mai-resume.pdf", icon: FaFilePdf },
];

const actionLinks = [
  { label: "View My Work", href: "#work" },
  { label: "View Resume", href: "/angelina-mai-resume.pdf" },
  { label: "GitHub", href: "https://github.com/angelinamai" },
];

type SidebarProps = {
  activeId: string;
};

function Sidebar({ activeId }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-300/90">
          Angelina Mai · Richmond Hill / Toronto
        </p>
        <a
          href="#top"
          className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Front-End Developer
          </h1>
        </a>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">
          React · TypeScript · Next.js · UI Engineering
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed text-slate-400">
          I build polished, accessible React interfaces and turn real
          requirements into responsive web experiences for users, clients, and
          product teams.
        </p>
        <ul className="mt-5 grid max-w-md gap-2 text-sm text-slate-400">
          {[
            "Shipped production client websites",
            "Owns UI from requirements through deployment",
            "Comfortable debugging across front-end and integrations",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid max-w-md grid-cols-2 gap-3 min-[460px]:flex min-[460px]:flex-wrap">
          {actionLinks.map(({ label, href }, index) => {
            const external = href.startsWith("http") || href.endsWith(".pdf");
            return (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={[
                  "inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70",
                  index === 0
                    ? "bg-teal-300 text-slate-950 hover:bg-teal-200"
                    : "border border-slate-700/70 text-slate-200 hover:border-teal-300/40 hover:bg-teal-300/10 hover:text-teal-100",
                ].join(" ")}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Section navigation with scroll-spy indicators */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1 focus:outline-none"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={[
                        "h-px transition-all duration-200 motion-reduce:transition-none",
                        isActive
                          ? "w-16 bg-teal-300"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300 group-focus-visible:w-16 group-focus-visible:bg-slate-300",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "text-xs font-bold uppercase tracking-widest transition-colors duration-200",
                        isActive
                          ? "text-teal-200"
                          : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex items-center gap-5" aria-label="Social links">
        {socialLinks.map(({ label, href, icon: Icon }) => {
          const external = href.startsWith("http") || href.endsWith(".pdf");
          return (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="block rounded text-slate-400 transition-colors hover:text-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
                aria-label={label}
                title={label}
              >
                <Icon aria-hidden="true" className="h-6 w-6" />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default Sidebar;
