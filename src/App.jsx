import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Finance from './pages/Finance';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import NotFound from './pages/NotFound';
import SpareParts from './pages/SpareParts';
import Testimonials from './pages/Testimonials';
import TractorDetail from './pages/TractorDetail';
import Tractors from './pages/Tractors';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tractors" element={<Tractors />} />
        <Route path="/tractors/:slug" element={<TractorDetail />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
