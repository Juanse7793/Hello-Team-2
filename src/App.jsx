import './App.css';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const App = () => {
  const footerInfo = {
    name: 'Juan',
    contact: 593995412478,
    email: 'krugerstar@krugercorp.com',
    user: '@krugerstar',
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer {...footerInfo} />
    </Router>
  );
};
