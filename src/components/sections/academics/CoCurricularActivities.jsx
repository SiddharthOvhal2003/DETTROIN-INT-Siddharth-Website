import { motion } from "framer-motion";
import {
  Trophy,
  Music2,
  Drama,
  Volleyball,
  Code,
  BookMarked,
} from "lucide-react";

const activities = [
  {
    title: "Sports",
    icon: Trophy,
  },
  {
    title: "Coding Club",
    icon: Code,
  },
  {
    title: "Music",
    icon: Music2,
  },
  {
    title: "Drama",
    icon: Drama,
  },
  {
    title: "Literary Club",
    icon: BookMarked,
  },
  {
    title: "Outdoor Games",
    icon: Volleyball,
  },
];

function CoCurricularActivities() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Beyond Academics
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Co-Curricular Activities
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Students participate in activities that build confidence,
            leadership, creativity, teamwork, and communication skills.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold">
                  {activity.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoCurricularActivities;