import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function LeadershipPhilosophy() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Quote className="h-8 w-8 text-blue-600" />
          </div>

          <span className="mt-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Leadership & Philosophy
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Inspiring Every Child to Dream, Learn & Lead
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
            We believe education goes far beyond textbooks and examinations.
            Every student deserves an environment that encourages curiosity,
            critical thinking, creativity, confidence, and compassion. Our
            commitment is to empower learners with the knowledge, values, and
            life skills needed to thrive in an ever-changing world.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
            <blockquote className="text-2xl font-medium italic leading-10 text-slate-800">
              “Education is not about preparing students for exams.
              It is about preparing them for life.”
            </blockquote>

            <div className="mt-8">
              <div className="mx-auto h-1 w-16 rounded-full bg-blue-600"></div>

              <p className="mt-4 text-lg font-semibold text-slate-900">
                Our Educational Philosophy
              </p>

              <p className="mt-2 text-slate-500">
                Learning • Character • Innovation • Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipPhilosophy;