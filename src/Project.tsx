function Project({ name, img, description, link }: any) {
  return (
    <a
      href={link}
      className="bg-pink-100 p-5 rounded-md hover:bg-slate-800 hover:text-white transition-all duration-500"
    >
      <div className="text-2xl">{name}</div>
      <div
        className="rounded-md bg-cover h-44 min-w-full border-2 border-pink-200"
        style={{ backgroundImage: `url("${img}")` }}
      />
      <div className="italic">{description}</div>
    </a>
  );
}

export default Project;
