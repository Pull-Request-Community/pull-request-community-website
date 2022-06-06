import languageHE from './languages/he.json';

export const useTranslator = (key: string): string => {
  return languageHE[key] || key;
};
