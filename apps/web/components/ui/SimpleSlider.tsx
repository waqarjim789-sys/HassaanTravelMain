"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator, interpolate } from "@/lib/createTranslator";
import { getHomepageTranslation } from "@/translations/homepage";

// Heading + description already live in homepage.ts (sideSections.airlinePartners).
// Only the logo alt text needs its own small dictionary.
const getSliderTranslation = createTranslator(
  { logoAlt: "Airline partner {number}" } as const,
  {
    nl: { logoAlt: "Luchtvaartpartner {number}" },
    de: { logoAlt: "Airline-Partner {number}" },
    fr: { logoAlt: "Compagnie aérienne partenaire {number}" },
    it: { logoAlt: "Compagnia aerea partner {number}" },
    es: { logoAlt: "Aerolínea asociada {number}" },
    ar: { logoAlt: "شركة طيران شريكة {number}" },
    ur: { logoAlt: "ایئرلائن پارٹنر {number}" },
  }
);

const airlines = [
  { src: "/assets/home/partners/p1.webp", number: 1 },
  { src: "/assets/home/partners/p2.webp", number: 2 },
  { src: "/assets/home/partners/p3.webp", number: 3 },
  { src: "/assets/home/partners/p4.webp", number: 4 },
  { src: "/assets/home/partners/p5.webp", number: 5 },
  { src: "/assets/home/partners/p6.svg", number: 6 },
  { src: "/assets/home/partners/p7.webp", number: 7 },
  { src: "/assets/home/partners/p8.webp", number: 8 },
  { src: "/assets/home/partners/p9.webp", number: 9 },
  { src: "/assets/home/partners/p10.webp", number: 10 },
  { src: "/assets/home/partners/p11.webp", number: 11 },
  { src: "/assets/home/partners/p12.webp", number: 12 },
  { src: "/assets/home/partners/p13.webp", number: 13 },
  { src: "/assets/home/partners/p14.webp", number: 14 },
  { src: "/assets/home/partners/p15.webp", number: 15 },
  { src: "/assets/home/partners/p16.webp", number: 16 },
  { src: "/assets/home/partners/p17.webp", number: 17 },
  { src: "/assets/home/partners/p18.webp", number: 18 },
  { src: "/assets/home/partners/p19.webp", number: 19 },
  { src: "/assets/home/partners/p20.webp", number: 20 },
  { src: "/assets/home/partners/p21.webp", number: 21 },
  { src: "/assets/home/partners/p22.webp", number: 22 },
  { src: "/assets/home/partners/p23.webp", number: 23 },
  { src: "/assets/home/partners/p24.webp", number: 24 },
  { src: "/assets/home/partners/p25.webp", number: 25 },
  { src: "/assets/home/partners/p26.webp", number: 26 },
  { src: "/assets/home/partners/p27.webp", number: 27 },
  // Duplicate of p27 kept as in the original list (owner to confirm).
  { src: "/assets/home/partners/p27.webp", number: 27 },
  { src: "/assets/home/partners/p28.webp", number: 28 },
  { src: "/assets/home/partners/p29.webp", number: 29 },
  { src: "/assets/home/partners/p30.webp", number: 30 },
  { src: "/assets/home/partners/p32.webp", number: 32 },
  { src: "/assets/home/partners/p33.webp", number: 33 },
];

// Duplicate for seamless loop
const allAirlines = [...airlines, ...airlines];

export default function AirlineSlider() {
  const { language } = useLanguage();
  const home = getHomepageTranslation(language);
  const section =
    home.sideSections.airlinePartners ??
    getHomepageTranslation("en").sideSections.airlinePartners;
  const sliderText = getSliderTranslation(language);

  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);          // current x offset
  const speedRef = useRef(2);             // px per frame (auto-scroll speed)
  const rafRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Calculate single set width after mount and run the auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Width of one set = total / 2 (since we duplicated)
    singleWidthRef.current = track.scrollWidth / 2;

    function animate() {
      if (!isPausedRef.current && !isDraggingRef.current) {
        positionRef.current += speedRef.current;

        // Reset when first set scrolled past
        if (positionRef.current >= singleWidthRef.current) {
          positionRef.current -= singleWidthRef.current;
        }
      }

      if (track) {
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── MOUSE EVENTS ──────────────────────────────────────────
  const onMouseEnter = () => { isPausedRef.current = true; };
  const onMouseLeave = () => {
    isPausedRef.current = false;
    isDraggingRef.current = false;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = positionRef.current;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const delta = dragStartXRef.current - e.clientX;
    let newPos = dragStartPosRef.current + delta;

    // Keep within bounds (looping)
    const single = singleWidthRef.current;
    if (newPos < 0) newPos += single;
    if (newPos >= single) newPos -= single;

    positionRef.current = newPos;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false; // resume auto-scroll
  };

  // ── TOUCH EVENTS ──────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    isPausedRef.current = true;
    isDraggingRef.current = true;
    dragStartXRef.current = touch.clientX;
    dragStartPosRef.current = positionRef.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    if (!touch) return;
    const delta = dragStartXRef.current - touch.clientX;
    let newPos = dragStartPosRef.current + delta;

    const single = singleWidthRef.current;
    if (newPos < 0) newPos += single;
    if (newPos >= single) newPos -= single;

    positionRef.current = newPos;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false; // resume
  };

  return (
    <section
      dir={getDirection(language)}
      className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-white to-sky-50"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {section?.head}
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            {section?.details}
          </p>
        </div>

        <div className="mt-10">
          {/*
            Logos carry no text direction, and the loop math assumes the
            track starts on the left, so the slider itself stays LTR.
          */}
          <div
            dir="ltr"
            className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Inner track — moved via transform in rAF */}
            <div
              ref={trackRef}
              className="flex w-max items-center will-change-transform"
            >
              {allAirlines.map((airline, i) => (
                <div
                  key={i}
                  // The second copy only exists for the loop; hide it from screen readers.
                  aria-hidden={i >= airlines.length ? true : undefined}
                  className="
                    mx-5
                    flex
                    h-28
                    w-56
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    hover:scale-105
                    border
                    border-gray-100
                    flex-shrink-0
                  "
                >
                  <Image
                    src={airline.src}
                    alt={interpolate(sliderText.logoAlt, { number: airline.number })}
                    width={180}
                    height={90}
                    draggable={false}
                    className="
                      max-h-20
                      max-w-[180px]
                      object-contain
                      pointer-events-none
                      select-none
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}