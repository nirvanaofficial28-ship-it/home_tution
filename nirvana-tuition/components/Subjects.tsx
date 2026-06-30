const gradeRanges = [
  {
    level: "Primary",
    grades: "Classes 1 – 5",
    description:
      "Strong foundation in English, Hindi, Mathematics, EVS, and general awareness. Focus on reading, writing, and building number sense.",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Drawing"],
    color: "bg-amber-50 border-accent",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    Icon: BookIcon,
  },
  {
    level: "Middle School",
    grades: "Classes 6 – 8",
    description:
      "Science, Social Studies, and Mathematics taught concept-first. Strong emphasis on NCERT syllabus and exam preparation.",
    subjects: ["Maths", "Science", "Social Studies", "English", "Hindi", "Sanskrit"],
    color: "bg-blue-50 border-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    Icon: CompassIcon,
  },
  {
    level: "Secondary",
    grades: "Classes 9 – 10",
    description:
      "Board exam focused coaching for CBSE, ICSE & State Board. All subjects covered with practice papers and mock tests.",
    subjects: ["Maths", "Science", "Social Science", "English", "Hindi"],
    color: "bg-sage/10 border-sage",
    iconBg: "bg-sage/15",
    iconColor: "text-sage",
    Icon: FlaskIcon,
  },
  {
    level: "Senior Secondary",
    grades: "Classes 11 – 12",
    description:
      "Science and Commerce stream tutoring. PCM, PCB, Accountancy, Business Studies, and Economics handled with depth.",
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "Accounts", "Economics"],
    color: "bg-purple-50 border-purple-300",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    Icon: GlobeIcon,
  },
];

const boards = ["CBSE", "ICSE", "Bihar State Board"];

export default function Subjects() {
  return (
    <section id="subjects" className="bg-lightblue py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            Subjects &amp; Grades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What We Teach
          </h2>
          <p className="text-charcoal/70 max-w-xl mx-auto text-base sm:text-lg">
            Covering all major subjects across all classes, tailored to your
            board&apos;s curriculum.
          </p>

          {/* Board badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {boards.map((board) => (
              <span
                key={board}
                className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {board}
              </span>
            ))}
          </div>
        </div>

        {/* Grade cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gradeRanges.map((range) => (
            <div
              key={range.level}
              className={`bg-white rounded-2xl border-2 ${range.color} p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${range.iconBg} ${range.iconColor} flex items-center justify-center mb-4 flex-shrink-0`}
              >
                <range.Icon className="w-6 h-6" />
              </div>

              {/* Level & grades */}
              <h3 className="font-bold text-primary text-lg leading-tight mb-0.5">
                {range.level}
              </h3>
              <p className="text-accent font-semibold text-sm mb-3">
                {range.grades}
              </p>

              {/* Description */}
              <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-1">
                {range.description}
              </p>

              {/* Subject tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {range.subjects.map((sub) => (
                  <span
                    key={sub}
                    className="text-xs bg-primary/8 text-primary px-2 py-0.5 rounded-full border border-primary/15"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below grid */}
        <div className="text-center mt-10">
          <p className="text-charcoal/70 mb-4">
            Don&apos;t see your subject?{" "}
            <strong className="text-primary">
              We cover most school-level subjects.
            </strong>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary border-2 border-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-6 0v6l-4 9a1 1 0 00.9 1.45h12.2A1 1 0 0019 18L15 9V3M9 3h6" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  );
}
