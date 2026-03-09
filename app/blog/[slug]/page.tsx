import { Metadata } from "next";
import { fetchBlogPostBySlug, fetchRecentPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog/BlogPostClient";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = await fetchBlogPostBySlug(params.slug).catch(() => null);

    if (!post) {
        return {
            title: "Post Not Found | MediaMatic Studio",
        };
    }

    return {
        title: `${post.title} | Blog | MediaMatic Studio`,
        description: post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) || post.title,
        alternates: {
            canonical: `/blog/${params.slug}/`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) || post.title,
            images: [{ url: post.featured_image }],
            type: "article",
            publishedTime: post.publish_date_raw,
            authors: [post.author?.name],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = params;
    const [post, recentPosts] = await Promise.all([
        fetchBlogPostBySlug(slug).catch(() => null),
        fetchRecentPosts(4).catch(() => []),
    ]);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} recentPosts={recentPosts} />;
}
