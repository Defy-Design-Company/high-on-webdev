"use client";

import Image from "next/image";
import logo from "../public/assets/logo.png";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center flex-col justify-center px-4 sm:px-2 lg:px-12"
        >
            <div className="">
                <Image src={logo} alt={""} />
            </div>
            <div className="absolute bottom-[5%] md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center px-4">
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
                    animate={{
                        y: [0, 10, 0],
                    }}
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
