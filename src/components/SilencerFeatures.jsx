import React from 'react';
import { Shield, Wrench, Layers, Award, Sparkles, CheckCircle } from 'lucide-react';

export default function SilencerFeatures() {
  const features = [
    {
      icon: <Layers size={26} color="#DC2626" />,
      title: "2.00mm & 1.60mm Galvanised Steel",
      description: "Manufactured using heavy-gauge galvanised steel sheets and high-quality tube pipes for ultimate rust resistance and structural integrity."
    },
    {
      icon: <Wrench size={26} color="#2563EB" />,
      title: "Precise OEM Fitment",
      description: "Engineered to exact original equipment manufacturer (OEM) dimensions for direct bolt-on replacement across passenger & commercial vehicles."
    },
    {
      icon: <Sparkles size={26} color="#16A34A" />,
      title: "Advanced Noise Attenuation",
      description: "Internal baffle structure scientifically optimized for quiet operation, minimum backpressure, and smooth exhaust flow."
    },
    {
      icon: <Award size={26} color="#D97706" />,
      title: "15-Month Warranty",
      description: "Every TUNEX silencer comes with an official 15-month warranty backing our commitment to reliability and customer satisfaction."
    },
    {
      icon: <Shield size={26} color="#9333EA" />,
      title: "10+ Years Minimum Service Life",
      description: "Built to withstand harsh weather, road salt, moisture, and high thermal stress with an expected 10-year durability."
    },
    {
      icon: <CheckCircle size={26} color="#0EA5E9" />,
      title: "Strict Multi-Point QC Inspection",
      description: "Every unit undergoes rigorous leak, weld, pressure, and acoustic inspection before factory dispatch."
    }
  ];

  return (
    <section id="silencers" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            <Award size={16} /> Premium Automotive Engineering
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
            TUNEX®️ OEM Specification Silencers
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Hi Quality Silencers is the proud manufacturer of <strong>TUNEX®️</strong> brand silencers. Built with heavy-duty materials to deliver quiet performance, high fuel efficiency, and long service life.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '12px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', width: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
                {feat.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>
                {feat.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div style={{ marginTop: '3.5rem', backgroundColor: '#F1F5F9', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-md)', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <img src="/images/silencer1.png" alt="TUNEX Silencer Sample" style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #CBD5E1' }} />
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>Need Custom or Special Model Silencers?</h4>
              <p style={{ color: '#64748B', fontSize: '0.92rem' }}>Over 3,500+ silencer models manufactured for all major car & commercial brands.</p>
            </div>
          </div>
          <a
            href="tel:9645888253"
            style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.9rem',
              whiteSpace: 'nowrap'
            }}
          >
            Inquire Model Availability
          </a>
        </div>
      </div>
    </section>
  );
}
