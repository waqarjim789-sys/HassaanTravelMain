import LegalPageShell from "@/components/ui/LegalPageShell";
import PrivacyPolicy from "@/components/ui/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell page="privacy" contentLang="en">
      <PrivacyPolicy />
    </LegalPageShell>
  );
}