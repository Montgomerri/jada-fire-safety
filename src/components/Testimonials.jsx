import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    name: 'Kwame Asante',
    role: 'Facilities Manager, Accra Grand Hotel',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Jada Fire Safety handled our entire hotel\'s suppression system upgrade with complete professionalism. The team was punctual, GNFS-certified, and handed over full documentation. We passed our inspection first time.',
  },
  {
    name: 'Abena Mensah',
    role: 'Operations Director, Tema Logistics Ltd',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'We passed our GNFS inspection on the first attempt after Jada installed our alarm system. The process was seamless from quote to certification — we wouldn\'t use anyone else.',
  },
  {
    name: 'Emmanuel Darko',
    role: 'CEO, Darko Properties',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
    text: 'When we had a late-night alarm fault across one of our buildings, their team was on-site within 2 hours. That level of commitment is rare in Ghana\'s service industry. Highly recommended.',
  },
  {
    name: 'Dr. Lila Nguyen',
    role: 'Director, Korle-Bu Specialist Clinic',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Healthcare compliance is strict. Jada understood our environment immediately and designed a system that met all requirements. Their team is knowledgeable, respectful, and thorough.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length)

  const visible = [
    TESTIMONIALS[current],
    TESTIMONIALS[(current + 1) % TESTIMONIALS.length],
  ]

  return (
    <section className="bg-ash py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            
            <h2 className="section-title">Don't Just Take Our Word for It</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-flame hover:text-white hover:border-flame transition-colors">
              <FiChevronLeft />
            </button>
            <button onClick={next} className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-flame hover:text-white hover:border-flame transition-colors">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((t, i) => (
            <div key={i} className="bg-white p-8 border border-gray-100">
              <div className="text-5xl text-flame font-serif leading-none mb-4">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => <span key={s} className="text-amber-400 text-sm">★</span>)}
              </div>
              <p className="text-smoke text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-soot text-sm">{t.name}</div>
                  <div className="text-smoke text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-flame' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}