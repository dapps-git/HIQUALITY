import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Chemical Soak', desc: 'DPF soaked in professional-grade cleaning solution to dissolve ash and soot deposits.' },
  { num: '02', title: 'Hydro-Pneumatic Wash', desc: 'High-pressure water and air flush removes residues from deep within the filter matrix.' },
  { num: '03', title: 'Thermal Treatment', desc: 'Controlled heat applied to burn off remaining contaminants and restore filter efficiency.' },
  { num: '04', title: 'Pressure Test', desc: 'Final back-pressure test confirms full flow restoration and filter integrity before return.' },
];

export default function DpfCleaning() {
  const imgRef  = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <section id="dpf" style={{ background: '#F8FAFC', padding: '4.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="dpf-grid">

          {/* Left: Image — slide from left */}
          <div className="reveal-left" ref={imgRef} style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/dpf_service.webp"
              alt="Professional DPF cleaning service"
              style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Right: Content — slide from right */}
          <div className="reveal-right" ref={textRef}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '28px', height: '2px', background: '#DC2626' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#DC2626', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Additional Service</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '2rem', color: '#1E232A', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              DPF Cleaning Service
            </h2>

            <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Professional DPF (Diesel Particulate Filter) cleaning using multi-stage hydro-pneumatic process. Starting from <strong style={{ color: '#DC2626' }}>₹6,000</strong>. Turnaround in <strong>1–2 working days</strong>. Pan-India courier service available.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0, width: '36px', height: '36px', borderRadius: '8px',
                    background: '#DC2626', color: '#FFFFFF', fontWeight: 800, fontSize: '0.72rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>{s.num}</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E232A', marginBottom: '2px' }}>{s.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer" className="btn-green" style={{ textDecoration: 'none', fontSize: '0.82rem' }}>
                Enquire on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dpf-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
