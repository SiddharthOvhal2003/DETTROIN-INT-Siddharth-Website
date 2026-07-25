import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Form
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Send Us a Message
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Have a question about admissions, academics, or campus life? Fill
            out the form below and our team will get back to you as soon as
            possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-slate-50 p-8 shadow-lg md:p-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-slate-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-slate-700"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-slate-700"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-slate-700"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="6"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Button */}
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactForm;