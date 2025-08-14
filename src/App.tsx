import "./App.css";
import { FaFilePdf } from "react-icons/fa";
import myProjects from "./myprojects";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import Project from "./Project";

function App() {
  return (
    // Set the WHOLE page bg here (very light teal) and remove other bg colors elsewhere
    <div className="min-h-screen bg-[#EAF8F6] px-4 md:px-10">
      {/* HERO */}
      <section className="py-8 mb-2">
        {/* Keep the hero as a white card for contrast */}
        <div className="rounded-2xl border border-gray-200 bg-white/90 shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Hi, I’m <span className="text-teal-600">Angelina Mai</span> — I
            Build Fast, Accessible & Engaging Web Apps
          </h1>

          <div className="py-3 space-y-4 max-w-3xl">
            <p className="text-black text-base md:text-lg">
              I craft fast, accessible, and user-friendly web apps using{" "}
              <span className="text-teal-600 font-semibold">React</span>,{" "}
              <span className="text-teal-600 font-semibold">JavaScript</span>,
              and{" "}
              <span className="text-teal-600 font-semibold">Tailwind CSS</span>.
            </p>
            <p className="text-black text-base md:text-lg">
              I design interfaces that drive engagement, boost retention, and
              work flawlessly on any device.
            </p>
            <p className="text-black text-base md:text-lg">
              Committed to clean code, WCAG-compliant accessibility, and
              lightning-fast performance.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="/angelina-mai-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 hover:scale-105 transition"
            >
              <FaFilePdf /> View Résumé
            </a>

            <a
              href="https://github.com/angelinamai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold
                         border border-teal-600 text-teal-700 transition-all duration-200
                         hover:bg-teal-50 hover:shadow-md hover:scale-105
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              aria-label="GitHub (opens in new tab)"
            >
              <FaGithub size={18} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/angelina-mai-b7b9b1176/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold
                         border border-teal-600 text-teal-700 transition-all duration-200
                         hover:bg-teal-50 hover:shadow-md hover:scale-105
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              aria-label="LinkedIn (opens in new tab)"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Skills row */}
          <div className="mt-6">
            <ul className="flex flex-wrap gap-2">
              <li className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm">
                <SiReact className="text-teal-600" /> React
              </li>
              <li className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm">
                <SiJavascript className="text-teal-600" /> JavaScript
              </li>
              <li className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm">
                <SiTypescript className="text-teal-600" /> TypeScript
              </li>
              <li className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm">
                <SiTailwindcss className="text-teal-600" /> Tailwind CSS
              </li>
              {/* New: Git */}
              <li className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm">
                <SiGit className="text-teal-600" /> Git
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pb-10">
        <h2 className="mt-4 mb-8 text-2xl font-bold">Recent Work</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {myProjects.map((value, index) => (
            <Project
              key={index}
              name={value.name}
              description={value.description}
              img={value.img}
              link={value.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
