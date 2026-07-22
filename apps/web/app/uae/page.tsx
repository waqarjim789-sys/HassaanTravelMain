import VisaOptions from "@/components/layout/uae/VisaOptions";
import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import RequiredDocuments from "@/components/ui/RequiredDocuments";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";

const imageLinks = [
  "/assets/uae/f1.webp",
  "/assets/uae/f2.webp",
  "/assets/uae/f3.webp",
];

const documentRequired = [
  "Valid passport with at least 6 months validity.",
  "Passport-size photos meeting UAE visa specifications.",
  "Flight details and proof of travel itinerary.",
  "Proof of accommodation or hotel booking in the UAE.",
  "Additional documents for business or family visas (if applicable).",
];

export default function UAEPage() {
  return (
    <main className="w-full text-gray-800">
      <CommonHeader
        heading="UAE Visa Services for Pakistani & Dutch Citizens"
        desc="Fast, reliable, and personalized support for your UAE visa application."
      />

      {/* UAE VISA OPTIONS SECTION */}
      <VisaOptions />

      {/* ================= EXPLORE UAE SECTION ================= */}
      <section className="relative py-16 px-4 sm:px-8 md:px-16 bg-[#eaf4fb] text-center overflow-hidden">
        {/* BACKGROUND IMAGE: Standard Cloud Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full bg-transparent py-12 flex flex-col items-center gap-7">
            {/* MAIN HERO CONTAINER */}
            <HeadDesImg
              title={
                <>
                  <span className="text-[#0F91D5]">Explore the UAE</span> with Hassaan 
                  <br /> Travel
                </>
              }
              description="Explore the vibrant land of UAE with Hassaan Travels, a hub for multinational businesses, a premium luxurious experience, and an attraction for families. Whether you have to attend business conferences, or visit world-class shopping malls and tourist attractions, Hassaan Travels is here to accommodate you through the journey fully."
              imageSrc="/assets/uae/1.webp"
            />

            {/* BOTTOM NOTICE CONTAINER */}
            {/* 🌟 FIXED: Background updated to slightly darker grey tint (bg-slate-200/80) */}
            <div className="max-w-7xl w-full mt-5 bg-slate-200/80 backdrop-blur-md border border-white/40 rounded-[2.5rem] shadow-xl shadow-slate-300/30 py-6 px-8 text-center">
              {/* Line 1: Main Rule */}
              <p className="font-bold text-[#0F91D5] text-[11px] sm:text-xs tracking-tight md:whitespace-nowrap max-w-full">
                If your visa application is canceled, the visa costs and service costs are not returned
              </p>

              {/* Line 2: Details */}
              <p className="text-gray-800 text-[10px] sm:text-xs font-medium mt-1.5 md:whitespace-nowrap max-w-full">
                For short-term tourist single-entry visa, it is valid for 30
                days and with no extension. The visa processing fee will be 250
                AED.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DUTCH CITIZENS & DOCUMENTS SECTION ================= */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden bg-[#eaf4fb]">
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

        {/* SAME LIGHT OVERLAY FOR CONSISTENCY */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"></div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="w-full bg-transparent py-6 flex flex-col items-center">
            {/* SECTION 1: UAE Visa Services for Dutch */}
            <HeadDesImg
              title={
                <>
                  UAE Visa Services <span className="text-[#0F91D5]">for Dutch</span> 
                  <br /> <span className="text-[#0F91D5]">Citizens:</span>
                </>
              }
              description="The Dutch citizens avail the benefit of no-visa travel status. When they enter the UAE, their passport is just stamped with a visit visa once they enter the UAE, which will be valid for a maximum time of 90 days."
              imageSrc="/assets/uae/2.webp"
            />
          </div>

          {/* SECTION 2: Documents Required */}
          <div className="w-full">
            <RequiredDocuments
              documents={documentRequired}
              rightImage="/assets/uae/doc.webp"
              title="UAE"
            />
          </div>
        </div>
      </section>

      <Faqs imagesLinks={imageLinks} />

      <Testimonials />
    </main>
  );
}
