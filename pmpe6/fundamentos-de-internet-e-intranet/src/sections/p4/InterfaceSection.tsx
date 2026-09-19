import {
  ChevronDown,
  FileText,
  HelpCircle,
  Minus,
  MousePointer2,
  RotateCcw,
  RotateCw,
  Save,
  Search,
  Square,
  X,
  ZoomIn,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* maquete da janela do Word em CSS puro */
function WordMockup() {
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-[#0d0c14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* barra de título */}
      <div className="flex items-center gap-3 bg-[#185abd] px-4 py-2">
        <span className="grid place-items-center w-5 h-5 rounded bg-white text-[#185abd] font-display font-black text-[11px]">W</span>
        <span className="text-[11.5px] text-white/90 font-medium">Documento1 — Word</span>
        <div className="ml-3 hidden sm:flex items-center gap-1.5 flex-1 max-w-sm bg-white/15 rounded px-2.5 py-1">
          <Search size={10} className="text-white/70" />
          <span className="text-[10px] text-white/70">Diga-me o que você deseja fazer (Alt+Q)</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Minus size={12} className="text-white/80" />
          <Square size={10} className="text-white/80" />
          <X size={12} className="text-white/80" />
        </div>
      </div>

      {/* barra de acesso rápido */}
      <div className="flex items-center gap-2.5 bg-[#f3f2f1] px-3 py-1.5 border-b border-black/10">
        <Save size={11} className="text-[#185abd]" />
        <RotateCcw size={11} className="text-[#185abd]" />
        <RotateCw size={11} className="text-[#185abd]" />
        <ChevronDown size={10} className="text-neutral-500" />
        <span className="text-[9.5px] text-neutral-500 ml-1">
          ← Barra de Ferramentas de Acesso Rápido (Salvar, Desfazer, Refazer — personalizável)
        </span>
      </div>

      {/* guias */}
      <div className="bg-[#f3f2f1] px-2 pt-1 border-b border-black/10">
        <div className="flex gap-0.5 overflow-x-auto">
          {["Arquivo", "Página Inicial", "Inserir", "Desenho", "Design", "Layout", "Referências", "Correspondências", "Revisão", "Exibir", "Ajuda"].map((g, i) => (
            <span
              key={g}
              className={`whitespace-nowrap px-2.5 py-1.5 text-[9.5px] font-medium rounded-t ${
                i === 1 ? "bg-white text-[#185abd] font-bold" : "text-neutral-500"
              }`}
            >
              {g}
            </span>
          ))}
        </div>
        {/* grupos */}
        <div className="flex items-stretch gap-0 bg-white px-2 pb-1.5 -mx-0 divide-x divide-neutral-200 overflow-x-auto">
          {["Área de Transferência", "Fonte", "Parágrafo", "Estilos", "Edição"].map((gr, i) => (
            <div key={gr} className="px-3 pt-1 text-center">
              <div className={`h-8 rounded mb-0.5 ${i === 1 ? "bg-[#185abd]/10" : "bg-neutral-100"}`} />
              <p className="text-[8.5px] text-neutral-500 flex items-center gap-0.5 justify-center">
                {gr} <ChevronDown size={8} />
              </p>
            </div>
          ))}
          <div className="px-3 pt-1 flex items-center">
            <span className="text-[8.5px] text-neutral-400">
              ← guias (vertebras) → grupos (costelas) → comandos (botões)
            </span>
          </div>
        </div>
      </div>

      {/* régua + página */}
      <div className="bg-[#e6e6e6] px-6 pt-2">
        <div className="h-3.5 bg-white/70 border border-black/10 rounded-sm flex items-end gap-4 px-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-px h-1.5 bg-neutral-400" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-auto">régua (recuos e tabulação) →</span>
        </div>
        <div className="pt-3 pb-2 grid place-items-center">
          <div className="w-full max-w-md bg-white rounded-sm shadow-sm border border-black/10 px-6 py-4 space-y-1.5">
            <div className="h-1.5 rounded bg-neutral-300 w-1/3" />
            <div className="h-1.5 rounded bg-neutral-200 w-full" />
            <div className="h-1.5 rounded bg-neutral-200 w-full" />
            <div className="h-1.5 rounded bg-neutral-200 w-2/3" />
          </div>
        </div>
      </div>

      {/* barra de status */}
      <div className="flex items-center gap-4 bg-[#185abd] px-4 py-1.5 text-[9.5px] text-white/85">
        <span>Página 1 de 3</span>
        <span>412 palavras</span>
        <span>Português (Brasil)</span>
        <span className="ml-auto flex items-center gap-1.5">
          <FileText size={9} /> modos de exibição
        </span>
        <span className="flex items-center gap-1">
          <ZoomIn size={9} /> 100%
        </span>
      </div>
    </div>
  );
}

export default function InterfaceSection() {
  return (
    <SectionShell
      id="interface"
      num="03"
      kicker="Orientação · nomeie cada peça da tela"
      title={
        <>
          Anatomia da tela do <span className="italic text-blue-300">Word</span>
        </>
      }
      lead={
        <>
          Bancas cobram "onde fica o quê". A régua mental é:{" "}
          <Hot tone="y">Barra de Título</Hot> no topo,{" "}
          <Hot tone="y">Barra de Ferramentas de Acesso Rápido</Hot> e a{" "}
          <Hot tone="c">Faixa de Opções</Hot> em seguida, <Hot>Régua</Hot> e a{" "}
          <Hot>área de edição</Hot> no meio e a <Hot tone="c">Barra de Status</Hot> lá embaixo.
        </>
      }
    >
      <Reveal>
        <WordMockup />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <MousePointer2 size={18} className="text-blue-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">O raciocínio da Faixa de Opções</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Guia</strong> = o "capítulo" (Página Inicial, Inserir...).</li>
              <li><strong className="text-zinc-200">Grupo</strong> = a "seção" dentro da guia (Fonte, Parágrafo...).</li>
              <li><strong className="text-zinc-200">Comando</strong> = o botão em si (Negrito, Alinhar...).</li>
              <li>No canto direito de vários grupos há uma <strong className="text-zinc-200">setinha diagonal</strong> (inicializador de caixa de diálogo): abre a caixa completa do grupo — ex.: <em>Fonte</em> (Ctrl+D) e <em>Parágrafo</em>.</li>
              <li><strong className="text-zinc-200">Guias contextuais</strong> só aparecem quando algo é selecionado: Ferramentas de Tabela (Design e Layout), Formato de Imagem, Ferramentas de SmartArt...</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <HelpCircle size={18} className="text-yellow-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Barra de Status + modos rápidos</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Página atual/total</strong> e <strong className="text-zinc-200">contagem de palavras</strong> (clique nela abre a caixa Estatísticas).</li>
              <li><strong className="text-zinc-200">Idioma</strong> de revisão do trecho (clique para trocar).</li>
              <li><strong className="text-zinc-200">Modos de exibição</strong> ao alcance de um clique: Leitura, Layout de Impressão e Layout da Web.</li>
              <li><strong className="text-zinc-200">Controle deslizante de zoom</strong> — e o atalho Ctrl+rolagem do mouse faz o mesmo.</li>
            </ul>
            <Callout variant="pegadinha">
              <p>
                <em>"A Barra de Status exibe margens e espaçamento entre linhas."</em> →{" "}
                <strong className="text-rose-300">ERRADO</strong>: ela mostra página, palavras,
                idioma, exibição e zoom. Margens são configuradas na guia Layout.
              </p>
            </Callout>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Callout variant="prova" title="o trio que confunde meio mundo">
          <p>
            <strong className="text-zinc-100">Barra de TÍTULO</strong> (nome do arquivo + botões da
            janela) ≠ <strong className="text-zinc-100">Barra de FERRAMENTAS de acesso rápido</strong>{" "}
            (Salvar/Desfazer/Refazer, fica escondidinha no canto superior esquerdo) ≠{" "}
            <strong className="text-zinc-100">Barra de STATUS</strong> (pé da janela). Questão que
            troca esses nomes é pegadinha certa — e você já vacina.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Com a planta baixa decorada, passemos ao inventário cômodo a cômodo: no próximo capítulo,
          abrimos <Hot tone="c">cada guia da faixa de opções</Hot> e listamos seus grupos e comandos
          com as observações exatas que a banca usa.
        </P>
      </Reveal>
    </SectionShell>
  );
}
