import {
  LayoutTemplate,
  ListTree,
  Palette,
  Presentation,
  Sparkles,
  Grid2x2,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* maquete da janela do Impress */
function ImpressMockup() {
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-[#0d0c14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* título */}
      <div className="flex items-center gap-3 bg-[#a8323a] px-4 py-2">
        <span className="grid place-items-center w-5 h-5 rounded bg-white text-[#a8323a] font-display font-black text-[11px]">I</span>
        <span className="text-[11.5px] text-white/90 font-medium">Sem título 1 — LibreOffice Impress</span>
      </div>

      {/* barra de menus */}
      <div className="flex gap-0 bg-[#f3f2f1] px-2 py-1 border-b border-black/10 overflow-x-auto">
        {["Arquivo","Editar","Exibir","Inserir","Formatar","Estilos","Slide","Apresentação","Desenhar","Ferramentas","Janela","Ajuda"].map((m, i) => (
          <span key={m} className={`whitespace-nowrap px-2.5 py-1 text-[10px] font-medium rounded ${i === 6 || i === 7 || i === 8 ? "bg-[#a8323a]/15 text-[#a8323a] font-bold" : "text-neutral-600"}`}>
            {m}
          </span>
        ))}
        <span className="ml-auto text-[8.5px] text-neutral-400 self-center pl-3 whitespace-nowrap">← 3 menus exclusivos: Slide, Apresentação, Desenhar</span>
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
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-sm bg-neutral-300/70" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-2">barra de Desenho (formas, linhas, setas...)</span>
        </div>
      </div>

      {/* corpo */}
      <div className="flex bg-[#e6e6e6]">
        {/* painel de slides */}
        <div className="w-[92px] shrink-0 bg-[#f7f7f7] border-r border-black/10 p-2">
          <p className="text-[7.5px] font-bold text-neutral-500 uppercase tracking-wide mb-1.5">Painel de slides</p>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex gap-1.5 items-start mb-2">
              <span className="text-[8px] text-neutral-500 pt-1">{n}</span>
              <span className={`flex-1 aspect-video rounded-sm bg-white border ${n === 1 ? "border-[#a8323a] border-2" : "border-neutral-300"}`} />
            </div>
          ))}
          <p className="text-[7.5px] text-neutral-400 leading-tight">miniaturas (arraste para reordenar)</p>
        </div>

        {/* slide */}
        <div className="flex-1 p-4 grid place-items-center">
          <div className="w-full max-w-sm aspect-video bg-white rounded-sm shadow border border-black/10 p-5 flex flex-col justify-center items-center">
            <div className="h-2.5 w-1/2 rounded bg-neutral-300 mb-2" />
            <div className="h-1.5 w-2/3 rounded bg-neutral-200" />
            <p className="text-[7px] text-neutral-400 mt-2">Clique para adicionar o título / subtítulo</p>
          </div>
        </div>

        {/* barra lateral */}
        <div className="w-[118px] shrink-0 bg-[#f7f7f7] border-l border-black/10 p-2">
          <p className="text-[7.5px] font-bold text-neutral-500 uppercase tracking-wide mb-1.5">Barra lateral</p>
          {["Propriedades", "Layouts", "Mestres", "Animação", "Trocar Slide"].map((s, i) => (
            <p key={s} className={`text-[8px] py-1 border-b border-neutral-200 ${i === 4 ? "text-[#a8323a] font-bold" : "text-neutral-500"}`}>
              {s}
            </p>
          ))}
          <p className="text-[7px] text-neutral-400 mt-1.5 leading-tight">"Trocar Slide" = TRANSIÇÕES</p>
        </div>
      </div>

      {/* abas de modo */}
      <div className="flex items-center gap-2 bg-[#f7f7f7] border-t border-black/10 px-3 py-1.5">
        {["Normal", "Estrutura de Tópicos", "Notas", "Classificação de Slides", "Apresentação"].map((m, i) => (
          <span key={m} className={`text-[9px] px-2.5 py-1 rounded font-medium ${i === 0 ? "bg-[#a8323a] text-white" : "text-neutral-500"}`}>
            {m}
          </span>
        ))}
        <span className="ml-auto text-[8px] text-neutral-500">Barra de exibição (modos)</span>
      </div>
    </div>
  );
}

