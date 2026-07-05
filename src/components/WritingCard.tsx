import { useEffect, useRef, useState } from "react";
import type { Writing } from "../types/Writing";

interface WritingCardProps {
  writing: Writing;
  index: number;
}

export function WritingCard({ writing, index }: WritingCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={[
        "bg-paper-dark border border-[#d9d2ba] border-l-[3px] border-l-accent rounded-[14px] overflow-hidden transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "hover:shadow-[0_10px_30px_-12px_rgba(28,37,65,0.25)]",
      ].join(" ")}
    >
      <button
        type="button"
        className="flex items-center gap-4.5 px-5.5 py-5 w-full text-left"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-mono text-[13px] text-accent font-semibold w-7 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-xl text-ink m-0 mb-0.5">
            {writing.title}
          </h3>
          <span className="font-mono text-[11.5px] text-text-muted tracking-[0.02em]">
            {writing.date} · {writing.words} palabras
          </span>
        </span>
        <span
          className={[
            "font-mono text-xl text-ink-soft shrink-0 transition-transform duration-300",
            isOpen ? "rotate-45" : "",
          ].join(" ")}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-500"
        style={{ maxHeight: isOpen ? "900px" : "0px" }}
      >
        <div className="px-5.5 pb-6 border-t border-dashed border-[#cfc7ab]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <div>
              <p className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink-soft mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-soft inline-block" />
                Original
              </p>
              <p
                className="text-[0.99rem] leading-[1.65] text-ink"
                dangerouslySetInnerHTML={{ __html: writing.original }}
              />
            </div>
            <div>
              <p className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-red mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red inline-block" />
                Corregido
              </p>
              <p
                className="text-[0.99rem] leading-[1.65] text-text"
                dangerouslySetInnerHTML={{ __html: writing.corrected }}
              />
            </div>
          </div>

          <div className="mt-5.5 px-4 py-3.5 bg-red/[0.06] border-l-[3px] border-red rounded-r-lg">
            <p className="font-hand text-2xl text-red m-0 leading-tight">
              "{writing.teacherNote}"
            </p>
            <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted mt-2">
              Nota de la profe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
