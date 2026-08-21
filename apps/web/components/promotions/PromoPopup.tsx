"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROMO_SESSION_KEY = "hassaan-travel-promo-2026-08";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(PROMO_SESSION_KEY)) return;

    const timer = window.setTimeout(() => setIsOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function closePopup() {
    sessionStorage.setItem(PROMO_SESSION_KEY, "seen");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
        className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[1.05fr_1fr]"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close promotion"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl leading-none text-gray-700 shadow-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0F91D5]"
        >
          &times;
        </button>

        <div className="relative min-h-52 sm:min-h-64 md:min-h-[430px]">
          <Image
            src="/assets/tour.jpg"
            alt="Explore the latest Hassaan Travel offers"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
          <span className="mb-4 w-fit rounded-full bg-[#0F91D5]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0F91D5]">
            Latest promotion
          </span>

          <h2
            id="promo-title"
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          >
            Your next journey starts here
          </h2>

          <p
            id="promo-description"
            className="mt-4 text-base leading-7 text-gray-600"
          >
            Discover our latest flight, holiday, visa, Umrah, and travel package
            offers prepared for you.
          </p>

          <Link
            href="/packages"
            onClick={closePopup}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0F91D5] px-6 py-3 font-semibold text-white transition hover:bg-[#0d80bd] focus:outline-none focus:ring-2 focus:ring-[#0F91D5] focus:ring-offset-2"
          >
            Explore latest offers
          </Link>

          <button
            type="button"
            onClick={closePopup}
            className="mt-3 min-h-11 rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition hover:text-gray-800"
          >
            Maybe later
          </button>
        </div>
      </section>
    </div>
  );
}
