import type { NoteCategory } from "../types/Writing";

type CategoryFilter = NoteCategory | "Todos";

interface NoteCategoryTabsProps {
  categories: NoteCategory[];
  counts: Partial<Record<NoteCategory, number>>;
  total: number;
  selected: CategoryFilter;
  onSelect: (value: CategoryFilter) => void;
}

// Segundo nivel de pestañas, adentro de "Apuntes": filtra por categoría
// (Gramática, Vocabulario, Pronunciación, Expresiones) para no mostrar todas
// las notas del nivel amontonadas en una sola grilla.
export function NoteCategoryTabs({
  categories,
  counts,
  total,
  selected,
  onSelect,
}: NoteCategoryTabsProps) {
  const tabs: { value: CategoryFilter; label: string; count: number }[] = [
    { value: "Todos", label: "Todos", count: total },
    ...categories.map((category) => ({
      value: category,
      label: category,
      count: counts[category] ?? 0,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onSelect(tab.value)}
          className={[
            "font-mono text-[11.5px] px-3 py-1.5 rounded-full border transition-colors",
            selected === tab.value
              ? "bg-ink text-paper border-ink"
              : "border-[#d9d2ba] text-ink-soft hover:border-ink",
          ].join(" ")}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
