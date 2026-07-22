import React from "react";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import SideIconDesc from "@/components/ui/SideIconDesc";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { FaClock } from "react-icons/fa"; 
import StepsToApply from "@/components/layout/umrah/StepsToApply";
import CustomTravelPackages from "@/components/ui/CustomTravelPackages";
import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import RequiredDocuments from "@/components/ui/RequiredDocuments";

const visaServices = {
  head: (
    <>
      <div className="text-center text-black">
        <div>Complete Umrah Package Services</div>
        <div>for Performers</div>
      </div>
    </>
  ),

  data: [
    {
      title: "E-Visa Services",
      desc: "Fast and easy processing of your visa for Umrah.",
      icon: <ImCreditCard />,
    },
    {
      title: "Hotel booking ",
      desc: "Choose your stay from our many offered hotels.",
      icon: <LuHeadset />,
    },
    {
      title: "Transportation",
      desc: "Get the best and trustworthy transportation service and focus on your pilgrimage.",
      icon: <FaPassport />,
    },
    {
      title: "Tickets",
      desc: "Best route and cheapest available flights according to your wishes.",
      icon: <GiLaptop />,
    },
  ],
};

const imageData = [
  "/assets/umrah/1.webp",
  "/assets/umrah/2.webp",
  "/assets/umrah/3.webp",
  "/assets/umrah/4.webp",
];

const faqImasgesLinks = [
  "/assets/umrah/faq1.webp",
  "/assets/umrah/faq2.webp",
  "/assets/umrah/faq3.webp",
  "/assets/umrah/faq4.webp",
];

const documentRequired = [
  'Valid Passport (Minimum 06 Month on return)',
  'Passport-size photograph',
  'Residential Address',
  'Accommodation address',
  'Marital Status',
  'Occupation'
];

const UmrahPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* BACKGROUND SECTION: Yeh sirf h1.webp ko dikhayega */}
      <div className="relative w-full">
        {/* ONLY ONE BACKGROUND LAYER */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
        />

        {/* CONTENT LAYER */}
        <div className="relative z-10">
          <CommonHeader
            heading="Book your Umrah easily Online with Hassaan Travel"
            desc="Fast, Easy and Reliable Umrah Services for Performers from The Netherlands and neighboring countries."
          />

          <SideIconDesc data={visaServices} />
          <RequiredDocuments documents={documentRequired} title='Umrah' rightImage="/assets/umrah/kaba.webp" />
          
          {/* OPTIMIZED COMING SOON SECTION (PADDINGS ADJUSTED TO REMOVE WHITE SPACE) */}
          <section className="relative pt-2 pb-12 overflow-hidden">
            <div className="container relative z-10 max-w-7xl mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F91D5]">
                  Popular Umrah Packages <span className="text-black">From Netherlands</span>
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                  Embark on a spiritual journey to Makkah and Madinah with our customized services.
                </p>
              </div>
<div className="flex justify-center items-center py-6 w-full">
  {/* Square shape with custom border and white background */}
  <div 
    className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 text-center hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
    style={{ border: '2px solid #d4e157' }}
  >
    
    <FaClock
      size={40}
      className="text-[#d4e157] mb-4 animate-pulse"
    />
    
    <h3 className="text-2xl font-bold text-gray-900 mb-2">
      Coming Soon
    </h3>
    
    <p className="text-gray-500 text-sm">
      We are curating the best Umrah packages for you. Stay tuned for exciting new spiritual travel deals!
    </p>
  </div>
</div>
            </div>
          </section>

        </div>
      </div>

      {/* OUTSIDE BACKGROUND SECTION */}
      <StepsToApply />

      {/* Pass mode="umrah" to CustomTravelPackages */}
      <CustomTravelPackages mode="umrah" />

      <MutipleImageRightText imageData={imageData} />

      <Faqs imagesLinks={imageData} />

      <Testimonials />
    </div>
  );
};

export default UmrahPage;