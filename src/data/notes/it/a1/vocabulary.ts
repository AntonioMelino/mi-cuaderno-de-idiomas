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
      <ul class="space-y-1.5">
        <li><code>Italia</code> → italiano / italiana = Italia → italiano</li>
        <li><code>Germania</code> → tedesco / tedesca = Alemania → alemán</li>
        <li><code>Francia</code> → francese = Francia → francés</li>
        <li><code>Spagna</code> → spagnolo / spagnola = España → español</li>
        <li><code>Inghilterra</code> → inglese = Inglaterra → inglés</li>
        <li><code>Portogallo</code> → portoghese = Portugal → portugués</li>
        <li><code>Stati Uniti</code> → americano / americana = Estados Unidos → estadounidense</li>
        <li><code>Canada</code> → canadese = Canadá → canadiense</li>
        <li><code>Messico</code> → messicano / messicana = México → mexicano</li>
        <li><code>Brasile</code> → brasiliano / brasiliana = Brasil → brasileño</li>
        <li><code>Argentina</code> → argentino / argentina = Argentina → argentino</li>
        <li><code>Russia</code> → russo / russa = Rusia → ruso</li>
        <li><code>Cina</code> → cinese = China → chino</li>
        <li><code>Giappone</code> → giapponese = Japón → japonés</li>
        <li><code>Grecia</code> → greco / greca = Grecia → griego</li>
        <li><code>Svizzera</code> → svizzero / svizzera = Suiza → suizo</li>
        <li><code>Austria</code> → austriaco / austriaca = Austria → austríaco</li>
        <li><code>Polonia</code> → polacco / polacca = Polonia → polaco</li>
        <li><code>Paesi Bassi</code> → olandese = Países Bajos → neerlandés</li>
      </ul>
      <p class="text-text-muted">Para decir "soy de..." se usa <code>essere di</code> +
      país (<code>Sono di Roma</code>) o <code>venire da</code> + país
      (<code>Vengo dall'Italia</code>). Para decir la nacionalidad se usa
      <code>essere</code> + adjetivo, sin artículo: <code>Sono italiano</code>.</p>
    `,
  },
];
