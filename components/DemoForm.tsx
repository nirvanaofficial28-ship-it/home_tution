"use client";

import { useState, FormEvent } from "react";
import { SITE_CONFIG } from "@/lib/site.config";

// ── Student form ─────────────────────────────────────────────

type StudentForm = {
  name: string;
  phone: string;
  grade: string;
  subject: string;
  mode: string;
  area: string;
};

const emptyStudent: StudentForm = { name: "", phone: "", grade: "", subject: "", mode: "", area: "" };

const grades = [
  "Class 1","Class 2","Class 3","Class 4","Class 5",
  "Class 6","Class 7","Class 8",
  "Class 9","Class 10",
  "Class 11","Class 12",
];

// ── Tutor form ───────────────────────────────────────────────

type TutorForm = {
  name: string;
  phone: string;
  qualification: string;
  subjects: string;
  classRange: string;
  area: string;
  mode: string;
  experience: string;
};

const emptyTutor: TutorForm = {
  name: "", phone: "", qualification: "", subjects: "",
  classRange: "", area: "", mode: "", experience: "",
};

const classRanges = [
  "Primary (Class 1–5)",
  "Middle School (Class 6–8)",
  "Secondary (Class 9–10)",
  "Senior Secondary (Class 11–12)",
  "All classes",
];

const experienceOptions = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "More than 5 years",
];

// ── Shared helpers ───────────────────────────────────────────

function inputClass(hasError: boolean) {
  return `w-full border-2 rounded-xl px-4 py-2.5 text-charcoal text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/20 focus:border-primary ${
    hasError ? "border-red-400 bg-red-50" : "border-charcoal/20 bg-white hover:border-primary/40"
  }`;
}

function Field({
  label, required, error, hint, children,
}: {
  label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-charcoal mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-charcoal/50 text-xs mt-1">{hint}</p>}
      {error && <p className="text-red-500 text-xs mt-1" role="alert">{error}</p>}
    </div>
  );
}

function SuccessState({ label, onReset }: { label: string; onReset: () => void }) {
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-sage/15 text-sage rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">WhatsApp opened!</h3>
      <p className="text-charcoal/70 text-sm mb-6 max-w-xs mx-auto">
        Your {label} details have been pre-filled. Just hit send and we&apos;ll get back to you shortly.
      </p>
      <button onClick={onReset} className="text-primary underline text-sm hover:text-accent transition-colors">
        Submit another enquiry
      </button>
    </div>
  );
}

// ── Student form component ───────────────────────────────────

function StudentEnquiryForm() {
  const [form, setForm] = useState<StudentForm>(emptyStudent);
  const [errors, setErrors] = useState<Partial<StudentForm>>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Partial<StudentForm> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your WhatsApp number.";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit number.";
    if (!form.grade) e.grade = "Please select a class.";
    if (!form.subject.trim()) e.subject = "Please enter a subject.";
    if (!form.mode) e.mode = "Please select a mode.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof StudentForm]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg =
      `📚 *STUDENT TUITION ENQUIRY*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `🎓 Class: ${form.grade}\n` +
      `📖 Subject(s): ${form.subject}\n` +
      `🖥️ Mode: ${form.mode}\n` +
      (form.area ? `📍 Area/Location: ${form.area}\n` : "") +
      `\nPlease help me find a suitable tutor. Thank you!`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setDone(true);
  };

  if (done) return <SuccessState label="student" onReset={() => { setForm(emptyStudent); setDone(false); }} />;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" required error={errors.name}>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name" autoComplete="name" className={inputClass(!!errors.name)} />
        </Field>
        <Field label="WhatsApp Number" required error={errors.phone}>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number" inputMode="numeric" maxLength={10}
            className={inputClass(!!errors.phone)} />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Class / Grade" required error={errors.grade}>
          <select name="grade" value={form.grade} onChange={handleChange} className={inputClass(!!errors.grade)}>
            <option value="">Select class…</option>
            {grades.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </Field>
        <Field label="Subject(s) Needed" required error={errors.subject}>
          <input type="text" name="subject" value={form.subject} onChange={handleChange}
            placeholder="e.g. Maths, Science" className={inputClass(!!errors.subject)} />
        </Field>
      </div>
      <Field label="Preferred Mode" required error={errors.mode}>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {[
            { value: "Online", label: "Online", icon: "🖥️" },
            { value: "In-Person (Motihari)", label: "In-Person", icon: "🏠" },
          ].map((opt) => (
            <label key={opt.value} className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors text-sm font-medium ${
              form.mode === opt.value ? "border-primary bg-primary/5 text-primary" : "border-charcoal/20 text-charcoal/70 hover:border-primary/40"
            }`}>
              <input type="radio" name="mode" value={opt.value} checked={form.mode === opt.value}
                onChange={handleChange} className="sr-only" />
              <span aria-hidden="true">{opt.icon}</span>{opt.label}
            </label>
          ))}
        </div>
      </Field>
      {form.mode === "In-Person (Motihari)" && (
        <Field label="Your Area / Locality" hint="Helps us find a tutor near you">
          <input type="text" name="area" value={form.area} onChange={handleChange}
            placeholder="e.g. Chatauni, Motihari" className={inputClass(false)} />
        </Field>
      )}
      <button type="submit" className="w-full flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition-colors text-base shadow-md">
        <WhatsAppIcon className="w-5 h-5" />
        Send Enquiry via WhatsApp
      </button>
    </form>
  );
}

