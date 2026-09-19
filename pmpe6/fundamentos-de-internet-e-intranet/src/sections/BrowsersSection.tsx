import {
  Compass,
  Cookie,
  History,
  LayoutPanelTop,
  Puzzle,
  Star,
  Zap,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

const SHORTCUTS: { keys: string; action: string; obs?: string }[] = [
  { keys: "Ctrl + T", action: "Abrir nova aba (guia)" },
  { keys: "Ctrl + W", action: "Fechar a aba atual" },
  { keys: "Ctrl + Shift + T", action: "Reabrir a última aba fechada" },
  { keys: "Ctrl + N", action: "Abrir nova janela" },
  { keys: "Ctrl + Shift + N", action: "Navegação anônima", obs: "Chrome" },
  { keys: "Ctrl + Shift + P", action: "Janela privativa / InPrivate", obs: "Firefox e Edge" },
  { keys: "Ctrl + D", action: "Adicionar página aos favoritos" },
  { keys: "Ctrl + H", action: "Abrir o histórico" },
  { keys: "Ctrl + J", action: "Abrir a lista de downloads" },
  { keys: "Ctrl + F", action: "Localizar texto na página" },
  { keys: "F5 / Ctrl + R", action: "Atualizar (recarregar) a página" },
  { keys: "Ctrl + F5", action: "Recarregar ignorando o cache" },
  { keys: "Ctrl + Tab", action: "Alternar para a próxima aba" },
  { keys: "Alt + ← / Alt + →", action: "Voltar / avançar no histórico" },
  { keys: "Ctrl + L", action: "Selecionar a barra de endereços" },
  { keys: "Ctrl + 0", action: "Restaurar o zoom para 100%" },
  { keys: "F11", action: "Ativar/desativar tela cheia" },
];

export default function BrowsersSection() {
  return (
    <SectionShell
      id="navegadores"
      num="05"
      kicker="Ferramentas · porta de entrada da Web"
      title={
        <>
          Navegadores: o <span className="italic text-yellow-300">browser</span> sob a lupa da
          banca
        </>
      }
      lead={
        <>
          O navegador (browser) é o <Hot>programa cliente</Hot> usado para acessar a Web: ele
          solicita páginas aos servidores via <Hot tone="c">HTTP/HTTPS</Hot>, interpreta o código{" "}
          <Hot>HTML, CSS e JavaScript</Hot> e <Hot>renderiza</Hot> (desenha) a página na sua tela.
        </>
      }
    >
      <Reveal>
        <div className="flex flex-wrap gap-2.5 my-6">
          {[
            { n: "Google Chrome", s: "o mais usado no mundo" },
            { n: "Mozilla Firefox", s: "código aberto (open source)" },
            { n: "Microsoft Edge", s: "sucessor do Internet Explorer" },
            { n: "Safari", s: "nativo dos dispositivos Apple" },
            { n: "Opera", s: "VPN e recursos integrados" },
            { n: "Brave", s: "foco em privacidade" },
          ].map((b) => (
            <div
              key={b.n}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] pl-3 pr-4 py-2 hover:border-yellow-300/40 transition-colors"
            >
              <Compass size={14} className="text-yellow-300" />
              <div className="leading-tight">
                <p className="text-[12.5px] font-bold text-zinc-200">{b.n}</p>
                <p className="text-[10.5px] text-zinc-500">{b.s}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout variant="pegadinha">
          <p>
            O <strong className="text-zinc-100">Internet Explorer</strong> foi{" "}
            <strong className="text-zinc-100">descontinuado</strong> pela Microsoft (aposentado em
            2022) e substituído pelo <strong className="text-zinc-100">Edge</strong>. Questões
            antigas ainda o citam — em provas atuais, desconfie de qualquer afirmativa que o trate
            como navegador atual da Microsoft.
          </p>
        </Callout>
      </Reveal>

      {/* conceitos cobrados */}
      <Reveal className="mt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Os seis conceitos que você precisa dominar
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: Star,
              t: "Favoritos (bookmarks)",
              d: "Sites salvos para acesso rápido. No Chrome, ficam na barra de favoritos; atalho clássico: Ctrl + D.",
            },
            {
              icon: History,
              t: "Histórico",
              d: "Registro local das páginas visitadas (Ctrl + H). Pode ser apagado pelo usuário — e não é apagado na aba anônima porque nem chega a ser gravado.",
            },
            {
              icon: Zap,
              t: "Cache",
              d: "Cópias temporárias de imagens e arquivos das páginas, guardadas localmente para acelerar o carregamento em visitas futuras.",
            },
            {
              icon: Cookie,
              t: "Cookies",
              d: "Pequenos arquivos de TEXTO criados pelos sites no seu navegador para lembrar preferências e manter você logado.",
            },
            {
              icon: LayoutPanelTop,
              t: "Abas × Janelas",
              d: "Aba (guia) é uma página dentro da mesma janela; janela é uma nova instância do navegador. Pegadinha favorita da FCC!",
            },
            {
              icon: Puzzle,
              t: "Extensões (plugins)",
              d: "Mini-programas que adicionam funções ao navegador (bloqueadores, gramática...). Instalados por escolha do usuário.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-yellow-300/30 transition-colors"
            >
              <c.icon size={19} className="text-yellow-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Callout variant="prova">
            <p>
              <strong className="text-zinc-100">Cookie não é vírus</strong> e não executa nada: é um
              arquivo de texto passivo. Também não confunda com cache:{" "}
              <Hot>cache = acelerar carregamento</Hot>;{" "}
              <Hot>cookie = lembrar dados/preferências</Hot> (ex.: itens no carrinho).
            </p>
          </Callout>
          <Callout variant="pegadinha" title="a mais cobrada de todas">
            <p>
              <em>"A navegação anônima torna o usuário invisível na Internet."</em> →{" "}
              <strong className="text-rose-300">ERRADO!</strong> Ela apenas{" "}
              <strong className="text-zinc-100">não grava</strong> histórico, cookies e dados de
              formulários <strong className="text-zinc-100">no próprio computador</strong>. Seu
              provedor, o site visitado e o administrador da rede{" "}
              <strong className="text-zinc-100">continuam vendo tudo</strong>.
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* atalhos */}
      <Reveal className="mt-10">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300">
            Atalhos de teclado — os queridinhos das bancas
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2">
          {SHORTCUTS.map((s) => (
            <div
              key={s.keys}
              className="flex items-center justify-between gap-4 px-4 py-[9px] border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] rounded-lg transition-colors"
            >
              <span className="text-[12.5px] text-zinc-400">
                {s.action}
                {s.obs && <span className="text-zinc-600"> · {s.obs}</span>}
              </span>
              <kbd className="shrink-0 font-mono text-[11px] font-semibold text-yellow-200 border border-yellow-300/25 bg-yellow-300/[0.07] rounded-md px-2 py-1 whitespace-nowrap">
                {s.keys}
              </kbd>
            </div>
          ))}
        </div>
        <Callout variant="macete">
          <p>
            Anônima no Chrome = <strong className="text-zinc-100">N</strong> de "não grava nada"
            (Ctrl+Shift+<strong className="text-zinc-100">N</strong>). No Firefox/Edge = janela{" "}
            <strong className="text-zinc-100">P</strong>rivada/In<strong className="text-zinc-100">
              P
            </strong>
            rivate (Ctrl+Shift+<strong className="text-zinc-100">P</strong>). As bancas adoram
            trocar essas letras!
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Por fim, um conceito simples que aparece vez ou outra: a{" "}
          <Hot>página inicial (homepage)</Hot> é o site configurado para abrir automaticamente
          quando o navegador inicia (ou quando se clica no botão "casinha") — não confunda com a
          página <em>mais visitada</em> pelo usuário.
        </P>
      </Reveal>
    </SectionShell>
  );
}
