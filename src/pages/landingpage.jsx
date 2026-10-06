// LandingPage.jsx — the approved landing page design, as one self-contained React file.
// Every size, colour and spacing value is carried over 1:1 from the design.
// The only things you edit are the placeholders in SITE below.

const SITE = {
  name: 'Jada Fire Safety',
  phone: '+233 24 000 0000',
  city: 'Accra',
  email: 'info@jadafiresafety.com.gh',
  cert: '[GNFS CERT. NO.]',
  year: new Date().getFullYear(),
}

const SERVICES = [
  { n: '01', title: 'Extinguisher servicing', text: "Supply, inspection, refilling and tagging, on a schedule you don't have to chase." },
  { n: '02', title: 'Alarm & detection', text: 'Smoke and heat detection, panels and alarms, installed cleanly and tested.' },
  { n: '03', title: 'Risk assessments', text: 'A walk-through of your premises and a clear written report of what to fix first.' },
  { n: '04', title: 'Training & drills', text: 'Hands-on sessions so your team knows what to do, and where to go.' },
]

const STEPS = [
  { n: '01', title: 'Assess', text: 'We visit and map your risks.' },
  { n: '02', title: 'Install', text: 'Equipment fitted and signed off.' },
  { n: '03', title: 'Train', text: 'Your people practise the response.' },
  { n: '04', title: 'Maintain', text: 'Scheduled checks, every time.' },
]

const SECTORS = ['Homes', 'Offices', 'Schools', 'Markets', 'Factories', 'Churches', 'Hotels']

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap');
html{scroll-behavior:smooth}
body{margin:0}

