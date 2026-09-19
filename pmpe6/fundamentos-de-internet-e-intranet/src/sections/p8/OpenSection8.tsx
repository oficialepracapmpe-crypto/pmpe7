import {
  ArrowRight,
  Keyboard,
  LayoutGrid,
  MousePointer2,
  Rocket,
  Search,
  SquareTerminal,
  Table2,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const WAYS = [
  {
    kbd: null,
    icon: Rocket,
    t: "1 · Menu Iniciar",
    d: "Iniciar → Todos os aplicativos → pasta LibreOffice 7.x → LibreOffice Calc. No Linux: menu de aplicativos → Escritório → Calc.",
    nota: "A mesma pasta do Writer, com todos os módulos da suíte.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S), digite 'calc' e pressione Enter — cuidado para não abrir a Calculadora do Windows!",
    nota: "Digitar 'libreoffice calc' ou apenas 'calc' quando a suíte está instalada.",
  },
  {
    kbd: "Win + R → scalc",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R e digite scalc (abre direto o Calc) ou soffice --calc.",
    nota: "O executável é o scalc.exe — 's' de suíte + 'calc'.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Terminal / Prompt",
    d: "No Windows: scalc. No Linux: libreoffice --calc ou localc.",
    nota: "Comandos de terminal são tema recorrente em provas com pegada Linux.",
  },
  {
    kbd: null,
    icon: LayoutGrid,
    t: "5 · Central de Inicialização",
    d: "Abra o LibreOffice 'genérico' (soffice) e escolha 'Planilha do Calc' no painel inicial, junto de modelos e recentes.",
    nota: "A mesma Central que abre o Writer — o atalho de teclado na Central também funciona.",
  },
  {
    kbd: null,
    icon: MousePointer2,
    t: "6 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone do Calc; clique único se estiver fixado na barra de tarefas (Win+1, Win+2... pela posição).",
    nota: "Cada módulo da suíte pode ser fixado separadamente.",
  },
  {
    kbd: null,
    icon: Table2,
    t: "7 · Duplo clique num arquivo",
    d: "Abrir um .ods, .xlsx, .xls, .csv ou .ots associado ao LibreOffice inicia o Calc já com o arquivo carregado.",
    nota: "O Calc abre planilhas do Excel com alta fidelidade — inclusive com fórmulas.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "8 · Botão direito → Novo",
    d: "Botão direito na área de trabalho ou numa pasta → Novo → Planilha do OpenDocument.",
    nota: "Cria um .ods vazio associado ao Calc.",
  },
];

export default function OpenSection8() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · a planilha livre"
      title={
        <>
          Como abrir o <span className="italic text-lime-300">Calc</span> — todas as formas
        </>
      }
      lead={
        <>
          O <Hot tone="e">LibreOffice Calc</Hot> é a planilha eletrônica da suíte livre — o
          equivalente ao Excel, com interoperabilidade quase total. O comando do Executar é{" "}
          <Hot tone="y">scalc</Hot>, e vale o mesmo passeio da Parte 7, agora com planilhas.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-lime-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-lime-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-lime-200 border border-lime-300/30 bg-lime-300/[0.08] rounded px-2 py-1">
                    {w.kbd}
                  </kbd>
                )}
              </div>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 mb-2.5">{w.d}</p>
              <p className="text-[12px] leading-relaxed text-zinc-500 italic">{w.nota}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="rounded-2xl border border-lime-300/25 bg-lime-300/[0.05] p-6 sm:p-7 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-300 mb-4">
            Os comandos do Executar — a coleção completa
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { app: "Word", cmd: "winword", cor: "text-blue-300" },
              { app: "Excel", cmd: "excel", cor: "text-emerald-300" },
              { app: "PowerPoint", cmd: "powerpnt", cor: "text-orange-300" },
              { app: "Calc", cmd: "scalc", cor: "text-lime-300" },
            ].map((x) => (
              <div key={x.app} className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
                <p className={`text-[12px] font-bold ${x.cor} mb-1.5`}>{x.app}</p>
                <code className="font-mono text-[14px] text-zinc-200">{x.cmd}</code>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-400">
            Família LibreOffice: <code className="font-mono text-lime-200">swriter</code> (Writer),{" "}
            <code className="font-mono text-lime-200">scalc</code> (Calc),{" "}
            <code className="font-mono text-lime-200">simpress</code> (Impress),{" "}
            <code className="font-mono text-lime-200">sdraw</code>,{" "}
            <code className="font-mono text-lime-200">sbase</code> e{" "}
            <code className="font-mono text-lime-200">smath</code>.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="prova" title="a pegadinha do 'calc' na pesquisa">
            <p>
              No Windows, digitar apenas <strong className="text-zinc-100">"calc"</strong> na busca
              pode trazer a <strong className="text-zinc-100">Calculadora do Windows</strong>{" "}
              (calc.exe) junto com o LibreOffice Calc. Questões gostam dessa ambiguidade: verifique
              sempre se o enunciado fala da <em>Calculadora</em> (acessório do Windows) ou do{" "}
              <em>Calc</em> (planilha do LibreOffice).
            </p>
          </Callout>
          <Callout variant="exemplo" title="a tela inicial do Calc">
            <p>
              A pasta de trabalho nova abre com{" "}
              <strong className="text-zinc-100">1 planilha ("Planilha 1")</strong> de{" "}
              <strong className="text-zinc-100">1.048.576 linhas × 16.384 colunas</strong> — as
              mesmas dimensões do Excel moderno. A diferença está na interface:{" "}
              <strong className="text-zinc-100">barra de fórmulas</strong> logo abaixo das barras de
              ferramentas, <strong className="text-zinc-100">caixa de nome</strong> à esquerda e{" "}
              <strong className="text-zinc-100">barra lateral</strong> com Propriedades e Estilos.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Assim como o Writer, o Calc também aparece em provas pelo lado{" "}
          <Hot tone="e">conceitual</Hot>: suíte livre (LGPL), mantida pela The Document Foundation,
          padrão <Hot tone="e">ODF</Hot> nativo (.ods) e interoperabilidade com o formato do
          adversário (.xlsx). Guarde essa frase-feita:{" "}
          <em>"abre o que o Excel cria; salva no que o Excel abre"</em>.
        </P>
      </Reveal>
    </SectionShell>
  );
}
