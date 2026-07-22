"use client";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../LanguageProvider";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import BookingModal from "./BookingModal"; 

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false);
  const [desktopVisaOpen, setDesktopVisaOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const desktopDropdownRef = useRef<HTMLDivElement>(null);


  // Close desktop dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setDesktopVisaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* 🔹 Responsive Position: Mobile pe relative, Desktop/Tablet (md+) pe fixed */}
      <header className="relative md:fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm z-50">
        
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/assets/logo.webp"
            alt="Hassaan Travel"
            width={160}
            height={40}
            className="h-11 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP & TABLET NAV */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-700 font-medium">
          <Link href="/destinations" className="hover:text-[#0F91D5] transition">
            {t.destinations}
          </Link>

          <Link href="/umrah" className="hover:text-[#0F91D5] transition">
            Umrah
          </Link>

          {/* DYNAMIC VISA DROPDOWN */}
          <div 
            ref={desktopDropdownRef}
            className="relative group"
            onMouseEnter={() => setDesktopVisaOpen(true)}
            onMouseLeave={() => setDesktopVisaOpen(false)}
          >
            <div className="flex items-center gap-1 text-gray-700 font-medium py-2">
              <Link 
                href="/visa" 
                className="hover:text-[#0F91D5] transition cursor-pointer"
              >
                {t.visa}
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setDesktopVisaOpen(!desktopVisaOpen);
                }}
                className="p-1 cursor-pointer hover:text-[#0F91D5] flex items-center border-none bg-transparent outline-none"
              >
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${desktopVisaOpen ? "rotate-180" : ""}`} 
                />
              </button>
            </div>

            {/* DROPDOWN MENU PANEL */}
            <div className={`absolute left-0 top-full mt-1 w-56 bg-white shadow-lg rounded-lg p-2 transition-all duration-200 z-50 ${
              desktopVisaOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
              <Link
                href="/pakistan"
                onClick={() => setDesktopVisaOpen(false)}
                className="block text-sm text-gray-600 hover:text-[#0F91D5] hover:bg-blue-50 px-4 py-2 rounded transition"
              >
                {t.pakistanVisa}
              </Link>

              <Link
                href="/saudi-arabia"
                onClick={() => setDesktopVisaOpen(false)}
                className="block text-sm text-gray-600 hover:text-[#0F91D5] hover:bg-blue-50 px-4 py-2 rounded transition"
              >
                {t.saudiVisa}
              </Link>

              <Link
                href="/destinations"
                onClick={() => setDesktopVisaOpen(false)}
                className="block text-sm text-gray-600 hover:text-[#0F91D5] hover:bg-blue-50 px-4 py-2 rounded transition"
              >
                {t.otherVisa}
              </Link>
            </div>
          </div>

          <Link href="/packages" className="hover:text-[#0F91D5] transition">
            {t.packages}
          </Link>

          <Link href="/about-us" className="hover:text-[#0F91D5] transition">
            {t.about}
          </Link>

          <Link href="/contact-us" className="hover:text-[#0F91D5] transition">
            {t.contact}
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* PHONE */}
          <a
            href="tel:+31104857673"
            className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="Call +31 (0) 10 485 7673"
          >
            <Phone size={16} className="text-black fill-current" />
            <span>+31 (0) 10 485 7673</span>
          </a>

         {/* DESKTOP BOOK NOW BUTTON */}
<div className="flex items-center gap-3">
    <LanguageSwitcher />         
<button 
  onClick={() => setIsModalOpen(true)}
  className="hidden md:block bg-[#d4e157] hover:bg-[#d4e157] text-black px-6 py-2 rounded-full text-sm font-extrabold transition cursor-pointer"
>
  {t.bookNow}
</button>
</div>
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE DRAWER MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-2 md:hidden z-50">
            <Link className="text-gray-700 font-medium py-2" href="/destinations" onClick={() => setOpen(false)}>
              Destinations
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/umrah" onClick={() => setOpen(false)}>
              Umrah
            </Link>

            {/* MOBILE VISA SECTION */}
            <div className="w-full flex flex-col items-center">
              <div className="relative flex items-center justify-center py-2 text-gray-700 font-medium">
                <Link 
                  href="/visa" 
                  onClick={() => setOpen(false)}
                  className="hover:text-[#0F91D5]"
                >
                  Visa
                </Link>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileVisaOpen(!mobileVisaOpen);
                  }}
                  className="absolute left-full ml-1 p-1 cursor-pointer hover:text-[#0F91D5] flex items-center border-none bg-transparent outline-none"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileVisaOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {mobileVisaOpen && (
                <div className="flex flex-col items-center gap-3 mt-2 mb-2 bg-gray-50/50 w-full py-2">
                  <Link href="/pakistan" className="text-sm text-gray-600 hover:text-[#0F91D5]" onClick={() => setOpen(false)}>
                    Pakistan Visa
                  </Link>
                  <Link href="/netherland" className="text-sm text-gray-600 hover:text-[#0F91D5]" onClick={() => setOpen(false)}>
                    Netherlands Visa
                  </Link>
                  <Link href="/uae" className="text-sm text-gray-600 hover:text-[#0F91D5]" onClick={() => setOpen(false)}>
                    UAE Visa
                  </Link>
                </div>
              )}
            </div>

            <Link className="text-gray-700 font-medium py-2" href="/packages" onClick={() => setOpen(false)}>
              Package
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/about-us" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link className="text-gray-700 font-medium py-2" href="/contact-us" onClick={() => setOpen(false)}>
              Contact
            </Link>

            {/* MOBILE BOOK NOW */}
            <div className="pt-4 border-t w-full flex flex-col items-center mt-3">
              <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                <Phone size={14} className="text-black fill-current" />
                <a href="tel:+31104857673" className="hover:text-black transition-colors">
                  +31 (0) 10 485 7673
                </a>
              </div>

              <button 
                onClick={() => {
                  setOpen(false); 
                  setIsModalOpen(true);
                }}
                className="bg-[#d4e157] hover:bg-[#d4e157] px-6 py-2 rounded-full text-sm font-extrabold text-black hover:bg-lime-500 transition cursor-pointer"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Connected Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}