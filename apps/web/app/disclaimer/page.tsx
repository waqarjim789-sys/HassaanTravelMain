import LegalPageShell from "@/components/ui/LegalPageShell";
import DisclaimerData from "@/components/layout/DisclaimerData";

export default function Disclaimer() {
  return (
    <LegalPageShell page="disclaimer" contentLang="en">
      <DisclaimerData />
    </LegalPageShell>
  );
}