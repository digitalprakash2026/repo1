import { useState } from 'react';

const initial = {
  name: '',
  mobile: '',
  city: '',
  model: '',
  requirementType: 'tractor',
  message: '',
  language: 'en'
};

export default function LeadForm({ title = 'Get Best Offer', compact = false }) {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      source: window.location.pathname,
      createdAt: new Date().toISOString(),
      automationHooks: {
        googleSheets: true,
        emailNotification: true,
        whatsappAlert: true,
        webhook: true
      }
    };
    console.log('Lead payload (ready for CRM/Webhook integration):', payload);
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <section className="card form-card">
      <h3>{title}</h3>
      <p className="muted">Automation-ready structure for CRM / Google Sheets / WhatsApp follow-up.</p>
      {submitted && <p className="success">Thank you! Our team will contact you shortly.</p>}
      <form onSubmit={onSubmit} className={compact ? 'form compact' : 'form'}>
        <input required name="name" placeholder="Name" value={form.name} onChange={onChange} />
        <input required name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={onChange} />
        <input required name="city" placeholder="Village / City" value={form.city} onChange={onChange} />
        <input name="model" placeholder="Interested Tractor Model" value={form.model} onChange={onChange} />
        <select name="requirementType" value={form.requirementType} onChange={onChange}>
          <option value="tractor">Tractor</option>
          <option value="spare-parts">Spare Parts</option>
          <option value="finance">Finance</option>
          <option value="service">Service</option>
        </select>
        <textarea rows="3" name="message" placeholder="Message" value={form.message} onChange={onChange} />
        <select name="language" value={form.language} onChange={onChange}>
          <option value="en">English</option>
          <option value="gu">Gujarati</option>
          <option value="hi">Hindi</option>
        </select>
        <button className="btn btn-primary" type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
}
