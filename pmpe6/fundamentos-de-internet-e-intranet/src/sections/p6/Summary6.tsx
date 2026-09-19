import { ArrowRight, BookMarked, CheckCircle2, GraduationCap, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o PowerPoint: Iniciar, Pesquisa, Executar 'powerpnt' (sem O e I), atalho, duplo clique num .pptx ou .ppsx.",
  "Apresentação = o arquivo (.pptx); slide = cada tela; espaço reservado = as caixas do layout.",
  "LAYOUT organiza os espaços do slide (Página Inicial); TEMA define cores/fontes de tudo (Design).",
  "TRANSIÇÃO = efeito ENTRE slides (uma por slide, guia Transições).",
  "ANIMAÇÃO = efeito em OBJETOS dentro do slide (várias por slide, guia Animações).",
  "Os 4 tipos de animação: Entrada, Ênfase, Saída e Trajetória de Animação.",
  "SLIDE MESTRE (guia Exibir) é o molde: altera fonte, fundo, logotipo e rodapé de todos os slides de uma vez.",
  "Anotações do orador são privativas — a plateia nunca as vê (só o Modo do Apresentador ou a impressão).",
  "Ocultar Slide mantém o slide no arquivo, mas não o exibe (número riscado nas miniaturas).",
  "F5 = do início · Shift+F5 = do slide atual · Alt+F5 = Modo do Apresentador · Esc = encerra.",
  "Durante a apresentação: B = tela preta, W = tela branca, número+Enter = pular para o slide.",
  ".ppsx abre já apresentando; .potx é modelo; .pptm tem macros.",
];

const PODIO = [
  "Ctrl+O/A/B/P = nova, abrir, salvar, imprimir · F12 = salvar como",
  "Ctrl+M = novo slide · Ctrl+D = duplicar · Ctrl+T = selecionar todos",
  "F5 / Shift+F5 / Alt+F5 = iniciar do início / do atual / apresentador",
  "B ou . = tela preta · W ou , = tela branca · Esc = encerrar",
  "N, Enter, →, Espaço = avançar · P, ←, Backspace = voltar",
  "Alt+K = Transições · Alt+A = Animações · Alt+S = Apresentação de Slides",
];

const ERROS = [
  "Dizer que transição é o efeito dentro do slide (isso é animação).",
  "Afirmar que as anotações do orador aparecem para a plateia.",
  "Procurar o Slide Mestre na guia Design (ele está em Exibir).",
  "Dizer que Ctrl+N cria um novo slide (é negrito; novo slide é Ctrl+M).",
  "Afirmar que ocultar um slide o exclui da apresentação.",
  "Dizer que é possível aplicar várias transições ao mesmo slide (é uma só).",
  "Confundir .pptx (editável) com .ppsx (abre apresentando).",
];

export default function Summary6({ onGoPart7 }: { onGoPart7: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · fim da trilogia Office"
      title={
        <>
          Resumo <span className="italic text-orange-300">de véspera</span>
        </>
      }
      lead="O PowerPoint 2019 destilado — e, com ele, o pacote Office completo dentro do seu material de estudos."
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
        <div className="space-y-6">
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
                <CheckCircle2 size={14} /> Pódio dos atalhos
              </p>
              <ul className="space-y-3">
                {PODIO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12.5px] leading-relaxed text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2 shrink-0" />
                    <span className="font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
                <XCircle size={14} /> Armadilhas sempre ERRADAS
              </p>
              <ul className="space-y-3">
                {ERROS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300">
                    <XCircle size={15} className="text-rose-300 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      {/* fechamento da série */}
      <Reveal className="mt-14">
        <div className="rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-yellow-300/[0.08] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap size={20} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Parabéns: a série está completa!</h3>
          </div>
          <p className="text-[14.5px] leading-relaxed text-zinc-300 mb-6 max-w-3xl">
            Da infraestrutura da Internet ao último slide do PowerPoint, você percorreu o edital de
            Informática inteiro. Use o seletor de partes no topo para revisar qualquer tema — e
            refaça os quizzes até acertar tudo sem hesitar.
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { n: "Parte 1", t: "Internet & Intranet" },
              { n: "Parte 2", t: "Segurança & Backup" },
              { n: "Parte 3", t: "Windows & Arquivos" },
              { n: "Parte 4", t: "Word 2019" },
              { n: "Parte 5", t: "Excel 2019" },
              { n: "Parte 6", t: "PowerPoint 2019" },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`rounded-xl border p-4 ${
                  i === 5
                    ? "border-orange-300/50 bg-orange-300/[0.1]"
                    : "border-white/[0.08] bg-[#0d0c14]"
                }`}
              >
                <p className={`text-[10.5px] font-bold uppercase tracking-[0.18em] mb-1.5 ${i === 5 ? "text-orange-300" : "text-zinc-500"}`}>
                  {p.n}
                </p>
                <p className="text-[12.5px] leading-snug text-zinc-400">{p.t}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked size={18} className="text-zinc-400" />
            <h3 className="font-display text-xl text-[#f4f1ea]">Possíveis próximos módulos</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <button
              onClick={onGoPart7}
              className="group text-left rounded-xl border border-teal-300/40 bg-teal-300/[0.08] p-5 hover:bg-teal-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-teal-300 group-hover:text-[#0a0910] mb-2">
                Parte 7 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                LibreOffice Writer: menus, funcionalidades e atalhos (com o comparativo Word × Writer)
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-teal-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {[
              { parte: "Parte 8", tema: "LibreOffice Calc e Impress" },
              { parte: "Extra", tema: "Simulado final: questões comentadas de todo o edital" },
            ].map((p) => (
              <div key={p.parte} className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">{p.parte}</p>
                <p className="text-[13.5px] leading-relaxed text-zinc-500">{p.tema}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
