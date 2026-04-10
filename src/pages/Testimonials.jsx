import { Link } from 'react-router-dom';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="section">
      <h1>Farmer Testimonials</h1>
      <p>Real-looking customer experiences focused on purchase, support quality, and service trust.</p>
      <div className="grid cards-3">
        {testimonials.map((t) => (
          <article key={t.name} className="card">
            <h3>{t.name}</h3>
            <small>{t.village}</small>
            <p>“{t.text}”</p>
          </article>
        ))}
      </div>
      <div className="cta-strip"><h3>Ready to discuss the right model?</h3><Link className="btn btn-primary" to="/inquiry">Send Inquiry</Link></div>
    </section>
  );
}
