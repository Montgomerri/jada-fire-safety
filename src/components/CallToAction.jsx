import { FiArrowRight, FiPhone } from 'react-icons/fi'

export default function CallToAction() {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="absolute -right-44 -top-32 h-[640px] w-[640px] rounded-full border border-[#333330]" />
      <div aria-hidden="true" className="absolute -right-12 top-2 h-[380px] w-[380px] rounded-full border border-[#333330]" />

      <div className="wrap relative py-28 md:py-32">
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] md:text-6xl lg:text-7xl">
          Not sure what your building needs?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-[#A8A7A0] md:text-xl">
          Don't wait for an incident. One call to Jada Fire Safety is all it takes to secure your property, meet
          compliance, and protect the people inside.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-7">
          <button
            onClick={scrollToContact}
            className="inline-flex h-[52px] items-center gap-2 rounded-full bg-paper px-7 font-medium text-ink transition-colors hover:bg-white"
          >
            Book a free site visit <FiArrowRight />
          </button>
          <a href="tel:+233240000000" className="inline-flex items-center gap-2 text-[#A8A7A0] transition-colors hover:text-paper">
            <FiPhone size={16} /> or call +233 24 000 0000
          </a>
        </div>
      </div>
    </section>
  )
}
