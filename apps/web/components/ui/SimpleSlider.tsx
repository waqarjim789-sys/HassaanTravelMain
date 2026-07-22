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
    <section className="relative w-full py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <p className="flex justify-center mb-8 font-bold text-lg">
          Our Services Partners
        </p>

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
                <Image
                  key={i}
                  src={airline.src}
                  alt={airline.alt}
                  width={200}
                  height={100}
                  draggable={false}
                  className="h-14 sm:h-16 w-auto object-contain mx-12 pointer-events-none"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}