const POINTS = [
  'Locally owned, nationally trusted, serving all regions of Ghana',
  'Over GHS 20M worth of fire safety assets installed and protected',
  'Dedicated account manager for every commercial client',
  'Rapid 24-hour emergency callout for existing clients',
]

export default function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 pb-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="section-eyebrow">03 About</p>
          <h2 className="section-title mb-6 mt-5">Your trusted fire safety partners.</h2>
          <p className="section-sub mb-4">
            Loyalty earned, nationwide trusted. Jada Fire Safety is the difference between a company that treats you
            like a number and one that treats you like family.
          </p>
          <p className="section-sub mb-9">
            From custom-designed systems for homes to large commercial properties, we deliver real protection that
            gives owners and businesses lasting peace of mind.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Talk to an expert
          </a>
        </div>

        <ul className="self-start">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-4 border-t border-ink py-6 text-lg">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
