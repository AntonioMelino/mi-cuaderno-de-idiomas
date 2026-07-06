import { alphabetNotes } from "./alphabet";
import { numberNotes } from "./numbers";
import { grammarNotes } from "./grammar";
import { vocabularyNotes } from "./vocabulary";

// Orden global (ver CLAUDE.md): alfabeto, números, gramática, vocabulario.
export const notesA1 = [
  ...alphabetNotes,
  ...numberNotes,
  ...grammarNotes,
  ...vocabularyNotes,
];
