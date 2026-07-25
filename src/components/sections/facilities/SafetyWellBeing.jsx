import { motion } from "framer-motion";
import { ShieldCheck, Camera, UserCheck } from "lucide-react";

const safetyFeatures = [
  {
    title: "Secure Campus",
    description: "24/7 monitored campus with controlled entry and exit points.",
    icon: ShieldCheck,
  },
  {
    title: "CCTV Surveillance",
    description: "Continuous monitoring to ensure a safe learning environment.",
    icon: Camera,
  },
  {
    title: "Qualified Staff",
    description: "Experienced teachers and trained support staff focused on student well-being.",
    icon: UserCheck,
  },
];

function SafetyWellBeing() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Safety & Well-being
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            A Safe and Supportive Campus
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Student safety and well-being remain at the heart of everything we do.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {safetyFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

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

export default SafetyWellBeing;