import React, { useState } from 'react';
import { ShieldCheck, Award, ZoomIn, X, CheckCircle, ExternalLink } from 'lucide-react';

export default function IsoCertificate() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="iso-cert" style={{ padding: '5rem 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="iso-grid">

          {/* Left Column: Certificate Preview Box */}
          <div style={{ textAlign: 'center' }}>
            <div
              onClick={() => setModalOpen(true)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                maxWidth: '460px',
                margin: '0 auto',
                transition: 'transform 0.3s ease'
              }}
              className="cert-card-hover"
            >
              <img
                src="/iso-certificate.png"
                alt="ISO 9001:2015 Certificate - Hi Quality Silencers"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* Click to Enlarge Overlay Tag */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontWeight: 700,
                  opacity: 0,
                  transition: 'opacity 0.25s ease'
                }}
                className="cert-overlay"
              >
                <ZoomIn size={24} /> Click to View Official Certificate
              </div>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <ZoomIn size={14} /> Click image to enlarge ISO 9001:2015 Registration Certificate
            </p>
          </div>

          {/* Right Column: Certificate Details */}
          <div>
            <span className="badge badge-secondary" style={{ marginBottom: '0.75rem', padding: '0.4rem 1rem' }}>
              <Award size={16} color="#D97706" /> QRO Independently Assessed
            </span>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              ISO 9001:2015 Quality Management System Certified
            </h2>

            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Hi Quality Silencers has been independently assessed by <strong>QRO (Quality Research Organization)</strong> and strictly complies with ISO 9001:2015 quality standards.
            </p>

            {/* Cert Specification List */}
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 'var(--radius-md)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.6rem' }}>
                <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem' }}>Certificate Number:</span>
                <span style={{ fontWeight: 700, color: '#0F172A', fontFamily: 'monospace', fontSize: '0.95rem' }}>305026071811Q</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.6rem' }}>
                <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem' }}>Accreditation Bodies:</span>
                <span style={{ fontWeight: 700, color: '#2563EB', fontSize: '0.9rem' }}>EGAC (CAB #011905) & IAF Member</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.6rem' }}>
                <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem' }}>Certified Scope:</span>
                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: '0.88rem', textAlign: 'right', maxWidth: '280px' }}>
                  Manufacturing of Automotive Silencers & Professional Cleaning of DPF, DOC, SCR & ASC Systems
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem' }}>Validity Period:</span>
                <span style={{ fontWeight: 700, color: '#16A34A', fontSize: '0.9rem' }}>18th July 2026 to 17th July 2029</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <ZoomIn size={18} /> Inspect Certificate
              </button>
              <a
                href="https://www.qrocert.org"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                Verify on QRO Portal <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '850px',
              maxHeight: '90vh',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              overflow: 'auto',
              padding: '1rem',
              boxShadow: 'var(--shadow-xl)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={22} />
            </button>

            <img
              src="/iso-certificate.png"
              alt="ISO 9001:2015 Certificate Registration Full View"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-md)' }}
            />
          </div>
        </div>
      )}

      <style>{`
        .cert-card-hover:hover .cert-overlay { opacity: 1 !important; }
        @media (max-width: 900px) {
          .iso-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
