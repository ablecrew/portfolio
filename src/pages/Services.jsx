import { Zap, Smartphone, Palette, Layout, Server, Monitor } from 'lucide-react';

const SERVICES = [
    {
        icon: Zap,
        title: "Full Stack Development",
        desc: "End-to-end web apps built with React & Django — from database architecture to pixel-perfect UI."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        desc: "Native Android (Kotlin/Java) and iOS (Swift) apps with seamless UI/UX and robust performance."
    },
    {
        icon: Palette,
        title: "Brand Identity Design",
        desc: "Logo, color systems, typography, and brand guidelines that make your business unforgettable."
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        desc: "Wireframes, prototypes, and production-ready designs that users love to interact with."
    },
    {
        icon: Server,
        title: "API Development",
        desc: "Robust, scalable REST APIs, third-party integrations, and backend architecture."
    },
    {
        icon: Monitor,
        title: "Cross-Platform Solutions",
        desc: "React Native apps that work seamlessly across both Android and iOS platforms."
    },
];

export default function Services() {
    return (
        <div id="services" className="book-page">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                    <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '0.5rem',
                    }}>
                        — Offerings —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>What I </span>
                        <span className="gradient-text">Deliver</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {SERVICES.map((svc, i) => {
                        const Icon = svc.icon;
                        return (
                            <div
                                key={svc.title}
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-secondary)',
                                    transition: 'var(--transition)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(0,245,212,0.3)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 900,
                                    fontSize: '0.6rem',
                                    letterSpacing: '2px',
                                    color: 'rgba(0,245,212,0.25)',
                                }}>
                                    0{i + 1}
                                </div>
                                <Icon size={32} style={{ color: 'var(--accent)' }} />
                                <h3 style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                }}>
                                    {svc.title}
                                </h3>
                                <p style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.82rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    flexGrow: 1,
                                }}>
                                    {svc.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}