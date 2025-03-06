"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoElement?.play();
                } else {
                    videoElement?.pause();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen flex items-center flex-col justify-center"
        >
            <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-[2] pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-screen flex items-center justify-center absolute z-[3] px-4 sm:px-6 md:px-8 lg:px-12"
                >
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-center font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                            Welcome to{" "}
                            <span className="text-yellow-400">
                                HighOn Fitness Studio
                            </span>
                        </h1>
                        <p className="text-center text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl font-light mx-auto max-w-4xl">
                            {" "}
                            The Best{" "}
                            <span className="text-white font-medium">
                                gym in Sholinganallur, OMR, Chennai
                            </span>
                            , offering top-notch training facilities, expert
                            personal coaching, and state-of-the-art equipment.
                            Whether you're looking for{" "}
                            <span className="text-white font-medium">
                                strength training, weight loss programs,
                                functional fitness, HIIT workouts, or
                                personalized training
                            </span>
                            , we have it all.
                        </p>
                    </div>
                </motion.div>

                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    width={1920}
                    height={1080}
                    className="pointer-events-none w-full h-full object-cover z-[1]"
                >
                    <source src="/assets/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Text & Arrow */}
            <div className="absolute bottom-[5%] md:bottom-10 left-1/2 transform -translate-x-1/2 z-[4] text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mb-8">
                        Step into a realm where strength meets style.
                    </p>
                </motion.div>
                <motion.div
                    className="inline-flex"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-400" />
                </motion.div>
            </div>
        </section>
    );
}
