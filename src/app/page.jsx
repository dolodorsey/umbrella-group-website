'use client';

import { useEffect, useRef, useState } from 'react';

const SUPABASE_STORAGE = 'https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics';

const SERVICES = [
  {
    title: 'Auto Exchange',
    sub: 'Buy · Sell · Trade · Fleet Services',
    tags: ['Vehicle Sales', 'Trade-Ins', 'Fleet Management', 'Financing'],
    img: `${SUPABASE_STORAGE}/dr_dorsey/website/penthouse-skyline.jpg`,
    href: '/auto-exchange',
  },
  {
    title: 'Injury Network',
    sub: 'HURT 911 · Personal Injury · Legal Referral',
    tags: ['Accident Recovery', 'Legal Referral', 'Medical Network', 'Case Management'],
    img: `${SUPABASE_STORAGE}/dr_dorsey/website/thesis-bg.jpg`,
    href: '/injury-network',
  },
  {
    title: 'Realty Group',
    sub: 'Residential · Commercial · Investment',
    tags: ['Buying', 'Selling', 'Property Mgmt', 'Investment'],
    img: `${SUPABASE_STORAGE}/dr_dorsey/website/luxury-venue.jpg`,
    href: '/realty-group',
  },
  {
    title: 'Clean Services',
    sub: 'Personal · Commercial · Valet Trash',
    tags: ['Residential', 'Commercial', 'Valet Trash', 'Deep Clean'],
    img: `${SUPABASE_STORAGE}/dr_dorsey/website/garden-district.jpg`,
    href: '/clean-services',
  },
];

const VERTICALS = [
  { num: '01', title: 'Automotive', desc: 'Full-service vehicle exchange — sales, trade-ins, fleet management, and financing solutions for individuals and businesses.' },
  { num: '02', title: 'Legal & Injury', desc: 'Immediate accident response, personal injury case management, and attorney referral network powered by HURT 911.' },
  { num: '03', title: 'Real Estate', desc: 'Residential and commercial real estate services — buying, selling, property management, and investment consulting.' },
  { num: '04', title: 'Cleaning', desc: 'Personal and commercial cleaning services including deep cleaning, recurring maintenance, and valet trash for multi-family properties.' },
  { num: '05', title: 'Staffing', desc: 'Temporary and permanent staffing solutions for hospitality, events, and service industry professionals.' },
  { num: '06', title: 'Consulting', desc: 'Business development consulting, operational strategy, brand architecture, and multi-vertical enterprise design.' },
];

