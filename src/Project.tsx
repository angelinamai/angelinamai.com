function Project({ name, img, description }: any) {
  return (
    <div className="bg-pink-100 p-5 rounded-md">
      <div className="text-2xl">{name}</div>
      <img className="rounded-md" src={img} />
      <div className="italic">{description}</div>
    </div>
  );
}

export default Project;
