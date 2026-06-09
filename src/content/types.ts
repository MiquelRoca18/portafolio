export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

/** A value provided in every supported language. */
export type Localized<T = string> = Record<Locale, T>;
