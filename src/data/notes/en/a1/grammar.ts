import type { Note } from "../../../../types/Writing";

export const grammarNotes: Note[] = [
  {
    id: "en-a1-note-to-be-affirmative",
    title: "Verbo To Be: am / is / are",
    category: "Gramática",
    group: "Verbo To Be",
    content: `
      <p><code>to be</code> (ser/estar) es irregular: cambia según la
      persona.</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li><code>I</code> + <code>am</code> (I'm)</li>
        <li><code>you / we / they</code> + <code>are</code> (you're / we're / they're)</li>
        <li><code>he / she / it</code> + <code>is</code> (he's / she's / it's)</li>
      </ul>
      <p class="mt-3">Se usa para identidad, descripción, edad,
      nacionalidad, profesión y ubicación:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>I'm Antonio. (identidad)</li>
        <li>She's very nice. (descripción)</li>
        <li>He's twenty-eight years old. (edad — siempre con <code>be</code>, no con <code>have</code>)</li>
        <li>We're from Argentina. (nacionalidad/origen)</li>
        <li>They're at home. (ubicación)</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-to-be-negative-questions",
    title: "To be: negativo e interrogativo",
    category: "Gramática",
    group: "Verbo To Be",
    content: `
      <p><strong>Negativo</strong> — se agrega <code>not</code> después del
      verbo:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>I am not (I'm not)</li>
        <li>you/we/they are not (aren't)</li>
        <li>he/she/it is not (isn't)</li>
      </ul>
      <p class="mt-3"><strong>Interrogativo</strong> — se invierte el orden,
      el verbo va primero:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Am I late?</li>
        <li>Are you a student?</li>
        <li>Is she your sister?</li>
      </ul>
      <p class="mt-3"><strong>Respuestas cortas</strong> (no se repite todo
      el sujeto de la pregunta):</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Are you a student? → Yes, I am. / No, I'm not.</li>
        <li>Is he your friend? → Yes, he is. / No, he isn't.</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-jobs-articles",
    title: "Artículos con oficios (a / an) y mayúsculas",
    category: "Gramática",
    group: "Artículos y adjetivos",
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
    id: "en-a1-note-adjectives",
    title: "Adjetivos: no cambian nunca",
    category: "Gramática",
    group: "Artículos y adjetivos",
    content: `
      <p>Los adjetivos en inglés no tienen plural ni género — quedan siempre igual.</p>
      <p class="mt-2">Example: the computer is <strong>old</strong> / the computers are <strong>old</strong>.</p>
    `,
  },
  {
    id: "en-a1-note-his-her",
    title: "His vs Her",
    category: "Gramática",
    group: "Pronombres y demostrativos",
    content: `
      <p><code>his</code> = su/sus, solo para masculino.
      <code>her</code> = su/sus, solo para femenino.</p>
      <p class="mt-2">Example: What's <strong>his</strong> name? — <strong>His</strong>
      name is Enzo. / He's Enzo.</p>
    `,
  },
  {
    id: "en-a1-note-possessives-numbers",
    title: "Our, its y guiones en números",
    category: "Gramática",
    group: "Pronombres y demostrativos",
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
    group: "Pronombres y demostrativos",
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
    id: "en-a1-note-plural-nouns",
    title: "Plural de sustantivos y presente simple: la misma regla -s / -es / -ies",
    category: "Gramática",
    group: "Plural de sustantivos",
    content: `
      <p>Los sustantivos regulares forman el plural con la misma regla
      ortográfica que ya usás en presente simple (he/she/it + verbo):</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>La mayoría → sumás <code>-s</code>: cat → cats, book → books
        (y en verbos: work → works, love → loves)</li>
        <li>Terminados en <code>-s, -ss, -sh, -ch, -x, -o</code> → sumás
        <code>-es</code>: box → boxes, watch → watches, potato → potatoes
        (y en verbos: teach → teaches, do → does)</li>
        <li>Consonante + <code>-y</code> → cambia a <code>-ies</code>:
        city → cities, baby → babies (y en verbos: study → studies,
        cry → cries)</li>
        <li>Vocal + <code>-y</code> → se mantiene, solo sumás <code>-s</code>:
        day → days, boy → boys</li>
      </ul>
      <p class="mt-3 text-text-muted">Pronunciación de la <code>-s</code>
      final: /s/ (cats), /z/ (dogs), /ɪz/ después de -s/-sh/-ch/-x/-ge
      (boxes, watches).</p>
    `,
  },
  {
    id: "en-a1-note-irregular-plurals",
    title: "Plurales irregulares",
    category: "Gramática",
    group: "Plural de sustantivos",
    content: `
      <p>Algunos sustantivos no siguen la regla de <code>-s</code> — hay
      que memorizarlos:</p>
      <ul class="grid grid-cols-2 gap-1 mt-2">
        <li><code>man</code> → <code>men</code></li>
        <li><code>woman</code> → <code>women</code></li>
        <li><code>child</code> → <code>children</code></li>
        <li><code>person</code> → <code>people</code></li>
        <li><code>foot</code> → <code>feet</code></li>
        <li><code>tooth</code> → <code>teeth</code></li>
        <li><code>mouse</code> → <code>mice</code></li>
        <li><code>fish</code> → <code>fish</code> (no cambia)</li>
        <li><code>sheep</code> → <code>sheep</code> (no cambia)</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-do-does",
    title: "Do vs Does",
    category: "Gramática",
    group: "Presente simple",
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
