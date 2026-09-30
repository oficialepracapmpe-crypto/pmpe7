import { ChevronDown, Layers3, Scale, Sparkles } from "lucide-react";
import type { Topic } from "../data/portuguese";
import { Callout, P, Reveal, SectionShell } from "../components/ui";
import Quiz from "../components/Quiz";

export default function TopicPage({ topic }: { topic: Topic }) {
  return (
    <>
      <SectionShell id="contexto" num="01" kicker="Contexto e natureza do tema" title="Antes de classificar, entenda o mecanismo" lead="Origem, relevância e os limites conceituais que orientam uma leitura segura.">
        <Reveal className="space-y-5">
          {topic.context.map((paragraph) => <P key={paragraph}>{paragraph}</P>)}
          <Callout variant="prova" title="Por que isso cai em concursos militares?">
            <p>{topic.importance}</p>
          </Callout>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <Scale className="text-cyan-300" size={20} />
              <h3 className="font-display text-xl font-semibold text-[#f4f1ea]">Distinções indispensáveis</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {topic.distinctions.map((item) => <li key={item} className="rounded-xl border border-white/[0.07] bg-black/10 p-4 text-[14px] leading-relaxed text-zinc-300"><span className="mr-2 text-yellow-300">◆</span>{item}</li>)}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      <Divider />

      <SectionShell id="analise" num="02" kicker="Análise ponto a ponto" title="Classificações, testes e efeitos de sentido" lead="Abra cada item para revisar conceito, cobrança, armadilha, exemplo e macete.">
        <div className="space-y-10">
          {topic.groups.map((group, groupIndex) => (
            <Reveal key={group.title}>
              <div className="mb-5 flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-yellow-300/25 bg-yellow-300/[0.08] font-mono text-xs font-bold text-yellow-300">{String(groupIndex + 1).padStart(2, "0")}</span>
                <div><h3 className="font-display text-2xl font-semibold text-[#f4f1ea]">{group.title}</h3><p className="mt-1 text-sm leading-relaxed text-zinc-500">{group.intro}</p></div>
              </div>
              <div className="space-y-3">
                {group.points.map((point, index) => (
                  <details key={point.name} className="study-accordion group rounded-2xl border border-white/[0.08] bg-white/[0.025] open:border-yellow-300/25 open:bg-yellow-300/[0.025]" open={groupIndex === 0 && index === 0}>
                    <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-5 sm:px-6">
                      <span className="font-mono text-[10px] font-bold text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                      <h4 className="flex-1 text-[15px] font-bold text-zinc-100">{point.name}</h4>
                      <ChevronDown size={17} className="text-zinc-500 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-white/[0.07] px-5 pb-2 pt-2 sm:px-6">
                      <Callout variant="conceito"><p>{point.concept}</p></Callout>
                      <Callout variant="prova"><p>{point.exam}</p></Callout>
                      <Callout variant="pegadinha"><p>{point.trap}</p></Callout>
                      <Callout variant="exemplo"><p className="italic">“{point.example}”</p></Callout>
                      <Callout variant="macete"><p>{point.mnemonic}</p></Callout>
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <Divider />

      <SectionShell id="resumo" num="03" kicker="Quadro-resumo" title="Revisão de alta velocidade" lead="Compare os conceitos que mais se confundem antes de partir para a questão.">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/[0.09]">
            <div className="grid grid-cols-[1fr_1.25fr_1.2fr] bg-yellow-300 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0a0910] sm:px-6">
              <span>Item</span><span>Regra central</span><span>Pista de prova</span>
            </div>
            {topic.summary.map((row, index) => (
              <div key={row.item} className={`grid grid-cols-[1fr_1.25fr_1.2fr] gap-3 px-4 py-4 text-[12px] leading-relaxed sm:px-6 sm:text-sm ${index % 2 ? "bg-white/[0.015]" : "bg-white/[0.035]"}`}>
                <strong className="text-zinc-100">{row.item}</strong><span className="text-zinc-300">{row.rule}</span><span className="text-cyan-200">{row.clue}</span>
              </div>
            ))}
          </div>
          <Callout variant="macete" title="Roteiro universal">
            <p>Leia o contexto → localize verbos e conectores → aplique um teste de substituição → confira o efeito de sentido → só então nomeie a classificação.</p>
          </Callout>
        </Reveal>
      </SectionShell>

      <Divider />

      <SectionShell id="questao" num="04" kicker="Questões-treino" title="Agora é com você" lead="Responda para liberar os gabaritos comentados. Você pode refazer quantas vezes quiser.">
        <Quiz questions={topic.questions ?? [topic.question]} />
      </SectionShell>

      <div className="mb-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-6 sm:p-8">
        <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-300 text-[#0a0910]"><Sparkles size={20} /></span><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Tópico concluído</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">Use as abas no topo para avançar ou retornar. O progresso e o tema visual permanecem disponíveis durante a sessão.</p></div></div>
      </div>
    </>
  );
}

function Divider() {
  return <div className="flex items-center gap-4"><div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" /><Layers3 size={15} className="text-zinc-700" /><div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>;
}
