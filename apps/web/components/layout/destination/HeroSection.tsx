"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';

// Data array updated (Baggage and Price removed)
const destinations = [
  { name: "Pakistan", image: "/assets/destinations/pakistan.webp", description: "Beautiful valleys & cultural heritage" },
  { name: "Afghanistan", image: "/assets/destinations/afghanistan.webp", description: "Historic landscapes & breathtaking mountains" },
  { name: "Saudi Arabia", image: "/assets/destinations/makkah.webp", description: "Holy pilgrimage destination" },
  { name: "India", image: "/assets/destinations/indi.webp", description: "Vibrant history & incredible architecture" },
  { name: "Bangladesh", image: "/assets/destinations/ban.webp", description: "Lush greenery & rich cultural riverscapes" },
  { name: "Irak (Kurdistan)", image: "/assets/destinations/iraq.webp", description: "Ancient citadels & mountainous landscapes" },
  { name: "Turkey", image: "/assets/destinations/turkey.webp", description: "Where East meets West" },
  { name: "Africa", image: "/assets/destinations/africa.webp", description: "Timeless pyramids & rich ancient history" },
];

const HeroSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleDestinations = showAll ? destinations : destinations.slice(0, 4);

  const handleDestinationBooking = (item: typeof destinations[0]) => {
    const phoneNumber = "31104857673";
    const rawMessage = `Assalam-o-Alaikum, I want to book a flight to this country:

✈️ *Country:* ${item.name}

Please let me know about the flight details, ticket availability, and booking options. Thanks!`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image src="/assets/bgimage/h2.webp" alt="" fill priority className="object-cover opacity-[0.18]" />
      </div>
        
      <div className="container mx-auto">
  <div className="text-center mb-14 max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
      Fly to Your <span className="font-bold text-[#0F91D5]">Dream Country</span>
    </h2>
    <p className="mt-4 text-gray-600 text-lg">
      Discover the world's most popular countries with us. 
      <br /> {/* Yeh line break kar dega */}
      <span className="font-semibold text-gray-800">Book now to get the best travel experience.</span>
    </p>
  </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleDestinations.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative h-52">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-0.5">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-200">
                    <IoLocationSharp size={14} className="text-red-500" /> Country
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-6 h-10 line-clamp-2">{item.description}</p>

                <button 
                  onClick={() => handleDestinationBooking(item)}
                  className="w-full bg-[#0F91D5] text-white py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="bg-white border border-blue-600 text-[#0F91D5] px-6 py-2 rounded-full font-medium transition hover:bg-blue-50 shadow-sm relative z-10"
          >
            {showAll ? "Show Less Countries ↑" : "Explore All Countries →"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;