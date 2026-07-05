# CLAUDE.md

Este archivo se lee automáticamente al iniciar sesión en este proyecto. Contiene la arquitectura del repo y el flujo de trabajo de Git que hay que seguir siempre acá, sin excepciones.

## Qué es este proyecto

Landing page personal (Vite + React 19 + TypeScript + Tailwind CSS v4) que reúne writings corregidos por la profesora y apuntes de gramática/vocabulario, organizados por idioma (Inglés, Italiano...) y nivel (A1 → C1).

## Arquitectura de archivos

```
index.html                     → entry HTML (favicon, título, monta #root)
src/
  main.tsx                      → bootstrap de React
  App.tsx                       → estado raíz: idioma seleccionado, tipo de
                                  contenido (writings/apuntes), arma el layout
  types/
    Writing.ts                  → tipos compartidos: Writing, Note, Language,
                                  Level, NoteCategory, NOTE_CATEGORY_ORDER
  data/
    languages.ts                → registro de idiomas/niveles + mapa hacia
                                  writings y notas de cada uno
    themes.ts                   → tema visual por idioma (banner, colores de
                                  bandera, tagline, motivos culturales)
    writings/<idioma>/<nivel>.ts → contenido de writings (ej: writings/en/a1.ts)
    notes/<idioma>/<nivel>/
      <categoria>.ts             → notas agrupadas por tema (grammar.ts,
                                  vocabulary.ts, expressions.ts, alphabet.ts,
                                  numbers.ts, interactive.ts...)
      index.ts                   → junta todas las notas del nivel, en el
                                  orden en que se quieren ver
  components/                   → un componente por pieza de UI:
    Hero.tsx                     → banner principal + sello de nivel
    LanguageTabs.tsx              → selector de idioma
    LevelRail.tsx                 → rail de niveles (locked/active/done)
    ContentTabs.tsx               → toggle Writings / Apuntes
    WritingsList.tsx / WritingCard.tsx
    NotesList.tsx / NoteCard.tsx / NoteCategoryTabs.tsx
                                  → NotesList filtra por categoría
                                  (NoteCategoryTabs) y agrupa notas
                                  relacionadas por `note.group`
    FlagIcon.tsx                  → banderas dibujadas en CSS/SVG (no emoji,
                                  para que se vean igual en todo SO)
    ClockDemo.tsx                 → widget interactivo referenciado desde
                                  notas con `interactive: "clock"`
    ProgressFooter.tsx
  styles/
    globals.css                  → tokens de diseño (colores, fuentes) y
                                  estilos base, variables por tema de idioma
public/                          → assets estáticos (favicon, imágenes hero)
```

### Cómo sumar contenido nuevo

- **Nivel nuevo** (ej: Inglés A2): crear `data/writings/en/a2.ts` y/o
  `data/notes/en/a2/`, registrar el import en `languages.ts`, y cambiar el
  `status` del nivel a `"active"` (y el anterior a `"done"`).
- **Idioma nuevo**: carpeta en `data/writings/<code>/` y `data/notes/<code>/`,
  sumar la entrada en `languages.ts` y en `themes.ts`. No hace falta tocar
  ningún componente.
- **Categoría de nota muy poblada**: si una categoría (`Vocabulario`, etc.)
  crece demasiado, agrupá las notas relacionadas con el campo opcional
  `group` (ej: `group: "Números"`) para que aparezcan con su propio
  sub-encabezado dentro de la pestaña de esa categoría.

## Flujo de Git (obligatorio, sin excepciones)

Solo deben existir dos ramas en reposo: **`main`** y **`develop`**. Cualquier
otra rama es temporal y se borra apenas termina su ciclo.

1. **`main` nunca se toca directamente.** Ningún commit, ni siquiera chico,
   se hace parado en `main`.
2. **Todo el trabajo nuevo arranca desde `develop`.** Antes de crear una rama
   nueva, actualizar `develop` (`git pull`) para partir del último estado.
3. **Crear una rama de feature desde `develop`** para cada tarea/cambio
   nuevo (ej: `feature/italian-a1-notes`). Todo el desarrollo de esa tarea
   ocurre ahí — nunca directo en `develop` ni en `main`.
4. **Esperar a que el usuario pruebe y testee los cambios** en esa rama.
   No avanzar al siguiente paso sin esa confirmación.
5. **Recién con el OK explícito del usuario:**
   a. Mergear la rama de feature → `develop`.
   b. Mergear `develop` → `main`.
   c. Actualizar (`pull`) ambas ramas locales.
   d. Borrar la rama de feature (local y remota si fue pusheada).
6. **Actualizar este `CLAUDE.md`** si la arquitectura o el flujo de trabajo
   cambiaron durante la tarea.

### Regla crítica de confirmación

Los pasos 5(a)-5(d) — mergear a `develop`, mergear a `main`, y borrar la
rama de feature — **nunca se ejecutan sin que el usuario dé el OK
explícitamente para esa tarea puntual.** Un OK dado para una tarea no
autoriza la siguiente. El trabajo de implementación en la rama de feature sí
puede avanzar sin pedir permiso en cada paso, pero promover/mergear/borrar
ramas siempre requiere confirmación.

### Mensajes de commit

- Siempre en **inglés**.
- Formato: título corto (imperative, estilo conventional commits: `feat:`,
  `fix:`, `chore:`, `docs:`, `refactor:`...) + una descripción breve del
  *por qué* del cambio.

### Nota de arranque

Si `develop` todavía no existe en el repo, hay que crearla desde `main`
antes de abrir la primera rama de feature (con el OK del usuario, como
cualquier operación de rama).
