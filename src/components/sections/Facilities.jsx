import { motion } from "framer-motion";
import {
  Computer,
  Microscope,
  Dumbbell,
  Library,
} from "lucide-react";

import computerLab from "@/assets/images/facilities/computer-lab.jpg";
import scienceLab from "@/assets/images/facilities/science-lab.jpg";
import sports from "@/assets/images/facilities/sports.jpg";
import library from "@/assets/images/facilities/library.jpg";

const facilities = [
  {
    title: "Computer Laboratory",
    description:
      "Modern computer labs equipped with the latest systems to help students build strong digital skills.",
    icon: Computer,
    image: computerLab,
  },
  {
    title: "Science Laboratories",
    description:
      "Well-equipped Physics, Chemistry and Biology labs encourage practical learning and scientific thinking.",
    icon: Microscope,
    image: scienceLab,
  },
  {
    title: "Sports & Fitness",
    description:
      "A variety of indoor and outdoor sports help students stay active, disciplined and healthy.",
    icon: Dumbbell,
    image: sports,
  },
  {
    title: "Modern Library",
    description:
      "A rich collection of books, journals and digital resources that promote reading and lifelong learning.",
    icon: Library,
    image: library,
  },
];

function Facilities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Facilities
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Learning Beyond The Classroom
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our campus provides world-class facilities that support academics,
            creativity, sports and holistic development.
          </p>
        </motion.div>

        {/* Facility List */}

        <div className="space-y-24">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-slate-900">
                    {facility.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Facilities;