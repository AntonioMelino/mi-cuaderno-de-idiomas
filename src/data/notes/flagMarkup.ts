// Bandera dibujada con CSS/SVG en vez de emoji (mismo motivo que
// components/FlagIcon.tsx: los emojis de bandera no tienen glifo gráfico en
// Windows). Como el contenido de la nota es HTML plano insertado con
// dangerouslySetInnerHTML, acá se arma el markup a mano en vez de reusar el
// componente React. Compartido entre idiomas (it, en...) para no duplicar el
// dibujo de banderas que se repiten en más de un curso (Union Jack, EE.UU.,
// Brasil, etc.).
export const FLAG_CLASS =
  "inline-block h-[0.95em] w-[1.35em] shrink-0 rounded-[3px] border border-black/10 align-middle";

export function stripeFlag(
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

export function svgFlag(inner: string): string {
  return `<svg viewBox="0 0 60 40" aria-hidden="true" class="${FLAG_CLASS}">${inner}</svg>`;
}

// Banderas con formas propias (no representables como franjas simples).
export const specialFlags = {
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
  au: svgFlag(`
    <rect width="60" height="40" fill="#00247d"/>
    <g transform="scale(0.5)">
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" stroke-width="8"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" stroke-width="4"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" stroke-width="14"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#cf142b" stroke-width="8"/>
    </g>
    <g fill="#ffffff">
      <circle cx="45" cy="8" r="1.3"/>
      <circle cx="52" cy="14" r="1.3"/>
      <circle cx="50" cy="24" r="1.3"/>
      <circle cx="42" cy="26" r="1.3"/>
      <circle cx="46" cy="20" r="0.9"/>
    </g>
  `),
};
