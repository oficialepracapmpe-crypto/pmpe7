import { Sigma, Table2, PanelRight, Grid3x3, FileSpreadsheet, Ruler } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* maquete da janela do Calc */
function CalcMockup() {
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-[#0d0c14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* título */}
      <div className="flex items-center gap-3 bg-[#106a43] px-4 py-2">
        <span className="grid place-items-center w-5 h-5 rounded bg-white text-[#106a43] font-display font-black text-[11px]">C</span>
        <span className="text-[11.5px] text-white/90 font-medium">Sem título 1 — LibreOffice Calc</span>
      </div>

      {/* barra de menus */}
      <div className="flex gap-0 bg-[#f3f2f1] px-2 py-1 border-b border-black/10 overflow-x-auto">
        {["Arquivo","Editar","Exibir","Inserir","Formatar","Estilos","Dados","Ferramentas","Janela","Ajuda"].map((m, i) => (
          <span key={m} className={`whitespace-nowrap px-2.5 py-1 text-[10px] font-medium rounded ${i === 6 ? "bg-[#106a43]/15 text-[#106a43] font-bold" : "text-neutral-600"}`}>
            {m}
          </span>
        ))}
        <span className="ml-auto text-[8.5px] text-neutral-400 self-center pl-3 whitespace-nowrap">← repare no menu DADOS</span>
      </div>

      {/* barras de ferramentas */}
      <div className="bg-[#f7f7f7] border-b border-black/10 px-3 py-1.5 space-y-1">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-sm bg-neutral-300/70" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-2">barra Padrão</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] px-2 py-0.5 rounded bg-white border border-neutral-300 text-neutral-600">Arial</span>
          <span className="text-[8px] px-2 py-0.5 rounded bg-white border border-neutral-300 text-neutral-600">10</span>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-sm bg-neutral-300/70" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-2">barra de Formatação</span>
        </div>
      </div>

      {/* linha de entrada */}
      <div className="flex items-stretch bg-white border-b border-black/10">
        <div className="w-[70px] shrink-0 grid place-items-center border-r border-neutral-200 px-2">
          <span className="font-mono text-[11px] font-bold text-[#106a43]">C3</span>
        </div>
        <div className="grid place-items-center px-3 border-r border-neutral-200">
          <Sigma size={11} className="text-neutral-400" />
        </div>
        <div className="flex-1 px-3 py-2 font-mono text-[12px] text-zinc-700 truncate">
          =SOMA(B2:B10)
        </div>
      </div>

      {/* grade */}
      <div className="flex bg-[#e6e6e6]">
        <div className="flex-1 overflow-hidden">
          <div className="grid" style={{ gridTemplateColumns: "32px repeat(5, 1fr)" }}>
            <div />
            {["A", "B", "C", "D", "E"].map((c) => (
              <div key={c} className="bg-[#f0f0f0] border-b border-r border-neutral-300 text-center text-[9px] font-bold text-neutral-500 py-1">
                {c}
              </div>
            ))}
            {[1, 2, 3, 4].map((r) => (
              <>
                <div key={`n${r}`} className="bg-[#f0f0f0] border-b border-r border-neutral-300 text-center text-[9px] font-bold text-neutral-500 py-1.5">
                  {r}
                </div>
                {["A", "B", "C", "D", "E"].map((c) => {
                  const id = `${c}${r}`;
                  const v =
                    id === "C3" ? "84,40" :
                    id === "A1" ? "Produto" :
                    id === "B1" ? "Qtd" :
                    id === "C1" ? "Total" :
                    id === "A2" ? "Caneta" : id === "B2" ? "10" : id === "C2" ? "25,00" : "";
                  return (
                    <div
                      key={id}
                      className={`bg-white border-b border-r border-neutral-300 px-1.5 py-1.5 text-[9px] font-mono truncate ${
                        id === "C3" ? "ring-2 ring-[#106a43] ring-inset font-bold text-[#106a43]" : "text-neutral-700"
                      } ${c === "C" && r !== 3 ? "text-[#106a43]" : ""}`}
                    >
                      {v || <span className="opacity-0">.</span>}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </div>
        {/* barra lateral */}
        <div className="w-[96px] shrink-0 bg-[#f7f7f7] border-l border-black/10 p-2">
          <p className="text-[7.5px] font-bold text-neutral-500 uppercase tracking-wide mb-1.5">Barra lateral</p>
          {["Propriedades", "Estilos", "Galeria", "Navegador"].map((s) => (
            <p key={s} className="text-[8px] text-neutral-500 py-1 border-b border-neutral-200">{s}</p>
          ))}
        </div>
      </div>

      {/* abas */}
      <div className="flex items-center gap-1 bg-[#f7f7f7] border-t border-black/10 px-3 py-1.5">
        <span className="text-[9px] px-2.5 py-1 rounded-t bg-[#106a43] text-white font-bold">Planilha 1</span>
        <span className="text-[9px] px-2.5 py-1 text-neutral-500">Planilha 2</span>
        <span className="text-[10px] text-neutral-400 px-1">+</span>
        <span className="ml-auto text-[8px] text-neutral-500">Somatório: 84,40 (barra de status)</span>
      </div>
    </div>
  );
}

export default function ConceptsSection8() {
  return (
    <SectionShell
      id="conceitos"
      num="02"
      kicker="Orientação · a tela por dentro"
      title={
        <>
          Interface e conceitos do <span className="italic text-lime-300">Calc</span>
        </>
      }
      lead={
        <>
          Mesma arquitetura do Writer — <Hot tone="e">barra de menus + barras de ferramentas + barra
          lateral</Hot> —, mas com os órgãos próprios da planilha:{" "}
          <Hot tone="e">caixa de nome</Hot>, <Hot tone="e">linha de entrada</Hot> (a "barra de
          fórmulas"), grade de células e <Hot tone="e">abas de planilha</Hot>.
        </>
      }
    >
      <Reveal>
        <CalcMockup />
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { icon: Grid3x3, t: "Caixa de nome", d: "Mostra o endereço da célula ativa (C3) e permite digitar um endereço ou nome de intervalo para saltar direto." },
            { icon: Sigma, t: "Linha de entrada", d: "Exibe o CONTEÚDO real da célula (a fórmula =SOMA(...)) — na grade aparece o resultado. É a 'barra de fórmulas' do Excel." },
            { icon: FileSpreadsheet, t: "Documento × planilha", d: "O ARQUIVO é o documento de planilha (.ods). Cada ABA na base é uma planilha. Clique com o botão direito na aba para renomear, mover, ocultar, copiar ou excluir." },
            { icon: Table2, t: "Grade", d: "1.048.576 linhas × 16.384 colunas (até AMJ) — as mesmas dimensões do Excel 2007+. O limite antigo do ODF era 65.536 linhas." },
            { icon: PanelRight, t: "Barra lateral", d: "Painel Propriedades (formatação rápida), Estilos, Galeria e Navegador. Ligue/desligue com Ctrl+F5." },
            { icon: Ruler, t: "Barra de status", d: "No rodapé: soma/média/contagem das células selecionadas, estilo da célula, modo Inserir e zoom — a 'mão na roda' do dia a dia." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-lime-300/35 transition-colors">
              <c.icon size={19} className="text-lime-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="pegadinha" title="'linha de entrada' × 'barra de fórmulas'">
          <p>
            A documentação do LibreOffice chama de <strong className="text-zinc-100">Linha de
            entrada</strong> o que o Excel chama de <strong className="text-zinc-100">Barra de
            fórmulas</strong>. Banca que usa "linha de entrada" está falando de LibreOffice; "barra
            de fórmulas", provavelmente de Excel — mas algumas provas usam os nomes trocados. O
            importante: <strong className="text-zinc-100">é o mesmo órgão</strong>, exibindo o
            conteúdo real da célula ativa.
          </p>
        </Callout>
      </Reveal>

      {/* formatos */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <h3 className="font-display text-2xl text-[#f4f1ea] mb-5">Formatos de arquivo do Calc</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[13px] leading-relaxed">
            {[
              { e: ".ods", d: "Planilha do Calc — o formato NATIVO (OpenDocument Spreadsheet).", hot: true },
              { e: ".ots", d: "MODELO de planilha." },
              { e: ".xlsx / .xls", d: "Planilhas do Excel: o Calc abre e salva." },
              { e: ".csv", d: "Valores separados por vírgula/ponto e vírgula — texto puro." },
              { e: ".pdf", d: "Exportação nativa (Arquivo → Exportar como PDF).", hot: true },
              { e: ".html", d: "Página web com a tabela." },
              { e: ".fods", d: "ODF plano (XML sem compactação)." },
              { e: ".xlt / .xltm", d: "Modelos do Excel (abre e converte)." },
            ].map((f) => (
              <div key={f.e} className={`rounded-xl border p-4 ${f.hot ? "border-lime-300/40 bg-lime-300/[0.07]" : "border-white/[0.07] bg-white/[0.03]"}`}>
                <p className="font-mono font-bold text-lime-200 text-[14px] mb-1">{f.e}</p>
                <p className="text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="conceito" title="fórmulas e funções: o mesmo idioma">
            <p>
              Boa notícia: no Calc PT-BR, os nomes das funções são{" "}
              <strong className="text-zinc-100">os mesmos do Excel PT-BR</strong> — SOMA, MÉDIA,
              SE, E, OU, CONT.SE, CONT.SES, SOMASE, SOMASES, PROCV, PROCH, ÍNDICE, CORRESP,
              MÁXIMO, MÍNIMO... O separador de argumentos também é o{" "}
              <strong className="text-zinc-100">ponto e vírgula</strong>. Quem domina as funções do
              Excel (Parte 5) já domina as do Calc.
            </p>
          </Callout>
          <Callout variant="prova" title="referências e intervalos: sintaxe idêntica">
            <p>
              <code className="font-mono text-lime-200">A1</code> relativa,{" "}
              <code className="font-mono text-lime-200">$A$1</code> absoluta,{" "}
              <code className="font-mono text-lime-200">A1:B10</code> intervalo,{" "}
              <code className="font-mono text-lime-200">Planilha2.A1</code> outra aba — atenção: no
              Calc, a referência a outra planilha usa{" "}
              <strong className="text-zinc-100">PONTO</strong> (Planilha2.A1) em vez da exclamação
              do Excel (Planilha2!A1). Detalhe fino já cobrado.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          E fechando com um paralelo que rende pontos: a hierarquia é{" "}
          <Hot tone="e">documento (.ods) → planilhas (abas) → células</Hot> — análoga à{" "}
          <em>pasta de trabalho → planilhas → células</em> do Excel. O Calc também tem{" "}
          <Hot tone="e">estilos de célula</Hot> (recurso que o Excel não possui de forma nativa):
          aplique um estilo a um grupo de células e mude a formatação de todas de uma vez, com F11.
        </P>
      </Reveal>
    </SectionShell>
  );
}
