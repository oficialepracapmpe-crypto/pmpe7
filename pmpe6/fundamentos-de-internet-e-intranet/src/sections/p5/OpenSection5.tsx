import {
  ArrowRight,
  FileSpreadsheet,
  Keyboard,
  MousePointer2,
  Rocket,
  Search,
  SquareTerminal,
  Star,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const WAYS = [
  {
    kbd: null,
    icon: Rocket,
    t: "1 · Menu Iniciar",
    d: "Botão Iniciar (ou tecla Win) → 'Todos os aplicativos' → letra E → Excel. Também aparece entre os apps Fixados.",
    nota: "Caminho 'oficial' descrito nos enunciados de prova.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S), digite 'excel' e pressione Enter. O caminho mais rápido do dia a dia.",
    nota: "A busca também encontra as pastas de trabalho .xlsx recentes.",
  },
  {
    kbd: "Win + R → excel",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R abre Executar; digite excel e Enter. O executável é o excel.exe.",
    nota: "Compare com o Word: lá o comando é winword; aqui, simplesmente excel.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Prompt de Comando / PowerShell",
    d: "No cmd ou PowerShell, digite excel e Enter — mesmo efeito da caixa Executar.",
    nota: "Funciona porque o executável está registrado no caminho do sistema.",
  },
  {
    kbd: "Win + número",
    icon: MousePointer2,
    t: "5 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone da área de trabalho; clique único se estiver fixado na barra de tarefas (ou Win+1, Win+2... pela posição).",
    nota: "Shift+clique no ícone abre uma SEGUNDA janela do Excel.",
  },
  {
    kbd: null,
    icon: FileSpreadsheet,
    t: "6 · Duplo clique num arquivo .xlsx",
    d: "Abrir qualquer pasta de trabalho (.xlsx, .xls, .xlsm, .csv) inicia o Excel já com o arquivo carregado — é a associação de extensão.",
    nota: "Formato herdado .xls abre em 'Modo de Compatibilidade'.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "7 · Botão direito → Novo",
    d: "Clique com o botão direito na área de trabalho ou dentro de uma pasta → Novo → Planilha do Microsoft Excel.",
    nota: "Cria um .xlsx vazio já associado ao programa.",
  },
  {
    kbd: null,
    icon: Star,
    t: "8 · Jump list e inicialização automática",
    d: "Botão direito no ícone da barra de tarefas → lista de pastas de trabalho recentes/fixadas. Um atalho na pasta Inicializar faz o Excel abrir junto com o Windows.",
    nota: "Win+Alt+número abre a jump list pelo teclado (lembra da Parte 3?).",
  },
];

export default function OpenSection5() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · todas as portas de entrada"
      title={
        <>
          Como abrir o <span className="italic text-emerald-300">Excel</span> — todas as formas
        </>
      }
      lead={
        <>
          Mesmíssima lógica do Word, trocando o comando: na caixa Executar, digita-se{" "}
          <Hot tone="e">excel</Hot> (e não "winword"). Oito caminhos possíveis — e as bancas
          adoram o do <Hot tone="e">Executar</Hot> e o da{" "}
          <Hot tone="e">associação de extensão .xlsx</Hot>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-emerald-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-emerald-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-emerald-200 border border-emerald-300/30 bg-emerald-300/[0.08] rounded px-2 py-1">
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
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="exemplo" title="a tela inicial do Excel">
            <p>
              Ao abrir sem arquivo, aparece a <strong className="text-zinc-100">tela de
              apresentação</strong>: Pasta de trabalho em branco, modelos prontos (orçamento,
              calendário, controle de gastos) e a lista de arquivos Recentes. Dentro do programa,{" "}
              <strong className="text-zinc-100">Ctrl+O</strong> cria nova pasta e{" "}
              <strong className="text-zinc-100">Ctrl+A</strong> abre uma existente.
            </p>
          </Callout>
          <Callout variant="prova" title="onde o programa mora">
            <p>
              O executável fica em{" "}
              <code className="font-mono text-[12px] text-emerald-200">
                C:\Arquivos de Programas\Microsoft Office\root\Office16\excel.exe
              </code>
              . Repare no <strong className="text-zinc-100">Office16</strong>: é a versão interna do
              pacote Office 2019/365 — a mesma pasta do winword.exe da Parte 4.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Uma observação que rende ponto: o Excel permite{" "}
          <Hot tone="e">várias pastas de trabalho abertas simultaneamente</Hot>, cada uma em sua
          janela. Alterne entre elas com <Hot>Ctrl+Tab</Hot> ou pela guia{" "}
          <Hot>Exibir → Alternar Janelas</Hot> — útil quando a questão fala em "copiar dados de uma
          pasta de trabalho para outra".
        </P>
      </Reveal>
    </SectionShell>
  );
}
