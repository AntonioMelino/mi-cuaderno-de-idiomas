import type { Note } from "../types/Writing";
import { NoteCard } from "./NoteCard";

interface NotesListProps {
  levelCode: string;
  notes: Note[];
}

export function NotesList({ levelCode, notes }: NotesListProps) {
  return (
    <section className="pt-16 pb-2">
      <div className="flex items-baseline justify-between border-b-[1.5px] border-accent-2 pb-3.5 mb-8.5 flex-wrap gap-2.5">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink m-0">
          <span className="text-accent-2">Apuntes</span> — Nivel {levelCode}
        </h2>
        <span className="font-mono text-[13px] text-text-muted">
          {notes.length} temas
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
