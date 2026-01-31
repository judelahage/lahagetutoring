
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home } from './Home';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
