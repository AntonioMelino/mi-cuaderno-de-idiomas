// Tema visual por idioma: banner de fondo, subtítulo y elementos culturales.
// Al sumar un idioma nuevo, se agrega su entrada acá (y si no, cae en el fallback).
export interface LanguageTheme {
  hero: string; // ruta a la imagen de banner
  flag: string; // emoji de bandera
  tagline: string; // frase corta temática
  motifs: string[]; // elementos culturales para la cinta decorativa
  city: string; // nombre del lugar icónico mostrado
}

export const languageThemes: Record<string, LanguageTheme> = {
  en: {
    hero: "/images/en-hero.png",
    flag: "🇬🇧",
    tagline: "Tea, Big Ben & phrasal verbs",
    motifs: ["Big Ben", "Union Jack", "Double-decker", "Fish & chips"],
    city: "Londres",
  },
  it: {
    hero: "/images/it-hero.png",
    flag: "🇮🇹",
    tagline: "Colosseo, Ferrari e spaghetti",
    motifs: ["Colosseo", "Tricolore", "Ferrari", "Spaghetti"],
    city: "Roma",
  },
};

export const fallbackTheme: LanguageTheme = {
  hero: "/images/en-hero.png",
  flag: "🌍",
  tagline: "Un idioma nuevo por descubrir",
  motifs: ["Apuntes", "Writings", "Práctica"],
  city: "",
};

export function getTheme(code: string): LanguageTheme {
  return languageThemes[code] ?? fallbackTheme;
}
