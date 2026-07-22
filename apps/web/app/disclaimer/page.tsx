import DisclaimerData from "@/components/layout/DisclaimerData";
import CommonHeader from "@/components/ui/CommonHeader";
import Image from "next/image";

export default function Disclaimer() {
  return (
    <main className="w-full text-gray-800">
      <CommonHeader heading="Disclaimer" />

      {/* CONTENT */}
      <DisclaimerData/>
    </main>
  );
}