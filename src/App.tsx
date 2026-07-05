import { useState } from "react";
import { Hero } from "./components/Hero";
import { LanguageTabs } from "./components/LanguageTabs";
import { LevelRail } from "./components/LevelRail";
import { ContentTabs } from "./components/ContentTabs";
import { WritingsList } from "./components/WritingsList";
import { NotesList } from "./components/NotesList";
import { ProgressFooter } from "./components/ProgressFooter";
import {
  languages,
  writingsByLanguage,
  notesByLanguage,
} from "./data/languages";

function App() {
  const [selectedCode, setSelectedCode] = useState(languages[0].code);
  const [contentType, setContentType] = useState<"writings" | "notes">(
    "writings",
  );
  const selectedLanguage = languages.find((l) => l.code === selectedCode)!;

  const activeLevel = selectedLanguage.levels.find(
    (l) => l.status === "active" || l.status === "done",
  );
  const nextLevel =
    selectedLanguage.levels[
      selectedLanguage.levels.findIndex((l) => l === activeLevel) + 1
    ];

  const writings = activeLevel
    ? (writingsByLanguage[selectedLanguage.code]?.[activeLevel.code] ?? [])
    : [];
  const notes = activeLevel
    ? (notesByLanguage[selectedLanguage.code]?.[activeLevel.code] ?? [])
    : [];

  const hasContent = writings.length > 0 || notes.length > 0;

  return (
    <div className="max-w-[980px] mx-auto px-6">
      <div className="bg-ink text-paper font-mono text-[12.5px] tracking-[0.02em] text-center py-2 px-3 -mx-6 mb-0">
        📌 MI CUADERNO DE IDIOMAS — acá guardo los apuntes y los writings
      </div>

      <Hero
        currentLevel={activeLevel?.code ?? "—"}
        currentLanguage={selectedLanguage.name}
      />

      <div className="mt-2 mb-6">
        <LanguageTabs
          languages={languages}
          selected={selectedCode}
          onSelect={setSelectedCode}
        />
      </div>

      <LevelRail levels={selectedLanguage.levels} />

      {hasContent && activeLevel ? (
        <>
          <ContentTabs
            selected={contentType}
            onSelect={setContentType}
            writingsCount={writings.length}
            notesCount={notes.length}
          />

          {contentType === "writings" ? (
            <WritingsList levelCode={activeLevel.code} writings={writings} />
          ) : (
            <NotesList levelCode={activeLevel.code} notes={notes} />
          )}

          <ProgressFooter
            completed={writings.length}
            total={writings.length}
            levelCode={activeLevel.code}
            nextLevelCode={nextLevel?.code}
          />
        </>
      ) : (
        <div className="mt-16 mb-24 text-center py-16 border border-dashed border-[#d9d2ba] rounded-2xl">
          <p className="font-hand text-3xl text-ink-soft m-0">
            Todavía no arrancaste {selectedLanguage.name.toLowerCase()} 🌱
          </p>
          <p className="font-mono text-xs text-text-muted mt-3 uppercase tracking-[0.06em]">
            Cuando empieces, tus writings y apuntes van a aparecer acá
          </p>
        </div>
      )}

      <footer className="text-center pb-12 font-mono text-[11.5px] text-text-muted">
        hecho por Antonio · trabajo práctico de idiomas
      </footer>
    </div>
  );
}

export default App;
