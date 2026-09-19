import {
  ArrowRight,
  FileText,
  Keyboard,
  LayoutGrid,
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
    d: "Iniciar → Todos os aplicativos → pasta LibreOffice 7.x → LibreOffice Writer. No Linux, pelo menu de aplicativos → Escritório.",
    nota: "A pasta agrupa Writer, Calc, Impress, Draw, Base e Math.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S), digite 'writer' e pressione Enter.",
    nota: "Digitar 'libreoffice' lista todos os módulos da suíte.",
  },
  {
    kbd: "Win + R → swriter",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R e digite swriter (abre direto o Writer) ou soffice (abre a Central de Inicialização).",
    nota: "Os executáveis são swriter.exe e soffice.exe — bem diferentes do winword do Word.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Terminal / Prompt",
    d: "No Windows: swriter. No Linux: libreoffice --writer ou simplesmente lowriter.",
    nota: "Comandos de terminal aparecem em provas com pegada Linux.",
  },
  {
    kbd: null,
    icon: LayoutGrid,
    t: "5 · Central de Inicialização",
    d: "Abra o LibreOffice 'genérico' (soffice) e escolha 'Documento do Writer' no painel inicial — ali também ficam os documentos recentes e os modelos.",
    nota: "Tela exclusiva do LibreOffice: o Office não tem equivalente.",
  },
  {
    kbd: null,
    icon: MousePointer2,
    t: "6 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone do Writer; clique único se estiver fixado na barra de tarefas (Win+1, Win+2... pela posição).",
    nota: "Também dá para fixar cada módulo separadamente.",
  },
  {
    kbd: null,
    icon: FileText,
    t: "7 · Duplo clique num arquivo",
    d: "Abrir um .odt, .doc, .docx, .rtf ou .txt associado ao LibreOffice inicia o Writer já com o arquivo carregado.",
    nota: "O Writer ABRE arquivos do Word — o contrário nem sempre é verdadeiro em versões antigas.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "8 · Botão direito → Novo",
    d: "Botão direito na área de trabalho ou numa pasta → Novo → Documento de texto do OpenDocument.",
    nota: "Cria um .odt vazio associado ao Writer.",
  },
];

export default function OpenSection7() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · a suíte livre"
      title={
        <>
          Como abrir o <span className="italic text-teal-300">Writer</span> — todas as formas
        </>
      }
      lead={
        <>
          O <Hot tone="e">LibreOffice Writer</Hot> é o processador de textos da suíte livre mantida
          pela <Hot tone="e">The Document Foundation</Hot>. Novidade em relação ao Office: além dos
          caminhos habituais, existe a <Hot tone="e">Central de Inicialização</Hot> — e o comando do
          Executar é <Hot tone="y">swriter</Hot> (ou <Hot tone="y">soffice</Hot>).
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-teal-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-teal-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-teal-200 border border-teal-300/30 bg-teal-300/[0.08] rounded px-2 py-1">
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
        <div className="rounded-2xl border border-teal-300/25 bg-teal-300/[0.05] p-6 sm:p-7 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300 mb-4">
            Os comandos do Executar — Office × LibreOffice
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { app: "Word", cmd: "winword", cor: "text-blue-300" },
              { app: "Excel", cmd: "excel", cor: "text-emerald-300" },
              { app: "PowerPoint", cmd: "powerpnt", cor: "text-orange-300" },
              { app: "Writer", cmd: "swriter", cor: "text-teal-300" },
            ].map((x) => (
              <div key={x.app} className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
                <p className={`text-[12px] font-bold ${x.cor} mb-1.5`}>{x.app}</p>
                <code className="font-mono text-[14px] text-zinc-200">{x.cmd}</code>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-400">
            Complete a família LibreOffice: <code className="font-mono text-teal-200">scalc</code>{" "}
            (Calc), <code className="font-mono text-teal-200">simpress</code> (Impress),{" "}
            <code className="font-mono text-teal-200">sdraw</code> (Draw),{" "}
            <code className="font-mono text-teal-200">sbase</code> (Base) e{" "}
            <code className="font-mono text-teal-200">smath</code> (Math).
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="conceito" title="o que é o LibreOffice">
            <p>
              Suíte de escritório <strong className="text-zinc-100">livre e gratuita</strong>{" "}
              (licença LGPL), <strong className="text-zinc-100">multiplataforma</strong> (Windows,
              Linux e macOS), mantida pela{" "}
              <strong className="text-zinc-100">The Document Foundation</strong>. Nasceu em 2010 de
              uma bifurcação (<em>fork</em>) do OpenOffice.org. Seus módulos:{" "}
              <strong className="text-zinc-100">Writer</strong> (textos),{" "}
              <strong className="text-zinc-100">Calc</strong> (planilhas),{" "}
              <strong className="text-zinc-100">Impress</strong> (apresentações),{" "}
              <strong className="text-zinc-100">Draw</strong> (desenho),{" "}
              <strong className="text-zinc-100">Base</strong> (banco de dados) e{" "}
              <strong className="text-zinc-100">Math</strong> (fórmulas).
            </p>
          </Callout>
          <Callout variant="prova" title="por que cai tanto em concurso">
            <p>
              Por ser gratuito e usar o padrão aberto{" "}
              <strong className="text-zinc-100">ODF</strong>, o LibreOffice é adotado por diversos
              órgãos públicos — a política de interoperabilidade do governo federal (
              <strong className="text-zinc-100">e-PING</strong>) recomenda formatos abertos. Por
              isso, muitos editais cobram "MS Office <em>e</em> LibreOffice" lado a lado,
              explorando justamente as diferenças entre eles.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Guarde ainda a distinção entre <Hot tone="e">LibreOffice</Hot> (suíte instalada no
          computador, mantida pela The Document Foundation), <Hot>OpenOffice</Hot> (projeto
          original, hoje sob a Apache e praticamente estagnado) e{" "}
          <Hot>Google Docs / Microsoft 365</Hot> (suítes online, na nuvem). Bancas gostam de
          embaralhar esses nomes no mesmo item.
        </P>
      </Reveal>
    </SectionShell>
  );
}
