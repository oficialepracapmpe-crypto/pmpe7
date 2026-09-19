import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageSquareQuote, RotateCcw, Trophy, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Question } from "../data/questions";

export default function Quiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const QUESTIONS = questions;

  const answered = Object.keys(answers).length;
  const correctCount = useMemo(
    () => QUESTIONS.filter((q) => answers[q.id] === q.correct).length,
    [answers, QUESTIONS]
  );

  const choose = (qid: number, key: string) => {
    if (answers[qid]) return; // bloqueia após responder
    setAnswers((a) => ({ ...a, [qid]: key }));
  };

  return (
    <div>
      {/* placar */}
      <div className="sticky top-[72px] z-30 mb-10 rounded-2xl border border-white/[0.08] bg-[#0d0c14]/90 backdrop-blur-xl p-4 sm:p-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-3">
          <Trophy size={20} className="text-yellow-300" />
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-[#f4f1ea]">
              {correctCount}
              <span className="text-zinc-500 text-sm font-sans font-normal"> / {QUESTIONS.length} corretas</span>
            </p>
            <p className="text-[11px] text-zinc-500">
              {answered < QUESTIONS.length
                ? `${answered} respondida${answered !== 1 ? "s" : ""} — continue!`
                : correctCount / QUESTIONS.length >= 0.8
                  ? "Excelente! Você está pronto(a) para a banca."
                  : correctCount / QUESTIONS.length >= 0.6
                    ? "Bom desempenho — revise os itens que ficaram para trás."
                    : "Bom treino — revise os capítulos marcados e tente de novo."}
            </p>
          </div>
        </div>
        <div className="flex-1 min-w-[140px] h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-emerald-300"
            animate={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {answered > 0 && (
          <button
            onClick={() => setAnswers({})}
            className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-zinc-500 hover:text-yellow-200 transition-colors cursor-pointer"
          >
            <RotateCcw size={12} /> Refazer
          </button>
        )}
      </div>

      <ol className="space-y-8">
        {QUESTIONS.map((q, qi) => {
          const chosen = answers[q.id];
          const isDone = !!chosen;
          const options =
            q.tipo === "ce"
              ? [
                  { key: "C", label: "Certo" },
                  { key: "E", label: "Errado" },
                ]
              : q.options!;
          return (
            <li
              key={q.id}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="font-mono text-[11px] font-bold text-[#0a0910] bg-yellow-300 rounded-full px-2.5 py-1">
                  Q{qi + 1}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                  {q.banca}
                </span>
                {isDone &&
                  (chosen === q.correct ? (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                      <Check size={13} /> Você acertou
                    </span>
                  ) : (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-300">
                      <X size={13} /> Veja o comentário
                    </span>
                  ))}
              </div>

              <p className="text-[15.5px] leading-relaxed text-zinc-200 mb-5">{q.enunciado}</p>

              <div className={`grid gap-2.5 ${q.tipo === "ce" ? "grid-cols-2 max-w-sm" : ""}`}>
                {options.map((op) => {
                  const isCorrect = q.correct === op.key;
                  const isChosen = chosen === op.key;
                  let cls =
                    "border-white/[0.08] bg-white/[0.02] hover:border-yellow-300/50 hover:bg-yellow-300/[0.05] text-zinc-300";
                  if (isDone) {
                    if (isCorrect)
                      cls = "border-emerald-400/60 bg-emerald-400/[0.1] text-emerald-200";
                    else if (isChosen)
                      cls = "border-rose-400/60 bg-rose-400/[0.08] text-rose-200";
                    else cls = "border-white/[0.05] bg-transparent text-zinc-500 opacity-70";
                  }
                  return (
                    <button
                      key={op.key}
                      onClick={() => choose(q.id, op.key)}
                      disabled={isDone}
                      className={`flex items-start gap-3 rounded-xl border p-3.5 text-left text-[14px] leading-relaxed transition-all cursor-pointer disabled:cursor-default ${cls}`}
                    >
                      <span
                        className={`shrink-0 grid place-items-center w-6 h-6 rounded-md font-mono text-[11px] font-bold uppercase ${
                          isDone && isCorrect
                            ? "bg-emerald-400 text-[#0a0910]"
                            : isDone && isChosen
                              ? "bg-rose-400 text-[#0a0910]"
                              : "bg-white/[0.07] text-zinc-300"
                        }`}
                      >
                        {op.key}
                      </span>
                      <span className="pt-0.5">{op.label}</span>
                      {isDone && isCorrect && <Check size={16} className="ml-auto mt-1 shrink-0" />}
                      {isDone && isChosen && !isCorrect && (
                        <X size={16} className="ml-auto mt-1 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isDone && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 rounded-xl border border-yellow-300/25 bg-yellow-300/[0.06] p-4.5 sm:p-5">
                      <p className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-yellow-300 mb-2">
                        <MessageSquareQuote size={14} />
                        Comentário do professor
                      </p>
                      <p className="text-[14px] leading-relaxed text-zinc-300">{q.comentario}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
