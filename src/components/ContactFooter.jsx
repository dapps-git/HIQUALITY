import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const quickLinks = ['Home', 'Products', 'About Us', 'Contact Us'];
const services = ['OEM Silencers', 'Sedan & Hatchback', 'SUV & MUV Silencers', 'Commercial Vehicles', 'DPF Cleaning', 'Custom Exhaust'];

export default function ContactFooter() {
  return (
    <footer id="contact" style={{ backgroundColor: '#1A1A1A', color: '#CCCCCC', padding: '3.5rem 0 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr', gap: '3rem', paddingBottom: '2.5rem' }} className="footer-grid">

          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <img
                src="/images/15.webp"
                alt="Hi Quality Silencers"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none', fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>
                Hi Quality Silencers
              </span>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#999999', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Manufacturer of TUNEX® OEM specification silencers for passenger and commercial vehicles. ISO 9001:2015 certified, based in Calicut, Kerala.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.7rem' }}>
              {[
                { icon: <Facebook size={15} />, href: 'https://www.facebook.com/share/1JCThxqeps/' },
                { icon: <Instagram size={15} />, href: 'https://www.instagram.com/hi_quality_silencers?igsh=MXIwemZtNGhwaThyZw==' },
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.938 1.395 5.618L.057 23.453a.75.75 0 00.913.91l5.91-1.551A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  ),
                  href: 'https://wa.me/919645888250'
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#AAAAAA',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#DC2626'; e.currentTarget.style.color = '#DC2626'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#AAAAAA'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '0.88rem', color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Quick Links
            </h4>
            <div style={{ width: '28px', height: '2px', background: '#DC2626', marginBottom: '1.1rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s/g, '-')}`}
                    style={{ fontSize: '0.82rem', color: '#999999', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#DC2626'}
                    onMouseLeave={e => e.currentTarget.style.color = '#999999'}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '0.88rem', color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Our Services
            </h4>
            <div style={{ width: '28px', height: '2px', background: '#DC2626', marginBottom: '1.1rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#products"
                    style={{ fontSize: '0.82rem', color: '#999999', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#DC2626'}
                    onMouseLeave={e => e.currentTarget.style.color = '#999999'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '0.88rem', color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Contact Info
            </h4>
            <div style={{ width: '28px', height: '2px', background: '#DC2626', marginBottom: '1.1rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="https://maps.google.com/?q=Hi+Quality+Silencers+Beypore+Calicut+Kerala+673015"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={14} color="#DC2626" />
                </div>
                <span style={{ fontSize: '0.82rem', color: '#999999', lineHeight: 1.6 }} className="hover-red">
                  47/1302C, Cheerpupalam BC Road,<br />Beypore, Calicut, Kerala – 673015
                </span>
              </a>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={14} color="#DC2626" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a href="tel:+919645888253" style={{ fontSize: '0.82rem', color: '#999999', textDecoration: 'none' }} className="hover-red">
                    +91 9645 888 253
                  </a>
                  <a href="https://wa.me/919645888250" target="_blank" rel="noreferrer" style={{ fontSize: '0.82rem', color: '#999999', textDecoration: 'none' }} className="hover-red">
                    +91 9645 888 250 (WhatsApp)
                  </a>
                </div>
              </div>

              <a
                href="mailto:hiqualitysilencer@gmail.com"
                style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} color="#DC2626" />
                </div>
                <span style={{ fontSize: '0.82rem', color: '#999999' }} className="hover-red">
                  hiqualitysilencer@gmail.com
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#666666' }}>© 2025 Hi Quality Silencers. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.75rem', color: '#666666', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#DC2626'} onMouseLeave={e => e.currentTarget.style.color = '#666666'}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '0.75rem', color: '#666666', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#DC2626'} onMouseLeave={e => e.currentTarget.style.color = '#666666'}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
        }
        .hover-red:hover { color: #DC2626 !important; }
      `}</style>
    </footer>
  );
}
