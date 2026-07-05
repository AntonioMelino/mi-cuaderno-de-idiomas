import type { LanguageTheme } from "../data/themes";

interface HeroProps {
  currentLevel: string;
  currentLanguage: string;
  theme: LanguageTheme;
}

export function Hero({ currentLevel, currentLanguage, theme }: HeroProps) {
  return (
    <section className="pt-8 pb-10">
      {/* Banner inmersivo con la imagen icónica del idioma */}
      <div
        key={theme.hero}
        className="hero-animate relative overflow-hidden rounded-[22px] border border-[#d9d2ba] shadow-[0_24px_60px_-28px_rgba(28,37,65,0.55)]"
      >
        <img
          src={theme.hero || "/placeholder.svg"}
          alt={`Escena icónica de ${theme.city || currentLanguage}`}
          className="absolute inset-0 h-full w-full object-cover"
          crossOrigin="anonymous"
        />
        {/* Overlay para asegurar contraste del texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(12,16,32,0.86) 0%, rgba(12,16,32,0.62) 42%, rgba(12,16,32,0.20) 100%)",
          }}
        />

        <div className="relative flex min-h-[340px] flex-col justify-between p-7 md:min-h-[400px] md:p-10">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-paper/85">
              Antonio Melino · Cuaderno de idiomas
            </p>
            {/* Sello del nivel en curso */}
            <div className="stamp flex h-[92px] w-[92px] shrink-0 -rotate-[9deg] flex-col items-center justify-center rounded-full border-[3px] border-paper/90 font-display text-paper opacity-95 outline outline-1 outline-paper/70 -outline-offset-8 md:h-[112px] md:w-[112px]">
              <span className="text-[1.7rem] font-black leading-none md:text-[2.1rem]">
                {currentLevel}
              </span>
              <span className="mt-1 font-mono text-[8.5px] tracking-[0.14em] md:text-[9.5px]">
                EN CURSO
              </span>
            </div>
          </div>

          <div className="max-w-[560px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-paper/15 px-3 py-1 backdrop-blur-sm">
              <span className="text-lg leading-none">{theme.flag}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper/90">
                {theme.tagline}
              </span>
            </div>
            <h1 className="m-0 font-display text-[clamp(2.3rem,5.5vw,3.9rem)] font-bold leading-[1.02] -tracking-[0.01em] text-paper">
              Mi cuaderno
              <br />
              <span className="font-normal italic text-paper/95">
                de {currentLanguage.toLowerCase()}
              </span>
            </h1>
            <p className="mt-3 max-w-[520px] font-hand text-2xl -rotate-1 text-paper/90">
              acá guardo cada apunte y writing, corregido a mano por mi profe —
              idioma por idioma, nivel por nivel.
            </p>
          </div>
        </div>

        {/* Franja tricolor con los colores de la bandera del idioma */}
        <div className="flag-band absolute inset-x-0 bottom-0 h-1.5" />
      </div>

      {/* Cinta de elementos culturales del idioma */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted">
          {theme.city ? `Inspirado en ${theme.city}:` : "Motivos:"}
        </span>
        {theme.motifs.map((motif) => (
          <span
            key={motif}
            className="rounded-full border border-[#d9d2ba] bg-paper-dark px-2.5 py-1 font-mono text-[10.5px] text-ink-soft"
          >
            {motif}
          </span>
        ))}
      </div>
    </section>
  );
}