export default function Home() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'services', href: '#services' },
    { label: 'verticals', href: '#verticals' },
    { label: 'about', href: '#about' },
    { label: 'connect', href: '#connect' },
  ];

  return (
    <>
      {/* ═══ PRELOADER ═══ */}
      <div className={`preloader ${!preloaderVisible ? 'hidden' : ''}`}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 300, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--light)', marginBottom: 16,
        }}>
          Umbrella Group
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '9px',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--gold)', opacity: 0.6,
        }}>
          The Kollective Hospitality Group
        </div>
      </div>

      {/* ═══ MOBILE NAV ═══ */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMobileNavOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>

      {/* ═══ NAVIGATION ═══ */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            Umbrella Group
          </span>
        </a>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#connect" className="nav-cta nav-cta-desk">Get Started</a>
        <button className="mob-btn" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ═══ SCREEN 1: HERO ═══ */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src={`${SUPABASE_STORAGE}/dr_dorsey/website/rooftop-lounge.jpg`}
            alt=""
          />
          <div className="hero-gradient" />
        </div>
        <div className="hero-content">
          <div className="hero-label">Full-Service Solutions</div>
          <h1>
            Every service.<br />
            One <em>umbrella.</em>
          </h1>
          <a href="#services" className="hero-cta">Explore Services</a>
        </div>
        <div className="hero-line" />
      </section>

      {/* ═══ SCREEN 2: THESIS ═══ */}
      <section className="section" id="about">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">
              <div className="section-label-line" />
              <div className="section-label-text">The Enterprise</div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="section-heading">
              Built to serve. Designed to <em>scale.</em>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s', maxWidth: 700 }}>
            <p style={{
              fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)',
              lineHeight: 1.8, marginBottom: 48,
            }}>
              The Umbrella Group is the service arm of The Kollective Hospitality Group — 
              a multi-vertical enterprise built to simplify life's biggest needs. From 
              vehicles to real estate, from injury recovery to a spotless space, every 
              vertical operates with the same standard: extraordinary is the baseline.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="stats-row">
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number">6+</div>
                <div className="stat-label">Service Verticals</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number">8</div>
                <div className="stat-label">Cities</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Response</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div className="stat-number">100%</div>
                <div className="stat-label">KHG Backed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCREEN 3: SERVICE GRID ═══ */}
      <section className="section" id="services" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">
              <div className="section-label-line" />
              <div className="section-label-text">Our Services</div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="section-heading">
              Four pillars. One <em>ecosystem.</em>
            </h2>
          </div>
          <div className="service-grid">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className="reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="service-card">
                  <img src={svc.img} alt="" />
                  <div className="service-card-overlay" />
                  <div className="service-card-content">
                    <div>
                      <div className="service-card-title">{svc.title}</div>
                      <div className="service-card-sub">{svc.sub}</div>
                    </div>
                    <div className="service-card-tags">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="service-card-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCREEN 4: CINEMATIC BREAK ═══ */}
      <div className="cinematic-break">
        <img
          src={`${SUPABASE_STORAGE}/dr_dorsey/website/penthouse-skyline.jpg`}
          alt=""
        />
        <div className="cinematic-break-overlay">
          <div className="cinematic-quote">
            "One call handles it all — that's the point of the umbrella."
          </div>
        </div>
      </div>

      {/* ═══ SCREEN 5: VERTICALS DETAIL ═══ */}
      <section className="section section-light" id="verticals">
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label">
              <div className="section-label-line" />
              <div className="section-label-text">Service Verticals</div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="section-heading" style={{ color: 'var(--base-deep)' }}>
              Everything you need. <em>Nothing</em> you don't.
            </h2>
          </div>
          <div className="consult-grid">
            {VERTICALS.map((v, i) => (
              <div
                key={v.num}
                className="reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="consult-card" style={{
                  background: '#FFFDF8',
                  border: '1px solid rgba(14,16,20,0.06)',
                }}>
                  <div className="consult-card-number">{v.num}</div>
                  <div className="consult-card-title" style={{ color: 'var(--base-deep)' }}>
                    {v.title}
                  </div>
                  <div className="consult-card-desc" style={{ color: 'rgba(14,16,20,0.5)' }}>
                    {v.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCREEN 6: CTA BLOCK ═══ */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="section-inner">
          <div className="reveal">
            <div className="cta-block">
              <div className="cta-block-glow" />
              <div className="cta-heading">
                Ready to get <em>started?</em>
              </div>
              <div className="cta-sub">
                Auto Exchange · Injury Network · Realty Group · Clean Services · Staffing · Consulting
              </div>
              <a
                href="mailto:thekollectivehospitality@gmail.com?subject=Umbrella Group Inquiry"
                className="cta-btn"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCREEN 7: CONNECT ═══ */}
      <section className="section" id="connect">
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center', margin: '0 auto' }}>
          <div className="reveal">
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 auto 16px' }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="section-heading">
              Under one <em>umbrella.</em>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p style={{
              fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)',
              lineHeight: 1.7, maxWidth: 560, margin: '0 auto 48px',
            }}>
              Whether you need a vehicle, a home, legal help after an accident, or a 
              spotless space — The Umbrella Group has you covered. Part of The Kollective 
              Hospitality Group.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
              <a
                href="mailto:thekollectivehospitality@gmail.com?subject=Umbrella Group — New Inquiry"
                className="cta-btn"
              >
                Start a Conversation
              </a>
              <a
                href="https://instagram.com/dolodorsey"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--text-primary)', background: 'transparent',
                  padding: '14px 36px', border: '1px solid var(--border-hover)',
                }}
              >
                @dolodorsey
              </a>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.4s' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 32, maxWidth: 600, margin: '0 auto',
            }}>
              <div style={{
                textAlign: 'center', padding: 24,
                border: '1px solid var(--border-subtle)',
                background: 'rgba(247,247,244,0.02)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)',
                  letterSpacing: '0.35em', textTransform: 'uppercase',
                  color: 'var(--gold)', marginBottom: 8,
                }}>
                  Email
                </div>
                <a
                  href="mailto:thekollectivehospitality@gmail.com"
                  style={{
                    fontSize: 'var(--text-body)', color: 'var(--gold)',
                    borderBottom: '1px solid rgba(180,151,90,0.3)', paddingBottom: 2,
                  }}
                >
                  thekollectivehospitality@gmail.com
                </a>
              </div>
              <div style={{
                textAlign: 'center', padding: 24,
                border: '1px solid var(--border-subtle)',
                background: 'rgba(247,247,244,0.02)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)',
                  letterSpacing: '0.35em', textTransform: 'uppercase',
                  color: 'var(--gold)', marginBottom: 8,
                }}>
                  Headquarters
                </div>
                <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-secondary)' }}>
                  Atlanta, Georgia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCREEN 8: FOOTER ═══ */}
      <footer className="footer" style={{ background: 'var(--light)', color: 'var(--base-deep)' }}>
        <div className="footer-copy" style={{ color: 'rgba(14,16,20,0.3)' }}>
          © 2026 The Umbrella Group — The Kollective Hospitality Group
        </div>
        <div className="footer-links">
          <a
            href="https://instagram.com/dolodorsey"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(14,16,20,0.3)' }}
          >
            Instagram
          </a>
          <a
            href="https://doctordorsey.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(14,16,20,0.3)' }}
          >
            Dr. Dorsey
          </a>
        </div>
      </footer>
    </>
  );
}
