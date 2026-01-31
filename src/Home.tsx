
import React, { useState } from 'react';

interface HomeProps {
  navigate: (page: any) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-offwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-5xl lg:text-7xl font-bold text-forest leading-tight mb-6">
              Elite Academic Mentorship for <span className="text-forest decoration-brass underline-offset-8">Ambitious Students.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              We bridge the gap between "good enough" and absolute mastery. Data-driven SAT/ACT prep and specialized subject tutoring that builds confidence—and college acceptance letters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => window.open("https://calendly.com/jude-lahagetutoring/10min", "_self")}
                className="bg-forest text-white px-8 py-4 rounded-xl text-lg font-bold hover-bg-forest-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Book Your Consultation
              </button>
              <button 
                onClick={() => navigate('services')}
                className="bg-transparent text-forest border-2 border-forest px-8 py-4 rounded-xl text-lg font-bold hover:bg-sage transition-all"
              >
                Explore Services
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "3+ years experience",
                "Proven Score Gains",
                "100% Success Rate"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-brass" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-linen -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-forest mb-4">Is Lahage Tutoring the Right Fit?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We don't just help with homework. We mentor students who are ready to level up.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-offwhite p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-forest mb-4">For Parents</h3>
            <p className="text-slate-600 mb-6">You want to see your child confident, organized, and excited about their future. You're looking for a partner who takes the "parent vs student" academic tension out of the house.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-brass">✔</span> Peace of mind through weekly reports</li>
              <li className="flex gap-2"><span className="text-brass">✔</span> Direct communication with an expert</li>
              <li className="flex gap-2"><span className="text-brass">✔</span> Measurable ROI on education</li>
            </ul>
          </div>
          <div className="bg-offwhite p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-forest mb-4">For Students</h3>
            <p className="text-slate-600 mb-6">You're hitting a wall in Calculus, or your SAT scores aren't reflecting your true capability. You need a coach who speaks your language and actually makes the material click.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2"><span className="text-brass">🚀</span> Strategies, not just shortcuts</li>
              <li className="flex gap-2"><span className="text-brass">🚀</span> A mentor who builds your confidence</li>
              <li className="flex gap-2"><span className="text-brass">🚀</span> Faster results with less frustration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-forest mb-4">How We Can Help</h2>
              <p className="text-slate-600">Tailored programs designed for specific academic goals.</p>
            </div>
            <button onClick={() => navigate('services')} className="text-brass font-bold flex items-center gap-2 hover:gap-3 transition-all">
              See All Services <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Standardized Testing", desc: "Elite SAT/ACT prep focused on data analysis and strategy mastery.", icon: "📝" },
              { title: "Subject Mastery", desc: "Algebra, Calculus, Physics, and Chemistry. We turn confusion into clarity.", icon: "🧪" },
              { title: "Executive Function", desc: "Time management, note-taking, and organizational skills for life.", icon: "🧠" }
            ].map((s, i) => (
              <div key={i} className="group p-8 border rounded-2xl hover:border-brass transition-all cursor-pointer bg-sage/30">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-3 group-hover:text-brass transition-colors">{s.title}</h3>
                <p className="text-slate-600 mb-6">{s.desc}</p>
                <button onClick={() => navigate('contact')} className="text-sm font-bold text-forest group-hover:underline">Inquire →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-forest text-center mb-16">Our Way: Step-by-Step</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic", desc: "We start with a comprehensive assessment to find the gaps." },
              { step: "02", title: "Personal Roadmap", desc: "A tailored plan focused on high-impact learning areas." },
              { step: "03", title: "Active Learning", desc: "Weekly sessions focused on mastery, not memorization." },
              { step: "04", title: "Review & Refine", desc: "Ongoing data tracking to pivot and push for elite results." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-forest/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-4 text-forest/20">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-forest text-center mb-16">Real Results from Real Students</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Samir U.", role: "Pre-Calculus Student", quote: "Jude made me wrap my head around the math concepts I was struggling with and broke everything down step by step so it actually made sense!"}
            ].map((t, i) => (
              <div key={i} className="p-8 bg-sage/20 rounded-2xl relative border border-sage">
                <div className="flex gap-1 text-brass mb-4">{"★★★★★".split('').map((s,i)=> <span key={i}>{s}</span>)}</div>
                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-forest">{t.name}</div>
                  <div className="text-xs text-slate-500 uppercase font-semibold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-linen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-forest text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Where do sessions take place?", a: "We offer both in-home sessions (local availability) and high-fidelity online sessions via Zoom/Whiteboard." },
              { q: "How long is each session?", a: "Typically 60 or 90 minutes, depending on the subject complexity and student attention span." },
              { q: "Do you offer group rates?", a: "We specialize in 1-on-1 mentorship for maximum impact, but small group test prep is available upon request." },
              { q: "How do you track progress?", a: "Parents receive a detailed summary after every session, plus monthly diagnostic score tracking." }
            ].map((item, i) => (
              <details key={i} className="group bg-offwhite border rounded-xl overflow-hidden shadow-sm">
                <summary className="p-6 cursor-pointer font-bold text-forest flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-brass group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 border-t border-sage">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brass/10 to-transparent"></div>
             <h2 className="text-4xl font-bold mb-6 relative z-10 text-white">Start Your Student's Transformation Today</h2>
             <p className="text-xl text-sage mb-10 max-w-2xl mx-auto relative z-10 opacity-90">Book a complimentary consultation to see how we can help your student reach their peak potential.</p>
             <button 
              onClick={() => window.open("https://calendly.com/jude-lahagetutoring/10min", "_self")}
              className="bg-brass text-forest px-10 py-4 rounded-xl text-xl font-bold hover:bg-opacity-90 transition-all shadow-xl hover:-translate-y-1 relative z-10"
             >
               Book Consultation
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
