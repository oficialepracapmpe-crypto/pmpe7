import {
  Battery,
  Bell,
  ChevronUp,
  Globe,
  LayoutGrid,
  Minus,
  Monitor,
  Moon,
  Power,
  Search,
  Square,
  Trash2,
  User,
  Volume2,
  Wifi,
  X,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* ---------- diagrama: anatomia da janela ---------- */
function WindowDiagram() {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#0d0c14] overflow-hidden">
      {/* barra de título */}
      <div className="flex items-center gap-3 bg-white/[0.04] px-4 py-2.5 border-b border-white/[0.07]">
        <span className="font-mono text-[11px] text-zinc-400">Documento1 — Bloco de Notas</span>
        <span className="text-[10px] text-zinc-600">← barra de título (arraste para mover a janela)</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="group grid place-items-center w-8 h-6 rounded hover:bg-white/10" title="Minimizar">
            <Minus size={12} className="text-zinc-300" />
          </span>
          <span className="grid place-items-center w-8 h-6 rounded hover:bg-white/10" title="Maximizar/Restaurar">
            <Square size={10} className="text-zinc-300" />
          </span>
          <span className="grid place-items-center w-8 h-6 rounded bg-rose-400/80 hover:bg-rose-400" title="Fechar (Alt+F4)">
            <X size={12} className="text-white" />
          </span>
        </div>
      </div>
      <div className="p-5 grid sm:grid-cols-3 gap-3 text-[12px] leading-relaxed">
        <p className="text-zinc-400">
          <span className="inline-grid place-items-center w-4 h-4 rounded bg-white/10 mr-1.5"><Minus size={10} /></span>
          <strong className="text-zinc-200">Minimizar</strong> — a janela some para a barra de tarefas, mas o programa continua aberto.
        </p>
        <p className="text-zinc-400">
          <span className="inline-grid place-items-center w-4 h-4 rounded bg-white/10 mr-1.5"><Square size={8} /></span>
          <strong className="text-zinc-200">Maximizar ⇆ Restaurar</strong> — ocupa a tela toda; o mesmo botão volta ao tamanho anterior.
        </p>
        <p className="text-zinc-400">
          <span className="inline-grid place-items-center w-4 h-4 rounded bg-rose-400/70 mr-1.5"><X size={10} className="text-white" /></span>
          <strong className="text-zinc-200">Fechar</strong> — encerra a janela (e o app, se for a última). Atalho: <kbd className="font-mono text-rose-200">Alt+F4</kbd>.
        </p>
      </div>
    </div>
  );
}

/* ---------- diagrama: barra de tarefas ---------- */
const TASKBAR: { icon: React.ReactNode; label: string }[] = [
  { icon: <LayoutGrid size={14} className="text-yellow-300" />, label: "Menu Iniciar (Win) — apps, usuário e energia" },
  { icon: <Search size={14} className="text-zinc-300" />, label: "Pesquisa (Win+S)" },
  { icon: <Monitor size={14} className="text-zinc-300" />, label: "Visão de Tarefas (Win+Tab): janelas e desktops virtuais" },
  { icon: <Globe size={14} className="text-cyan-300" />, label: "Aplicativos fixados: Win+1, Win+2..." },
  { icon: <Wifi size={13} className="text-zinc-400" />, label: "Área de notificação: rede, volume, bateria (Win+B leva o foco)" },
  { icon: <Bell size={13} className="text-zinc-300" />, label: "Notificações e relógio (Win+N)" },
  { icon: <span className="w-[3px] h-4 rounded bg-white/20" />, label: "Botão 'Mostrar a área de trabalho' — cantinho direito (equivale a Win+D)" },
];

