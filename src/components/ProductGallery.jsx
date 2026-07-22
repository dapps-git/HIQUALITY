import React from 'react';
import { ShieldCheck, CheckCircle2, Layers, Wrench } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { icon: <ShieldCheck size={18} color="#DC2626" />, title: 'OEM Specification', sub: 'Perfect fitment' },
  { icon: <Layers size={18} color="#DC2626" />, title: 'Premium Material', sub: 'Galvanised steel' },
  { icon: <CheckCircle2 size={18} color="#DC2626" />, title: '15 Month Warranty', sub: 'Quality assured' },
  { icon: <Wrench size={18} color="#DC2626" />, title: 'Easy Installation', sub: 'Direct fit' },
];

export default function ProductGallery() {
  const headerRef    = useScrollReveal({ threshold: 0.1 });
  const highlightRef = useScrollReveal({ threshold: 0.1 });
  const showcaseRef  = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="products" style={{ background: '#FFFFFF', padding: '4rem 0' }}>

      <div className="container">
        {/* Section Header */}
        <div className="reveal-up" ref={headerRef} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <div style={{ width: '24px', height: '2px', background: '#DC2626' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#DC2626', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our Products</span>
            <div style={{ width: '24px', height: '2px', background: '#DC2626' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '2.2rem', color: '#1E232A', lineHeight: 1.15, marginBottom: '0.2rem' }}>
            TUNEX® Exhaust Systems & Parts
          </h2>
          <p style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '1.4rem', color: '#DC2626', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            Built for Performance · Engineered to Last
          </p>
          <p style={{ color: '#64748B', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Explore our complete range of precision-manufactured silencers, dual tailpipes, carbon tips, flex pipes, and heavy-duty clamps.
          </p>
        </div>

        {/* Highlights strip */}
        <div className="reveal-left highlights-grid" ref={highlightRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '2.5rem', background: '#F8FAFC', borderRadius: '8px', padding: '0.85rem 1.25rem', border: '1px solid #E5E7EB' }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #DC2626', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {h.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1E232A' }}>{h.title}</div>
                <div style={{ fontSize: '0.64rem', color: '#64748B' }}>{h.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase Image — Single collage image replace all products */}
        <div className="reveal-up" ref={showcaseRef} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)', border: '1px solid #E5E7EB' }}>
          <img
            src="/images/155.webp"
            alt="TUNEX Performance Exhaust Systems & Silencer Showcase"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            onError={e => {
              e.target.src = '/images/heroo.png';
            }}
          />
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .highlights-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
