import "./App.css";
import Project from "./Project";
import myProjects from "./myprojects";

function App() {
  return (
    <div className="mx-4 md:mx-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#000000] mt-8 mb-4">
        Welcome, I'm a Frontend Developer
      </h1>
      <div className="py-5">
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          I love playing guitar, singing, cooking, playing poker, and laughing
          at silly things.
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          I have been working in the frontend development industry for over a
          year. My skills include HTML, CSS, JavaScript, React, and Tailwind.
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          I'm passionate about creating intuitive and dynamic user interfaces.
          My projects demonstrate my focus on high-quality code, attention to
          detail, and user experience.
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          Here are some of my projects.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl my-4">Projects</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      <div className="mx-auto w-full md:w-1/2 text-center mb-8">
        <a
          className="mx-5 md:mx-10"
          href="https://www.linkedin.com/in/ngoc-bich-mai-b7b9b1176/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedln
        </a>
        <a
          href="https://github.com/angelinamai"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
