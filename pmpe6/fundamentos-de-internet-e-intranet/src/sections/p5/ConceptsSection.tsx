import { motion } from "framer-motion";
import { FileSpreadsheet, Grid3x3, Layers, Lock, Move, Table2 } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* ---------- grade interativa ---------- */
const COLS = ["A", "B", "C", "D"];
const ROWS = [1, 2, 3, 4, 5];

const CONTENT: Record<string, string> = {
  A1: "Produto",
  B1: "Qtd",
  C1: "Preço",
  D1: "Total",
  A2: "Caneta",
  B2: "10",
  C2: "2,50",
  D2: "=B2*C2",
  A3: "Caderno",
  B3: "4",
  C3: "18,00",
  D3: "=B3*C3",
  A4: "Borracha",
  B4: "7",
  C4: "1,20",
  D4: "=B4*C4",
  A5: "TOTAL",
  D5: "=SOMA(D2:D4)",
};

function SheetGrid() {
  const [sel, setSel] = useState("D5");
  const valor = CONTENT[sel] ?? "";
  const isFormula = valor.startsWith("=");

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#0d0c14] overflow-hidden">
      {/* barra de fórmulas */}
      <div className="flex items-stretch gap-0 border-b border-white/[0.08] bg-white/[0.03]">
        <div className="w-[88px] shrink-0 grid place-items-center border-r border-white/[0.08] px-2">
          <span className="font-mono text-[12px] font-bold text-emerald-300">{sel}</span>
        </div>
        <div className="grid place-items-center px-3 border-r border-white/[0.08]">
          <span className="font-serif italic text-[13px] text-zinc-500">fx</span>
        </div>
        <div className="flex-1 px-3 py-2.5 font-mono text-[13px] text-zinc-200 truncate">
          {valor || <span className="text-zinc-600">(célula vazia)</span>}
        </div>
      </div>

      {/* grade */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr>
              <th className="w-10 bg-white/[0.05] border border-white/[0.07] p-1.5" />
              {COLS.map((c) => (
                <th
                  key={c}
                  className="bg-white/[0.05] border border-white/[0.07] p-1.5 text-[11px] font-bold text-zinc-400"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r}>
                <td className="bg-white/[0.05] border border-white/[0.07] p-1.5 text-center text-[11px] font-bold text-zinc-400">
                  {r}
                </td>
                {COLS.map((c) => {
                  const id = `${c}${r}`;
                  const v = CONTENT[id] ?? "";
                  const active = sel === id;
                  return (
                    <td key={id} className="border border-white/[0.07] p-0">
                      <button
                        onClick={() => setSel(id)}
                        className={`w-full h-full px-2.5 py-2 text-left text-[12px] font-mono transition-colors cursor-pointer ${
                          active
                            ? "bg-emerald-300/20 text-emerald-100 ring-2 ring-emerald-300 ring-inset"
                            : v.startsWith("=")
                              ? "text-cyan-300 hover:bg-white/[0.05]"
                              : "text-zinc-300 hover:bg-white/[0.05]"
                        }`}
                      >
                        {v.startsWith("=") ? (
                          <span>{id === "D5" ? "84,40" : "…"}</span>
                        ) : (
                          v || <span className="opacity-0">.</span>
                        )}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* abas */}
      <div className="flex items-center gap-1 border-t border-white/[0.08] bg-white/[0.03] px-3 py-2">
        {["Planilha1", "Planilha2", "Planilha3"].map((p, i) => (
          <span
            key={p}
            className={`text-[11px] px-3 py-1 rounded-t font-medium ${
              i === 0 ? "bg-[#0d0c14] text-emerald-300 border-t-2 border-emerald-300" : "text-zinc-500"
            }`}
          >
            {p}
          </span>
        ))}
        <span className="text-[11px] text-zinc-600 ml-2">+</span>
        <span className="ml-auto text-[10.5px] text-zinc-600">
          ← abas = PLANILHAS · o arquivo todo = PASTA DE TRABALHO
        </span>
      </div>

      <motion.p
        key={sel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-3 text-[12.5px] text-zinc-400 border-t border-white/[0.07]"
      >
        {isFormula ? (
          <>
            <strong className="text-cyan-300">Célula {sel}</strong> contém uma FÓRMULA:{" "}
            <code className="font-mono text-cyan-200">{valor}</code>. Na planilha aparece o{" "}
            <strong className="text-zinc-200">resultado</strong>; na barra de fórmulas, o{" "}
            <strong className="text-zinc-200">conteúdo real</strong>. É essa diferença que as bancas
            exploram!
          </>
        ) : valor ? (
          <>
            <strong className="text-emerald-300">Célula {sel}</strong> contém o valor constante{" "}
            <code className="font-mono text-zinc-200">{valor}</code> — digitado diretamente, sem
            cálculo.
          </>
        ) : (
          <>
            <strong className="text-zinc-300">Célula {sel}</strong> está vazia. Clique nas células
            azuis (coluna D) para ver fórmulas de verdade.
          </>
        )}
      </motion.p>
    </div>
  );
}

/* ---------- referências ---------- */
const REFS = [
  {
    t: "Relativa — A1",
    cor: "border-cyan-300/30 bg-cyan-300/[0.06]",
    ic: "text-cyan-300",
    d: "Muda quando a fórmula é copiada: ao arrastar uma linha para baixo, A1 vira A2. É o padrão do Excel.",
    ex: "=A1*2 copiado de B1 para B2 → =A2*2",
  },
  {
    t: "Absoluta — $A$1",
    cor: "border-yellow-300/30 bg-yellow-300/[0.06]",
    ic: "text-yellow-300",
    d: "Travada por completo: o cifrão congela coluna E linha. Copie para onde quiser, ela não muda. Ideal para taxas/cotações fixas.",
    ex: "=A1*$C$1 copiado para baixo → =A2*$C$1",
  },
  {
    t: "Mista — A$1 ou $A1",
    cor: "border-violet-300/30 bg-violet-300/[0.06]",
    ic: "text-violet-300",
    d: "Trava só metade: A$1 fixa a LINHA (coluna muda); $A1 fixa a COLUNA (linha muda). O cifrão trava o que vem DEPOIS dele.",
    ex: "=A$1 copiado para baixo → continua A$1",
  },
];

export default function ConceptsSection() {
  return (
    <SectionShell
      id="conceitos"
      num="02"
      kicker="Fundamentos · o vocabulário obrigatório"
      title={
        <>
          Células, planilhas e <span className="italic text-emerald-300">pastas de trabalho</span>
        </>
      }
      lead={
        <>
          O Excel é uma <Hot tone="e">planilha eletrônica</Hot>: uma grade de{" "}
          <Hot tone="e">células</Hot> onde se organizam dados e se fazem cálculos automáticos. Antes
          de qualquer fórmula, é preciso acertar o vocabulário — e é justamente aí que metade dos
          candidatos escorrega.
        </>
      }
    >
      {/* hierarquia */}
      <Reveal>
        <div className="grid sm:grid-cols-3 gap-4 my-8">
          {[
            {
              icon: FileSpreadsheet,
              t: "Pasta de trabalho",
              d: "É o ARQUIVO inteiro, salvo com extensão .xlsx. Contém uma ou várias planilhas.",
              destaque: "O arquivo",
            },
            {
              icon: Layers,
              t: "Planilha (worksheet)",
              d: "Cada ABA na parte inferior (Planilha1, Planilha2...). Pode-se inserir, renomear, mover, copiar, ocultar e colorir.",
              destaque: "A aba",
            },
            {
              icon: Grid3x3,
              t: "Célula",
              d: "O cruzamento de uma COLUNA (letra) com uma LINHA (número). Endereço = A1, B7, XFD1048576.",
              destaque: "O quadradinho",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.05] p-5"
            >
              <c.icon size={20} className="text-emerald-300 mb-3" />
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-emerald-300 mb-1">
                {c.destaque}
              </p>
              <h3 className="text-[15px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
        <Callout variant="pegadinha" title="a inversão clássica">
          <p>
            <em>"A planilha é o arquivo e a pasta de trabalho é cada aba."</em> →{" "}
            <strong className="text-rose-300">ERRADO, está invertido!</strong>{" "}
            <strong className="text-zinc-100">Pasta de trabalho = arquivo</strong> (.xlsx);{" "}
            <strong className="text-zinc-100">planilha = aba</strong> dentro dele. Pense numa pasta
            física cheia de folhas: a pasta é o arquivo; cada folha, uma planilha.
          </p>
        </Callout>
      </Reveal>

      {/* grade interativa */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-4 mt-10">
          Clique nas células e observe a barra de fórmulas
        </p>
        <SheetGrid />
      </Reveal>

      {/* números da planilha */}
      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {[
            { n: "1.048.576", d: "linhas por planilha (2²⁰)" },
            { n: "16.384", d: "colunas — de A até XFD" },
            { n: "A1", d: "primeira célula; Ctrl+Home volta para ela" },
            { n: "255", d: "caracteres no nome de uma planilha (sem : \\ / ? * [ ])" },
          ].map((x) => (
            <div key={x.d} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="font-display text-2xl font-semibold text-emerald-300">{x.n}</p>
              <p className="text-[12.5px] leading-relaxed text-zinc-400 mt-1">{x.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* tipos de conteúdo */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Table2 size={18} className="text-cyan-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">O que cabe dentro de uma célula</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[13.5px] leading-relaxed text-zinc-400">
            <p>
              <strong className="text-zinc-200">Número:</strong> alinhado à DIREITA por padrão.
              Inclui datas e horas (que, internamente, são números de série).
            </p>
            <p>
              <strong className="text-zinc-200">Texto:</strong> alinhado à ESQUERDA por padrão. Um
              número "forçado" a texto também vai para a esquerda.
            </p>
            <p>
              <strong className="text-zinc-200">Fórmula:</strong> começa com <code className="font-mono text-cyan-200">=</code>{" "}
              e devolve um resultado calculado (também aceita começar com + ou −).
            </p>
            <p>
              <strong className="text-zinc-200">Valor lógico:</strong> VERDADEIRO ou FALSO,
              centralizado por padrão.
            </p>
          </div>
          <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
            Dica de prova: o <strong className="text-zinc-300">alinhamento padrão denuncia o
            tipo</strong>. Se um "número" aparece à esquerda, provavelmente está armazenado como
            texto — e não entrará nas somas.
          </p>
        </div>
      </Reveal>

      {/* referências */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4 mt-10">
          Referências: o assunto nº 1 do Excel em concursos
        </p>
        <div className="grid lg:grid-cols-3 gap-4">
          {REFS.map((r) => (
            <div key={r.t} className={`rounded-2xl border p-5 ${r.cor}`}>
              <Lock size={18} className={`${r.ic} mb-3`} />
              <h3 className="font-mono text-[15px] font-bold text-zinc-100 mb-2">{r.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-300 mb-3">{r.d}</p>
              <code className="block font-mono text-[11.5px] text-zinc-400 border-t border-white/10 pt-3">
                {r.ex}
              </code>
            </div>
          ))}
        </div>
        <Callout variant="macete" title="o cifrão trava o que vem depois dele">
          <p>
            <code className="font-mono text-emerald-200">$A$1</code> → trava tudo.{" "}
            <code className="font-mono text-emerald-200">A$1</code> → o $ está antes do 1: trava a{" "}
            <strong className="text-zinc-100">LINHA</strong>.{" "}
            <code className="font-mono text-emerald-200">$A1</code> → o $ está antes do A: trava a{" "}
            <strong className="text-zinc-100">COLUNA</strong>. E a tecla{" "}
            <strong className="text-zinc-100">F4</strong>, dentro da fórmula, gira entre os quatro
            modos sem você digitar cifrão nenhum.
          </p>
        </Callout>
      </Reveal>

      {/* operadores + referência entre planilhas */}
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Move size={18} className="text-yellow-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Operadores e separadores</h3>
            <ul className="space-y-2 text-[13px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Aritméticos:</strong> + − * / ^ (potência) e % </li>
              <li><strong className="text-zinc-200">Comparação:</strong> = &lt; &gt; &lt;= &gt;= &lt;&gt; (diferente)</li>
              <li><strong className="text-zinc-200">Texto:</strong> &amp; concatena ("Bom "&amp;"dia")</li>
              <li><strong className="text-emerald-300">: (dois-pontos)</strong> = INTERVALO contínuo — A1:A10 é "de A1 até A10"</li>
              <li><strong className="text-emerald-300">; (ponto e vírgula)</strong> = UNIÃO/separador de argumentos — A1;A10 é "A1 e A10"</li>
              <li><strong className="text-zinc-200">Ordem de precedência:</strong> ( ) → ^ → * e / → + e −</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Layers size={18} className="text-cyan-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Falar com outras planilhas</h3>
            <ul className="space-y-2 text-[13px] leading-relaxed text-zinc-400">
              <li>
                Mesma pasta, outra planilha:{" "}
                <code className="font-mono text-cyan-200">=Planilha2!B4</code> — o{" "}
                <strong className="text-zinc-200">ponto de exclamação</strong> separa o nome da aba
                do endereço.
              </li>
              <li>
                Com espaço no nome:{" "}
                <code className="font-mono text-cyan-200">='Vendas 2026'!B4</code> (aspas simples).
              </li>
              <li>
                Soma 3D (mesma célula em várias abas):{" "}
                <code className="font-mono text-cyan-200">=SOMA(Plan1:Plan3!A1)</code>.
              </li>
              <li>
                Outra pasta de trabalho:{" "}
                <code className="font-mono text-cyan-200">=[Orçamento.xlsx]Plan1!A1</code>.
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Guarde também a diferença entre <Hot tone="c">Excluir</Hot> e{" "}
          <Hot tone="c">Limpar</Hot>: a tecla <strong className="text-zinc-100">Delete</strong> apaga
          o <em>conteúdo</em> mantendo a formatação; já "Excluir células/linhas" (Ctrl+−) remove a
          estrutura e <strong className="text-zinc-100">desloca as demais</strong> — e é aí que
          fórmulas apontando para a área excluída passam a exibir{" "}
          <Hot tone="r">#REF!</Hot>.
        </P>
      </Reveal>
    </SectionShell>
  );
}
