import React from 'react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5,000+', label: 'Happy Customers' },
  { value: '3,500+', label: 'Silencer Models' },
  { value: '1,800+', label: 'Dealer Network' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '15 Mo', label: 'Full Warranty' },
  { value: '250+', label: 'Products' },
  { value: '10+ Yrs', label: 'Service Life' },
];

// Duplicate for seamless infinite scroll
const repeated = [...stats, ...stats, ...stats];

export default function StatsTicker() {
  return (
    <div style={{
      backgroundColor: '#1A1A1A',
      borderTop: '2px solid #DC2626',
      borderBottom: '2px solid #DC2626',
      overflow: 'hidden',
      padding: '0',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to right, #1A1A1A, transparent)'
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', zIndex: 2,
        background: 'linear-gradient(to left, #1A1A1A, transparent)'
      }} />

      {/* Scrolling track */}
      <div className="ticker-track" style={{
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        padding: '1rem 0',
      }}>
        {repeated.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0 2.5rem', flexShrink: 0
            }}>
              <span style={{
                fontFamily: 'var(--font-main)', fontWeight: 800,
                fontSize: '1.25rem', color: '#DC2626', letterSpacing: '-0.01em'
              }}>
                {s.value}
              </span>
              <span style={{
                fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase'
              }}>
                {s.label}
              </span>
            </div>
            {/* Green dot separator */}
            <span style={{ color: '#DC2626', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 16s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
