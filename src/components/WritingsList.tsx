import type { Writing } from "../types/Writing";
import { WritingCard } from "./WritingCard";

interface WritingsListProps {
  levelCode: string;
  writings: Writing[];
}

export function WritingsList({ levelCode, writings }: WritingsListProps) {
  return (
    <section className="pt-16 pb-2">
      <div className="flex items-baseline justify-between border-b-[1.5px] border-accent-2 pb-3.5 mb-8.5 flex-wrap gap-2.5">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink m-0">
          <span className="text-accent-2">Writings</span> — Nivel {levelCode}
        </h2>
        <span className="font-mono text-[13px] text-text-muted">
          {writings.length} de {writings.length} completados
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {writings.map((writing, i) => (
          <WritingCard key={writing.id} writing={writing} index={i} />
        ))}
      </div>
    </section>
  );
}
