import type { Note } from "../../../../types/Writing";

export const expressionNotes: Note[] = [
  {
    id: "en-a1-note-greetings",
    title: "Saludos y frases de cortesía",
    category: "Expresiones",
    group: "Saludos",
    content: `
      <ul class="space-y-1">
        <li><code>hello</code> = hola</li>
        <li><code>good afternoon</code> = buenas tardes</li>
        <li><code>how are you?</code> = ¿cómo estás? →
          <em>fine, thanks</em> / <em>thank you</em> /
          <em>very well, thanks, and you?</em></li>
        <li><code>bye</code> / <code>goodbye</code> /
          <code>see you next class</code> = nos vemos la próxima clase</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-wear-requests",
    title: "Wear, pedidos y precios",
    category: "Expresiones",
    group: "Compras y pedidos",
    content: `
      <ul class="space-y-1">
        <li><code>wear</code> = usar (ropa, anteojos, anillos, maquillaje)</li>
        <li><code>can I have...?</code> = para pedir algo en un lugar</li>
        <li><code>how much...?</code> = para preguntar el precio</li>
      </ul>
    `,
  },
];
