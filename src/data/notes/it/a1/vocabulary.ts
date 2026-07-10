import type { Note } from "../../../../types/Writing";

// Bandera dibujada con CSS/SVG en vez de emoji (mismo motivo que
// components/FlagIcon.tsx: los emojis de bandera no tienen glifo gráfico en
// Windows). Como el contenido de la nota es HTML plano insertado con
// dangerouslySetInnerHTML, acá se arma el markup a mano en vez de reusar el
// componente React.
const FLAG_CLASS =
  "inline-block h-[0.95em] w-[1.35em] shrink-0 rounded-[3px] border border-black/10 align-middle";

function stripeFlag(
  colors: string[],
  direction: "to right" | "to bottom",
  widths?: number[],
): string {
  const stripeWidths = widths ?? colors.map(() => 100 / colors.length);
  let position = 0;
  const stops = colors
    .map((color, index) => {
      const start = position;
      position += stripeWidths[index];
      return `${color} ${start}% ${position}%`;
    })
    .join(", ");
  return `<span class="${FLAG_CLASS}" style="background-image:linear-gradient(${direction}, ${stops})"></span>`;
}

function svgFlag(inner: string): string {
  return `<svg viewBox="0 0 60 40" aria-hidden="true" class="${FLAG_CLASS}">${inner}</svg>`;
}

// Banderas con formas propias (no representables como franjas simples).
const specialFlags = {
  gb: svgFlag(`
    <rect width="60" height="40" fill="#00247d"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" stroke-width="4"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" stroke-width="14"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#cf142b" stroke-width="8"/>
  `),
  us: svgFlag(`
    <rect width="60" height="40" fill="#ffffff"/>
    <g fill="#b22234">
      <rect y="0" width="60" height="5"/>
      <rect y="10" width="60" height="5"/>
      <rect y="20" width="60" height="5"/>
      <rect y="30" width="60" height="5"/>
    </g>
    <rect width="26" height="20" fill="#3c3b6e"/>
    <g fill="#ffffff">
      <circle cx="6" cy="5" r="1.4"/><circle cx="13" cy="5" r="1.4"/><circle cx="20" cy="5" r="1.4"/>
      <circle cx="9.5" cy="10" r="1.4"/><circle cx="16.5" cy="10" r="1.4"/>
      <circle cx="6" cy="15" r="1.4"/><circle cx="13" cy="15" r="1.4"/><circle cx="20" cy="15" r="1.4"/>
    </g>
  `),
  ca: svgFlag(`
    <rect width="60" height="40" fill="#ffffff"/>
    <rect width="15" height="40" fill="#d52b1e"/>
    <rect x="45" width="15" height="40" fill="#d52b1e"/>
    <polygon points="30,9 32.5,16 39,16 33.5,20 35.5,27 30,23 24.5,27 26.5,20 21,16 27.5,16" fill="#d52b1e"/>
  `),
  br: svgFlag(`
    <rect width="60" height="40" fill="#009739"/>
    <polygon points="30,5 55,20 30,35 5,20" fill="#fedd00"/>
    <circle cx="30" cy="20" r="8.5" fill="#002776"/>
  `),
  jp: svgFlag(`
    <rect width="60" height="40" fill="#ffffff"/>
    <circle cx="30" cy="20" r="10" fill="#bc002d"/>
  `),
  cn: svgFlag(`
    <rect width="60" height="40" fill="#de2910"/>
    <polygon points="12,5 14.2,11.5 21,11.5 15.5,15.5 17.6,22 12,18 6.4,22 8.5,15.5 3,11.5 9.8,11.5" fill="#ffde00"/>
    <circle cx="24" cy="4" r="1.1" fill="#ffde00"/>
    <circle cx="27" cy="9" r="1.1" fill="#ffde00"/>
    <circle cx="27" cy="16" r="1.1" fill="#ffde00"/>
    <circle cx="24" cy="21" r="1.1" fill="#ffde00"/>
  `),
  ch: svgFlag(`
    <rect width="60" height="40" fill="#d52b1e"/>
    <rect x="26" y="10" width="8" height="20" fill="#ffffff"/>
    <rect x="18" y="17" width="24" height="6" fill="#ffffff"/>
  `),
  gr: svgFlag(`
    <rect width="60" height="40" fill="#0d5eaf"/>
    <g fill="#ffffff">
      <rect y="8" width="60" height="4"/>
      <rect y="16" width="60" height="4"/>
      <rect y="24" width="60" height="4"/>
      <rect y="32" width="60" height="4"/>
    </g>
    <rect width="22" height="22" fill="#0d5eaf"/>
    <rect x="9" width="4" height="22" fill="#ffffff"/>
    <rect y="9" width="22" height="4" fill="#ffffff"/>
  `),
};

interface CountryEntry {
  country: string;
  adjective: string;
  countryEs: string;
  adjectiveEs: string;
  flag: string;
}

