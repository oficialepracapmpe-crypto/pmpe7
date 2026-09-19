import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o Excel: Iniciar, Pesquisa, Executar 'excel', atalho, duplo clique num .xlsx, botão direito → Novo.",
  "PASTA DE TRABALHO = o arquivo (.xlsx); PLANILHA = cada aba; CÉLULA = cruzamento coluna+linha (A1).",
  "1.048.576 linhas × 16.384 colunas (A até XFD). Ctrl+Home volta para A1.",
  "Toda fórmula começa com = (aceita também + ou −).",
  "':' = intervalo (A1:A10 = de A1 até A10) · ';' = separa argumentos (A1;A10 = só as duas).",
  "Referência relativa A1 muda ao copiar; absoluta $A$1 fica travada; mista trava só linha ou coluna. F4 alterna.",
  "MÉDIA ignora células vazias; CONT.NÚM conta números; CONT.VALORES conta não vazias.",
  "=SE(teste; verdadeiro; falso) — textos entre aspas. E() exige todas; OU() basta uma.",
  "=PROCV(valor; matriz; coluna; FALSO) procura na PRIMEIRA coluna da matriz; sem correspondência → #N/D.",
  "Tabela Dinâmica e Gráficos: guia INSERIR. Filtro, Validação e Remover Duplicatas: guia DADOS.",
  "Formatação Condicional: Página Inicial. Congelar Painéis: Exibir. Imprimir Títulos: Layout da Página.",
  "##### não é erro de fórmula: é coluna estreita demais.",
];

const PODIO = [
  "Ctrl+O/A/B/W = novo, abrir, salvar, fechar · F12 = salvar como",
  "F2 = editar célula · F4 = alternar referência · Alt+= = autossoma",
  "Ctrl+1 = formatar células · Ctrl+; = data de hoje · Alt+Enter = quebra na célula",
  "Ctrl+Home / Ctrl+End = A1 / última célula usada",
  "Ctrl+Page Down / Page Up = próxima / anterior planilha · Shift+F11 = nova planilha",
  "Ctrl+Shift+L = filtro · F11 = gráfico em nova folha · Alt+F1 = gráfico embutido",
];

const ERROS = [
  "Dizer que =SOMA(A1:A10) soma apenas A1 e A10 (isso é ';').",
  "Inverter pasta de trabalho e planilha.",
  "Afirmar que $A$1 muda ao ser copiada.",
  "Dizer que MÉDIA considera as células vazias no divisor.",
  "Afirmar que o filtro EXCLUI as linhas (ele apenas oculta).",
  "Colocar Tabela Dinâmica na guia Dados (é Inserir).",
  "Tratar ##### como erro de cálculo (é largura de coluna).",
];

const NEXT = [
  { parte: "Extra 1", tema: "LibreOffice Writer, Calc e Impress: equivalências" },
  { parte: "Extra 2", tema: "Simulado final comentado com todo o edital" },
];

export default function Summary5({ onGoPart6 }: { onGoPart6: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="08"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-emerald-300">de véspera</span>
        </>
      }
      lead="O Excel 2019 inteiro em três blocos: verdades de gabarito, o pódio dos atalhos e as armadilhas que as bancas repetem todo ano."
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
                <CheckCircle2 size={14} /> Pódio dos atalhos
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
              onClick={onGoPart6}
              className="group text-left rounded-xl border border-yellow-300/40 bg-yellow-300/[0.07] p-5 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 group-hover:text-[#0a0910] mb-2">
                Parte 6 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                PowerPoint 2019: transições, animações, slide mestre e atalhos de apresentação
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-yellow-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {NEXT.map((p) => (
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
