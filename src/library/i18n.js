import { createI18n } from "vue-i18n-lite";
import en from "@/languages/en";
import vi from "@/languages/vi";

const i18n = createI18n({
  locale: "vi",
  fallbackLocale: "en",
  allowComposition: true,
  messages: {
    en,
    vi
  }
});

export default i18n;
