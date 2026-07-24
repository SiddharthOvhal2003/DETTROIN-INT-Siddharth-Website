import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Admissions Open 2026–27
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Shaping
            <span className="block text-blue-600">
              Future Leaders
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A modern learning environment focused on academic excellence,
            creativity, innovation, and holistic student development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-xl">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Explore Campus
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                2500+
              </h3>
              <p className="text-slate-500">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                120+
              </h3>
              <p className="text-slate-500">
                Faculty
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                25+
              </h3>
              <p className="text-slate-500">
                Years
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              alt="Students studying"
              className="h-[600px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;