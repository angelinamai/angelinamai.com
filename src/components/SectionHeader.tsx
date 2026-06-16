type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  variant?: "dark" | "light";
};

function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  variant = "dark",
}: SectionHeaderProps) {
  const isLight = variant === "light";

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div>
        <p
          className={[
            "text-sm font-black uppercase",
            isLight ? "text-teal-700" : "text-lime-200",
          ].join(" ")}
        >
          {eyebrow}
        </p>
        <h2
          id={id}
          className={[
            "mt-4 max-w-3xl text-4xl font-black md:text-5xl",
            isLight ? "text-[#101723]" : "text-white",
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <p
        className={[
          "max-w-2xl text-base leading-8 md:text-lg lg:justify-self-end",
          isLight ? "text-slate-700" : "text-slate-300",
        ].join(" ")}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
