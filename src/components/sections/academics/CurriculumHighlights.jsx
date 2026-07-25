import { motion } from "framer-motion";
import {
  FlaskConical,
  Globe,
  MonitorSmartphone,
  Music,
  Dumbbell,
  Palette,
} from "lucide-react";

const curriculum = [
  {
    title: "STEM Education",
    icon: FlaskConical,
  },
  {
    title: "Digital Learning",
    icon: MonitorSmartphone,
  },
  {
    title: "Languages",
    icon: Globe,
  },
  {
    title: "Arts & Creativity",
    icon: Palette,
  },
  {
    title: "Music & Performing Arts",
    icon: Music,
  },
  {
    title: "Sports & Wellness",
    icon: Dumbbell,
  },
];

function CurriculumHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Curriculum Highlights
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Holistic Learning Experience
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            A balanced curriculum that combines academics, creativity,
            innovation, leadership, and personal development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-5 rounded-2xl border bg-slate-50 p-6 transition hover:border-blue-500 hover:bg-white hover:shadow-lg"
              >
                <div className="rounded-xl bg-blue-100 p-4">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CurriculumHighlights;