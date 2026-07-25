import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "School Address",
    content: [
      "Krishna International School",
      "Aligarh, Uttar Pradesh",
      "India",
    ],
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: Mail,
    title: "Email Address",
    content: ["info@krishnaschool.edu.in"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: [
      "Monday – Saturday",
      "8:00 AM – 4:00 PM",
    ],
  },
];

function ContactInfo() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Information
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            We're Always Happy to Help
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Reach out to us for admissions, academic information,
            campus visits, or any other queries. Our team will
            respond as soon as possible.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-blue-100 p-4">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <div className="space-y-2">
                  {item.content.map((line) => (
                    <p
                      key={line}
                      className="text-slate-600"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;