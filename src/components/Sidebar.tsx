import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "apps", label: "Apps" },
  { id: "skills", label: "Skills" },
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

type SidebarProps = {
  activeId: string;
};

function Sidebar({ activeId }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a
          href="#top"
          className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Angelina Mai
          </h1>
        </a>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">
          Front-End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
          I build accessible, responsive websites and React applications for
          people and small businesses.
        </p>

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
