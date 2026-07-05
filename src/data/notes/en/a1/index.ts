import { alphabetNotes } from "./alphabet";
import { numberNotes } from "./numbers";
import { grammarNotes } from "./grammar";
import { vocabularyNotes } from "./vocabulary";
import { expressionNotes } from "./expressions";
import { interactiveNotes } from "./interactive";

// Mismo criterio que en italiano: alfabeto y números primero (fundamentos),
// después el resto de categorías. interactiveNotes va pegado después de
// vocabularyNotes porque comparte el grupo "Tiempo" con las últimas dos
// notas de ese archivo (Partes del día / Rutina diaria) — así el
// sub-encabezado de grupo queda contiguo y no se repite.
export const notesA1 = [
  ...alphabetNotes,
  ...numberNotes,
  ...grammarNotes,
  ...vocabularyNotes,
  ...interactiveNotes,
  ...expressionNotes,
];
