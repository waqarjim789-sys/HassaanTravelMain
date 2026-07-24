"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const airlines = [
  { src: "/assets/home/partners/p1.webp", alt: "Partner 1" },
  { src: "/assets/home/partners/p2.webp", alt: "Partner 2" },
  { src: "/assets/home/partners/p3.webp", alt: "Partner 3" },
  { src: "/assets/home/partners/p4.webp", alt: "Partner 4" },
  { src: "/assets/home/partners/p5.webp", alt: "Partner 5" },
  { src: "/assets/home/partners/p6.svg", alt: "Partner 6" },
  { src: "/assets/home/partners/p7.webp", alt: "Partner 7" },
  { src: "/assets/home/partners/p8.webp", alt: "Partner 8" },
  { src: "/assets/home/partners/p9.webp", alt: "Partner 9" },
  { src: "/assets/home/partners/p10.webp", alt: "Partner 10" },
  { src: "/assets/home/partners/p11.webp", alt: "Partner 11" },
  { src: "/assets/home/partners/p12.webp", alt: "Partner 12" },
  { src: "/assets/home/partners/p13.webp", alt: "Partner 13" },
  { src: "/assets/home/partners/p14.webp", alt: "Partner 14" },
  { src: "/assets/home/partners/p15.webp", alt: "Partner 15" },
  { src: "/assets/home/partners/p16.webp", alt: "Partner 16" },
  { src: "/assets/home/partners/p17.webp", alt: "Partner 17" },
  { src: "/assets/home/partners/p18.webp", alt: "Partner 18" },
  { src: "/assets/home/partners/p19.webp", alt: "Partner 19" },
  { src: "/assets/home/partners/p20.webp", alt: "Partner 20" },
  { src: "/assets/home/partners/p21.webp", alt: "Partner 21" },
  { src: "/assets/home/partners/p22.webp", alt: "Partner 22" },
  { src: "/assets/home/partners/p23.webp", alt: "Partner 23" },
  { src: "/assets/home/partners/p24.webp", alt: "Partner 24" },
  { src: "/assets/home/partners/p25.webp", alt: "Partner 25" },
  { src: "/assets/home/partners/p26.webp", alt: "Partner 26" },
  { src: "/assets/home/partners/p27.webp", alt: "Partner 27" },
  { src: "/assets/home/partners/p27.webp", alt: "Partner 27" },
  { src: "/assets/home/partners/p28.webp", alt: "Partner 28" },
  { src: "/assets/home/partners/p29.webp", alt: "Partner 29" },
  { src: "/assets/home/partners/p30.webp", alt: "Partner 30" },
  { src: "/assets/home/partners/p32.webp", alt: "Partner 32" },
  { src: "/assets/home/partners/p33.webp", alt: "Partner 33" },



];

// Duplicate for seamless loop
const allAirlines = [...airlines, ...airlines];

export default function AirlineSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);          // current x offset
  const speedRef = useRef(2);           // px per frame (auto-scroll speed)
  const rafRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const singleWidthRef = useRef(0);

  // Calculate single set width after mount
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
  if (!e.touches[0]) return; // ← yeh add karo
  isPausedRef.current = true;
  isDraggingRef.current = true;
  dragStartXRef.current = e.touches[0].clientX;
  dragStartPosRef.current = positionRef.current;
};

const onTouchMove = (e: React.TouchEvent) => {
  if (!isDraggingRef.current) return;
  if (!e.touches[0]) return; // ← yeh add karo
  const delta = dragStartXRef.current - e.touches[0].clientX;
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
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Trusted Airline Partners
    </h2>

    <p className="mt-3 text-gray-500 text-lg">
        We proudly work with leading international airlines to offer the best fares and seamless travel experiences.
    </p>
</div>

        <div className="mt-10">
          {/* Outer: clips overflow, listens to mouse/touch */}
          <div
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
      alt={airline.alt}
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