// ── Tutor registration form ──────────────────────────────────

function TutorRegistrationForm() {
  const [form, setForm] = useState<TutorForm>(emptyTutor);
  const [errors, setErrors] = useState<Partial<TutorForm>>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Partial<TutorForm> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your WhatsApp number.";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit number.";
    if (!form.subjects.trim()) e.subjects = "Please enter the subjects you teach.";
    if (!form.classRange) e.classRange = "Please select a class range.";
    if (!form.area.trim()) e.area = "Please enter your area/locality.";
    if (!form.mode) e.mode = "Please select a teaching mode.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof TutorForm]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg =
      `🎓 *TUTOR REGISTRATION ENQUIRY*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      (form.qualification ? `🏅 Qualification: ${form.qualification}\n` : "") +
      `📖 Subjects: ${form.subjects}\n` +
      `🎯 Classes: ${form.classRange}\n` +
      `📍 Area/Locality: ${form.area}\n` +
      `🖥️ Teaching Mode: ${form.mode}\n` +
      (form.experience ? `⏳ Experience: ${form.experience}\n` : "") +
      `\nI'd like to register as a tutor with Nirvana Home Tuition Centre. Please contact me. Thank you!`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setDone(true);
  };

  if (done) return <SuccessState label="tutor registration" onReset={() => { setForm(emptyTutor); setDone(false); }} />;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" required error={errors.name}>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Your full name" autoComplete="name" className={inputClass(!!errors.name)} />
        </Field>
        <Field label="WhatsApp Number" required error={errors.phone}>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number" inputMode="numeric" maxLength={10}
            className={inputClass(!!errors.phone)} />
        </Field>
      </div>
      <Field label="Qualification" hint="e.g. B.Sc. Mathematics, B.Ed., M.A. English">
        <input type="text" name="qualification" value={form.qualification} onChange={handleChange}
          placeholder="Highest qualification" className={inputClass(false)} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Subjects You Teach" required error={errors.subjects}>
          <input type="text" name="subjects" value={form.subjects} onChange={handleChange}
            placeholder="e.g. Maths, Physics, English" className={inputClass(!!errors.subjects)} />
        </Field>
        <Field label="Class Range" required error={errors.classRange}>
          <select name="classRange" value={form.classRange} onChange={handleChange} className={inputClass(!!errors.classRange)}>
            <option value="">Select range…</option>
            {classRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Your Area / Locality" required error={errors.area} hint="Where can you travel for in-person classes?">
        <input type="text" name="area" value={form.area} onChange={handleChange}
          placeholder="e.g. Chatauni, Motihari" className={inputClass(!!errors.area)} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Teaching Mode" required error={errors.mode}>
          <div className="grid grid-cols-1 gap-2 mt-1">
            {["Online Only", "In-Person Only", "Both Online & In-Person"].map((opt) => (
              <label key={opt} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 cursor-pointer transition-colors text-sm font-medium ${
                form.mode === opt ? "border-primary bg-primary/5 text-primary" : "border-charcoal/20 text-charcoal/70 hover:border-primary/40"
              }`}>
                <input type="radio" name="mode" value={opt} checked={form.mode === opt}
                  onChange={handleChange} className="sr-only" />
                {opt}
              </label>
            ))}
          </div>
        </Field>
        <Field label="Teaching Experience">
          <select name="experience" value={form.experience} onChange={handleChange} className={inputClass(false)}>
            <option value="">Select…</option>
            {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors text-base shadow-md">
        <WhatsAppIcon className="w-5 h-5" />
        Register as Tutor via WhatsApp
      </button>
    </form>
  );
}

// ── Main export ──────────────────────────────────────────────

type Tab = "student" | "tutor";

export default function EnquirySection() {
  const [activeTab, setActiveTab] = useState<Tab>("student");

  return (
    <section id="enquire" className="bg-primary py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Enquire Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-white/70 text-base">
            Student or tutor — fill in your details and we&apos;ll connect you via WhatsApp.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-white/10 rounded-2xl p-1 mb-6">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "student"
                ? "bg-accent text-white shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            <StudentTabIcon className="w-4 h-4" />
            I Need a Tutor
          </button>
          <button
            onClick={() => setActiveTab("tutor")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "tutor"
                ? "bg-white text-primary shadow-md"
                : "text-white/70 hover:text-white"
            }`}
          >
            <TutorTabIcon className="w-4 h-4" />
            I Want to Tutor
          </button>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
          {activeTab === "student" ? (
            <>
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-charcoal/10">
                <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <StudentTabIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-bold text-primary text-sm">Student / Parent Enquiry</p>
                  <p className="text-charcoal/55 text-xs">Find the right tutor for your child</p>
                </div>
              </div>
              <StudentEnquiryForm />
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-charcoal/10">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <TutorTabIcon className="w-4 h-4" />
                </span>
                <div>
                  <p className="font-bold text-primary text-sm">Tutor Registration</p>
                  <p className="text-charcoal/55 text-xs">Join our network and find students</p>
                </div>
              </div>
              <TutorRegistrationForm />
            </>
          )}
          <p className="text-charcoal/45 text-xs text-center mt-4">
            We&apos;ll respond on WhatsApp within a few hours. No spam — ever.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function StudentTabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}
function TutorTabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
