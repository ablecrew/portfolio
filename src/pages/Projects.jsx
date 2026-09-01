import { useState } from 'react';
import { Server, Palette, Globe, Sparkles, Layout, TrendingUp, ExternalLink } from 'lucide-react';

const PROJECTS = [
    {
        title: "Eventify",
        desc: "A full-featured event booking and creation platform. Users can browse, create, and manage events with an intuitive interface, powered by a robust Node.js backend.",
        tags: ["HTML5", "Node.js", "Neon DB", "CSS", "JavaScript"],
        accentColor: "#00f5d4",
        icon: Globe,
        liveLink: "https://eventify-g37x.onrender.com"
    },
    {
        title: "OnPoint-Cyber",
        desc: "A modern, high-performance platform built for a cyber-tech brand, featuring a sleek UI, seamless user experience, and a scalable MERN stack architecture.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        accentColor: "#7b2fff",
        icon: Palette,
        liveLink: "https://onpoint-cyber.vercel.app/"
    },
    {
        title: "MediCore",
        desc: "A fully operational Hospital Management System (HMS) built with React, TypeScript, and Supabase. Streamlines patient records, appointments, and administrative tasks with a modern, responsive dashboard.",
        tags: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
        accentColor: "#ff6b35",
        icon: TrendingUp,
        liveLink: "https://medicore-z9li.onrender.com"
    },
    {
        title: "MC Aol Portfolio",
        desc: "A dynamic, modern portfolio website for a professional MC and comedian. Showcases event hosting, stand-up comedy, and moderation services with a vibrant, engaging design.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        accentColor: "#00cfff",
        icon: Server,
        liveLink: "https://mcaol-book-mc.vercel.app/"
    },
    {
        title: "Pika Planner",
        desc: "An AI-powered meal planning and food suggestion platform built for the African lifestyle. Generates personalized plans based on budget, culture, and dietary needs with local cuisine support.",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "AI Integration (Open AI)"],
        accentColor: "#f72585",
        icon: Sparkles,
        liveLink: "https://pikaplanner.com"
    },
    {
        title: "EduSync",
        desc: "A fully functional school management system enhanced with AI (Gemini Agent). Facilitates communication between parents, students, and staff, answering day-to-day community questions and streamlining administration.",
        tags: ["Next.js", "Supabase", "Tailwind CSS", "AI Integration (Gemini)"],
        accentColor: "#06d6a0",
        icon: Layout,
        liveLink: "https://edusync-8t81.onrender.com"
    },
];

export default function Projects() {
    const [hovered, setHovered] = useState(null);

    const handleProjectClick = (liveLink) => {
        if (liveLink) {
            window.open(liveLink, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div id="projects" className="book-page">
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
                        — Portfolio —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Featured </span>
                        <span className="gradient-text">Projects</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {PROJECTS.map((proj, i) => {
                        const Icon = proj.icon;
                        return (
                            <div
                                key={proj.title}
                                onClick={() => handleProjectClick(proj.liveLink)}
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: `1px solid ${hovered === i ? proj.accentColor + '55' : 'var(--border-color)'}`,
                                    background: hovered === i ? `${proj.accentColor}08` : 'var(--bg-secondary)',
                                    transform: hovered === i ? 'translateY(-6px)' : 'none',
                                    boxShadow: hovered === i ? `0 16px 48px ${proj.accentColor}25` : 'none',
                                    transition: 'var(--transition)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleProjectClick(proj.liveLink);
                                    }
                                }}
                            >
                                {/* Hover Gradient Overlay */}
                                {hovered === i && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `radial-gradient(circle at top right, ${proj.accentColor}15, transparent 70%)`,
                                        pointerEvents: 'none',
                                        zIndex: 0,
                                    }} />
                                )}

                                {/* Live View Badge - Appears on Hover */}
                                {hovered === i && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        padding: '0.3rem 0.9rem',
                                        borderRadius: '50px',
                                        background: proj.accentColor,
                                        color: '#fff',
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.55rem',
                                        fontWeight: 700,
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                        zIndex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        boxShadow: `0 4px 16px ${proj.accentColor}40`,
                                        animation: 'pulse 2s infinite',
                                    }}>
                                        <ExternalLink size={12} />
                                        Live View
                                    </div>
                                )}

                                {/* Content - zIndex: 1 to stay above overlay */}
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <Icon size={32} style={{ color: proj.accentColor }} />
                                        <span style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 900,
                                            fontSize: '0.7rem',
                                            letterSpacing: '2px',
                                            color: `${proj.accentColor}55`,
                                        }}>
                      0{i + 1}
                    </span>
                                    </div>

                                    <h3 style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 700,
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        marginBottom: '0.75rem',
                                    }}>
                                        {proj.title}
                                    </h3>

                                    <p style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '1.5rem',
                                        flexGrow: 1,
                                    }}>
                                        {proj.desc}
                                    </p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {proj.tags.map(tag => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontFamily: "'Inter', sans-serif",
                                                    fontSize: '0.55rem',
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    padding: '0.25rem 0.75rem',
                                                    border: `1px solid ${proj.accentColor}44`,
                                                    borderRadius: '50px',
                                                    color: proj.accentColor,
                                                    background: `${proj.accentColor}0d`,
                                                    transition: 'var(--transition)',
                                                }}
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Click Hint - Bottom Right */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1.5rem',
                                    color: hovered === i ? proj.accentColor : 'var(--text-muted)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.55rem',
                                    opacity: hovered === i ? 1 : 0.2,
                                    transition: 'var(--transition)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    zIndex: 1,
                                }}>
                                    <span>{hovered === i ? 'Click to open' : 'Click to view'}</span>
                                    <ExternalLink size={12} />
                                </div>

                                {/* Bottom Accent Line */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: hovered === i ? `linear-gradient(90deg, ${proj.accentColor}, ${proj.accentColor}44)` : 'transparent',
                                    transition: 'var(--transition)',
                                    borderRadius: '0 0 var(--radius-sm) var(--radius-sm)',
                                }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}