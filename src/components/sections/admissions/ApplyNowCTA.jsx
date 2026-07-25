import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

function ApplyNowCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-14"
        >
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-blue-100">
                Admissions Open
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                Ready to Begin Your Child's Learning Journey?
              </h2>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Give your child the opportunity to learn, grow, and succeed in a
                supportive and inspiring environment. Our admissions team is
                here to guide you every step of the way.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
              >
                Start Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
              >
                Contact Us
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ApplyNowCTA;