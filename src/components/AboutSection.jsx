import React from 'react';
import { ShieldCheck, Volume2, Layers, Clock, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  { icon: <ShieldCheck size={28} color="#DC2626" />, title: 'OEM SPECIFICATION', desc: 'Perfect fitment for passenger & commercial vehicles.' },
  { icon: <Volume2 size={28} color="#DC2626" />, title: 'SUPERIOR NOISE REDUCTION', desc: 'Designed to deliver quieter drives and better performance.' },
  { icon: <Layers size={28} color="#DC2626" />, title: 'PREMIUM MATERIALS', desc: 'Made with high-quality tube pipes and 2.00 mm & 1.60 mm galvanised sheets.' },
  { icon: <Clock size={28} color="#DC2626" />, title: 'LONG LASTING DURABILITY', desc: 'Built to last with a minimum service life of 10 years.' },
];

const bottomBadges = [
  { icon: <ShieldCheck size={24} color="#DC2626" />, title: 'STRICT QUALITY INSPECTION', desc: 'Every product is thoroughly tested before dispatch.' },
  { icon: <span style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: '1.1rem', color: '#DC2626' }}>15</span>, title: '15-MONTH WARRANTY', desc: 'Backed by a 15-month warranty for complete peace of mind.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, title: 'STRONG & DURABLE', desc: 'Built with precision for exceptional strength and reliability.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12l2 2 4-4"/></svg>, title: 'CORROSION RESISTANT', desc: 'Galvanised sheets ensure long-lasting rust protection.' },
  { icon: <CheckCircle2 size={24} color="#DC2626" />, title: 'TRUSTED QUALITY', desc: 'Committed to delivering quality, reliability, and customer satisfaction.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'CUSTOMER FOCUSED', desc: 'Your satisfaction is our top priority.' },
];

export default function AboutSection() {
  const textRef   = useScrollReveal();
  const imageRef  = useScrollReveal();
  const badgesRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="about" style={{ background: '#FFFFFF', padding: '5rem 0 0' }}>

      {/* ── Main Split Grid ── */}
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }} className="about-grid">

          {/* Left: Text — slides in from left */}
          <div className="about-text reveal-left" ref={textRef}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '36px', height: '2px', background: '#DC2626' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#DC2626', letterSpacing: '0.12em', textTransform: 'uppercase' }}>About Us</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: '2.8rem', color: '#1E232A', lineHeight: 1.15, marginBottom: '0.25rem', letterSpacing: '-0.02em' }} className="about-h2">
              ENGINEERED FOR<br />PERFORMANCE.
            </h2>
            <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: '2.8rem', color: '#DC2626', lineHeight: 1.15, marginBottom: '2rem', letterSpacing: '-0.02em' }} className="about-h3">
              BUILT TO LAST.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.75 }}>
                Hi Quality Silencers is the proud manufacturer of the{' '}
                <strong style={{ color: '#DC2626' }}>TUNEX®</strong> brand, specializing in OEM Specification Silencers for passenger and commercial vehicles.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.75 }}>
                Engineered for precise OEM fitment, superior noise reduction, and reliable performance, TUNEX silencers are manufactured using high-quality tube pipes and <strong>2.00 mm & 1.60 mm galvanised sheets</strong> for exceptional strength and durability.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.75 }}>
                Designed to provide a minimum service life of 10 years under normal operating conditions, every silencer undergoes strict quality inspections before dispatch.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.75 }}>
                All TUNEX silencers are backed by a{' '}
                <strong style={{ color: '#DC2626' }}>15-month warranty</strong>, reflecting our commitment to quality, reliability, and customer satisfaction.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer" className="btn-green" style={{ textDecoration: 'none' }}>
                <ShieldCheck size={17} /> Our Warranty
              </a>
            </div>
          </div>

          {/* Right: Image + Feature Cards — slides in from right */}
          <div className="about-right reveal-right" ref={imageRef} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
              <img
                src="/images/about_silencer.png"
                alt="TUNEX premium silencer"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '5px', height: '100%', background: 'linear-gradient(180deg, #DC2626, #B91C1C)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              {features.map((f, i) => (
                <div key={i}
                  style={{ background: '#F8FAFC', border: '1.5px solid #E5E7EB', borderRadius: '10px', padding: '1rem', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#DC2626'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E7EB'}
                >
                  <div style={{ marginBottom: '0.6rem' }}>{f.icon}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1E232A', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Badges Strip — fade up ── */}
      <div style={{ borderTop: '1px solid #E5E7EB', background: '#FAFAFA', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="reveal-up badges-grid" ref={badgesRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.25rem' }}>
            {bottomBadges.map((b, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.6rem', padding: '1rem 0.5rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #DC2626', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {b.icon}
                </div>
                <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#1E232A', letterSpacing: '0.06em', lineHeight: 1.3 }}>{b.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-h2 { font-size: 1.9rem !important; }
          .about-h3 { font-size: 1.9rem !important; }
          .badges-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .about-right { width: 100% !important; }
        }
        @media (max-width: 540px) {
          .about-h2 { font-size: 1.5rem !important; }
          .about-h3 { font-size: 1.5rem !important; }
          .badges-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
