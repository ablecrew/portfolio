import { Smartphone, Apple, MapPin, Target, Code2, Palette, Layout } from 'lucide-react';

export default function About() {
    return (
        <div id="about" className="book-page">
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
                        — About Me —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Who I </span>
                        <span className="gradient-text">Am</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                }} className="about-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                        }}>
                            I'm a multidisciplinary creative technologist based in Nairobi, Kenya,
                            passionate about building digital experiences that are both beautiful
                            and functional.
                        </p>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                        }}>
                            With expertise spanning full-stack web development, mobile app development
                            (Android & iOS), and brand identity design, I bring a holistic approach
                            to every project I undertake.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}>
                        <div style={{
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.5rem',
                            }}>
                                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                                <span style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                }}>Location</span>
                            </div>
                            <span style={{
                                fontFamily: "'Inter', sans-serif",
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                            }}>Nairobi, Kenya</span>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-secondary)',
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '0.5rem',
                            }}>
                                <Target size={18} style={{ color: 'var(--accent)' }} />
                                <span style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                }}>Focus Areas</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.5rem',
                            }}>
                                {[
                                    { label: 'Web Development', icon: Code2 },
                                    { label: 'Mobile Apps', icon: Smartphone },
                                    { label: 'UI/UX Design', icon: Layout },
                                    { label: 'Brand Identity', icon: Palette }
                                ].map(({ label, icon: Icon }) => (
                                    <span key={label} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '50px',
                                        border: '1px solid var(--border-color)',
                                        fontSize: '0.7rem',
                                        color: 'var(--text-secondary)',
                                        fontFamily: "'Inter', sans-serif",
                                    }}>
                    <Icon size={12} />
                                        {label}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                }}>
                    <h3 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                    }}>
                        Mobile Development Expertise
                    </h3>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <Smartphone size={24} style={{ color: '#3DDC84' }} />
                            <div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                }}>Android</div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.7rem',
                                    color: 'var(--text-muted)',
                                }}>Kotlin, Java, Android Studio</div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <Apple size={24} style={{ color: '#A2AAAD' }} />
                            <div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                }}>iOS</div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.7rem',
                                    color: 'var(--text-muted)',
                                }}>Swift, Xcode, UIKit</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                }}>
                    <div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.65rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '0.5rem',
                        }}>Email</div>
                        <a href="mailto:teddy.dande4@gmail.com" style={{
                            fontFamily: "'Inter', sans-serif",
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            transition: 'var(--transition)',
                        }}
                           onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                           onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            teddy.dande4@gmail.com
                        </a>
                    </div>
                    <div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.65rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '0.5rem',
                        }}>Phone</div>
                        <a href="tel:+254707528980" style={{
                            fontFamily: "'Inter', sans-serif",
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            transition: 'var(--transition)',
                        }}
                           onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                           onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                            +254 707 528 980
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}