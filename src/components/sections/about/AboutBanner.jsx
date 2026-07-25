import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function AboutBanner() {
  return (
    <section className="relative mt-20 h-[350px] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
        alt="About KIS Aligarh"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold md:text-5xl"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl px-4 text-lg text-slate-200"
          >
            Discover our journey, values, and commitment to providing quality
            education for every student.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm"
          >
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="text-blue-300">About</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutBanner;