"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SITE_CONFIG } from "@/lib/site.config";

const demoMessage = encodeURIComponent(
  "Hi! I'd like to book a FREE demo class at Nirvana Home Tuition Centre. Please let me know the available slots. Thank you!"
);

const testimonials = [
  {
    quote:
      "My daughter used to struggle with Mathematics in Class 9, but after joining Nirvana Home Tuition, her confidence has improved tremendously. She now looks forward to her sessions!",
    name: "Rajesh Sharma",
    role: "Parent of Class 9 Student",
    initials: "RS",
    color: "bg-accent",
  },
  {
    quote:
      "The tutor explains every concept very patiently and makes sure I understand before moving on. My Science marks jumped from 65 to 88 in just one term. Highly recommended!",
    name: "Anjali Kumar",
    role: "Class 10 Student, CBSE",
    initials: "AK",
    color: "bg-sage",
  },
  {
    quote:
      "Very professional and punctual. The online sessions work just as well as in-person — my son in Patna is taking classes and the quality is excellent. Worth every rupee.",
    name: "Priya Mehta",
    role: "Parent of Class 8 Student (Online)",
    initials: "PM",
    color: "bg-primary",
  },
  {
    quote:
      "My son was preparing for Board exams and was very stressed. The tutors at Nirvana were patient and helped him understand each chapter thoroughly. He scored 91% in Class 10 boards!",
    name: "Suresh Tiwari",
    role: "Parent of Class 10 Student",
    initials: "ST",
    color: "bg-teal-600",
  },
  {
    quote:
      "I registered as a tutor with Nirvana and within a week I had 3 students. They handled everything — finding families and setting schedules. I just had to focus on teaching.",
    name: "Kavita Singh",
    role: "Home Tutor, Motihari",
    initials: "KS",
    color: "bg-purple-600",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-accent" : "text-charcoal/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 3500);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const go = useCallback(
    (index: number) => {
      setCurrent((index + testimonials.length) % testimonials.length);
      resetTimer();
    },
    [resetTimer]
  );

  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Parents &amp; Students Say
          </h2>
          <p className="text-charcoal/70 max-w-lg mx-auto text-base">
            Real results from real families in Motihari and beyond.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          onMouseLeave={resetTimer}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 48) go(current + (diff > 0 ? 1 : -1));
          }}
        >
          {/* Track — overflow hidden clips sliding cards */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1 sm:px-4">
                  <div className="bg-white rounded-2xl border border-charcoal/8 p-6 sm:p-8 shadow-sm min-h-[220px] flex flex-col">
                    <StarRating count={5} />
                    <blockquote className="text-charcoal/80 text-sm sm:text-base leading-relaxed mt-4 flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-charcoal/8">
                      <div
                        className={`w-11 h-11 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}
                        aria-hidden="true"
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-charcoal">{t.name}</div>
                        <div className="text-charcoal/55 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => go(current - 1)}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-charcoal/15 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => go(current + 1)}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-charcoal/15 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-charcoal/25 hover:bg-charcoal/45"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-charcoal/60 text-sm mb-4">
            Join our growing family of students across Motihari and Bihar.
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${demoMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Book Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
