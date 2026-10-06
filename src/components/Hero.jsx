import { FiArrowRight } from 'react-icons/fi'

const STATS = [
  { num: '500+', label: 'Installations completed' },
  { num: '12+', label: 'Years of experience' },
  { num: '100%', label: 'GNFS compliance rate' },
  { num: '24/7', label: 'Emergency support' },
]

// One small icon per service, each on its own ring.
// inset = which ring it rides on, dur = seconds per lap, dir = 1 clockwise / -1 anticlockwise,
// rest = starting angle in degrees (also where it sits for visitors who prefer reduced motion).
const ORBIT = [
  { icon: 'ext', inset: '0%', dur: 24, dir: 1, rest: 30 },
  { icon: 'bell', inset: '14%', dur: 18, dir: -1, rest: 300 },
  { icon: 'drop', inset: '14%', dur: 18, dir: -1, rest: 120 },
  { icon: 'shield', inset: '28%', dur: 12, dir: 1, rest: 200 },
]

const ICONS = {
  ext: (
    <>
      <rect x="8" y="9" width="8" height="12" rx="2.5" />
      <path d="M10.5 9V6.5h3V9" />
      <path d="M9.5 6.5h5.5" />
      <path d="M14 7.5c3.5 0 5 1.5 5 4.5" />
      <rect x="8.75" y="14" width="6.5" height="2.2" fill="#C8381E" stroke="none" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-4.5a6 6 0 0 1 12 0V16l1.5 2h-15z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
      <circle cx="12" cy="4" r="1" fill="#C8381E" stroke="none" />
    </>
  ),
  drop: <path d="M12 3.5c3 4 5.5 6.8 5.5 10a5.5 5.5 0 0 1-11 0c0-3.2 2.5-6 5.5-10z" />,
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.7-3 8-7 9.5-4-1.5-7-4.8-7-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" stroke="#C8381E" />
    </>
  ),
}

// Scoped styles for the orbit, so this file doesn't depend on your Tailwind config.
const ORBIT_CSS = `
@keyframes hero-orbit { to { transform: rotate(360deg); } }
.hero-orbit { container-type: inline-size; --chip: 38px; }
@supports (width: 1cqw) { .hero-orbit { --chip: max(30px, 8cqw); } }
.hero-rotor {
  position: absolute;
  border-radius: 9999px;
  animation: hero-orbit var(--dur) linear var(--delay) infinite var(--dir);
}
.hero-chip {
  position: absolute;
  left: 50%;
  top: 0;
  width: var(--chip);
  height: var(--chip);
  margin: calc(var(--chip) / -2) 0 0 calc(var(--chip) / -2);
  border-radius: 9999px;
  background: #F3F2EE;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hero-orbit var(--dur) linear var(--delay) infinite var(--dir-rev);
}
.hero-chip svg { width: 56%; height: 56%; }
.hero-orbit:hover .hero-rotor,
.hero-orbit:hover .hero-chip { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .hero-rotor { animation: none; transform: rotate(var(--rest)); }
  .hero-chip { animation: none; transform: rotate(calc(var(--rest) * -1)); }
}
`

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="pt-[72px]" style={{ background: '#F3F2EE' }}>
      <style>{ORBIT_CSS}</style>

      <div className="wrap flex flex-col items-center justify-between gap-14 pb-20 pt-16 lg:flex-row lg:pt-20">
        <div className="max-w-2xl">
          

          <h1 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[104px]">
            Fire is fast.
            <br />
            Be ready <span className="text-ember">first.</span>
          </h1>

          <p className="section-sub mt-8 max-w-md">
            Professional fire safety installation, inspection and compliance for homes and businesses across Ghana.
            Certified. Reliable. Always on call.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7">
            <button onClick={() => scrollTo('#contact')} className="btn-primary">
              Book a free site visit <FiArrowRight />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="border-b border-ink pb-0.5 transition-colors hover:border-ember hover:text-ember"
            >
              See services
            </button>
          </div>
        </div>

        {/* Smoke-detector rings with the service icons in orbit */}
        <div aria-hidden="true" className="hero-orbit relative aspect-square w-full max-w-[480px] shrink-0">
          <div className="absolute inset-0 rounded-full border border-[#CFCDC5]" />
          <div className="absolute inset-[14%] rounded-full border border-[#BDBBB3]" />
          <div className="absolute inset-[28%] rounded-full border border-[#8E8C85]" />
          <div className="absolute inset-[42%] rounded-full border border-ink" />
          <div className="absolute inset-[47%] rounded-full bg-ember" />

          {ORBIT.map((o) => {
            // Negative delay starts each icon at its `rest` angle (anticlockwise laps run in reverse).
            const delay = -((o.dir > 0 ? o.rest / 360 : 1 - o.rest / 360) * o.dur)
            return (
              <div
                key={o.icon}
                className="hero-rotor"
                style={{
                  inset: o.inset,
                  '--dur': `${o.dur}s`,
                  '--delay': `${delay}s`,
                  '--dir': o.dir > 0 ? 'normal' : 'reverse',
                  '--dir-rev': o.dir > 0 ? 'reverse' : 'normal',
                  '--rest': `${o.rest}deg`,
                }}
              >
                <div className="hero-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[o.icon]}
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="wrap pb-20">
        <dl className="grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl font-medium tracking-[-0.02em]">{s.num}</dd>
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}