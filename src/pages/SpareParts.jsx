import LeadForm from '../components/LeadForm';
import { contact } from '../data/siteData';

export default function SpareParts() {
  return (
    <section className="section">
      <h1>Genuine Kubota Spare Parts</h1>
      <p>Protect tractor life and field productivity with genuine components from our authorized branches.</p>
      <div className="grid cards-3">
        <article className="card"><h3>Engine Parts</h3><p>Filters, pistons, belts, seals, lubricants.</p></article>
        <article className="card"><h3>Hydraulics & Transmission</h3><p>Pumps, gears, clutch kits, hydraulic oil and kits.</p></article>
        <article className="card"><h3>Electrical & Body Parts</h3><p>Lights, switches, wiring, seats, and accessories.</p></article>
      </div>
      <div className="grid cards-2 section-no-pad">
        <article className="card"><h3>Why Genuine Parts Matter</h3><ul><li>Longer tractor life</li><li>Better performance and safety</li><li>Reduced breakdown risk</li></ul><a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp for Parts</a></article>
        <LeadForm title="Spare Parts Inquiry" compact />
      </div>
    </section>
  );
}
