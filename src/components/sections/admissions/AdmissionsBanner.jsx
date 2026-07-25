import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function AdmissionsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-blue-100"
        >
          Admissions Open
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Begin Your Child's Journey Towards a Brighter Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-blue-100"
        >
          We welcome students into a learning environment that encourages
          academic excellence, creativity, confidence, and holistic
          development.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-2 text-sm text-blue-100"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-semibold text-white">Admissions</span>
        </motion.div>
      </div>
    </section>
  );
}

export default AdmissionsBanner;