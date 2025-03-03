"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import image1 from "../public/assets/steam_bath.jpg";
import image2 from "../public/assets/darklighttheme_02.jpg";
import image3 from "../public/assets/equipment_02.jpg";
import image4 from "../public/assets/parking_02.jpg";

const amenities = [
    {
        title: "Steam/Ice Bath",
        description: "Rejuvenate with premium steam and ice baths",
        alt: "droplets",
        image: image1,
    },
    {
        title: "Light/Dark Themes",
        description: "Workout your way with light or dark ambiance",
        alt: "theme",
        image: image2,
    },
    {
        title: "World-Class Equipment",
        description: "Experience cutting-edge, modern gym equipment",
        alt: "dumbell",
        image: image3,
    },
    {
        title: "Spacious Parking",
        description: "Hassle-free parking for a seamless visit",
        alt: "parking",
        image: image4,
    },
];

export function Amenities() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="px-4  lg:px-12 sm:px-2 py-20 bg-zinc-900" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Discover Amenities That{" "}
                        <span className="text-yellow-400">
                            Redefine Excellence
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={amenity.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="relative h-[350px] sm:h-[550px] md:h-[350px] lg:h-[330px] overflow-hidden bg-zinc-800 border-zinc-700 hover:border-yellow-400 transition-colors group">
                                <CardContent className="relative w-full h-full">
                                    <Image
                                        style={{ objectFit: "cover" }}
                                        className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        src={amenity.image}
                                        alt={amenity.alt}
                                    />
                                    <div className="absolute inset-0 group-hover:bg-black/10 bg-black/60 transition-all duration-300 flex flex-col justify-center items-center text-center p-6">
                                        <h3 className="text-lg font-bold text-yellow-400 mb-2">
                                            {amenity.title}
                                        </h3>
                                        <p className="text-white text-sm">
                                            {amenity.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-zinc-400 text-center mt-12 max-w-3xl mx-auto"
                >
                    At High On, we go beyond workouts to provide an unmatched
                    fitness environment. Enjoy state-of-the-art equipment, a
                    modern steam and ice bath for relaxation, and spacious
                    parking for hassle-free access. Choose your vibe with our
                    dual light themes, tailored to enhance your workout
                    experience, and step into a world-class facility designed to
                    inspire and support your fitness goals.
                </motion.p>
            </div>
        </section>
    );
}
