'use client';

import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════
   THE UMBRELLA GROUP — Full-Service Solutions Under One Roof
   Gold Standard: doctordorsey.com DNA + Umbrella palette
   Palette: #14161B base, #F7F7F4 light, #3B536B accent1, #B4975A gold, #A6ADB6 support
   ═══════════════════════════════════════════════════════════════ */

const DIVISIONS = [
  { name: 'Auto Exchange', tag: 'Vehicle Services', desc: 'Full-spectrum automotive solutions — from luxury fleet management to collision repair coordination. Connecting owners with trusted mechanics, detailers, and dealers across the network.' },
  { name: 'Injury Network', tag: 'Personal Injury', desc: 'Immediate connection to vetted personal injury attorneys, medical providers, and case management. One call after the accident — we handle the rest.' },
  { name: 'Realty Group', tag: 'Real Estate', desc: 'Residential and commercial real estate services — buying, selling, leasing, and investment property consulting across major metro markets.' },
  { name: 'Clean Services', tag: 'Cleaning & Valet', desc: 'Personal and commercial cleaning services plus valet trash operations. Residential deep cleans, office maintenance, move-in/move-out, and property management partnerships.' },
];

const STATS = [
  { num: '4+', label: 'Service Verticals' },
  { num: '8', label: 'Cities' },
  { num: '24/7', label: 'Availability' },
  { num: '100%', label: 'Referral Network' },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.12 });
    revealRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const reveal = (delay = 0) => ({
    ref: addReveal,
    style: {
      opacity: 0, transform: 'translateY(35px)',
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    },
  });

  return (
    <>
      {/* PRELOADER */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: '#14161B', zIndex: 10000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
        opacity: loaded ? 0 : 1, visibility: loaded ? 'hidden' : 'visible',
        transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), visibility 1s',
      }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 300, color: '#F7F7F4', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>Umbrella Group</div>
        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#B4975A', opacity: 0.6, marginTop: 12,
        }}>The Kollective Hospitality Group</div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div style={{
        position: 'fixed', top: 0, right: menuOpen ? '0' : '-100%',
        width: '100%', height: '100%', background: '#14161B', zIndex: 999,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '96px clamp(20px, 4vw, 80px)',
        transition: 'right 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        {['services', 'divisions', 'network', 'connect'].map(s => (
          <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: 300, textDecoration: 'none', display: 'block', padding: '14px 0',
            borderBottom: '1px solid rgba(247,247,244,0.06)', color: '#F7F7F4',
          }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
      </div>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: '20px clamp(20px, 4vw, 80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(20,22,27,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'background 0.4s, backdrop-filter 0.4s',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: '#F7F7F4' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(14px, 1.6vw, 20px)',
            fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F7F7F4',
          }}>Umbrella Group</div>
        </a>
        <ul className="desk-nav" style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
          {['services', 'divisions', 'network', 'connect'].map(s => (
            <li key={s}><a href={`#${s}`} className="na" style={{
              fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(247,247,244,0.5)', textDecoration: 'none',
            }}>{s}</a></li>
          ))}
        </ul>
        <a href="#connect" className="desk-cta" style={{
          fontFamily: 'DM Mono, monospace', fontSize: 'clamp(7px, 0.65vw, 9px)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#14161B', background: '#B4975A', padding: '9px 22px', textDecoration: 'none',
        }}>Get Started</a>
        <button className="mob-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          width: 26, height: 18, position: 'relative',
        }}>
          <span style={{ display: 'block', width: '100%', height: '1px', background: '#F7F7F4', position: 'absolute', left: 0, top: menuOpen ? 8 : 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '100%', height: '1px', background: '#F7F7F4', position: 'absolute', left: 0, top: 8, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '100%', height: '1px', background: '#F7F7F4', position: 'absolute', left: 0, top: menuOpen ? 8 : 14, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* SCREEN 1: HERO */}
      <section style={{
        position: 'relative', height: '100vh', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#14161B',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #14161B 0%, #1a2230 30%, #14161B 70%, #0f1118 100%)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2,
            background: 'linear-gradient(180deg, rgba(20,22,27,0.3) 0%, rgba(20,22,27,0.05) 35%, rgba(20,22,27,0.05) 55%, rgba(20,22,27,0.7) 85%, #14161B 100%)',
          }} />
        </div>
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 620, padding: '0 clamp(20px, 4vw, 80px)' }}>
          <div style={{
            fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)',
            letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B4975A', marginBottom: 20,
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.8s both',
          }}>The Umbrella Group × The Kollective</div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 6vw, 80px)',
            fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#F7F7F4', margin: 0,
            animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 2s both',
          }}>
            Full-service<br />solutions under<br />one <em style={{ fontStyle: 'italic', color: '#B4975A' }}>roof.</em>
          </h1>
          <p style={{
            fontSize: 'clamp(13px, 1.2vw, 16px)', color: 'rgba(247,247,244,0.45)',
            lineHeight: 1.7, maxWidth: 440, marginTop: 24,
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.2s both',
          }}>
            Auto. Injury. Realty. Clean. Four verticals. One number. Every service your life demands — coordinated, delivered, done.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.4s both' }}>
            <a href="#services" style={{
              display: 'inline-block', fontFamily: 'DM Mono, monospace',
              fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#14161B', background: '#B4975A', padding: '14px 40px', textDecoration: 'none', marginTop: 40,
            }}>Explore Services</a>
            <a href="#connect" style={{
              display: 'inline-block', fontFamily: 'DM Mono, monospace',
              fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#B4975A', border: '1px solid #B4975A', padding: '14px 40px', textDecoration: 'none', marginTop: 40,
            }}>Get In Touch</a>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #B4975A, transparent)', zIndex: 3, opacity: 0.4,
        }} />
      </section>

      {/* SCREEN 2: THESIS */}
      <section id="services" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: '#14161B' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div {...reveal(0)}><div style={{ width: 40, height: 1, background: '#B4975A', marginBottom: 16 }} /></div>
          <div {...reveal(0)}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 64px)',
              fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#F7F7F4', marginBottom: 24,
            }}>One call. Every <em style={{ fontStyle: 'italic', color: '#B4975A' }}>solution.</em></h2>
          </div>
          <div {...reveal(0.1)}>
            <p style={{
              fontSize: 'clamp(14px, 1.3vw, 18px)', color: 'rgba(247,247,244,0.45)',
              lineHeight: 1.8, maxWidth: 600, marginBottom: 64,
            }}>
              The Umbrella Group consolidates essential services into a single, coordinated enterprise. Whether you have been in an accident, need your home sold, your car serviced, or your property cleaned — one contact point handles everything.
            </p>
          </div>
          <div {...reveal(0.2)} style={{ display: 'flex', gap: 'clamp(24px, 4vw, 64px)', flexWrap: 'wrap', marginBottom: 80 }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 300, color: '#B4975A', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,247,244,0.3)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 3: DIVISIONS GRID */}
      <section id="divisions" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: '#F7F7F4', color: '#14161B' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div {...reveal(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <div style={{ width: 40, height: 1, background: '#3B536B' }} />
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#3B536B' }}>Service Divisions</div>
            </div>
          </div>
          <div {...reveal(0)}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#14161B', marginBottom: 56 }}>
              Four pillars. One <em style={{ fontStyle: 'italic', color: '#3B536B' }}>standard.</em>
            </h2>
          </div>
          <div className="div-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
            {DIVISIONS.map((d, i) => (
              <div key={i} {...reveal(i * 0.08)}>
                <div className="div-card" style={{
                  background: '#FFFDF8', border: '1px solid rgba(20,22,27,0.06)',
                  padding: 'clamp(32px, 3vw, 48px)', transition: 'all 0.4s', cursor: 'pointer',
                  height: '100%', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(56px, 6vw, 80px)', fontWeight: 300, color: 'rgba(59,83,107,0.08)', position: 'absolute', top: -8, right: 12, lineHeight: 1 }}>0{i + 1}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3B536B', marginBottom: 12, position: 'relative' }}>{d.tag}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, color: '#14161B', marginBottom: 14, lineHeight: 1.2, position: 'relative' }}>{d.name}</div>
                  <div style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(20,22,27,0.5)', lineHeight: 1.75, position: 'relative' }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 4: CINEMATIC BREAK */}
      <div style={{ position: 'relative', height: 'clamp(250px, 35vw, 400px)', overflow: 'hidden', background: '#14161B' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #1a2535 0%, #14161B 50%, #1a1e28 100%)', opacity: 0.8 }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(180deg, #14161B 0%, transparent 25%, transparent 75%, #14161B 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 clamp(40px, 6vw, 120px)',
        }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 3.5vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: '#B4975A', maxWidth: 550, lineHeight: 1.3 }}>
            &ldquo;One umbrella covers everything — that&rsquo;s the point.&rdquo;
          </div>
        </div>
      </div>

      {/* SCREEN 5: HOW IT WORKS */}
      <section id="network" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: '#14161B' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div {...reveal(0)}>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B4975A', marginBottom: 12 }}>The Network</div>
          </div>
          <div {...reveal(0)}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4.5vw, 56px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#F7F7F4', marginBottom: 48 }}>
              How the umbrella <em style={{ fontStyle: 'italic', color: '#B4975A' }}>works.</em>
            </h2>
          </div>
          <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { step: '01', title: 'One Contact', desc: 'Call, text, or submit online. Tell us what you need — auto, injury, property, or cleaning. One intake handles all.' },
              { step: '02', title: 'Instant Routing', desc: 'Your request routes to the right division instantly. A specialist is assigned within minutes, not days.' },
              { step: '03', title: 'Full Coordination', desc: 'We manage the entire process — from first call to final delivery. Updates, scheduling, quality checks — all handled.' },
            ].map((item, i) => (
              <div key={i} {...reveal(i * 0.1)}>
                <div style={{ padding: 'clamp(32px, 3vw, 48px)', background: 'rgba(247,247,244,0.03)', border: '1px solid rgba(247,247,244,0.06)', height: '100%' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, color: 'rgba(180,151,90,0.12)', lineHeight: 1, marginBottom: 20 }}>{item.step}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 400, color: '#F7F7F4', marginBottom: 12 }}>{item.title}</div>
                  <div style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(247,247,244,0.4)', lineHeight: 1.75 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 6: CITIES */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: '#F7F7F4', color: '#14161B' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div {...reveal(0)}><div style={{ width: 40, height: 1, background: '#14161B', marginBottom: 16 }} /></div>
          <div {...reveal(0)}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(26px, 4.5vw, 56px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#14161B', marginBottom: 48 }}>
              Coverage across <em style={{ fontStyle: 'italic', color: '#3B536B' }}>markets.</em>
            </h2>
          </div>
          <div className="city-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {[
              { city: 'Atlanta', state: 'Georgia', status: 'Headquarters' },
              { city: 'Houston', state: 'Texas', status: 'Active' },
              { city: 'Miami', state: 'Florida', status: 'Active' },
              { city: 'Dallas', state: 'Texas', status: 'Active' },
              { city: 'Charlotte', state: 'N. Carolina', status: 'Active' },
              { city: 'Los Angeles', state: 'California', status: 'Expanding' },
              { city: 'Washington', state: 'D.C.', status: 'Active' },
              { city: 'New York', state: 'New York', status: 'Pipeline' },
            ].map((c, i) => (
              <div key={i} {...reveal(i * 0.05)}>
                <div style={{
                  padding: 'clamp(24px, 2.5vw, 40px)',
                  background: i === 0 ? '#14161B' : 'rgba(20,22,27,0.04)',
                  border: '1px solid rgba(20,22,27,0.06)',
                }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: i === 0 ? '#B4975A' : '#3B536B', marginBottom: 8 }}>{c.status}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: i === 0 ? 'clamp(24px, 3vw, 40px)' : 'clamp(18px, 2vw, 24px)', fontWeight: 400, color: i === 0 ? '#F7F7F4' : '#14161B' }}>{c.city}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: i === 0 ? 'rgba(247,247,244,0.4)' : 'rgba(20,22,27,0.35)', marginTop: 4 }}>{c.state}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREEN 7: PARTNERSHIP CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 80px)', background: '#14161B' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div {...reveal(0)}>
            <div style={{
              background: 'rgba(247,247,244,0.03)', border: '1px solid rgba(247,247,244,0.06)',
              padding: 'clamp(48px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at 50% 50%, rgba(180,151,90,0.06) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B4975A', marginBottom: 16 }}>Partnership Opportunities</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 300, color: '#F7F7F4', lineHeight: 1.15, marginBottom: 16 }}>
                  Join the <em style={{ fontStyle: 'italic', color: '#B4975A' }}>network.</em>
                </div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(9px, 0.8vw, 11px)', letterSpacing: '0.15em', color: 'rgba(247,247,244,0.4)', textTransform: 'uppercase', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8 }}>
                  Attorneys · Mechanics · Realtors · Property Managers · Cleaning Crews · Insurance Providers
                </div>
                <a href="mailto:thedoctordorsey@gmail.com?subject=Umbrella Group Partnership" style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(9px, 0.8vw, 11px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#14161B', background: '#B4975A', padding: '16px 48px', textDecoration: 'none', display: 'inline-block' }}>Become a Partner →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 8: CONNECT */}
      <section id="connect" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 4vw, 80px)', background: '#F7F7F4', color: '#14161B' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div {...reveal(0)}><div style={{ width: 40, height: 1, background: '#14161B', margin: '0 auto 16px' }} /></div>
          <div {...reveal(0)}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#14161B', marginBottom: 24 }}>
              Start with a <em style={{ fontStyle: 'italic', color: '#3B536B' }}>conversation.</em>
            </h2>
          </div>
          <div {...reveal(0.1)}>
            <p style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', color: 'rgba(20,22,27,0.45)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px' }}>
              Whether you need auto services, injury representation, real estate, or cleaning — one point of contact gets you to the right division instantly.
            </p>
          </div>
          <div {...reveal(0.2)}>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="mailto:thedoctordorsey@gmail.com?subject=Umbrella Group Inquiry" style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F7F7F4', background: '#14161B', padding: '14px 36px', textDecoration: 'none' }}>Contact Us</a>
              <a href="tel:+1" style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#14161B', background: 'transparent', padding: '14px 36px', textDecoration: 'none', border: '1px solid rgba(20,22,27,0.2)' }}>Call Now</a>
            </div>
          </div>
          <div {...reveal(0.3)}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, maxWidth: 600, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', padding: 24, border: '1px solid rgba(20,22,27,0.06)', background: 'rgba(20,22,27,0.02)' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#3B536B', marginBottom: 8 }}>General</div>
                <a href="mailto:thedoctordorsey@gmail.com" style={{ fontSize: 'clamp(12px, 1vw, 15px)', color: '#3B536B', textDecoration: 'none', borderBottom: '1px solid rgba(59,83,107,0.3)', paddingBottom: 2 }}>thedoctordorsey@gmail.com</a>
              </div>
              <div style={{ textAlign: 'center', padding: 24, border: '1px solid rgba(20,22,27,0.06)', background: 'rgba(20,22,27,0.02)' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.7vw, 10px)', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#3B536B', marginBottom: 8 }}>The Kollective</div>
                <a href="mailto:thekollectivehospitality@gmail.com" style={{ fontSize: 'clamp(12px, 1vw, 15px)', color: '#3B536B', textDecoration: 'none', borderBottom: '1px solid rgba(59,83,107,0.3)', paddingBottom: 2 }}>thekollectivehospitality@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ftr" style={{ padding: '40px clamp(20px, 4vw, 80px)', borderTop: '1px solid rgba(247,247,244,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#14161B', color: '#F7F7F4' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.2em', color: 'rgba(247,247,244,0.3)' }}>© 2026 The Umbrella Group — The Kollective Hospitality Group</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="https://doctordorsey.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.1em', color: 'rgba(247,247,244,0.3)', textDecoration: 'none' }}>Dr. Dorsey</a>
          <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(7px, 0.65vw, 9px)', letterSpacing: '0.1em', color: 'rgba(247,247,244,0.3)', textDecoration: 'none' }}>Instagram</a>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .na:hover { color: #F7F7F4 !important; }
        .div-card:hover { border-color: rgba(59,83,107,0.3) !important; box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important; transform: translateY(-2px); }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; color: #F7F7F4; background: #14161B; -webkit-font-smoothing: antialiased; }
        @media (max-width: 1024px) {
          .div-grid { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
          .city-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .desk-cta { display: none !important; }
          .mob-btn { display: block !important; }
          .city-row { grid-template-columns: 1fr !important; }
          .ftr { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
        }
      `}</style>
    </>
  );
}
