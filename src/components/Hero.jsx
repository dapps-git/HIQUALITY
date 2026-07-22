import React, { useEffect, useRef } from 'react';
import { MessageCircle, ShieldCheck, Gauge, ShieldAlert } from 'lucide-react';

const badges = [
  {
    icon: <ShieldCheck size={20} color="#DC2626" strokeWidth={1.8} />,
    title: 'PREMIUM QUALITY',
    subtitle: 'OEM Standard'
  },
  {
    icon: <Gauge size={20} color="#DC2626" strokeWidth={1.8} />,
    title: 'PERFORMANCE TESTED',
    subtitle: 'Dynamometer Proven'
  },
  {
    icon: <ShieldAlert size={20} color="#DC2626" strokeWidth={1.8} />,
    title: 'RUST RESISTANT',
    subtitle: 'Galvanised Steel'
  },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const h = window.innerHeight;
    el.style.height = `${Math.min(h, 850)}px`;
  }, []);

  return (
    <section id="hero" style={{ padding: 0, overflow: 'hidden' }}>
      <div
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          maxHeight: '850px',
          minHeight: '520px',
          backgroundImage: 'url("/images/bmw_hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Mobile-optimized high-contrast gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(10,14,20,0.96) 0%, rgba(10,14,20,0.75) 55%, rgba(10,14,20,0.3) 85%, rgba(10,14,20,0.15) 100%)'
        }} />

        {/* Hero Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          padding: '2.5rem 1.25rem 2rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          maxWidth: '740px', width: '100%',
        }}>

          {/* Headlines — Lighter font weight */}
          <h1 className="hero-h1" style={{
            fontFamily: 'var(--font-main)', fontWeight: 500,
            color: '#FFFFFF', lineHeight: 1.15, marginBottom: '0.35rem',
            letterSpacing: '0.01em',
          }}>
            PREMIUM EXHAUST SYSTEMS
          </h1>

          <h2 className="hero-h2" style={{
            fontFamily: 'var(--font-main)', fontWeight: 600,
            color: '#DC2626', lineHeight: 1.15, marginBottom: '0.85rem',
            letterSpacing: '0.01em',
          }}>
            BUILT FOR PERFORMANCE.
          </h2>

          {/* Description */}
          <p className="hero-desc" style={{
            color: 'rgba(255,255,255,0.85)', lineHeight: 1.6,
            marginBottom: '1.75rem', fontWeight: 300,
            maxWidth: '460px',
          }}>
            High quality silencers, exhaust systems and performance parts for unmatched power and sound.
          </p>

          {/* WhatsApp CTA Button — Sharp rectangular, outline red */}
          <div style={{ marginBottom: '2.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer" style={{
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8rem 1.85rem',
              borderRadius: '0px',
              backgroundColor: 'rgba(220,38,38,0.1)',
              border: '1.5px solid #DC2626',
              color: '#FFFFFF', fontWeight: 500, fontSize: '0.85rem',
              letterSpacing: '0.04em',
              transition: 'all 0.25s ease',
              maxWidth: '320px', width: '100%',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(220,38,38,0.2)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#DC2626';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(220,38,38,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(220,38,38,0.1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.2)';
            }}
            >
              <MessageCircle size={17} color="#DC2626" /> Contact Us on WhatsApp
            </a>
          </div>

          {/* 3 Badges Row — Elegant Glassmorphism Cards */}
          <div className="hero-badges">
            {badges.map((b, i) => (
              <div key={i} className="hero-badge-col" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem',
                flex: 1, minWidth: '0',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '0.85rem 0.5rem',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(220,38,38,0.6)';
                e.currentTarget.style.background = 'rgba(220,38,38,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(220,38,38,0.25) 0%, rgba(220,38,38,0.08) 100%)',
                  border: '1px solid rgba(220,38,38,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(220,38,38,0.2)'
                }}>
                  {b.icon}
                </div>
                <div style={{
                  fontSize: '0.64rem', fontWeight: 600,
                  color: '#FFFFFF',
                  textTransform: 'uppercase', letterSpacing: '0.04em',
                  textAlign: 'center', lineHeight: 1.25,
                }}>
                  {b.title}
                </div>
                <div style={{
                  fontSize: '0.58rem', fontWeight: 400,
                  color: 'rgba(255,255,255,0.6)',
                  textAlign: 'center', lineHeight: 1.2,
                }}>
                  {b.subtitle}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .hero-h1   { font-size: 2.5rem; }
        .hero-h2   { font-size: 2rem; }
        .hero-desc { font-size: 0.92rem; }
        .hero-badges {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1rem;
          width: 100%;
          max-width: 600px;
        }

        @media (max-width: 768px) {
          .hero-h1   { font-size: 1.65rem !important; }
          .hero-h2   { font-size: 1.3rem !important; }
          .hero-desc { font-size: 0.82rem !important; padding: 0 0.5rem; }
          .hero-badges { gap: 0.5rem !important; }
        }

        @media (max-width: 480px) {
          .hero-h1   { font-size: 1.4rem !important; }
          .hero-h2   { font-size: 1.15rem !important; }
          .hero-desc { font-size: 0.78rem !important; }
          .hero-badges { gap: 0.4rem !important; }
        }
      `}</style>
    </section>
  );
}
