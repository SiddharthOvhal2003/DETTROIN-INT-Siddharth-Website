import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "2500+",
    title: "Students",
  },
  {
    icon: Users,
    number: "120+",
    title: "Experienced Faculty",
  },
  {
    icon: Trophy,
    number: "25+",
    title: "Years of Excellence",
  },
  {
    icon: BookOpen,
    number: "100%",
    title: "Academic Support",
  },
];

function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>

              <h2 className="text-4xl font-bold text-slate-900">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-500">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;