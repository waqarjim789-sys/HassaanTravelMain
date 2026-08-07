"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1120] text-white px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LEFT */}
          <div>
            {/* UPDATED: Logo image instead of text */}
            <div className="mb-4">
              <Image
                src="/assets/logo.webp"
                alt="Hassaan Travel"
                width={160}
                height={50}
                className="w-auto h-auto object-contain"
              />
            </div>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs">
              We as a company work efficiently and are very customer-oriented.
              Connection with the customer and ensuring a good trip are our
              highest priorities.
            </p>

            {/* IATA */}
            <div className="flex items-center gap-3 mt-5">
              <Image
                src="/assets/footer/iata1.webp"
                alt="iata"
                width={36}
                height={36}
              />
              <span className="text-xs text-gray-400">IATA ACCREDITED</span>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors block py-0.5">
                  Airline tickets
                </Link>
              </li>
              <li>
                <Link href="/visa" className="hover:text-white transition-colors block py-0.5">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/umrah" className="hover:text-white transition-colors block py-0.5">
                  Umrah Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors block py-0.5">
                  Hotels
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors block py-0.5">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors block py-0.5">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors block py-0.5">
                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/Algemene_Voorwaarden" className="hover:text-white transition-colors block py-0.5">
                Algemene Voorwaarden
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>

            <div className="space-y-4 text-sm text-gray-400">
              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dordtselaan+67+D,+3081+BG,+Rotterdam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-blue-400 transition-colors"
                aria-label="Open location in Google Maps"
              >
                <HiOutlineLocationMarker className="text-blue-400 text-lg mt-0.5 flex-shrink-0" />
                <span>Dordtselaan 67 D, 3081 BG, Rotterdam</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:Info@hassaantravel.nl"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                aria-label="Send email to Info@hassaantravel.nl"
              >
                <FiMail className="text-blue-400 text-lg flex-shrink-0" />
                <span>Info@hassaantravel.nl</span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+31 (0) 104857673"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                aria-label="Call +31 104857673"
              >
                <FiPhone className="text-blue-400 text-lg flex-shrink-0" />
                <span>+31 (0) 104857673</span>
              </a>

              {/* SOCIAL */}
              <div className="flex gap-2 pt-2">
                <Link
                  href="https://www.facebook.com/p/Hassaan-Travel-100070189773851/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-[#0F91D5] transition-colors text-white"
                >
                  <FaFacebookF size={12} />
                </Link>

                <Link
                  href="https://www.instagram.com/hassaantravel/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-[#0F91D5] transition-colors text-white"
                >
                  <FaInstagram size={12} />
                </Link>

                <Link
                  href="https://www.tiktok.com/@hassaantravel?_t=ZS-8zp97hXxrwG&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-[#0F91D5] transition-colors text-white"
                >
                  <FaTiktok size={12} />
                </Link>

                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-md hover:bg-[#0F91D5] transition-colors text-white"
                >
                  <FaLinkedinIn size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>Copyright © 2006 - 2026 HassaanTravel V.O.F | All rights reserved</p>

          <Link
            href="https://www.itsolutionsworldwide.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            <span>Powered by</span>
            <Image
              src="/assets/footer/logo.webp"
              alt="logo"
              width={18}
              height={18}
            />
            <span>IT SOLUTIONS WORLDWIDE</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}