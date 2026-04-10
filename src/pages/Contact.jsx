import LeadForm from '../components/LeadForm';
import { contact } from '../data/siteData';

export default function Contact() {
  return (
    <section className="section">
      <h1>Contact & Branches</h1>
      <div className="grid cards-2">
        <article className="card"><h3>Bhanvad Showroom</h3><p>{contact.bhanvad}</p><p>Mon-Sat: 9:30 AM - 7:00 PM</p><a className="btn btn-outline" href="https://maps.google.com" target="_blank" rel="noreferrer">Get Directions</a></article>
        <article className="card"><h3>Khambhadiya Branch</h3><p>{contact.khambhadiya}</p><p>Mon-Sat: 9:30 AM - 7:00 PM</p><a className="btn btn-outline" href="https://maps.google.com" target="_blank" rel="noreferrer">Get Directions</a></article>
      </div>
      <article className="card section-no-pad"><h3>Phone & WhatsApp</h3><p>{contact.phonePrimary} | {contact.phoneSecondary}</p><p>WhatsApp: +91 98765 43210</p></article>
      <article className="card section-no-pad"><h3>Map</h3><iframe title="bhanvad map" src="https://www.google.com/maps?q=Bhanvad,Gujarat&output=embed" /></article>
      <LeadForm title="Branch Inquiry Form" />
    </section>
  );
}
