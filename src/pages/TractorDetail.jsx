import { Link, useParams } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { contact, faqs, tractorModels } from '../data/siteData';

export default function TractorDetail() {
  const { slug } = useParams();
  const model = tractorModels.find((m) => m.slug === slug);
  if (!model) return <section className="section"><h1>Model not found</h1></section>;

  return (
    <section className="section">
      <div className="hero small">
        <div>
          <h1>{model.name}</h1>
          <p className="lead">{model.summary}</p>
          <div className="row gap-sm">
            <a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}?text=Need brochure for ${model.name}`}>WhatsApp Inquiry</a>
            <a className="btn btn-outline" href="/inquiry">EMI / Demo Inquiry</a>
          </div>
        </div>
        <img src={model.image} alt={model.name} />
      </div>

      <div className="grid cards-2">
        <article className="card"><h3>Key Benefits</h3><ul><li>Strong performance and fuel efficiency.</li><li>Easy controls for all-day comfort.</li><li>Compatible with major farm implements.</li></ul></article>
        <article className="card"><h3>Best Use Cases</h3><p>{model.usage}</p><p>Suitable for soil preparation, spraying, hauling, and multi-season operations.</p></article>
      </div>

      <article className="card">
        <h3>Full Specifications</h3>
        <table><tbody>{Object.entries(model.specs).map(([k,v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
      </article>

      <section className="grid cards-2 section-no-pad">
        <article className="card"><h3>Video</h3><iframe title="model video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" /></article>
        <article className="card"><h3>Image Gallery</h3><div className="grid cards-2"><img src={model.image} alt={`${model.name} side view`} /><img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" alt={`${model.name} in farm`} /></div></article>
      </section>

      <div className="grid cards-2 section-no-pad">
        <article className="card"><h3>Need Brochure?</h3><p>Download model brochure or request callback from our sales advisor.</p><a className="btn btn-primary" href="/inquiry">Download / Request</a></article>
        <LeadForm title={`Inquire for ${model.name}`} compact />
      </div>

      <article className="card section-no-pad"><h3>Related Models</h3><div className="row wrap">{tractorModels.filter((m)=>m.slug!==slug).map((m)=><Link className="chip" key={m.slug} to={`/tractors/${m.slug}`}>{m.name}</Link>)}</div></article>
      <article className="card section-no-pad"><h3>FAQ</h3>{faqs.map((f)=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</article>
    </section>
  );
}
