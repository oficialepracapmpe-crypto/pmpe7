import { motion } from "framer-motion";
import { Grid2x2, LayoutTemplate, Monitor, Presentation, ScrollText, StickyNote } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* ---------- maquete da janela ---------- */
function PptMockup() {
  const [slide, setSlide] = useState(2);
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-[#0d0c14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* título */}
      <div className="flex items-center gap-3 bg-[#b7472a] px-4 py-2">
        <span className="grid place-items-center w-5 h-5 rounded bg-white text-[#b7472a] font-display font-black text-[11px]">P</span>
        <span className="text-[11.5px] text-white/90 font-medium">Apresentação1 — PowerPoint</span>
      </div>
      {/* guias */}
      <div className="bg-[#f3f2f1] px-2 pt-1 border-b border-black/10 overflow-x-auto">
        <div className="flex gap-0.5">
          {["Arquivo","Página Inicial","Inserir","Desenhar","Design","Transições","Animações","Apresentação de Slides","Revisão","Exibir"].map((g, i) => (
            <span key={g} className={`whitespace-nowrap px-2.5 py-1.5 text-[9.5px] font-medium rounded-t ${i === 1 ? "bg-white text-[#b7472a] font-bold" : "text-neutral-500"}`}>
              {g}
            </span>
          ))}
        </div>
      </div>
      {/* corpo */}
      <div className="flex bg-[#e6e6e6] min-h-[230px]">
        {/* miniaturas */}
        <div className="w-[92px] shrink-0 bg-[#f7f7f7] border-r border-black/10 p-2 space-y-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setSlide(n)}
              className={`w-full flex gap-1.5 items-start cursor-pointer ${slide === n ? "" : "opacity-70"}`}
            >
              <span className="text-[8px] text-neutral-500 pt-1">{n}</span>
              <span className={`flex-1 aspect-video rounded-sm bg-white border ${slide === n ? "border-[#b7472a] border-2" : "border-neutral-300"}`} />
            </button>
          ))}
          <p className="text-[7.5px] text-neutral-500 pt-1 leading-tight">painel de miniaturas (slides)</p>
        </div>
        {/* slide */}
        <div className="flex-1 p-4 grid place-items-center">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm aspect-video bg-white rounded-sm shadow border border-black/10 p-5 flex flex-col justify-center"
          >
            <div className="h-2.5 w-2/3 rounded bg-[#b7472a]/70 mb-3" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-neutral-300" />
              <div className="h-1.5 w-5/6 rounded bg-neutral-300" />
              <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
            </div>
            <p className="mt-3 text-[7px] text-neutral-400">
              ↑ espaços reservados (placeholders): título e conteúdo
            </p>
          </motion.div>
        </div>
      </div>
      {/* anotações */}
      <div className="bg-[#f7f7f7] border-t border-black/10 px-4 py-2">
        <p className="text-[8.5px] text-neutral-500">
          Clique para adicionar anotações — painel de ANOTAÇÕES DO ORADOR (só o apresentador vê)
        </p>
      </div>
      {/* status */}
      <div className="flex items-center gap-4 bg-[#b7472a] px-4 py-1.5 text-[9.5px] text-white/85">
        <span>Slide {slide} de 3</span>
        <span>Português (Brasil)</span>
        <span className="ml-auto">modos de exibição · zoom</span>
      </div>
    </div>
  );
}

const MODOS = [
  { icon: LayoutTemplate, t: "Normal", d: "O modo de trabalho padrão: miniaturas à esquerda, slide grande no centro e anotações embaixo. É onde você edita." },
  { icon: Grid2x2, t: "Classificação de Slides", d: "Mostra todos os slides em miniatura, lado a lado. Ideal para REORDENAR (arrastar), ocultar, excluir e ver as transições aplicadas." },
  { icon: ScrollText, t: "Estrutura de Tópicos", d: "Exibe apenas os TEXTOS de títulos e tópicos, sem imagens. Excelente para escrever/reorganizar o conteúdo rapidamente." },
  { icon: StickyNote, t: "Anotações", d: "Mostra o slide reduzido com o espaço das notas do orador — é a visão de quem vai imprimir as anotações." },
  { icon: Presentation, t: "Modo de Leitura", d: "Reproduz a apresentação dentro de uma janela (não em tela cheia), útil para conferir animações sem sair do ambiente de trabalho." },
  { icon: Monitor, t: "Apresentação de Slides", d: "Tela cheia, para a plateia (F5). Com dois monitores, o apresentador vê o Modo do Apresentador: próximo slide, notas e cronômetro." },
];

