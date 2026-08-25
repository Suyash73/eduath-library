"use client";

import { useRef } from "react";
import Image from "next/image";

const shots = [
  { label: "Study Room", caption: "Wide view of the full study space", image: "/gallery-whiteboards.jpeg" },
  { label: "Study Room 2", caption: "Seating arranged for focused study", image: "/edulib_8.jpeg" },
  { label: "Desk & Charging", caption: "Seating, lighting and charging points", image: "/gallery-study-desk.jpeg" },
  { label: "Whiteboards", caption: "Space for personal practice", image: "/edulib_4.jpeg" },
  { label: "Entrance", caption: "Shopprix Mall, Vaishali", image: "/gallery-desk.jpeg" },
  { label: "Water Dispenser", caption: "Drinking water available on premises", image: "/edulib_9.jpeg" },
  { label: "Biometric Security", caption: "Secure, monitored entry for members", image: "/edulib_10.jpeg" },
];

function GalleryPhoto({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image src={src} alt={label} fill className="object-cover" />
    </div>
  );
}

export default function GallerySection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth / (el.clientWidth > 900 ? 3 : el.clientWidth > 600 ? 2 : 1);
    el.scrollBy({ left: direction * slideWidth, behavior: "smooth" });
  };

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
          A closer look at where you&rsquo;ll be studying.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((shot) => (
            <div
              key={shot.label}
              className="w-full shrink-0 snap-center sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <GalleryPhoto src={shot.image} label={shot.label} />
              <p className="mt-3 font-display text-sm font-semibold text-navy">
                {shot.label}
              </p>
              <p className="text-xs text-charcoal/60">{shot.caption}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Previous photos"
          className="absolute left-0 top-1/3 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream p-3 text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-navy/5 sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Next photos"
          className="absolute right-0 top-1/3 hidden translate-x-1/2 -translate-y-1/2 rounded-full bg-cream p-3 text-navy shadow-md ring-1 ring-navy/10 transition hover:bg-navy/5 sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}