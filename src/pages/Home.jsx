import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
    MdTrendingUp,
    MdPeople,
    MdCheckCircle,
    MdWork,
    MdOutlineFlashOn
} from 'react-icons/md';
import { RiSparkling2Fill } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';

export default function Home() {
    const [typed, setTyped] = useState("");
    const roles = ["Full Stack Developer", "Graphic Designer", "UI/UX Designer", "Brand Strategist", "Android Developer", "iOS Developer"];
    const [roleIdx, setRoleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIdx];
        const timeout = setTimeout(() => {
            if (!deleting) {
                if (charIdx < current.length) {
                    setTyped(current.slice(0, charIdx + 1));
                    setCharIdx(c => c + 1);
                } else {
                    setTimeout(() => setDeleting(true), 1800);
                }
            } else {
                if (charIdx > 0) {
                    setTyped(current.slice(0, charIdx - 1));
                    setCharIdx(c => c - 1);
                } else {
                    setDeleting(false);
                    setRoleIdx(i => (i + 1) % roles.length);
                }
            }
        }, deleting ? 40 : 80);
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, roleIdx]);

    return (
        <div id="home" className="book-page page-flip">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 1rem',
                    border: '1px solid rgba(0,245,212,0.3)',
                    borderRadius: '50px',
                    background: 'rgba(0,245,212,0.05)',
                    width: 'fit-content',
                }}>
          <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse 2s infinite',
              display: 'inline-block',
          }} />
                    <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                    }}>
            Available for Work
          </span>
                </div>

                <h1 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: 1.05,
                    letterSpacing: '-1px',
                }}>
                    <span style={{ color: 'var(--text-primary)' }}>Dande</span>
                    <br />
                    <span className="gradient-text">Teddy</span>
                </h1>

                <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: 'var(--accent)',
                    minHeight: '2rem',
                    fontWeight: 500,
                }}>
                    {typed}<span style={{ animation: 'blink 1s infinite' }}>|</span>
                </div>

                <p style={{
                    maxWidth: '600px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                }}>
                    Nairobi-based creative technologist crafting immersive digital experiences —
                    where pixel-perfect design meets robust engineering. Specializing in full-stack
                    development, mobile apps (Android & iOS), and brand identity design.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        style={{
                            padding: '0.75rem 2rem',
                            background: 'var(--accent-gradient)',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            color: '#fff',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'var(--transition)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,245,212,0.3)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <RiSparkling2Fill size={16} />
                        View Work
                    </button>
                    <a
                        href="https://github.com/ablecrew"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 2rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            transition: 'var(--transition)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <FaGithub size={16} /> GitHub
                    </a>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '3rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-color)',
                    marginTop: '0.5rem',
                }}>
                    {[
                        ["20+", "Projects", BsBriefcase],
                        ["3+", "Years Exp.", MdTrendingUp],
                        ["30+", "Clients", MdPeople],
                        ["100%", "Satisfaction", MdCheckCircle]
                    ].map(([num, label, Icon]) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 900,
                                fontSize: '1.8rem',
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                justifyContent: 'center',
                            }}>
                                {num}
                            </div>
                            <div style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.65rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: 'var(--text-muted)',
                                marginTop: '0.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                justifyContent: 'center',
                            }}>
                                <Icon size={12} />
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}