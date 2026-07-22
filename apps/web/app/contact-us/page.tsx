import Faqs from "@/components/ui/Faqs";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import Map from "@/components/ui/Map";

const imageLinks = [
  "/assets/contact-us/1.webp",
  "/assets/contact-us/2.webp",
  "/assets/contact-us/3.webp",
];

export default function ContactPage() {
  return (
    <>
      <CommonHeader
        heading={"Get in touch with us"}
        desc="Our travel experts are ready to help you every step of the way"
      />

      {/* <ContactForm /> */}
      <Map />

      {/* ✅ FAQ with BG */}
      <Faqs
        imagesLinks={imageLinks}
        // bgImage="/assets/about-us/3.webp"
      />

      {/* ✅ Testimonials with SAME BG */}
      <Testimonials bgImage="/assets/about-us/3.webp" />
    </>
  );
}
