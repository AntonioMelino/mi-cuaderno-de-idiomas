import type { Note } from "../../../../types/Writing";
import { stripeFlag, specialFlags } from "../../flagMarkup";

interface CountryEntry {
  country: string;
  adjective: string;
  countryEs: string;
  adjectiveEs: string;
  flag: string;
}

const countries: CountryEntry[] = [
  { country: "England", adjective: "English", countryEs: "Inglaterra", adjectiveEs: "inglés",
    flag: specialFlags.gb },
  { country: "United States", adjective: "American", countryEs: "Estados Unidos", adjectiveEs: "estadounidense",
    flag: specialFlags.us },
  { country: "Canada", adjective: "Canadian", countryEs: "Canadá", adjectiveEs: "canadiense",
    flag: specialFlags.ca },
  { country: "Australia", adjective: "Australian", countryEs: "Australia", adjectiveEs: "australiano",
    flag: specialFlags.au },
  { country: "Ireland", adjective: "Irish", countryEs: "Irlanda", adjectiveEs: "irlandés",
    flag: stripeFlag(["#169b62", "#ffffff", "#ff883e"], "to right") },
  { country: "Argentina", adjective: "Argentinian", countryEs: "Argentina", adjectiveEs: "argentino",
    flag: stripeFlag(["#74acdf", "#ffffff", "#74acdf"], "to bottom") },
  { country: "Spain", adjective: "Spanish", countryEs: "España", adjectiveEs: "español",
    flag: stripeFlag(["#aa151b", "#f1bf00", "#aa151b"], "to bottom", [25, 50, 25]) },
  { country: "Italy", adjective: "Italian", countryEs: "Italia", adjectiveEs: "italiano",
    flag: stripeFlag(["#008c45", "#ffffff", "#cd212a"], "to right") },
  { country: "France", adjective: "French", countryEs: "Francia", adjectiveEs: "francés",
    flag: stripeFlag(["#0055a4", "#ffffff", "#ef4135"], "to right") },
  { country: "Germany", adjective: "German", countryEs: "Alemania", adjectiveEs: "alemán",
    flag: stripeFlag(["#000000", "#dd0000", "#ffce00"], "to bottom") },
  { country: "Portugal", adjective: "Portuguese", countryEs: "Portugal", adjectiveEs: "portugués",
    flag: stripeFlag(["#046a38", "#da291c"], "to right", [40, 60]) },
  { country: "Brazil", adjective: "Brazilian", countryEs: "Brasil", adjectiveEs: "brasileño",
    flag: specialFlags.br },
  { country: "Mexico", adjective: "Mexican", countryEs: "México", adjectiveEs: "mexicano",
    flag: stripeFlag(["#006341", "#ffffff", "#ce1126"], "to right") },
  { country: "Japan", adjective: "Japanese", countryEs: "Japón", adjectiveEs: "japonés",
    flag: specialFlags.jp },
  { country: "China", adjective: "Chinese", countryEs: "China", adjectiveEs: "chino",
    flag: specialFlags.cn },
  { country: "Russia", adjective: "Russian", countryEs: "Rusia", adjectiveEs: "ruso",
    flag: stripeFlag(["#ffffff", "#0039a6", "#d52b1e"], "to bottom") },
  { country: "Greece", adjective: "Greek", countryEs: "Grecia", adjectiveEs: "griego",
    flag: specialFlags.gr },
  { country: "Switzerland", adjective: "Swiss", countryEs: "Suiza", adjectiveEs: "suizo",
    flag: specialFlags.ch },
];

const countryListHtml = countries
  .map(
    (c) => `
        <li class="flex items-center gap-3 py-2 border-b border-ink/6 last:border-b-0">
          ${c.flag}
          <span class="leading-snug">
            <code>${c.country}</code> → ${c.adjective}
            <span class="block text-text-muted text-[0.85em]">${c.countryEs} → ${c.adjectiveEs}</span>
          </span>
        </li>`,
  )
  .join("");

