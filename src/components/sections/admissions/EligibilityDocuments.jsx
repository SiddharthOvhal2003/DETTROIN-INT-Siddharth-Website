import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  CheckCircle2,
} from "lucide-react";

const eligibility = [
  "Admissions are open for Nursery to Grade XII.",
  "Age criteria apply as per the school's admission policy.",
  "Previous academic records may be required for higher grades.",
  "Admissions are subject to seat availability.",
];

const documents = [
  "Birth Certificate",
  "Previous Academic Report Card",
  "Transfer Certificate (if applicable)",
  "Passport-size Photographs",
  "Aadhaar Card / Valid ID Proof",
  "Address Proof of Parent/Guardian",
];

function EligibilityDocuments() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Eligibility & Documents
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything You Need Before Applying
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Please review the eligibility requirements and keep the necessary
            documents ready before beginning the admission process.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Eligibility */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-md"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Eligibility
              </h3>
            </div>

            <div className="space-y-5">
              {eligibility.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Documents */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-md"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Required Documents
              </h3>
            </div>

            <div className="space-y-5">
              {documents.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EligibilityDocuments;