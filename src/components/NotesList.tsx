import { useEffect, useState } from "react";
import type { Note, NoteCategory } from "../types/Writing";
import { NOTE_CATEGORY_ORDER } from "../types/Writing";
import { NoteCard } from "./NoteCard";
import { NoteCategoryTabs } from "./NoteCategoryTabs";
import { NoteGroupTabs } from "./NoteGroupTabs";

interface NotesListProps {
  levelCode: string;
  notes: Note[];
}

const UNGROUPED_LABEL = "Otros";

export function NotesList({ levelCode, notes }: NotesListProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    NoteCategory | "Todos"
  >("Todos");
  const [selectedGroup, setSelectedGroup] = useState<string | "Todos">(
    "Todos"
  );

  // Si cambia el idioma/nivel (otro array de notas), volvé a "Todos".
  useEffect(() => {
    setSelectedCategory("Todos");
  }, [notes]);

  // Si cambia la categoría seleccionada, el sub-filtro de tema vuelve a "Todos".
  useEffect(() => {
    setSelectedGroup("Todos");
  }, [selectedCategory]);

  const categories = NOTE_CATEGORY_ORDER.filter((category) =>
    notes.some((note) => note.category === category)
  );
  const counts = notes.reduce<Partial<Record<NoteCategory, number>>>(
    (acc, note) => {
      acc[note.category] = (acc[note.category] ?? 0) + 1;
      return acc;
    },
    {}
  );

  const notesInCategory =
    selectedCategory === "Todos"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  const groups: string[] = [];
  const groupCounts: Record<string, number> = {};
  notesInCategory.forEach((note) => {
    const label = note.group ?? UNGROUPED_LABEL;
    if (!groups.includes(label)) {
      groups.push(label);
    }
    groupCounts[label] = (groupCounts[label] ?? 0) + 1;
  });

  const visibleNotes =
    selectedGroup === "Todos"
      ? notesInCategory
      : notesInCategory.filter(
          (note) => (note.group ?? UNGROUPED_LABEL) === selectedGroup
        );

  let lastGroup: string | undefined;

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

      <NoteCategoryTabs
        categories={categories}
        counts={counts}
        total={notes.length}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {selectedCategory !== "Todos" && (
        <NoteGroupTabs
          groups={groups}
          counts={groupCounts}
          total={notesInCategory.length}
          selected={selectedGroup}
          onSelect={setSelectedGroup}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {visibleNotes.flatMap((note) => {
          const nodes: React.ReactNode[] = [];
          if (note.group && note.group !== lastGroup) {
            nodes.push(
              <h3
                key={`group-${note.group}`}
                className="col-span-full font-mono text-[10.5px] uppercase tracking-[0.12em] text-text-muted pb-1.5 border-b border-dashed border-[#d9d2ba] mt-2 first:mt-0"
              >
                {note.group}
              </h3>
            );
          }
          lastGroup = note.group;
          nodes.push(<NoteCard key={note.id} note={note} />);
          return nodes;
        })}
      </div>
    </section>
  );
}
