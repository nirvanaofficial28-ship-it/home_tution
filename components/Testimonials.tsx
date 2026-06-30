// PLACEHOLDER — Replace placeholder testimonials with actual student/parent reviews.
// Each testimonial should include: quote, reviewer name, relation (Parent/Student), class/grade.

const testimonials = [
  {
    quote:
      "My daughter used to struggle with Mathematics in Class 9, but after joining Nirvana Home Tuition, her confidence has improved tremendously. She now looks forward to her sessions!",
    name: "[Parent Name]",        // PLACEHOLDER — replace with actual name
    role: "Parent of Class 9 Student",
    initials: "RS",               // PLACEHOLDER — replace with actual initials
    color: "bg-accent",
  },
  {
    quote:
      "The tutor explains every concept very patiently and makes sure I understand before moving on. My Science marks jumped from 65 to 88 in just one term. Highly recommended!",
    name: "[Student Name]",       // PLACEHOLDER — replace with actual name
    role: "Class 10 Student, CBSE",
    initials: "AK",               // PLACEHOLDER — replace with actual initials
    color: "bg-sage",
  },
  {
    quote:
      "Very professional and punctual. The online sessions work just as well as in-person — my son in Patna is taking classes and the quality is excellent. Worth every rupee.",
    name: "[Parent Name]",        // PLACEHOLDER — replace with actual name
    role: "Parent of Class 8 Student (Online)",
    initials: "PM",               // PLACEHOLDER — replace with actual initials
    color: "bg-primary",
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
            {/* PLACEHOLDER — update once you have real reviews */}
            Real results from real families in Motihari and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-charcoal/8 p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <StarRating count={5} />

              {/* Quote */}
              <blockquote className="text-charcoal/80 text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-charcoal/8">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </div>
                  <div className="text-charcoal/55 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-charcoal/60 text-sm mb-4">
            Join our growing family of students across Motihari and Bihar.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
          >
            Book Your Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
