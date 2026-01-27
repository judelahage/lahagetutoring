
import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

type Page = 'home' | 'services' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'services': return <Services navigate={setCurrentPage} />;
      case 'about': return <About navigate={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
