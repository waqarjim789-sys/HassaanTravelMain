export const LANGUAGES = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    code: "nl",
    name: "Nederlands",
    flag: "🇳🇱",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "🇩🇪",
  },
  {
    code: "fr",
    name: "Français",
    flag: "🇫🇷",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "🇮🇹",
  },
  {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
  },
  {
    code: "ur",
    name: "اردو",
    flag: "🇵🇰",
  },
];

export const DEFAULT_LANGUAGE = "en";

export function getSavedLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return (
    localStorage.getItem("ht-language") ||
    DEFAULT_LANGUAGE
  );
}

export function saveLanguage(language: string) {
  localStorage.setItem("ht-language", language);
}

export function detectBrowserLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browser = navigator.language
    .toLowerCase()
    .substring(0, 2);

  const supported = LANGUAGES.find(
    (l) => l.code === browser
  );

  return supported
    ? supported.code
    : DEFAULT_LANGUAGE;
}