import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import primaryImg from "@/assets/images/academics/primary.jpg";
import middleImg from "@/assets/images/academics/middle.jpg";
import seniorImg from "@/assets/images/academics/senior.jpg";

const academics = [
  {
    title: "Primary School",
    image: primaryImg,
    description:
      "Building strong foundations through engaging, activity-based learning.",
  },
  {
    title: "Middle School",
    image: middleImg,
    description:
      "Developing critical thinking, creativity, and confidence for future success.",
  },
  {
    title: "Senior School",
    image: seniorImg,
    description:
      "Preparing students for higher education through academic excellence and leadership.",
  },
];

function Academics() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Academics
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Academic Excellence At Every Stage
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our curriculum is designed to inspire curiosity, develop essential
            skills, and prepare students for lifelong success.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {academics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <Button
                  variant="ghost"
                  className="mt-6 px-0 text-blue-600 hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;