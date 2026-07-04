import type { Note } from "../types/Writing";
import { ClockDemo } from "./ClockDemo";

const interactiveWidgets: Record<string, React.ComponentType> = {
  clock: ClockDemo,
};

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const Widget = note.interactive ? interactiveWidgets[note.interactive] : null;

  return (
    <div className="bg-paper-dark border border-[#d9d2ba] rounded-[14px] p-6">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-gold">
        {note.category}
      </span>
      <h3 className="font-display font-semibold text-xl text-ink mt-1 mb-3">
        {note.title}
      </h3>
      <div
        className="text-[0.99rem] leading-[1.65] text-text [&_strong]:text-ink [&_code]:bg-ink/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-[0.9em]"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
      {Widget && <Widget />}
    </div>
  );
}
