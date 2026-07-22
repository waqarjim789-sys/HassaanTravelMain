import React from "react";
import { Star } from "lucide-react";

const OurCommitment = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center">
      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-20">
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/assets/about-us/customer.webp"
            alt="Customer"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-95 object-cover"
          />

          {/* RATING CARD */}
          <div className="absolute top-6 right-0 -translate-x-1/2 bg-white rounded-xl shadow px-4 py-2 flex gap-2">
            <span className="text-blue-500 text-lg">
              <Star className="fill-blue-500" />
            </span>
            <div>
              <p className="text-[#0F91D5] font-bold text-sm">4.9</p>
              <p className="text-gray-500 text-[11px]">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
            Customer Satisfaction is <br />
            <span className="text-[#b6d84f]">Our Priority</span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            At HassaanTravel, customer satisfaction is our top priority. We
            pride ourselves on offering competitive pricing, flexible booking
            options, and expert advice, making every trip a stress-free and
            memorable experience.
          </p>

          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Our team of dedicated travel professionals works around the clock to
            ensure your journey is seamless from start to finish. We understand
            that travel is more than just reaching a destination—it's about
            creating memories that last a lifetime.
          </p>

          {/* LIST */}
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Competitive pricing with transparent costs
            </li>

            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Flexible payment and booking options
            </li>

            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Expert travel advice and consultation
            </li>

            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Personalized itineraries tailored to you
            </li>

            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              24/7 customer support throughout your journey
            </li>

            <li className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px]">
                ✓
              </span>
              Hassle-free visa and documentation assistance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default OurCommitment;
