import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaGithub } from 'react-icons/fa';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(null);

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.message) {
            setStatus("error:Please fill in all fields.");
            return;
        }
        setLoading(true);
        setStatus("");
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    to_email: "teddy.dande4@gmail.com",
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success:Message sent! I'll get back to you within 24 hours.");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error:Failed to send. Please email teddy.dande4@gmail.com directly.");
        }
        setLoading(false);
    };

    const isSuccess = status.startsWith("success:");
    const statusMsg = status.replace(/^(success|error):/, "");

    const contactItems = [
        { icon: Mail, label: "Email", value: "teddy.dande4@gmail.com", href: "mailto:teddy.dande4@gmail.com", color: "#00f5d4" },
        { icon: Phone, label: "Phone", value: "+254 707 528 980", href: "tel:+254707528980", color: "#7b2fff" },
        { icon: FaGithub, label: "GitHub", value: "github.com/ablecrew", href: "https://github.com/ablecrew", color: "#00cfff" },
        { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "https://maps.google.com/?q=Nairobi,Kenya", color: "#f72585" },
    ];

    const inputBase = {
        width: "100%",
        boxSizing: "border-box",
        padding: "0.75rem 1rem",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.88rem",
        color: "var(--text-primary)",
        outline: "none",
        background: "var(--bg-input)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-sm)",
        transition: "var(--transition)",
    };

    return (
        <div id="contact" className="book-page">
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
                        — Get In Touch —
                    </div>
                    <h2 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        letterSpacing: '-0.5px',
                    }}>
                        <span style={{ color: 'var(--text-primary)' }}>Let's Build </span>
                        <span className="gradient-text">Together</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.3fr',
                    gap: '2rem',
                }} className="contact-grid">
                    {/* Left panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                        }}>
                            Have a project in mind? I'd love to hear about it. Reach out and let's
                            create something remarkable together.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {contactItems.map(({ icon: Icon, label, value, href, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.75rem 1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-secondary)',
                                        textDecoration: 'none',
                                        transition: 'var(--transition)',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = `${color}55`;
                                        e.currentTarget.style.transform = 'translateX(4px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <div style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color,
                                        background: `${color}15`,
                                        border: `1px solid ${color}30`,
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: '0.6rem',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            color: 'var(--text-muted)',
                                            marginBottom: '0.125rem',
                                        }}>
                                            {label}
                                        </div>
                                        <div style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color,
                                        }}>
                                            {value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            border: '1px solid rgba(0,245,212,0.2)',
                            background: 'rgba(0,245,212,0.05)',
                            alignSelf: 'flex-start',
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
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: 'var(--accent)',
                            }}>
                Open to new projects
              </span>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                    }}>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            marginBottom: '1.5rem',
                        }}>
                            Send a Message
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                            }} className="form-row">
                                {[
                                    { key: "name", label: "Your Name", type: "text", ph: "John Doe" },
                                    { key: "email", label: "Email Address", type: "email", ph: "john@example.com" },
                                ].map(({ key, label, type, ph }) => (
                                    <div key={key}>
                                        <label style={{
                                            display: "block",
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "0.6rem",
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            color: "var(--text-muted)",
                                            marginBottom: "0.5rem",
                                        }}>
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            value={form[key]}
                                            placeholder={ph}
                                            onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                                            onFocus={() => setFocused(key)}
                                            onBlur={() => setFocused(null)}
                                            style={{
                                                ...inputBase,
                                                borderColor: focused === key ? 'var(--accent)' : 'var(--border-color)',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label style={{
                                    display: "block",
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "0.6rem",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "var(--text-muted)",
                                    marginBottom: "0.5rem",
                                }}>
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    value={form.message}
                                    placeholder="Tell me about your project, timeline, and budget..."
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    style={{
                                        ...inputBase,
                                        resize: "vertical",
                                        borderColor: focused === "message" ? 'var(--accent)' : 'var(--border-color)',
                                    }}
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "none",
                                    borderRadius: "var(--radius-sm)",
                                    cursor: loading ? "wait" : "pointer",
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    background: loading ? "rgba(0,245,212,0.3)" : "var(--accent-gradient)",
                                    color: "#fff",
                                    transition: "var(--transition)",
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                }}
                                onMouseEnter={e => {
                                    if (!loading) {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,245,212,0.3)";
                                    }
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status && (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    background: isSuccess ? 'rgba(0,245,212,0.08)' : 'rgba(248,113,113,0.08)',
                                    border: `1px solid ${isSuccess ? 'rgba(0,245,212,0.2)' : 'rgba(248,113,113,0.2)'}`,
                                }}>
                                    {isSuccess ? <CheckCircle size={16} color="var(--accent)" /> : <AlertCircle size={16} color="#f87171" />}
                                    <span style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.82rem',
                                        color: isSuccess ? 'var(--accent)' : '#f87171',
                                    }}>
                    {statusMsg}
                  </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}