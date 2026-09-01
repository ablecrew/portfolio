import { useState } from 'react';
import {
    FaReact,
    FaVuejs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaPhp,
    FaJava,
    FaFigma,
    FaAndroid,
    FaApple,
    FaBezierCurve,
    FaPaintBrush,
    FaPalette
} from "react-icons/fa";

import {
    SiJavascript,
    SiDjango,
    SiPostgresql,
    SiKotlin,
    SiSwift
} from "react-icons/si";

import {
    MdCode,
    MdStorage,
    MdPalette,
    MdDevices
} from 'react-icons/md';

import {
    RiServerFill,
    RiLayoutFill
} from 'react-icons/ri';

const SKILLS = [
    // Frontend
    { name: "React", level: 92, cat: "Frontend", icon: FaReact },
    { name: "Vue.js", level: 80, cat: "Frontend", icon: FaVuejs },
    { name: "HTML/CSS", level: 95, cat: "Frontend", icon: FaHtml5 },
    { name: "JavaScript", level: 90, cat: "Frontend", icon: SiJavascript },

    // Backend
    { name: "Django", level: 88, cat: "Backend", icon: SiDjango },
    { name: "Python", level: 85, cat: "Backend", icon: FaPython },
    { name: "PHP", level: 78, cat: "Backend", icon: FaPhp },
    { name: "Java", level: 75, cat: "Backend", icon: FaJava },
    { name: "PostgreSQL", level: 80, cat: "Backend", icon: SiPostgresql },
    { name: "REST APIs", level: 87, cat: "Backend", icon: RiServerFill },

    // Design
    // Design
    { name: "Figma", level: 93, cat: "Design", icon: FaFigma },
    { name: "Adobe XD", level: 85, cat: "Design", icon: FaPalette },
    { name: "Illustrator", level: 88, cat: "Design", icon: FaBezierCurve },
    { name: "Photoshop", level: 82, cat: "Design", icon: FaPaintBrush },
    { name: "Canva", level: 90, cat: "Design", icon: FaPalette },

    // Mobile
    { name: "Android (Kotlin/Java)", level: 78, cat: "Mobile", icon: FaAndroid },
    { name: "iOS (Swift)", level: 75, cat: "Mobile", icon: FaApple },
    { name: "React Native", level: 82, cat: "Mobile", icon: MdDevices },
];

const catColors = {
    Frontend: "#00f5d4",
    Backend: "#7b2fff",
    Design: "#f72585",
    Mobile: "#ff6b35",
};

const catIcons = {
    Frontend: FaReact,
    Backend: RiServerFill,
    Design: FaFigma,
    Mobile: FaAndroid,
};

export default function Skills() {
    const [activeCat, setActiveCat] = useState("All");
    const cats = ["All", "Frontend", "Backend", "Design", "Mobile"];
    const filtered = activeCat === "All" ? SKILLS : SKILLS.filter(s => s.cat === activeCat);

    return (
        <div id="skills" className="book-page">
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
                        — Expertise —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Skills & </span>
                        <span className="gradient-text">Arsenal</span>
                    </h2>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {cats.map(cat => {
                        const Icon = catIcons[cat];
                        const color = catColors[cat] || 'var(--accent)';
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '50px',
                                    border: `1px solid ${activeCat === cat ? color : 'var(--border-color)'}`,
                                    background: activeCat === cat ? `${color}18` : 'transparent',
                                    color: activeCat === cat ? color : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                }}
                            >
                                {Icon && <Icon size={14} />}
                                {cat}
                            </button>
                        );
                    })}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                }}>
                    {filtered.map(skill => {
                        const color = catColors[skill.cat] || 'var(--accent)';
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--border-color)',
                                    background: 'var(--bg-secondary)',
                                    transition: 'var(--transition)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = `${color}55`;
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Icon size={18} style={{ color }} />
                                        <div>
                                            <div style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 700,
                                                color: 'var(--text-primary)',
                                                fontSize: '0.9rem',
                                            }}>
                                                {skill.name}
                                            </div>
                                            <div style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '0.6rem',
                                                letterSpacing: '2px',
                                                textTransform: 'uppercase',
                                                color: `${color}99`,
                                                marginTop: '0.25rem',
                                            }}>
                                                {skill.cat}
                                            </div>
                                        </div>
                                    </div>
                                    <span style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 900,
                                        fontSize: '1.1rem',
                                        color,
                                    }}>
                    {skill.level}%
                  </span>
                                </div>
                                <div style={{
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'var(--border-color)',
                                    overflow: 'hidden',
                                }}>
                                    <div style={{
                                        height: '100%',
                                        borderRadius: '4px',
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                                        transition: 'width 1s ease',
                                    }} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                    }}>
                        <FaAndroid size={24} style={{ color: '#3DDC84' }} />
                        <span style={{
                            fontFamily: "'Inter', sans-serif",
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                        }}>
              Android Development
            </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                    }}>
                        <FaApple size={24} style={{ color: '#A2AAAD' }} />
                        <span style={{
                            fontFamily: "'Inter', sans-serif",
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                        }}>
              iOS Development
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}