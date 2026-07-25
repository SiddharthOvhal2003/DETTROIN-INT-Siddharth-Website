import { motion } from "framer-motion";
import {
  Search,
  FileText,
  FileCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "Inquiry",
    description:
      "Connect with our admissions team to learn about the school, curriculum, and admission schedule.",
    icon: Search,
  },
  {
    title: "Application",
    description:
      "Complete the admission form with the required student and parent information.",
    icon: FileText,
  },
  {
    title: "Document Verification",
    description:
      "Submit the required documents for verification and eligibility review.",
    icon: FileCheck,
  },
  {
    title: "Interaction",
    description:
      "Students and parents may be invited for an interaction based on the admission process.",
    icon: Users,
  },
  {
    title: "Admission Confirmation",
    description:
      "After successful verification, complete the formalities to confirm admission.",
    icon: BadgeCheck,
  },
];

function AdmissionProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Admission Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Admission in 5 Simple Steps
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We've designed a simple and transparent admission process to make
            your experience smooth and hassle-free.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="relative rounded-3xl bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div className="mx-auto mb-6 mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;