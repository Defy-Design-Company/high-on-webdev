"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const metadataObj = {
    title: "High On Fitness Studio",
    description: "Step into a realm where strength meets style",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const whatsappNumber = "919445577662";
    const whatsappMessage = "Hi! I'm interested in your fitness services.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>{metadataObj.title}</title>
                <meta name="description" content={metadataObj.description} />

                <meta
                    name="keywords"
                    content="Best gym in Sholinganallur, Top fitness studio in OMR Chennai, Personal training in Sholinganallur, Fitness studio, Gym, Workout, Strength training, Weight loss, HIIT, Chennai gym"
                />
                <meta
                    property="og:title"
                    content="High On Fitness Studio - Best Gym in Sholinganallur, OMR"
                />
                <meta
                    property="og:description"
                    content="Top fitness studio in OMR Chennai offering personal training, strength training, weight loss programs and more."
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="High On Fitness Studio - Premium Gym in OMR"
                />
                <meta
                    name="twitter:description"
                    content="The Best gym in Sholinganallur, OMR, Chennai offering expert personal coaching and state-of-the-art equipment."
                />

                <meta name="geo.region" content="IN-TN" />
                <meta name="geo.placename" content="Sholinganallur, Chennai" />
            </head>
            <body className={inter.className}>
                {children}

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={24} />
                </a>
            </body>
        </html>
    );
}
