import { motion } from "framer-motion";
import academicsBanner from "@/assets/images/academics/primary.jpg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function AcademicsBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img
        src={academicsBanner}
        alt="Students learning"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-200">
            Academics
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Building Bright Futures
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Our academic programs encourage curiosity, critical thinking,
            creativity, and lifelong learning in a supportive environment.
          </p>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-200">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="text-blue-300">
              Academics
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AcademicsBanner;