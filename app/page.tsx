import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Services } from "@/components/services";
import { Amenities } from "@/components/amenities";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
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
