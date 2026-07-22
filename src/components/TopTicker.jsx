import React from 'react';

const items = [
  '15+ Years Experience', '5,000+ Happy Customers', '250+ Silencer Models',
  'ISO 9001:2015 Certified', '98% Customer Satisfaction', '15 Month Warranty',
  'Pan-India Delivery', 'OEM Specification Quality', '10+ Year Service Life',
];

const repeated = [...items, ...items, ...items, ...items];

export default function TopTicker() {
  return (
    <div style={{
      backgroundColor: '#DC2626',
      overflow: 'hidden',
      height: '34px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', zIndex: 2, background: 'linear-gradient(to right, #DC2626, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60px', zIndex: 2, background: 'linear-gradient(to left, #DC2626, transparent)', pointerEvents: 'none' }} />

      <div className="top-ticker-track" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', gap: 0 }}>
        {repeated.map((item, i) => (
          <React.Fragment key={i}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.06em', padding: '0 1.5rem', textTransform: 'uppercase' }}>
              {item}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .top-ticker-track {
          animation: top-ticker 38s linear infinite;
          will-change: transform;
        }
        .top-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes top-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}
