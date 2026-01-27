import React, { useState } from "react";

const FORM_NAME = "contact";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Guarantee Netlify form identification
    formData.set("form-name", FORM_NAME);

    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          `Form POST failed: ${res.status} ${res.statusText}${text ? ` — ${text}` : ""}`
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      setError(err?.message ?? "Unknown error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold text-forest mb-8">
              Let's Build a Winning Academic Strategy.
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              Complete the form below and we'll reach out within 24 hours to schedule your free
              diagnostic consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-offwhite rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-brass">📧</span>
                </div>
                <div>
                  <h4 className="font-bold text-forest">Email Us</h4>
                  <p className="text-slate-600">
                    <a
                      href="mailto:jude@lahagetutoring.com"
                      className="hover:text-brass transition-colors font-medium"
                    >
                      jude@lahagetutoring.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-offwhite rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-brass">📅</span>
                </div>
                <div>
                  <h4 className="font-bold text-forest">What to Expect</h4>
                  <p className="text-slate-600">
                    A 20-minute strategy call to discuss your student's goals and review their
                    academic history.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-offwhite p-10 rounded-3xl shadow-xl border border-sage">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold text-forest mb-4">Message Received!</h2>
                <p className="text-slate-600">
                  We've received your request and will be in touch shortly to schedule your
                  consultation.
                </p>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />

                <p hidden>
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Parent Name *
                    </label>
                    <input
                      name="parentName"
                      type="text"
                      required
                      className="w-full p-3 border border-sage rounded-xl bg-sage/10 focus:ring-2 focus:ring-forest outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Student Grade Level *
                    </label>
                    <select
                      name="gradeLevel"
                      required
                      className="w-full p-3 border border-sage rounded-xl bg-sage/10 focus:ring-2 focus:ring-forest outline-none transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select grade level
                      </option>
                      <option>Middle School</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 border border-sage rounded-xl bg-sage/10 focus:ring-2 focus:ring-forest outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Primary Subject of Interest *
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full p-3 border border-sage rounded-xl bg-sage/10 focus:ring-2 focus:ring-forest outline-none transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>SAT / ACT Prep</option>
                    <option>Math Tutoring</option>
                    <option>Science Tutoring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Tell us about your student's challenges
                  </label>
                  <textarea
                    name="challenges"
                    rows={4}
                    className="w-full p-3 border border-sage rounded-xl bg-sage/10 focus:ring-2 focus:ring-forest outline-none transition-all"
                  />
                </div>

                {error && <p className="text-sm font-medium text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-forest text-white font-bold rounded-xl shadow-lg hover-bg-forest-dark transition-all active:scale-95 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>

                <p className="text-xs text-center text-slate-400">
                  By submitting this form, you agree to our privacy policy. We never spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
