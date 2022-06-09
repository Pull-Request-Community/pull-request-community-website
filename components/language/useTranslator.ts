export const useTranslator = (key: string, languageFile): string => {
  return languageFile[key] || key;
};
