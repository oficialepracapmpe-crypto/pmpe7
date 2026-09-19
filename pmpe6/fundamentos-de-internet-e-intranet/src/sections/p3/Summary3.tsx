import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  'Caracteres proibidos em nomes de arquivos: < > : " / \\ | ? * — memorize como "santinho da polícia do Windows".',
  "Caminho = unidade:\\pasta\\subpasta\\arquivo.ext, separado por barra invertida.",
  "Extensão define o TIPO e o programa-padrão; renomeá-la NÃO converte o arquivo.",
  "Lixeira guarda itens excluídos com Delete (reversível) — mas tem limite de espaço e não recebe exclusões de pen drive/rede.",
  "Shift+Del e esvaziar a Lixeira = exclusão PERMANENTE.",
  "Driver = software que faz o SO conversar com o hardware; triângulo amarelo no Gerenciador de Dispositivos = problema de driver.",
  "Plug and Play: conectar → reconhecer → instalar driver automaticamente. USB é o símbolo; dispensa intervenção do usuário.",
  "Touchscreen e multifuncional são periféricos de ENTRADA E SAÍDA.",
  "Windows é multitarefa e multiusuário; minimizar NÃO interrompe a execução do programa.",
  "Desinstale por Configurações > Aplicativos — apagar a pasta NÃO desinstala.",
  "Suspender (RAM, rápido) × Hibernar (disco, sem energia) × Desligar (fecha tudo).",
  "Configurações (Win+I) e Painel de Controle coexistem no Windows 11.",
];

const ATALHOS_PODIO = [
  "Win+D = área de trabalho · Win+L = bloquear · Win+E = Explorer",
  "Ctrl+Shift+Esc = Gerenciador de Tarefas (direto) · Ctrl+Alt+Del = tela de segurança",
  "Alt+Tab = alternar janelas · Alt+F4 = fechar · Shift+Del = excluir permanente",
  "Ctrl+Shift+N = nova pasta · F2 = renomear · F5 = atualizar",
  "Win+V = histórico da área de transferência · Win+Shift+S = captura de tela",
  "Win+P = projetar · Win+R = executar · Win+Pause = sobre o sistema",
];

const ERROS = [
  "Afirmar que renomear a extensão converte o formato do arquivo.",
  "Dizer que a Lixeira é infinita ou recebe arquivos de pen drive.",
  "Afirmar que Plug and Play exige instalação manual e reinicialização.",
  "Classificar touchscreen como 'apenas dispositivo de saída'.",
  "Afirmar que minimizar um programa encerra sua execução.",
  "Dizer que o Painel de Controle foi removido do Windows 11.",
  "Trocar Win+D por Win+M (área de trabalho vs. minimizar todas).",
];

export default function Summary3({ onGoPart4 }: { onGoPart4: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-violet-300">de véspera</span>
        </>
      }
      lead="Arquivos, extensões, Plug and Play, ambiente Windows e o pódio dos atalhos — tudo destilado para a leitura final antes da prova."
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
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
              <CheckCircle2 size={14} /> O pódio dos atalhos
            </p>
            <ul className="space-y-3">
              {ATALHOS_PODIO.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2 shrink-0" />
                  <span className="font-mono text-[12.5px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
            <XCircle size={14} /> Armadilhas sempre ERRADAS
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {ERROS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300">
                <XCircle size={15} className="text-rose-300 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">A série continua</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <button
              onClick={onGoPart4}
              className="group text-left rounded-xl border border-yellow-300/40 bg-yellow-300/[0.07] p-5 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 group-hover:text-[#0a0910] mb-2">
                Parte 4 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                Microsoft Word 2019 completo: guias da faixa de opções e TODOS os atalhos
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-yellow-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {[
              { parte: "Parte 5", tema: "Microsoft Excel 2019 e LibreOffice Calc" },
              { parte: "Revisão geral", tema: "Simulado comentado reunindo todas as partes" },
            ].map((p) => (
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
