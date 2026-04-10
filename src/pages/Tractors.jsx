import { useMemo, useState } from 'react';
import TractorCard from '../components/TractorCard';
import { tractorModels } from '../data/siteData';

export default function Tractors() {
  const [query, setQuery] = useState('');
  const list = useMemo(() => tractorModels.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.usage.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <section className="section">
      <h1>All Kubota Tractor Models</h1>
      <p>Compare models and choose based on HP, usage, and implement compatibility.</p>
      <input className="search" placeholder="Search by model or use case" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="grid cards-3">{list.map((m) => <TractorCard key={m.slug} model={m} />)}</div>
    </section>
  );
}
