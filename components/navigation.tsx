"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import heroImg from "../public/assets/logo.png";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setIsMobileMenuOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Gallery", id: "gallery" },
        { name: "Services", id: "services" },
        { name: "About us", id: "about-us" },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <Image src={heroImg} alt={"hero-logo"} width={180} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white hover:text-yellow-400 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Button
                            className="bg-yellow-400 hover:bg-yellow-500 text-black"
                            key={"join"}
                            onClick={() => scrollToSection("join-us")}
                        >
                            JOIN US
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-black"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full px-3 py-2 text-white hover:text-yellow-400 transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Button
                                className="w-full hover:bg-yellow-500 mt-16"
                                key={"join"}
                                onClick={() => scrollToSection("join-us")}
                            >
                                JOIN US
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
