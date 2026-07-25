import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Laptop,
  Users,
} from "lucide-react";

const approaches = [
  {
    title: "Concept-Based Learning",
    description:
      "Students develop a strong understanding of concepts through interactive lessons and practical applications.",
    icon: BookOpen,
  },
  {
    title: "Critical Thinking",
    description:
      "Activities encourage students to analyze, question, and solve real-world problems with confidence.",
    icon: BrainCircuit,
  },
  {
    title: "Technology Integration",
    description:
      "Smart classrooms and digital learning tools create an engaging and future-ready learning environment.",
    icon: Laptop,
  },
  {
    title: "Collaborative Learning",
    description:
      "Teamwork, communication, and project-based activities help students learn together and grow together.",
    icon: Users,
  },
];

function LearningApproach() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Learning Approach
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Education Beyond the Classroom
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We combine academic excellence with creativity, collaboration,
            and technology to prepare students for lifelong success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {approaches.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-all group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LearningApproach;