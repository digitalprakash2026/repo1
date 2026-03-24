import LeadForm from '../components/LeadForm';
import { contact } from '../data/siteData';

export default function Finance() {
  return (
    <section className="section">
      <h1>Finance / EMI Assistance</h1>
      <p>We help farmers secure suitable loan options with simple documentation support and quick communication.</p>
      <div className="grid cards-2">
        <article className="card"><h3>Benefits</h3><ul><li>Multiple lender options</li><li>Guidance on eligibility</li><li>Transparent EMI planning</li></ul></article>
        <article className="card"><h3>Basic Documents</h3><ul><li>ID & address proof</li><li>Income or farming proof</li><li>Bank statement/passbook</li></ul><a className="btn btn-outline" href={`https://wa.me/${contact.whatsapp}`}>Discuss on WhatsApp</a></article>
      </div>
      <LeadForm title="Request Finance Support" />
    </section>
  );
}
