import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o Writer: Iniciar, Pesquisa, Executar 'swriter' (ou 'soffice'), Central de Inicialização, duplo clique num .odt.",
  "LibreOffice = suíte LIVRE e gratuita (LGPL), multiplataforma, da The Document Foundation; fork do OpenOffice.org (2010).",
  "Formato nativo: .odt (padrão aberto ODF). Outros: .ods (Calc), .odp (Impress), .odg (Draw), .odb (Base).",
  "A interface padrão é BARRA DE MENUS + barras de ferramentas + barra lateral (não é faixa de opções).",
  "Menus exclusivos que o Word não tem: Estilos, Tabela (fixo) e Formulário.",
  "Exportar como PDF é NATIVO: menu Arquivo → Exportar como → PDF (inclui PDF/A e PDF híbrido).",
  "Gravar alterações (menu Editar) equivale ao Controlar Alterações do Word.",
  "Estilos de página permitem configurações diferentes por página — recurso mais forte que as seções do Word.",
  "Atalhos seguem o padrão INTERNACIONAL: Ctrl+B negrito, Ctrl+U sublinhado, Ctrl+S salvar, Ctrl+A tudo.",
  "F5 = Navegador · F7 = ortografia · F11 = Estilos · F12 = lista numerada · Ctrl+F12 = tabela.",
  "Ctrl+M limpa a formatação direta; Ctrl+1 a Ctrl+5 aplicam Títulos; Ctrl+0 aplica Corpo de texto.",
  "Ferramentas → Personalizar → Teclado permite criar/alterar qualquer atalho.",
];

const PODIO = [
  "Ctrl+N/O/S = novo, abrir, salvar · Ctrl+Shift+S = salvar como · Ctrl+Q = sair",
  "Ctrl+B/I/U = negrito, itálico, sublinhado · Ctrl+A = selecionar tudo",
  "Ctrl+L/E/R/J = esquerda, centro, direita, justificado · Ctrl+M = limpar formatação",
  "F5 = Navegador · F7 = ortografia · F11 = Estilos · F8 = modo extensão",
  "Ctrl+F12 = tabela · F12 = lista numerada · Ctrl+F10 = marcas ¶",
  "Ctrl+Enter = quebra de página · Ctrl+Shift+Enter = quebra de coluna",
];

const ERROS = [
  "Dizer que o formato nativo do Writer é o .docx (é o .odt).",
  "Afirmar que a interface padrão do Writer é uma faixa de opções com guias.",
  "Usar Ctrl+N esperando negrito no Writer (cria documento novo).",
  "Usar Ctrl+B esperando salvar no Writer (aplica negrito).",
  "Dizer que o Writer não abre arquivos do Word (abre .doc e .docx).",
  "Afirmar que é preciso instalar suplemento para gerar PDF (a exportação é nativa).",
  "Dizer que o Writer edita PDFs (quem abre PDF para edição é o Draw).",
];

export default function Summary7({ onGoPart8 }: { onGoPart8: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-teal-300">de véspera</span>
        </>
      }
      lead="O Writer inteiro destilado — com ênfase no que muda em relação ao Word, que é exatamente onde as bancas caçam pontos."
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
            <div className="rounded-2xl border border-teal-300/25 bg-teal-300/[0.05] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300 mb-5">
                <CheckCircle2 size={14} /> Pódio dos atalhos
              </p>
              <ul className="space-y-3">
                {PODIO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12.5px] leading-relaxed text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 shrink-0" />
                    <span className="font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
                <XCircle size={14} /> Armadilhas sempre ERRADAS
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
              onClick={onGoPart8}
              className="group text-left rounded-xl border border-lime-300/40 bg-lime-300/[0.08] p-5 hover:bg-lime-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-lime-300 group-hover:text-[#0a0910] mb-2">
                Parte 8 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                LibreOffice Calc: menus, funcionalidades e atalhos (com o comparativo Excel × Calc)
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-lime-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {[
              { parte: "Parte 9", tema: "LibreOffice Impress: apresentações no mundo livre" },
              { parte: "Revisão geral", tema: "Simulado final comentado com todo o edital" },
            ].map((p) => (
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
