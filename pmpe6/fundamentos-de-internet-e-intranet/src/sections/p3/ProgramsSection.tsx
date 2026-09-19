import {
  Cpu,
  Keyboard,
  Monitor,
  Mouse,
  Package,
  PlugZap,
  Pointer,
  Printer,
  ScanLine,
  Settings2,
  Trash2,
  Usb,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

export default function ProgramsSection() {
  return (
    <SectionShell
      id="programas"
      num="03"
      kicker="Organização · software e hardware se encontrando"
      title={
        <>
          Programas, drivers e o <span className="italic text-violet-300">Plug and Play</span>
        </>
      }
      lead={
        <>
          <Hot tone="v">Programa (aplicativo)</Hot> é um conjunto de instruções executáveis que o
          computador roda. Antes de usar, em geral ele precisa ser{" "}
          <Hot tone="v">instalado</Hot> — e o mesmo vale, nos bastidores, para os{" "}
          <Hot tone="v">periféricos</Hot> que você pluga.
        </>
      }
    >
      {/* instalar / desinstalar */}
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Package size={20} className="text-violet-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Instalar um programa</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li>Rodar um instalador (<strong className="text-zinc-200">.exe ou .msi</strong>): o assistente copia arquivos, registra o programa e cria atalhos.</li>
              <li>É para a pasta <code className="font-mono text-[12px] text-violet-200">C:\Arquivos de Programas</code> (Program Files) que a maioria dos programas vai.</li>
              <li>Pela <strong className="text-zinc-200">Microsoft Store</strong>, a instalação é ainda mais automática (e sandboxed).</li>
              <li>Bancas adoram: <strong className="text-zinc-200">32 bits × 64 bits</strong> — sistemas de 64 bits rodam programas de 32 bits; o contrário, não.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Trash2 size={20} className="text-rose-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-3">Remover do jeito certo</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-400">
              <li><strong className="text-zinc-200">Configurações → Aplicativos → Aplicativos instalados</strong> (ou o clássico Painel de Controle → Programas e Recursos) → Desinstalar.</li>
              <li>O desinstalador remove arquivos, registros e dependências do programa por inteiro.</li>
              <li className="text-rose-200/90"><strong className="text-rose-300">Pegadinha:</strong> simplesmente APAGAR a pasta do programa NÃO desinstala — deixa restos e registros quebrados.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* drivers + gerenciador */}
      <Reveal>
        <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.05] p-6 sm:p-7 my-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Cpu size={18} className="text-cyan-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Driver: o "tradutor" entre Windows e hardware</h3>
          </div>
          <p className="text-[14.5px] leading-relaxed text-zinc-300 max-w-3xl">
            Todo dispositivo (impressora, placa de vídeo, webcam) fala uma "língua" própria. O{" "}
            <Hot tone="c">driver</Hot> (controlador) é o <Hot tone="c">software que ensina o sistema
            operacional a conversar com aquele hardware</Hot>. Sem driver compatível, o dispositivo
            não funciona — ou funciona mal, com um "driver genérico".
          </p>
          <div className="mt-4 rounded-xl border border-white/[0.09] bg-[#0d0c14] p-4 text-[13px] leading-relaxed text-zinc-400">
            <Settings2 size={14} className="inline text-yellow-300 -mt-0.5" /> O{" "}
            <strong className="text-zinc-200">Gerenciador de Dispositivos</strong> lista todo o
            hardware do PC. Dispositivo com <strong className="text-yellow-300">triângulo amarelo de
            exclamação</strong> = problema de driver (falho, ausente ou desatualizado). É a resposta
            clássica para "como descobrir qual dispositivo está com defeito".
          </div>
        </div>
      </Reveal>

      {/* plug and play */}
      <Reveal>
        <div className="rounded-2xl border border-violet-300/30 bg-gradient-to-br from-violet-300/[0.07] to-transparent p-6 sm:p-8 my-6">
          <div className="flex items-center gap-2.5 mb-4">
            <PlugZap size={19} className="text-violet-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Plug and Play (PnP) — "conecte e use"</h3>
          </div>
          <p className="text-[14.5px] leading-relaxed text-zinc-300 max-w-3xl mb-5">
            PnP é a tecnologia que permite <Hot tone="v">conectar um dispositivo e usá-lo
            imediatamente</Hot>: o Windows <Hot tone="v">reconhece, identifica, configura os recursos
            e instala o driver automaticamente</Hot> — sem reiniciar o PC e, na maioria das vezes,
            sem que o usuário precise fazer qualquer coisa. O grande símbolo do PnP é o{" "}
            <Hot tone="v">USB</Hot>.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: Usb, t: "1 · Conectar", d: "Você espetou o pen drive/USB sem desligar nada (hot-plug)." },
              { icon: ScanLine, t: "2 · Reconhecer", d: "O Windows detecta o dispositivo e identifica o que é." },
              { icon: Cpu, t: "3 · Configurar", d: "Instala/busca o driver (até no Windows Update) e já libera o uso." },
            ].map((s) => (
              <div key={s.t} className="rounded-xl bg-[#0d0c14] border border-white/[0.09] p-4">
                <s.icon size={17} className="text-violet-300 mb-2" />
                <p className="text-[13px] font-bold text-zinc-100">{s.t}</p>
                <p className="text-[12.5px] leading-relaxed text-zinc-500 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
          <Callout variant="pegadinha">
            <p>
              <em>"Dispositivos Plug and Play exigem a instalação manual do driver pelo usuário e a
              reinicialização do computador."</em> → <strong className="text-rose-300">ERRADO em
              dose dupla!</strong> A graça do PnP é justamente{" "}
              <strong className="text-zinc-100">dispensar</strong> a instalação manual e a
              reinicialização na maioria dos casos.
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* tipos de periféricos */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Classificar periféricos: a questão dada de graça
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="flex gap-2 mb-3 text-cyan-300">
              <Keyboard size={17} /><Mouse size={17} />
            </div>
            <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">Entrada (input)</h3>
            <p className="text-[13px] leading-relaxed text-zinc-400">
              Enviam dados PARA o computador: teclado, mouse, scanner, webcam, microfone,
              joystick, mesa digitalizadora.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
            <div className="flex gap-2 mb-3 text-emerald-300">
              <Monitor size={17} /><Printer size={17} />
            </div>
            <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">Saída (output)</h3>
            <p className="text-[13px] leading-relaxed text-zinc-400">
              Recebem/apresentam dados DO computador: monitor, impressora, caixas de som, fones,
              projetor, plotter.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-300/40 bg-violet-300/[0.07] p-5">
            <div className="flex gap-2 mb-3 text-violet-300">
              <Pointer size={17} /><Usb size={17} />
            </div>
            <h3 className="text-[14.5px] font-bold text-violet-200 mb-1.5">Entrada E saída (mistos)</h3>
            <p className="text-[13px] leading-relaxed text-zinc-300">
              Fazem os dois: <strong className="text-violet-200">touchscreen</strong> (exibe + capta
              toques), impressora multifuncional (imprime + digitaliza), pen drive/HD externo,
              modem, headset com microfone.
            </p>
            <p className="mt-3 text-[12px] font-semibold text-violet-300/90">
              Trap dourada: "touchscreen é apenas dispositivo de saída" → ERRADA.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova">
          <p>
            Amarrando os três blocos em uma frase de gabarito:{" "}
            <strong className="text-zinc-100">o sistema operacional gerencia programas e hardware;
            periféricos modernos são Plug and Play porque o Windows instala seus DRIVERS
            automaticamente; e a classificação de um periférico depende do SENTIDO do fluxo de
            dados (entra, sai ou os dois).</strong>
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Um avanço prático que também rende item: conectar e desconagar dispositivos{" "}
          <Hot tone="v">com o computador ligado</Hot> (como faz o USB) chama-se{" "}
          <Hot tone="c">hot-plug/hot swap</Hot> — a evolução natural do PnP. E, se o dispositivo não
          vier com driver automático, o caminho oficial continua sendo o site do fabricante (baixe
          sempre do oficial — lembra do phishing da Parte 2?).
        </P>
      </Reveal>
    </SectionShell>
  );
}
