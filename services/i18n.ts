import i18next from "i18next";
import { getSelectedLanguage } from "locales/detectLanguage";
import { en } from "locales/en";
import { ua } from "locales/ua";
import { initReactI18next } from "react-i18next";

const languageResources = {
  en: { translation: en },
  ua: { translation: ua },
};

const initialiseI18next = async () => {
  const selectedLanguage = await getSelectedLanguage();

  i18next.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: selectedLanguage,
    fallbackLng: "en",
    resources: languageResources,
  });
};

initialiseI18next();

export default i18next;
