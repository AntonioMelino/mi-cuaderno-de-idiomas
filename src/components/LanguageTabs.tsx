import type { Language } from "../types/Writing";

interface LanguageTabsProps {
  languages: Language[];
  selected: string;
  onSelect: (code: string) => void;
}

export function LanguageTabs({
  languages,
  selected,
  onSelect,
}: LanguageTabsProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {languages.map((lang) => {
        const hasProgress = lang.levels.some(
          (l) => l.status === "active" || l.status === "done"
        );
        const isSelected = lang.code === selected;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            className={[
              "font-display text-[15px] px-4 py-2 rounded-full border transition-colors",
              isSelected
                ? "bg-red text-paper border-red font-semibold"
                : "border-[#d9d2ba] text-ink-soft hover:border-ink",
              !hasProgress && !isSelected ? "opacity-60" : "",
            ].join(" ")}
          >
            {lang.name}
            {!hasProgress && (
              <span className="font-mono text-[9px] uppercase tracking-[0.08em] ml-1.5 text-text-muted">
                sin empezar
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
