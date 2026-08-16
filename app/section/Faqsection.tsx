const faqs = [
  {
    q: "What is Edupath Library?",
    a: "A dedicated self-study space in Vaishali, designed for quiet, focused study \u2014 not a traditional library.",
  },
  {
    q: "Is it a book-lending library?",
    a: "No. It's a self-study space \u2014 bring your own material and use ours for a focused environment.",
  },
  {
    q: "Where is it located?",
    a: "At Shopprix Mall, Vaishali.",
  },
  {
    q: "What are the timings?",
    a: "Open daily from 7:00 AM to 3:30 PM.",
  },
  {
    q: "Is it air-conditioned?",
    a: "Yes, the entire study space is air-conditioned.",
  },
  {
    q: "Are charging points available?",
    a: "Yes, at every seat.",
  },
  {
    q: "Can I use the whiteboards?",
    a: "Yes, whiteboards are available for personal practice and revision.",
  },
  {
    q: "Is Wi-Fi available?",
    a: "Yes, Wi-Fi is available for all members.",
  },
  {
    q: "Are water and snacks available?",
    a: "Yes, drinking water and snacks are available on the premises.",
  },
  {
    q: "Are lockers or printing available?",
    a: "Printing and scanning are available. Lockers are not currently offered.",
  },
  {
    q: "What are the membership charges?",
    a: "Daily \u20b9150, Monthly \u20b91500, and Quarterly \u20b94200 \u2014 see the Membership section above for details.",
  },
  {
    q: "Can I visit before joining?",
    a: "Yes \u2014 walk-ins are welcome, and we offer a 1-day free trial before you join.",
  },
];

export default function FaqSection() {
  return (
    <section id="faqs" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          FAQs
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
          Answers Before You Ask
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-navy/10 border-y border-navy/10">
        {faqs.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-navy">
              {item.q}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="shrink-0 text-maroon transition-transform group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 pr-8 text-sm leading-relaxed text-charcoal/75">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}