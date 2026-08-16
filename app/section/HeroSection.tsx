import { siteConfig } from "@/lib/siteConfig";

function HeroImagePlaceholder() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-maroon-dark shadow-xl md:aspect-[16/11]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-cream/90">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <p className="font-display text-sm tracking-wide">Real library photo coming soon</p>
      </div>
    </div>
  );
}

function StudyHoursBar() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between font-display text-xs font-medium tracking-wide text-navy/70">
        <span>7:00 AM</span>
        <span>3:30 PM</span>
      </div>
      <div className="mt-1.5 h-2 w-full rounded-full bg-navy/10">
        <div className="h-2 w-full rounded-full bg-gradient-to-r from-maroon to-gold" />
      </div>
      <p className="mt-2 text-sm text-charcoal/70">One consistent study window, every day.</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          Dedicated self-study space &middot; Vaishali
        </p>

        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
          {siteConfig.tagline}
          <span className="mt-2 block text-3xl text-charcoal/80 md:text-4xl">
            {siteConfig.subTagline}
          </span>
        </h1>

        <p className="mt-5 max-w-md text-base text-charcoal/80">
          Quiet surroundings, comfortable seating and everything you need for a focused study day &mdash; at {siteConfig.location.line}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={siteConfig.contact.whatsappHref} className="rounded-full bg-maroon px-6 py-3 font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-maroon-dark">
            Enquire on WhatsApp
          </a>
          <a href={siteConfig.contact.phoneHref} className="rounded-full border border-navy/20 px-6 py-3 font-display text-sm font-semibold text-navy transition hover:bg-navy/5">
            Call Us
          </a>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-charcoal/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Walk-ins welcome &mdash; 1-day free trial, no commitment
        </p>

        <div className="mt-10 max-w-sm">
          <StudyHoursBar />
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-charcoal/70">
          {siteConfig.facilities.map((f) => (
            <li key={f.label} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {f.label}
            </li>
          ))}
        </ul>
      </div>

      <HeroImagePlaceholder />
    </section>
  );
}