const countries: CountryEntry[] = [
  { country: "Italia", adjective: "italiano / italiana", countryEs: "Italia", adjectiveEs: "italiano",
    flag: stripeFlag(["#008c45", "#ffffff", "#cd212a"], "to right") },
  { country: "Germania", adjective: "tedesco / tedesca", countryEs: "Alemania", adjectiveEs: "alemán",
    flag: stripeFlag(["#000000", "#dd0000", "#ffce00"], "to bottom") },
  { country: "Francia", adjective: "francese", countryEs: "Francia", adjectiveEs: "francés",
    flag: stripeFlag(["#0055a4", "#ffffff", "#ef4135"], "to right") },
  { country: "Spagna", adjective: "spagnolo / spagnola", countryEs: "España", adjectiveEs: "español",
    flag: stripeFlag(["#aa151b", "#f1bf00", "#aa151b"], "to bottom", [25, 50, 25]) },
  { country: "Inghilterra", adjective: "inglese", countryEs: "Inglaterra", adjectiveEs: "inglés",
    flag: specialFlags.gb },
  { country: "Portogallo", adjective: "portoghese", countryEs: "Portugal", adjectiveEs: "portugués",
    flag: stripeFlag(["#046a38", "#da291c"], "to right", [40, 60]) },
  { country: "Stati Uniti", adjective: "americano / americana", countryEs: "Estados Unidos", adjectiveEs: "estadounidense",
    flag: specialFlags.us },
  { country: "Canada", adjective: "canadese", countryEs: "Canadá", adjectiveEs: "canadiense",
    flag: specialFlags.ca },
  { country: "Messico", adjective: "messicano / messicana", countryEs: "México", adjectiveEs: "mexicano",
    flag: stripeFlag(["#006341", "#ffffff", "#ce1126"], "to right") },
  { country: "Brasile", adjective: "brasiliano / brasiliana", countryEs: "Brasil", adjectiveEs: "brasileño",
    flag: specialFlags.br },
  { country: "Argentina", adjective: "argentino / argentina", countryEs: "Argentina", adjectiveEs: "argentino",
    flag: stripeFlag(["#74acdf", "#ffffff", "#74acdf"], "to bottom") },
  { country: "Russia", adjective: "russo / russa", countryEs: "Rusia", adjectiveEs: "ruso",
    flag: stripeFlag(["#ffffff", "#0039a6", "#d52b1e"], "to bottom") },
  { country: "Cina", adjective: "cinese", countryEs: "China", adjectiveEs: "chino",
    flag: specialFlags.cn },
  { country: "Giappone", adjective: "giapponese", countryEs: "Japón", adjectiveEs: "japonés",
    flag: specialFlags.jp },
  { country: "Grecia", adjective: "greco / greca", countryEs: "Grecia", adjectiveEs: "griego",
    flag: specialFlags.gr },
  { country: "Svizzera", adjective: "svizzero / svizzera", countryEs: "Suiza", adjectiveEs: "suizo",
    flag: specialFlags.ch },
  { country: "Austria", adjective: "austriaco / austriaca", countryEs: "Austria", adjectiveEs: "austríaco",
    flag: stripeFlag(["#ed2939", "#ffffff", "#ed2939"], "to bottom") },
  { country: "Polonia", adjective: "polacco / polacca", countryEs: "Polonia", adjectiveEs: "polaco",
    flag: stripeFlag(["#ffffff", "#dc143c"], "to bottom", [50, 50]) },
  { country: "Paesi Bassi", adjective: "olandese", countryEs: "Países Bajos", adjectiveEs: "neerlandés",
    flag: stripeFlag(["#ae1c28", "#ffffff", "#21468b"], "to bottom") },
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
    id: "it-a1-note-days-of-week",
    title: "I giorni della settimana (los días de la semana)",
    category: "Vocabulario",
    group: "Días de la semana",
    content: `
      <p>En italiano los días de la semana se escriben en minúscula:</p>
      <ol class="list-decimal pl-5 space-y-1">
        <li><code>lunedì</code> = lunes</li>
        <li><code>martedì</code> = martes</li>
        <li><code>mercoledì</code> = miércoles</li>
        <li><code>giovedì</code> = jueves</li>
        <li><code>venerdì</code> = viernes</li>
        <li><code>sabato</code> = sábado</li>
        <li><code>domenica</code> = domingo</li>
      </ol>
      <p class="text-text-muted">Todos son masculinos menos <code>domenica</code>, que es femenino.
      Para decir "los lunes" (en general) se usa el artículo: <code>il lunedì</code>.</p>
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
  {
    id: "it-a1-note-countries-nationalities",
    title: "Paesi e nazionalità (países y nacionalidades)",
    category: "Vocabulario",
    group: "Países y nacionalidades",
    content: `
      <p>El nombre del país va con mayúscula; el adjetivo de nacionalidad va en
      minúscula y cambia según el género: <code>-o</code> (masculino) /
      <code>-a</code> (femenino). Si termina en <code>-e</code>, es igual para
      los dos géneros.</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-3">
        ${countryListHtml}
      </ul>
      <p class="text-text-muted mt-3">Para decir "soy de..." se usa <code>essere di</code> +
      país (<code>Sono di Roma</code>) o <code>venire da</code> + país
      (<code>Vengo dall'Italia</code>). Para decir la nacionalidad se usa
      <code>essere</code> + adjetivo, sin artículo: <code>Sono italiano</code>.</p>
    `,
  },
];
