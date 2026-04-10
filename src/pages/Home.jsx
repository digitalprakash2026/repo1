import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import TractorCard from '../components/TractorCard';
import { contact, faqs, testimonials, tractorModels } from '../data/siteData';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Kubota Authorized Dealer Bhanvad',
    areaServed: 'Devbhumi Dwarka, Gujarat',
    telephone: contact.phonePrimary,
    address: contact.bhanvad
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <section className="hero section">
        <div>
          <p className="eyebrow">Authorized Kubota Tractor Dealership</p>
          <h1>Premium Kubota Tractor Solutions for Farmers in Bhanvad & Nearby Villages</h1>
          <p className="lead">Trusted sales, genuine spare parts, finance support, and quick field demo assistance from two convenient branches.</p>
          <div className="row gap-sm">
            <Link className="btn btn-primary" to="/inquiry">Request Demo / Test Drive</Link>
            <a className="btn btn-outline" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp Now</a>
          </div>
          <div className="trust-row">
            <span>✅ Authorized Kubota Dealer</span>
            <span>✅ Genuine Parts Support</span>
            <span>✅ EMI Assistance Available</span>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e823?auto=format&fit=crop&w=1200&q=80" alt="Kubota tractor in farm field" />
      </section>

      <section className="section">
        <div className="section-head"><h2>Featured Kubota Models</h2><Link to="/tractors">View All Models</Link></div>
        <div className="grid cards-3">{tractorModels.map((m) => <TractorCard key={m.slug} model={m} />)}</div>
      </section>

      <section className="section alt grid cards-3">
        <article className="card"><h3>Why Choose Us</h3><p>Experienced dealership, transparent pricing, on-time delivery, and responsive after-sales service.</p></article>
        <article className="card"><h3>Spare Parts</h3><p>Genuine Kubota parts for long life, performance, and lower maintenance cost.</p><Link to="/spare-parts">Explore Parts</Link></article>
        <article className="card"><h3>Finance / EMI Support</h3><p>Bank and NBFC loan guidance with documentation help for faster approvals.</p><Link to="/finance">Get Finance Help</Link></article>
      </section>

      <section className="section">
        <h2>Video Showcase</h2>
        <div className="grid cards-2">
          <iframe title="Tractor demo" src="https://www.youtube.com/embed/J---aiyznGQ" />
          <iframe title="Field work" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        </div>
      </section>

      <section className="section alt">
        <h2>Our Branches</h2>
        <div className="grid cards-2">
          <article className="card"><h3>Bhanvad Main Showroom</h3><p>{contact.bhanvad}</p><a className="btn btn-outline" href="/contact">Get Directions</a></article>
          <article className="card"><h3>Khambhadiya Branch</h3><p>{contact.khambhadiya}</p><a className="btn btn-outline" href="/contact">Visit Branch</a></article>
        </div>
      </section>

      <section className="section">
        <h2>What Farmers Say</h2>
        <div className="grid cards-3">
          {testimonials.map((t) => <article key={t.name} className="card"><p>“{t.text}”</p><strong>{t.name}</strong><small>{t.village}</small></article>)}
        </div>
      </section>

      <section className="section split">
        <LeadForm title="Get Best Tractor Offer Today" />
        <article className="card"><h3>Frequently Asked Questions</h3>
          {faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </article>
      </section>
    </>
  );
}
