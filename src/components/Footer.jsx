import { FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdFavorite } from 'react-icons/md';

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Services", "Testimonials", "Contact"];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer style={{
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            marginTop: '2rem',
        }}>
            <div style={{
                maxWidth: 1280,
                margin: '0 auto',
                padding: '3rem 1.5rem 2rem',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr 1fr',
                    gap: '2.5rem',
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid var(--border-color)',
                }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 900,
                            fontSize: '1.4rem',
                            letterSpacing: '4px',
                            background: 'var(--accent-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '0.75rem',
                        }}>
                            DT
                        </div>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            maxWidth: 220,
                        }}>
                            Full Stack Developer &amp; Graphic Designer crafting digital experiences from Nairobi, Kenya.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                            {[
                                { icon: FaGithub, href: "https://github.com/ablecrew" },
                                { icon: MdEmail, href: "mailto:teddy.dande4@gmail.com" },
                                { icon: MdPhone, href: "tel:+254707528980" },
                                { icon: MdLocationOn, href: "https://maps.google.com/?q=Nairobi,Kenya" },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'var(--accent)';
                                        e.currentTarget.style.color = 'var(--accent)';
                                        e.currentTarget.style.background = 'var(--bg-hover)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.6rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '1.25rem',
                        }}>
                            Quick Links
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {NAV_LINKS.map(link => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        padding: 0,
                                        transition: 'var(--transition)',
                                        width: 'fit-content',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.6rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '1.25rem',
                        }}>
                            Contact
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {[
                                ["teddy.dande4@gmail.com", "mailto:teddy.dande4@gmail.com"],
                                ["+254 707 528 980", "tel:+254707528980"],
                                ["github.com/ablecrew", "https://github.com/ablecrew"],
                                ["Nairobi, Kenya", "https://maps.google.com/?q=Nairobi,Kenya"],
                            ].map(([val, href]) => (
                                <a
                                    key={val}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    {val}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                }}>
                    <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '1px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                    }}>
                        © {currentYear} Dande Teddy — All rights reserved.
                    </div>
                    <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                    }}>
                        Crafted with <MdFavorite size={12} style={{ color: 'var(--accent)' }} /> in <span style={{ color: 'var(--accent)' }}>Nairobi, Kenya</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}