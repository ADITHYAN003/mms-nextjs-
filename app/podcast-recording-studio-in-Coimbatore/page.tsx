import { Metadata } from "next";
import { PodcastStudioClient } from "@/components/PodcastStudioClient";

export const metadata: Metadata = {
    title: "Best Podcast Recording Studio In Coimbatore | MediaMatic Studio",
    description: "Professional podcast recording studio in Coimbatore. 4K video, cinematic lighting, and soundproof acoustics for creators, influencers, and brands.",
    alternates: {
        canonical: "/podcast-recording-studio-in-Coimbatore/",
    },
    keywords: ["podcast studio Coimbatore", "recording studio Coimbatore", "podcast production", "audio recording", "video podcast", "MediaMatic Studio"],
};

export default function PodcastStudioPage() {
    return <PodcastStudioClient />;
}
