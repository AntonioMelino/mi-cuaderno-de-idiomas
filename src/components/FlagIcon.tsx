interface FlagShapeProps {
  className?: string;
}

const FLAG_ICON_CLASS =
  "inline-block h-[0.95em] w-[1.35em] shrink-0 rounded-[3px] border border-black/10 align-middle";

// El Union Jack no se puede reducir a 3 franjas de color (tiene la cruz
// diagonal de San Andrés/San Patricio + la cruz recta de San Jorge), así que
// tiene su propio SVG en vez del degradé genérico.
function UnionJackFlag({ className = "" }: FlagShapeProps) {
  return (
    <svg
      viewBox="0 0 60 40"
      aria-hidden="true"
      className={`${FLAG_ICON_CLASS} ${className}`}
    >
      <rect width="60" height="40" fill="#00247d" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#cf142b" strokeWidth="4" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="14" />
      <path d="M30,0 V40 M0,20 H60" stroke="#cf142b" strokeWidth="8" />
    </svg>
  );
}

// Banderas con una forma propia (no representable como franjas). Mismo
// patrón que `interactiveWidgets` en NoteCard.tsx: un registro por código.
const specialFlags: Record<string, React.ComponentType<FlagShapeProps>> = {
  en: UnionJackFlag,
};

interface FlagIconProps {
  code: string;
  colors: [string, string, string];
  className?: string;
}

// Bandera dibujada con CSS/SVG en vez de emoji: los emojis de bandera
// (regional indicators) no tienen glifo gráfico en la fuente de Windows y se
// ven como texto ("GB", "IT"). Esta versión se ve igual en cualquier
// SO/navegador. Si el idioma no tiene una forma especial registrada, se
// dibujan sus colores como 3 franjas verticales (válido para tricolores
// simples como el italiano).
export function FlagIcon({ code, colors, className = "" }: FlagIconProps) {
  const Special = specialFlags[code];
  if (Special) return <Special className={className} />;

  const [c1, c2, c3] = colors;
  return (
    <span
      aria-hidden="true"
      className={`${FLAG_ICON_CLASS} ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${c1} 0 33.33%, ${c2} 33.33% 66.66%, ${c3} 66.66% 100%)`,
      }}
    />
  );
}
