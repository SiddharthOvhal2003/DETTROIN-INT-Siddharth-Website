import { motion } from "framer-motion";

function LocationMap() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Find Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Visit Our Campus
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We welcome parents and students to visit our campus, explore our
            facilities, and experience our learning environment firsthand.
          </p>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >
          <iframe
            title="Krishna International School Location"
            src="https://www.google.com/maps?q=Krishna%20International%20School%20Aligarh&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default LocationMap;