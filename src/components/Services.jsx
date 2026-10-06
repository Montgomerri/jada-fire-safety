import { FiArrowRight } from 'react-icons/fi'

const SERVICES = [
  {
    title: 'Fire alarm systems',
    bullets: [
      'Conventional & addressable alarm panels',
      'Smoke, heat & CO detection',
      'Zoned coverage for large facilities',
      'Remote monitoring integration',
    ],
  },
  {
    title: 'Suppression systems',
    bullets: [
      'Wet & dry pipe sprinkler systems',
      'Gas suppression for server rooms',
      'Foam deluge for industrial sites',
      'Full pressure testing & certification',
    ],
  },
  {
    title: 'Fire extinguishers',
    bullets: [
      'All agent types: CO₂, dry powder, foam',
      'Wall-mounted & cabinet installations',
      'Annual servicing & refill contracts',
      'Staff training on correct usage',
    ],
  },
  {
    title: 'Inspections & compliance',
    bullets: [
      'Full fire risk assessments',
      'GNFS compliance documentation',
      'Scheduled annual inspection plans',
      'Remediation & upgrade advisory',
    ],
  },
]

export default function Services() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="wrap scroll-mt-20 py-28">
      <p className="section-eyebrow">01 — Services</p>
      <h2 className="section-title mb-5 mt-5 max-w-2xl">Four things, done properly.</h2>
      <p className="section-sub mb-16 max-w-xl">
        Fire safety from planning to compliance, handled by certified Ghanaian professionals.
      </p>

      <div className="grid gap-x-16 md:grid-cols-2">
        {SERVICES.map((svc, i) => (
          <div key={svc.title} className="border-t border-ink pb-16 pt-7">
            <div className="text-sm text-ember">0{i + 1}</div>
            <h3 className="mb-5 mt-3 font-display text-3xl font-medium tracking-[-0.01em]">{svc.title}</h3>
            <ul className="mb-7 space-y-2 text-muted">
              {svc.bullets.map((b) => (
                <li key={b} className="flex items-baseline gap-3">
                  <span className="h-1 w-1 shrink-0 translate-y-[-3px] rounded-full bg-ember" />
                  {b}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-ember"
            >
              Request this service
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
