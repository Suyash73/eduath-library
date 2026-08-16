import { siteConfig } from "@/lib/siteConfig";

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-navy/[0.03] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-maroon">
          Membership
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy md:text-4xl">
          Simple, Reasonable, Transparent
        </h2>
        <p className="mt-4 text-base text-charcoal/70">
          Pick what fits your study routine. No hidden charges.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
        {siteConfig.plans.map((plan) => (
          <div
            key={plan.label}
            className="flex flex-col items-center rounded-2xl bg-cream p-8 text-center shadow-sm ring-1 ring-navy/5"
          >
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-charcoal/60">
              {plan.label}
            </p>
            <p className="mt-3 font-display text-4xl font-semibold text-navy">
              &#8377;{plan.price}
            </p>
            <p className="mt-1 text-sm text-charcoal/60">{plan.unit}</p>
            {plan.note && (
              <p className="mt-3 rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-maroon">
                {plan.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}