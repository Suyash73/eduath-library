import { siteConfig } from "@/lib/siteConfig";

export default function CtaSection() {
  return (
    <section className="bg-maroon px-6 py-20 text-center text-cream md:py-24">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-light">
        Edupath Library
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
        A Quiet Place to Study. A Better Environment to Focus.
      </h2>
      <p className="mt-4 text-sm text-cream/80">
        {siteConfig.location.line} &middot; {siteConfig.hours.open} &ndash;{" "}
        {siteConfig.hours.close}
      </p>
      <p className="mt-1 text-sm text-cream/80">
        Quiet &middot; Comfortable &middot; Convenient &middot; Student-focused
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={siteConfig.contact.whatsappHref}
          className="rounded-full bg-cream px-6 py-3 font-display text-sm font-semibold text-maroon shadow-sm transition hover:bg-cream/90"
        >
          Enquire Now
        </a>
        <a
          href={siteConfig.location.mapsUrl}
          className="rounded-full border border-cream/40 px-6 py-3 font-display text-sm font-semibold text-cream transition hover:bg-cream/10"
        >
          Visit Us
        </a>
      </div>
    </section>
  );
}