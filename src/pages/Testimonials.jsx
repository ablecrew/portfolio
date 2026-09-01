import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "Sarah Kamau",
        role: "CEO, TechVentures KE",
        text: "Crestline delivered a stunning brand identity and a fully functional web app in record time. Truly a rare talent who bridges design and engineering seamlessly.",
        avatar: "SK"
    },
    {
        name: "James Omondi",
        role: "Founder, NexaRetail",
        text: "Our e-commerce platform exceeded every expectation. Clean code, beautiful UI, and excellent communication throughout the project.",
        avatar: "JO"
    },
    {
        name: "Amira Hassan",
        role: "Product Manager, DataSync",
        text: "The dashboard Crestline built transformed how our team interacts with data. Exceptional attention to detail and a deep understanding of user needs.",
        avatar: "AH"
    },
];

export default function Testimonials() {
    return (
        <div id="testimonials" className="book-page">
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
                        — Social Proof —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Client </span>
                        <span className="gradient-text">Voices</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            style={{
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-color)',
                                background: 'var(--bg-secondary)',
                                transition: 'var(--transition)',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,245,212,0.25)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border-color)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} size={14} fill="var(--accent)" color="var(--accent)" />
                                ))}
                            </div>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.8,
                                fontStyle: 'italic',
                                flexGrow: 1,
                                marginBottom: '1.5rem',
                            }}>
                                "{t.text}"
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                paddingTop: '1.25rem',
                                borderTop: '1px solid var(--border-color)',
                            }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.65rem',
                                    fontWeight: 900,
                                    color: '#fff',
                                    flexShrink: 0,
                                    background: 'var(--accent-gradient)',
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 700,
                                        color: 'var(--text-primary)',
                                        fontSize: '0.75rem',
                                    }}>
                                        {t.name}
                                    </div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.7rem',
                                        color: 'var(--text-muted)',
                                        marginTop: '0.125rem',
                                    }}>
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}