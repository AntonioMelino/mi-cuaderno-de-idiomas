import { alphabetNotes } from "./alphabet";
import { numberNotes } from "./numbers";
import { grammarNotes } from "./grammar";
import { vocabularyNotes } from "./vocabulary";
import { expressionNotes } from "./expressions";
import { interactiveNotes } from "./interactive";

// Mismo criterio que en italiano: alfabeto y números primero (fundamentos),
// después el resto de categorías.
export const notesA1 = [
  ...alphabetNotes,
  ...numberNotes,
  ...interactiveNotes,
  ...grammarNotes,
  ...vocabularyNotes,
  ...expressionNotes,
];
