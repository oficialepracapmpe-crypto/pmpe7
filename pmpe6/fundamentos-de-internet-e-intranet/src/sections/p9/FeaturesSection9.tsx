import {
  Blend,
  Image,
  Layers,
  MonitorPlay,
  Shapes,
  Table2,
  Timer,
  Wand2,
  Type,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const FEATURES = [
  {
    icon: Type,
    t: "Slides, layouts e mestres",
    d: "Layouts prontos (Título, Título e Conteúdo, Comparação, Em Branco...), Slide Mestre com espaços reservados, temas e estilos de apresentação (F11).",
  },
  {
    icon: Blend,
    t: "Transições entre slides",
    d: "Aba 'Trocar Slide' da Barra lateral: dezenas de efeitos com velocidade, som e avanço ao clicar ou automático (com tempo definido).",
  },
  {
    icon: Wand2,
    t: "Animação personalizada",
    d: "Aba 'Animação Personalizada': entrada, ênfase, saída e trajetórias, com ordem, velocidade, atraso e início (ao clicar / com o anterior / após o anterior).",
  },
  {
    icon: Shapes,
    t: "Desenho e formas",
    d: "Menu Desenhar dedicado: linhas, setas, retângulos, círculos, estrelas, fluxogramas, callouts, Fontwork (o WordArt livre), 3D e pontos de edição (F8).",
  },
  {
    icon: Image,
    t: "Imagens, mídia e objetos",
    d: "Imagens (locais e online), gráficos, tabelas, áudio, vídeo, objetos OLE, fórmulas (Math), gráficos orgânicos (SmartArt) e a Galeria de clip-arts.",
  },
  {
    icon: Layers,
    t: "Camadas e organização",
    d: "Agrupar (Shift+Ctrl+G), combinar (Shift+Ctrl+K), alinhar, distribuir, trazer/enviar (Ctrl+±), posição e tamanho (F4) e o Navegador (Ctrl+Shift+F5).",
  },
  {
    icon: MonitorPlay,
    t: "Modos de apresentação",
    d: "Apresentação padrão (F5), automática (com intervalos), personalizada (só alguns slides) e looping no modo quiosque — configuradas no menu Apresentação.",
  },
  {
    icon: Timer,
    t: "Ensaiar e cronometrar",
    d: "Menu Apresentação → Ensaio de Intervalos: cronometra cada slide ao vivo e grava os tempos para a apresentação automática.",
  },
  {
    icon: Table2,
    t: "Tabelas e gráficos",
    d: "Insere tabelas com estilo automático e gráficos completos (colunas, barras, linhas, pizza, dispersão...) com assistente de dados.",
  },
  {
    icon: Layers,
    t: "Anotações e revisão",
    d: "Modo Notas (anotações do orador privativas), comentários, verificação ortográfica (F7) e dicionário de sinônimos (Ctrl+F7).",
  },
  {
    icon: Wand2,
    t: "Automação e exportação",
    d: "Macros em LibreOffice Basic, modelos (.otp), exportação para PDF (inclusive PDF/A) e HTML, e salvamento direto em .pptx.",
  },
  {
    icon: Blend,
    t: "Interoperabilidade total",
    d: "Abre e salva .pptx/.ppt com preservação de transições, animações e mestres — além do padrão ODF aberto (.odp).",
  },
];

export default function FeaturesSection9() {
  return (
    <SectionShell
      id="recursos"
      num="03"
      kicker="Capacidades · o que dá vida aos slides livres"
      title={
        <>
          Todas as <span className="italic text-rose-300">funcionalidades</span> do Impress
        </>
      }
      lead={
        <>
          Tudo o que o PowerPoint faz — transições, animações, slide mestre, ensaio, apresentação
          automática — com o mesmo vocabulário conceitual e{" "}
          <Hot tone="y">o painel lateral no lugar da faixa de opções</Hot>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {FEATURES.map((f, i) => (
          <Reveal key={f.t + i} delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-rose-300/40 hover:bg-rose-300/[0.04] transition-colors">
              <f.icon size={19} className="text-rose-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{f.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* equivalências */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4 mt-10">
          Mesma função, outro endereço — PowerPoint ⇄ Impress
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[680px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-orange-300 w-[34%]">No PowerPoint</th>
                <th className="p-4 font-display text-base text-rose-300 w-[38%]">No Impress</th>
                <th className="p-4 font-display text-base text-zinc-300">Observação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { w: "Guia Transições", l: "Barra lateral → aba Trocar Slide", o: "Painel, não guia" },
                { w: "Guia Animações", l: "Barra lateral → aba Animação Personalizada", o: "Painel, não guia" },
                { w: "Slide Mestre (guia Exibir)", l: "Exibir → Mestre → Slide Mestre", o: "Mesmo conceito" },
                { w: "Tabela Dinâmica de dados", l: "— (no Impress usa-se gráfico com dados do Calc)", o: "Diferença estrutural" },
                { w: "Ctrl+M (novo slide)", l: "Ctrl+Enter (no último objeto) ou Enter no Painel", o: "Atalho diferente!" },
                { w: "Ctrl+D (duplicar)", l: "Shift+F3", o: "Atalho diferente!" },
                { w: "Shift+F5 (slide atual)", l: "— (não há; use F5)", o: "Não existe" },
                { w: ".ppsx (abre apresentando)", l: "— (não há equivalente)", o: "Não existe" },
                { w: "Slide Oculto", l: "Slide → Ocultar Slide", o: "Menu SLIDE" },
                { w: "Apresentação Personalizada", l: "Apresentação → Apresentação Personalizada", o: "Mesmo nome" },
                { w: "Ensaio de Intervalos", l: "Apresentação → Ensaio de Intervalos", o: "Mesmo nome" },
                { w: "Configurar Apresentação", l: "Apresentação → Configurações da Apresentação", o: "Nome parecido" },
              ].map((r, i) => (
                <tr key={r.w} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}>
                  <td className="p-4 text-zinc-300">{r.w}</td>
                  <td className="p-4 text-rose-200 font-medium">{r.l}</td>
                  <td className="p-4 text-zinc-500 text-[12.5px]">{r.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Callout variant="prova" title="os 3 menus exclusivos do Impress">
            <p>
              <strong className="text-zinc-100">SLIDE</strong> (layout, propriedades, ocultar,
              excluir), <strong className="text-zinc-100">APRESENTAÇÃO</strong> (iniciar, ensaiar,
              configurar, personalizar) e <strong className="text-zinc-100">DESENHAR</strong>{" "}
              (formas, pontos, combinação). O PowerPoint não tem nenhum dos três como menu — espalha
              os mesmos comandos entre guias. Item de localização certo em prova.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="o que o Impress NÃO tem">
            <p>
              <strong className="text-zinc-100">Não há</strong> atalho para começar do slide atual
              (o Shift+F5 do PowerPoint), <strong className="text-zinc-100">não há</strong> o
              formato .ppsx que abre já apresentando, e{" "}
              <strong className="text-zinc-100">não há</strong> "Transformar" (Morph) — a transição
              inteligente do PowerPoint moderno. Questões que citarem esses recursos falam do
              PowerPoint, não do Impress.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Um presente de prova: como o Impress é construído sobre o mesmo motor do{" "}
          <Hot tone="e">Draw</Hot> (módulo de desenho), tudo o que você aprendeu sobre objetos,
          camadas, agrupamento e formas no Impress se aplica ao Draw — e vice-versa. Bancas adoram
          essa relação "quase-gêmea" entre os dois módulos.
        </P>
      </Reveal>
    </SectionShell>
  );
}
