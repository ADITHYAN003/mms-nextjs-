import { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
    title: "MediaMatic Studio | Digital Marketing & Web Development Agency",
    description: "Transform your digital presence with MediaMatic Studio. Expert web development, digital marketing, SEO, creative design, animation, and content management services. Your trusted partner for online success.",
    alternates: {
        canonical: "/",
    },
    keywords: ["digital marketing agency", "web development", "SEO services", "website design", "mobile app development", "content marketing", "social media marketing", "animation studio", "graphic design", "MediaMatic Studio"],
};

export default function Home() {
    return <HomePage />;
}
