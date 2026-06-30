"use client";

import { useState, FormEvent } from "react";
import { SITE_CONFIG } from "@/lib/site.config";

type FormState = {
  name: string;
  phone: string;
  grade: string;
  subject: string;
  mode: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  grade: "",
  subject: "",
  mode: "",
};

const grades = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8",
  "Class 9", "Class 10",
  "Class 11", "Class 12",
];

const popularSubjects = [
  "Mathematics", "Science", "English", "Hindi", "Social Studies",
  "Physics", "Chemistry", "Biology", "Accountancy", "Economics",
  "Computer Science", "Sanskrit", "Other",
];

export default function DemoForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp / phone number.";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!form.grade) newErrors.grade = "Please select a class.";
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!form.mode) newErrors.mode = "Please select a preferred mode.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const message =
      `Hello! I'd like to book a FREE demo class at Nirvana Home Tuition Centre.\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📚 Class: ${form.grade}\n` +
      `📖 Subject(s): ${form.subject}\n` +
      `🖥️ Preferred Mode: ${form.mode}\n\n` +
      `Please let me know the available demo class slots. Thank you!`;

    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="demo" className="bg-primary py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Free Demo Class
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your Free Demo Today
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Fill in your details and we&apos;ll reach out on WhatsApp to schedule
            your free demo class — no commitment required.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-sage/15 text-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                WhatsApp opened!
              </h3>
              <p className="text-charcoal/70 text-sm mb-6">
                Your details have been pre-filled in WhatsApp. Just hit send and
                we&apos;ll reply within a few hours to schedule your free demo class.
              </p>
              <button
                onClick={() => { setForm(initialState); setSubmitted(false); }}
                className="text-primary underline text-sm hover:text-accent transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <Field
                label="Full Name"
                required
                error={errors.name}
              >
                <input
                  type="text"
                  name="name"
                  id="demo-name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  autoComplete="name"
                  className={inputClass(!!errors.name)}
                />
              </Field>

              {/* Phone */}
              <Field
                label="WhatsApp / Phone Number"
                required
                error={errors.phone}
                hint="We'll contact you on this number"
              >
                <input
                  type="tel"
                  name="phone"
                  id="demo-phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              {/* Grade */}
              <Field label="Class / Grade" required error={errors.grade}>
                <select
                  name="grade"
                  id="demo-grade"
                  value={form.grade}
                  onChange={handleChange}
                  className={inputClass(!!errors.grade)}
                >
                  <option value="">Select class…</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>

              {/* Subject */}
              <Field label="Subject(s)" required error={errors.subject}>
                <input
                  type="text"
                  name="subject"
                  id="demo-subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Mathematics, Science"
                  list="subject-suggestions"
                  className={inputClass(!!errors.subject)}
                />
                <datalist id="subject-suggestions">
                  {popularSubjects.map((s) => (
                    <option key={s} value={s} />
                  ))}
                </datalist>
              </Field>

              {/* Mode */}
              <Field label="Preferred Mode" required error={errors.mode}>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  {[
                    { value: "Online", label: "Online", icon: "🖥️" },
                    { value: "In-Person (Motihari)", label: "In-Person (Motihari)", icon: "🏠" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors text-sm font-medium ${
                        form.mode === opt.value
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-charcoal/20 text-charcoal/70 hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value={opt.value}
                        checked={form.mode === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span aria-hidden="true">{opt.icon}</span>
                      {opt.label}
                    </label>
                  ))}
                </div>
              </Field>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base shadow-md mt-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book Free Demo via WhatsApp
              </button>

              <p className="text-charcoal/50 text-xs text-center">
                By submitting, you agree to be contacted via WhatsApp regarding
                your enquiry. No spam — ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-charcoal mb-1">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-charcoal/50 text-xs mt-1">{hint}</p>
      )}
      {error && (
        <p className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean): string {
  return `w-full border-2 rounded-xl px-4 py-2.5 text-charcoal text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/20 focus:border-primary ${
    hasError
      ? "border-red-400 bg-red-50"
      : "border-charcoal/20 bg-white hover:border-primary/40"
  }`;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
