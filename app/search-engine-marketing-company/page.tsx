import { Metadata } from "next";
import { SEMServicesClient } from "@/components/SEMServicesClient";

export const metadata: Metadata = {
    title: "Search Engine Marketing Companies | PPC & Paid Media | MediaMatic Studio",
    description: "Scale faster with data-driven search engine marketing. Our PPC and paid media experts help you attract high-intent traffic and deliver measurable ROI.",
    alternates: {
        canonical: "/search-engine-marketing-company/",
    },
    keywords: ["SEM company", "PPC advertising", "Google Ads management", "Bing Ads", "paid media", "MediaMatic Studio"],
};

export default function SEMServicesPage() {
    return <SEMServicesClient />;
}
