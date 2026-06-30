import { SITE_CONFIG } from "@/lib/site.config";

const whatsappPricing = encodeURIComponent(
  "Hi! I'd like to know more about pricing and fee structure at Nirvana Home Tuition Centre."
);

// PLACEHOLDER pricing tiers — update with actual fees before going live
const tiers = [
  {
    name: "Basic",
    sessions: "3 sessions / week",
    duration: "45 min per session",
    highlight: false,
    features: [
      "1 subject",
      "Home or online (your choice)",
      "Weekly progress update",
      "WhatsApp doubt support",
    ],
    cta: "Enquire Now",
  },
  {
    name: "Standard",
    sessions: "5 sessions / week",
    duration: "1 hour per session",
    highlight: true,
    features: [
      "Up to 3 subjects",
      "Home or online (your choice)",
      "Weekly progress report",
      "WhatsApp doubt support",
      "Monthly parent meeting",
    ],
    cta: "Most Popular — Enquire",
  },
  {
    name: "Premium",
    sessions: "Daily sessions",
    duration: "1–1.5 hours per session",
    highlight: false,
    features: [
      "All subjects",
      "Home or online (your choice)",
      "Bi-weekly progress report",
      "Priority WhatsApp support",
      "Monthly parent meeting",
      "Practice tests & mock papers",
    ],
    cta: "Enquire Now",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-lightblue py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sage text-sm font-semibold uppercase tracking-widest mb-2">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Flexible, Affordable Plans
          </h2>
          <p className="text-charcoal/70 max-w-xl mx-auto text-base sm:text-lg">
            Fees vary by class, subjects, and mode. Contact us for a customised
            quote that fits your budget.
          </p>

          {/* Placeholder notice banner */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-accent/40 text-accent text-sm font-medium px-4 py-2 rounded-lg mt-4">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
            Sample plans shown below — actual pricing shared on enquiry
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm ${
                tier.highlight
                  ? "bg-primary text-white border-2 border-accent ring-4 ring-accent/20 scale-[1.02]"
                  : "bg-white border-2 border-primary/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${
                  tier.highlight ? "text-white" : "text-primary"
                }`}
              >
                {tier.name}
              </h3>

              {/* PLACEHOLDER pricing — update with actual fees */}
              <div
                className={`text-3xl font-extrabold mb-0.5 ${
                  tier.highlight ? "text-accent" : "text-primary"
                }`}
              >
                ₹[X,XXX]
              </div>
              <p
                className={`text-sm mb-1 ${
                  tier.highlight ? "text-white/60" : "text-charcoal/50"
                }`}
              >
                per month · <span className="italic">sample price</span>
              </p>

              <div
                className={`text-sm mb-5 ${
                  tier.highlight ? "text-white/80" : "text-charcoal/70"
                }`}
              >
                {tier.sessions} · {tier.duration}
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-accent" : "text-sage"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.highlight ? "text-white/85" : "text-charcoal/75"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappPricing}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3 rounded-xl transition-colors duration-200 ${
                  tier.highlight
                    ? "bg-accent hover:bg-accent-dark text-white"
                    : "bg-primary/8 hover:bg-primary text-primary hover:text-white border border-primary/20"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Foot note */}
        <p className="text-center text-charcoal/60 text-sm mt-8">
          All prices are indicative samples.{" "}
          <strong className="text-primary">
            Actual fees depend on class, number of subjects, and teaching mode.
          </strong>{" "}
          Contact us for an exact quote.
        </p>
      </div>
    </section>
  );
}
