import { FiClipboard, FiFileText, FiTool, FiCheckSquare } from 'react-icons/fi'

const STEPS = [
  {
    icon: <FiClipboard size={24} />,
    num: '01',
    title: 'Free Personalised Quote',
    desc: 'Contact us and we\'ll arrange a free site visit. No obligations, no pressure — just honest advice tailored to your property and risk profile.',
  },
  {
    icon: <FiFileText size={24} />,
    num: '02',
    title: 'Schedule Your Installation',
    desc: 'We schedule your installation at a time that minimises disruption to your home or business operations.',
  },
  {
    icon: <FiTool size={24} />,
    num: '03',
    title: 'Professional Installation Day',
    desc: 'Our certified technicians arrive on time, in uniform, and get the job done to the highest safety standard.',
  },
  {
    icon: <FiCheckSquare size={24} />,
    num: '04',
    title: 'Certification & Handover',
    desc: 'We hand over full compliance documents, walk you through your system, and set up your maintenance schedule.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: heading */}
          <div>
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-title mb-4">Our Stress-Free Installation Process</h2>
            <p className="section-sub max-w-md">
              We take care of everything  from risk assessment to final certification  so you can focus on what matters.
            </p>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex gap-5 pb-8 relative">
                {/* Line connector */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-200" />
                )}

                {/* Icon circle */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-flame/10 border-2 border-flame text-flame flex items-center justify-center z-10">
                  {step.icon}
                </div>

                <div>
                  <div className="text-xs font-bold text-flame uppercase tracking-widest mb-1">Step {step.num}</div>
                  <h3 className="font-bold text-soot text-base mb-1">{step.title}</h3>
                  <p className="text-smoke text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}