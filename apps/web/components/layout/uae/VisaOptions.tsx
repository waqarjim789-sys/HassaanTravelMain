import React from "react";

const visaOptionsData = {
  heading: {
    text: "UAE Visa Options",
    highlight: "Tailored to Your Needs",
  },
  description:
    "For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.",
  cards: [
    {
      title: (
        <>
          <span className="text-[#0F91D5]">Long-term visas</span>{" "}
          <span className="text-gray-900 font-bold">for business or family stays.</span>
        </>
      ),
      description:
        "The UAE’s Golden Visa is a long-term residence visa which offers the foreigners to live, work or study in the UAE. It offers exclusive benefits such as an entry visa for 6 months with multiple entries, and a renewable visa valid for 5 or 10 years.",
    },
    {
      title: (
        <>
          <span className="text-[#0F91D5]">Transit visas</span>{" "}
          <span className="text-gray-900 font-bold">for travelers</span>{" "}
          <span className="text-[#0F91D5]">passing through the UAE</span>
        </>
      ),
      description:
        "The UAE Government offers a transit visa to those transiting through UAE’s airports. A transit visa is valid only for 48 or 96 hours. It is issued free of cost to the passengers and cannot be extended.",
    },
    {
      title: (
        <>
          <span className="text-gray-900 font-bold">Visit</span>{" "}
          <span className="text-[#0F91D5]">visas</span>{" "}
          <span className="text-gray-900 font-bold">for</span>{" "}
          <span className="text-[#0F91D5]">family reunions or business meetings</span>
        </>
      ),
      description:
        "The applicant wishing to visit the UAE for either a family reunion or business meeting is granted a single-entry visa without a sponsor in the UAE. The visa validity may vary from 30 to 60 to 90 days.",
    },
  ],
  buttonText: "Find the Right UAE Visa for You",
};

const VisaOptions = () => {
  return (
    <section className="relative py-20 px-6 bg-[#eaf4fb] text-center overflow-hidden">
      
      {/* BACKGROUND IMAGE OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
      />
      
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADING SECTION */}
        <div className="text-center w-full max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {visaOptionsData.heading.text}{" "}
            <span className="text-[#0F91D5]">
              {visaOptionsData.heading.highlight}
            </span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base mt-4 max-w-4xl mx-auto leading-relaxed font-normal">
            {visaOptionsData.description}
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full items-stretch max-w-7xl mx-auto px-4 md:px-0">
          {visaOptionsData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-[2.5rem] py-6 px-8 text-center flex flex-col items-center justify-start shadow-xl shadow-sky-100/40 border border-white/60 min-h-[280px] hover:shadow-2xl transition-all duration-300"
            >
              {/* CARD TITLES */}
              <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug tracking-tight">
                {card.title}
              </h3>
              
              {/* CARD DESCRIPTIONS */}
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed font-normal max-w-md">
                {card.description}
              </p>
            </div>
          ))}
        </div>

       {/* SUBMIT/ACTION BUTTON */}
<div className="mt-14 w-full">
  <a
    href="https://wa.me/31104857673?text=Hello%20Hassaan%20Travel,%20I%20want%20information%20about%20UAE%20Visa"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#0F91D5] hover:bg-[#0d7fbf] text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-sky-300/60 text-base transition-all duration-300 tracking-wide"
  >
    {visaOptionsData.buttonText}
  </a>
</div>
      </div>
    </section>
  );
};

export default VisaOptions;