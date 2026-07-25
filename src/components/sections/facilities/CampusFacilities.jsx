import { motion } from "framer-motion";
import {
  BookOpen,
  Bus,
  Computer,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  MonitorSmartphone,
  Palette,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Technology-enabled classrooms designed to make learning interactive and engaging.",
    icon: MonitorSmartphone,
  },
  {
    title: "Science Laboratories",
    description:
      "Modern Physics, Chemistry, and Biology labs that encourage hands-on experimentation.",
    icon: FlaskConical,
  },
  {
    title: "Computer Labs",
    description:
      "Well-equipped computer labs with the latest software and high-speed internet access.",
    icon: Computer,
  },
  {
    title: "Library",
    description:
      "A peaceful reading environment with a rich collection of books, journals, and digital resources.",
    icon: BookOpen,
  },
  {
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports facilities that promote fitness, teamwork, and discipline.",
    icon: Dumbbell,
  },
  {
    title: "Art & Activity Rooms",
    description:
      "Creative spaces where students explore music, art, dance, and cultural activities.",
    icon: Palette,
  },
  {
    title: "School Transport",
    description:
      "Safe and reliable transport services covering major areas with trained staff.",
    icon: Bus,
  },
  {
    title: "Medical Room",
    description:
      "Dedicated healthcare support with first-aid facilities and regular health checkups.",
    icon: HeartPulse,
  },
];

function CampusFacilities() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Campus Facilities
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything Students Need to Thrive
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our campus is designed to support academic excellence, creativity,
            innovation, and overall student development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {facility.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CampusFacilities;