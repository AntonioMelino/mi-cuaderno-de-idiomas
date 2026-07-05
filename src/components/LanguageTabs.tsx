import type { Language } from "../types/Writing";
import { getTheme } from "../data/themes";
import { FlagIcon } from "./FlagIcon";

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
        const theme = getTheme(lang.code);
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            className={[
              "font-display text-[15px] px-4 py-2 rounded-full border transition-colors inline-flex items-center gap-2",
              isSelected
                ? "bg-accent text-paper border-accent font-semibold shadow-[0_6px_18px_-8px_var(--accent)]"
                : "border-[#d9d2ba] text-ink-soft hover:border-ink",
              !hasProgress && !isSelected ? "opacity-60" : "",
            ].join(" ")}
          >
            <FlagIcon code={lang.code} colors={theme.flagColors} className="text-base" />
            {lang.name}
            {!hasProgress && (
              <span className="font-mono text-[9px] uppercase tracking-[0.08em] ml-0.5 text-text-muted">
                sin empezar
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
