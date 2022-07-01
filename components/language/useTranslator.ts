export const useTranslator = (key: string, languageFile: { [key: string]: any }): string => {
  return languageFile[key] || key;
};
