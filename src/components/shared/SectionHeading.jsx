import { motion } from "framer-motion";

function SectionHeading({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      {badge && (
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;