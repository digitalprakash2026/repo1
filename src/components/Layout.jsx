import { NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { contact, copy, languages } from '../data/siteData';

export default function Layout({ children }) {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div>
      <div className="offer-bar">{t.offerBar}</div>
      <header className="header">
        <div className="logo-wrap">
          <span className="logo-badge">K</span>
          <div>
            <p className="logo-title">Kubota Authorized Dealer</p>
            <p className="logo-sub">Bhanvad | Khambhadiya</p>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/">{t.nav.home}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/tractors">{t.nav.tractors}</NavLink>
          <NavLink to="/spare-parts">{t.nav.spareParts}</NavLink>
          <NavLink to="/finance">{t.nav.finance}</NavLink>
          <NavLink to="/gallery">{t.nav.gallery}</NavLink>
          <NavLink to="/testimonials">{t.nav.testimonials}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>
        <div className="header-actions">
          <select className="language" value={lang} onChange={(e) => setLang(e.target.value)}>
            {languages.map((lng) => (
              <option key={lng.code} value={lng.code}>{lng.label}</option>
            ))}
          </select>
          <a className="btn btn-outline" href={`tel:${contact.phonePrimary}`}>{t.callNow}</a>
          <a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">{t.whatsapp}</a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div>
          <h4>Authorized Kubota Dealer</h4>
          <p>Serving farmers across Devbhumi Dwarka for many years with tractors, genuine parts, and dependable service.</p>
        </div>
        <div>
          <h5>Branches</h5>
          <p>Bhanvad Showroom</p>
          <p>Khambhadiya Branch</p>
        </div>
        <div>
          <h5>Quick Contact</h5>
          <p>{contact.phonePrimary}</p>
          <p>{contact.email}</p>
          <a className="btn btn-primary" href="/inquiry">{t.bookDemo}</a>
        </div>
      </footer>

      <div className="sticky-mobile-cta">
        <a href={`tel:${contact.phonePrimary}`}>📞 {t.callNow}</a>
        <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">💬 {t.whatsapp}</a>
      </div>
    </div>
  );
}
