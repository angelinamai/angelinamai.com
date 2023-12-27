import "./App.css";
import Project from "./Project";
import myProjects from "./myprojects";

function App() {
  return (
    <>
      <div className="mx-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#000000]">
          Welcome, I'm a Frontend Developer
        </h1>
        <div className="py-5">
          <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
            I love playing guitar, singing, cooking, playing poker and laughing
            at silly things.
          </p>
          <div className="space-y-3">
            <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
              I have been working in the frontend development industry for over
              a year. My skills include HTML, CSS, JavaScript, React, and
              Tailwind.
            </p>
            <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
              I'm passionate about creating intuitive and dynamic user
              interfaces. My projects demonstrate my focus on high-quality code,
              attention to detail, and user experience.
            </p>
            <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
              Here are some of my projects.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl my-4">Projects</h2>
          <div className="grid gap-4 grid-cols-4">
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
        </div>
        <div className="mx-auto w-1/2 text-center">
          <a
            className="mx-10"
            href="https://www.linkedin.com/in/ngoc-bich-mai-b7b9b1176/"
            target="_blank"
          >
            Linkedln
          </a>
          <a href="https://github.com/angelinamai" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
export default App;
