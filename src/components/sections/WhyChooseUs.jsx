import { motion } from "framer-motion";
import {
  GraduationCap,
  MonitorSmartphone,
  Microscope,
  Trophy,
  ShieldCheck,
  Globe,
} from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description:
      "Dedicated educators committed to nurturing every student's potential.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    description:
      "Interactive digital classrooms with modern teaching technology.",
  },
  {
    icon: Microscope,
    title: "Advanced Laboratories",
    description:
      "Hands-on practical learning through well-equipped science and computer labs.",
  },
  {
    icon: Trophy,
    title: "Sports Excellence",
    description:
      "Balanced education with indoor, outdoor, and competitive sports activities.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description:
      "Secure campus with CCTV surveillance and student-friendly environment.",
  },
  {
    icon: Globe,
    title: "Holistic Development",
    description:
      "Academic excellence combined with leadership, creativity, and life skills.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <SectionHeading
          badge="Why Choose Us"
          title="Excellence Beyond The Classroom"
          description="Our school provides an inspiring learning environment where innovation, academic excellence, leadership, and character development come together."
        />


        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;