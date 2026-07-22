"use client"; 

import React, { useState } from "react";
import HeadingAndDesc from "./HeadingAndDesc";
import BookingModal from "@/components/ui/BookingModal"; 

const BlueBgHeadAndDesc = ({
  head,
  desc,
  btnTxt,
  btnTxt2,
  btnLink,
}: {
  head: string;
  desc: string;
  btnTxt: string;
  btnTxt2?: string;
  btnLink?: string;
  btnLink2?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-6 sm:mt-10 w-full mb-0">
      <div className="text-white bg-[#0F91D5] shadow-2xl px-6 py-12 md:py-16 text-center w-full">
        
        <div className="max-w-4xl mx-auto px-4">
          <HeadingAndDesc head={head} desc={desc} />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {/* Primary Button */}
            <a
              href={btnLink || "https://wa.me/31104857673?text=Hello%20Hassaan%20Travel"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F91D5] font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:bg-gray-100 transition-all active:scale-95"
            >
              {btnTxt}
            </a>

            {/* Secondary Button */}
            {btnTxt2 && (
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="bg-[#d4e157] hover:bg-[#d4e157] text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:bg-gray-100 transition flex items-center gap-2 justify-center cursor-pointer border-none"
              >
                {btnTxt2}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FIX: This wrapper forces the absolute modal to align to the viewport screen, not the parent container */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div className="pointer-events-auto">
          <BookingModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </div>
      </div>
    </div>
  );
};

export default BlueBgHeadAndDesc;