import { motion } from "framer-motion";
import galleryBanner from "@/assets/images/gallery/gallery-banner.jpg";

function GalleryBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img
        src={galleryBanner}
        alt="School gallery"
        className="h-full w-full object-cover object-[center_30%]"
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
            Gallery
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Moments That Inspire
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
            Explore memorable moments from academics, sports, cultural events,
            celebrations, and campus life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default GalleryBanner;