import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, ListChecks } from "lucide-react";

export default function Nav({
  part,
  onSelectPart,
  partTitle,
}: {
  part: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  onSelectPart: (p: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => void;
  partTitle: string;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#0a0910]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-[60px] flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3 group shrink-0">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-yellow-300 text-[#0a0910] shadow-[0_0_24px_rgba(253,224,71,0.35)] group-hover:rotate-6 transition-transform">
            <GraduationCap size={19} strokeWidth={2.2} />
          </span>
          <span className="leading-tight hidden xs:block sm:block">
            <span className="block text-[13px] font-bold text-[#f4f1ea] tracking-wide">
              Informática para Concursos
            </span>
            <span className="block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {partTitle}
            </span>
          </span>
        </a>

        {/* seletor de parte */}
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const).map((p) => (
            <button
              key={p}
              onClick={() => onSelectPart(p)}
              className={`relative rounded-full px-2.5 sm:px-3.5 py-1.5 text-[12px] font-bold transition-colors cursor-pointer ${
                part === p ? "text-[#0a0910]" : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {part === p && (
                <motion.span
                  layoutId="partPill"
                  className="absolute inset-0 rounded-full bg-yellow-300"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                <span className="hidden lg:inline">Parte&nbsp;</span>
                {p}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden lg:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Série completa
          </span>
          <a
            href="#questoes"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 sm:px-4 py-2 text-[12px] font-bold text-yellow-200 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors"
          >
            <ListChecks size={14} />
            <span className="hidden sm:inline">Questões</span>
          </a>
        </div>
      </div>
      {/* barra de progresso de leitura */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-yellow-300 via-amber-300 to-cyan-300"
        style={{ scaleX }}
      />
    </header>
  );
}
