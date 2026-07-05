import type { Note } from "../../../../types/Writing";

export const interactiveNotes: Note[] = [
  {
    id: "en-a1-note-time",
    title: "Cómo decir la hora",
    category: "Vocabulario",
    group: "Tiempo",
    content: `
      <p>En digital es fácil: <code>3:15</code> se lee <strong>"three fifteen"</strong>.</p>
      <p>En formato "de agujas de reloj" se usa <strong>past</strong> (después de) y
      <strong>to</strong> (antes de la hora que viene):</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>3:00</code> → It's three o'clock</li>
        <li><code>3:15</code> → It's <strong>quarter past</strong> three</li>
        <li><code>3:30</code> → It's <strong>half past</strong> three</li>
        <li><code>3:45</code> → It's <strong>quarter to</strong> four</li>
      </ul>
      <p class="mt-2">Moví los sliders y mirá cómo cambia el reloj y cómo se dice en inglés:</p>
    `,
    interactive: "clock",
  },
];
