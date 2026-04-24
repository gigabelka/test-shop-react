import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang } from '../types';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'shop.lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ru';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru' || stored === 'en') return stored;
  const nav = window.navigator.language?.toLowerCase() ?? '';
  return nav.startsWith('ru') ? 'ru' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
