import {
  ArrowRight,
  Keyboard,
  LayoutGrid,
  MonitorPlay,
  MousePointer2,
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
    d: "Iniciar → Todos os aplicativos → pasta LibreOffice 7.x → LibreOffice Impress. No Linux: menu de aplicativos → Escritório → Impress.",
    nota: "A mesma pasta de sempre, com os seis módulos da suíte.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S), digite 'impress' e pressione Enter.",
    nota: "Digitar 'libreoffice' lista todos os módulos.",
  },
  {
    kbd: "Win + R → simpress",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R e digite simpress (abre direto o Impress) ou soffice --impress.",
    nota: "O executável é o simpress.exe — 's' de suíte + 'impress'.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Terminal / Prompt",
    d: "No Windows: simpress. No Linux: libreoffice --impress ou loimpress.",
    nota: "Fecha a coleção de comandos da suíte.",
  },
  {
    kbd: null,
    icon: LayoutGrid,
    t: "5 · Central de Inicialização",
    d: "Abra o LibreOffice 'genérico' (soffice) e escolha 'Apresentação do Impress' no painel inicial.",
    nota: "A Central também mostra modelos e apresentações recentes.",
  },
  {
    kbd: null,
    icon: MousePointer2,
    t: "6 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone do Impress; clique único se estiver fixado na barra (Win+1, Win+2...).",
    nota: "Cada módulo pode ser fixado separadamente.",
  },
  {
    kbd: null,
    icon: MonitorPlay,
    t: "7 · Duplo clique num arquivo",
    d: "Abrir um .odp, .pptx, .ppt ou .otp associado inicia o Impress já com o arquivo carregado.",
    nota: "O Impress abre apresentações do PowerPoint com alta fidelidade.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "8 · Botão direito → Novo",
    d: "Botão direito na área de trabalho ou numa pasta → Novo → Apresentação do OpenDocument.",
    nota: "Cria um .odp vazio associado ao Impress.",
  },
];

export default function OpenSection9() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · o palco livre"
      title={
        <>
          Como abrir o <span className="italic text-rose-300">Impress</span> — todas as formas
        </>
      }
      lead={
        <>
          O <Hot tone="y">LibreOffice Impress</Hot> é o editor de apresentações da suíte livre — o
          equivalente ao PowerPoint. O comando do Executar é{" "}
          <Hot tone="y">simpress</Hot>, e a partir daqui a coleção de módulos da suíte está
          completa.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-rose-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-rose-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-rose-200 border border-rose-300/30 bg-rose-300/[0.08] rounded px-2 py-1">
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
        <div className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.05] p-6 sm:p-7 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-4">
            A coleção completa de comandos — todas as suítes
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { app: "Word", cmd: "winword", cor: "text-blue-300" },
              { app: "Excel", cmd: "excel", cor: "text-emerald-300" },
              { app: "PowerPoint", cmd: "powerpnt", cor: "text-orange-300" },
              { app: "Impress", cmd: "simpress", cor: "text-rose-300" },
            ].map((x) => (
              <div key={x.app} className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
                <p className={`text-[12px] font-bold ${x.cor} mb-1.5`}>{x.app}</p>
                <code className="font-mono text-[14px] text-zinc-200">{x.cmd}</code>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-400">
            Família LibreOffice completa:{" "}
            <code className="font-mono text-rose-200">swriter</code> ·{" "}
            <code className="font-mono text-rose-200">scalc</code> ·{" "}
            <code className="font-mono text-rose-200">simpress</code> ·{" "}
            <code className="font-mono text-rose-200">sdraw</code> ·{" "}
            <code className="font-mono text-rose-200">sbase</code> ·{" "}
            <code className="font-mono text-rose-200">smath</code>.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="prova" title="a simetria dos nomes">
            <p>
              Repare no padrão dos executáveis do LibreOffice: todos começam com "s" (de suíte)
              seguido do nome do módulo — <strong className="text-zinc-100">swriter</strong>,{" "}
              <strong className="text-zinc-100">scalc</strong>,{" "}
              <strong className="text-zinc-100">simpress</strong>. Já o Office usa nomes próprios:{" "}
              <strong className="text-zinc-100">winword</strong>, <strong className="text-zinc-100">excel</strong>,{" "}
              <strong className="text-zinc-100">powerpnt</strong>. Questão que cita qualquer um
              desses comandos quer saber se você domina <em>as duas suítes</em>.
            </p>
          </Callout>
          <Callout variant="exemplo" title="a tela inicial do Impress">
            <p>
              A apresentação nova abre com um slide de título em branco, baseado no{" "}
              <strong className="text-zinc-100">Slide Mestre</strong> padrão ("Padrão" ou o tema
              escolhido). À esquerda, o <strong className="text-zinc-100">Painel de slides</strong>{" "}
              (miniaturas); à direita, a <strong className="text-zinc-100">Barra lateral</strong> com
              as abas de Layouts, Mestres, Animação e Transições — os dois painéis que detalhamos no
              próximo capítulo.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Com o Impress, a suíte livre está completa no seu material:{" "}
          <Hot tone="e">Writer</Hot> (textos), <Hot tone="e">Calc</Hot> (planilhas) e agora{" "}
          <Hot tone="e">Impress</Hot> (apresentações) — os três módulos que caem em prova, todos
          com o mesmo padrão de <Hot>barra de menus</Hot> e <Hot>barra lateral</Hot>.
        </P>
      </Reveal>
    </SectionShell>
  );
}
