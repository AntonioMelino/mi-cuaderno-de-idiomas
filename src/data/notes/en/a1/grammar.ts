import type { Note } from "../../../../types/Writing";

export const grammarNotes: Note[] = [
  {
    id: "en-a1-note-jobs-articles",
    title: "Artículos con oficios (a / an) y mayúsculas",
    category: "Gramática",
    content: `
      <p>Para decir tu ocupación usás <code>a</code> o <code>an</code> antes
      del oficio, según cómo empieza la palabra:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><strong>a + consonante</strong> → I'm <code>a</code> teacher / a doctor / a driver</li>
        <li><strong>an + vocal</strong> (a, e, i, o, u) → I'm <code>an</code> actor / an engineer / an artist</li>
      </ul>
      <p class="mt-3">Mayúsculas (capital letters) — en inglés se usan en más casos que en español:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Nombre propio → Antonio</li>
        <li>País → Argentina</li>
        <li>Ciudad → San Martín</li>
        <li>El pronombre <code>I</code> siempre en mayúscula: I'm Antonio</li>
        <li>Primera palabra de una oración → My cat...</li>
        <li>Nacionalidades → Argentinian, Paraguayan</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-his-her",
    title: "His vs Her",
    category: "Gramática",
    content: `
      <p><code>his</code> = su/sus, solo para masculino.
      <code>her</code> = su/sus, solo para femenino.</p>
      <p class="mt-2">Example: What's <strong>his</strong> name? — <strong>His</strong>
      name is Enzo. / He's Enzo.</p>
    `,
  },
  {
    id: "en-a1-note-adjectives",
    title: "Adjetivos: no cambian nunca",
    category: "Gramática",
    content: `
      <p>Los adjetivos en inglés no tienen plural ni género — quedan siempre igual.</p>
      <p class="mt-2">Example: the computer is <strong>old</strong> / the computers are <strong>old</strong>.</p>
    `,
  },
  {
    id: "en-a1-note-possessives-numbers",
    title: "Our, its y guiones en números",
    category: "Gramática",
    content: `
      <ul class="list-disc pl-5 space-y-1">
        <li><code>our</code> = nuestro/a</li>
        <li><code>its</code> = su/sus, pero para una cosa (sin apóstrofe —
        no confundir con <code>it's</code> = it is)</li>
      </ul>
      <p class="mt-2">Recordá el guion en los números compuestos:
      34 = <code>thirty-four</code>.</p>
    `,
  },
  {
    id: "en-a1-note-demonstratives-titles",
    title: "Demostrativos y formas de tratamiento",
    category: "Gramática",
    content: `
      <p>Singular: this is an apple / that is an apple.<br>
      Plural: these are apples / those are apples.</p>
      <p class="mt-2">Pronunciación: <code>this</code> (dis) ·
      <code>these</code> (diiis) · <code>that</code> (dat) · <code>those</code> (dous)</p>
      <p class="mt-2"><code>over there</code> = allá · <code>over here</code> = acá</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>Mr</code> = hombre (Mister)</li>
        <li><code>Mrs</code> = mujer casada (Missis)</li>
        <li><code>Miss</code> = mujer soltera</li>
        <li><code>Ms</code> = mujer casada o soltera</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-present-simple-endings",
    title: "Presente simple: -s, -es, -ies",
    category: "Gramática",
    content: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Verbos terminados en <code>-en, -o, -s, -sh, -x</code> →
        sumás <code>-es</code>: teach → teaches, do → does</li>
        <li>Consonante + <code>-y</code> → cambia a <code>-ies</code>:
        study → studies, cry → cries</li>
        <li>La mayoría de los verbos → sumás <code>-s</code>:
        work → works, love → loves</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-present-simple-endings",
    title: "Presente simple: -s, -es, -ies",
    category: "Gramática",
    content: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Verbos terminados en <code>-en, -o, -s, -sh, -x</code> →
        sumás <code>-es</code>: teach → teaches, do → does</li>
        <li>Consonante + <code>-y</code> → cambia a <code>-ies</code>:
        study → studies, cry → cries</li>
        <li>La mayoría de los verbos → sumás <code>-s</code>:
        work → works, love → loves</li>
      </ul>
    `,
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
