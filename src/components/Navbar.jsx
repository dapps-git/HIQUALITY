import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px' }}>

          {/* 15 Logo image — Increased size as requested (height: 60px) */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '4px 0' }}>
            <img
              src="/images/15.webp"
              alt="Hi Quality Silencers - 15 Years Experience"
              style={{ height: '60px', width: 'auto', objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }}
              onError={e => {
                e.target.src = '/images/logo.webp';
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-links">
            {links.map(l => (
              <a key={l.label} href={l.href}
                style={{ fontSize: '0.88rem', fontWeight: 500, color: '#374151', letterSpacing: '0.01em', transition: 'color 0.2s' }}
                className="nav-link"
              >{l.label}</a>
            ))}
          </div>

          {/* WhatsApp CTA Link */}
          <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.45rem',
              backgroundColor: 'transparent', color: '#DC2626',
              border: '1.5px solid #DC2626',
              padding: '0.55rem 1.25rem', borderRadius: '0px',
              fontWeight: 500, fontSize: '0.82rem', whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
            className="nav-cta"
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#DC2626'; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#DC2626'; }}
          >
            <MessageCircle size={15} /> +91 9645 888 250
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: 'none', padding: '8px', color: '#1E232A', background: 'none', border: 'none' }}
            className="mobile-menu-btn" aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            backgroundColor: '#FFFFFF', borderTop: '2px solid #DC2626',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 999
          }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1E232A', padding: '8px 0', borderBottom: '1px solid #F1F5F9' }}
              >{l.label}</a>
            ))}
            <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer"
              style={{
                backgroundColor: 'transparent', color: '#DC2626', border: '1.5px solid #DC2626',
                padding: '0.7rem', borderRadius: '0px', fontWeight: 500, fontSize: '0.88rem',
                textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
              }}
            >
              <MessageCircle size={16} /> +91 9645 888 250
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link:hover { color: #DC2626 !important; }
      `}</style>
    </>
  );
}
