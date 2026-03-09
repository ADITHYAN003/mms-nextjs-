import { Metadata } from "next";
import { SMMServicesClient } from "@/components/SMMServicesClient";

export const metadata: Metadata = {
    title: "Social Media Marketing Company – Get More Leads Today",
    description: "Hire an expert social media marketing Company to boost brand reach, attract customers, and business growth. Contact us today.",
    alternates: {
        canonical: "/social-media-marketing-company/",
    },
    keywords: ["social media marketing", "SMM agency", "social media strategy", "influencer marketing", "paid social ads", "MediaMatic Studio"],
};

export default function SMMServicesPage() {
    return <SMMServicesClient />;
}
