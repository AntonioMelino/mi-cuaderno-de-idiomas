import type { Language, Writing, Note } from "../types/Writing";
import { writingsA1 as englishA1 } from "./writings/en/a1";
import { writingsA1 as italianA1 } from "./writings/it/a1";
import { notesA1 as englishNotesA1 } from "./notes/en/a1";
import { notesA1 as italianNotesA1 } from "./notes/it/a1";

// Un idioma nuevo = un bloque acá + una carpeta en data/writings/<code>/ y data/notes/<code>/
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
      { code: "A1", status: "active" },
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

// Mapa idioma -> nivel -> apuntes de gramática/vocabulario. Mismo patrón.
export const notesByLanguage: Record<string, Record<string, Note[]>> = {
  en: { A1: englishNotesA1 },
  it: { A1: italianNotesA1 },
};
