// Contact.jsx — quote request section, styled to match the landing page design.
// Self-contained: its styles are scoped below, so it does not depend on your
// Tailwind config, index.css or react-icons.

import { useState } from 'react'

const API_URL = 'http://localhost:3001/api/contact' // change to your live API URL before deploying
const EYEBROW = '04 — Request a quote'

const SERVICES_OPTIONS = [
  'Fire Alarm System',
  'Suppression System',
  'Fire Extinguishers',
  'Inspections & Compliance',
  'Multiple Services',
  'Not Sure Yet',
]

const INFO = [
  { label: 'Phone', val: '+233 24 000 0000', href: 'tel:+233240000000' },
  { label: 'Email', val: 'info@jadafiresafety.com.gh', href: 'mailto:info@jadafiresafety.com.gh' },
  { label: 'Location', val: 'Accra, Ghana (Nationwide)' },
  { label: 'Hours', val: 'Mon–Sat: 7am–7pm · 24/7 Emergency' },
]

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600&family=DM+Sans:wght@400;500&display=swap');

.jc, .jc *, .jc *::before, .jc *::after{box-sizing:border-box}
.jc{background:#F3F2EE;color:#121212;font-family:'DM Sans',sans-serif;font-size:18px;line-height:1.55;scroll-margin-top:96px}
.jc-wrap{max-width:1200px;margin:0 auto;padding:120px 32px}
.jc a:not(.jc-btn){color:#121212;text-decoration:none}
.jc a:not(.jc-btn):hover{color:#C8381E}
.jc h2,.jc h3{font-family:'Bricolage Grotesque',sans-serif;font-weight:500;color:#121212}
.jc-eyebrow{display:block;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#5A5A55}

.jc h2{margin:20px 0 24px;font-size:clamp(36px,4.5vw,64px);line-height:1.05;letter-spacing:-.02em;max-width:720px}
.jc-sub{margin:0 0 72px;max-width:560px;color:#5A5A55;font-size:20px}

.jc-grid{display:flex;flex-wrap:wrap;gap:64px 80px}
.jc-info{flex:1 1 300px;max-width:400px}
.jc-formwrap{flex:2 1 460px;min-width:0}

.jc-list{border-top:1px solid #121212}
.jc-row{padding:20px 0;border-bottom:1px solid #D9D7D0}
.jc-row .jc-eyebrow{margin-bottom:4px}

.jc-btn{display:inline-flex;align-items:center;justify-content:center;height:52px;padding:0 28px;border-radius:999px;font-weight:500;text-decoration:none}
.jc-ghost{margin-top:32px;border:1px solid #121212;color:#121212;transition:color .15s,border-color .15s}
.jc-ghost:hover{color:#C8381E;border-color:#C8381E}
.jc-submit{width:100%;border:0;background:#121212;color:#F3F2EE;font-family:inherit;font-size:inherit;cursor:pointer;transition:background .15s}
.jc-submit:not(:disabled):hover{background:#C8381E}
.jc-submit:disabled{opacity:.6;cursor:not-allowed}

.jc-form{border-top:1px solid #121212;padding-top:32px;display:flex;flex-direction:column;gap:32px}
.jc-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px}
.jc-field .jc-eyebrow{margin-bottom:4px}
.jc-input{display:block;width:100%;margin:0;padding:10px 0;border:0;border-bottom:1px solid #BDBBB3;border-radius:0;background:transparent;color:#121212;font-family:inherit;font-size:18px;line-height:1.55;outline:none;transition:border-color .15s,box-shadow .15s}
.jc-input::placeholder{color:#7A7872}
.jc-input:focus{border-bottom-color:#121212;box-shadow:0 1px 0 0 #121212}
textarea.jc-input{resize:none}

.jc-set{margin:0;padding:0;border:0;min-width:0}
.jc-set legend{padding:0;margin-bottom:14px}
.jc-opts{display:flex;flex-wrap:wrap;gap:12px}
.jc-opt{position:relative;display:block;cursor:pointer}
.jc-opt input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}
.jc-opt span{display:block;padding:12px 24px;border:1px solid #BDBBB3;border-radius:999px;transition:background .15s,border-color .15s,color .15s}
.jc-opt:hover span{border-color:#121212}
.jc-opt input:checked + span{background:#121212;border-color:#121212;color:#F3F2EE}
.jc-opt input:focus-visible + span{outline:2px solid #C8381E;outline-offset:2px}

.jc-error{margin:0;color:#C8381E;font-size:16px}
.jc-detail{margin:-16px 0 0;color:#5A5A55;font-size:14px}
.jc-sent{border-top:1px solid #121212;padding:48px 0}
.jc-sent svg{display:block;margin-bottom:24px}
.jc-sent h3{margin:0 0 8px;font-size:32px;letter-spacing:-.01em}
.jc-sent p{margin:0;color:#5A5A55}
`

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [detail, setDetail] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    let reason = ''
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        reason = body.detail || body.error || `The server replied with status ${res.status}.`
        throw new Error(reason)
      }
      setDetail('')
      setStatus('success')
    } catch {
      setDetail(reason || `Couldn't reach the server at ${API_URL}. Is it running?`)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="jc">
      <style>{CSS}</style>

      <div className="jc-wrap">
        <span className="jc-eyebrow">{EYEBROW}</span>
        <h2>Request a free quote.</h2>
        <p className="jc-sub">
          Tell us about your property and we&apos;ll get back to you within 24 hours with a no-obligation proposal.
        </p>

        <div className="jc-grid">
          {/* Left: contact details */}
          <div className="jc-info">
            <div className="jc-list">
              {INFO.map((item) => (
                <div className="jc-row" key={item.label}>
                  <span className="jc-eyebrow">{item.label}</span>
                  {item.href ? <a href={item.href}>{item.val}</a> : <div>{item.val}</div>}
                </div>
              ))}
            </div>
            <a href="https://wa.me/233240000000" target="_blank" rel="noreferrer" className="jc-btn jc-ghost">
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="jc-formwrap">
            {status === 'success' ? (
              <div className="jc-sent" aria-live="polite">
                <svg width="48" height="48" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="12" stroke="#121212" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="4" fill="#C8381E" />
                </svg>
                <h3>Quote request sent.</h3>
                <p>We&apos;ll be in touch within 24 hours. Thank you for choosing Jada Fire Safety.</p>
              </div>
            ) : (
              <form className="jc-form" onSubmit={handleSubmit}>
                <div className="jc-two">
                  <div className="jc-field">
                    <label className="jc-eyebrow" htmlFor="jc-name">Full name *</label>
                    <input id="jc-name" className="jc-input" name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Your full name" />
                  </div>
                  <div className="jc-field">
                    <label className="jc-eyebrow" htmlFor="jc-phone">Phone / WhatsApp *</label>
                    <input id="jc-phone" className="jc-input" name="phone" value={form.phone} onChange={handleChange} required autoComplete="tel" placeholder="+233 24 ..." />
                  </div>
                </div>

                <div className="jc-two">
                  <div className="jc-field">
                    <label className="jc-eyebrow" htmlFor="jc-email">Email address</label>
                    <input id="jc-email" className="jc-input" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" placeholder="you@company.com" />
                  </div>
                  <div className="jc-field">
                    <label className="jc-eyebrow" htmlFor="jc-company">Company / property name</label>
                    <input id="jc-company" className="jc-input" name="company" value={form.company} onChange={handleChange} autoComplete="organization" placeholder="Company or property name" />
                  </div>
                </div>

                <fieldset className="jc-set">
                  <legend className="jc-eyebrow">Service required *</legend>
                  <div className="jc-opts">
                    {SERVICES_OPTIONS.map((s) => (
                      <label className="jc-opt" key={s}>
                        <input type="radio" name="service" value={s} checked={form.service === s} onChange={handleChange} required />
                        <span>{s}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="jc-field">
                  <label className="jc-eyebrow" htmlFor="jc-message">Brief description</label>
                  <textarea id="jc-message" className="jc-input" name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your property size and any specific concerns…" />
                </div>

                {status === 'error' && (
                  <p className="jc-error" role="alert">
                    Your request didn&apos;t send. Please try again or call us directly.
                  </p>
                )}
                {status === 'error' && import.meta.env.DEV && detail && (
                  <p className="jc-detail">Dev only: {detail}</p>
                )}

                <button type="submit" className="jc-btn jc-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send quote request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}