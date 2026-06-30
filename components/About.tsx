import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: StudentPillarIcon,
    title: "For Students",
    desc: "Need a tutor? Submit your requirement — subject, class, preferred mode — and we match you with the right tutor near you or online.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: TutorPillarIcon,
    title: "For Tutors",
    desc: "Qualified and looking for students? Register with us — share your subjects, area, and availability — and we connect you with families who need you.",
    color: "text-sage",
    bg: "bg-sage/15",
  },
  {
    icon: MediatorPillarIcon,
    title: "Our Role",
    desc: "We are the bridge. Nirvana Home Tuition Centre vets, matches, and connects — so both sides get exactly what they're looking for, faster.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section heading */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            We Connect Students &amp; Tutors
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg">
            Nirvana Home Tuition Centre is a trusted tutoring network based in
            Motihari, Bihar. We act as the bridge — bringing together students
            who need personalised guidance and tutors who have the expertise but
            lack the connections to reach them.
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <ScrollReveal stagger className="grid sm:grid-cols-3 gap-6 mb-14">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-charcoal/8 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${p.bg} ${p.color} flex items-center justify-center mb-4`}>
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{p.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </ScrollReveal>

        {/* Founder strip */}
        <ScrollReveal className="bg-primary rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          {/*
            PLACEHOLDER — Replace the avatar div below with an <img> of the founder.
            Recommended: 200×200px, circular crop.
          */}
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
            SK
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Founded &amp; managed by</p>
            {/* PLACEHOLDER — update with actual founder name */}
            <h3 className="text-white font-bold text-xl mb-0.5">Shyam Kumar</h3>
            {/* PLACEHOLDER — update with actual qualification / tagline */}
            <p className="text-accent text-sm font-semibold mb-2">
              Founder, Nirvana Home Tuition Centre · Motihari, Bihar
            </p>
            {/* PLACEHOLDER — replace with actual founder bio */}
            <p className="text-white/70 text-sm leading-relaxed max-w-xl">
              With a passion for making quality education accessible in Motihari,
              Shyam Kumar started Nirvana Home Tuition Centre to bridge the gap
              between students who need personalised guidance and tutors who have
              the expertise but lack the connections to reach them.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function StudentPillarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function TutorPillarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function MediatorPillarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
