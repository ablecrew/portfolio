import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { MdMenu, MdClose } from 'react-icons/md';
import { useMediaQuery } from '../hooks/useMediaQuery';

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Services", "Testimonials", "Contact"];

export default function Navbar({ activeSection }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 2rem",
                background: scrolled ? "var(--bg-card)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border-color)" : "none",
                transition: "var(--transition)",
                boxShadow: scrolled ? "var(--shadow)" : "none",
            }}>
        <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "1.25rem",
            letterSpacing: "4px",
            background: "var(--accent-gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}>
          DT
        </span>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    {/* Desktop Navigation - Only show on desktop */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}>
                            {NAV_LINKS.map(link => {
                                const isActive = activeSection === link.toLowerCase();
                                return (
                                    <button
                                        key={link}
                                        onClick={() => scrollTo(link)}
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.65rem",
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            background: "transparent",
                                            border: "none",
                                            borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                                            color: isActive ? "var(--accent)" : "var(--text-muted)",
                                            cursor: "pointer",
                                            padding: "0.5rem 0",
                                            transition: "var(--transition)",
                                        }}
                                        onMouseEnter={e => {
                                            if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                                        }}
                                        onMouseLeave={e => {
                                            if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                                        }}
                                    >
                                        {link}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    <ThemeToggle />

                    {/* Hire Me - Desktop Only */}
                    {!isMobile && (
                        <a
                            href="mailto:teddy.dande4@gmail.com?subject=Hire%20Enquiry%20-%20Dande%20Teddy&body=Hi%20Teddy%2C%0A%0AI%20would%20like%20to%20hire%20you%20for..."
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.65rem",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                padding: "0.6rem 1.5rem",
                                background: "var(--accent-gradient)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50px",
                                textDecoration: "none",
                                transition: "var(--transition)",
                                display: "inline-block",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,245,212,0.3)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            Hire Me
                        </a>
                    )}

                    {/* Hamburger Menu - Mobile Only */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0.5rem',
                                background: 'transparent',
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu Overlay - Only show on mobile when open */}
            {isMobile && (
                <div
                    style={{
                        position: 'fixed',
                        top: 70,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--bg-card)',
                        backdropFilter: 'blur(20px)',
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.3s ease-in-out',
                        zIndex: 49,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        overflowY: 'auto',
                        borderTop: '1px solid var(--border-color)',
                    }}
                >
                    {NAV_LINKS.map(link => {
                        const isActive = activeSection === link.toLowerCase();
                        return (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "1.2rem",
                                    fontWeight: isActive ? 700 : 500,
                                    textTransform: "uppercase",
                                    letterSpacing: "2px",
                                    background: isActive ? 'var(--bg-hover)' : 'transparent',
                                    border: "none",
                                    borderLeft: isActive ? "4px solid var(--accent)" : "4px solid transparent",
                                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                                    cursor: "pointer",
                                    padding: "1rem 1.5rem",
                                    transition: "var(--transition)",
                                    textAlign: "left",
                                    width: "100%",
                                    borderRadius: "var(--radius-sm)",
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = "var(--text-primary)";
                                        e.currentTarget.style.background = 'var(--bg-hover)';
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = "var(--text-secondary)";
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                {link}
                            </button>
                        );
                    })}

                    {/* Mobile Hire Me Button */}
                    <a
                        href="mailto:teddy.dande4@gmail.com?subject=Hire%20Enquiry%20-%20Dande%20Teddy&body=Hi%20Teddy%2C%0A%0AI%20would%20like%20to%20hire%20you%20for..."
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            padding: "1rem 2rem",
                            background: "var(--accent-gradient)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "var(--radius-sm)",
                            textDecoration: "none",
                            transition: "var(--transition)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "1rem",
                            width: "100%",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,245,212,0.3)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </>
    );
}