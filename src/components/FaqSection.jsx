import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const headerRef = useScrollReveal();
  const listRef   = useScrollReveal({ threshold: 0.05 });

  const faqs = [
    {
      question: "1. Why should a DPF be cleaned?",
      answer: `When soot and ash accumulate inside the DPF and cause blockage:
• ⚠️ Engine performance may decrease.
• ⚠️ Fuel consumption may increase.
• ⚠️ The risk of turbocharger damage may increase.
• ⚠️ Components such as the EGR Valve, Differential Pressure Sensor, and EGT Sensor may be affected.
• ⚠️ The engine may overheat.
• ⚠️ The DPF Warning Light or Check Engine Light may illuminate.
• ⚠️ Emission control efficiency may decrease, resulting in increased pollution.
• ⚠️ In severe cases, full DPF replacement may become necessary.`
    },
    {
      question: "2. When should DPF | DOC | SCR | ASC be cleaned?",
      answer: `The emission system should be inspected if you notice any of the following symptoms:
• ✅ DPF Warning Light is ON.
• ✅ Reduced vehicle performance and loss of pulling power.
• ✅ Excessive black smoke coming from the exhaust.
• ✅ Abnormally high exhaust gas temperatures.`
    },
    {
      question: "3. What should be done first if these symptoms appear?",
      answer: `✅ First, have the vehicle inspected at an authorized service center to perform a Forced Regeneration. If blockage is caused only by light soot, it may resolve.
❌ If the warning light remains ON or backpressure stays high, professional chemical & hydro-pneumatic cleaning is required.`
    },
    {
      question: "4. What should the vehicle owner do before professional cleaning?",
      answer: `At an authorized service center using an OBD diagnostic scanner, record:
• Soot Value
• Clogging Percentage
• Active Fault Codes (DTCs)

These baseline records verify the exact cleanup efficiency by comparing values before and after service.`
    },
    {
      question: "5. What is Professional DPF Cleaning?",
      answer: `Professional DPF Cleaning is a scientific 4-stage process:
1️⃣ Chemical Soaking: Immersed in special solution to soften soot, ash, and oil.
2️⃣ Hydro-Pneumatic Cleaning: Water & compressed air flush particles bi-directionally.
3️⃣ Thermal Regeneration: Carbon deposits safely baked off under controlled heat.
4️⃣ Final Pressure Test: Airflow and differential backpressure measured.

Key Benefits: Restores proper airflow, lowers backpressure, improves fuel efficiency, and extends DPF lifespan.`
    },
    {
      question: "6. What happens if only heat treatment or pressure washing is performed?",
      answer: `⚠️ Incombustible Ash CANNOT be removed by simple washing or heat alone!
As a result:
• The DPF will block again rapidly.
• Warning light will reappear.
• Turbocharger & engine stress will increase.`
    },
    {
      question: "7. Why does the warning light remain ON even after DPF cleaning?",
      answer: `This may be due to one of the following reasons:
• Diagnostic Trouble Code (DTC) stored in ECU – clear using OBD scanner.
• DPF Ash Counter or Soot Load needs resetting in ECU memory.
• Forced Regeneration required post-installation.
• Faulty Differential Pressure Sensor or clogged sensor hoses.
• Faulty Exhaust Gas Temperature (EGT) Sensor.
• Unresolved upstream engine faults (Injector, Turbo, EGR Valve, Intake Leak).`
    },
    {
      question: "8. How long does professional cleaning take?",
      answer: `⏳ Typically 1–2 working days from receipt of the DPF unit at our Kerala workshop.`
    },
    {
      question: "9. How much does DPF cleaning cost?",
      answer: `💰 DPF cleaning starts from ₹6,000.
(Final cost varies depending on vehicle model, DPF unit dimensions, and overall clogging condition.)`
    },
    {
      question: "10. Should the DPF unit be removed before cleaning?",
      answer: `✅ Yes. The DPF unit must be unbolted from the vehicle.
📦 DPF units can be conveniently sent to us by courier or parcel from anywhere in India. After cleaning and pressure testing, we return it ready for installation.`
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>

        <div className="reveal-up" ref={headerRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-secondary" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={15} /> Knowledgebase & Diagnostics
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.75rem' }}>
            Frequently Asked Questions (FAQ)
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem' }}>
            Everything you need to know about DPF maintenance, warning symptoms, and professional restoration.
          </p>

          {/* Search Bar */}
          <div style={{ position: 'relative', marginTop: '1.75rem', maxWidth: '500px', margin: '1.75rem auto 0 auto' }}>
            <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search DPF warning lights, costs, process..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid #CBD5E1',
                fontSize: '0.92rem',
                outline: 'none',
                backgroundColor: '#F8FAFC'
              }}
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="reveal-up" ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: isOpen ? '#DC2626' : '#0F172A'
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} color="#DC2626" /> : <ChevronDown size={20} color="#64748B" />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        color: '#334155',
                        fontSize: '0.95rem',
                        lineHeight: 1.65,
                        borderTop: '1px solid #E2E8F0',
                        whiteSpace: 'pre-line',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <div style={{ paddingTop: '1rem' }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#64748B' }}>
              No matching FAQ found. Feel free to contact our technical team directly!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
