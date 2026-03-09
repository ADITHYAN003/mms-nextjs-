'use client'

import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Star,
    Search,
    MousePointer2,
    Building2,
    Plane,
    Factory,
    Car,
    Dumbbell,
    Zap,
    Sprout,
    HardHat,
    Scale,
    CalendarDays,
    Truck,
    Users,
    FileText,
    Link2,
    Settings,
    MapPin,
    ClipboardCheck,
    PenTool,
    Globe,
    Flag,
    Store,
    Code,
    ShoppingCart,
    TrendingUp,
    Trophy,
    DollarSign,
    ArrowLeft
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RecentBlog } from "@/components/RecentBlog";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema, generateServiceSchema, generateOrganizationSchema, generateFAQSchema } from "@/lib/seo-schemas";
import { SEO } from "@/components/SEO";

const seoIcon = "/assets/digital/seo.png";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

const HeroSection = ({ onAuditClick }: { onAuditClick: () => void }) => {
    const router = useRouter();
    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-[#652b32]">
            <div className="absolute top-16 right-[15%] opacity-20 animate-pulse pointer-events-none">
                <Sparkles size={32} className="text-[#faf3e0]" />
            </div>
            <div className="absolute top-[30%] right-[8%] opacity-15 pointer-events-none">
                <Star size={24} className="text-[#FACC15]" fill="#FACC15" />
            </div>
            <div className="absolute bottom-[20%] right-[12%] opacity-20 pointer-events-none">
                <MousePointer2 size={28} className="text-[#faf3e0]" />
            </div>
            <div className="absolute top-[20%] right-[25%] opacity-10 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="50" stroke="#faf3e0" strokeWidth="1" strokeDasharray="6 6" />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/services/digital-marketing-agency/"
                    className="inline-flex items-center gap-2 text-[#faf3e0]/60 hover:text-[#faf3e0] transition-colors font-medium group mb-8 md:mb-12"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Digital Marketing
                </Link>

                <motion.div
                    className="text-left max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-[#faf3e0]/30 bg-[#faf3e0]/10 px-4 py-2 md:px-5 md:py-2.5 mb-6 md:mb-8 font-heading">
                        <Image src={seoIcon} alt="SEO" width={20} height={20} className="object-contain brightness-0 invert" />
                        <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#faf3e0]/90">Search Engine Optimization</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#faf3e0] leading-tight mb-6 md:mb-8 font-display"
                    >
                        Best SEO Services <span className="text-[#FACC15]">Company</span> & Expert Search Engine Optimization
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-sm md:text-lg text-[#faf3e0]/70 max-w-3xl mb-8 md:mb-10 leading-relaxed text-left">
                        SEO is not just checking a box but rather having <span className="text-white">personal interaction</span> with your potential clients. At MediaMatic we look at things differently to set you apart! SEO (search engine optimization) services are critical since more companies are relying on organic search to drive success. This is an era where one must rise higher in ranking and draw organic traffic which translates into loyal customers.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                        <button
                            onClick={onAuditClick}
                            className="inline-flex items-center justify-center gap-2 bg-[#faf3e0] text-[#652b32] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-all text-sm md:text-base"
                        >
                            Get Your Free SEO Audit <ArrowRight size={18} />
                        </button>
                        <Link
                            href="/contact-us/"
                            className="inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#652b32] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FACC15]/90 transition-all text-sm md:text-base"
                        >
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const ServicesSection = () => (
    <section className="py-16 md:py-24 px-4 bg-secondary/50 font-body">
        <div className="container mx-auto max-w-6xl">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display text-center uppercase">
                    Higher Rankings & <span className="text-[#FACC15]">More Leads</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                    From the lack of scaling up brands effectively to consolidating all aspects of their marketing under one roof, we have the solutions to meet these challenges head-on.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: MapPin, title: "Local Seo services", desc: "Connect with individuals on a local level through successful nearby search optimization." },
                    { icon: Flag, title: "National Seo services", desc: "Leverage the power of organic traffic for high conversions on a national scale." },
                    { icon: Globe, title: "Global Seo services", desc: "Reach audiences globally with specialized international search strategies." },
                    { icon: Store, title: "Small business Seo services", desc: "Build long-term customer relationships without needing massive marketing budgets." },
                    { icon: Code, title: "WordPress SEO Services", desc: "Comprehensive technical analysis and performance optimization for WordPress sites." },
                    { icon: ShoppingCart, title: "E-commerce SEO Services", desc: "Rank higher on Google to make it easier for consumers to locate and buy products." },
                ].map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="p-10 rounded-[2.5rem] bg-[#faf3e0] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-500 group cursor-pointer"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-8 group-hover:bg-[#faf3e0]/10 transition-colors">
                            <s.icon size={32} className="text-[#652b32] group-hover:text-[#FACC15] transition-colors" />
                        </div>
                        <h3 className="font-heading text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-white">
                            {s.title}
                        </h3>
                        <p className="text-[#652b32]/60 leading-relaxed font-medium group-hover:text-white/70">
                            {s.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const StrategiesSection = () => (
    <section className="py-24 md:py-32 bg-[#faf3e0]">
        <div className="container mx-auto max-w-7xl px-6">
            <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-4xl md:text-6xl font-black text-[#652b32] mb-8 uppercase tracking-tight leading-tight">
                    Dedicated SEO <span className="text-yellow-600">Strategies</span>
                </h2>
                <p className="text-xl text-[#652b32]/60 max-w-4xl mx-auto font-medium leading-relaxed italic">
                    Increase your online presence and drive more qualified traffic your way with our strategic SEO services.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { icon: TrendingUp, title: "Scale Sustainably", desc: "From conventional SERPs to AI-based search, we ensure your business outshines everywhere." },
                    { icon: Trophy, title: "Outshine Competitors", desc: "Gain critical advantage with a systemized approach to keyword research and technical SEO." },
                    { icon: DollarSign, title: "Maximize ROI", desc: "Solutions designed to meet revenue objectives, ensuring investment pays off in all search types." },
                ].map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="text-center p-12 rounded-[3.5rem] bg-white border border-[#652b32]/5 shadow-xl hover:-translate-y-4 transition-all duration-500 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                    >
                        <div className="w-20 h-20 rounded-[2rem] bg-[#652b32]/5 flex items-center justify-center mx-auto mb-10 group-hover:bg-[#652b32] transition-all duration-500">
                            <s.icon size={40} className="text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                        </div>
                        <h3 className="font-heading text-2xl font-black mb-6 text-[#652b32] uppercase tracking-tight">
                            {s.title}
                        </h3>
                        <p className="text-[#652b32]/60 font-medium leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const ProcessSection = () => (
    <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-4xl md:text-7xl font-black text-[#652b32] mb-8 uppercase tracking-tight leading-tight">
                    Our <span className="text-[#FACC15]">Proven Process</span>
                </h2>
                <p className="text-xl text-[#652b32]/60 max-w-4xl mx-auto font-medium leading-relaxed italic">
                    Seeking to increase your presence? Identifying issues, prioritizing solutions, and optimizing elements.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Search, title: "Keyword Research", desc: "Right keywords put you in customers' shoes and help understand their needs." },
                    { icon: Users, title: "Competitor Analysis", desc: "Content gap, keyword analysis, and backlinks investigation for deep insights." },
                    { icon: FileText, title: "On-Page SEO", desc: "Strategic page enhancements to attract qualified leads and convert effectively." },
                    { icon: Link2, title: "Off-Page SEO", desc: "Applying reputation, relevance, and reach to grow visibility and authority." },
                    { icon: Settings, title: "Technical SEO", desc: "Optimizing authority so AI and search engines can accurately index content." },
                    { icon: MapPin, title: "Business Profile", desc: "Optimizing Google Business Profile for local digital marketplace dominance." },
                    { icon: ClipboardCheck, title: "SEO Audit", desc: "Solving crawl errors, duplicate content, and page speed issues immediately." },
                    { icon: PenTool, title: "Content Strategy", desc: "Complete service for all content needs from great ideas to final copy." },
                ].map((p, i) => (
                    <motion.div
                        key={p.title}
                        className="p-8 rounded-[2rem] bg-[#faf3e0]/40 border border-[#652b32]/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-6 group-hover:bg-[#652b32] transition-colors">
                            <p.icon size={28} className="text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                        </div>
                        <h3 className="font-heading text-lg font-black text-[#652b32] mb-4 uppercase tracking-tight">
                            {p.title}
                        </h3>
                        <p className="text-[#652b32]/60 text-sm font-bold leading-relaxed italic">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const IndustriesSection = () => (
    <section className="py-24 md:py-32 bg-[#652b32] text-white">
        <div className="container mx-auto max-w-7xl px-6">
            <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight leading-tight">
                    Industries <span className="text-yellow-400">We Serve</span>
                </h2>
                <p className="text-xl text-white/70 max-w-4xl mx-auto font-medium leading-relaxed italic">
                    Resonating with consumers across specialized market sectors.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                    { icon: Building2, title: "Real Estate", desc: "Results-oriented real estate SEO that understands search evolution." },
                    { icon: Plane, title: "Travel & Tourism", desc: "Personalized strategies to attain high ranking for travel businesses." },
                    { icon: Factory, title: "Manufacturing", desc: "Driving future customers through high-quality manufacturing content." },
                    { icon: Car, title: "Automotive", desc: "Helping you get discovered by local customers ready to purchase." },
                    { icon: Dumbbell, title: "Sports & Fitness", desc: "Establishing online authority through quality search recognition." },
                    { icon: Zap, title: "Energy & Utilities", desc: "Optimizing growth areas like solar, EV charging, and green energy." },
                    { icon: Sprout, title: "Agriculture", desc: "Your strategic marketing partner for the modern digital ag-economy." },
                    { icon: HardHat, title: "Construction", desc: "Attracting quality traffic that converts into contracts and quotes." },
                    { icon: Scale, title: "Legal & Law", desc: "Implementing best SEO marketing strategies for law firm growth." },
                    { icon: CalendarDays, title: "Event Management", desc: "Increase confirmed bookings through location-based optimization." },
                    { icon: Sparkles, title: "Beauty & Wellness", desc: "Expert search optimization specifically for beauty industry nuances." },
                    { icon: Truck, title: "Logistics", desc: "Bespoke services for freight, warehousing, and transportation." },
                ].map((ind, i) => (
                    <motion.div
                        key={ind.title}
                        className="flex items-start gap-5 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white hover:text-[#652b32] transition-all duration-500 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#652b32] transition-colors">
                            <ind.icon size={24} className="text-yellow-400 group-hover:text-yellow-400" />
                        </div>
                        <div>
                            <h3 className="font-heading text-lg font-black mb-2 uppercase tracking-tight">
                                {ind.title}
                            </h3>
                            <p className="opacity-60 group-hover:opacity-100 text-[11px] font-bold leading-relaxed">{ind.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="py-24 bg-[#faf3e0]">
        <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                    { value: "2+", label: "Branch Offices" },
                    { value: "118+", label: "Web & App Projects" },
                    { value: "75+", label: "Video Shoots" },
                    { value: "124+", label: "Digital Marketing" },
                ].map((s, i) => (
                    <motion.div
                        key={s.label}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <div className="text-6xl md:text-8xl font-black text-[#652b32] mb-4 tracking-tighter">
                            {s.value}
                        </div>
                        <div className="text-[#652b32]/50 text-xs font-black uppercase tracking-[0.3em] font-heading">{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <MousePointer2 className="w-[800px] h-[800px] text-[#652b32]" />
        </div>

        <div className="container mx-auto max-w-4xl px-6 relative z-10">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-4xl md:text-7xl font-black text-[#652b32] mb-8 uppercase tracking-tight">
                    Frequently <br /> <span className="text-[#FACC15]">Questions</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Accordion type="single" collapsible className="space-y-6">
                    {[
                        { q: "Why are SEO services essential for business success?", a: "SEO is one of the most effective digital marketing tactics for increasing sales, building credibility, building brand awareness, and gaining a competitive advantage." },
                        { q: "What results can businesses expect from MediamaticStudio?", a: "With MediamaticStudio's SEO services, you will receive a tailored approach for your business, helping you set apart from your competitors." },
                        { q: "Why should I hire a professional SEO company?", a: "Hiring professional SEO services offers numerous advantages; it saves time and optimizes resources, including access to expert counsel." },
                        { q: "What SEO strategies does MediaMatic use?", a: "A keyword strategy is an SEO strategy used to plan for identifying and employing the appropriate words and phrases that your target audience types into search engines." },
                        { q: "Why choose MediaMatic over others?", a: "Because it has demonstrated growth results, is completely transparent, uses innovative techniques, and specializes in its services." },
                    ].map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            className="bg-[#faf3e0]/30 rounded-[2rem] border border-[#652b32]/5 px-10 shadow-sm hover:shadow-xl transition-all"
                        >
                            <AccordionTrigger className="text-left font-heading text-xl font-black text-[#652b32] hover:no-underline py-8">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#652b32]/70 leading-relaxed pb-8 text-lg font-medium italic">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    </section>
);

export function SEOServicesClient() {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const handleAuditClick = () => setIsAuditModalOpen(true);

    const faqs = [
        { q: "Why are SEO services essential for business success?", a: "SEO is one of the most effective digital marketing tactics for increasing sales, building credibility, building brand awareness, and gaining a competitive advantage." },
        { q: "What results can businesses expect from MediamaticStudio's SEO services?", a: "With MediamaticStudio's SEO services, you will receive a tailored approach for your business, helping you set apart from your competitors." },
        { q: "Why should I hire a professional SEO services company instead of doing SEO myself?", a: "Hiring professional SEO services offers numerous advantages; it saves time and optimizes resources, including access to expert counsel." },
        { q: "What SEO strategies does MediaMatic Studio use to rank competitive keywords?", a: "A keyword strategy is an SEO strategy used to plan for identifying and employing the appropriate words and phrases that your target audience types into search engines." },
        { q: "Why should businesses choose MediamaticStudio over other SEO optimization companies?", a: "Because it has demonstrated growth results, is completely transparent, uses innovative techniques, and specializes in its services." },
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <SEO
                title="Search Engine Optimization Company – Start Ranking Today"
                description="Partner with search engine optimization Company to boost rankings, traffic, qualified leads for your business. Get started today."
                canonical="/search-engine-optimization-company/"
                structuredData={[
                    generateBreadcrumbSchema([
                        { name: "Home", url: "/" },
                        { name: "Services", url: "/services/" },
                        { name: "Digital Marketing", url: "/services/digital-marketing-agency/" },
                        { name: "SEO", url: "/search-engine-optimization-company/" }
                    ]),
                    generateServiceSchema({
                        name: "Search Engine Optimization (SEO) Services",
                        description: "Professional SEO, Local SEO, and e-commerce SEO services for higher search rankings and organic growth."
                    }),
                    generateOrganizationSchema(),
                    generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
                ]}
            />
            <HeroSection onAuditClick={handleAuditClick} />
            <ServicesSection />
            <StrategiesSection />
            <ProcessSection />
            <IndustriesSection />
            <StatsSection />
            <FAQSection />

            <section className="relative overflow-hidden py-24 md:py-40 bg-[#652b32] text-white text-center">
                <div className="container mx-auto max-w-4xl px-6 relative z-10">
                    <h2 className="font-heading text-4xl md:text-8xl font-black mb-12 uppercase tracking-tight leading-tight">
                        Protect & <span className="text-yellow-400">Grow Your Brand</span>
                    </h2>
                    <p className="text-xl md:text-2xl opacity-70 mb-16 italic">
                        We're invested in your success and dedicated to making organic search a predictable and sustainable growth driver for your business.
                    </p>
                    <button
                        onClick={handleAuditClick}
                        className="inline-flex items-center gap-5 bg-yellow-400 text-[#652b32] px-14 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                    >
                        Get Started Today <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <RecentBlog />
            <MarketingAuditDialog
                isOpen={isAuditModalOpen}
                onOpenChange={setIsAuditModalOpen}
            />
        </div>
    );
}
