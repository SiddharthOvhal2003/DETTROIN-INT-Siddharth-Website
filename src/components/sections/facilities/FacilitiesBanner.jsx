import { motion } from "framer-motion";
import facilitiesBanner from "@/assets/images/facilities/computer-lab.jpg";

function FacilitiesBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img
        src={facilitiesBanner}
        alt="School facilities"
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
            Facilities
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Inspiring Spaces for Better Learning
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Our modern campus provides students with the resources,
            technology, and environment needed to excel academically
            and personally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FacilitiesBanner;