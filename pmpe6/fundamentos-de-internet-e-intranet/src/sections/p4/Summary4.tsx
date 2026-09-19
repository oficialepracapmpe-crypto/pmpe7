import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o Word: Menu Iniciar, Pesquisa, Executar 'winword', atalho, duplo clique num .docx (associação) e botão direito → Novo.",
  "Faixa de opções = GUIA → GRUPO → COMANDO. Setinha diagonal do grupo abre a caixa de diálogo completa.",
  "Página Inicial: formatação de texto e parágrafo, estilos, localizar/substituir, Pincel de formatação.",
  "Inserir: capa, tabelas, imagens, hiperlink, cabeçalho/rodapé, NÚMERO DE PÁGINA, letra capitular, símbolos.",
  "Design: temas e plano de fundo — MARCA D'ÁGUA, cor da página, bordas de página.",
  "Layout: MARGENS, orientação (retrato/paisagem), tamanho (A4), colunas, quebras de página e DE SEÇÃO.",
  "Referências: SUMÁRIO automático (exige estilos de título), notas de rodapé/fim, citações e bibliografia ABNT/APA.",
  "Correspondências: MALA DIRETA (cartas, etiquetas, e-mails) usando fonte de dados como planilha Excel.",
  "Revisão: F7 ortografia, Shift+F7 sinônimos, Controlar Alterações (Ctrl+Shift+E), comentários (Ctrl+Alt+M), restringir edição.",
  "Exibir: modos Leitura/Layout de Impressão/Layout da Web, régua, zoom, dividir janela (Ctrl+Alt+S), macros.",
  "Guias contextuais surgem ao selecionar: Ferramentas de Tabela, Formato de Imagem...",
  "Exportar PDF: Arquivo → Exportar → Criar PDF/XPS (ou Salvar como F12 → tipo PDF).",
];

const PODIO = [
  "Ctrl+O/A/B/W = novo, abrir, salvar, fechar · F12 = salvar como",
  "Ctrl+N/I/S = negrito, itálico, sublinhado · Ctrl+T = seleciona tudo",
  "Ctrl+Q/E/G/J = esquerda, centralizar, direita, justificar",
  "Ctrl+Enter = quebra de página · Shift+Enter = quebra de linha",
  "F7 = ortografia · Shift+F3 = maiúsculas · F4 = repetir ação · F8 = estender seleção",
  "Ctrl+K = hiperlink · Alt+= equação · Ctrl+Shift+E = controlar alterações",
];

const ERROS = [
  "Dizer que marca d'água fica na guia Inserir (é Design).",
  "Dizer que número de página fica em Layout (é Inserir).",
  "Afirmar que o sumário automático funciona sem estilos de título.",
  "Afirmar que Ctrl+N cria novo documento (é negrito; novo é Ctrl+O).",
  "Afirmar que Ctrl+A seleciona tudo no Word PT-BR (abre documento; tudo é Ctrl+T).",
  "Afirmar que exportar PDF exige programa separado (o Word exporta nativamente).",
  "Dizer que Controlar Alterações fica na guia Página Inicial (é Revisão).",
];

const NEXT_PARTS = [
  { parte: "Parte 6", tema: "PowerPoint 2019 e LibreOffice Impress" },
  { parte: "Revisão geral", tema: "Simulado comentado reunindo todas as partes" },
];

export default function Summary4({ onGoPart5 }: { onGoPart5: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-blue-300">de véspera</span>
        </>
      }
      lead="O Word 2019 inteiro em três blocos: verdades para a prova, o pódio dos atalhos e as trocas que as bancas sempre tentam vender."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5">
              <CheckCircle2 size={14} /> Verdades de gabarito
            </p>
            <ul className="space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300">
                  <CheckCircle2 size={15} className="text-emerald-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
                <CheckCircle2 size={14} /> Pódio dos atalhos do Word
              </p>
              <ul className="space-y-3">
                {PODIO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12.5px] leading-relaxed text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2 shrink-0" />
                    <span className="font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
                <XCircle size={14} /> Trocas sempre ERRADAS
              </p>
              <ul className="space-y-3">
                {ERROS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300">
                    <XCircle size={15} className="text-rose-300 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">A série continua</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <button
              onClick={onGoPart5}
              className="group text-left rounded-xl border border-yellow-300/40 bg-yellow-300/[0.07] p-5 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 group-hover:text-[#0a0910] mb-2">
                Parte 5 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                Microsoft Excel 2019: células, fórmulas, funções e todos os atalhos
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-yellow-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {NEXT_PARTS.map((p) => (
              <div
                key={p.parte}
                className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5 hover:border-yellow-300/40 transition-colors"
              >
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  {p.parte} · em breve
                </p>
                <p className="text-[13.5px] leading-relaxed text-zinc-500">{p.tema}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
