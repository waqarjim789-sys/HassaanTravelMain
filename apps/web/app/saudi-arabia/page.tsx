import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import SideIconDesc from "@/components/ui/SideIconDesc";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";

const visaType = {
  head: "Which Visa Do You Need?",
  data: [
    {
      title: "Tourist Visa | Umrah Visa",
      desc: "Ideal for leisure travel and exploring Saudi Arabia.",
      icon: <ImCreditCard />,
    },
    {
      title: "Umrah Visa",
      desc: "Your gateway to a blessed Umrah experience in the holy cities of Makkah and Madinah.",
      icon: <FaPassport />,
    },
    
  ],
};

const imageLinks = [
  "/assets/netherland/net1.webp",
  "/assets/netherland/travel-3.webp",
  "/assets/netherland/travel-3.webp",
];

export default function SaudiArabiaPage() {
  return (
    <main className="w-full overflow-x-hidden bg-gray-50/30">
      <CommonHeader
        heading={"Saudi Arabia Visa Services for Pakistani & UAE \n Citizens"}
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      {/* ================= HERO SECTION WITH CUSTOM OVERLAY ================= */}
      <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />
        
        {/* CONTENT CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex flex-col gap-14">
          
          {/* ================= SECTION 1 ================= */}
          <div className="w-full">
            <HeadDesImg
              title={
                <>
                  Simplifying Your <span className="text-[#0F91D5]">Saudi Arabia</span>
                  <span className="text-[#0F91D5] block mt-1">Visa Process</span>
                </>
              }
              description="Citizens of the UAE can travel to Saudi Arabia without a visa for short stays, typically up to 90 days within a 180-day period, for tourism or business purposes."
              imageSrc="/assets/umrah/kaba.webp"
            />
          </div>

          {/* ================= NOTE (ORIGINAL SIZE, PERFECTLY CENTERED) ================= */}
          <div className="max-w-210 w-full bg-gray-200/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm py-3.5 px-6 text-center mt-4 mx-auto">
            {/* Line 1: Main Rule */}
            <p className="font-bold text-[#0F91D5] text-[10.5px] tracking-tight whitespace-nowrap overflow-x-auto max-w-full">
              If your visa application is canceled, the visa costs and service costs are not returned
            </p>

            {/* Line 2: Details */}
            <p className="text-gray-800 text-[9.5px] font-medium mt-0.5 whitespace-nowrap overflow-x-auto max-w-full">
              For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE SECTIONS CONTAINER (FULL WIDTH BG) ================= */}
      <section className="relative w-full py-16 px-6 overflow-hidden">
        
        {/* BACKGROUND IMAGE: H2 Custom Background */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <Image
            src="/assets/bgimage/h2.webp"
            alt="Background Pattern"
            fill
            priority
            className="object-cover opacity-[0.18]"
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14 w-full">
          
          {/* ================= VISA TYPES (MAXIMUM STRETCH OUTWARD) ================= */}
          <div className="w-full -mx-4 md:-mx-6 px-4 md:px-6 lg:max-w-none lg:w-auto">
            <SideIconDesc data={visaType} />
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTIONS ================= */}
      <Faqs imagesLinks={imageLinks} />
      <Testimonials />
    </main>
  );
}