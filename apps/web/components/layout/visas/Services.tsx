import React from "react";
import Link from "next/link";

const servicesData = [
  {
    title: "Saudia Visa Services",
    desc: "Expert guidance for Saudi visit, business, and family visas with a streamlined, hassle-free application process.",
    img: "/assets/visa/c1.webp",
    alt: "Mount Arafat crowd pilgrimage during Hajj",
    btnText: "Apply for Saudia Visa",
    link: "/saudi-arabia",
  },
  {
    title: "Pakistani Visa Services",
    desc: "Fast and reliable processing for E-visas, tourist visas, and business entry requirements for Pakistan.",
    img: "/assets/visa/c2.webp",
    alt: "Beautiful lake and mountains landscape in Pakistan",
    btnText: "Get Pakistani Visa",
    link: "/pakistan",
  },
  {
    title: "Other Visa Services",
    desc: "Professional assistance for UAE, Umrah, and other global destinations tailored to your travel needs.",
    img: "/assets/visa/c3.webp", // Replace with your generic travel image
    alt: "Global travel destinations and visa documentation",
    btnText: "Explore More Visas",
    link: "/destinations", // Link to a general services or contact page
  },
];

const Services = () => {
  return (
    <section className="relative pb-12 pt-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* LINEAR GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </h2>

        {/* UPDATED GRID: md:grid-cols-3 for 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {servicesData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* IMAGE CONTAINER */}
              <div className="w-full h-[200px] relative rounded-2xl overflow-hidden mb-5">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-gray-950 text-xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-6 w-full">
                  <Link
                    href={item.link}
                    className="block w-full text-center bg-[#0F91D5] hover:bg-[#0d80bd] text-white text-sm font-semibold py-3.5 rounded-xl transition duration-200 shadow-sm"
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;