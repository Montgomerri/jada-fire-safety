import { FiShield, FiStar, FiZap, FiUsers, FiMapPin, FiThumbsUp } from 'react-icons/fi'

const REASONS = [
  {
    icon: <FiShield size={22} />,
    title: 'Fully Licensed & Insured',
    desc: 'Every technician is GNFS-certified. You\'re covered from the moment we walk through your door.',
  },
  {
    icon: <FiStar size={22} />,
    title: '5-Star Rated Service',
    desc: 'Our clients consistently rate us 5 stars for punctuality, professionalism, and quality of work.',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Free Premium Assessment',
    desc: 'Every engagement starts with a no-cost, no-obligation site assessment by a senior fire safety engineer.',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'On-Time Guarantee',
    desc: 'We respect your schedule. If we\'re late without notice, your next service call is on us.',
  },
  {
    icon: <FiMapPin size={22} />,
    title: 'Modern, GPS-Tracked Fleet',
    desc: 'Our vehicles are tracked and dispatched efficiently so we\'re always where you need us, fast.',
  },
  {
    icon: <FiThumbsUp size={22} />,
    title: 'All-Inclusive Pricing',
    desc: 'No hidden charges. The quote we give is the price you pay. Transparent billing every time.',
  },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        <p className="section-eyebrow">Why Choose Jada</p>
        <h2 className="section-title mb-3">Why We're Ghana's Top-Rated Fire Safety Company</h2>
        <p className="section-sub max-w-xl mx-auto mb-14">
          Trust takes time to build. Here's what our clients say drives their loyalty to Jada Fire Safety.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(r => (
            <div
              key={r.title}
              className="text-left p-6 border border-gray-100 hover:border-flame/30 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-flame/10 text-flame flex items-center justify-center mb-4 group-hover:bg-flame group-hover:text-white transition-colors duration-200">
                {r.icon}
              </div>
              <h3 className="font-bold text-soot text-base mb-2">{r.title}</h3>
              <p className="text-smoke text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}