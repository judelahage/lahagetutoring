
import React from 'react';

interface FooterProps {
  setCurrentPage: (page: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleSuccessStoriesClick = () => {
    setCurrentPage('home');
    // Small timeout to allow the Home component to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-forest text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-sage/20 pb-12">
          <div className="col-span-2">
            <button 
              onClick={() => setCurrentPage('home')}
              className="mb-6 flex items-center hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="Lahage Tutoring Home"
            >
              <span className="text-3xl font-bold text-white tracking-tight">
                Lahage<span className="text-brass">Tutoring</span>
              </span>
            </button>
            <p className="text-sage max-w-sm opacity-80">Elite academic mentorship for students who want to bridge the gap between "good enough" and mastery. Serving high-achieving families with personalized learning roadmaps.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-brass uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sage">
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={handleSuccessStoriesClick} className="hover:text-white transition-colors">Success Stories</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-brass uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sage">
              <li><a href="mailto:jude@lahagetutoring.com" className="hover:text-white transition-colors">jude@lahagetutoring.com</a></li>
              <li> <a href = "tel:+17325265564" aria-label="Call Lahage Tutoring at (732) 526-5564" className="hover:text-white transition-colors">(732) 526-5564</a></li>
              <li>New Jersey</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sage/60">
          <p>© {new Date().getFullYear()} Lahage Tutoring. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
