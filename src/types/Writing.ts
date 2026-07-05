export interface Writing {
  id: string;
  title: string;
  date: string;
  words: number;
  /** HTML permitido: <span class="mistake"> para marcar errores */
  original: string;
  /** HTML permitido: <span class="fix"> para marcar correcciones */
  corrected: string;
  teacherNote: string;
}

export interface Level {
  code: string; // "A1", "A2", "B1"...
  status: "active" | "locked" | "done";
}

export interface Language {
  code: string; // "en", "it"...
  name: string; // "Inglés", "Italiano"...
  levels: Level[];
}

export type NoteCategory =
  | "Gramática"
  | "Vocabulario"
  | "Pronunciación"
  | "Expresiones";

// Orden fijo en el que se muestran las pestañas de categoría, sin importar
// el orden en el que aparecen las notas en los datos.
export const NOTE_CATEGORY_ORDER: NoteCategory[] = [
  "Gramática",
  "Vocabulario",
  "Pronunciación",
  "Expresiones",
];

export interface Note {
  id: string;
  title: string;
  category: NoteCategory;
  /** Subtítulo opcional para agrupar notas relacionadas dentro de una
   * categoría (ej: "Números"). Si no está presente, la nota se muestra suelta. */
  group?: string;
  /** HTML simple: explicación + ejemplos */
  content: string;
  /** Si está presente, se renderiza un widget interactivo debajo del content */
  interactive?: "clock";
}
