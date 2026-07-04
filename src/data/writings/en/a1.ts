import type { Writing } from "../../../types/Writing";

// ⚠️ CONTENIDO DE EJEMPLO — reemplazar por tus writings reales corregidos por la profesora.
// Cada mistake/fix debe ir envuelto en <span class="mistake"> / <span class="fix">.
export const writingsA1: Writing[] = [
  {
    id: "a1-01",
    title: "My family",
    date: "Marzo 2026",
    words: 46,
    original: `My name is Antonio and I <span class="mistake">have 32 years</span>. I <span class="mistake">living</span> with my family in Buenos Aires. My father <span class="mistake">is name</span> Carlos and he <span class="mistake">work</span> in a factory. My mother <span class="mistake">she is teacher</span>. I have one sister, <span class="mistake">she call</span> Sofia.`,
    corrected: `My name is Antonio and I <span class="fix">am 32 years old</span>. I <span class="fix">live</span> with my family in Buenos Aires. My father<span class="fix">'s name is</span> Carlos and he <span class="fix">works</span> in a factory. My mother <span class="fix">is a teacher</span>. I have one sister, and <span class="fix">her name is</span> Sofia.`,
    teacherNote: "¡Bien! Ojo con la edad: en inglés se usa el verbo \"to be\", no \"to have\".",
  },
  {
    id: "a1-02",
    title: "My house",
    date: "Marzo 2026",
    words: 41,
    original: `I live in a house with three <span class="mistake">room</span>. There <span class="mistake">is not</span> garden but <span class="mistake">have</span> a big terrace. My favorite room is the kitchen because <span class="mistake">is</span> very big and <span class="mistake">have</span> many light. There is a sofa, a table and two <span class="mistake">chair</span>.`,
    corrected: `I live in a house with three <span class="fix">rooms</span>. There <span class="fix">isn't a</span> garden, but there <span class="fix">is</span> a big terrace. My favorite room is the kitchen because <span class="fix">it is</span> very big and <span class="fix">has</span> a lot of light. There is a sofa, a table and two <span class="fix">chairs</span>.`,
    teacherNote: "Muy bien descripta la casa. Repasemos los plurales, ¡se te escapan seguido!",
  },
  {
    id: "a1-03",
    title: "My daily routine",
    date: "Abril 2026",
    words: 52,
    original: `I wake up at 6 every morning. First I <span class="mistake">taking</span> a shower and after I <span class="mistake">eating</span> breakfast. I go to work by bus, it <span class="mistake">take</span> 40 minutes. I <span class="mistake">working</span> from 9 to 6. When I arrive home I <span class="mistake">cooking</span> dinner.`,
    corrected: `I wake up at 6 every morning. First I <span class="fix">take</span> a shower, and then I <span class="fix">eat</span> breakfast. I go to work by bus, and it <span class="fix">takes</span> 40 minutes. I <span class="fix">work</span> from 9 to 6. When I arrive home, I <span class="fix">cook</span> dinner.`,
    teacherNote: "Recordá: presente simple = verbo + s en tercera persona, no el gerundio.",
  },
  {
    id: "a1-04",
    title: "My favorite food",
    date: "Abril 2026",
    words: 44,
    original: `My favorite food is milanesa with <span class="mistake">mash potato</span>. I like <span class="mistake">too</span> pizza but <span class="mistake">is</span> not so healthy. On sundays my mother <span class="mistake">cook</span> a special lunch and all the family <span class="mistake">eating</span> together.`,
    corrected: `My favorite food is milanesa with <span class="fix">mashed potatoes</span>. I <span class="fix">also like</span> pizza, but <span class="fix">it isn't</span> very healthy. On Sundays my mother <span class="fix">cooks</span> a special lunch and the whole family <span class="fix">eats</span> together.`,
    teacherNote: "¡Excelente! Solo cuidado con los plurales irregulares como \"potatoes\".",
  },
  {
    id: "a1-05",
    title: "My free time",
    date: "Mayo 2026",
    words: 43,
    original: `In my free time I like <span class="mistake">play</span> videogames and <span class="mistake">go</span> to the gym. I <span class="mistake">training</span> four days at week for gain muscle. Sometimes I <span class="mistake">watching</span> series in english for practice listening.`,
    corrected: `In my free time I like <span class="fix">playing</span> video games and <span class="fix">going</span> to the gym. I <span class="fix">train</span> four days a week to gain muscle. Sometimes I <span class="fix">watch</span> series in English to practice listening.`,
    teacherNote: "Después de \"like\" siempre va el verbo + ing. ¡Buen progreso!",
  },
  {
    id: "a1-06",
    title: "My last weekend",
    date: "Mayo 2026",
    words: 45,
    original: `Last weekend I <span class="mistake">go</span> to the gym in the morning and after I <span class="mistake">studying</span> english for two hours. In the afternoon I <span class="mistake">meeting</span> with my friends and we <span class="mistake">eating</span> pizza together.`,
    corrected: `Last weekend I <span class="fix">went</span> to the gym in the morning, and then I <span class="fix">studied</span> English for two hours. In the afternoon I <span class="fix">met</span> my friends and we <span class="fix">ate</span> pizza together.`,
    teacherNote: "¡Genial usando el pasado! Repasemos los verbos irregulares: go-went, eat-ate.",
  },
];
