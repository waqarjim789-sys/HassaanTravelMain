import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import Services from "@/components/layout/visas/Services";
import CommonHeader from "@/components/ui/CommonHeader";
import CenterIconHeadingDesc from "@/components/ui/CenterIconHeadingDesc";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import Map from "@/components/ui/Map";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";


const imageData = [
  "/assets/visa/why-1.webp",
  "/assets/visa/why-2.webp",
  "/assets/visa/why-3.webp",
  "/assets/visa/why-4.webp",
];

const faqImasgesLinks = [
  "/assets/visa/f1.webp",
  "/assets/visa/f2.webp",
  "/assets/visa/f3.webp",
  "/assets/visa/f4.webp",
];
export default function UmrahPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO SECTION */}
     <CommonHeader
        heading={"Affordable Visa Services for Travelers in the \nNetherlands and neighbouring countries"}
        desc="Get your KSA, Pakistani and many other visas quickly  and easily with Hassaan Travel."
      />


      {/* OUR SERVICES SECTION */}

      <Services />

      <MutipleImageRightText imageData={imageData} />


      {/* <FaqSection /> */}
      <Faqs imagesLinks={faqImasgesLinks} />


      {/* <ContactForm /> */}
      <Map />

      {/* <TestimonialsSection /> */}
      <Testimonials />

      {/* 🔥 VISA CTA SECTION */}
<BlueBgHeadAndDesc
  head="Ready to Apply for Your Visa?"
  desc="Our travel experts are ready to guide you through the visa process quickly and smoothly. Contact us now for instant support."
  btnTxt="Call Now"
  btnTxt2="Book Now"
  btnLink="tel:+9231104857673"
  btnLink2="https://wa.me/31104857673?text=Hello%20Hassaan%20Travel,%20I%20want%20to%20book%20a%20visa"
/>

      {/* <ContactSection /> */}
    </main>
  );
}
