import React from 'react';
import { Award, ShieldCheck, Users, Wrench, Clock } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    { icon: <Clock size={28} color="#DC2626" />, value: "15+", label: "Years Experience", desc: "Trusted automotive leadership" },
    { icon: <Wrench size={28} color="#2563EB" />, value: "3,500+", label: "Silencer Models", desc: "Passenger & commercial vehicles" },
    { icon: <Users size={28} color="#16A34A" />, value: "1,800+", label: "Dealer Network", desc: "Strong presence across India" },
    { icon: <Award size={28} color="#D97706" />, value: "15 Months", label: "Product Warranty", desc: "100% quality guarantee" },
    { icon: <ShieldCheck size={28} color="#9333EA" />, value: "10+ Years", label: "Service Life", desc: "Galvanised 2.0mm/1.6mm steel" }
  ];

  return (
    <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '2.5rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.75rem', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ padding: '1.25rem 1rem', borderRadius: 'var(--radius-md)', backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.2s' }}>
              <div style={{ display: 'inline-flex', padding: '0.65rem', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '0.75rem' }}>
                {stat.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#F1F5F9', marginTop: '0.35rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
