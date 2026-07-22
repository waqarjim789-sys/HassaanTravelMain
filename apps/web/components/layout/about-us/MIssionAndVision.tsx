import SideIconDesc from "@/components/ui/SideIconDesc";
import { Eye, Target } from "lucide-react";
import React from "react";

const data = {
  head: (
    <span className="text-black">
      Mission, Vision & <span className="text-[#0F91D5]">Values</span>
    </span>
  ),
  details:
    "Guided by our core principles, we strive to deliver exceptional travel experiences that exceed expectations",

  data: [
    {
      icon: <Target />,
      title: "Our Mission",
      desc: "To provide seamless, personalized, and affordable travel solutions that connect people to their loved ones, sacred destinations, and dream locations across the globe. We are committed to delivering exceptional service, building lasting relationships, and making every journey a memorable experience through expertise, innovation, and unwavering dedication to customer satisfaction.",
    },
    {
      icon: <Eye />,
      title: "Our Vision",
      desc: "To become the most trusted and preferred travel partner in Europe for South Asian and Middle Eastern destinations, recognized globally for our professionalism, reliability, and customer-first approach. We envision a future where every traveler experiences the joy of hassle-free journeys, supported by cutting-edge technology and compassionate human service.",
    },
  ],
};

const MIssionAndVision = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center bg-white">

      {/* ✅ UPDATED BACKGROUND IMAGE */}
      <img
        src="/assets/about-us/3.webp"
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18] pointer-events-none z-0"
      />

      {/* CONTENT Wrapper to ensure text stays above the background */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <SideIconDesc data={data} />
      </div>
    </section>
  );
};

export default MIssionAndVision;