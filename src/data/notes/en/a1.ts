import type { Note } from "../../../types/Writing";

export const notesA1: Note[] = [
  {
    id: "en-a1-note-time",
    title: "Cómo decir la hora",
    category: "Vocabulario",
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
  {
    id: "en-a1-note-do-does",
    title: "Do vs Does",
    category: "Gramática",
    content: `
      <p>Los dos arman preguntas y negaciones en presente simple. La diferencia
      es la persona:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>do</code> → I / you / we / they</li>
        <li><code>does</code> → he / she / it</li>
      </ul>
      <p class="mt-2">Con <code>does</code>, el verbo principal <strong>pierde la "s"</strong>
      (esa "s" ya la tiene "does"):</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>He works → <strong>Does</strong> he work?</li>
        <li>She lives in Neuquén → <strong>Does</strong> she live in Neuquén?</li>
        <li>I work at Maxiconsumo → <strong>Do</strong> I work at Maxiconsumo?</li>
      </ul>
      <p class="mt-2">Negación: <code>don't</code> / <code>doesn't</code> + verbo base.</p>
    `,
  },
];
