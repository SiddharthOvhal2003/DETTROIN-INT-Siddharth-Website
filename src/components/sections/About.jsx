import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/images/about/about-1.jpg"; 

const features = [
  "Experienced & Qualified Faculty",
  "Smart Classrooms & Modern Labs",
  "Sports & Extracurricular Activities",
  "Safe and Student-Friendly Campus",
];

function About() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImage}
            alt="Students learning together"
            className="h-[550px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Our School
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Building Bright Futures Through Quality Education
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe education is more than academics. Our mission is to
            develop confident, creative, and responsible individuals through a
            supportive learning environment, modern teaching methods, and
            holistic development.
          </p>

          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>

          <Button className="mt-10 rounded-xl px-8 py-6">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;