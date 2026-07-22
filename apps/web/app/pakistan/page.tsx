/* eslint-disable @next/next/no-img-element */
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import SideIconDesc from "@/components/ui/SideIconDesc";
import Image from "next/image"; // Next.js Image component for second section background

const visaType = {
  head: "Which Visa Do You Need?",
  data: [
    {
      title: "Tourist Visa",
      desc: "Ideal for leisure travel and exploring the Netherlands.",
      icon: <ImCreditCard />,
    },
    {
      title: "Business Visa",
      desc: "For meetings, events, and professional engagements.",
      icon: <LuHeadset />,
    },
    {
      title: "Family Visit Visa",
      desc: "Reunite with loved ones living in the Netherlands.",
      icon: <FaPassport />,
    },
    {
      title: "Student Visa",
      desc: "For academic or training opportunities (if applicable).",
      icon: <GiLaptop />,
    },
  ],
};

export default function Pakistan() {
  return (
    <main className="w-full overflow-x-hidden bg-gray-50/30">
      <CommonHeader
        heading={"Pakistani Family & Tourist Visa Services \n Hassaan Travel - Simple & Fast Processing"}
        desc="Expert Visa Services for Pakistani and UAE Travelers."
      />

      {/* ================= CARD 1 SECTION WITH FULL BG OVERLAY ================= */}
      <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />
        
        {/* CONTENT CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
          {/* ===== TOP CARD ===== */}
          <div className="w-full bg-gray-100/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm border border-white/40 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-[62%] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                What is a <span className="text-[#0F91D5]">Pakistani Family</span>
                <span className="text-[#0F91D5] block mt-1">Visa?</span>
              </h2>
              <div className="space-y-3 text-slate-600 text-[15px] leading-relaxed">
                <p>
                  A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan and return with their family members who are living in Pakistan.
                </p>
                <p>
                  A Pakistani Family Visa is usually granted to a spouse, children, parents, etc.
                </p>
                <p>
                  We offer you different types of Pakistani Family Visas and our expert services to help you through the visa application process.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-[38%] aspect-[1.4/1] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
              <img 
                src="/assets/pakistan/p1.webp" 
                alt="Family traveling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARD 2 SECTION WITH FULL NEXT.JS IMAGE BG ================= */}
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
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
          {/* ===== REQUIRED DOCUMENTS CARD ===== */}
          <div className="w-full bg-gray-100/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm border border-white/40 flex flex-col-reverse md:flex-row items-stretch justify-between gap-10">
            <div className="w-full md:w-[62%] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5">
                The <span className="text-[#0F91D5]">Required Documents</span> for
                <span className="block mt-1">Pakistan Family Visa:</span>
              </h2>
              <ol className="space-y-3 text-slate-600 text-[14.5px] leading-relaxed list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-slate-800 min-w-4.5">1.</span>
                  <span>Passport (Valid for at least 6 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-slate-800 min-w-4.5">2.</span>
                  <span>Recent passport photo (passport photo must not be older than 6 months)</span>
                </li>
                <li className="flex items-start gap-2 flex-col">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-slate-800 min-w-4.5">3.</span>
                    <span>If you are of Pakistani origin or married to a Pakistani origin, one of the following combinations:</span>
                  </div>
                  <ul className="w-full pl-6 mt-1.5 space-y-1.5 list-disc marker:text-slate-400">
                    <li className="pl-1">A Pakistani ID card (NIC)</li>
                    <li className="pl-1">An old/expired Pakistani passport</li>
                    <li className="pl-1">Birth certificate</li>
                    <li className="pl-1">
                      Children under the age of 17 must provide valid passports from both parents, at least one Pakistani ID of the father or mother)
                    </li>
                    <li className="pl-1">
                      Marriage certificate, Marriage book, Nikkahnama or BRP extract with mention of your partner in combination with your partner&apos;s Pakistani ID (NIC, MNIC, NICOP, or POC) or your Pakistani passport.
                    </li>
                  </ul>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-slate-800 min-w-4.5">4.</span>
                  <span>For children under the age of 17, a &ldquo;Parents Consent Form&rdquo; is required and it must be completed and signed by both parents.</span>
                </li>
              </ol>
            </div>
            
            <div className="w-full md:w-[38%] aspect-[1/1.15] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 self-center">
              <img 
                src="/assets/pakistan/p2.webp" 
                alt="Required documents" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HEADING & DABBE (UNCHANGED) ===== */}
      <SideIconDesc data={visaType} />

      {/* CARDS */}
      <Faqs
        imagesLinks={[
          "/assets/pakistan/p1.webp",
          "/assets/pakistan/p2.webp",
          "/assets/pakistan/p2.webp",
        ]}
      />

      <Testimonials />
    </main>
  );
}