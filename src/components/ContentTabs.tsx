interface ContentTabsProps {
  selected: "writings" | "notes";
  onSelect: (value: "writings" | "notes") => void;
  writingsCount: number;
  notesCount: number;
}

export function ContentTabs({
  selected,
  onSelect,
  writingsCount,
  notesCount,
}: ContentTabsProps) {
  const tabs: { value: "writings" | "notes"; label: string; count: number }[] = [
    { value: "writings", label: "Writings", count: writingsCount },
    { value: "notes", label: "Apuntes", count: notesCount },
  ];

  return (
    <div className="inline-flex bg-paper-dark border border-[#d9d2ba] rounded-full p-1 mt-8">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onSelect(tab.value)}
          className={[
            "font-mono text-[12.5px] px-4 py-1.5 rounded-full transition-colors",
            selected === tab.value
              ? "bg-accent text-paper"
              : "text-ink-soft hover:text-ink",
          ].join(" ")}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
