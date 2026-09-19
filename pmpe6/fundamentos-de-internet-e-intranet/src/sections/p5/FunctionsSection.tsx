import { AnimatePresence, motion } from "framer-motion";
import { AlertOctagon, Calculator, Flame, Sigma } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";
import { ERROS_EXCEL, FUNC_CATS, TOTAL_FUNCS } from "../../data/functions5";

export default function FunctionsSection() {
  const [cat, setCat] = useState(FUNC_CATS[0].id);
  const atual = FUNC_CATS.find((c) => c.id === cat)!;

  return (
    <SectionShell
      id="funcoes"
      num="03"
      kicker="O coração da disciplina · calcule com o Excel"
      title={
        <>
          Fórmulas e <span className="italic text-emerald-300">funções</span>
        </>
      }
      lead={
        <>
          <Hot tone="e">Fórmula</Hot> é qualquer cálculo que você monta na célula; ela{" "}
          <Hot tone="e">sempre começa com =</Hot>. <Hot tone="c">Função</Hot> é uma fórmula
          pronta, com nome e argumentos entre parênteses. Aqui estão as{" "}
          <strong className="text-zinc-100">{TOTAL_FUNCS} funções</strong> que realmente caem, em
          quatro famílias.
        </>
      }
    >
      {/* anatomia */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5">
            Anatomia de uma função
          </p>
          <div className="flex flex-wrap items-center gap-y-3 font-mono text-lg sm:text-2xl">
            <span className="px-2.5 py-1.5 rounded-lg bg-yellow-300/[0.12] text-yellow-200 border border-yellow-300/30">=</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-emerald-300/[0.12] text-emerald-200 border border-emerald-300/30">SOMA</span>
            <span className="px-1.5 text-zinc-500">(</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-cyan-300/[0.12] text-cyan-200 border border-cyan-300/30">B2:B10</span>
            <span className="px-1.5 text-violet-300 font-bold">;</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-cyan-300/[0.12] text-cyan-200 border border-cyan-300/30">D2</span>
            <span className="px-1.5 text-zinc-500">)</span>
          </div>
          <div className="grid sm:grid-cols-4 gap-4 mt-6 text-[12.5px] leading-relaxed">
            <p className="text-zinc-400"><span className="text-yellow-300 font-bold">=</span> — abre toda fórmula. Sem ele, o Excel entende texto.</p>
            <p className="text-zinc-400"><span className="text-emerald-300 font-bold">SOMA</span> — o nome da função (sem acento em SOMA, mas MÉDIA tem!).</p>
            <p className="text-zinc-400"><span className="text-cyan-300 font-bold">B2:B10</span> — argumento em intervalo: "de B2 ATÉ B10".</p>
            <p className="text-zinc-400"><span className="text-violet-300 font-bold">;</span> — separa argumentos (no Excel PT-BR é ponto e vírgula; em inglês, vírgula).</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha" title="os dois-pontos × o ponto e vírgula">
            <p>
              <code className="font-mono text-zinc-100">=SOMA(A1:A3)</code> soma A1, A2 <em>e</em> A3
              (três células — <strong className="text-zinc-100">intervalo</strong>).{" "}
              <code className="font-mono text-zinc-100">=SOMA(A1;A3)</code> soma{" "}
              <strong className="text-zinc-100">apenas</strong> A1 e A3 (duas células — a do meio
              fica de fora). Trocar um pelo outro é a pegadinha mais frequente da disciplina.
            </p>
          </Callout>
          <Callout variant="macete" title="leia o ':' como 'até' e o ';' como 'e'">
            <p>
              <code className="font-mono text-emerald-200">A1:A10</code> = "de A1{" "}
              <strong className="text-zinc-100">até</strong> A10".{" "}
              <code className="font-mono text-emerald-200">A1;A10</code> = "A1{" "}
              <strong className="text-zinc-100">e</strong> A10". Funciona sempre — inclusive em
              SOMA, MÉDIA, MÁXIMO e companhia.
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* navegador de funções */}
      <Reveal>
        <div className="flex flex-wrap gap-2 mt-10 mb-5">
          {FUNC_CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full px-4 py-2.5 text-[12.5px] font-bold cursor-pointer transition-colors ${
                cat === c.id
                  ? "bg-emerald-300 text-[#0a0910]"
                  : "border border-white/12 text-zinc-400 hover:border-emerald-300/50 hover:text-zinc-200"
              }`}
            >
              {c.label}
              <span className="ml-2 opacity-60 font-mono text-[10.5px]">{c.fns.length}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-[13px] text-zinc-500 mb-5">{atual.intro}</p>
          <div className="space-y-3">
            {atual.fns.map((f) => (
              <div
                key={f.n}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-emerald-300/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  {!!f.q && <Flame size={13} className="text-yellow-300 shrink-0" />}
                  <h3 className={`font-mono text-[15px] font-bold ${atual.cor}`}>{f.n}</h3>
                  <code className="font-mono text-[11.5px] text-zinc-500 bg-white/[0.04] rounded px-2 py-1">
                    {f.s}
                  </code>
                </div>
                <p className="text-[13.5px] leading-relaxed text-zinc-300 mb-2">{f.d}</p>
                <code className="block font-mono text-[12px] text-cyan-200 bg-cyan-300/[0.06] border border-cyan-300/20 rounded-lg px-3 py-2">
                  {f.ex}
                </code>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* destaque SE e PROCV */}
      <Reveal className="mt-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/[0.06] p-6">
            <Calculator size={19} className="text-yellow-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Dissecando o =SE()</h3>
            <code className="block font-mono text-[12.5px] text-yellow-100 mb-3 leading-relaxed">
              =SE(<span className="text-cyan-300">A1&gt;=7</span>;
              <span className="text-emerald-300">"Aprovado"</span>;
              <span className="text-rose-300">"Reprovado"</span>)
            </code>
            <ul className="space-y-1.5 text-[13px] leading-relaxed text-zinc-300">
              <li><span className="text-cyan-300 font-bold">1º</span> teste lógico (a pergunta)</li>
              <li><span className="text-emerald-300 font-bold">2º</span> o que fazer se for VERDADEIRO</li>
              <li><span className="text-rose-300 font-bold">3º</span> o que fazer se for FALSO</li>
            </ul>
            <p className="mt-3 text-[12.5px] text-zinc-400">
              Textos SEMPRE entre aspas; números e referências, nunca. Para 3+ faixas, aninhe outro
              SE no lugar do terceiro argumento.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.05] p-6">
            <Sigma size={19} className="text-cyan-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Dissecando o =PROCV()</h3>
            <code className="block font-mono text-[12.5px] text-cyan-100 mb-3 leading-relaxed">
              =PROCV(<span className="text-yellow-300">A2</span>;
              <span className="text-emerald-300">$E$2:$G$50</span>;
              <span className="text-violet-300">3</span>;
              <span className="text-rose-300">FALSO</span>)
            </code>
            <ul className="space-y-1.5 text-[13px] leading-relaxed text-zinc-300">
              <li><span className="text-yellow-300 font-bold">1º</span> o valor procurado</li>
              <li><span className="text-emerald-300 font-bold">2º</span> a tabela (trave com $!)</li>
              <li><span className="text-violet-300 font-bold">3º</span> nº da coluna a retornar</li>
              <li><span className="text-rose-300 font-bold">4º</span> FALSO/0 = exata; VERDADEIRO/1 = aproximada</li>
            </ul>
            <p className="mt-3 text-[12.5px] text-zinc-400">
              Regra de ouro: o valor procurado precisa estar na{" "}
              <strong className="text-zinc-200">PRIMEIRA coluna</strong> da matriz. Não achou? →{" "}
              <span className="font-mono text-rose-300">#N/D</span>.
            </p>
          </div>
        </div>
      </Reveal>

      {/* erros */}
      <Reveal className="mt-10">
        <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7">
          <div className="flex items-center gap-2.5 mb-5">
            <AlertOctagon size={18} className="text-rose-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">As mensagens de erro do Excel</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {ERROS_EXCEL.map((e) => (
              <div key={e.e} className="flex items-start gap-3 rounded-xl bg-[#0d0c14] border border-white/[0.07] p-4">
                <code className="font-mono text-[12.5px] font-bold text-rose-300 shrink-0 bg-rose-400/10 rounded px-2 py-1">
                  {e.e}
                </code>
                <p className="text-[12.5px] leading-relaxed text-zinc-400">{e.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-500">
            Truque para memorizar: <strong className="text-zinc-300">#NOME?</strong> = "não conheço
            esse nome" (erro de digitação da função) ·{" "}
            <strong className="text-zinc-300">#VALOR!</strong> = "o valor é de tipo errado" ·{" "}
            <strong className="text-zinc-300">#REF!</strong> = "a referência sumiu" ·{" "}
            <strong className="text-zinc-300">#####</strong> = "só falta espaço na coluna".
          </p>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Um último alerta valioso: no <Hot tone="e">Excel em português</Hot>, os nomes das funções
          são traduzidos (SUM → SOMA, IF → SE, VLOOKUP → PROCV, COUNT → CONT.NÚM) e o separador de
          argumentos é o <Hot tone="v">ponto e vírgula</Hot>. Em provas que citam a versão em
          inglês, a vírgula reaparece — leia o enunciado antes de escolher a alternativa.
        </P>
      </Reveal>
    </SectionShell>
  );
}
