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
