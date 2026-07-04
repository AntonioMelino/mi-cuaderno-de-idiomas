import type { Writing } from "../../../types/Writing";

// ⚠️ CONTENIDO DE EJEMPLO — reemplazar por tus writings reales corregidos por la profesora.
// Cada mistake/fix debe ir envuelto en <span class="mistake"> / <span class="fix">.
export const writingsA1: Writing[] = [
  {
    id: "a1-01",
    title: "Five important people",
    date: "25 April 2026",
    words: 148,
    original: `My name is Antonio. I'm twenty-eight years old. I'm from Argentina, I'm a system operator, software developer and student of English and Italian. There are <span class="mistake">five</span> important people in my life:<br><br>Enzo is my best friend. He's twenty-seven years old. He's a receptionist in <span class="mistake">the medic</span> center. He's a very funny person.<br><br>Rocio is <span class="mistake">very good a friend</span>. She's twenty-seven years old. She works in a pharmacy. She lives in Neuquen. And she's my video games partner.<br><br>Agustin's a friend from work. He's twenty-four years old. He's a data analyst. He's a good <span class="mistake">working</span>.<br><br>Marta is my mom. She's sixty-five years old. She's a housewife <span class="mistake">and retired</span>. She's <span class="mistake">a</span> very nice.<br><br>Jose is my dad. He's sixty-four years old. He's a factory operator. He loves my dog Lulu.<br><br>Costanzo is my uncle. He's sixty-eight years old. He's retired and <span class="mistake">their</span> ex-job a factory operator with my father.`,
    corrected: `My name is Antonio. I'm twenty-eight years old. I'm from Argentina, I'm a system operator, software developer and student of English and Italian. There are <span class="fix">six</span> important people in my life:<br><br>Enzo is my best friend. He's twenty-seven years old. He's a receptionist in <span class="fix">a medical</span> (or health) center. He's a very funny person.<br><br>Rocio is <span class="fix">a very good friend</span>. She's twenty-seven years old. She works in a pharmacy. She lives in Neuquen. And she's my video games partner.<br><br>Agustin's a friend from work. He's twenty-four years old. He's a data analyst. He's a good <span class="fix">worker</span>.<br><br>Marta is my mom. She's sixty-five years old. She's a housewife <span class="fix">and she's retired</span>. She's very nice.<br><br>Jose is my dad. He's sixty-four years old. He's a factory operator. He loves my dog Lulu.<br><br>Costanzo is my uncle. He's sixty-eight years old. He's retired.`,
    teacherNote:
      "Great job!!! Look at this expression 'A good worker' = un buen trabajador. Ahora si querés decir que trabaja mucho, the expression is: he is hardworking. This expression (their) is correct in the past (aún no lo aprendimos).",
  },
  {
    id: "a1-02",
    title: "My favorite singer",
    date: "10 May 2026 ",
    words: 47,
    original: `My favorite singer is The Weeknd. He is from Canada and he <span class="mistake">have</span> 36 (thirty-six) years old. <span class="mistake">Your</span> most popular song is "Blinding Lights".<br><br>I think he is one of the best singers in the world. <span class="mistake">Your</span> lyrics <span class="mistake">is</span> very good, and <span class="mistake">your</span> genre is pop.`,
    corrected: `My favorite singer is The Weeknd. He is from Canada and he <span class="fix">is</span> 36 (thirty-six) years old. <span class="fix">His</span> most popular song is "Blinding Lights".<br><br>I think he is one of the best singers in the world. <span class="fix">His</span> lyrics <span class="fix">are</span> very good, and <span class="fix">his musical</span> genre is pop.`,
    teacherNote:
      "Good! Remember the age (edad) in English is with verb BE!!!. The weeknd is a man, so to say “su/sus” use HIS (your is “tu/tus” for you). “Lyrics” is plural in English, so use “are”.",
  },
  {
    id: "a1-03",
    title: "A favorite article of clothing",
    date: "16 May 2026",
    words: 55,
    original: `This is my favorite article of clothing: a light brown and light green jacket. It is brand new <span class="mistake">because I buy in my vacations</span>. It is from Italy and I love it. It is pretty, awesome and cool but I <span class="mistake">doesn't</span> <span class="mistake">use</span> in the summer because it is <span class="mistake">article</span> of clothing <span class="mistake">of</span> winter.`,
    corrected: `This is my favorite article of clothing: a light brown and light green jacket. It is brand new. It is from Italy and I love it. It is pretty, awesome and cool but I <span class="fix">don't</span> <span class="fix">wear it</span> in the summer because it is <span class="fix">an article</span> of clothing <span class="fix">for</span> winter.`,
    teacherNote:
      "Very good! Remember with clothes we use the verb “WEAR”, not “use”. Now you know this negative!",
  },
  {
    id: "a1-04",
    title: "A blog entry about your life",
    date: "31 May 2026",
    words: 76,
    original: `Hi, my name is Antonio, I study in the evenings because I work in the mornings and I go to the gym in the afternoons. I drive to work because I like to drive but I don't like work every day. I live in a house with my parents, my uncle and my pets, I have one dog and five cats and I love them so much. I study English on Wednesdays and Italian on Fridays.`,
    corrected: `Hi, my name is Antonio, I study in the evenings because I work in the mornings and I go to the gym in the afternoons. I drive to work because I like to drive but I don't like work every day. I live in a house with my parents, my uncle and my pets, I have one dog and five cats and I love them so much. I study English on Wednesdays and Italian on Fridays.`,
    teacherNote: "Very good!!",
  },
  {
    id: "a1-05",
    title: "Perfect match",
    date: "8 June 2026",
    words: 60,
    original: `Enzo is my close friend. He is a good match because <span class="mistake">like</span> the same things, for example <span class="mistake">the</span> videogames, <span class="mistake">the</span> movies and <span class="mistake">the</span> football. He likes <span class="mistake">a zombie's</span> movies and series, <span class="mistake">a</span> cars and <span class="mistake">eat</span> pizza, but he doesn't like romantic movies, vegetables and Spanish music. I like his jokes, he has been my friend for 15 years.`,
    corrected: `Enzo is my close friend. He is a good match because <span class="fix">we like</span> the same things, for example videogames, movies and football. He likes <span class="fix">zombie</span> movies and series, cars and pizza, but he doesn't like romantic movies, vegetables and Spanish music. I like his jokes, he has been my friend for 15 years.`,
    teacherNote:
      "Very good! In English when we refer to things in general, we don´t use “the”, “a”, etc. For example: he likes cars, movies, videogames, etc…",
  },
  {
    id: "a1-06",
    title: "My favourite day of the week",
    date: "20 June 2026",
    words: 80,
    original: `My favourite day of the week is Sunday. This is my routine on Sundays: I get up at nine o'clock, I make a sandwich and <span class="mistake">orange</span> juice because that's my breakfast. After that, I go running for 5-10km. At twenty to twelve I get home and I take a shower. <span class="mistake">Usually</span> I <span class="mistake">take</span> asado for lunch. In the afternoons I study and program a lot because I <span class="mistake">need</span>. Finally, at ten or eleven o'clock, I go to bed.`,
    corrected: `My favourite day of the week is Sunday. This is my routine on Sundays: I get up at nine o'clock, I make a sandwich and <span class="fix">an orange</span> juice because that's my breakfast. After that, I go running for 5-10km. At twenty to twelve I get home and I take a shower. I <span class="fix">usually</span> <span class="fix">have</span> asado for lunch. In the afternoons I study and program a lot because I <span class="fix">need it</span>. Finally, at ten or eleven o'clock, I go to bed.`,
    teacherNote: "Very good! Remember the position of adverbs of frequency.",
  },
];
