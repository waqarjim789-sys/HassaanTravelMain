import { IoLocationSharp } from "react-icons/io5"; // Location Pin Icon
import { BsFillAirplaneFill } from "react-icons/bs"; // Stylized Blue Plane Icon matching the image
// import TestimonialsSection from "../components/ui/TestimonialsSection";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import HeroSection from "@/components/layout/destination/HeroSection";
import TicketRequestForm from "@/components/layout/destination/TicketRequestForm";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";



export default function Destination() {
  return (
    <main className="w-full text-gray-800">
      <CommonHeader
        heading="Your Journey Starts Here: Book Your Tickets Online with Ease"
        desc="Fast, Secure, and Reliable Ticket Booking for Every Traveler"
      />

      {/* DESTINATION SECTION */}

      <HeroSection />

      {/* FORM SECTION */}
      <TicketRequestForm />

      {/* TESTIMONIALS */}
      {/* <TestimonialsSection /> */}
      <Testimonials />

      {/* CTA SECTION */}
      <BlueBgHeadAndDesc
        head="Ready to Take Off?"
        desc="Join thousands of satisfied travelers who trust Hassaan Travel for their flight bookings"
        btnTxt="Start Booking Now →"
      />
    </main>
  );
}
