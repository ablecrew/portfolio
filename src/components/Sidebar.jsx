import {
    FaGithub
} from 'react-icons/fa';
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdDownload,
    MdDescription,
    MdHome,
    MdPerson,
    MdCode,
    MdWork,
    MdLayers,
    MdStar,
    MdMessage,
    MdChevronRight
} from 'react-icons/md';

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Services", "Testimonials", "Contact"];

const navIcons = {
    Home: MdHome,
    About: MdPerson,
    Skills: MdCode,
    Projects: MdWork,
    Services: MdLayers,
    Testimonials: MdStar,
    Contact: MdMessage
};

export default function Sidebar({ activeSection }) {
    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-color)',
            }}>
        <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: '1.5rem',
            letterSpacing: '2px',
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }}>
          DT
        </span>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
            }}>
                {NAV_LINKS.map(link => {
                    const isActive = activeSection === link.toLowerCase();
                    const Icon = navIcons[link];
                    return (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.65rem 1rem',
                                background: isActive ? 'var(--bg-hover)' : 'transparent',
                                border: 'none',
                                borderRadius: 'var(--radius-sm)',
                                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                                cursor: 'pointer',
                                transition: 'var(--transition)',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.8rem',
                                fontWeight: isActive ? 600 : 400,
                                width: '100%',
                                textAlign: 'left',
                                position: 'relative',
                            }}
                            onMouseEnter={e => {
                                if (!isActive) {
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.background = 'var(--bg-hover)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isActive) {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            {isActive && (
                                <span style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '3px',
                                    height: '20px',
                                    background: 'var(--accent-gradient)',
                                    borderRadius: '0 2px 2px 0',
                                }} />
                            )}
                            <Icon size={16} style={{ paddingLeft: isActive ? '8px' : '0' }} />
                            <span>{link}</span>
                        </button>
                    );
                })}
            </div>

            {/* CV Download */}
            <div style={{
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-color)',
            }}>
                <a
                    href="/cv.pdf"
                    download="Dande_Teddy_CV.pdf"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem 1.25rem',
                        background: 'var(--accent-gradient)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        textDecoration: 'none',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'var(--transition)',
                        width: '100%',
                        justifyContent: 'center',
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
                    <MdDescription size={18} />
                    <MdDownload size={18} />
                    <span>Download CV</span>
                </a>
            </div>

            {/* Social Links */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginTop: '1rem',
                justifyContent: 'center',
            }}>
                {[
                    { icon: FaGithub, href: "https://github.com/ablecrew" },
                    { icon: MdEmail, href: "mailto:teddy.dande4@gmail.com" },
                    { icon: MdPhone, href: "tel:+254707528980" },
                    { icon: MdLocationOn, href: "https://maps.google.com/?q=Nairobi,Kenya" },
                ].map(({ icon: Icon, href }, i) => (
                    <a
                        key={i}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
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
        </nav>
    );
}