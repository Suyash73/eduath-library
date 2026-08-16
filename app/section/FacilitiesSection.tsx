const categories = [
  {
    title: "Focus",
    items: ["Quiet study environment", "Whiteboards for personal practice", "Silent-zone policy"],
  },
  {
    title: "Comfort",
    items: ["Air-conditioning", "Comfortable seating", "Drinking water", "Snacks & refreshments"],
  },
  {
    title: "Convenience",
    items: ["Charging points available","Wi-Fi for all members", "Printing & scanning", "Fixed daily hours \u2014 7:00 AM to 3:30 PM"],
  },
  {
    title: "Trust & Operations",
    items: ["CCTV & security", "Power backup", "Biometric attendance", "Commercial premises at Shopprix Mall"],
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="mt-0.5 shrink-0 text-gold"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          Facilities
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
          Everything You Need for a Productive Study Day
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-navy/10 bg-cream p-7"
          >
            <h3 className="font-display text-lg font-semibold text-navy">
              {cat.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {cat.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}