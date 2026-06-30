const onlineFeatures = [
  "Live one-on-one video sessions (Google Meet / Zoom)",
  "Digital whiteboard & screen sharing",
  "Recorded sessions available for revision",
  "Flexible scheduling — morning, evening, weekends",
  "Study materials shared via WhatsApp / email",
  "Available anywhere in India",
];

const inPersonFeatures = [
  "Tutor visits your home at a time convenient to you",
  "Hands-on, face-to-face learning environment",
  "Immediate doubt resolution during sessions",
  "Physical study materials & printed worksheets",
  "Covering Chatauni and surrounding Motihari localities",
  "Ideal for students who need focused, distraction-free study",
];

export default function TeachingMode() {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            How We Teach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Two Flexible Learning Modes
          </h2>
          <p className="text-charcoal/70 max-w-xl mx-auto text-base sm:text-lg">
            Choose the mode that suits you — or combine both for maximum
            flexibility.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Online */}
          <div className="bg-white rounded-2xl border-2 border-primary/15 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <MonitorIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Online Classes</h3>
                <p className="text-charcoal/60 text-sm">Learn from anywhere in India</p>
              </div>
            </div>

            <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed mb-5">
              Join live, interactive one-on-one sessions from the comfort of your
              home. Online classes are just as effective as in-person — with the
              added benefit of flexibility and zero commute time.
            </p>

            <ul className="space-y-3">
              {onlineFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-sage flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-primary/10">
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-sage" />
                Available pan-India
              </span>
            </div>
          </div>

          {/* In-Person */}
          <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0">
                <HomeIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">In-Person Classes</h3>
                <p className="text-white/60 text-sm">Home visits in Motihari</p>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5">
              Our tutor comes to your home in Motihari for a truly personal
              learning experience. In-person sessions are ideal for younger
              students and those who benefit from direct, face-to-face
              instruction.
            </p>

            <ul className="space-y-3">
              {inPersonFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckIcon className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/15">
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                <PinIcon className="w-4 h-4" />
                Chatauni &amp; surrounding Motihari areas
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 shadow-md"
          >
            Book Your Free Demo — Choose Your Mode
          </a>
        </div>
      </div>
    </section>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
