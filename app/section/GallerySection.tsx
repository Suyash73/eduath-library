const shots = [
  { label: "Study Room", caption: "Wide view of the full study space" },
  { label: "Desk & Charging", caption: "Seating, lighting and charging points" },
  { label: "Whiteboards", caption: "Space for personal practice" },
  { label: "Entrance", caption: "Shopprix Mall, Vaishali" },
];

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-light to-navy">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-cream/70"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          Gallery
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
          See the Space
        </h2>
        <p className="mt-4 text-base text-charcoal/70">
          Real photographs are on the way. Here&rsquo;s what you&rsquo;ll find
          when they&rsquo;re up.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shots.map((shot) => (
          <div key={shot.label}>
            <GalleryPlaceholder label={shot.label} />
            <p className="mt-3 font-display text-sm font-semibold text-navy">
              {shot.label}
            </p>
            <p className="text-xs text-charcoal/60">{shot.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}