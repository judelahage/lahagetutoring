
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const serviceCategories = [
    {
      title: "Test Preparation",
      desc: "Our flagship programs designed to maximize scores on the most critical exams.",
      items: [
        { name: "Math SAT & ACT Prep", pricing: "Custom Packages", includes: ["Diagnostic Testing", "1-on-1 Strategy Sessions", "Full Length Practice Exams", "Weekly Progress Data"] },
        { name: "AP Exam Prep", pricing: "Custom Packages", includes: ["Subject Review", "Past Exam Simulation"] }
      ]
    },
    {
      title: "Academic Subject Tutoring",
      desc: "Bridging the gap in core subjects to build long-term confidence.",
      items: [
        { name: "Mathematics", pricing: "Custom Packages", includes: ["Algebra 1 & 2", "Geometry", "Pre-Calculus", "Calculus AB/BC"] },
        { name: "Science", pricing: "Custom Packages", includes: ["Chemistry", "Physics"] }
      ]
    }
  ];

  return (
    <div className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-forest mb-6">Our Tutoring Programs</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">We offer high-touch, personalized mentorship designed for impact. Every program starts with a detailed diagnostic.</p>
        </div>

        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-3xl font-bold text-forest mb-4 border-b-2 border-brass/30 inline-block pb-1">{cat.title}</h2>
            <p className="text-slate-600 mb-10 mt-4 max-w-2xl">{cat.desc}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <div key={i} className="bg-offwhite p-8 rounded-2xl shadow-sm border border-sage flex flex-col h-full hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-forest mb-2">{item.name}</h3>
                  <div className="text-brass font-semibold mb-6 text-sm">{item.pricing}</div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {item.includes.map((inc, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-brass">✓</span> {inc}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full py-3 border-2 border-forest text-forest font-bold rounded-xl hover:bg-forest hover:text-white transition-all"
                  >
                    Inquire Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
