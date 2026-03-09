import { Metadata } from "next";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BrandStatement } from "@/components/BrandStatement";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
    title: "About Us | MediaMatic Studio",
    description: "Learn more about MediaMatic Studio, our journey, vision, and the team driving digital excellence In Coimbatore and beyond.",
    alternates: {
        canonical: "/about-us/",
    },
    keywords: ["About MediaMatic Studio", "Branding Agency Coimbatore", "Digital Marketing Team", "Web Development Company History"],
};

export default function AboutPage() {
    return (
        <main className="relative overflow-x-hidden pt-20 bg-[#652b32] min-h-screen">
            <About />
            <Services />
            <BrandStatement />
            <Contact />
        </main>
    );
}
