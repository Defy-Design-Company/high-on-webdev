"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Dumbbell,
    MonitorIcon as Running,
    Users,
    Music,
    PersonStanding,
    Flame,
    Heart,
    ClipboardCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        title: "FUNCTIONAL TRAINING",
        description:
            "Improve strength, flexibility, and efficiency for everyday movements",
        icon: PersonStanding,
    },
    {
        title: "MUSCLE BUILDING",
        description:
            "Build muscle mass with targeted strength-focused workouts",
        icon: Dumbbell,
    },
    {
        title: "BOXING",
        description:
            "Boost agility, strength, and endurance through boxing workouts",
        icon: Users,
    },
    {
        title: "ZUMBA",
        description:
            "Fun high-energy dance workouts for weight loss and fitness",
        icon: Music,
    },
    {
        title: "PERSONAL TRAINING",
        description:
            "Customized one-on-one sessions tailored to your fitness goals",
        icon: PersonStanding,
    },
    {
        title: "CROSS FIT / HIIT",
        description: "High intensity workouts to boost stamina and strength",
        icon: Flame,
    },
    {
        title: "CARDIO & CONDITIONING",
        description:
            "Improve heart health and endurance with targeted cardio sessions",
        icon: Heart,
    },
    {
        title: "FITNESS CONSULTATION",
        description:
            "Personalized fitness plans designed for sustainable health improvements",
        icon: ClipboardCheck,
    },
];

export function Services() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="services"
            ref={ref}
            className="sm:px-2 px-4 lg:px-12 py-20 bg-black text-white"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Elevate Your Fitness Journey with{" "}
                    <span className="text-yellow-400">
                        Customized Training Programs
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-400 transition-colors">
                                <CardContent className="p-6">
                                    <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
                                    <h3 className="text-lg text-white font-bold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
