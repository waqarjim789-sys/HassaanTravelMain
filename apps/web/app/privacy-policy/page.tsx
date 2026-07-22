import CommonHeader from "@/components/ui/CommonHeader";
import PrivacyPolicy from "@/components/ui/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full text-gray-800">
      <CommonHeader heading="Privacy Policy" />
      <PrivacyPolicy />
    </main>
  );
}