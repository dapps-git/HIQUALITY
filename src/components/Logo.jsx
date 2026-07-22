import React from 'react';

export default function Logo({ size = 'medium' }) {
  const isSmall = size === 'small';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: isSmall ? '0.6rem' : '0.85rem' }}>
      {/* Silencer Graphic SVG */}
      <svg width={isSmall ? "38" : "48"} height={isSmall ? "32" : "40"} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Muffler Body */}
        <rect x="25" y="15" width="45" height="35" rx="12" fill="url(#metalGrad)" stroke="#1E232A" strokeWidth="3" />
        {/* Tailpipes */}
        <rect x="5" y="20" width="22" height="11" rx="4" fill="url(#pipeGrad)" stroke="#1E232A" strokeWidth="2.5" />
        <rect x="5" y="34" width="22" height="11" rx="4" fill="url(#pipeGrad)" stroke="#1E232A" strokeWidth="2.5" />
        {/* Pipe inlets */}
        <ellipse cx="5" cy="25.5" rx="3" ry="5.5" fill="#14181D" stroke="#DC2626" strokeWidth="1.5" />
        <ellipse cx="5" cy="39.5" rx="3" ry="5.5" fill="#14181D" stroke="#DC2626" strokeWidth="1.5" />
        {/* Right Pipe Connector */}
        <path d="M70 28H85C88 28 90 30 90 33V35" stroke="#1E232A" strokeWidth="5" strokeLinecap="round" />
        {/* Green Swoosh Trail */}
        <path d="M12 60C35 55 65 52 92 68C68 62 42 66 22 75C20 68 15 62 12 60Z" fill="#DC2626" />
        <path d="M28 52C45 48 70 47 88 56C70 52 50 54 34 62Z" fill="#B91C1C" opacity="0.8" />

        <defs>
          <linearGradient id="metalGrad" x1="25" y1="15" x2="70" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#94A3B8" />
            <stop offset="0.4" stopColor="#E2E8F0" />
            <stop offset="0.8" stopColor="#64748B" />
            <stop offset="1" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="pipeGrad" x1="5" y1="20" x2="27" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CBD5E1" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.95 }}>
        <span style={{ fontFamily: 'var(--font-main)', fontWeight: 900, fontSize: isSmall ? '1.1rem' : '1.35rem', letterSpacing: '-0.02em', color: '#1E232A' }}>
          HIQUALITY
        </span>
        <span style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: isSmall ? '0.72rem' : '0.88rem', letterSpacing: '0.12em', color: '#DC2626', marginTop: '2px' }}>
          SILENCERS
        </span>
      </div>
    </div>
  );
}
