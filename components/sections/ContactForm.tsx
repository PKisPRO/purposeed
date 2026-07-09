"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/supabase";

const GRADE_OPTIONS = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Other"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  grade: string;
  school: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  grade: "",
  school: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-indigo/15 bg-cream/40 px-4 py-3 text-sm font-body focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all duration-200";
const labelClasses = "font-heading text-sm font-medium text-indigo-dark";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const { error } = await submitLead({
      source: "contact_form",
      name: form.name,
      email: form.email,
      phone: form.phone,
      grade: form.grade,
      school: form.school,
      message: form.message,
    });
    setIsSubmitting(false);
    if (error) {
      setError("Something went wrong sending your message. Please try again or reach us on WhatsApp.");
      return;
    }
    setIsSubmitted(true);
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm shadow-indigo/5">
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
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Full name"
                />
              </div>
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
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className={labelClasses}>
                  Phone
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
              <div className="space-y-2">
                <label htmlFor="grade" className={labelClasses}>
                  Student Grade
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
            </div>

            <div className="space-y-2">
              <label htmlFor="school" className={labelClasses}>
                School
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

            <div className="space-y-2">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tell us a bit about what you're looking for..."
              />
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
  );
}
