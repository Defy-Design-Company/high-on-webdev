"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of Hero is visible
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
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

                <Image
                    className="object-cover opacity-80 pointer-events-none absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={logo}
                    alt="Logo"
                />

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
                    <p className="text-xl sm:text-balance md:text-nowrap tracking-tight md:text-2xl text-white mb-8">
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
                    <ChevronDown className="w-8 h-8 text-yellow-400" />
                </motion.div>
            </div>
        </section>
    );
}
