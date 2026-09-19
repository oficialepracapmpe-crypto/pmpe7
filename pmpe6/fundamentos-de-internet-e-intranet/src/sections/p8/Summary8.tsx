import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o Calc: Iniciar, Pesquisa ('libreoffice calc'), Executar 'scalc', Central de Inicialização, duplo clique num .ods.",
  "Formato nativo: .ods (ODF). Abre e salva .xlsx/.xls. Documento → planilhas (abas) → células.",
  "1.048.576 linhas × 16.384 colunas (até AMJ) — mesmas dimensões do Excel moderno.",
  "Interface: barra de MENUS + barras de ferramentas + caixa de nome + linha de entrada + barra lateral.",
  "Funções com os MESMOS NOMES do Excel PT-BR (SOMA, SE, PROCV, CONT.SE...); separador ';'.",
  "Referência a outra planilha usa PONTO: Planilha2.A1 (não Planilha2!A1 como no Excel).",
  "Menu DADOS: filtro, classificar, subtotais, validação, texto em colunas, consolidar, agrupar (F12).",
  "Tabela Dinâmica e Assistente de Funções: menu INSERIR (Ctrl+F2 para funções).",
  "Atingir Meta e Proteger documento: menu FERRAMENTAS (endereço diferente do Excel!).",
  "Formatação Condicional: menu FORMATAR (no Excel é guia Página Inicial).",
  "Backspace abre a caixa Excluir conteúdo; Delete apaga direto.",
  "Alt+setas ajustam largura da coluna / altura da linha; Alt+Shift+setas otimizam o tamanho.",
];

const PODIO = [
  "Ctrl+N/O/S = novo, abrir, salvar · Ctrl+Shift+S = salvar como · Ctrl+Q = sair",
  "Ctrl+B/I/U = negrito, itálico, sublinhado · Ctrl+A = selecionar tudo",
  "Ctrl+1 = formatar células · F2 = editar · F4 = referências $ (âncoras iguais ao Excel)",
  "Ctrl+F2 = assistente de funções · F9 = recalcular · Shift+F9 = precedentes",
  "Ctrl+D = preencher abaixo · Ctrl+Enter = preencher intervalo · Shift+Ctrl+Enter = matriz",
  "Alt+→/← = largura da coluna · F12 = agrupar · F11 = estilos · Ctrl+` = mostrar fórmulas",
];

const ERROS = [
  "Dizer que o formato nativo do Calc é .xlsx (é o .ods).",
  "Usar Ctrl+B esperando salvar no Calc (aplica negrito).",
  "Usar F12 esperando salvar como no Calc (AGRUPA dados).",
  "Afirmar que Atingir Meta está no menu Dados do Calc (é Ferramentas).",
  "Afirmar que Formatação Condicional está no menu Inserir do Calc (é Formatar).",
  "Dizer que Ctrl+F2 não faz nada no Calc (abre o Assistente de Funções).",
  "Usar Ctrl+setas esperando ajustar largura de coluna no Calc (isso é Alt+setas).",
];

export default function Summary8({ onGoPart9 }: { onGoPart9: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-lime-300">de véspera</span>
        </>
      }
      lead="O Calc destilado — com foco nas diferenças em relação ao Excel, que é exatamente onde as bancas jogam a rede."
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
            <div className="rounded-2xl border border-lime-300/25 bg-lime-300/[0.05] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-lime-300 mb-5">
                <CheckCircle2 size={14} /> Pódio dos atalhos
              </p>
              <ul className="space-y-3">
                {PODIO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12.5px] leading-relaxed text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 mt-2 shrink-0" />
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
              onClick={onGoPart9}
              className="group text-left rounded-xl border border-rose-300/40 bg-rose-300/[0.08] p-5 hover:bg-rose-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-rose-300 group-hover:text-[#0a0910] mb-2">
                Parte 9 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                LibreOffice Impress: painéis, transições, animações e atalhos de apresentação
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-rose-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {[
              { parte: "Extra", tema: "Draw, Base e Math: os módulos restantes da suíte" },
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
