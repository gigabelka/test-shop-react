import { useLanguage } from '../context/LanguageContext';
import { dict, pickLocale } from './dict';
import type { LocalizedText } from '../types';

export function useTranslation() {
  const { lang, setLang } = useLanguage();

  const t = (key: string): string => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang];
  };

  const tl = (text: LocalizedText): string => pickLocale(text, lang);

  return { t, tl, lang, setLang };
}
