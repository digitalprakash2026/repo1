import { Link } from 'react-router-dom';
import { contact } from '../data/siteData';

export default function TractorCard({ model }) {
  return (
    <article className="card tractor-card">
      <img src={model.image} alt={model.name} loading="lazy" />
      <div className="card-body">
        <h3>{model.name}</h3>
        <p>{model.summary}</p>
        <ul>
          <li>{model.hp}</li>
          <li>{model.engine}</li>
          <li>{model.usage}</li>
        </ul>
        <div className="row gap-sm">
          <Link className="btn btn-outline" to={`/tractors/${model.slug}`}>View Details</Link>
          <a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}?text=I am interested in ${model.name}`}>WhatsApp Inquiry</a>
        </div>
      </div>
    </article>
  );
}
