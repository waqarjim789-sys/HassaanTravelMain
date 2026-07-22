import { navbarTranslations } from "../translations/navbar";

export function getNavbarTranslations(language: string) {
  return (
    navbarTranslations[
      language as keyof typeof navbarTranslations
    ] || navbarTranslations.en
  );
}