import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

const LINKS = {
  Services: ['Fire Alarm Systems', 'Suppression Systems', 'Fire Extinguishers', 'Inspections & Compliance'],
  Company: ['About Us', 'Why Choose Us', 'Certifications', 'Careers'],
  Support: ['Get a Quote', 'Emergency Line', 'FAQ', 'Contact Us'],
}

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3 font-display text-xl font-semibold">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="12" stroke="#121212" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="4" fill="#C8381E" />
              </svg>
              Jada Fire Safety
            </div>
            <p className="mb-6 max-w-xs text-[15px] leading-relaxed text-muted">
              Ghana's trusted fire safety installation and compliance experts. Protecting lives and property since 2013.
            </p>
            <div className="space-y-2 text-[15px] text-muted">
              <a href="tel:+233240000000" className="flex items-center gap-2 transition-colors hover:text-ember">
                <FiPhone size={14} /> +233 24 000 0000
              </a>
              <a href="mailto:info@jadafiresafety.com.gh" className="flex items-center gap-2 transition-colors hover:text-ember">
                <FiMail size={14} /> info@jadafiresafety.com.gh
              </a>
              <div className="flex items-center gap-2">
                <FiMapPin size={14} /> Accra, Ghana · Nationwide service
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                [FiFacebook, 'Facebook'],
                [FiInstagram, 'Instagram'],
                [FiTwitter, 'Twitter'],
                [FiLinkedin, 'LinkedIn'],
              ].map(([Icon, name]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#BDBBB3] text-muted transition-colors hover:border-ember hover:text-ember"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="section-eyebrow mb-5">{group}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[15px] transition-colors hover:text-ember">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Jada Fire Safety Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ember">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ember">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-ember">GNFS Certification</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
