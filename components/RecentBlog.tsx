'use client'

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchRecentPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import { Loader2, ArrowRight } from "lucide-react";

export const RecentBlog = () => {
    const { data: recentPosts, isLoading } = useQuery({
        queryKey: ["recent-posts-home"],
        queryFn: () => fetchRecentPosts(3),
        staleTime: 1000 * 60 * 30, // 30 mins
    });

    return (
        <section className="py-20 md:py-32 bg-[#faf3e0] font-sans">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-black text-[#652b32] mb-6 uppercase tracking-tight font-heading leading-tight">
                            Recent <span className="text-yellow-500">Blog</span>
                        </h2>
                        <p className="text-[#652b32]/60 text-xl font-medium">
                            The latest insights from our creative team
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-3 bg-white text-[#652b32] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] shadow-lg hover:shadow-xl transition-all border border-[#652b32]/5 active:scale-95"
                    >
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-6">
                        <Loader2 className="w-12 h-12 text-[#652b32] animate-spin opacity-20" />
                        <p className="text-[#652b32]/40 font-black uppercase tracking-[0.2em] text-xs">Summoning latest scrolls...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recentPosts?.slice(0, 3).map((post: any) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
