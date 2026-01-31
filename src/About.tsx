
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl font-bold text-forest mb-8">The Story Behind Lahage Tutoring</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded on the belief that every student has an "academic gear" they haven't found yet, Lahage Tutoring was created to provide more than just homework help. 
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We focus on the intersection of subject mastery and executive function. It's not enough to know the formula; you have to know how to manage the pressure of the test and the organization of your week.
            </p>
            <div className="p-6 bg-sage border-l-4 border-brass rounded-r-xl italic text-slate-700">
              "Our goal is to be the last tutor you'll ever need. We build the skills that make us obsolete."
            </div>
          </div>
          <div className="relative">
            <img src="https://image2url.com/r2/default/images/1769735432508-a0b5a49e-53b9-4203-ba19-5e07384a78bc.png" alt="Tutoring in Action" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-8 -left-8 bg-forest text-white p-8 rounded-2xl shadow-xl hidden md:block border-b-4 border-brass">
              <div className="text-4xl font-bold mb-1 text-white">3+</div>
              <div className="text-sm uppercase tracking-widest opacity-80 text-white">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Empowerment", desc: "We give students the tools to solve problems on their own.", icon: "🌱" },
            { title: "Personalization", desc: "No two sessions are the same. We pivot based on real-time needs.", icon: "🎯" },
            { title: "Accountability", desc: "High expectations coupled with high support leads to elite growth.", icon: "📈" }
          ].map((v, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brass/20 transition-colors">
                <span className="text-2xl">{v.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-forest mb-4">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
