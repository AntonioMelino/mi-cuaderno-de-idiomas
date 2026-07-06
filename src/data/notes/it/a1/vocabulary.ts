import type { Note } from "../../../../types/Writing";

export const vocabularyNotes: Note[] = [
  {
    id: "it-a1-note-months",
    title: "Meses del año",
    category: "Vocabulario",
    group: "Meses del año",
    content: `
      <p>En italiano los meses se escriben en minúscula:</p>
      <ol class="list-decimal pl-5 space-y-1">
        <li><code>gennaio</code> = enero</li>
        <li><code>febbraio</code> = febrero</li>
        <li><code>marzo</code> = marzo</li>
        <li><code>aprile</code> = abril</li>
        <li><code>maggio</code> = mayo</li>
        <li><code>giugno</code> = junio</li>
        <li><code>luglio</code> = julio</li>
        <li><code>agosto</code> = agosto</li>
        <li><code>settembre</code> = septiembre</li>
        <li><code>ottobre</code> = octubre</li>
        <li><code>novembre</code> = noviembre</li>
        <li><code>dicembre</code> = diciembre</li>
      </ol>
    `,
  },
  {
    id: "it-a1-note-parts-of-day",
    title: "Le parti del giorno (partes del día)",
    category: "Vocabulario",
    group: "Tiempo",
    content: `
      <ul class="space-y-1.5">
        <li><code>l'alba</code> = el amanecer
        <span class="text-text-muted">(~5:00–7:00)</span></li>
        <li><code>la mattina</code> = la mañana
        <span class="text-text-muted">(~7:00–12:00)</span></li>
        <li><code>il mezzogiorno</code> = el mediodía
        <span class="text-text-muted">(12:00)</span></li>
        <li><code>il pomeriggio</code> = la tarde
        <span class="text-text-muted">(~12:00–18:00)</span></li>
        <li><code>la sera</code> = la tarde-noche
        <span class="text-text-muted">(~18:00–24:00)</span></li>
        <li><code>la notte</code> = la noche
        <span class="text-text-muted">(~24:00–5:00)</span></li>
        <li><code>la mezzanotte</code> = la medianoche
        <span class="text-text-muted">(00:00)</span></li>
      </ul>
    `,
  },
];
