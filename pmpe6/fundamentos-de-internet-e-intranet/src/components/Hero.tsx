import { motion } from "framer-motion";
import { ArrowDown, ListChecks, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import NetworkCanvas from "./NetworkCanvas";

const ease = [0.22, 1, 0.36, 1] as const;

export interface HeroData {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
  stats: { icon: LucideIcon; big: string; small: string }[];
  terms: string[];
  palette: "warm" | "cool" | "fresh" | "azure" | "leaf" | "ember" | "teal" | "lime" | "rose";
  termsLabel: string;
  startId: string;
}

export default function Hero({ data }: { data: HeroData }) {
  return (
    <div id="inicio" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* fundo: rede de pacotes */}
      <NetworkCanvas
        className="absolute inset-0 w-full h-full opacity-70"
        variant={data.palette}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0910]/60 via-transparent to-[#0a0910] pointer-events-none" />
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] pointer-events-none ${
          data.palette === "cool"
            ? "bg-rose-300/[0.05]"
            : data.palette === "fresh"
              ? "bg-violet-300/[0.05]"
              : data.palette === "azure"
                ? "bg-blue-400/[0.06]"
                : data.palette === "leaf"
                  ? "bg-emerald-400/[0.06]"
                    : data.palette === "ember"
                    ? "bg-orange-400/[0.07]"
                    : data.palette === "teal"
                      ? "bg-teal-400/[0.07]"
                      : data.palette === "lime"
                        ? "bg-lime-400/[0.07]"
                        : data.palette === "rose"
                          ? "bg-rose-400/[0.07]"
                          : "bg-yellow-300/[0.05]"
        }`}
      />

      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-yellow-300/30 bg-yellow-300/[0.07] px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-200">
              {data.eyebrow}
            </span>
          </motion.div>

          <h1 className="font-display font-semibold text-[#f4f1ea] leading-[0.98] tracking-[-0.01em]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="block text-[10.5vw] sm:text-6xl lg:text-[76px] max-w-5xl"
            >
              {data.title}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.22, ease }}
              className="block text-[6vw] sm:text-2xl lg:text-[30px] mt-6 font-light italic text-zinc-400 max-w-4xl"
            >
              {data.subtitle}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            {data.description}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={`#${data.startId}`}
              className="group inline-flex items-center gap-3 rounded-full bg-yellow-300 px-7 py-3.5 text-sm font-bold text-[#0a0910] shadow-[0_0_40px_rgba(253,224,71,0.25)] hover:shadow-[0_0_60px_rgba(253,224,71,0.45)] transition-shadow"
            >
              Começar a leitura
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#questoes"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 hover:border-yellow-300/60 hover:text-yellow-200 transition-colors"
            >
              <ListChecks size={16} />
              Ir direto às questões
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-4"
          >
            {data.stats.map((s) => (
              <div key={s.small} className="flex items-center gap-3">
                <s.icon size={18} className="text-yellow-300/80" />
                <div className="leading-tight">
                  <p className="font-display text-xl font-semibold text-[#f4f1ea]">{s.big}</p>
                  <p className="text-[11.5px] text-zinc-500">{s.small}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* marquee de termos mais cobrados */}
      <div className="relative border-t border-b border-white/[0.07] bg-[#0d0c14]/80 backdrop-blur py-4 overflow-hidden">
        <p className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block text-[10px] font-bold uppercase tracking-[0.22em] text-yellow-300 bg-[#0d0c14] pr-4">
          {data.termsLabel} →
        </p>
        <div className="flex w-max animate-marquee gap-0 md:pl-52">
          {[...data.terms, ...data.terms].map((t, i) => (
            <span
              key={i}
              className="mx-4 inline-flex items-center gap-3 whitespace-nowrap text-[12.5px] font-mono text-zinc-500"
            >
              {t}
              <span className="w-1 h-1 rounded-full bg-yellow-300/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
