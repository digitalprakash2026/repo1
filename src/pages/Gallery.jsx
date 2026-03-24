export default function Gallery() {
  return (
    <section className="section">
      <h1>Videos & Gallery</h1>
      <div className="grid cards-2">
        <iframe title="demo one" src="https://www.youtube.com/embed/J---aiyznGQ" />
        <iframe title="demo two" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      </div>
      <div className="grid cards-3 section-no-pad">
        <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80" alt="Tractor in field" />
        <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80" alt="Farmer working with tractor" />
        <img src="https://images.unsplash.com/photo-1500595046743-ee8b7dce3a26?auto=format&fit=crop&w=800&q=80" alt="Showroom delivery" />
      </div>
    </section>
  );
}
