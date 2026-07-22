import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import MapForm from "../layout/home/MapForm";

const Map = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-20 overflow-hidden"
      aria-labelledby="contact-section"
    >
      {/* Background Image */}
      <img
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt="contact section background image"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.21] z-0"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* MAP SECTION - FIX: Using Google Maps Embed for Hassaan Travel */}
          <div className="order-last lg:order-first h-full">
          <iframe
  title="Hassaan Travel Rotterdam Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.2117306042633!2d4.490947776494405!3d51.893600071903734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43375f7feb767%3A0xf6bc60deb9b9bbe4!2sHassaan%20Travel!5e0!3m2!1sen!2s!4v1781779994623!5m2!1sen!2s"
  className="rounded-xl shadow-lg w-full h-full min-h-[350px]"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-between">
            {/* LOCATION CARD */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow flex gap-4 items-start">
              <MapPin className="text-green-500 shrink-0" />
              <div>
                <h2 id="contact-section" className="font-semibold text-lg">
                  Hassaan Travel
                </h2>
             <address className="text-sm text-gray-500 not-italic">
  <a
    href="https://www.google.com/maps/place/Hassaan+Travel/@51.893538,4.4934402,21z/data=!4m6!3m5!1s0x47c43375f7feb767:0xf6bc60deb9b9bbe4!8m2!3d51.8936001!4d4.4935227!16s%2Fg%2F11cks0qrvy?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    <strong>Hassaan Travel</strong><br />
    Dordtselaan 67D, 3081 BG Rotterdam, Netherlands
  </a>
</address>

                <p className="text-sm text-gray-500 mt-1">We are available:</p>
                <p className="mt-1 font-bold text-sm sm:text-base">
                  Monday - Saturday: 09:00 AM - 18:00 PM <br /> Sunday: Closed
                </p>
              </div>
            </article>

            {/* FORM */}
            <MapForm />

            {/* PHONE */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg">
                <Phone />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <a href="tel:+31104857673" className="text-sm font-medium">
                  +31 10 485 7673
                </a>
              </div>
            </article>

            {/* EMAIL */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg">
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