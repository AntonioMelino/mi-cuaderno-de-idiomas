import type { Language, Writing } from "../types/Writing";
import { writingsA1 as englishA1 } from "./writings/en/a1";
import { writingsA1 as italianA1 } from "./writings/it/a1";

// Un idioma nuevo = un bloque acá + una carpeta en data/writings/<code>/
export const languages: Language[] = [
  {
    code: "en",
    name: "Inglés",
    levels: [
      { code: "A1", status: "active" },
      { code: "A2", status: "locked" },
      { code: "B1", status: "locked" },
      { code: "B2", status: "locked" },
      { code: "C1", status: "locked" },
    ],
  },
  {
    code: "it",
    name: "Italiano",
    levels: [
      { code: "A1", status: "locked" },
      { code: "A2", status: "locked" },
      { code: "B1", status: "locked" },
    ],
  },
];

// Mapa idioma -> nivel -> writings. Al sumar un nivel, se agrega una entrada acá.
export const writingsByLanguage: Record<string, Record<string, Writing[]>> = {
  en: { A1: englishA1 },
  it: { A1: italianA1 },
};