export default function ConceptsSection6() {
  return (
    <SectionShell
      id="conceitos"
      num="02"
      kicker="Fundamentos · o vocabulário obrigatório"
      title={
        <>
          Slides, layouts e <span className="italic text-orange-300">modos de exibição</span>
        </>
      }
      lead={
        <>
          O PowerPoint é o <Hot tone="y">editor de apresentações</Hot> do pacote Office: cria
          sequências de <Hot tone="y">slides</Hot> (as "telas") com texto, imagem, áudio, vídeo,
          transições e animações. O arquivo inteiro chama-se{" "}
          <Hot tone="y">apresentação</Hot> — e é salvo em <Hot tone="y">.pptx</Hot>.
        </>
      }
    >
      <Reveal>
        <PptMockup />
      </Reveal>

      {/* hierarquia */}
      <Reveal>
        <div className="grid sm:grid-cols-3 gap-4 my-8">
          {[
            { t: "Apresentação", d: "O ARQUIVO completo (.pptx). Equivale à 'pasta de trabalho' do Excel.", destaque: "O arquivo" },
            { t: "Slide", d: "Cada tela/página da apresentação. Aparece numerado no painel de miniaturas.", destaque: "A tela" },
            { t: "Espaço reservado", d: "As caixas pontilhadas (placeholders) que recebem título, texto, imagem ou gráfico. Vêm do LAYOUT.", destaque: "A caixa" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-orange-300/25 bg-orange-300/[0.05] p-5">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-orange-300 mb-1">{c.destaque}</p>
              <h3 className="text-[15px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="conceito" title="layout: o esqueleto do slide">
          <p>
            <strong className="text-zinc-100">Layout</strong> é a disposição pré-definida dos
            espaços reservados: Slide de Título, Título e Conteúdo, Duas Partes de Conteúdo,
            Comparação, Somente Título, Em Branco, Conteúdo com Legenda... Trocar o layout (Página
            Inicial → Layout) <strong className="text-zinc-100">reorganiza</strong> os elementos
            sem apagar o conteúdo. Layout ≠ Tema: o{" "}
            <strong className="text-zinc-100">tema</strong> define cores, fontes e efeitos de toda a
            apresentação (guia Design).
          </p>
        </Callout>
      </Reveal>

      {/* modos de exibição */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-4 mt-10">
          Os 6 modos de exibição — e para que serve cada um
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODOS.map((m) => (
            <div key={m.t} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-orange-300/35 transition-colors">
              <m.icon size={19} className="text-orange-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{m.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{m.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* formatos */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <h3 className="font-display text-2xl text-[#f4f1ea] mb-4">Formatos de arquivo — tabela de ouro</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[13px] leading-relaxed">
            {[
              { e: ".pptx", d: "Apresentação padrão, editável (2007+)." },
              { e: ".ppt", d: "Formato antigo (97–2003), modo de compatibilidade." },
              { e: ".ppsx", d: "PowerPoint Show: abre JÁ APRESENTANDO em tela cheia.", hot: true },
              { e: ".pptm", d: "Apresentação habilitada para MACROS." },
              { e: ".potx", d: "MODELO de apresentação (template com tema e mestres)." },
              { e: ".pdf / .mp4", d: "Exportações: documento fixo para leitura ou vídeo da apresentação." },
            ].map((f) => (
              <div key={f.e} className={`rounded-xl border p-4 ${f.hot ? "border-orange-300/40 bg-orange-300/[0.07]" : "border-white/[0.07] bg-white/[0.03]"}`}>
                <p className="font-mono font-bold text-orange-200 text-[14px] mb-1">{f.e}</p>
                <p className="text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha" title="as anotações do orador">
            <p>
              <em>"As notas digitadas abaixo do slide aparecem para a plateia."</em> →{" "}
              <strong className="text-rose-300">ERRADO!</strong> As{" "}
              <strong className="text-zinc-100">anotações do orador</strong> são privativas: só
              aparecem no <strong className="text-zinc-100">Modo de Exibição do Apresentador</strong>{" "}
              (segunda tela) ou na impressão no formato "Anotações". A plateia vê apenas o slide.
            </p>
          </Callout>
          <Callout variant="prova" title="impressão: 4 formatos">
            <p>
              Em Arquivo → Imprimir, escolha entre{" "}
              <strong className="text-zinc-100">Slides de Página Inteira</strong>,{" "}
              <strong className="text-zinc-100">Anotações</strong>,{" "}
              <strong className="text-zinc-100">Estrutura de Tópicos</strong> e{" "}
              <strong className="text-zinc-100">Folhetos</strong> (1, 2, 3, 4, 6 ou 9 slides por
              página — o de 3 vem com linhas para o público anotar). Item recorrente!
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Guarde também o conceito de <Hot tone="y">seções</Hot>: é possível agrupar slides em
          blocos nomeados (Página Inicial → Seção), o que facilita organizar apresentações longas —
          e de <Hot tone="y">tamanho do slide</Hot>: <Hot>Widescreen 16:9</Hot> é o padrão do
          PowerPoint moderno, mas ainda se pode usar o antigo <Hot>4:3</Hot> (guia Design →
          Tamanho do Slide).
        </P>
      </Reveal>
    </SectionShell>
  );
}