const SIDEBAR_TABS = [
  { icon: LayoutTemplate, t: "Propriedades", d: "Formatação do slide e do objeto selecionado: layout, fonte, parágrafo, área do slide." },
  { icon: Grid2x2, t: "Layouts", d: "A galeria de layouts prontos do slide mestre atual: Título, Título e Conteúdo, Duas Colunas, Em Branco..." },
  { icon: Palette, t: "Tabelas Mestres de Slides", d: "Escolhe o SLIDE MESTRE (o molde) da apresentação — cada mestre define fundo, fontes e layouts disponíveis." },
  { icon: Sparkles, t: "Animação Personalizada", d: "Os efeitos dos OBJETOS dentro do slide: entrada, ênfase, saída, trajetórias, ordem e velocidade." },
  { icon: Presentation, t: "Trocar Slide", d: "As TRANSIÇÕES entre slides: efeito, velocidade, som e avanço (ao clicar ou automático)." },
];

export default function ConceptsSection9() {
  return (
    <SectionShell
      id="conceitos"
      num="02"
      kicker="Orientação · os painéis laterais em detalhe"
      title={
        <>
          Interface e <span className="italic text-rose-300">painéis laterais</span> do Impress
        </>
      }
      lead={
        <>
          O Impress tem DOIS painéis laterais: o <Hot tone="y">Painel de slides</Hot> (esquerda,
          com as miniaturas) e a <Hot tone="y">Barra lateral</Hot> (direita, o antigo "painel de
          tarefas", com as abas de Layouts, Mestres, Animação e Transições). É neles que mora a
          metade do programa.
        </>
      }
    >
      <Reveal>
        <ImpressMockup />
      </Reveal>

      {/* painel esquerdo */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <div className="flex items-center gap-2.5 mb-4">
            <ListTree size={18} className="text-rose-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">
              Painel de slides — a coluna esquerda
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[13.5px] leading-relaxed text-zinc-400">
            <p><strong className="text-zinc-200">Miniaturas:</strong> cada slide em versão reduzida, numerado.</p>
            <p><strong className="text-zinc-200">Arrastar:</strong> reordena os slides; com Ctrl, copia.</p>
            <p><strong className="text-zinc-200">Enter:</strong> vai ao modo Normal com o slide focado / adiciona novo slide.</p>
            <p><strong className="text-zinc-200">Ctrl+Shift+↑/↓:</strong> move os slides selecionados pela lista.</p>
            <p><strong className="text-zinc-200">Botão direito:</strong> renomear, excluir, ocultar, novo slide, layout.</p>
            <p><strong className="text-zinc-200">Botão + na base:</strong> insere um novo slide com o layout padrão.</p>
          </div>
        </div>
      </Reveal>

      {/* barra lateral */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-4">
          Barra lateral — as cinco abas (painel de tarefas)
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {SIDEBAR_TABS.map((t) => (
            <div key={t.t} className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.05] p-4">
              <t.icon size={18} className="text-rose-300 mb-2.5" />
              <h3 className="text-[13px] font-bold text-zinc-100 mb-1.5">{t.t}</h3>
              <p className="text-[11.5px] leading-relaxed text-zinc-400">{t.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* transição × animação */}
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Callout variant="pegadinha" title="a divisão conceitual é a mesma do PowerPoint">
            <p>
              <strong className="text-rose-200">TRANSIÇÃO</strong> = efeito{" "}
              <strong className="text-zinc-100">ENTRE slides</strong> → aba{" "}
              <strong className="text-zinc-100">"Trocar Slide"</strong> da Barra lateral.{" "}
              <strong className="text-rose-200">ANIMAÇÃO</strong> = efeito de{" "}
              <strong className="text-zinc-100">OBJETOS dentro do slide</strong> → aba{" "}
              <strong className="text-zinc-100">"Animação Personalizada"</strong>. A divisão
              conceitual é idêntica à do PowerPoint (guia Transições × guia Animações) — só muda o
              endereço: <em>painel lateral</em> em vez de <em>guia da faixa</em>.
            </p>
          </Callout>
          <Callout variant="conceito" title="barra de exibição: os 5 modos">
            <p>
              Na base da janela: <strong className="text-zinc-100">Normal</strong> (edição),{" "}
              <strong className="text-zinc-100">Estrutura de Tópicos</strong> (só os textos),{" "}
              <strong className="text-zinc-100">Notas</strong> (slide + anotações do orador),{" "}
              <strong className="text-zinc-100">Classificação de Slides</strong> (grade de
              miniaturas, para reordenar) e <strong className="text-zinc-100">Apresentação</strong>{" "}
              (inicia o show, igual a F5).
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* formatos */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <h3 className="font-display text-2xl text-[#f4f1ea] mb-5">Formatos de arquivo do Impress</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[13px] leading-relaxed">
            {[
              { e: ".odp", d: "Apresentação do Impress — o NATIVO (OpenDocument Presentation).", hot: true },
              { e: ".otp", d: "MODELO de apresentação." },
              { e: ".pptx / .ppt", d: "Formatos do PowerPoint: abre e salva." },
              { e: ".pdf", d: "Exportação nativa (Arquivo → Exportar como PDF).", hot: true },
              { e: ".fodp", d: "ODF plano (XML sem compactação)." },
              { e: ".html", d: "Página web com a apresentação." },
              { e: ".svg / .png", d: "Exportação de slides individuais como imagem." },
              { e: ".pot / .potm", d: "Modelos do PowerPoint (converte)." },
            ].map((f) => (
              <div key={f.e} className={`rounded-xl border p-4 ${f.hot ? "border-rose-300/40 bg-rose-300/[0.07]" : "border-white/[0.07] bg-white/[0.03]"}`}>
                <p className="font-mono font-bold text-rose-200 text-[14px] mb-1">{f.e}</p>
                <p className="text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
            Diferença importante: o PowerPoint tem o <strong className="text-zinc-300">.ppsx</strong>{" "}
            (abre já apresentando). O Impress <strong className="text-zinc-300">não tem</strong>{" "}
            equivalente nativo — para efeito parecido, exporta-se o PDF ou usa-se o modo de
            apresentação automática.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="prova" title="slide mestre: dois caminhos">
            <p>
              O <strong className="text-zinc-100">Slide Mestre</strong> do Impress é acessado de
              duas formas: <strong className="text-zinc-100">Exibir → Mestre → Slide Mestre</strong>{" "}
              (para editar) ou pela aba{" "}
              <strong className="text-zinc-100">"Tabelas Mestres de Slides"</strong> da Barra
              lateral (para escolher entre os disponíveis). Equivalente ao Slide Mestre do
              PowerPoint, com o mesmo propósito: mudar o molde muda tudo.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="anotações do orador — de novo">
            <p>
              Como no PowerPoint, as anotações digitadas no modo{" "}
              <strong className="text-zinc-100">Notas</strong> são{" "}
              <strong className="text-zinc-100">privativas do orador</strong>: não aparecem na
              projeção. Ficam visíveis apenas na impressão (formato "Anotações") ou para quem
              apresenta. Item certeiro de prova nas duas suítes.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Estrutura hierárquica do documento: <Hot tone="e">apresentação (.odp)</Hot> →{" "}
          <Hot tone="e">slides</Hot> (cada "tela") → <Hot tone="e">objetos</Hot> (títulos, caixas de
          texto, imagens, formas) — e, por trás de tudo, o{" "}
          <Hot tone="y">Slide Mestre</Hot> com seus <Hot>layouts</Hot> definindo os espaços
          reservados de cada tipo de slide.
        </P>
      </Reveal>
    </SectionShell>
  );
}
