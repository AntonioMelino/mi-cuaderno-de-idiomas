import { useEffect, useState } from "react";

interface ProgressFooterProps {
  completed: number;
  total: number;
  levelCode: string;
  nextLevelCode?: string;
}

export function ProgressFooter({
  completed,
  total,
  levelCode,
  nextLevelCode,
}: ProgressFooterProps) {
  const [fillWidth, setFillWidth] = useState(0);
  const percent = Math.round((completed / total) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setFillWidth(percent), 300);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <section className="mt-[70px] pt-9 pb-24">
      <div className="bg-ink text-paper rounded-[18px] px-8 py-8.5 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h3 className="font-display font-semibold text-2xl m-0 mb-1.5">
            Nivel {levelCode} completo
          </h3>
          <p className="m-0 text-[#c7cde3] text-[0.92rem]">
            Los {total} writings del curso ya están corregidos y guardados
            acá.
            {nextLevelCode && ` El próximo sello es ${nextLevelCode}.`}
          </p>
        </div>
        <div className="text-right">
          <div className="font-mono text-[2.1rem] font-semibold">
            {completed}/{total}
          </div>
          <div className="w-[180px] h-1.5 bg-white/[0.18] rounded-full mt-2.5 overflow-hidden">
            <div
              className="h-full bg-gold rounded-full transition-[width] duration-[1100ms] ease-out"
              style={{ width: `${fillWidth}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
