import { siteConfig } from "@/lib/siteConfig";

const trustPoints = [
  {
    title: "Cleanliness",
    text: "Regular cleaning and well-maintained study areas.",
  },
  {
    title: "Staff Support",
    text: "A clear point of contact during operating hours.",
  },
  {
    title: "Clear Rules",
    text: "Noise, phone use and cleanliness guidelines, respectfully enforced.",
  },
  {
    title: "Privacy",
    text: "CCTV and attendance data used responsibly and transparently.",
  },
];

export default function LocationSection() {
  return (
    <section className="bg-navy px-6 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-light">
          Location & Trust
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
          A Proper Commercial Location. A Dedicated Study Space Inside.
        </h2>

        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3 font-display text-sm font-medium text-cream/80">
          <span className="rounded-full border border-cream/25 px-4 py-2">Shopprix Mall</span>
          <span className="text-gold-light">&rarr;</span>
          <span className="rounded-full border border-cream/25 px-4 py-2">Edupath Library</span>
          <span className="text-gold-light">&rarr;</span>
          <span className="rounded-full bg-maroon px-4 py-2">Dedicated Study Environment</span>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/70">
          {siteConfig.location.line} &mdash; a proper commercial setting on
          the outside, with a quiet, study-first interior built specifically
          for focused work.
        </p>

        <a
          href={siteConfig.location.mapsUrl}
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-display text-sm font-semibold text-navy shadow-sm transition hover:bg-gold-light"
        >
          Get Directions
        </a>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => (
          <div key={point.title} className="rounded-2xl border border-cream/15 p-6">
            <p className="font-display text-base font-semibold">{point.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}