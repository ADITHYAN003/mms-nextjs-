import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import ClickSpark from "@/components/ClickSpark";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "MediaMatic Studio | Creative Branding & Digital Agency",
    description: "MediaMatic Studio is a premier creative agency specializing in branding, digital marketing, web development, and content creation.",
    metadataBase: new URL("https://mediamaticstudio.com"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(poppins.variable, "font-body antialiased")}>
                <Providers>
                    <ClickSpark
                        sparkColor='#9a5a2a'
                        sparkSize={11}
                        sparkRadius={20}
                        sparkCount={9}
                        duration={300}
                    >
                        <Header />
                        <main>{children}</main>
                        <Footer />
                        <WhatsAppWidget />
                    </ClickSpark>
                </Providers>
            </body>
        </html>
    );
}
