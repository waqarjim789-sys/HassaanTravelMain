import LegalPageShell from "@/components/ui/LegalPageShell";
import AlgemeneVoorwaarden from "@/components/ui/Algemene_Voorwaarden";

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalPageShell page="generalTerms" contentLang="nl" showHeader={false}>
      <AlgemeneVoorwaarden />
    </LegalPageShell>
  );
}