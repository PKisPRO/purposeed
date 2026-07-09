"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { submitLead } from "@/lib/supabase";

const GRADE_OPTIONS = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Other"];
const HEARD_ABOUT_OPTIONS = ["Instagram", "Google Search", "Friend or Family", "School", "Other"];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  grade: string;
  school: string;
  country: string;
  city: string;
  heardAbout: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  grade: "",
  school: "",
  country: "",
  city: "",
  heardAbout: "",
};

const inputClasses =
  "w-full rounded-xl border border-indigo/15 bg-cream/40 px-4 py-3 text-sm font-body focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all duration-200";
const labelClasses = "font-heading text-sm font-medium text-indigo-dark";

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const { error } = await submitLead({
      source: "consultation_form",
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      grade: form.grade,
      school: form.school,
      country: form.country,
      city: form.city,
      heard_about: form.heardAbout,
    });
    setIsSubmitting(false);
    if (error) {
      setError("Something went wrong submitting this. Please try again or reach us on WhatsApp.");
      return;
    }
    setIsSubmitted(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <SectionHeading
        title="Your Journey to Global University Admissions Starts Here."
        subtitle="Schedule a meeting with a purposeed admissions mentor."
        tone="light"
        align="center"
        className="mb-10"
      />

      <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm shadow-indigo/5">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <CheckCircle2 className="h-14 w-14 text-coral" />
              <p className="font-heading text-lg font-semibold text-indigo-dark">
                Thanks, we&apos;ll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className={labelClasses}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className={labelClasses}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="grade" className={labelClasses}>
                    Grade
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Select grade
                    </option>
                    {GRADE_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="school" className={labelClasses}>
                    Name of School
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    required
                    value={form.school}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="School name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="country" className={labelClasses}>
                    Country of Residence
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={form.country}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Country"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className={labelClasses}>
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="heardAbout" className={labelClasses}>
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  required
                  value={form.heardAbout}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {HEARD_ABOUT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-xl bg-coral/10 px-4 py-3 text-sm text-coral">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-coral text-cream font-heading font-semibold px-8 py-3.5 shadow-lg shadow-coral/30 hover:scale-[1.03] active:scale-[0.97] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-indigo-dark/60">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        <p>
          A mentor from purposeed will get in touch to understand the student&apos;s goals and
          recommend the right pathway.
        </p>
      </div>
    </div>
  );
}
