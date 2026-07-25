import { motion } from "framer-motion";
import galleryBanner from "@/assets/images/gallery/gallery-banner.jpg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function GalleryBanner() {
  return (
    <section className="relative h-[450px] overflow-hidden">
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

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-200">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="text-blue-300">
              Gallery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GalleryBanner;