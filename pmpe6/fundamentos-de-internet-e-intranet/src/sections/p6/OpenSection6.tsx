import {
  ArrowRight,
  Keyboard,
  MonitorPlay,
  MousePointer2,
  Presentation,
  Rocket,
  Search,
  SquareTerminal,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const WAYS = [
  {
    kbd: null,
    icon: Rocket,
    t: "1 · Menu Iniciar",
    d: "Botão Iniciar (ou tecla Win) → Todos os aplicativos → letra P → PowerPoint. Também costuma estar entre os apps Fixados.",
    nota: "É o caminho descrito nos enunciados 'padrão' das bancas.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S), digite 'powerpoint' e pressione Enter.",
    nota: "A busca também lista as apresentações .pptx abertas recentemente.",
  },
  {
    kbd: "Win + R → powerpnt",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R abre Executar; digite powerpnt (sem o 'oi'!) e Enter.",
    nota: "Pegadinha de ouro: o executável é POWERPNT.EXE — sem as letras O e I. Word = winword; Excel = excel.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Prompt de Comando / PowerShell",
    d: "No cmd ou no PowerShell, digite powerpnt e Enter — mesmo efeito da caixa Executar.",
    nota: "Funciona porque o executável está registrado no caminho do sistema.",
  },
  {
    kbd: "Win + número",
    icon: MousePointer2,
    t: "5 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone da área de trabalho; clique único se estiver fixado na barra de tarefas (ou Win+1, Win+2... pela posição).",
    nota: "Shift+clique abre uma segunda janela do programa.",
  },
  {
    kbd: null,
    icon: Presentation,
    t: "6 · Duplo clique num arquivo .pptx",
    d: "Abrir uma apresentação (.pptx, .ppt, .pptm, .potx) inicia o PowerPoint já com o arquivo carregado — associação de extensão.",
    nota: "O .ppt (97–2003) abre em Modo de Compatibilidade.",
  },
  {
    kbd: null,
    icon: MonitorPlay,
    t: "7 · Duplo clique num arquivo .ppsx",
    d: "O formato 'PowerPoint Show' abre DIRETO em tela cheia, já apresentando — sem passar pela janela de edição.",
    nota: "Campeão de questões: .ppsx = já apresenta; .pptx = abre para editar.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "8 · Botão direito → Novo",
    d: "Clique com o botão direito na área de trabalho ou numa pasta → Novo → Apresentação do Microsoft PowerPoint.",
    nota: "Cria um .pptx vazio já associado ao programa.",
  },
];

export default function OpenSection6() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · todas as portas de entrada"
      title={
        <>
          Como abrir o <span className="italic text-orange-300">PowerPoint</span> — todas as formas
        </>
      }
      lead={
        <>
          A mesma lógica das partes anteriores, com uma pegadinha exclusiva: na caixa Executar, o
          comando é <Hot tone="y">powerpnt</Hot> — escrito <Hot tone="r">sem as letras O e I</Hot>.
          E aqui existe um oitavo caminho especial: o arquivo <Hot tone="y">.ppsx</Hot>, que abre já
          apresentando.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-orange-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-orange-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-orange-200 border border-orange-300/30 bg-orange-300/[0.08] rounded px-2 py-1">
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
        <div className="rounded-2xl border border-orange-300/25 bg-orange-300/[0.05] p-6 sm:p-7 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-4">
            Os três comandos do Executar — decore de uma vez
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { app: "Word", cmd: "winword", cor: "text-blue-300" },
              { app: "Excel", cmd: "excel", cor: "text-emerald-300" },
              { app: "PowerPoint", cmd: "powerpnt", cor: "text-orange-300" },
            ].map((x) => (
              <div key={x.app} className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
                <p className={`text-[12px] font-bold ${x.cor} mb-1.5`}>{x.app}</p>
                <code className="font-mono text-[14px] text-zinc-200">{x.cmd}</code>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-400">
            Repare na simetria: só o PowerPoint tem nome "abreviado" no executável. Bancas exploram
            isso escrevendo "powerpoint" na alternativa errada.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="exemplo" title="a tela inicial">
            <p>
              Ao abrir sem arquivo, aparecem a{" "}
              <strong className="text-zinc-100">Apresentação em Branco</strong>, os{" "}
              <strong className="text-zinc-100">modelos e temas</strong> prontos (com esquemas de
              cores e fontes) e a lista de <strong className="text-zinc-100">Recentes</strong>.
              Dentro do programa: Ctrl+O cria nova apresentação, Ctrl+A abre uma existente e{" "}
              <strong className="text-zinc-100">Ctrl+M insere um novo slide</strong>.
            </p>
          </Callout>
          <Callout variant="prova" title="onde o programa mora">
            <p>
              Executável em{" "}
              <code className="font-mono text-[12px] text-orange-200">
                C:\Arquivos de Programas\Microsoft Office\root\Office16\POWERPNT.EXE
              </code>{" "}
              — a mesma pasta <strong className="text-zinc-100">Office16</strong> do winword.exe e
              do excel.exe que vimos nas Partes 4 e 5.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Vale registrar ainda o <Hot tone="y">PowerPoint Online</Hot> (versão gratuita no
          navegador, via conta Microsoft) e o <Hot tone="y">PowerPoint Viewer</Hot>, programa
          antigo que apenas exibia apresentações — descontinuado, mas ainda citado em questões de
          concursos mais antigos.
        </P>
      </Reveal>
    </SectionShell>
  );
}
