import { SITE_CONFIG } from "@/lib/site.config";

const whatsappHello = encodeURIComponent(
  "Hi! I'm interested in home tuition at Nirvana Home Tuition Centre. Please share more details."
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-primary overflow-hidden pt-20 min-h-screen flex items-center"
    >
      {/* Decorative dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-20 right-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl -translate-y-10 translate-x-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-64 h-64 bg-sage opacity-10 rounded-full blur-3xl translate-y-10 -translate-x-20"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Text column ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-sage inline-block" />
              Motihari&apos;s Trusted Tutoring Centre
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Home Tutor for{" "}
              <span className="text-accent">Classes&nbsp;1–12</span> —{" "}
              <span className="whitespace-nowrap">Online &amp;</span>{" "}
              In-Person in{" "}
              <span className="text-accent">Motihari</span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              All subjects · CBSE, ICSE &amp; State Board · Expert guidance at
              home or online · Personalised attention · Affordable fees.{" "}
              <strong className="text-white/95 font-semibold">
                Book a free demo class today
              </strong>{" "}
              and experience the difference.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappHello}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                Chat on WhatsApp
              </a>
              <a
                href="#demo"
                className="flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg"
              >
                Book a Free Demo Class
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: "Classes 1–12", label: "All Grades" },
                { value: "All Subjects", label: "Covered" },
                { value: "CBSE / ICSE", label: "& State Board" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-accent font-bold text-lg sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Illustration column ── */}
          <div className="hidden md:flex justify-center items-center">
            <EducationIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm lg:max-w-md drop-shadow-xl"
      aria-hidden="true"
    >
      {/* Outer glow circle */}
      <circle cx="210" cy="210" r="190" fill="white" fillOpacity="0.04" />
      <circle cx="210" cy="210" r="160" fill="white" fillOpacity="0.04" />

      {/* ── Open Book ── */}
      {/* Left page */}
      <path
        d="M100 260 C100 255 105 248 115 245 L200 225 L200 320 L115 338 C108 340 100 334 100 327 Z"
        fill="white"
        fillOpacity="0.92"
      />
      {/* Right page */}
      <path
        d="M200 225 L285 245 C295 248 300 255 300 260 L300 327 C300 334 292 340 285 338 L200 320 Z"
        fill="#EAF1F6"
        fillOpacity="0.92"
      />
      {/* Spine */}
      <line x1="200" y1="225" x2="200" y2="320" stroke="#1F3A5F" strokeWidth="2" strokeOpacity="0.3" />

      {/* Left page lines */}
      <line x1="120" y1="268" x2="188" y2="256" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="120" y1="280" x2="188" y2="268" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="120" y1="292" x2="188" y2="280" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="120" y1="304" x2="188" y2="292" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="120" y1="316" x2="165" y2="307" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />

      {/* Right page lines */}
      <line x1="212" y1="258" x2="280" y2="270" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="212" y1="270" x2="280" y2="282" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="212" y1="282" x2="280" y2="294" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="212" y1="294" x2="280" y2="306" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
      <line x1="212" y1="306" x2="255" y2="313" stroke="#1F3A5F" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />

      {/* ── Graduation Cap ── */}
      {/* Board */}
      <ellipse cx="210" cy="158" rx="65" ry="10" fill="#F2A93B" fillOpacity="0.95" />
      {/* Hat top */}
      <path d="M210 115 L275 158 L145 158 Z" fill="white" fillOpacity="0.9" />
      {/* Button on top */}
      <circle cx="210" cy="112" r="7" fill="#F2A93B" />
      {/* Tassel string */}
      <line x1="270" y1="155" x2="270" y2="190" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.85" />
      {/* Tassel end */}
      <rect x="262" y="188" width="16" height="8" rx="4" fill="#4C8C6B" fillOpacity="0.9" />

      {/* ── Floating subject icons ── */}

      {/* Pencil (top-left) */}
      <g transform="translate(68, 130) rotate(-30)">
        <rect x="0" y="0" width="8" height="36" rx="2" fill="#F2A93B" fillOpacity="0.85" />
        <polygon points="0,36 8,36 4,46" fill="#222831" fillOpacity="0.6" />
        <rect x="0" y="0" width="8" height="7" rx="2" fill="white" fillOpacity="0.7" />
      </g>

      {/* Calculator (top-right) */}
      <g transform="translate(322, 118)">
        <rect x="0" y="0" width="36" height="46" rx="5" fill="#4C8C6B" fillOpacity="0.8" />
        <rect x="5" y="5" width="26" height="12" rx="2" fill="white" fillOpacity="0.9" />
        {[0,1,2].map((col) =>
          [0,1,2].map((row) => (
            <rect
              key={`${col}-${row}`}
              x={5 + col * 9}
              y={22 + row * 7}
              width="6"
              height="5"
              rx="1"
              fill="white"
              fillOpacity="0.7"
            />
          ))
        )}
      </g>

      {/* Globe (bottom-right) */}
      <g transform="translate(320, 270)">
        <circle cx="22" cy="22" r="22" fill="#1F3A5F" fillOpacity="0.7" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <ellipse cx="22" cy="22" rx="10" ry="22" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="0" y1="22" x2="44" y2="22" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="3" y1="11" x2="41" y2="11" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <line x1="3" y1="33" x2="41" y2="33" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      </g>

      {/* Flask / Science (bottom-left) */}
      <g transform="translate(62, 278)">
        <path d="M12 0 L12 18 L2 38 C0 42 3 46 7 46 L29 46 C33 46 36 42 34 38 L24 18 L24 0 Z" fill="#F2A93B" fillOpacity="0.75" />
        <path d="M6 32 C6 32 15 36 30 30 L34 38 C36 42 33 46 29 46 L7 46 C3 46 0 42 2 38 Z" fill="#F2A93B" fillOpacity="0.4" />
        <rect x="10" y="0" width="16" height="3" rx="1.5" fill="white" fillOpacity="0.7" />
      </g>

      {/* Sparkle dots */}
      <circle cx="155" cy="90" r="5" fill="#F2A93B" fillOpacity="0.8" />
      <circle cx="310" cy="210" r="4" fill="#4C8C6B" fillOpacity="0.7" />
      <circle cx="88" cy="230" r="4" fill="#F2A93B" fillOpacity="0.6" />
      <circle cx="340" cy="170" r="3" fill="white" fillOpacity="0.5" />
      <circle cx="80" cy="180" r="3" fill="white" fillOpacity="0.4" />
      <circle cx="260" cy="100" r="5" fill="#4C8C6B" fillOpacity="0.6" />
      <circle cx="360" cy="310" r="4" fill="#F2A93B" fillOpacity="0.5" />
      <circle cx="65" cy="340" r="5" fill="#4C8C6B" fillOpacity="0.4" />
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
