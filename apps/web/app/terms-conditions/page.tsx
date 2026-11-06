import LegalPageShell from "@/components/ui/LegalPageShell";
import TermsAndConditions from "@/components/ui/TermsAndConditions";

export default function Terms() {
  return (
    <LegalPageShell page="terms" contentLang="en">
      <TermsAndConditions />
    </LegalPageShell>
  );
}