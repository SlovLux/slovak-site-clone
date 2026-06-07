import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { catalogHu } from "@/data/catalogTranslations";
import { uiTranslations } from "./translations";

export type Lang = "sk" | "hu";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tx: (sk: string) => string; // dynamic translation for catalog strings
}

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "sk";
    const stored = localStorage.getItem("lang");
    return stored === "hu" ? "hu" : "sk";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string) => {
      const dict = uiTranslations[lang] || {};
      const fallback = uiTranslations.sk || {};
      return (dict as any)[key] ?? (fallback as any)[key] ?? key;
    },
    [lang]
  );

  const tx = useCallback(
    (sk: string) => {
      if (lang === "sk") return sk;
      return catalogHu[sk] || sk;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
