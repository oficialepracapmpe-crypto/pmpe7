import {
  ArrowRight,
  FileText,
  Keyboard,
  MousePointer2,
  Rocket,
  Search,
  SquareTerminal,
  Timer,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const WAYS = [
  {
    kbd: null,
    icon: Rocket,
    t: "1 · Menu Iniciar",
    d: "Clique no botão Iniciar (ou tecle Win) → procure o Word em 'Todos os aplicativos' (letra W) ou nos Fixados → clique para abrir.",
    nota: "A forma mais didática — e a que aparece como texto padrão de questões.",
  },
  {
    kbd: "Win + S",
    icon: Search,
    t: "2 · Pesquisa do Windows",
    d: "Tecle Win (ou Win+S) e simplesmente DIGITE 'word': o aparece na busca; tecle Enter para abrir. A forma mais rápida do dia a dia.",
    nota: "Pesquisa também acha arquivos .docx: 2 coelhos, 1 tecla.",
  },
  {
    kbd: "Win + R → winword",
    icon: Keyboard,
    t: "3 · Caixa Executar",
    d: "Win+R abre a caixa Executar; digite winword e Enter — o Word abre direto.",
    nota: "'winword' é o nome do executável (winword.exe) — banca já cobrou o comando literal.",
  },
  {
    kbd: null,
    icon: SquareTerminal,
    t: "4 · Prompt de Comando / Terminal",
    d: "No Prompt (cmd) ou PowerShell, digite o mesmo winword e Enter. Funciona porque o executável está no caminho do sistema.",
    nota: "Mesma lógica do Executar — só troca a janela.",
  },
  {
    kbd: null,
    icon: MousePointer2,
    t: "5 · Atalho na área de trabalho / barra de tarefas",
    d: "Duplo clique no ícone de atalho do Word na área de trabalho; ou clique único se o app estiver fixado na barra de tarefas.",
    nota: "Na barra de tarefas, Win+1, Win+2... também abrem o app fixado naquela posição.",
  },
  {
    kbd: null,
    icon: FileText,
    t: "6 · Duplo clique num arquivo .docx",
    d: "Duplo clique sobre um documento (.docx, .doc, .docm, .rtf...) abre o Word e já carrega aquele arquivo — é a ASSOCIAÇÃO de extensão agindo.",
    nota: "Quem cobra 'abrir o programa VIA documento' está descrevendo isso.",
  },
  {
    kbd: null,
    icon: ArrowRight,
    t: "7 · Botão direito → Novo",
    d: "Clique com o botão direito numa área vazia da área de trabalho ou de uma pasta → Novo → Documento do Microsoft Word → duplo clique no arquivo criado.",
    nota: "Cria um .docx vazio e o associa ao Word na hora.",
  },
  {
    kbd: "Win + número",
    icon: Timer,
    t: "8 · Documentos recentes e inicialização",
    d: "Guia Iniciar → botão direito no Word → abre arquivos fixados/recentes (jump list). Se o atalho estiver na pasta Inicializar do Windows, o Word abre sozinho ao ligar o PC.",
    nota: "A 'jump list' da barra de tarefas é primo do Win+Alt+número da Parte 3.",
  },
];

export default function OpenSection() {
  return (
    <SectionShell
      id="abrir"
      num="01"
      kicker="Primeiros passos · todas as portas de entrada"
      title={
        <>
          Como abrir o <span className="italic text-blue-300">Word</span> — todas as formas
        </>
      }
      lead={
        <>
          Parece trivial, mas as bancas cobram <Hot>cada um dos caminhos</Hot> — em especial o
          comando <Hot tone="c">winword</Hot> na caixa Executar e a abertura por{" "}
          <Hot tone="c">associação de extensão</Hot> (.docx). Oito caminhos, mesmo destino.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {WAYS.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-blue-300/40 transition-colors">
              <div className="flex items-center gap-3 mb-2.5">
                <w.icon size={18} className="text-blue-300" />
                <h3 className="text-[14.5px] font-bold text-zinc-100">{w.t}</h3>
                {w.kbd && (
                  <kbd className="ml-auto font-mono text-[10.5px] font-bold text-blue-200 border border-blue-300/30 bg-blue-300/[0.08] rounded px-2 py-1">
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
          <Callout variant="exemplo" title="e como ABRIR um documento dentro do Word já aberto?">
            <p>
              Guia <strong className="text-zinc-100">Arquivo → Abrir</strong> (ou{" "}
              <strong className="text-zinc-100">Ctrl+A</strong>): lista Recentes, OneDrive e Este
              Computador. Botões irmãos: <strong className="text-zinc-100">Ctrl+O</strong> cria um
              NOVO em branco; <strong className="text-zinc-100">Ctrl+B</strong> salva;{" "}
              <strong className="text-zinc-100">F12</strong> salva como. Repare no quarteto O–A–B–W:
              novo, abrir, salvar, fechar.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="o atalho que mora na letra A">
            <p>
              No Word <strong className="text-zinc-100">em inglês</strong>, Ctrl+O = Open e Ctrl+A =
              selecionar tudo. No nosso Word <strong className="text-zinc-100">PT-BR</strong>, as
              letras são em português: <strong className="text-zinc-100">Ctrl+O = novO</strong>,{" "}
              <strong className="text-zinc-100">Ctrl+A = Abrir</strong>,{" "}
              <strong className="text-zinc-100">Ctrl+T = selecionar Tudo</strong>. Banca que mistura
              os dois idiomas na mesma questão quer te ver tropeçar.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Uma vez aberto, você já sabe onde ele mora no disco: o executável do Word 2019 normalmente
          está em <code className="font-mono text-[12.5px] text-blue-200">C:\Arquivos de Programas\
          Microsoft Office\root\Office16\winword.exe</code> — repare no "Office16", a versão interna
          do Office 2019/365. Caminho cobrado às escondidas em provas mais técnicas.
        </P>
      </Reveal>
    </SectionShell>
  );
}
