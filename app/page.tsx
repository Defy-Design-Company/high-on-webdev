import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Amenities } from "@/components/amenities";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import Head from "next/head";

export default function Home() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            <Head>
                <meta
                    name="description"
                    content="High On Fitness Studio - The Best gym in Sholinganallur, OMR, Chennai, offering top-notch training facilities, expert personal coaching, and state-of-the-art equipment."
                />
                <meta
                    name="keywords"
                    content="Best gym in Sholinganallur, Top fitness studio in OMR Chennai, Personal training in Sholinganallur"
                />
            </Head>
            <Navigation />
            <Hero />
            <Gallery />
            <Services />
            <Amenities />
            <About />
            <Contact id="join-us" />
        </main>
    );
}
