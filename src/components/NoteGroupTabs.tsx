type GroupFilter = string | "Todos";

interface NoteGroupTabsProps {
  groups: string[];
  counts: Record<string, number>;
  total: number;
  selected: GroupFilter;
  onSelect: (value: GroupFilter) => void;
}

// Tercer nivel de pestañas, adentro de una categoría de "Apuntes": filtra
// por tema/grupo (ej: dentro de Vocabulario -> Números, Familia, Tiempo...)
// para no mostrar todos los temas de la categoría amontonados.
export function NoteGroupTabs({
  groups,
  counts,
  total,
  selected,
  onSelect,
}: NoteGroupTabsProps) {
  if (groups.length < 2) {
    return null;
  }

  const tabs: { value: GroupFilter; label: string; count: number }[] = [
    { value: "Todos", label: "Todos", count: total },
    ...groups.map((group) => ({
      value: group,
      label: group,
      count: counts[group] ?? 0,
    })),
  ];

  return (
    <div className="flex flex-wrap gap-1.5 mt-3.5 pl-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onSelect(tab.value)}
          className={[
            "font-mono text-[10.5px] px-2.5 py-1 rounded-full border transition-colors",
            selected === tab.value
              ? "bg-accent-2 text-paper border-accent-2"
              : "border-[#e3ddc8] text-text-muted hover:border-accent-2",
          ].join(" ")}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
