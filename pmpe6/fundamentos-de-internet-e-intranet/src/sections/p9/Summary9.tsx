import { BookMarked, CheckCircle2, GraduationCap, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Abrir o Impress: Iniciar, Pesquisa, Executar 'simpress', Central de Inicialização, duplo clique num .odp.",
  "Formato nativo: .odp (ODF). Abre e salva .pptx/.ppt. Não existe .ppsx equivalente.",
  "Interface: barra de MENUS + Painel de slides (esquerda) + Barra lateral (direita) + Barra de exibição (modos).",
  "Barra lateral: abas Propriedades, Layouts, Tabelas Mestres, Animação Personalizada e TROCAR SLIDE (transições).",
  "Três menus exclusivos: SLIDE (layout, ocultar, excluir), APRESENTAÇÃO (F5, ensaio, configurar) e DESENHAR (formas, grupos).",
  "Slide Mestre: Exibir → Mestre → Slide Mestre (ou aba Tabelas Mestres da Barra lateral).",
  "Transição = ENTRE slides (aba Trocar Slide); Animação = OBJETOS dentro do slide (aba Animação Personalizada).",
  "Âncoras universais com o PowerPoint: F5 (inicia), B (tela preta), W (tela branca), E (apaga rabiscos), Esc (encerra), número+Enter (pula).",
  "Diferenças-chave: Shift+F3 duplica (≠ Ctrl+D), F4 posição/tamanho, F3/Ctrl+F3 grupos, P caneta (≠ Ctrl+P).",
  "Ctrl+Enter: próximo objeto de texto; no último, insere novo slide com o mesmo layout.",
  "Modos: Normal, Estrutura de Tópicos, Notas, Classificação de Slides, Apresentação.",
  "Anotações do orador são privativas — nunca aparecem na projeção (igual ao PowerPoint).",
];

const PODIO = [
  "Ctrl+N/O/S = novo, abrir, salvar · Ctrl+Q = sair · Ctrl+B/I/U = formatação",
  "F5 = apresentação · Esc ou − = encerrar · B/W = telas preta/branca (âncoras!)",
  "Shift+F3 = duplicar · F4 = posição e tamanho · F3 / Ctrl+F3 = entrar/sair do grupo",
  "Shift+Ctrl+G = agrupar · Shift+Ctrl+A = desagrupar · Shift+Ctrl+K = combinar",
  "Ctrl+Enter = próximo objeto / novo slide · Ctrl+Shift+F5 = Navegador",
  "P = caneta · E = apagar marcações · Ctrl+A = desligar caneta",
];

const ERROS = [
  "Dizer que o formato nativo é .pptx (é o .odp).",
  "Usar Ctrl+D esperando duplicar no Impress (é Shift+F3).",
  "Usar Ctrl+M esperando novo slide no Impress (Ctrl+M não insere slide aqui).",
  "Procurar transições num menu 'Transições' (é a aba Trocar Slide da Barra lateral).",
  "Dizer que Shift+F5 inicia do slide atual no Impress (esse atalho é do PowerPoint).",
  "Usar Ctrl+P esperando caneta na apresentação do Impress (é só P).",
  "Afirmar que o Impress não abre arquivos .pptx (abre e salva).",
];

export default function Summary9() {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Revisão final · suíte livre completa"
      title={
        <>
          Resumo <span className="italic text-rose-300">de véspera</span>
        </>
      }
      lead="O Impress destilado — e, com ele, a trilogia principal da suíte livre está completa no seu material."
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
            <div className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.05] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
                <CheckCircle2 size={14} /> Pódio dos atalhos
              </p>
              <ul className="space-y-3">
                {PODIO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[12.5px] leading-relaxed text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 shrink-0" />
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

      {/* fechamento da suíte */}
      <Reveal className="mt-14">
        <div className="rounded-2xl border border-rose-300/30 bg-gradient-to-br from-rose-300/[0.08] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap size={20} className="text-rose-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">A suíte livre está completa!</h3>
          </div>
          <p className="text-[14.5px] leading-relaxed text-zinc-300 mb-6 max-w-3xl">
            Writer, Calc e Impress — os três módulos que caem em prova, todos dominados. O padrão é
            o mesmo em todos: barra de menus, F11 para estilos, Ctrl+S para salvar e os atalhos
            internacionais que você já sabe pensar em inglês.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { n: "Parte 7", t: "LibreOffice Writer", pal: "teal" },
              { n: "Parte 8", t: "LibreOffice Calc", pal: "lime" },
              { n: "Parte 9", t: "LibreOffice Impress", pal: "rose" },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`rounded-xl border p-4 ${
                  i === 2
                    ? "border-rose-300/50 bg-rose-300/[0.1]"
                    : i === 1
                      ? "border-lime-300/30 bg-lime-300/[0.05]"
                      : "border-teal-300/30 bg-teal-300/[0.05]"
                }`}
              >
                <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-1.5">{p.n}</p>
                <p className="text-[13.5px] font-semibold text-zinc-200">{p.t}</p>
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
            {[
              { parte: "Extra 1", tema: "Draw, Base e Math: os três módulos restantes da suíte" },
              { parte: "Extra 2", tema: "Google Docs, Sheets e Slides: o escritório na nuvem" },
              { parte: "Extra 3", tema: "Simulado final: questões comentadas de todo o edital" },
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
