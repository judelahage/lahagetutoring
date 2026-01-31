
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact'}
  ];

  return (
    <nav className="bg-offwhite border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-4 hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="Lahage Tutoring Home"
            >
              <img src={"https://image2url.com/r2/default/images/1769737333312-13b439f6-b36f-4142-9d08-9deb1115bd2b.png"} alt="Lahage Tutoring Services" className="h-8 w-auto" aria-hidden="true" />

              <span className="text-2xl font-bold text-forest tracking-tight">
                Lahage<span className="text-brass">Tutoring</span>
              </span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-brass' : 'text-slate-600 hover:text-forest'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open("https://calendly.com/jude-lahagetutoring/10min", "_self")}
              className="bg-forest text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover-bg-forest-dark transition-all shadow-md active:scale-95"
            >
              Book a Consultation
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-offwhite border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-sage"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
              className="block w-full text-center mt-4 bg-forest text-white px-3 py-2 rounded-md font-medium"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
