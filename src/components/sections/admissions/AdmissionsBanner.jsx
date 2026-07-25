import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import admissionsBanner from "@/assets/images/admissions/admission-banner.jpg";

function AdmissionsBanner() {
  return (
    <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
      {/* Background Image */}
      <img
        src={admissionsBanner}
        alt="Admissions Banner"
        className="absolute inset-0 h-full w-full object-cover object-[center_12%] "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 mt-10 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
        >
          Admissions Open
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-4xl"
        >
          Begin Your Child's Journey Towards a Brighter Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-gray-200"
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
          className="mt-10 flex items-center gap-2 text-sm text-gray-200"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-blue-300">
            Admissions
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default AdmissionsBanner;