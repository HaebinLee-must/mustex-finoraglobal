import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AuroraBeamBackgroundFinoraGlobal } from '../features/landing/components/AuroraBeamBackgroundFinoraGlobal';
import { ArrowRight, Globe, Shield, Zap, CheckCircle2, Building2, BarChart3, Lock } from 'lucide-react';

const GlobalHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Vision', href: '#vision' },
        { name: 'About', href: '#about' },
        { name: 'Network', href: '#network' },
        { name: 'Business', href: '#business' },
        { name: 'Governance', href: '#governance' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">F</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">FINORA <span className="text-primary font-medium">GLOBAL</span></span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all backdrop-blur-sm">
                    Contact Us
                </button>
            </div>
        </header>
    );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
    <div className="mb-12">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-white'}`}
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-2xl text-lg leading-relaxed"
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

const FinoraGlobalPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-[#0B0E11] text-white selection:bg-cyan-500/30">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[60]"
                style={{ scaleX }}
            />

            <GlobalHeader />

            <div className="h-0 overflow-hidden invisible">
                <AuroraBeamBackgroundFinoraGlobal />
            </div>

            {/* Hero Section */}
            <section id="vision" className="relative h-screen flex items-center overflow-hidden">
                <AuroraBeamBackgroundFinoraGlobal className="absolute inset-0 z-0" />
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                            Financing the Future
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                            Leading Financial Innovation, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                                Architecting the Future
                            </span> <br />
                            of Digital Assets.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            Finora Global is the strategic headquarters for a regulated global digital asset ecosystem.
                            Starting with the Philippines, we invest in and govern the infrastructure that bridges traditional finance with the future of value.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all flex items-center gap-2 group">
                                Our Vision <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold transition-all">
                                Investor Relations
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="py-24 md:py-32 relative bg-[#0B0E11]">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="Strategic Control Tower for the Digital Economy"
                        subtitle="Finora Global, Inc. is a holding company headquartered in the Republic of Korea, dedicated to defining the standards of the global digital asset industry."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                icon: <Building2 className="w-8 h-8 text-primary" />,
                                title: "Strategic Governance",
                                desc: "We own and control the management direction of our subsidiaries to ensure long-term sustainability and growth."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-purple-400" />,
                                title: "IP & Technology Ownership",
                                desc: "We hold the core rights to institutional-grade trading engines, custody algorithms, and tokenization protocols."
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-blue-400" />,
                                title: "Global Compliance Standard",
                                desc: "We establish and oversee Group-wide AML/CTF and internal control frameworks aligned with FATF recommendations."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 transition-all group"
                            >
                                <div className="mb-6 p-3 rounded-xl bg-white/[0.03] w-fit group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Network Section */}
            <section id="network" className="py-24 md:py-32 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading
                                title="Global Expansion Starting from the Philippines"
                                subtitle="Our global journey begins in the Philippines, a rapidly growing hub for fintech and digital innovation in Southeast Southeast Asia."
                            />
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                    <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Subsidiary Spotlight: Finora Technology, Inc.
                                    </h4>
                                    <p className="text-gray-300">The operating entity responsible for executing the digital asset exchange and STO business within AFAB.</p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        <p className="text-gray-400"><strong className="text-white">Governance:</strong> Finora Global holds a majority stake (60%) and exercises management control.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                        <p className="text-gray-400"><strong className="text-white">Investment:</strong> Backed by approximately KRW 8 Billion in capital and core technology assets.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-12">
                                <Globe className="w-full h-full text-cyan-500/20 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-white mb-2">60%</div>
                                        <div className="text-primary font-medium tracking-widest uppercase text-xs">Majority Stake</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Areas Section */}
            <section id="business" className="py-24 md:py-32 bg-[#0B0E11]">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="A Regulated Digital Asset Ecosystem"
                        subtitle="We invest in and operate businesses authorized under the Authority of the Freeport Area of Bataan (AFAB) ODAL Framework, ensuring a fully regulated environment."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        {/* Area 01 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative p-10 rounded-3xl bg-black border border-white/5 h-full">
                                <div className="text-primary font-bold text-sm mb-6 tracking-widest uppercase">01. Digital Asset Exchange</div>
                                <h3 className="text-2xl font-bold mb-8 text-white">ODAL Class 1 Licensed</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1"><BarChart3 className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Spot Trading</h4>
                                            <p className="text-gray-400 text-sm">Transparent marketplace with a focus on price discovery.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Lock className="w-6 h-6 text-blue-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Institutional Custody</h4>
                                            <p className="text-gray-400 text-sm">Segregated management using cold storage and multi-sig.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Area 02 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative p-10 rounded-3xl bg-black border border-white/5 h-full">
                                <div className="text-purple-500 font-bold text-sm mb-6 tracking-widest uppercase">02. Tokenization & STO</div>
                                <h3 className="text-2xl font-bold mb-8 text-white">ODAL Class 2 Licensed</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Globe className="w-6 h-6 text-purple-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">RWA Tokenization</h4>
                                            <p className="text-gray-400 text-sm">Digitizing Real World Assets (Real Estate, Infrastructure, IP).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Zap className="w-6 h-6 text-pink-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Issuance Lifecycle</h4>
                                            <p className="text-gray-400 text-sm">End-to-end management from issuance to administration.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Governance & Compliance Section */}
            <section id="governance" className="py-24 md:py-32 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <SectionHeading
                            title="Uncompromised Trust & Safety"
                            subtitle="Trust is our currency. Finora Global enforces a rigorous 'Compliance First' policy across all subsidiaries."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Asset Segregation", desc: "Strict adherence to segregating Client Assets from Company Assets. Funds are never used for operations." },
                            { title: "Global AML Standards", desc: "Compliance with Philippine AMLA and international FATF guidelines with advanced KYC/KYB." },
                            { title: "Independent Oversight", desc: "Dedicated Risk Management Committee operating independently from business units." }
                        ].map((pillar, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary font-bold">
                                    0{i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{pillar.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#07090C] pt-20 pb-10 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                                    <span className="text-white font-bold">F</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">FINORA <span className="text-primary font-medium">GLOBAL</span></span>
                            </div>
                            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                                Finora Global, Inc. is the holding company and does not directly operate the exchange platform.
                                Exchange services are provided by its licensed subsidiary, Finora Technology, Inc.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Offices</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>
                                    <strong className="text-gray-300 block mb-1">Headquarters</strong>
                                    Seoul, Republic of Korea
                                </li>
                                <li>
                                    <strong className="text-gray-300 block mb-1">Operating Subsidiary</strong>
                                    Finora Technology, Inc. (Philippines)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">Contact</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>contact@finora.holdings</li>
                                <li>ir@finora.holdings</li>
                                <li className="pt-4 flex gap-4">
                                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                                    <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
                        <p>© 2026 Finora Global, Inc. All rights reserved.</p>
                        <p>Designed for Digital Excellence.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FinoraGlobalPage;