.jf, .jf *{box-sizing:content-box}
.jf{background:#F3F2EE;color:#121212;font-family:'DM Sans',sans-serif;font-size:18px;line-height:1.55}
.jf a:not(.btn){color:#121212;text-decoration:none}
.jf a:not(.btn):hover{color:#C8381E}
.jf h1,.jf h2,.jf h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:500}
.jf .wrap{max-width:1200px;margin:0 auto;padding:0 32px;box-sizing:border-box}
.jf .eyebrow{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#5A5A55}
.jf .num{font-size:14px;color:#C8381E}
.jf .ember{color:#C8381E}

/* nav */
.jf .nav{height:88px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.jf .brand{display:flex;align-items:center;gap:12px;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:20px}
.jf .links{display:flex;align-items:center;gap:32px;flex-wrap:wrap;font-size:16px}
.jf .pill-out{display:inline-flex;align-items:center;height:44px;padding:0 22px;border:1px solid #121212;border-radius:999px}

/* hero */
.jf .hero{max-width:1200px;margin:0 auto;padding:72px 32px 96px;box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:56px}
.jf .hero-text{flex:1 1 480px;max-width:640px}
.jf .hero .eyebrow{margin-bottom:28px}
.jf .hero h1{margin:0;font-size:clamp(48px,7vw,104px);line-height:.98;letter-spacing:-.03em}
.jf .lead{margin:32px 0 0;max-width:460px;color:#5A5A55;font-size:20px}
.jf .actions{margin-top:40px;display:flex;flex-wrap:wrap;align-items:center;gap:28px}
.jf .btn{display:inline-flex;align-items:center;height:52px;padding:0 28px;border-radius:999px;font-weight:500;text-decoration:none}
.jf .btn-dark{background:#121212;color:#F3F2EE}
.jf .btn-light{background:#F3F2EE;color:#121212}
.jf .text-link{border-bottom:1px solid #121212;padding-bottom:2px}
.jf .rings{flex:0 1 480px;width:min(480px,100%);aspect-ratio:1;position:relative}
.jf .rings div{position:absolute;border-radius:50%}
.jf .r1{inset:0;border:1px solid #CFCDC5}
.jf .r2{inset:14%;border:1px solid #BDBBB3}
.jf .r3{inset:28%;border:1px solid #8E8C85}
.jf .r4{inset:42%;border:1px solid #121212}
.jf .r5{inset:47%;background:#C8381E}

/* info strip */
.jf .strip{border-top:1px solid #D9D7D0;border-bottom:1px solid #D9D7D0}
.jf .strip-in{max-width:1200px;margin:0 auto;padding:28px 32px;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px 40px;font-size:16px;color:#5A5A55}

/* services */
.jf .services{max-width:1200px;margin:0 auto;padding:120px 32px;box-sizing:border-box}
.jf .services h2{margin:20px 0 72px;font-size:clamp(36px,4.5vw,64px);line-height:1.05;letter-spacing:-.02em;max-width:720px}
.jf .svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));column-gap:64px}
.jf .svc{border-top:1px solid #121212;padding:28px 0 64px}
.jf .svc h3{margin:12px 0 10px;font-size:32px;letter-spacing:-.01em}
.jf .svc p{margin:0;color:#5A5A55;max-width:420px}

/* statement */
.jf .statement{background:#E9E7E1}
.jf .statement-in{max-width:1200px;margin:0 auto;padding:140px 32px;box-sizing:border-box}
.jf .statement p{margin:0;max-width:1000px;font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:clamp(30px,4.4vw,64px);line-height:1.12;letter-spacing:-.02em}
.jf .statement span{color:#5A5A55}

/* process */
.jf .process{max-width:1200px;margin:0 auto;padding:120px 32px;box-sizing:border-box}
.jf .steps{margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px 32px}
.jf .step{border-top:1px solid #121212;padding-top:20px}
.jf .step h3{margin:10px 0 8px;font-size:28px}
.jf .step p{margin:0;color:#5A5A55}

/* who we protect */
.jf .sectors{max-width:1200px;margin:0 auto;padding:0 32px 120px;box-sizing:border-box}
.jf .sectors .eyebrow{margin-bottom:32px}
.jf .chips{display:flex;flex-wrap:wrap;gap:12px}
.jf .chip{padding:12px 24px;border:1px solid #BDBBB3;border-radius:999px}

/* call to action */
.jf .cta{background:#121212;color:#F3F2EE;position:relative;overflow:hidden}
.jf .cta-ring{position:absolute;border:1px solid #333330;border-radius:50%}
.jf .cta-ring-1{width:640px;height:640px;right:-180px;top:-120px}
.jf .cta-ring-2{width:380px;height:380px;right:-50px;top:10px}
.jf .cta-in{position:relative;max-width:1200px;margin:0 auto;padding:128px 32px;box-sizing:border-box}
.jf .cta h2{margin:0;max-width:760px;font-size:clamp(36px,5vw,72px);line-height:1.04;letter-spacing:-.02em}
.jf .cta p{margin:24px 0 0;color:#A8A7A0;font-size:20px;max-width:480px}
.jf .cta .actions{margin-top:44px}
.jf .cta-muted{color:#A8A7A0}

/* footer */
.jf .footer{max-width:1200px;margin:0 auto;padding:48px 32px;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;font-size:15px;color:#5A5A55}
`

export default function LandingPage() {
  return (
    <div className="jf">
      <style>{CSS}</style>

      {/* Nav */}
      <div className="wrap">
        <div className="nav">
          <a href="#top" className="brand">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" stroke="#121212" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="4" fill="#C8381E" />
            </svg>
            {SITE.name}
          </a>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="pill-out">Request a quote</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div id="top" className="hero">
        <div className="hero-text">
          <div className="eyebrow">Fire safety · Ghana</div>
          <h1>
            Fire is fast.
            <br />
            Be ready <span className="ember">first.</span>
          </h1>
          <p className="lead">
            Extinguishers, alarms, risk assessments and training for homes, offices and industry.
          </p>
          <div className="actions">
            <a href="#contact" className="btn btn-dark">Book a free site visit</a>
            <a href="#services" className="text-link">See services</a>
          </div>
        </div>
        <div className="rings" aria-hidden="true">
          <div className="r1" />
          <div className="r2" />
          <div className="r3" />
          <div className="r4" />
          <div className="r5" />
        </div>
      </div>

      {/* Info strip */}
      <div className="strip">
        <div className="strip-in">
          <span>Emergency line · {SITE.phone}</span>
          <span>Based in {SITE.city}, Ghana</span>
          <span>Certified · {SITE.cert}</span>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="services">
        <div className="eyebrow">01 — Services</div>
        <h2>Four things, done properly.</h2>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.n}>
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statement */}
      <div className="statement">
        <div className="statement-in">
          <p>
            Most fires start small.{' '}
            <span>What decides the outcome is what&apos;s on the wall, and who knows how to use it.</span>
          </p>
        </div>
      </div>

      {/* Process */}
      <div id="process" className="process">
        <div className="eyebrow">02 — Process</div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we protect */}
      <div className="sectors">
        <div className="eyebrow">03 — Who we protect</div>
        <div className="chips">
          {SECTORS.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div id="contact" className="cta">
        <div className="cta-ring cta-ring-1" aria-hidden="true" />
        <div className="cta-ring cta-ring-2" aria-hidden="true" />
        <div className="cta-in">
          <h2>Not sure what your building needs?</h2>
          <p>We&apos;ll come to you, look around, and tell you plainly.</p>
          <div className="actions">
            <a href="#contact" className="btn btn-light">Book a free site visit</a>
            <span className="cta-muted">or call {SITE.phone}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>© {SITE.year} {SITE.name}</span>
        <span>{SITE.city}, Ghana · {SITE.email}</span>
      </div>
    </div>
  )
}