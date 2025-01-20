"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Gallery() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const images = [
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
        "/placeholder.svg?height=600&width=400",
    ];

    return (
        <section
            id="gallery"
            ref={ref}
            className="sm:px-2 px-4 lg:px-12 py-20 bg-black text-white overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4"
            >
                <h2 className="text-5xl font-bold text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-yellow-400"
                    >
                        WORLD CLASS
                    </motion.span>
                    <br />
                    FITNESS ENVIRONMENT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative aspect-square overflow-hidden rounded-lg"
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
