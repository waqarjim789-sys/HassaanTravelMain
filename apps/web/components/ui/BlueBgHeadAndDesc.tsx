"use client";

import React, { useState } from "react";
import HeadingAndDesc from "./HeadingAndDesc";
import BookingModal from "@/components/ui/BookingModal";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";

const DEFAULT_WHATSAPP_LINK =
  "https://wa.me/31104857673?text=Hello%20Hassaan%20Travel";

/** Only real web links open in a new tab; tel: and mailto: stay in place. */
const isExternalWebLink = (href: string) => /^https?:\/\//i.test(href);

const BlueBgHeadAndDesc = ({
  head,
  desc,
  btnTxt,
  btnTxt2,
  btnLink,
}: {
  /** Already translated by the parent page. */
  head: string;
  desc: string;
  btnTxt: string;
  /** When set, shows a second button that opens the booking modal. */
  btnTxt2?: string;
  btnLink?: string;
  /**
   * Kept for backwards compatibility with existing pages.
   * The second button intentionally opens the booking modal,
   * so this link is not used.
   */
  btnLink2?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const primaryHref = btnLink || DEFAULT_WHATSAPP_LINK;
  const opensNewTab = isExternalWebLink(primaryHref);

  return (
    <div dir={getDirection(language)} className="mt-6 sm:mt-10 w-full mb-0">
      <div className="text-white bg-[#0F91D5] shadow-2xl px-6 py-12 md:py-16 text-center w-full">

        <div className="max-w-4xl mx-auto px-4">
          <HeadingAndDesc head={head} desc={desc} />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {/* Primary Button */}
            <a
              href={primaryHref}
              target={opensNewTab ? "_blank" : undefined}
              rel={opensNewTab ? "noopener noreferrer" : undefined}
              className="bg-white text-[#0F91D5] font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:bg-gray-100 transition-all active:scale-95"
            >
              {btnTxt}
            </a>

            {/* Secondary Button – opens the booking modal */}
            {btnTxt2 && (
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                aria-haspopup="dialog"
                className="bg-[#d4e157] hover:bg-lime-400 text-black font-semibold px-8 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2 justify-center cursor-pointer border-none active:scale-95"
              >
                {btnTxt2}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Keeps the modal aligned to the viewport, not this container */}
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