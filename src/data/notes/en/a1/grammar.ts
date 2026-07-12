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
    id: "en-a1-note-possessive-adjectives",
    title: "Posesivos: my / your / his / her / its / our / their",
    category: "Gramática",
    group: "Pronombres y demostrativos",
    content: `
      <p>Los posesivos en inglés no cambian según lo que poseen (a
      diferencia del español "mi/mis") — son invariables, como cualquier
      adjetivo:</p>
      <ul class="grid grid-cols-2 gap-1 mt-2">
        <li><code>my</code> = mi/mis</li>
        <li><code>your</code> = tu/tus, su/sus (de "you")</li>
        <li><code>his</code> = su/sus (de él)</li>
        <li><code>her</code> = su/sus (de ella)</li>
        <li><code>its</code> = su/sus (de una cosa o animal)</li>
        <li><code>our</code> = nuestro/a/os/as</li>
        <li><code>their</code> = su/sus (de ellos/ellas)</li>
      </ul>
      <p class="mt-3">Examples: What's <strong>his</strong> name? — <strong>His</strong>
      name is Enzo. / This is <strong>our</strong> house. / They love
      <strong>their</strong> dog.</p>
      <p class="mt-2 text-text-muted"><code>its</code> (posesivo, sin
      apóstrofe) no es lo mismo que <code>it's</code> (it is): <em>the dog
      wags its tail</em> vs. <em>it's a good dog</em>.</p>
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
  {
    id: "en-a1-note-adverbs-frequency",
    title: "Adverbios de frecuencia: always, usually, often, never...",
    category: "Gramática",
    group: "Adverbios de frecuencia",
    content: `
      <p>De más a menos frecuencia:</p>
      <ul class="grid grid-cols-2 gap-1">
        <li><code>always</code> = siempre (100%)</li>
        <li><code>usually</code> = usualmente</li>
        <li><code>often</code> = seguido</li>
        <li><code>sometimes</code> = a veces</li>
        <li><code>rarely / seldom</code> = rara vez</li>
        <li><code>never</code> = nunca (0%)</li>
      </ul>
      <p class="mt-3"><strong>Posición:</strong> antes del verbo principal,
      pero <strong>después</strong> de <code>to be</code>:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>I <strong>usually</strong> have lunch at one. (antes de "have")</li>
        <li>She is <strong>always</strong> late. (después de "is")</li>
        <li>Do you <strong>usually</strong> work on Sundays?</li>
      </ul>
      <p class="mt-2 text-text-muted">Error común: no van al principio de la
      oración en inglés — decimos "I usually have asado", no "Usually I have
      asado".</p>
    `,
  },
];