export const vocabularyNotes: Note[] = [
  {
    id: "en-a1-note-pronouns",
    title: "Pronombres personales",
    category: "Vocabulario",
    group: "Pronombres y verbos clave",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>I</code> = yo</li>
        <li><code>you</code> = vos</li>
        <li><code>he</code> = él</li>
        <li><code>she</code> = ella</li>
        <li><code>it</code> = eso (cosas/animales)</li>
        <li><code>we</code> = nosotros</li>
        <li><code>they</code> = ellos</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-key-verbs",
    title: "Verbos clave",
    category: "Vocabulario",
    group: "Pronombres y verbos clave",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>be</code> (am/is/are) = ser/estar</li>
        <li><code>have</code> = tener</li>
        <li><code>do</code> = hacer</li>
        <li><code>go</code> = ir</li>
        <li><code>make</code> = hacer/crear</li>
        <li><code>say</code> = decir</li>
        <li><code>get</code> = obtener/conseguir/agarrar</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-frequent-words",
    title: "Palabras de uso frecuente",
    category: "Vocabulario",
    group: "Palabras funcionales",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>thing</code> = cosa</li>
        <li><code>time</code> = tiempo/vez</li>
        <li><code>day</code> = día</li>
        <li><code>way</code> = forma/manera</li>
        <li><code>people</code> = personas</li>
        <li><code>work</code> = trabajo</li>
        <li><code>home</code> = casa</li>
        <li><code>here</code> = acá</li>
        <li><code>there</code> = ahí/allá</li>
        <li><code>now</code> = ahora</li>
        <li><code>today</code> = hoy</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-connectors",
    title: "Conectores",
    category: "Vocabulario",
    group: "Palabras funcionales",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>and</code> = y</li>
        <li><code>but</code> = pero</li>
        <li><code>because</code> = porque</li>
        <li><code>so</code> = entonces</li>
        <li><code>also</code> = también</li>
        <li><code>something</code> = algo</li>
        <li><code>someone</code> = alguien</li>
        <li><code>somewhere</code> = algún lugar</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-question-words",
    title: "Palabras de pregunta (question words)",
    category: "Vocabulario",
    group: "Palabras funcionales",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>who</code> = quién/quiénes</li>
        <li><code>what</code> = qué/cuál</li>
        <li><code>where</code> = dónde</li>
        <li><code>when</code> = cuándo</li>
        <li><code>why</code> = por qué</li>
        <li><code>how</code> = cómo</li>
        <li><code>which</code> = cuál/cuáles</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-symbols-places",
    title: "Símbolos y tipos de lugar",
    category: "Vocabulario",
    group: "Símbolos y lugares",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>@</code> = at</li>
        <li><code>.</code> = dot</li>
        <li><code>_</code> = underscore</li>
        <li><code>-</code> = hyphen</li>
        <li><code>city</code> = ciudad grande</li>
        <li><code>village</code> = pueblo</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-family",
    title: "Vocabulario de familia",
    category: "Vocabulario",
    group: "Familia",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>husband</code> = esposo</li>
        <li><code>wife</code> = esposa</li>
        <li><code>brother</code> = hermano</li>
        <li><code>sister</code> = hermana</li>
        <li><code>daughter</code> = hija</li>
        <li><code>son</code> = hijo</li>
        <li><code>children</code> = hijos</li>
        <li><code>parents</code> = padres</li>
        <li><code>uncle</code> = tío</li>
        <li><code>aunt</code> = tía</li>
        <li><code>cousins</code> = primos</li>
        <li><code>foster child</code> = hijo adoptivo</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-countries-nationalities",
    title: "Countries and nationalities (países y nacionalidades)",
    category: "Vocabulario",
    group: "Países y nacionalidades",
    content: `
      <p>El país y el adjetivo de nacionalidad van siempre con mayúscula en
      inglés (a diferencia del español). El adjetivo de nacionalidad
      <strong>no cambia</strong> según el género — como cualquier adjetivo en
      inglés.</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-3">
        ${countryListHtml}
      </ul>
      <p class="text-text-muted mt-3">Para decir de dónde sos: <code>I'm from
      + país</code> (I'm from Argentina). Para decir la nacionalidad:
      <code>I'm + adjetivo</code> (I'm Argentinian).</p>
    `,
  },
  {
    id: "en-a1-note-parts-of-day",
    title: "Partes del día",
    category: "Vocabulario",
    group: "Tiempo",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>morning</code> = mañana</li>
        <li><code>afternoon</code> = tarde</li>
        <li><code>evening</code> = tarde-noche (cuando ya estás yendo a dormir)</li>
      </ul>
    `,
  },
  {
    id: "en-a1-note-daily-routines",
    title: "Rutina diaria (vocabulario)",
    category: "Vocabulario",
    group: "Tiempo",
    content: `
      <ul class="grid grid-cols-2 gap-1">
        <li><code>get up</code> = levantarse</li>
        <li><code>go to bed</code> = ir a la cama</li>
        <li><code>have breakfast</code> = desayunar</li>
        <li><code>have lunch</code> = almorzar</li>
        <li><code>have dinner</code> = cenar</li>
        <li><code>go to work</code> = ir a trabajar</li>
        <li><code>get home</code> = llegar a casa</li>
      </ul>
    `,
  },
];
