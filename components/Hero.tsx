import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site.config";

const hindiQuotes = [
  { text: "गुरु बिना ज्ञान कहाँ",          meaning: "Without a teacher, where is knowledge?" },
  { text: "ज्ञान ही सबसे बड़ा धन है",       meaning: "Knowledge is the greatest wealth" },
  { text: "पढ़ोगे तो आगे बढ़ोगे",            meaning: "Study today, lead tomorrow" },
  { text: "शिक्षा से बड़ा कोई वरदान नहीं",  meaning: "No blessing greater than education" },
];

const whatsappHello = encodeURIComponent(
  "Hi! I'd like to know more about Nirvana Home Tuition Centre — connecting students and tutors."
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-primary overflow-hidden pt-20 min-h-screen flex items-center"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl -translate-y-10 translate-x-20" aria-hidden="true" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-sage opacity-10 rounded-full blur-3xl translate-y-10 -translate-x-20" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <div>
            <div
              className="hero-up inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-sage inline-block" />
              Motihari&apos;s Tuition Network
            </div>

            <h1
              className="hero-up text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ animationDelay: "100ms" }}
            >
              Find a Tutor.<br />
              <span className="text-accent">Become a Tutor.</span>
            </h1>

            {/* Cycling Hindi quotes */}
            <div
              className="hero-up relative h-12 mb-5 overflow-hidden"
              style={{ animationDelay: "200ms" }}
              aria-hidden="true"
            >
              {hindiQuotes.map((q, i) => (
                <div
                  key={q.text}
                  className="hindi-quote flex items-baseline gap-2"
                  style={{ animationDelay: `${i * 4}s` }}
                >
                  <span className="text-accent text-base sm:text-lg font-semibold">
                    ❝ {q.text} ❞
                  </span>
                  <span className="text-white/45 text-xs hidden sm:inline">
                    — {q.meaning}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="hero-up text-white/75 text-base sm:text-lg leading-relaxed mb-8"
              style={{ animationDelay: "300ms" }}
            >
              Nirvana Home Tuition Centre connects{" "}
              <strong className="text-white/95">students needing quality home or online tuition</strong>{" "}
              with{" "}
              <strong className="text-white/95">qualified tutors looking for students</strong>{" "}
              — across Motihari and beyond. Classes&nbsp;1–12 · All subjects · CBSE, ICSE &amp; State Board.
            </p>

            {/* Dual CTA */}
            <div
              className="hero-up flex flex-col sm:flex-row gap-4 mb-8"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href="#enquire"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg"
              >
                <StudentIcon className="w-5 h-5 flex-shrink-0" />
                As Student/Parents
              </a>
              <a
                href="#enquire"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-base"
              >
                <TeacherIcon className="w-5 h-5 flex-shrink-0" />
                As Tutor/Teacher
              </a>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappHello}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-up inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              style={{ animationDelay: "520ms" }}
            >
              <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
              Or chat with us directly on WhatsApp
            </a>

            {/* Trust stats */}
            <div
              className="hero-up flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
              style={{ animationDelay: "620ms" }}
            >
              {[
                { value: "Classes 1–12", label: "All grades covered" },
                { value: "All Subjects", label: "Every school subject" },
                { value: "Home + Online", label: "Both modes available" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-accent font-bold text-base sm:text-lg">{stat.value}</div>
                  <div className="text-white/55 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div
            className="hero-right flex justify-center items-center"
            style={{ animationDelay: "150ms" }}
          >
            <div className="hero-float">
              <Image
                src="/hero-photo.jpg"
                alt="Nirvana Home Tuition Centre — tutor with students in Motihari"
                width={520}
                height={520}
                className="w-full max-w-[260px] sm:max-w-sm lg:max-w-md drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function TeacherIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
