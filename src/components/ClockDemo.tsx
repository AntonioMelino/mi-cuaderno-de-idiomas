import { useState } from "react";

function toDigital(hour: number, minute: number) {
  const h = hour.toString().padStart(2, "0");
  const m = minute.toString().padStart(2, "0");
  return `${h}:${m}`;
}

function toSpokenEnglish(hour: number, minute: number) {
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  if (minute === 0) return `It's ${h12} o'clock`;
  if (minute === 15) return `It's quarter past ${h12}`;
  if (minute === 30) return `It's half past ${h12}`;
  if (minute === 45) {
    const next = h12 === 12 ? 1 : h12 + 1;
    return `It's quarter to ${next}`;
  }
  if (minute < 30) return `It's ${minute} past ${h12}`;
  const next = h12 === 12 ? 1 : h12 + 1;
  return `It's ${60 - minute} to ${next}`;
}

export function ClockDemo() {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(15);

  const hourAngle = (hour % 12) * 30 + minute * 0.5;
  const minuteAngle = minute * 6;

  return (
    <div className="mt-5 flex flex-col md:flex-row items-center gap-8 bg-paper rounded-xl border border-[#d9d2ba] p-6">
      <svg viewBox="0 0 200 200" className="w-40 h-40 shrink-0">
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="3"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30 * (Math.PI / 180);
          const x1 = 100 + 80 * Math.sin(angle);
          const y1 = 100 - 80 * Math.cos(angle);
          const x2 = 100 + 88 * Math.sin(angle);
          const y2 = 100 - 88 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--ink)"
              strokeWidth="2"
            />
          );
        })}
        <line
          x1="100"
          y1="100"
          x2={100 + 45 * Math.sin((hourAngle * Math.PI) / 180)}
          y2={100 - 45 * Math.cos((hourAngle * Math.PI) / 180)}
          stroke="var(--ink)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="100"
          x2={100 + 68 * Math.sin((minuteAngle * Math.PI) / 180)}
          y2={100 - 68 * Math.cos((minuteAngle * Math.PI) / 180)}
          stroke="var(--red)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="4.5" fill="var(--ink)" />
      </svg>

      <div className="flex-1 w-full">
        <p className="font-mono text-3xl text-ink mb-1">
          {toDigital(hour, minute)}
        </p>
        <p className="font-hand text-2xl text-red mb-5">
          {toSpokenEnglish(hour, minute)}
        </p>

        <label className="block font-mono text-[11px] uppercase tracking-[0.06em] text-text-muted mb-1">
          Hora
        </label>
        <input
          type="range"
          min={1}
          max={12}
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          className="w-full accent-red mb-4"
        />

        <label className="block font-mono text-[11px] uppercase tracking-[0.06em] text-text-muted mb-1">
          Minutos
        </label>
        <input
          type="range"
          min={0}
          max={55}
          step={5}
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value))}
          className="w-full accent-red"
        />
      </div>
    </div>
  );
}
