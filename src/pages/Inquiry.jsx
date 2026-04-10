import LeadForm from '../components/LeadForm';
import { contact } from '../data/siteData';

export default function Inquiry() {
  return (
    <section className="section container-narrow">
      <h1>Inquiry / Book Demo</h1>
      <p>Fill details below and our advisor will connect with you in your preferred language.</p>
      <LeadForm title="Book Demo / Request Callback" />
      <article className="card section-no-pad"><p>Prefer instant help? Use WhatsApp for quick response.</p><a className="btn btn-primary" href={`https://wa.me/${contact.whatsapp}`}>Chat on WhatsApp</a></article>
    </section>
  );
}
