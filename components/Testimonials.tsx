import { SITE_CONFIG } from "@/lib/site.config";
import ScrollReveal from "@/components/ScrollReveal";

const demoMessage = encodeURIComponent(
  "Hi! I'd like to book a FREE demo class at Nirvana Home Tuition Centre. Please let me know the available slots. Thank you!"
);

const testimonials = [
  {
    quote:
      "My daughter used to struggle with Mathematics in Class 9, but after joining Nirvana Home Tuition, her confidence has improved tremendously. She now looks forward to her sessions!",
    name: "Rajesh Sharma",        // PLACEHOLDER — replace with actual name
    role: "Parent of Class 9 Student",
    initials: "RS",               // PLACEHOLDER — replace with actual initials
    color: "bg-accent",
  },
  {
    quote:
      "The tutor explains every concept very patiently and makes sure I understand before moving on. My Science marks jumped from 65 to 88 in just one term. Highly recommended!",
    name: "Anjali Kumar",       // PLACEHOLDER — replace with actual name
    role: "Class 10 Student, CBSE",
    initials: "AK",               // PLACEHOLDER — replace with actual initials
    color: "bg-sage",
  },
  {
    quote:
      "Very professional and punctual. The online sessions work just as well as in-person — my son in Patna is taking classes and the quality is excellent. Worth every rupee.",
    name: "Priya Mehta",        // PLACEHOLDER — replace with actual name
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
        <ScrollReveal className="text-center mb-12">
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
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal stagger className="grid sm:grid-cols-3 gap-6">
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
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center mt-10">
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
        </ScrollReveal>
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
