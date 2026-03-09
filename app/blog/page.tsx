import { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
    title: "Latest Insights | Blog | MediaMatic Studio",
    description: "Stay updated with the latest trends in digital marketing, web development, and creative design. Expert insights from MediaMatic Studio.",
    alternates: {
        canonical: "/blog/",
    },
};

export default function BlogList() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf3e0]">
                <Loader2 className="w-12 h-12 text-[#652b32] animate-spin" />
                <p className="text-[#652b32]/60 font-medium mt-4">Loading Blog...</p>
            </div>
        }>
            <BlogListContent />
        </Suspense>
    );
}
