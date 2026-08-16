const pillars = [
  {
    title: "Focus",
    text: "A quiet-first environment built around concentration, not socialising.",
  },
  {
    title: "Comfort",
    text: "Comfortable seating, good lighting and a clean, maintained space.",
  },
  {
    title: "Productivity",
    text: "Whiteboards, charging and Wi-Fi so study hours actually get used.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy/[0.03] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          The Idea
        </p>
        <p className="mt-3 text-lg text-charcoal/70">
          Sometimes you need the right environment, not more motivation.
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
          More Than a Library. A Place to Focus.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal/80">
          Sometimes the biggest challenge isn&rsquo;t finding what to study.
          It&rsquo;s finding the right place to study. Edupath Library is a
          dedicated self-study space for students who want a peaceful,
          comfortable and reliable environment for their study hours.
          Located at Shopprix Mall, Vaishali, the space combines a proper
          commercial setting with a study-first interior.
        </p>

        <a
          href="#facilities"
          className="mt-8 inline-block font-display text-sm font-semibold text-maroon transition hover:text-maroon-dark"
        >
          Explore Facilities &rarr;
        </a>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-cream p-6 text-center shadow-sm ring-1 ring-navy/5"
          >
            <p className="font-display text-lg font-semibold text-navy">
              {p.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}