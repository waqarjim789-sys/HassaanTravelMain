import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Map = () => {
  return (
    <section
  className="relative w-full py-12 sm:py-20 overflow-hidden"
  aria-labelledby="contact-section"
>
  {/* 1. ACTUAL BACKGROUND IMAGE (With 18% Opacity & Lazy Loading) */}
  <img
    src="/assets/bgimage/h2.webp"
    loading="lazy"
    alt="contact section background image"
    className="absolute inset-0 w-full h-full object-cover opacity-[0.21] z-0"
  />

      {/* CONTENT WRAPPER (IMPORTANT FIX) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* MAP */}
          <div className="order-last lg:order-first h-full">
            <iframe
              title="Hassaan Travel Rotterdam Location"
              src="https://www.google.com/maps?q=Dordtselaan+67D,+3081BG+Rotterdam,+Netherlands&output=embed"
              className="rounded-xl shadow-lg w-full h-full min-h-87.5"
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-between">
            
            {/* LOCATION CARD */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow flex gap-4 items-start">
              <MapPin className="text-green-500" />

              <div>
                <h2 id="contact-section" className="font-semibold">
                  Rotterdam
                </h2>

                <address className="text-sm text-gray-500 not-italic">
                  Dordtselaan 67D, 3081BG Rotterdam, Netherlands
                </address>

                <p className="text-sm text-gray-500">We are available:</p>

                <p className="mt-2 font-bold">
                  Monday - Saturday <br /> Sunday: Closed
                </p>
              </div>
            </article>

            {/* FORM */}
            <form
              className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow space-y-4"
              aria-label="Contact Form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 border-gray-300 p-3 rounded-lg text-sm w-full"
                />

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
                />
              </div>

              <textarea
                placeholder="Tell us about your travel plans..."
                className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
                rows={3}
              ></textarea>

              <button
                type="submit"
                className="bg-[#0F91D5] text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto"
              >
                Send Now
              </button>
            </form>

            {/* PHONE */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg">
                <Phone />
              </div>

              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <a href="tel:+31104857673" className="text-sm font-medium">
                  +31 (0) 104857673
                </a>
              </div>
            </article>

            {/* EMAIL */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg">
                <Mail />
              </div>

              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a
                  href="mailto:info@hassaantravel.nl"
                  className="text-sm font-medium"
                >
                  info@hassaantravel.nl
                </a>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;