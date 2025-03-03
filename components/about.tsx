"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import founder from "../public/assets/founder.png";

export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="about-us"
            className="px-4 sm:px-2 lg:px-12 py-20 bg-black text-white"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Meet Our Founder &amp; Head Coach
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center"
                    >
                        <Image
                            src={founder}
                            alt="Deena Dhayalan"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:w-1/2 ml-3"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            Deena Dhayalan
                        </h3>
                        <p className="text-lg mb-4">
                            Certified Fitness Trainer &amp; Nutrition Coach
                        </p>
                        <p className="text-gray-300 mb-6">
                            Passionate Visionary, Certified Fitness Trainer
                            &amp; Nutrition Coach founded High On with a great
                            mission: to inspire people to prioritize their
                            health and embrace an active lifestyle.
                        </p>
                        <p className="text-gray-300 mb-6">
                            With 10+ years of experience in bringing
                            unparalleled expertise and a personal touch to every
                            aspect of our gym.
                        </p>
                        <blockquote className="italic text-yellow-400 border-l-4 border-yellow-400 pl-4 mb-6">
                            &#x201C; Fitness is not just about working out; it's
                            about building a better version of yourself every
                            day.&#x201D;
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
