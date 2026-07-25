import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function PageBanner({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
}) {
  return (
    <section className="relative mt-20 h-[350px] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold md:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl text-lg text-slate-200"
        >
          {subtitle}
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center gap-2 text-sm"
        >
          <Link
            to="/"
            className="transition hover:text-blue-300"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-blue-300">
            {title}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default PageBanner;