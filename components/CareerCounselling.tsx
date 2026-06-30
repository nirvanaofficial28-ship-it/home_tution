"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

const courses = [
  {
    name: "B.Ed / D.El.Ed",
    detail: "Bachelor of Education & Diploma in Elementary Education",
    note: "Admissions from Uttar Pradesh",
    Icon: BookOpenIcon,
    color: "bg-amber-50 border-accent",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    name: "GNM Course",
    detail: "General Nursing and Midwifery",
    note: "3-year nursing diploma programme",
    Icon: HeartPulseIcon,
    color: "bg-rose-50 border-rose-300",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    name: "B.Tech Course",
    detail: "Bachelor of Technology",
    note: "Engineering degrees across streams",
    Icon: CogIcon,
    color: "bg-blue-50 border-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    name: "Other 10+2 Courses",
    detail: "Various undergraduate programmes",
    note: "Science, Commerce, Arts & more",
    Icon: AcademicCapIcon,
    color: "bg-sage/10 border-sage",
    iconBg: "bg-sage/15",
    iconColor: "text-sage",
  },
];

const counsellorPhone = "8340122058";
const counsellorWa = "918340122058";

const courseOptions = [
  "B.Ed / D.El.Ed (from Uttar Pradesh)",
  "GNM Course",
  "B.Tech Course",
  "Other 10+2 Course",
  "Not sure — need guidance",
];

type FormState = {
  name: string;
  phone: string;
  course: string;
  message: string;
};

const emptyForm: FormState = { name: "", phone: "", course: "", message: "" };

// ── Modal component ──────────────────────────────────────────

function CareerEnquiryModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [done, setDone] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & ESC close
  useEffect(() => {
    firstInputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your WhatsApp number.";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit number.";
    if (!form.course) e.course = "Please select a course.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg =
      `🎓 *CAREER COUNSELLING ENQUIRY*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📱 Phone: ${form.phone}\n` +
      `📚 Course Interested In: ${form.course}\n` +
      (form.message.trim() ? `💬 Query: ${form.message}\n` : "") +
      `\nPlease guide me with admission details. Thank you!`;

    window.open(
      `https://wa.me/${counsellorWa}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setDone(true);
  };

  const inputCls = (hasErr: boolean) =>
    `w-full border-2 rounded-xl px-4 py-2.5 text-charcoal text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/20 focus:border-primary ${
      hasErr ? "border-red-400 bg-red-50" : "border-charcoal/20 bg-white hover:border-primary/40"
    }`;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Career counselling enquiry form"
    >
      {/* Dimmed overlay */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary rounded-t-2xl px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              MK
            </div>
            <div>
              <p className="text-white font-bold text-base leading-tight">Manish Kumar</p>
              <p className="text-accent text-xs font-medium">Career Counsellor — Admissions Specialist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1 -mt-0.5 -mr-1 rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {done ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-sage/15 text-sage rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">WhatsApp opened!</h3>
              <p className="text-charcoal/65 text-sm mb-5">
                Your enquiry is pre-filled. Hit send and Manish Kumar will respond with admission guidance shortly.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => { setForm(emptyForm); setDone(false); }}
                  className="text-sm text-primary underline hover:text-accent transition-colors"
                >
                  Submit another
                </button>
                <span className="text-charcoal/30">·</span>
                <button onClick={onClose} className="text-sm text-charcoal/60 hover:text-charcoal transition-colors">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-charcoal/65 text-sm mb-5">
                Fill in your details and we&apos;ll send your query directly to Manish Kumar on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name" autoComplete="name"
                    className={inputCls(!!errors.name)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile number" inputMode="numeric" maxLength={10}
                    className={inputCls(!!errors.phone)}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1">
                    Course Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course" value={form.course} onChange={handleChange}
                    className={inputCls(!!errors.course)}
                  >
                    <option value="">Select a course…</option>
                    {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1" role="alert">{errors.course}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-1">
                    Your Query <span className="text-charcoal/40 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="e.g. What documents are required? What is the fee structure?"
                    rows={3}
                    className="w-full border-2 rounded-xl px-4 py-2.5 text-charcoal text-sm outline-none transition-colors focus:ring-2 focus:ring-primary/20 focus:border-primary border-charcoal/20 bg-white hover:border-primary/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Send Enquiry to Manish Kumar
                </button>

                <p className="text-charcoal/40 text-xs text-center">
                  Your details will be sent via WhatsApp. No spam — ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────

export default function CareerCounselling() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-lightblue py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
              Career Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Career After 10+2
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto text-base sm:text-lg">
              Planning your next step after Class 12? Get expert admission
              guidance for the most sought-after courses.
            </p>
          </div>

          {/* Course cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {courses.map((course) => (
              <div
                key={course.name}
                className={`bg-white rounded-2xl border-2 ${course.color} p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col`}
              >
                <div className={`w-11 h-11 rounded-xl ${course.iconBg} ${course.iconColor} flex items-center justify-center mb-4 flex-shrink-0`}>
                  <course.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-base leading-tight mb-1">{course.name}</h3>
                <p className="text-charcoal/70 text-xs leading-relaxed mb-2 flex-1">{course.detail}</p>
                <span className="inline-block text-xs font-medium text-sage bg-sage/10 px-2 py-0.5 rounded-full mt-auto self-start">
                  {course.note}
                </span>
              </div>
            ))}
          </div>

          {/* Counsellor card */}
          <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-md">
                MK
              </div>

              {/* Details */}
              <div className="text-center sm:text-left flex-1">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">
                  Our Career Counsellor
                </p>
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-0.5">Manish Kumar</h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  Career Counsellor — Admissions Specialist
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Call button */}
                  <a
                    href={`tel:+91${counsellorPhone}`}
                    className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm border border-white/20"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    Call: {counsellorPhone}
                  </a>

                  {/* Contact Us → opens modal */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm shadow-md"
                  >
                    <MailIcon className="w-4 h-4" />
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-xs text-center sm:text-left mt-5 pt-4 border-t border-white/10">
              For admission enquiries — B.Ed / D.El.Ed (UP) · GNM · B.Tech · and other 10+2 programmes
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <CareerEnquiryModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

// ── Icons ─────────────────────────────────────────────────────

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function AcademicCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
