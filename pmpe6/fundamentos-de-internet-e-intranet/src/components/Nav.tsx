import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, ListChecks, Moon, Sun } from "lucide-react";

export default function Nav({ part, onSelectPart, partTitle, subject, topics, theme, onToggleTheme }: {
  part: number;
  onSelectPart: (p: number) => void;
  partTitle: string;
  subject: string;
  topics: string[];
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const previous = part > 1;
  const next = part < topics.length;

  return (
    <header className="site-nav fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#0a0910]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-8 h-[64px] flex items-center justify-between gap-2 sm:gap-4">
        <a href="#inicio" className="flex items-center gap-3 group shrink-0" aria-label="Voltar ao início">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-yellow-300 text-[#0a0910] shadow-[0_0_24px_rgba(253,224,71,0.35)] group-hover:rotate-6 transition-transform"><GraduationCap size={19} strokeWidth={2.2} /></span>
          <span className="leading-tight hidden lg:block"><span className="block text-[13px] font-bold text-[#f4f1ea] tracking-wide">{subject} para Oficial PMPE</span><span className="block max-w-[210px] truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{partTitle}</span></span>
        </a>

        <div className="module-picker flex min-w-0 flex-1 max-w-xl items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          <button disabled={!previous} onClick={() => previous && onSelectPart(part - 1)} className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-zinc-400 hover:bg-white/[0.06] hover:text-yellow-300 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer" aria-label="Módulo anterior"><ChevronLeft size={15} /></button>
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">Selecionar módulo</span>
            <select value={part} onChange={(event) => onSelectPart(Number(event.target.value))} className="module-select h-8 w-full cursor-pointer appearance-none rounded-full border-0 bg-yellow-300 px-3 pr-8 text-center text-[11px] font-bold text-[#0a0910] outline-none sm:text-xs" title={partTitle}>
              {topics.map((topic, index) => <option key={topic} value={index + 1}>{index + 1}. {topic}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-[#0a0910]">▼</span>
          </label>
          <button disabled={!next} onClick={() => next && onSelectPart(part + 1)} className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-zinc-400 hover:bg-white/[0.06] hover:text-yellow-300 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer" aria-label="Próximo módulo"><ChevronRight size={15} /></button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button onClick={onToggleTheme} className="theme-toggle grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-yellow-300/50 hover:text-yellow-300 cursor-pointer" aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"} title={theme === "dark" ? "Modo claro" : "Modo escuro"}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
          <a href="#questao" className="hidden md:inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3.5 py-2 text-[12px] font-bold text-yellow-200 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors"><ListChecks size={14} /><span className="hidden xl:inline">Questão</span></a>
        </div>
      </div>
      <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-yellow-300 via-amber-300 to-cyan-300" style={{ scaleX }} />
    </header>
  );
}
