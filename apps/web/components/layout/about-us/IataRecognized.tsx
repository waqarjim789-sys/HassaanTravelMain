"use client"; // Required for handling state/clicks in Next.js App Router

import React, { useState } from "react";
import { FaPhoneAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import BookingModal from "@/components/ui/BookingModal"; // Update this path based on where your BookingModal is stored

const IataRecognized = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-[#1e88c8] text-center text-white relative">
      {/* TOP BADGE */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full">
          <FaStar className="text-yellow-300" />
          IATA Accredited Partners
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Seamless Travel <span className="text-[#d4e157]">Extraordinary</span>{" "}
        <br />
        <span className="text-[#d4e157]">Experiences</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
        Ready to embark on your next journey? Our travel experts are standing by
        to help you plan the perfect trip tailored to your needs and budget.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        {/* CALL NOW - Converted to an anchor link with tel: schema */}
        <a 
          href="tel:+31104857673"
          className="bg-[#d4e157] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 justify-center"
        >
          <FaPhoneAlt size={14} />
          Call Now
        </a>

        {/* BOOK NOW - Triggers state management click */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-[#1e88c8] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 justify-center cursor-pointer"
        >
          <FaCalendarAlt size={14} />
          Book Now
        </button>
      </div>

      {/* CONTACT INFO */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white/90 text-xs">
        <a href="tel:+31104857673" className="flex items-center gap-2 hover:underline">
          <FaPhoneAlt />
          +31 (0) 104857673
        </a>

        <a href="mailto:info@hassaantravel.nl" className="flex items-center gap-2 hover:underline">
          <MdEmail />
          info@hassaantravel.nl
        </a>

        <div className="flex items-center gap-2">
          <BsClockFill />
          Mon-Sat 09:00 – 18:00
        </div>
      </div>

      {/* FIX: Screen wrapper to override the parent 'relative' positioning constraint */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div className="pointer-events-auto">
          {/* BOOKING MODAL COMPONENT */}
          <BookingModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>
    </section>
  );
};

export default IataRecognized;