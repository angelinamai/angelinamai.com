type SectionHeaderProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeader({ id, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
