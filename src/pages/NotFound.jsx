import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section container-narrow">
      <h1>Page Not Found</h1>
      <p>Please use the main navigation to continue browsing.</p>
      <Link className="btn btn-primary" to="/">Back to Home</Link>
    </section>
  );
}
