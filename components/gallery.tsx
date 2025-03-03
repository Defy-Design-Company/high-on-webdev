"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../public/assets/1.jpg";
import image2 from "../public/assets/2.jpg";
import image3 from "../public/assets/3.jpg";
import image4 from "../public/assets/4.jpg";
import Image from "next/image";

export function Gallery() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const images = [image1, image2, image3, image4];

    return (
        <section
            id="gallery"
            ref={ref}
            className="sm:px-2 px-4 lg:px-12 py-20 bg-black text-white overflow-hidden relative"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4"
            >
                <h2 className="px-5 pointer-events-none w-screen text-5xl md:text-8xl lg:text-9xl font-bold text-center mb-16 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-yellow-400"
                    >
                        WORLD CLASS
                    </motion.span>
                    <br />
                    <div className="text-wrap md:text-nowarp text-3xl md:text-5xl">
                        FITNESS ENVIRONMENT
                    </div>
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative overflow-hidden rounded-lg"
                            style={{ aspectRatio: 9 / 16 }}
                        >
                            <Image
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
