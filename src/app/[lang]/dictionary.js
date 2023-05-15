import "server-only";

const dictionaries = {
  en: () =>
    import("../../../public/languages/en/onboarding.json").then(
      (module) => module.default
    ),
  bn: () =>
    import("../../../public/languages/bn/onboarding.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => dictionaries[locale]();
