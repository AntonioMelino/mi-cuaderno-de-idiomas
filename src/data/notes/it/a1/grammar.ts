import type { Note } from "../../../../types/Writing";

export const grammarNotes: Note[] = [
  {
    id: "it-a1-note-number-elision",
    title: "Números compuestos: cuándo se cae la vocal",
    category: "Gramática",
    group: "Números y fechas",
    content: `
      <p><strong>Vocal + vocal → se cae la vocal final de la primera palabra.</strong>
      Si la decena termina en vocal (<code>venti</code>, <code>trenta</code>...)
      y la unidad empieza con vocal (<code>uno</code>, <code>otto</code>),
      se elimina esa vocal final:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>21</code> = venti + uno → <strong>ventuno</strong></li>
        <li><code>28</code> = venti + otto → <strong>ventotto</strong></li>
      </ul>
      <p class="mt-3"><strong>Vocal + consonante → se mantiene.</strong>
      Si la unidad empieza con consonante (<code>tre</code>, <code>due</code>,
      <code>quattro</code>...), la decena no pierde su vocal:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>23</code> = venti + tre → <strong>ventitré</strong></li>
      </ul>
      <p class="mt-2">Ojo con el acento: cuando <code>tre</code> queda al final
      de un número compuesto, lleva tilde (<code>tré</code>) porque ahí cae
      el golpe de voz — pasa en cualquier decena: ventitré, trentatré,
      quarantatré...</p>
    `,
  },
  {
    id: "it-a1-note-dates",
    title: "Cómo decir la fecha: artículo + número + mes",
    category: "Gramática",
    group: "Números y fechas",
    content: `
      <p>En italiano una fecha se arma como <strong>articolo + numero +
      mese</strong>, sin preposición (a diferencia del español "el 28
      <em>de</em> agosto"):</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>il</code> + <code>ventotto</code> + <code>agosto</code>
        = el 28 de agosto</li>
      </ul>
      <p class="mt-3">En una frase: <em>"Il mio compleanno è il ventotto
      agosto"</em> = Mi cumpleaños es el 28 de agosto.</p>
      <p class="mt-2">Excepción: el día 1 de cada mes usa el ordinal
      <code>primo</code> en vez del número <code>uno</code> —
      <code>il primo maggio</code> (el 1° de mayo), nunca "il uno maggio".</p>
    `,
  },
];
