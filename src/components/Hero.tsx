interface HeroProps {
  currentLevel: string;
  currentLanguage: string;
}

export function Hero({ currentLevel, currentLanguage }: HeroProps) {
  return (
    <section className="pt-20 pb-10">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <p className="font-mono text-[13px] tracking-[0.08em] uppercase text-ink-soft mb-2.5">
            Antonio Melino · Curso de inglés
          </p>
          <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,4.1rem)] leading-[1.02] text-ink -tracking-[0.01em] m-0">
            Mi cuaderno
            <br />
            <span className="italic font-normal text-red">
              de {currentLanguage.toLowerCase()}
            </span>
          </h1>
          <p className="font-hand text-2xl text-ink-soft mt-4 max-w-[520px] -rotate-1">
            acá guardo cada writing, corregido a mano por mi profe — idioma
            por idioma, nivel por nivel.
          </p>
        </div>

        <div className="stamp shrink-0 w-[132px] h-[132px] rounded-full border-[3px] border-ink flex items-center justify-center flex-col -rotate-[9deg] text-ink font-display opacity-90 mix-blend-multiply outline outline-1 outline-ink -outline-offset-8">
          <span className="text-[2.1rem] font-black leading-none">
            {currentLevel}
          </span>
          <span className="font-mono text-[9.5px] tracking-[0.14em] mt-1">
            EN CURSO
          </span>
        </div>
      </div>
    </section>
  );
}
