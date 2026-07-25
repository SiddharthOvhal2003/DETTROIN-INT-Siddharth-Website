import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function CallToAction({
  badge = "Admissions Open",
  title,
  description,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-white/10 p-10 backdrop-blur-md md:p-16"
        >
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-blue-100">
                {badge}
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                {title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={primaryButton.link}
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >
                {primaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {secondaryButton && (
                <Link
                  to={secondaryButton.link}
                  className="inline-flex items-center justify-center rounded-xl border border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;