import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { MdMenu, MdClose, MdDownload, MdDescription } from 'react-icons/md';
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
                    {/* Desktop Navigation */}
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

                    {/* Mobile Hire Me Button - Small version on navbar */}
                    {isMobile && (
                        <a
                            href="mailto:teddy.dande4@gmail.com?subject=Hire%20Enquiry%20-%20Dande%20Teddy&body=Hi%20Teddy%2C%0A%0AI%20would%20like%20to%20hire%20you%20for..."
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.55rem",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                padding: "0.4rem 1rem",
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

            {/* Mobile Menu Overlay */}
            {isMobile && isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 70,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--bg-card)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 49,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        overflowY: 'auto',
                        borderTop: '1px solid var(--border-color)',
                        animation: 'slideIn 0.3s ease-out',
                    }}
                >
                    {/* Navigation Links */}
                    {NAV_LINKS.map(link => {
                        const isActive = activeSection === link.toLowerCase();
                        return (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "1.1rem",
                                    fontWeight: isActive ? 700 : 500,
                                    textTransform: "uppercase",
                                    letterSpacing: "2px",
                                    background: isActive ? 'var(--bg-hover)' : 'transparent',
                                    border: "none",
                                    borderLeft: isActive ? "4px solid var(--accent)" : "4px solid transparent",
                                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                                    cursor: "pointer",
                                    padding: "0.8rem 1.5rem",
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

                    {/* Divider */}
                    <div style={{
                        height: '1px',
                        background: 'var(--border-color)',
                        margin: '0.5rem 0',
                    }} />

                    {/* Mobile CV Download Button */}
                    <a
                        href="/cv.pdf"
                        download="Dande_Teddy_CV.pdf"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.75rem',
                            padding: '0.8rem 1.5rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            transition: 'var(--transition)',
                            width: '100%',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.background = 'var(--bg-hover)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.background = 'var(--bg-secondary)';
                        }}
                    >
                        <MdDescription size={18} />
                        <MdDownload size={18} />
                        <span>Download CV</span>
                    </a>

                    {/* Mobile Hire Me Button - Full width in menu */}
                    <a
                        href="mailto:teddy.dande4@gmail.com?subject=Hire%20Enquiry%20-%20Dande%20Teddy&body=Hi%20Teddy%2C%0A%0AI%20would%20like%20to%20hire%20you%20for..."
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            padding: "0.8rem 2rem",
                            background: "var(--accent-gradient)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "var(--radius-sm)",
                            textDecoration: "none",
                            transition: "var(--transition)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: '0.5rem',
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