function TaskbarDiagram() {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#0d0c14] p-4">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-4 px-1">
        Anatomia da barra de tarefas (passe o mouse / toque em cada item)
      </p>
      <div className="flex flex-wrap items-stretch gap-2">
        {TASKBAR.map((t) => (
          <div
            key={t.label}
            title={t.label}
            className="flex-1 min-w-[110px] rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-violet-300/50 hover:bg-violet-300/[0.08] transition-colors p-3 text-center cursor-help"
          >
            <div className="grid place-items-center mb-2 h-5">{t.icon}</div>
            <p className="text-[10.5px] leading-snug text-zinc-500">{t.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WindowsSection() {
  return (
    <SectionShell
      id="windows"
      num="04"
      kicker="Ambiente gráfico · o básico que a banca cobra"
      title={
        <>
          O ambiente <span className="italic text-violet-300">Windows</span> em português
        </>
      }
      lead={
        <>
          O sistema operacional é o <Hot tone="v">software básico</Hot> que gerencia hardware e
          programas e oferece a <Hot>interface gráfica</Hot> (GUI) com a qual interagimos: janelas,
          ícones, menus e a barra de tarefas. Aqui, o tour pelos elementos cobrados nas provas.
        </>
      }
    >
      <Reveal>
        <P>
          Estamos falando de <Hot tone="y">Windows 10 e Windows 11</Hot> (este último trouxe o menu
          Iniciar centralizado, os layouts de snap, os Widgets e o Copilot). Conceitos do exercício:
          o Windows é <Hot tone="c">multitarefa</Hot> (roda vários programas ao mesmo tempo),{" "}
          <Hot tone="c">multiusuário</Hot> (cada pessoa tem seu perfil com senha) e trabalha com{" "}
          <Hot tone="c">interface gráfica</Hot> — nada de decorar comandos como no antigo MS-DOS.
        </P>
      </Reveal>

      <div className="space-y-6 my-8">
        <Reveal><WindowDiagram /></Reveal>
        <Reveal><TaskbarDiagram /></Reveal>
      </div>

      {/* menu iniciar + energia */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <LayoutGrid size={18} className="text-yellow-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Menu Iniciar</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Fixados</strong> + <strong className="text-zinc-200">Todos os apps</strong> (lista alfabética) + <strong className="text-zinc-200">Recomendados</strong> (recentes).</li>
              <li>Canto inferior: <strong className="text-zinc-200">conta do usuário</strong> (trocar de usuário, sair/bloquear) e <strong className="text-zinc-200">Energia</strong> (desligar, reiniciar, suspender).</li>
              <li>Digitar com o menu aberto já <strong className="text-zinc-200">pesquisa</strong> programas e arquivos — o jeito mais rápido de abrir qualquer coisa.</li>
              <li>Fixar um app na barra de tarefas = criar um <strong className="text-zinc-200">atalho permanente</strong> (remove = desafixar, não desinstala!).</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <Power size={18} className="text-rose-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Ligar, suspender, hibernar</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-rose-200">Suspender:</strong> pausa com baixo consumo mantendo a sessão na memória RAM — volta em segundos. <em>Depende de energia.</em></li>
              <li><strong className="text-rose-200">Hibernar:</strong> grava a sessão no DISCO e desliga de vez; ao ligar, retoma tudo como estava. Ideal em notebooks longe da tomada.</li>
              <li><strong className="text-rose-200">Desligar:</strong> fecha sessão e programas; <strong className="text-rose-200">Reiniciar:</strong> desliga e liga (rexige após muitas atualizações).</li>
              <li><strong className="text-rose-200">Sair × Trocar de usuário:</strong> sair encerra sua sessão; trocar mantém a sua aberta enquanto outra pessoa usa a conta dela.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* explorer, lixeira, config/painel, gerenciador */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <Search size={18} className="text-cyan-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Explorador de Arquivos (Win+E)</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Acesso Rápido:</strong> pastas fixadas + arquivos recentes/frequentes.</li>
              <li><strong className="text-zinc-200">Este Computador:</strong> as unidades (C:, D:, pen drives) e as pastas pessoais.</li>
              <li>Modos de exibição: ícones (vários tamanhos), lista e <strong className="text-zinc-200">detalhes</strong> (nome, data de modificação, tipo, tamanho).</li>
              <li>Menu Exibir → Mostrar: <strong className="text-zinc-200">extensões de nomes de arquivos</strong> e <strong className="text-zinc-200">itens ocultos</strong> (duas opções que as bancas citam nominalmente).</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trash2 size={18} className="text-emerald-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Lixeira — o purgatório</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li>Delete envia o item à Lixeira: dali ele pode ser <strong className="text-zinc-200">restaurado</strong> ao local original.</li>
              <li><strong className="text-zinc-200">Esvaziar a Lixeira</strong> apaga de vez; Shift+Delete nem passa por ela.</li>
              <li><strong className="text-zinc-200">Pen drive e rede</strong> → exclusão direta, <strong className="text-zinc-200">sem Lixeira</strong>.</li>
              <li>Ela tem <strong className="text-zinc-200">tamanho máximo por unidade</strong> — não é depósito infinito.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={0} className="hidden" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Configurações × Painel de Controle</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Configurações (Win+I):</strong> o painel moderno — tela, rede, contas, aplicativos, atualização, privacidade. É a referência atual das provas.</li>
              <li><strong className="text-zinc-200">Painel de Controle:</strong> a ferramenta CLÁSSICA (desde o Windows 95), aos poucos migrada para as Configurações, mas ainda presente.</li>
              <li>Repita comigo: os dois existem e coexistem; item dizendo que o Painel "foi removido" do Windows 11 → <strong className="text-rose-300">ERRADO</strong>.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <div className="flex items-center gap-2 mb-3">
              <User size={18} className="text-yellow-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">Contas e Gerenciador de Tarefas</h3>
            </div>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Conta Microsoft × conta local:</strong> a primeira sincroniza OneDrive e configurações; a segunda existe só naquele PC. Há perfis de <strong className="text-zinc-200">Administrador</strong> e <strong className="text-zinc-200">Padrão</strong>.</li>
              <li><strong className="text-zinc-200">Gerenciador de Tarefas (Ctrl+Shift+Esc):</strong> ver processos e uso de CPU/memória, <strong className="text-zinc-200">finalizar programa travado ("não respondendo")</strong> e gerenciar o que inicia com o Windows.</li>
              <li><strong className="text-zinc-200">Win+L:</strong> bloqueie ao se afastar — a norma de segurança favorita dos editais.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Callout variant="exemplo" title="o essencial da manutenção">
            <div className="flex items-start gap-3">
              <Battery size={16} className="text-cyan-300 mt-1 shrink-0" />
              <p>
                <strong className="text-zinc-100">Windows Update</strong> baixa e instala
                atualizações de segurança e recursos (nunca desligue o PC "atualizando").{" "}
                <strong className="text-zinc-100">Segurança do Windows</strong> é o painel com{" "}
                <strong className="text-zinc-100">Microsoft Defender</strong> (antivírus nativo) e o{" "}
                <strong className="text-zinc-100">Firewall</strong> — relembre a Parte 2 do material.
              </p>
            </div>
          </Callout>
          <Callout variant="pegadinha" title="multitarefa mal contada">
            <div className="flex items-start gap-3">
              <Moon size={16} className="text-rose-300 mt-1 shrink-0" />
              <p>
                <em>"Minimizar um programa interrompe sua execução."</em> →{" "}
                <strong className="text-rose-300">ERRADO!</strong> Minimizar só tira a janela da
                vista — o download, a música e o antivírus continuam rodando em segundo plano.
                Suspender ≠ hibernar ≠ desligar é o parente próximo dessa pegadinha.
              </p>
            </div>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex items-center gap-3">
          <ChevronUp size={0} className="hidden" />
          <Volume2 size={0} className="hidden" />
          <P>
            Com o terreno mapeado, chegamos ao coração desta parte: o capítulo seguinte reúne{" "}
            <Hot tone="y">todos os atalhos nativos do Windows</Hot> — a lista mais completa que você
            encontrará em qualquer material de concurso, com busca e separação por famílias.
          </P>
        </div>
      </Reveal>
    </SectionShell>
  );
}
