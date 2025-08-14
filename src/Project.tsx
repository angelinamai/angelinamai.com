type ProjectProps = {
  name: string;
  img: string;
  description: string;
  link: string;
  /** Optional: how the image should fit the 16:9 frame. Default "contain" shows the whole UI. */
  fit?: "cover" | "contain";
};

function Project({
  name,
  img,
  description,
  link,
  fit = "contain",
}: ProjectProps) {
  const isCover = fit === "cover";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm
                 transition-all duration-300 hover:border-teal-200 hover:shadow-md
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
    >
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>

      {/* Image frame (uniform 16:9 across all cards) */}
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
        <div className={`aspect-[16/9] ${isCover ? "" : "bg-slate-50"}`}>
          <img
            src={img}
            alt={`${name} screenshot`}
            loading="lazy"
            decoding="async"
            className={[
              "block w-full h-full transition-transform duration-300 group-hover:scale-[1.02]",
              isCover ? "object-cover" : "object-contain p-2 md:p-3",
            ].join(" ")}
          />
        </div>
      </div>

      <p
        className="mt-3 inline-block max-w-full break-words leading-relaxed
               bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
      >
        {description}
      </p>

      {/* Button */}
      <span
        className="mt-4 inline-flex w-[140px] items-center justify-center rounded-lg
                 bg-teal-600 px-3 py-1.5 text-sm font-medium text-white
                 hover:bg-teal-700 transition-transform duration-200 hover:scale-105"
      >
        View Project
      </span>
    </a>
  );
}

export default Project;
