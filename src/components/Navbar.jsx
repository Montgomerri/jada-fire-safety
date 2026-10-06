import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="12" stroke="#121212" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="4" fill="#C8381E" />
          </svg>
          Jada Fire Safety
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={(e) => handleScroll(e, l.href)} className="transition-colors hover:text-ember">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="tel:+233240000000" className="hidden items-center gap-2 text-sm text-muted transition-colors hover:text-ember lg:flex">
            <FiPhone size={15} />
            +233 24 000 0000
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="btn-outline !h-11 !px-5 text-[15px]">
            Request a quote
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t border-line bg-paper px-6 py-6 md:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={(e) => handleScroll(e, l.href)} className="text-lg hover:text-ember">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="btn-primary mt-2">
            Request a quote
          </a>
        </div>
      )}
    </header>
  )
}
