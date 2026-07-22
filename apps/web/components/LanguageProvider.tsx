"use client";
import { getNavbarTranslations } from "../lib/translator";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  detectBrowserLanguage,
  getSavedLanguage,
  saveLanguage,
  DEFAULT_LANGUAGE,
} from "../lib/language";

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  t: ReturnType<typeof getNavbarTranslations>;
};

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  changeLanguage: () => {},
  t: getNavbarTranslations(DEFAULT_LANGUAGE),
});

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const saved = getSavedLanguage();

    if (saved) {
      setLanguage(saved);
    } else {
      const browser = detectBrowserLanguage();

      setLanguage(browser);

      saveLanguage(browser);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    saveLanguage(lang);
  };

  return (
  <LanguageContext.Provider
  value={{
    language,
    changeLanguage,
    t: getNavbarTranslations(language),
  }}
>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}