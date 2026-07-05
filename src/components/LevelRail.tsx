import type { Level } from "../types/Writing";

interface LevelRailProps {
  levels: Level[];
}

export function LevelRail({ levels }: LevelRailProps) {
  return (
    <div className="mt-13 flex items-center gap-3.5 flex-wrap">
      <span className="font-mono text-xs tracking-[0.08em] text-text-muted uppercase mr-1">
        Niveles
      </span>
      {levels.map((level) => (
        <span
          key={level.code}
          className={[
            "font-mono text-[13px] font-semibold px-4.5 py-2 rounded-full border-[1.5px] tracking-[0.03em] relative",
            level.status === "active" || level.status === "done"
              ? "bg-accent-2 text-paper border-accent-2"
              : "border-dashed border-[#b8b39f] text-text-muted group",
          ].join(" ")}
          title={level.status === "locked" ? "Próximamente disponible" : undefined}
        >
          {level.code}
        </span>
      ))}
    </div>
  );
}
