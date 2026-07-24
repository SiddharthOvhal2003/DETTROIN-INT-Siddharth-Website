function SectionHeading({
  subtitle,
  title,
  description,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;