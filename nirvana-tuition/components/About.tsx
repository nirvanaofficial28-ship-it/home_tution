export default function About() {
  return (
    <section id="about" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Meet Your Tutor
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Profile Photo ── */}
          <div className="flex justify-center md:justify-end">
            {/*
              PLACEHOLDER — Replace the div below with an <img> or next/image
              pointing to the tutor's actual photo.
              Recommended size: 400×400px, square crop works best inside the circle.
            */}
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-lightblue border-4 border-accent overflow-hidden flex items-center justify-center shadow-xl">
                {/* Placeholder person silhouette */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-primary/20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="100" cy="72" r="40" />
                  <path d="M30 180 C30 140 60 120 100 120 C140 120 170 140 170 180 Z" />
                </svg>
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-3 bg-accent text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg text-center leading-tight">
                {/* PLACEHOLDER — update years of experience */}
                <span className="font-bold text-lg leading-none">5+</span>
                <span className="text-xs leading-none mt-0.5">Years</span>
              </div>
            </div>
          </div>

          {/* ── Bio content ── */}
          <div>
            {/*
              PLACEHOLDER SECTION — Replace the content below with the tutor's
              actual name, qualifications, experience, and teaching philosophy.
            */}
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
              {/* PLACEHOLDER — Tutor's Full Name */}
              Shyam Kumar
            </h3>
            <p className="text-sage font-semibold text-base mb-4">
              {/* PLACEHOLDER — e.g., "B.Sc. (Hons.) Mathematics, Patna University" */}
              [Qualification · University · Year]
            </p>

            <p className="text-charcoal/80 text-base leading-relaxed mb-4">
              {/*
                PLACEHOLDER — 2-3 sentences about the tutor's background.
                Example: "With over 5 years of experience teaching Mathematics
                and Science to students across Classes 6–12, I believe every
                student learns differently. My goal is to make each concept
                crystal-clear before moving on, building genuine understanding
                rather than rote memorisation."
              */}
              With over 5 years of dedicated teaching experience, [Tutor&apos;s Name]
              has helped hundreds of students in Motihari and across Bihar achieve
              their academic goals. Specialising in [subject areas], the focus is
              always on building strong fundamentals and genuine understanding.
            </p>

            <p className="text-charcoal/80 text-base leading-relaxed mb-6">
              {/*
                PLACEHOLDER — Teaching philosophy / approach.
                Example: "I use a concept-first approach — once the 'why' is
                clear, the 'how' follows naturally. Regular practice tests and
                doubt-clearing sessions ensure no student is left behind."
              */}
              Every student is unique, which is why lessons are tailored to
              individual learning styles and pace. Regular practice, timely
              feedback, and doubt-clearing sessions ensure steady, confident
              progress throughout the academic year.
            </p>

            {/* Key highlights */}
            <ul className="space-y-3 mb-8">
              {[
                /* PLACEHOLDER — update with actual qualifications/highlights */
                "B.Sc. / B.Ed. qualified — [update with actual degree]",
                "Experienced in CBSE, ICSE & Bihar State Board curriculum",
                "Personalised study plan for each student",
                "Regular progress reports shared with parents",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/15 text-sage flex items-center justify-center">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal/80 text-sm sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              Book a Free Demo Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
