# Mi cuaderno de idiomas

Página donde guardo los writings que corrige mi profesora y mis apuntes de
gramática, vocabulario, pronunciación y expresiones. Todo organizado por
idioma (por ahora inglés e italiano) y por nivel (A1 en adelante).

## Stack

Vite + React 19 + TypeScript, con Tailwind CSS v4 para los estilos y oxlint
como linter.

## Correrlo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # type-check + build
npm run preview   # preview del build
npm run lint
```

## Qué tiene

- Tabs para elegir idioma, cada uno con su propio banner y colores (bandera,
  tagline, motivos culturales).
- Rail de niveles (A1 → C1) que muestra cuáles están activos, bloqueados o
  terminados.
- Writings: texto original con los errores marcados, la corrección, y el
  comentario de la profesora.
- Apuntes, filtrables primero por categoría (Pronunciación, Vocabulario,
  Gramática, Expresiones) y después por sub-tema dentro de esa categoría
  (por ejemplo, en Vocabulario: Números, Familia, Tiempo...). Cuando una
  categoría tiene un solo tema no aparece el segundo filtro.
- Alguna nota trae un widget interactivo en vez de solo texto — por ahora
  hay un reloj para practicar cómo se dice la hora en inglés.
- Un footer que muestra el progreso del nivel activo.
- Las banderas están dibujadas en CSS/SVG en lugar de usar emoji, porque en
  Windows los emoji de bandera no se ven como bandera.

Inglés tiene A1 activo (el resto bloqueado) con writings y apuntes de
alfabeto, números, gramática, vocabulario, expresiones e interactivos.
Italiano tiene A1 activo con writings y apuntes de alfabeto, números,
gramática y vocabulario.

## Estructura

```
index.html                     → entry HTML
src/
  main.tsx                      → bootstrap de React
  App.tsx                       → estado raíz (idioma, tipo de contenido) y layout
  types/
    Writing.ts                  → tipos: Writing, Note, Language, Level, NoteCategory
  data/
    languages.ts                → idiomas, niveles, y el mapa hacia su contenido
    themes.ts                   → banner/colores/tagline por idioma
    writings/<idioma>/<nivel>.ts
    notes/<idioma>/<nivel>/
      <categoria>.ts             → grammar.ts, vocabulary.ts, expressions.ts,
                                  alphabet.ts, numbers.ts, interactive.ts...
      index.ts                   → junta las notas del nivel en el orden final
  components/
    Hero.tsx, LanguageTabs.tsx, LevelRail.tsx, ContentTabs.tsx
    WritingsList.tsx / WritingCard.tsx
    NotesList.tsx / NoteCard.tsx / NoteCategoryTabs.tsx / NoteGroupTabs.tsx
    FlagIcon.tsx, ClockDemo.tsx, ProgressFooter.tsx
  styles/
    globals.css                  → tokens de diseño y variables por idioma
public/                          → assets estáticos
```

## Sumar contenido

**Nivel nuevo** (ej: Inglés A2): crear `data/writings/en/a2.ts` y/o
`data/notes/en/a2/`, registrarlo en `languages.ts`, y pasar ese nivel a
`"active"` (el anterior a `"done"`).

**Idioma nuevo**: carpeta en `data/writings/<code>/` y `data/notes/<code>/`,
más su entrada en `languages.ts` y `themes.ts`. No hay que tocar componentes.

**Categoría con muchos temas**: si una categoría crece mucho, agrupar las
notas relacionadas con el campo `group` (ej: `group: "Números"`) para que
salgan con su propio sub-encabezado y su propio filtro.

El orden de apuntes es siempre el mismo para cualquier idioma: alfabeto →
números → gramática → vocabulario (con los interactivos de esa categoría) →
expresiones. Dentro de cada categoría, todo lo que comparte `group` va
junto — si se corta un grupo con notas de otro grupo en el medio, el
sub-encabezado se repite en vez de mostrarse una vez sola.

Antes de dar algo por terminado conviene chequear que no haya ids
repetidos:

```bash
grep -rhoE 'id: "[^"]+"' src/data/notes | sort | uniq -d
```

(tiene que devolver vacío).

## Git

Dos ramas fijas: `main` y `develop`. Todo lo nuevo se hace en una rama de
feature creada desde `develop`, y solo se mergea con OK explícito. El
detalle completo está en `CLAUDE.md`.
