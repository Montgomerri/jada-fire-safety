const ITEMS = [
  { title: 'GNFS certified', sub: 'Ghana National Fire Service' },
  { title: 'ISO 9001 compliant', sub: 'Quality management standard' },
  { title: '24/7 emergency line', sub: '+233 24 000 0000', href: 'tel:+233240000000' },
]

export default function Certifications() {
  return (
    <section className="border-y border-line">
      <div className="wrap grid gap-6 py-7 sm:grid-cols-3">
        {ITEMS.map((i) => (
          <div key={i.title}>
            <div className="text-[15px] font-medium">{i.title}</div>
            {i.href ? (
              <a href={i.href} className="text-sm text-muted transition-colors hover:text-ember">{i.sub}</a>
            ) : (
              <div className="text-sm text-muted">{i.sub}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
