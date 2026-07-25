import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolStory from "@/assets/images/academics/middle.jpg";

const features = [
    "Experienced & Dedicated Faculty",
    "Modern Smart Classrooms",
    "Holistic Student Development",
    "Safe & Supportive Learning Environment",
];

function SchoolStory() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Our Story
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900">
                        Building Bright Futures Through Quality Education
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        KIS Aligarh has been committed to providing quality education that
                        nurtures academic excellence, creativity, and character
                        development. Our goal is to prepare students with the knowledge,
                        confidence, and values they need to succeed in an ever-changing
                        world.
                    </p>

                    <p className="mt-4 leading-8 text-slate-600">
                        We believe that education extends beyond the classroom. Through
                        modern teaching methods, extracurricular activities, and a
                        supportive environment, we encourage every student to discover
                        their true potential.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                                <span className="text-slate-700">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="mt-10 rounded-xl px-6 py-6">
                        Learn More
                    </Button>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={schoolStory}
                        alt="Students studying together"
                        className="h-full w-full rounded-3xl object-cover shadow-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default SchoolStory;