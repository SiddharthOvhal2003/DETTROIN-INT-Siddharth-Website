import { motion } from "framer-motion";

function LearningEnvironment() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Learning Environment
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            A Campus That Inspires Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Every classroom, laboratory, library, and activity space is designed
            to encourage curiosity, collaboration, and lifelong learning,
            helping students grow academically and personally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default LearningEnvironment;