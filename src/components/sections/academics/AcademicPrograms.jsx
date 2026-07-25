import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const programs = [
  {
    title: "Primary Education",
    subtitle: "Grades I – V",
    description:
      "A nurturing environment focused on curiosity, creativity, communication, and strong academic foundations.",
    icon: GraduationCap,
  },
  {
    title: "Middle School",
    subtitle: "Grades VI – VIII",
    description:
      "Students strengthen conceptual understanding, analytical thinking, and collaborative learning skills.",
    icon: BookOpen,
  },
  {
    title: "Senior School",
    subtitle: "Grades IX – XII",
    description:
      "Preparing students for higher education through academic excellence, leadership, and career readiness.",
    icon: Trophy,
  },
];

function AcademicPrograms() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Academic Programs
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            A Learning Journey for Every Stage
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Age-appropriate academic programs designed to develop confident,
            curious, and future-ready learners.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold">{program.title}</h3>

                <p className="mt-2 font-medium text-blue-600">
                  {program.subtitle}
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AcademicPrograms;