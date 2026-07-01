import { SITE_CONFIG } from "@/lib/site.config";

const whatsappGeneral = encodeURIComponent(
  "Hi! I have a question about Nirvana Home Tuition Centre."
);

export default function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white">
      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/70 max-w-lg mx-auto text-base">
            Have a question? We&apos;re just a WhatsApp message away. Or fill in the
            demo form above and we&apos;ll reach out to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* ── Contact details ── */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PinIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-1">
                  Address
                </h3>
                <address className="not-italic text-white/75 text-sm leading-relaxed">
                  {SITE_CONFIG.address.street},<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                </address>
              </div>
            </div>

            {/* Phone */}
            {/* <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PhoneIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:+91${SITE_CONFIG.phone}`}
                  className="text-white/75 hover:text-accent text-sm transition-colors"
                >
                  +91 {SITE_CONFIG.phone}
                </a>
              </div>
            </div> */}

            {/* WhatsApp */}
            {/* <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <WhatsAppIcon className="w-5 h-5 text-whatsapp" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-1">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappGeneral}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-accent text-sm transition-colors"
                >
                  +91 {SITE_CONFIG.phone}
                </a>
              </div>
            </div> */}

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MailIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-1">
                  Email
                </h3>
                {/* PLACEHOLDER — update with actual email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white/75 hover:text-accent text-sm transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                {/* Facebook */}
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Google Map embed ── */}
          <div className="rounded-2xl overflow-hidden border border-white/15 h-72 md:h-auto min-h-64 shadow-lg">
            {/*
              PLACEHOLDER map — shows central Motihari.
              To update: go to Google Maps, navigate to your exact location,
              click Share → Embed a map → copy the iframe src URL and replace below.
            */}
            <iframe
              title="Nirvana Home Tuition Centre location — Chatauni, Motihari, Bihar"
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "260px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA strip */}
        <div className="bg-white/8 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg">Ready to get started?</p>
            <p className="text-white/65 text-sm">
              Book a free demo class today — no commitment required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappGeneral}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>
            {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}, India
          </p>
        </div>
      </div>
    </footer>
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
