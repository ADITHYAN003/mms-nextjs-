import { Metadata } from "next";
import { GetQuoteClient } from "@/components/GetQuoteClient";

export const metadata: Metadata = {
    title: "Get a Quote | Contact MediaMatic Studio",
    description: "Get a customized quote for your digital project. Contact MediaMatic Studio for animation, web development, digital marketing, and hosting services.",
    alternates: {
        canonical: "/get-quote/",
    },
};

export default function GetQuotePage() {
    return <GetQuoteClient />;
}
