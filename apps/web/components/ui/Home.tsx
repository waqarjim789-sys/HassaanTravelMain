import Image from "next/image";
import { Plane, Bed, ScrollText } from "lucide-react";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link"; 
import Testimonials from "./Testimonials";
import SideIconDesc from "./SideIconDesc";
import BookingSearchForm from "../layout/home/BookingSearchForm";
import SimpleSlider from "./SimpleSlider";
import LuxurayAccommodation from "../layout/home/LuxurayAccommodation";
import CenterIconHeadingDesc from "./CenterIconHeadingDesc";
import Map from "./Map";
import PopularTourPackages from "@/components/layout/home/PopularTourPackages";

// INTEGRATED VISA SERVICE IMPORTS
import Services from "@/components/layout/visas/Services";
import MutipleImageRightText from "@/components/ui/MutipleImageRightText";

const visaSolution = {
  head: (
    <>
      Expert Visa <span className="text-[#0F91D5]">Solutions</span>
    </>
  ),
  details:
    "Streamlined processing with guaranteed approval for all destinations",
  data: [
    {
      title: "Flight Booking",
      desc: "Book affordable flights to every destination with flexible options for individuals and families.",
      icon: <Plane />,
    },
    {
      title: "Hotel Reservations",
      desc: "Book comfortable accommodation worldwide with ease and convenience.",
      icon: <Bed />,
    },
    {
      title: "Visa Processing",
      desc: "Fast and reliable visa services ensuring smooth approval for travelers.",
      icon: <ScrollText />,
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock customer support for all your travel needs.",
      icon: <MdOutlineSupportAgent />,
    },
  ],
};

const imageData = [
  "/assets/visa/1.webp",
  "/assets/visa/3.webp",
  "/assets/visa/2.webp",
  "/assets/visa/4.webp",
];

export default function HomeMain() {
  return (
    <main className="w-full text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden min-h-150 md:min-h-170 pb-16">
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-24 md:pt-28 -mt-8 sm:-mt-12 md:-mt-16">
          {/* BADGE (Updated background to white, text to black, and altered text to Accredited) */}
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white px-4 py-2 rounded-full mb-5 text-xs sm:text-sm text-black font-medium shadow-sm">
            <Image
              src="/assets/home/partners/iata.webp"
              alt="IATA Badge"
              width={20}
              height={20}
              priority
              className="h-4 w-auto object-contain"
            />
            <span>IATA ACCREDITED • 17+ YEARS EXCELLENCE</span>
          </div>

          {/* HEADING BLOCK */}
          <div className="w-full tracking-tight">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold block whitespace-normal md:whitespace-nowrap">
              Cheap Tickets Smooth <span className="text-blue-400">Journeys</span>
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-400 mt-2 sm:mt-3 block">
              From Booking to Boarding
            </h2>
          </div>

          {/* DESC */}
          <p className="mt-6 text-gray-200 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Experience seamless, luxury travel with expert visa processing,
            bespoke Umrah packages, and personalized guidance. Trusted by
            10,000+ travelers.
          </p>
        </div>
        
        {/* SEARCH BLOCK */}
        <BookingSearchForm />
      </section>

      {/* ================= SERVICES SECTION (REPLACED POPULAR PACKAGES) ================= */}
      <PopularTourPackages />
      {/* ================= MULTIPLE IMAGES SECTION ================= */}
      <MutipleImageRightText imageData={imageData} />

      {/* ================= EXPERT VISA SOLUTIONS ================= */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-8 md:px-16 overflow-hidden">
        {/* BACKGROUND IMAGE (LAZY LOAD) */}
        <img
          src="/assets/bgimage/h2.webp"
          loading="lazy"
          alt="contact section background image"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] z-0"
        />

        {/* CONTENT */}
        <div className="relative z-10 -mt-8 sm:-mt-10">
          <SideIconDesc data={visaSolution} />
        </div>
      </section>

      {/* ================= PARTNERS SLIDER ================= */}
      <SimpleSlider />

      {/* ================= HOTELS ACCOMMODATION ================= */}
      <LuxurayAccommodation />

      {/* ================= FEATURES CENTER SECTION ================= */}
      <CenterIconHeadingDesc />

      {/* ================= MAP SECTION ================= */}
      <Map />

      {/* ================= TESTIMONIALS ================= */}
      <section>
        <Testimonials />
      </section>
      {/* ================= CTA SECTION ================= */}
      <section
        className="relative py-12 sm:py-20 px-4 text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/assets/home/h3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,145,213,0.8)]"></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Start Your Journey?
          </h2>

          <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how we can
            make your travel dreams a reality.
          </p>

          <Link
            href="https://wa.me/31104857673?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20travel%20plans."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d4e157] hover:bg-[#d4e157] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-lime-500 transition-colors"
          >
            Request a Free Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}