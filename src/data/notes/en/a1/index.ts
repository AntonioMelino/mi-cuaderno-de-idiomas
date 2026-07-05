import { grammarNotes } from "./grammar";
import { vocabularyNotes } from "./vocabulary";
import { expressionNotes } from "./expressions";
import { interactiveNotes } from "./interactive";

export const notesA1 = [
  ...interactiveNotes,
  ...grammarNotes,
  ...vocabularyNotes,
  ...expressionNotes,
];
