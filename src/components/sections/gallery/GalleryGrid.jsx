import { useState } from "react";
import { motion } from "framer-motion";

import academic1 from "@/assets/images/gallery/academic-1.jpg";
import sports1 from "@/assets/images/gallery/sports-1.jpg";
import event1 from "@/assets/images/gallery/event-1.jpg";
import campus1 from "@/assets/images/gallery/campus-1.jpg";
import lab1 from "@/assets/images/gallery/lab-1.jpg";
import cultural1 from "@/assets/images/gallery/cultural-1.jpg";

const categories = [
  "All",
  "Academics",
  "Sports",
  "Events",
  "Campus",
];

const images = [
  { src: academic1, category: "Academics" },
  { src: sports1, category: "Sports" },
  { src: event1, category: "Events" },
  { src: campus1, category: "Campus" },
  { src: lab1, category: "Academics" },
  { src: cultural1, category: "Events" },
];

function GalleryGrid() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? images
      : images.filter((img) => img.category === selected);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                selected === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image.src}
                alt={image.category}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;