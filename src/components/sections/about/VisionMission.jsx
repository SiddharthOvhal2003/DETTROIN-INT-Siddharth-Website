import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

function VisionMission() {
  const cards = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "To inspire young minds through quality education, innovation, and lifelong learning while nurturing responsible citizens prepared for global challenges.",
      icon: Eye,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "To provide a safe, inclusive, and stimulating environment where students achieve academic excellence, develop strong values, and discover their unique potential.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Vision & Mission
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Guiding Every Student Towards Success
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Our vision and mission define everything we do—from delivering
            quality education to shaping confident, compassionate, and
            responsible future leaders.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VisionMission;