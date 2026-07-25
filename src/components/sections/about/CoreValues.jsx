import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Academic Excellence",
    description:
      "We encourage students to achieve their highest potential through quality education and continuous learning.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Creative thinking and modern teaching methods inspire curiosity and problem-solving abilities.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description:
      "Honesty, responsibility, and ethical behavior form the foundation of our school culture.",
    icon: ShieldCheck,
  },
  {
    title: "Respect",
    description:
      "We foster an inclusive environment where every individual is respected and valued.",
    icon: HeartHandshake,
  },
  {
    title: "Collaboration",
    description:
      "Students, teachers, and parents work together to create a positive learning community.",
    icon: Users,
  },
  {
    title: "Lifelong Learning",
    description:
      "We inspire curiosity and a passion for learning that extends beyond the classroom.",
    icon: BookOpen,
  },
];

function CoreValues() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Core Values
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            The Values That Shape Every Student
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our values guide every lesson, activity, and interaction,
            helping students become confident learners and responsible citizens.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;