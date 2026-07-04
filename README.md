# Mi cuaderno de idiomas

Landing page que reúne los writings de mis cursos de idiomas, corregidos por
la profesora, organizados por idioma y nivel (Inglés A1 → A2..., Italiano
A1...).

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v4

## Cómo correrlo
```bash
npm install
npm run dev
```

## Estructura
- `src/data/languages.ts` → qué idiomas existen, sus niveles, y el mapa hacia el contenido
- `src/data/writings/<idioma>/<nivel>.ts` → contenido de los writings (ej: `writings/en/a1.ts`)
- `src/components/` → un componente por pieza de UI
- `src/styles/globals.css` → tokens de diseño (colores, fuentes) y estilos base

## Cómo agregar un nivel nuevo (ej: Inglés A2)
1. Crear `src/data/writings/en/a2.ts` con el mismo formato que `a1.ts`
2. En `src/data/languages.ts`: cambiar A1 (inglés) a `"done"`, A2 a `"active"`
3. Registrar el import en `writingsByLanguage.en.A2`

## Cómo agregar un idioma nuevo (ej: Portugués)
1. Crear la carpeta `src/data/writings/pt/`
2. Sumar el idioma con sus niveles en `languages.ts`
3. Registrar sus writings en `writingsByLanguage`

No hace falta tocar ningún componente — la UI ya está armada para
mostrar/ocultar idiomas y niveles según el estado de cada uno.

## Deploy
Recomendado: subir a GitHub y conectar el repo en Vercel (deploy automático
en cada push, gratis para proyectos personales).
