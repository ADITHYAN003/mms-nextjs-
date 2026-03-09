import { Metadata } from "next";
import { SEOServicesClient } from "@/components/SEOServicesClient";

export const metadata: Metadata = {
    title: "Best SEO Services Company | Search Engine Optimization | MediaMatic Studio",
    description: "Transform your online presence with the best SEO services company. We offer local, national, and global SEO strategies to drive higher rankings and quality leads.",
    alternates: {
        canonical: "/search-engine-optimization-company/",
    },
    keywords: ["SEO services", "search engine optimization", "local SEO", "ecommerce SEO", "WordPress SEO", "SEO audit", "MediaMatic Studio"],
};

export default function SEOServicesPage() {
    return <SEOServicesClient />;
}
