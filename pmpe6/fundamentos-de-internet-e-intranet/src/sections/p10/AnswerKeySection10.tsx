import { CheckCircle2, MessageSquareQuote } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_10 } from "../../data/questions10";

function answerLabel(correct: string, tipo: string, options?: { key: string; label: string }[]) {
  if (tipo === "ce") return correct === "C" ? "Certo" : "Errado";
  return `${correct.toUpperCase()}) ${options?.find((option) => option.key === correct)?.label ?? ""}`;
}

export default function AnswerKeySection10() {
  return (
    <SectionShell
      id="gabarito"
      num="06"
      kicker="Correção · aprenda com cada alternativa"
      title={<>Gabarito <span className="italic text-yellow-300">comentado</span></>}
      lead="Confira a resposta correta e leia o fundamento de cada item. A justificativa é parte do estudo: ela mostra por que a alternativa certa é certa e qual pegadinha foi evitada."
    >
      <Reveal>
        <div className="mb-8 rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.06] p-5 sm:p-6">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300 mb-2"><MessageSquareQuote size={15} /> Como usar o gabarito</p>
          <p className="text-[14px] leading-relaxed text-zinc-300">Anote seu desempenho antes de abrir esta parte. Depois, classifique os erros por tema: rede/segurança, Windows, texto, planilha ou apresentação. Revise a comparação da Parte 10 quando o erro envolver Word × Writer, Excel × Calc ou PowerPoint × Impress.</p>
        </div>
      </Reveal>

      <ol className="space-y-3">
        {QUESTIONS_10.map((question, index) => (
          <Reveal key={question.id} delay={index < 6 ? index * 0.02 : 0}>
            <li className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
              <div className="flex flex-wrap items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-emerald-300 text-[#0a0910] font-mono text-[11px] font-bold shrink-0">Q{question.id}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-500">{question.banca}</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/25 bg-emerald-300/[0.07] px-2 py-0.5 text-[10px] font-bold text-emerald-300"><CheckCircle2 size={11} /> resposta</span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-zinc-200 mb-3">{answerLabel(question.correct, question.tipo, question.options)}</p>
                  <p className="text-[13.5px] leading-relaxed text-zinc-400">{question.comentario}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
