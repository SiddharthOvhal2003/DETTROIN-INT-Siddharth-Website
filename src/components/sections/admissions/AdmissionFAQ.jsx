import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When does the admission process begin?",
    answer:
      "Admissions generally begin before the start of the new academic session. Please contact the admissions office for the latest schedule.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply by filling out the admission form and submitting the required documents to the school office.",
  },
  {
    question: "What documents are required?",
    answer:
      "Birth certificate, previous academic records (if applicable), passport-size photographs, address proof, and a valid ID proof.",
  },
  {
    question: "Is school transport available?",
    answer:
      "Yes. Transportation facilities are available for selected routes. Please contact the school office for route details.",
  },
  {
    question: "Who should I contact for admission queries?",
    answer:
      "You can reach our admissions office by phone, email, or by visiting the school campus during working hours.",
  },
];

function AdmissionFAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Here are answers to some of the most common admission-related
            questions.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default AdmissionFAQ;