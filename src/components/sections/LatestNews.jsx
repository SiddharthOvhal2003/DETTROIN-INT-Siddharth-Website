import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

import news1 from "@/assets/images/news/news1.jpg";
import news2 from "@/assets/images/news/news2.jpg";
import news3 from "@/assets/images/news/news3.jpg";

const news = [
  {
    image: news1,
    date: "15 July 2026",
    title: "Annual Science Exhibition 2026",
    description:
      "Students showcased innovative science projects, encouraging creativity and practical learning.",
  },
  {
    image: news2,
    date: "05 July 2026",
    title: "Inter-School Sports Competition",
    description:
      "Our students participated in various sports events and secured multiple awards.",
  },
  {
    image: news3,
    date: "28 June 2026",
    title: "Cultural Fest Celebration",
    description:
      "A colorful celebration featuring music, dance, drama, and art performances by students.",
  },
];

function LatestNews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Latest News"
          title="News & Events"
          description="Stay updated with the latest events, achievements, and activities at our school."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-blue-600">
                  <CalendarDays className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

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
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;