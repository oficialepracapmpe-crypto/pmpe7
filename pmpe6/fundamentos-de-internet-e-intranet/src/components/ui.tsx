import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

/* ============ termo destacado (marca-texto) ============ */
export function Hot({
  tone = "y",
  children,
}: {
  tone?: "y" | "c" | "v" | "e" | "r";
  children: ReactNode;
}) {
  const map = { y: "hl hl-y", c: "hl hl-c", v: "hl hl-v", e: "hl hl-e", r: "hl hl-r" };
  return <span className={map[tone]}>{children}</span>;
}

/* ============ caixas didáticas ============ */
type Variant = "conceito" | "prova" | "pegadinha" | "macete" | "exemplo";

const VARIANTS: Record<
  Variant,
  { label: string; icon: LucideIcon; ring: string; bg: string; iconColor: string; labelColor: string }
> = {
  conceito: {
    label: "Conceito",
    icon: BookOpen,
    ring: "border-violet-400/25",
    bg: "bg-violet-400/[0.06]",
    iconColor: "text-violet-300",
    labelColor: "text-violet-300",
  },
  prova: {
    label: "Cai na prova!",
    icon: Target,
    ring: "border-yellow-300/30",
    bg: "bg-yellow-300/[0.07]",
    iconColor: "text-yellow-300",
    labelColor: "text-yellow-300",
  },
  pegadinha: {
    label: "Pegadinha clássica",
    icon: AlertTriangle,
    ring: "border-rose-400/30",
    bg: "bg-rose-400/[0.06]",
    iconColor: "text-rose-300",
    labelColor: "text-rose-300",
  },
  macete: {
    label: "Macete do professor",
    icon: BrainCircuit,
    ring: "border-emerald-400/30",
    bg: "bg-emerald-400/[0.06]",
    iconColor: "text-emerald-300",
    labelColor: "text-emerald-300",
  },
  exemplo: {
    label: "Exemplo prático",
    icon: Lightbulb,
    ring: "border-cyan-400/30",
    bg: "bg-cyan-400/[0.06]",
    iconColor: "text-cyan-300",
    labelColor: "text-cyan-300",
  },
};

export function Callout({
  variant,
  title,
  children,
}: {
  variant: Variant;
  title?: string;
  children: ReactNode;
}) {
  const v = VARIANTS[variant];
  const Icon = v.icon;
  return (
    <div className={`my-6 rounded-2xl border ${v.ring} ${v.bg} p-5 sm:p-6`}>
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`grid place-items-center w-7 h-7 rounded-lg border ${v.ring} ${v.iconColor}`}>
          <Icon size={15} strokeWidth={2.2} />
        </span>
        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${v.labelColor}`}>
          {v.label}
        </span>
        {title && <span className="text-sm font-semibold text-zinc-200">— {title}</span>}
      </div>
      <div className="text-[15px] leading-relaxed text-zinc-300 space-y-2">{children}</div>
    </div>
  );
}

/* ============ reveal on scroll ============ */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============ cabeçalho de capítulo ============ */
export function SectionShell({
  id,
  num,
  kicker,
  title,
  lead,
  children,
}: {
  id: string;
  num: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 sm:py-24">
      <Reveal>
        <div className="flex items-start gap-5 sm:gap-8">
          <span
            aria-hidden
            className="ghost-num font-display font-black text-[64px] sm:text-[96px] shrink-0 -mt-2"
          >
            {num}
          </span>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300">
              {kicker}
            </span>
            <h2 className="font-display text-[34px] sm:text-5xl font-semibold leading-[1.05] text-[#f4f1ea] mt-2 mb-4">
              {title}
            </h2>
            {lead && (
              <p className="text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl">{lead}</p>
            )}
          </div>
        </div>
      </Reveal>
      <div className="mt-8 sm:mt-12">{children}</div>
    </section>
  );
}

/* parágrafo padrão */
export function P({ children }: { children: ReactNode }) {
  return <p className="text-[16.5px] sm:text-[17px] leading-[1.85] text-zinc-300/95 mb-5">{children}</p>;
}
