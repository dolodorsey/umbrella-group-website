'use client';
import { useEffect, useRef, useState } from 'react';

const SB = 'https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics';
const SVCS = [__SVCS__];

export default function Home() {
  const [ld, setLd] = useState(false);
  const [mo, setMo] = useState(false);
  const [sc, setSc] = useState(false);
  const refs = useRef([]);
  const addR = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => { setTimeout(() => setLd(true), 2200); }, []);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    }), { threshold: 0.12 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [ld]);

  return (<>
    {/* ── PRELOADER WITH LOGO ── */}
    <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'#14161B',zIndex:10000,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',opacity:ld?0:1,visibility:ld?'hidden':'visible',transition:'opacity 1s cubic-bezier(0.16,1,0.3,1),visibility 1s'}}>
      <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/01_logos/KOLLECTIVEemblemW.png" alt="" style={{width:120,objectFit:'contain',marginBottom:16,animation:'pulse 2s ease-in-out infinite'}} />
      <div style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'0.3em',textTransform:'uppercase',color:'#B4975A',opacity:0.6}}>The Kollective Hospitality Group</div>
    </div>

    {/* ── MOBILE NAV ── */}
    <div style={{position:'fixed',top:0,right:mo?'0':'-100%',width:'100%',height:'100%',background:'#14161B',zIndex:999,display:'flex',flexDirection:'column',justifyContent:'center',padding:'96px clamp(20px,4vw,80px)',transition:'right 0.6s cubic-bezier(0.16,1,0.3,1)'}}>
      {['services','about','connect'].map(s => <a key={s} href={`#${s}`} onClick={() => setMo(false)} style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,56px)',fontWeight:300,textDecoration:'none',display:'block',padding:'14px 0',borderBottom:'1px solid rgba(247,247,244,0.06)',color:'#F7F7F4'}}>{s.charAt(0).toUpperCase()+s.slice(1)}</a>)}
    </div>

    {/* ── NAV WITH LOGO ── */}
    <nav style={{position:'fixed',top:0,left:0,width:'100%',zIndex:1000,padding:'20px clamp(20px,4vw,80px)',display:'flex',alignItems:'center',justifyContent:'space-between',background:sc?'rgba(10,10,14,0.92)':'transparent',backdropFilter:sc?'blur(16px)':'none',transition:'background 0.4s'}}>
      <a href="#" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/01_logos/KOLLECTIVEemblemW.png" alt="" style={{height:28,objectFit:'contain'}} />
      </a>
      <ul className="desk-nav" style={{display:'flex',gap:36,listStyle:'none',margin:0,padding:0}}>
        {['services','about','connect'].map(s => <li key={s}><a href={`#${s}`} className="na" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(247,247,244,0.5)',textDecoration:'none'}}>{s}</a></li>)}
      </ul>
      <a href="#connect" className="desk-cta" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.2em',textTransform:'uppercase',color:'#14161B',background:'#B4975A',padding:'9px 22px',textDecoration:'none'}}>Get Started</a>
      <button className="mob-btn" onClick={() => setMo(!mo)} style={{display:'none',background:'none',border:'none',cursor:'pointer',width:26,height:18,position:'relative'}}>
        <span style={{display:'block',width:'100%',height:'1px',background:'#F7F7F4',position:'absolute',left:0,top:mo?8:2,transition:'all 0.3s',transform:mo?'rotate(45deg)':'none'}} />
        <span style={{display:'block',width:'100%',height:'1px',background:'#F7F7F4',position:'absolute',left:0,top:8,transition:'all 0.3s',opacity:mo?0:1}} />
        <span style={{display:'block',width:'100%',height:'1px',background:'#F7F7F4',position:'absolute',left:0,top:mo?8:14,transition:'all 0.3s',transform:mo?'rotate(-45deg)':'none'}} />
      </button>
    </nav>

    {/* ══ HERO WITH BACKGROUND IMAGE + CSS ANIMATION ══ */}
    <section style={{position:'relative',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center',background:'#14161B'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/luxury-venue.jpg" alt="" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.35,animation:'slowZoom 20s ease-in-out infinite alternate'}} />
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:1,background:'linear-gradient(135deg,rgba(10,10,14,0.7) 0%,rgba(10,10,14,0.3) 40%,rgba(10,10,14,0.5) 100%)'}} />
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:2,background:'linear-gradient(180deg,rgba(10,10,14,0.4) 0%,transparent 30%,transparent 60%,#14161B 100%)'}} />
        {/* Grain overlay */}
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:3,opacity:0.04,backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")'}} />
      </div>
      <div style={{position:'relative',zIndex:4,maxWidth:620,padding:'0 clamp(20px,4vw,80px)'}}>
        <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#B4975A',marginBottom:20,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.2s both'}}>Umbrella Group × The Kollective</div>
        <h1 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(36px,7vw,90px)',fontWeight:300,lineHeight:1.08,letterSpacing:'-0.02em',color:'#F7F7F4',margin:0,animation:'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 2.4s both'}}>__HERO__</h1>
        <p style={{fontSize:'clamp(13px,1.2vw,16px)',color:'rgba(247,247,244,0.45)',lineHeight:1.7,maxWidth:440,marginTop:24,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.6s both'}}>__DESC__</p>
        <a href="#services" style={{display:'inline-block',fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.25em',textTransform:'uppercase',color:'#14161B',background:'#B4975A',padding:'14px 40px',textDecoration:'none',marginTop:40,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.8s both'}}>Explore</a>
      </div>
      <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'2px',background:'linear-gradient(90deg,transparent,#B4975A,transparent)',zIndex:4,opacity:0.4}} />
    </section>

    {/* ══ SERVICES WITH BACKGROUND TEXTURE ══ */}
    <section id="services" style={{position:'relative',padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#14161B'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/penthouse-skyline.jpg" alt="" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.05,filter:'brightness(0.3)'}} />
      </div>
      <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <div style={{width:40,height:1,background:'#B4975A',marginBottom:16}} />
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,64px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-0.02em',color:'#F7F7F4',marginBottom:48}}>What we <em style={{fontStyle:'italic',color:'#3B536B'}}>deliver.</em></h2>
        </div>
        <div className="svc-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px'}}>
          {SVCS.map((s, i) => (
            <div key={i} ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:`opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i*0.08}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i*0.08}s`}}>
              <div className="svc-card" style={{background:'rgba(247,247,244,0.03)',border:'1px solid rgba(247,247,244,0.06)',padding:'clamp(32px,3vw,48px)',height:'100%',position:'relative',overflow:'hidden',cursor:'pointer',transition:'all 0.4s'}}>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(48px,5vw,64px)',fontWeight:300,color:'rgba(180,151,90,0.1)',position:'absolute',top:-6,right:12,lineHeight:1}}>0{i+1}</div>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(20px,2.2vw,28px)',fontWeight:400,color:'#F7F7F4',marginBottom:12,position:'relative'}}>{s.n}</div>
                <div style={{fontSize:'clamp(12px,1vw,14px)',color:'rgba(247,247,244,0.4)',lineHeight:1.75,position:'relative'}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ CINEMATIC PARALLAX BREAK ══ */}
    <div style={{position:'relative',height:'clamp(280px,40vw,450px)',overflow:'hidden'}}>
      <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/rooftop-lounge.jpg" alt="" style={{position:'absolute',top:0,left:0,width:'100%',height:'120%',objectFit:'cover',opacity:0.55,transform:'translateY(-10%)'}} />
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:`linear-gradient(180deg,#14161B 0%,transparent 20%,transparent 80%,#14161B 100%)`}} />
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',padding:'0 clamp(40px,6vw,120px)'}}>
        <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(22px,4vw,52px)',fontWeight:300,fontStyle:'italic',color:'#B4975A',maxWidth:550,lineHeight:1.3,textShadow:'0 2px 20px rgba(0,0,0,0.8)'}}>&ldquo;__TAGLINE__ — built different.&rdquo;</div>
      </div>
    </div>

    {/* ══ ABOUT WITH BACKGROUND ══ */}
    <section id="about" style={{position:'relative',padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#F7F7F4',color:'#14161B',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/garden-district.jpg" alt="" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.06,filter:'brightness(0.25)'}} />
      </div>
      <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:32}}>
            <div style={{width:40,height:1,background:'#3B536B'}} />
            <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#3B536B'}}>A Kollective Company</div>
          </div>
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(26px,4.5vw,56px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-0.02em',color:'#14161B',marginBottom:24}}>Part of something <em style={{fontStyle:'italic',color:'#3B536B'}}>bigger.</em></h2>
          <p style={{fontSize:'clamp(14px,1.3vw,18px)',color:'rgba(20,22,27,0.5)',lineHeight:1.8,maxWidth:600,marginBottom:40}}>Umbrella Group operates under The Kollective Hospitality Group — a multi-brand enterprise spanning events, food & beverage, museums, consumer products, technology, and wellness across 8 cities.</p>
          <div style={{display:'flex',gap:'clamp(24px,4vw,56px)',flexWrap:'wrap'}}>
            {[{n:'57+',l:'Ventures'},{n:'8',l:'Cities'},{n:'198',l:'AI Agents'},{n:'34',l:'Departments'}].map((s,i) => (
              <div key={i}>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,3.5vw,48px)',fontWeight:300,color:'#3B536B',lineHeight:1}}>{s.n}</div>
                <div style={{fontFamily:'DM Mono,monospace',fontSize:'8px',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(20,22,27,0.35)',marginTop:4}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ══ CONNECT ══ */}
    <section id="connect" style={{position:'relative',padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#14161B',overflow:'hidden'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/website/luxury-venue.jpg" alt="" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.08,filter:'brightness(0.2)'}} />
      </div>
      <div style={{maxWidth:900,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/01_logos/KOLLECTIVEemblemW.png" alt="" style={{width:80,objectFit:'contain',margin:'0 auto 24px',display:'block',opacity:0.6}} />
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,64px)',fontWeight:300,lineHeight:1.1,color:'#F7F7F4',marginBottom:24}}>{"Let's"} <em style={{fontStyle:'italic',color:'#3B536B'}}>connect.</em></h2>
          <p style={{fontSize:'clamp(14px,1.3vw,18px)',color:'rgba(247,247,244,0.45)',lineHeight:1.7,maxWidth:560,margin:'0 auto 48px'}}>__DESC__</p>
          <div style={{display:'flex',gap:20,justifyContent:'center',flexWrap:'wrap',marginBottom:56}}>
            <a href="mailto:thedoctordorsey@gmail.com?subject=Umbrella Group Inquiry" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.2em',textTransform:'uppercase',color:'#14161B',background:'#B4975A',padding:'14px 36px',textDecoration:'none'}}>Get In Touch</a>
            <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.2em',textTransform:'uppercase',color:'#F7F7F4',padding:'14px 36px',textDecoration:'none',border:'1px solid rgba(247,247,244,0.2)'}}>@dolodorsey</a>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:32,maxWidth:600,margin:'0 auto'}}>
            <div style={{textAlign:'center',padding:24,border:'1px solid rgba(247,247,244,0.06)',background:'rgba(247,247,244,0.02)'}}>
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#B4975A',marginBottom:8}}>Dr. Dorsey</div>
              <a href="mailto:thedoctordorsey@gmail.com" style={{fontSize:'clamp(11px,0.9vw,14px)',color:'#B4975A',textDecoration:'none',borderBottom:'1px solid rgba(180,151,90,0.3)',paddingBottom:2}}>thedoctordorsey@gmail.com</a>
            </div>
            <div style={{textAlign:'center',padding:24,border:'1px solid rgba(247,247,244,0.06)',background:'rgba(247,247,244,0.02)'}}>
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#B4975A',marginBottom:8}}>The Kollective</div>
              <a href="mailto:thekollectivehospitality@gmail.com" style={{fontSize:'clamp(11px,0.9vw,14px)',color:'#B4975A',textDecoration:'none',borderBottom:'1px solid rgba(180,151,90,0.3)',paddingBottom:2}}>thekollectivehospitality@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FOOTER ── */}
    <footer className="ftr" style={{padding:'40px clamp(20px,4vw,80px)',borderTop:'1px solid rgba(247,247,244,0.06)',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#14161B'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/dr_dorsey/01_logos/KOLLECTIVEemblemW.png" alt="" style={{height:20,objectFit:'contain',opacity:0.4}} />
        <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.2em',color:'rgba(247,247,244,0.3)'}}>© 2026 Umbrella Group</div>
      </div>
      <div style={{display:'flex',gap:24}}>
        <a href="https://doctordorsey.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.1em',color:'rgba(247,247,244,0.3)',textDecoration:'none'}}>Dr. Dorsey</a>
        <a href="https://instagram.com/dolodorsey" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.1em',color:'rgba(247,247,244,0.3)',textDecoration:'none'}}>Instagram</a>
      </div>
    </footer>

    <style>{`
      @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.08); } }
      @keyframes pulse { 0%,100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
      .na:hover { color: #F7F7F4 !important; }
      .svc-card:hover { border-color: rgba(180,151,90,0.3) !important; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'DM Sans', sans-serif; color: #F7F7F4; background: #14161B; -webkit-font-smoothing: antialiased; }
      @media (max-width: 1024px) { .svc-grid { grid-template-columns: 1fr !important; } }
      @media (max-width: 768px) { .desk-nav { display: none !important; } .desk-cta { display: none !important; } .mob-btn { display: block !important; } .ftr { flex-direction: column !important; gap: 16px !important; text-align: center !important; } }
    `}</style>
  </>);
}
