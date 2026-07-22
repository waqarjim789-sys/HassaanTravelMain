import React from 'react'
import { FaGlobe, FaPlane, FaLock, FaHeart } from "react-icons/fa";
import HeadingAndDesc from '@/components/ui/HeadingAndDesc';

const OurStory = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="inline-block bg-blue-100 text-[#0F91D5] text-xs px-3 py-1 rounded-full mb-4">
            OUR STORY
          </span>

          <div>
            <HeadingAndDesc
              head={
                <>
                  IATA Accredited <p className="text-[#0F91D5]">Partners</p>
                </>
              }
              desc={
                <p className="text-gray-600 ">
                  HassaanTravel is a leading IATA-authorized and recognized
                  travel agency, specializing in tailored travel solutions to
                  South Asia and pilgrimage journeys to Saudi Arabia. With
                  over 15 years of industry expertise, we have earned a
                  reputation for reliability, professionalism, and exceptional
                  service. <br /> <br />
                  Since our establishment in 2009, we have been committed to
                  providing seamless, hassle-free travel experiences. Our
                  dedicated team of experts offers personalized guidance,
                  ensuring that every journey aligns with your preferences,
                  schedule, and budget. <br />
                  <br /> Whether you're visiting loved ones, exploring new
                  destinations, or embarking on a sacred pilgrimage, we take
                  care of every detail—from flights and accommodations to
                  visas and transportation.
                </p>
              }
            />
          </div>

          {/* FEATURES */}
<div className="grid grid-cols-2 gap-4 mt-6">

  <div className="flex items-center gap-3 bg-[#f1f5f9] border border-gray-200 rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50">
      <FaGlobe className="text-[#3b82f6] text-[15px]" />
    </div>
    <span className="text-[14px] font-medium text-gray-700">
      IATA Certified
    </span>
  </div>

  <div className="flex items-center gap-3 bg-[#f1f5f9] border border-gray-200 rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50">
      <FaPlane className="text-[#3b82f6] text-[15px]" />
    </div>
    <span className="text-[14px] font-medium text-gray-700">
      200+ Destinations
    </span>
  </div>

  <div className="flex items-center gap-3 bg-[#f1f5f9] border border-gray-200 rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50">
      <FaHeart className="text-[#3b82f6] text-[15px]" />
    </div>
    <span className="text-[14px] font-medium text-gray-700">
      50K+ Customers
    </span>
  </div>

  <div className="flex items-center gap-3 bg-[#f1f5f9] border border-gray-200 rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50">
      <FaLock className="text-[#3b82f6] text-[15px]" />
    </div>
    <span className="text-[14px] font-medium text-gray-700">
      Secure Bookings
    </span>
  </div>

</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src="/assets/about-us/4.webp"
            alt="Map"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-125 object-cover"
          />

          <div className="absolute bottom-[-15] left-[-15] bg-white border-2 border-blue-200 rounded-xl p-5 shadow-lg w-55">
            <h3 className="text-[#0F91D5] text-2xl font-bold">
              Since <br /> 2009
            </h3>
            <p className="text-gray-500 text-xs mt-2">
              Serving travelers with dedication and excellence
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurStory