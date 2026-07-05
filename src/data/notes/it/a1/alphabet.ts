import type { Note } from "../../../../types/Writing";

export const alphabetNotes: Note[] = [
  {
    id: "it-a1-note-alphabet",
    title: "Alfabeto italiano (21 letras)",
    category: "Pronunciación",
    group: "Alfabeto",
    content: `
      <ul class="grid grid-cols-3 gap-1">
        <li><code>A</code> = a</li>
        <li><code>B</code> = bi</li>
        <li><code>C</code> = ci</li>
        <li><code>D</code> = di</li>
        <li><code>E</code> = e</li>
        <li><code>F</code> = effe</li>
        <li><code>G</code> = gi</li>
        <li><code>H</code> = acca</li>
        <li><code>I</code> = i</li>
        <li><code>L</code> = elle</li>
        <li><code>M</code> = emme</li>
        <li><code>N</code> = enne</li>
        <li><code>O</code> = o</li>
        <li><code>P</code> = pi</li>
        <li><code>Q</code> = cu</li>
        <li><code>R</code> = erre</li>
        <li><code>S</code> = esse</li>
        <li><code>T</code> = ti</li>
        <li><code>U</code> = u</li>
        <li><code>V</code> = vu</li>
        <li><code>Z</code> = zeta</li>
      </ul>
    `,
  },
  {
    id: "it-a1-note-alphabet-foreign",
    title: "Letras extranjeras (J, K, W, X, Y)",
    category: "Pronunciación",
    group: "Alfabeto",
    content: `
      <p>No son parte del alfabeto italiano tradicional (21 letras), pero
      aparecen en palabras extranjeras y siglas:</p>
      <ul class="grid grid-cols-2 gap-1 mt-2">
        <li><code>J</code> = i lunga</li>
        <li><code>K</code> = cappa</li>
        <li><code>W</code> = doppia vu</li>
        <li><code>X</code> = ics</li>
        <li><code>Y</code> = ipsilon (i greca)</li>
      </ul>
    `,
  },
];
