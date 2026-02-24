import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraBeamBackgroundFinoraGlobal } from '../features/landing/components/AuroraBeamBackgroundFinoraGlobal';
import { ArrowRight, Globe, Shield, Zap, CheckCircle2, Building2, BarChart3, Lock, ExternalLink, MapPin, Activity, Languages } from 'lucide-react';

import logoLight from '../assets/finoraglobal_bi_light.png';
import logoDark from '../assets/finoraglobal_bi_dark.png';
import networkImage from '../assets/div.aspect-square.png';

const GlobalHeader = ({ lang, setLang, t }: { lang: 'en' | 'ko', setLang: (l: 'en' | 'ko') => void, t: any }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t.nav.vision, href: '#vision' },
        { name: t.nav.network, href: '#network' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.business, href: '#business' },
        { name: t.nav.governance, href: '#governance' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={logoLight} alt="Finora Global" className="h-8 w-auto" />
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                        className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all text-gray-300 min-w-[80px]"
                    >
                        <Globe className="w-4 h-4" />
                        {lang === 'en' ? 'KO' : 'EN'}
                    </button>
                    <button className="hidden sm:block px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20">
                        {t.nav.contact}
                    </button>
                </div>
            </div>
        </header>
    );
};

const SectionHeading = ({ title, subtitle, light = false, center = false }: { title: string, subtitle?: string, light?: boolean, center?: boolean }) => (
    <div className={`mb-12 ${center ? 'text-center flex flex-col items-center' : ''}`}>
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
                className={`text-gray-400 max-w-2xl text-lg leading-relaxed ${center ? 'mx-auto' : ''}`}
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

const translations = {
    en: {
        nav: { vision: 'Vision', about: 'About', network: 'Network', business: 'Business', governance: 'Governance', contact: 'Contact Us' },
        hero: {
            tag: 'Financing the Future',
            title1: 'Leading Financial Innovation,',
            title2: 'Architecting the Future',
            title3: 'of Digital Assets.',
            desc: 'Finora Global is the strategic headquarters for a regulated global digital asset ecosystem. Starting with the Philippines, we invest in and govern the infrastructure that bridges traditional finance with the future of value.',
            cta1: 'Contact Us',
            cta2: 'Our Vision',
            scroll: 'Scroll to Explore'
        },
        network: {
            title: 'Global Expansion Starting from the Philippines',
            subtitle: 'Our global journey begins in the Philippines, a rapidly growing hub for fintech and digital innovation in Southeast Asia.',
            spotlight: 'Subsidiary Spotlight: Finora Technology, Inc.',
            spotlight_desc: 'The operating entity responsible for executing the digital asset exchange and STO business within AFAB.',
            gov_label: 'Governance:',
            gov_desc: 'Finora Global holds a majority stake (60%) and exercises management control.',
            inv_label: 'Investment:',
            inv_desc: 'Backed by approximately KRW 8 Billion in capital and core technology assets.'
        },
        about: {
            title: 'Strategic Control Tower for the Digital Economy',
            subtitle: 'Finora Global, Inc. is a holding company headquartered in the Republic of Korea, dedicated to defining the standards of the global digital asset industry.',
            card1: { title: 'Strategic Governance', desc: 'We own and control the management direction of our subsidiaries to ensure long-term sustainability and growth.' },
            card2: { title: 'IP & Technology Ownership', desc: 'We hold the core rights to institutional-grade trading engines, custody algorithms, and tokenization protocols.' },
            card3: { title: 'Global Compliance Standard', desc: 'We establish and oversee Group-wide AML/CTF and internal control frameworks aligned with FATF recommendations.' }
        },
        business: {
            title: 'A Regulated Digital Asset Ecosystem',
            subtitle: 'We invest in and operate businesses authorized under the Authority of the Freeport Area of Bataan (AFAB) ODAL Framework, ensuring a fully regulated environment.',
            area1: { tag: '01. Digital Asset Exchange', title: 'ODAL Class 1 Pre-Licensed', feature1: 'Spot Trading', feature1_desc: 'Transparent marketplace with a focus on price discovery.', feature2: 'Institutional Custody', feature2_desc: 'Segregated management using cold storage and multi-sig.' },
            area2: { tag: '02. Tokenization & STO', title: 'ODAL Class 2 Licensed', feature1: 'RWA Tokenization', feature1_desc: 'Digitizing Real World Assets (Real Estate, Infrastructure, IP).', feature2: 'Issuance Lifecycle', feature2_desc: 'End-to-end management from issuance to administration.' }
        },
        governance: {
            title: 'Uncompromised Trust & Safety',
            subtitle: "Trust is our currency. Finora Global enforces a rigorous 'Compliance First' policy across all subsidiaries.",
            pillar1: { title: 'Asset Segregation', desc: 'Strict adherence to segregating Client Assets from Company Assets. Funds are never used for operations.' },
            pillar2: { title: 'Global AML Standards', desc: 'Compliance with Philippine AMLA and international FATF guidelines with advanced KYC/KYB.' },
            pillar3: { title: 'Independent Oversight', desc: 'Dedicated Risk Management Committee operating independently from business units.' }
        },
        cta: {
            title: 'Experience the Next Generation',
            title_highlight: 'of Digital Asset Trading',
            desc: 'Start your journey with Finora Exchange. Regulated, secure, and built on institutional-grade infrastructure for modern investors.',
            button: 'Go to Finora Exchange'
        },
        footer: {
            desc: 'Finora Global, Inc. is the holding company and does not directly operate the exchange platform. Exchange services are provided by its licensed subsidiary, Finora Technology, Inc.',
            offices: 'Offices',
            hq: 'Headquarters',
            hq_val: 'Seoul, Republic of Korea',
            sub: 'Operating Subsidiary',
            sub_val: 'Finora Technology, Inc. (Philippines)',
            contact: 'Contact',
            privacy: 'Privacy Policy',
            terms: 'Terms of Use',
            copy: '© 2026 Finora Global, Inc. All rights reserved.',
            credit: 'Designed for Digital Excellence.'
        }
    },
    ko: {
        nav: { vision: '비전', about: '소개', network: '네트워크', business: '비즈니스', governance: '거버넌스', contact: '문의하기' },
        hero: {
            tag: '금융의 미래를 설계하다',
            title1: '금융 혁신을 선도하며,',
            title2: '디지털 자산의 미래를',
            title3: '설계합니다.',
            desc: 'FINORA GLOBAL은 규제 기반의 글로벌 디지털 자산 생태계를 위한 전략적 본부입니다. 필리핀을 시작으로, 전통 금융과 미래 가치를 잇는 인프라에 투자하고 이를 관리합니다.',
            cta1: '문의하기',
            cta2: '우리의 비전',
            scroll: '더 알아보기'
        },
        network: {
            title: '필리핀에서 시작되는 글로벌 확장',
            subtitle: '우리의 글로벌 여정은 동남아시아 핀테크와 디지털 혁신의 급성장 거점인 필리핀에서 시작됩니다.',
            spotlight: '주요 자회사: Finora Technology, Inc.',
            spotlight_desc: 'AFAB 내에서 디지털 자산 거래소 및 STO 비즈니스를 수행하는 운영 법인입니다.',
            gov_label: '거버넌스:',
            gov_desc: 'FINORA GLOBAL이 대주주(60%)로서 경영권을 행사하며 전략적 방향을 설정합니다.',
            inv_label: '투자 규모:',
            inv_desc: '약 80억 원 규모의 자본금과 핵심 기술 자산을 바탕으로 설립되었습니다.'
        },
        about: {
            title: '디지털 경제를 위한 전략적 컨트롤 타워',
            subtitle: '대한민국 서울에 본사를 둔 FINORA GLOBAL, Inc.는 글로벌 디지털 자산 산업의 표준을 정의하는 지주회사입니다.',
            card1: { title: '전략적 거버넌스', desc: '자회사의 경영 방향을 수립하고 통제하여 장기적인 지속 가능성과 성장을 보장합니다.' },
            card2: { title: 'IP 및 기술 소유권', desc: '기관급 거래 엔진, 커스터디 알고리즘 및 토큰화 프로토콜에 대한 핵심 권리를 보유합니다.' },
            card3: { title: '글로벌 컴플라이언스 표준', desc: 'FATF 권고안에 따른 그룹 차원의 AML/CTF 및 내부 통제 프레임워크를 구축하고 감독합니다.' }
        },
        business: {
            title: '규제 중심의 디지털 자산 생태계',
            subtitle: '필리핀 AFAB의 ODAL 프레임워크에 따라 인가된 비즈니스에 투자하고 운영하며, 투명한 규제 환경을 보장합니다.',
            area1: { tag: '01. 디지털 자산 거래소', title: 'ODAL Class 1 사전 인허가 확보', feature1: '현물 거래(Spot Trading)', feature1_desc: '가격 발견 기능에 집중한 투명한 시장을 제공합니다.', feature2: '기관급 커스터디', feature2_desc: '콜드 스토리지와 멀티시그를 활용한 자산 분리 관리를 시행합니다.' },
            area2: { tag: '02. 토큰화 및 STO', title: 'ODAL Class 2 라이선스 보유', feature1: 'RWA 토큰화', feature1_desc: '부동산, 인프라, IP 등 실물 자산(Real World Assets)의 디지털화를 추진합니다.', feature2: '발행 라이프사이클', feature2_desc: '자산 토큰의 발행부터 관리까지 엔드 투 엔드 프로세스를 운영합니다.' }
        },
        governance: {
            title: '타협하지 않는 신뢰와 안전',
            subtitle: "신뢰는 우리의 핵심 가치입니다. FINORA GLOBAL은 모든 자회사에 엄격한 '컴플라이언스 우선' 정책을 적용합니다.",
            pillar1: { title: '자산 분리 보관', desc: '고객 자산과 회사 운영 자산을 엄격히 분리하여 관리합니다. 고객의 자금은 운영 목적으로 사용되지 않습니다.' },
            pillar2: { title: '글로벌 AML 표준 준수', desc: '필리핀 AMLA 및 국제 FATF 가이드라인을 준수하며, 고도화된 KYC/KYB 시스템을 운영합니다.' },
            pillar3: { title: '독립적 리스크 관리', desc: '사업 부서로부터 독립된 전담 리스크 관리 위원회를 통해 객관적인 감독과 통제를 수행합니다.' }
        },
        cta: {
            title: '차세대 디지털 자산 거래를',
            title_highlight: '직접 경험해보세요',
            desc: 'Finora Exchange와 함께 여정을 시작하세요. 규제를 준수하고 안전하며, 현대적 투자자를 위한 기관급 인프라로 설계되었습니다.',
            button: 'Finora Exchange 바로가기'
        },
        footer: {
            desc: 'FINORA GLOBAL, Inc.는 지주회사이며 거래소 플랫폼을 직접 운영하지 않습니다. 거래 서비스는 라이선스를 보유한 자회사 Finora Technology, Inc.를 통해 제공됩니다.',
            offices: '오피스',
            hq: '본사',
            hq_val: '대한민국 서울특별시',
            sub: '운영 자회사',
            sub_val: 'Finora Technology, Inc. (필리핀)',
            contact: '문의',
            privacy: '개인정보처리방침',
            terms: '이용약관',
            copy: '© 2026 FINORA GLOBAL, Inc. All rights reserved.',
            credit: 'Designed for Digital Excellence.'
        }
    }
};

const FinoraGlobalPage = () => {
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const t = translations[lang];

    return (
        <div className="bg-[#0B0E11] text-white selection:bg-cyan-500/30">
            <GlobalHeader lang={lang} setLang={setLang} t={t} />

            <div className="h-0 overflow-hidden invisible">
                <AuroraBeamBackgroundFinoraGlobal />
            </div>

            {/* Hero Section */}
            <section id="vision" className="relative h-[90vh] flex items-center overflow-hidden">
                <AuroraBeamBackgroundFinoraGlobal className="absolute inset-0 z-0 scale-110" />

                {/* Visual Layer: Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,14,17,0)_0%,rgba(11,14,17,0)_100%)] z-[1]"></div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-primary text-xs font-bold mb-8 tracking-wider uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                {t.hero.tag}
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-[-0.02em] text-white">
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block"
                            >
                                {t.hero.title1}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 drop-shadow-sm inline-block py-2"
                            >
                                {t.hero.title2}
                            </motion.span> <br />
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                {t.hero.title3}
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-sm"
                        >
                            {t.hero.desc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex flex-wrap gap-5"
                        >
                            <button className="relative overflow-hidden px-10 py-5 rounded-full bg-primary text-white font-bold transition-all flex items-center group shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                {t.hero.cta1}
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.querySelector('#network');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-10 py-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-bold transition-all backdrop-blur-md text-white shadow-lg flex items-center gap-2 group"
                            >
                                {t.hero.cta2}
                                <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* Global Network Section (Reordered to 2nd) */}
            <section id="network" className="py-24 md:py-32 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading
                                title={t.network.title}
                                subtitle={t.network.subtitle}
                            />
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5">
                                    <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> {t.network.spotlight}
                                    </h4>
                                    <p className="text-gray-300">{t.network.spotlight_desc}</p>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                                        <p className="text-gray-400"><strong className="text-white">{t.network.gov_label}</strong> {t.network.gov_desc}</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                                        <p className="text-gray-400"><strong className="text-white">{t.network.inv_label}</strong> {t.network.inv_desc}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center relative shadow-2xl">
                                <img src={networkImage} alt="Global Network" className="w-full h-full object-cover" />

                                {/* Network Map Pins */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-[25%] left-[30%] text-primary"
                                >
                                    <MapPin className="w-8 h-8 fill-primary/20" />
                                </motion.div>

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="absolute top-[45%] left-[65%] text-primary"
                                >
                                    <MapPin className="w-6 h-6 fill-primary/20" />
                                </motion.div>

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                                    className="absolute top-[60%] left-[40%] text-cyan-400"
                                >
                                    <MapPin className="w-10 h-10 fill-cyan-400/20" />
                                </motion.div>

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                                    className="absolute top-[75%] left-[70%] text-primary"
                                >
                                    <MapPin className="w-7 h-7 fill-primary/20" />
                                </motion.div>

                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                                    className="absolute top-[20%] left-[80%] text-blue-400"
                                >
                                    <MapPin className="w-5 h-5 fill-blue-400/20" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section (Reordered to 3rd) */}
            <section id="about" className="py-24 md:py-32 relative bg-[#0B0E11]">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title={t.about.title}
                        subtitle={t.about.subtitle}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                icon: <Building2 className="w-8 h-8 text-primary" />,
                                title: t.about.card1.title,
                                desc: t.about.card1.desc
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-purple-400" />,
                                title: t.about.card2.title,
                                desc: t.about.card2.desc
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-blue-400" />,
                                title: t.about.card3.title,
                                desc: t.about.card3.desc
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 transition-all group hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="mb-6 p-3 rounded-xl bg-white/[0.05] w-fit group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Areas Section */}
            <section id="business" className="py-24 md:py-32 bg-black relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeading
                        title={t.business.title}
                        subtitle={t.business.subtitle}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        {/* Area 01 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-3xl blur opacity-10 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative p-10 rounded-3xl bg-white/[0.03] border border-white/10 h-full backdrop-blur-sm shadow-2xl">
                                <div className="text-primary font-bold text-sm mb-6 tracking-widest uppercase">{t.business.area1.tag}</div>
                                <h3 className="text-2xl font-bold mb-8 text-white">{t.business.area1.title}</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1"><BarChart3 className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t.business.area1.feature1}</h4>
                                            <p className="text-gray-400 text-sm">{t.business.area1.feature1_desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Lock className="w-6 h-6 text-blue-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t.business.area1.feature2}</h4>
                                            <p className="text-gray-400 text-sm">{t.business.area1.feature2_desc}</p>
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
                            className="relative group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-pink-600/50 rounded-3xl blur opacity-10 group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative p-10 rounded-3xl bg-white/[0.03] border border-white/10 h-full backdrop-blur-sm shadow-2xl">
                                <div className="text-purple-500 font-bold text-sm mb-6 tracking-widest uppercase">{t.business.area2.tag}</div>
                                <h3 className="text-2xl font-bold mb-8 text-white">{t.business.area2.title}</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Globe className="w-6 h-6 text-purple-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t.business.area2.feature1}</h4>
                                            <p className="text-gray-400 text-sm">{t.business.area2.feature1_desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1"><Zap className="w-6 h-6 text-pink-400" /></div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{t.business.area2.feature2}</h4>
                                            <p className="text-gray-400 text-sm">{t.business.area2.feature2_desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Governance & Compliance Section */}
            <section id="governance" className="py-24 md:py-32 bg-[#0B0E11] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-20">
                        <SectionHeading
                            title={t.governance.title}
                            subtitle={t.governance.subtitle}
                            center
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: t.governance.pillar1.title,
                                desc: t.governance.pillar1.desc,
                                icon: <Shield className="w-6 h-6" />
                            },
                            {
                                title: t.governance.pillar2.title,
                                desc: t.governance.pillar2.desc,
                                icon: <Lock className="w-6 h-6" />
                            },
                            {
                                title: t.governance.pillar3.title,
                                desc: t.governance.pillar3.desc,
                                icon: <Activity className="w-6 h-6" />
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary shadow-inner shadow-primary/20 mx-auto">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white text-center">{pillar.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-center">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full-width CTA Section (Exchange Transition) */}
            <section className="relative py-32 overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-[1.2]">
                            {t.cta.title} <br />
                            <span className="text-primary">{t.cta.title_highlight}</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed px-4 md:px-10">
                            {t.cta.desc}
                        </p>
                        <div className="flex justify-center">
                            <button className="flex items-center gap-4 px-12 py-6 rounded-full bg-primary text-white text-lg font-bold hover:bg-primary/80 transition-all shadow-2xl shadow-primary/40 group">
                                <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                                {t.cta.button}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#07090C] pt-20 pb-10 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-8">
                                <img src={logoLight} alt="Finora Global" className="h-6 w-auto opacity-80" />
                            </div>
                            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
                                {t.footer.desc}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">{t.footer.offices}</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>
                                    <strong className="text-gray-300 block mb-1">{t.footer.hq}</strong>
                                    {t.footer.hq_val}
                                </li>
                                <li>
                                    <strong className="text-gray-300 block mb-1">{t.footer.sub}</strong>
                                    {t.footer.sub_val}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>contact@finora.holdings</li>
                                <li>ir@finora.holdings</li>
                                <li className="pt-4 flex gap-4">
                                    <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
                                    <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
                        <p>{t.footer.copy}</p>
                        <p>{t.footer.credit}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FinoraGlobalPage;