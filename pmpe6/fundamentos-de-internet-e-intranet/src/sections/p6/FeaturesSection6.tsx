import { AnimatePresence, motion } from "framer-motion";
import {
  Blend,
  Clock,
  Copy,
  Eye,
  Film,
  Image,
  Layers,
  ListOrdered,
  Play,
  Presentation,
  Sparkles,
  Timer,
  Users,
  Wand2,
} from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* ---------- demo transição × animação ---------- */
function TransitionDemo() {
  const [modo, setModo] = useState<"transicao" | "animacao">("transicao");
  const [play, setPlay] = useState(0);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-5">
        Demonstração: transição × animação
      </p>

      <div className="flex flex-wrap gap-2.5 mb-6">
        {([
          ["transicao", "TRANSIÇÃO — entre slides"],
          ["animacao", "ANIMAÇÃO — dentro do slide"],
        ] as const).map(([k, label]) => (
          <button
            key={k}
            onClick={() => {
              setModo(k);
              setPlay((p) => p + 1);
            }}
            className={`rounded-full px-5 py-2.5 text-[12.5px] font-bold cursor-pointer transition-colors ${
              modo === k
                ? "bg-orange-300 text-[#0a0910]"
                : "border border-white/15 text-zinc-300 hover:border-orange-300/50"
            }`}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => setPlay((p) => p + 1)}
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[12px] font-bold text-zinc-300 hover:border-orange-300/50 cursor-pointer"
        >
          <Play size={13} /> Reproduzir
        </button>
      </div>

      <div className="relative rounded-xl bg-[#0d0c14] border border-white/[0.09] overflow-hidden aspect-[16/7] grid place-items-center">
        <AnimatePresence mode="wait">
          {modo === "transicao" ? (
            <motion.div
              key={`t-${play}`}
              initial={{ x: "100%", opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-3 rounded-lg bg-white/[0.06] border border-white/15 grid place-items-center"
            >
              <div className="text-center">
                <p className="font-display text-xl text-[#f4f1ea]">Slide 2</p>
                <p className="text-[12px] text-zinc-500 mt-1">o slide INTEIRO entrou na tela</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`a-${play}`}
              className="absolute inset-3 rounded-lg bg-white/[0.06] border border-white/15 p-5 flex flex-col justify-center gap-2.5"
            >
              <p className="font-display text-lg text-[#f4f1ea] mb-1">Slide 2 (parado)</p>
              {["Primeiro tópico", "Segundo tópico", "Terceiro tópico"].map((t, i) => (
                <motion.p
                  key={`${t}-${play}`}
                  initial={{ opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 * i }}
                  className="text-[13px] text-orange-200"
                >
                  ▸ {t}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-5 text-[13.5px] leading-relaxed text-zinc-300">
        {modo === "transicao" ? (
          <>
            <strong className="text-orange-300">Transição:</strong> o efeito acontece{" "}
            <strong className="text-zinc-100">na passagem de um slide para o outro</strong>. É{" "}
            <strong className="text-zinc-100">uma por slide</strong> e fica na{" "}
            <strong className="text-zinc-100">guia Transições</strong>.
          </>
        ) : (
          <>
            <strong className="text-orange-300">Animação:</strong> o slide já está na tela e os{" "}
            <strong className="text-zinc-100">objetos dentro dele</strong> se movem, um a um. Pode
            haver <strong className="text-zinc-100">várias por slide</strong>, em sequência, e fica
            na <strong className="text-zinc-100">guia Animações</strong>.
          </>
        )}
      </p>
    </div>
  );
}

/* ---------- dados ---------- */
const TIPOS_ANIM = [
  { t: "Entrada", cor: "text-emerald-300 border-emerald-300/30 bg-emerald-300/[0.06]", d: "O objeto APARECE no slide: Surgir, Esmaecer, Voar para Dentro, Flutuar, Dividir, Zoom.", icone: "▸" },
  { t: "Ênfase", cor: "text-yellow-300 border-yellow-300/30 bg-yellow-300/[0.06]", d: "O objeto JÁ ESTÁ visível e chama atenção: Pulsar, Girar, Aumentar/Diminuir, Cor da Fonte, Tremular.", icone: "★" },
  { t: "Saída", cor: "text-rose-300 border-rose-300/30 bg-rose-300/[0.06]", d: "O objeto DESAPARECE do slide: Desaparecer, Esmaecer, Voar para Fora, Encolher e Girar.", icone: "◂" },
  { t: "Trajetória de Animação", cor: "text-cyan-300 border-cyan-300/30 bg-cyan-300/[0.06]", d: "O objeto PERCORRE um caminho desenhado: linhas, arcos, formas, loops ou trajeto personalizado.", icone: "↝" },
];

const RECURSOS = [
  { icon: Image, t: "Inserir de tudo", d: "Imagens (locais e online), formas, ícones, modelos 3D, SmartArt (organogramas e fluxos), gráficos, tabelas, WordArt, caixas de texto, equações e símbolos." },
  { icon: Film, t: "Áudio e vídeo", d: "Inserir vídeo do dispositivo ou online (YouTube), áudio e gravação de tela. Dá para aparar, definir volume, reproduzir automaticamente, em loop e no plano de fundo." },
  { icon: Layers, t: "Camadas e Painel de Seleção", d: "Objetos empilhados: Trazer para Frente / Enviar para Trás, alinhar, distribuir, agrupar e girar. O Painel de Seleção (Alt+F10) lista tudo e permite ocultar itens." },
  { icon: Blend, t: "Transformar (Morph)", d: "Transição inteligente do PowerPoint 2019: move e redimensiona suavemente objetos repetidos entre dois slides — efeito de cinema sem esforço." },
  { icon: Sparkles, t: "Zoom de apresentação", d: "Recurso do 2019: cria slides-sumário com miniaturas navegáveis (Zoom de Resumo, de Seção e de Slide) para apresentar fora da ordem linear." },
  { icon: Users, t: "Colaboração e revisão", d: "Comentários (Ctrl+Alt+M), verificação de ortografia (F7), acessibilidade, comparar apresentações e coautoria em tempo real via OneDrive." },
  { icon: Presentation, t: "Apresentação Personalizada", d: "Monta um 'roteiro alternativo' com apenas alguns slides da apresentação, na ordem que quiser — sem duplicar o arquivo." },
  { icon: Timer, t: "Testar Intervalos e Gravar", d: "Ensaia a apresentação cronometrando cada slide e grava narração, tinta digital e vídeo do apresentador — gerando uma exibição automática." },
  { icon: Eye, t: "Ocultar slide", d: "Mantém o slide no arquivo, mas o pula durante a exibição. O número dele aparece riscado no painel de miniaturas." },
  { icon: Copy, t: "Reutilizar slides e Seções", d: "Importa slides de outra apresentação (mantendo ou adaptando a formatação) e agrupa slides em seções nomeadas." },
  { icon: ListOrdered, t: "Cabeçalho, rodapé e numeração", d: "Número do slide, data/hora e texto de rodapé — aplicáveis a um slide ou a todos, e configuráveis no Slide Mestre." },
  { icon: Wand2, t: "Designer e Ideias de Design", d: "Sugere automaticamente layouts profissionais para o conteúdo digitado (requer conexão e conta Microsoft)." },
];

export default function FeaturesSection6() {
  return (
    <SectionShell
      id="recursos"
      num="03"
      kicker="Capacidades · o que dá vida aos slides"
      title={
        <>
          Transições, <span className="italic text-orange-300">animações</span> e slide mestre
        </>
      }
      lead={
        <>
          Aqui mora o coração das questões de PowerPoint. Se você guardar{" "}
          <Hot tone="y">transição = entre slides</Hot> e{" "}
          <Hot tone="y">animação = dentro do slide</Hot>, já garante boa parte dos pontos — e o{" "}
          <Hot tone="y">Slide Mestre</Hot> completa o pódio.
        </>
      }
    >
      <Reveal>
        <TransitionDemo />
      </Reveal>

      {/* quadro comparativo */}
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] mb-8">
          <table className="w-full min-w-[620px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-semibold text-zinc-500 w-[150px]" />
                <th className="p-4 font-display text-lg text-orange-300">Transição</th>
                <th className="p-4 font-display text-lg text-cyan-300">Animação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { l: "O que anima", a: "O slide INTEIRO", b: "Um OBJETO do slide (texto, imagem, gráfico)" },
                { l: "Quando ocorre", a: "Na PASSAGEM de um slide para o outro", b: "Com o slide já exibido" },
                { l: "Quantidade", a: "UMA por slide", b: "VÁRIAS por slide, em sequência" },
                { l: "Guia", a: "Transições (Alt+K)", b: "Animações (Alt+A)" },
                { l: "Exemplos", a: "Aparecer, Esmaecer, Empurrar, Revelar, Cortinas, Transformar (Morph)", b: "Surgir, Pulsar, Voar para Dentro, Trajetórias" },
              ].map((r, i) => (
                <tr key={r.l} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                  <td className="p-4 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500 align-top">{r.l}</td>
                  <td className="p-4 text-zinc-300 align-top border-l border-white/[0.05]">{r.a}</td>
                  <td className="p-4 text-zinc-300 align-top border-l border-white/[0.05]">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="pegadinha" title="a inversão nº 1 do PowerPoint">
          <p>
            <em>"Transição é o efeito aplicado a um objeto dentro do slide."</em> →{" "}
            <strong className="text-rose-300">ERRADO!</strong> Isso é{" "}
            <strong className="text-zinc-100">animação</strong>. Mnemônico infalível:{" "}
            <strong className="text-zinc-100">TRANSIÇÃO = TRANSITAR de um slide para o outro</strong>;{" "}
            animação = alma do objeto se mexendo <em>dentro</em> do slide.
          </p>
        </Callout>
      </Reveal>

      {/* tipos de animação */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-4 mt-10">
          Os 4 tipos de animação — cobrados nominalmente
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {TIPOS_ANIM.map((t) => (
            <div key={t.t} className={`rounded-2xl border p-5 ${t.cor}`}>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-mono text-lg">{t.icone}</span>
                <h3 className="font-display text-xl text-[#f4f1ea]">{t.t}</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-300">{t.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* controles de animação */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Clock size={18} className="text-cyan-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Controlando o tempo das animações</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[13.5px] leading-relaxed text-zinc-400">
            <p><strong className="text-zinc-200">Iniciar:</strong> "Ao Clicar" (espera o clique), "Com o Anterior" (simultâneo) ou "Após o Anterior" (em sequência automática).</p>
            <p><strong className="text-zinc-200">Duração:</strong> quanto tempo o efeito leva para acontecer (em segundos).</p>
            <p><strong className="text-zinc-200">Atraso:</strong> quanto tempo o efeito espera antes de começar.</p>
            <p><strong className="text-zinc-200">Reordenar Animação:</strong> muda a ordem em que os objetos entram (mover antes/depois).</p>
            <p><strong className="text-zinc-200">Painel de Animação:</strong> lista todos os efeitos do slide em ordem, com linha do tempo — o "painel de controle" da guia Animações.</p>
            <p><strong className="text-zinc-200">Pincel de Animação:</strong> copia o conjunto de animações de um objeto para outro (Alt+Shift+C e Alt+Shift+V).</p>
          </div>
          <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
            Na guia <strong className="text-zinc-300">Transições</strong>, os equivalentes são:{" "}
            <strong className="text-zinc-300">Opções de Efeito</strong> (direção), <strong className="text-zinc-300">Som</strong>,{" "}
            <strong className="text-zinc-300">Duração</strong>, <strong className="text-zinc-300">Aplicar a Todos</strong> e o{" "}
            <strong className="text-zinc-300">Avançar Slide</strong> — "Ao Clicar com o Mouse" e/ou "Após [tempo]", que é como se monta uma apresentação automática.
          </p>
        </div>
      </Reveal>

      {/* slide mestre */}
      <Reveal>
        <div className="rounded-2xl border border-orange-300/30 bg-gradient-to-br from-orange-300/[0.08] to-transparent p-6 sm:p-8 my-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Layers size={19} className="text-orange-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Slide Mestre — o molde da apresentação</h3>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-300 max-w-3xl mb-5">
            O <Hot tone="y">Slide Mestre</Hot> é o <Hot tone="y">gabarito</Hot> que define a
            aparência de todos os slides: fonte e tamanho dos títulos, cores, plano de fundo,
            posição dos espaços reservados, logotipo da instituição, número do slide e rodapé.{" "}
            <strong className="text-zinc-100">Alterou nele → mudou em todos os slides de uma vez.</strong>
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {[
              { t: "Onde fica", d: "Guia EXIBIR → grupo Modos de Exibição Mestres → Slide Mestre." },
              { t: "Como funciona", d: "O slide grande no topo é o MESTRE; abaixo dele ficam os LAYOUTS filhos (Título, Título e Conteúdo...). Mudar o mestre afeta todos os layouts." },
              { t: "Como sair", d: "Botão 'Fechar Modo de Exibição de Slide Mestre' — e você volta ao modo Normal." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-[#0d0c14] border border-white/[0.09] p-4">
                <p className="text-[12.5px] font-bold text-orange-200 mb-1.5">{x.t}</p>
                <p className="text-[12.5px] leading-relaxed text-zinc-400">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] leading-relaxed text-zinc-400">
            Existem ainda o <strong className="text-zinc-200">Folheto Mestre</strong> (aparência da
            impressão em folhetos) e o <strong className="text-zinc-200">Anotações Mestre</strong>{" "}
            (aparência da impressão com notas) — ambos no mesmo grupo da guia Exibir.
          </p>
          <Callout variant="prova">
            <p>
              Enunciado típico: <em>"Como inserir a logomarca do órgão em TODOS os slides, de uma
              única vez?"</em> → resposta: <strong className="text-zinc-100">no Slide Mestre</strong>.
              Se a questão falar em "alterar o padrão de fontes e cores de toda a apresentação",
              pode ser <strong className="text-zinc-100">Slide Mestre</strong> ou{" "}
              <strong className="text-zinc-100">Tema (guia Design)</strong> — leia se ela fala em
              posição/elementos (mestre) ou em aparência/cores (tema).
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* demais recursos */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300 mb-4 mt-10">
          As demais funcionalidades que aparecem em prova
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECURSOS.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.03}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-orange-300/40 hover:bg-orange-300/[0.04] transition-colors">
                <r.icon size={19} className="text-orange-300 mb-3" />
                <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{r.t}</h3>
                <p className="text-[12.5px] leading-relaxed text-zinc-400">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <P>
          Fechando o capítulo com a dica de ouro dos examinadores: sempre que a questão citar um
          recurso "que afeta a apresentação inteira", pense em{" "}
          <Hot tone="y">Slide Mestre, Tema ou Aplicar a Todos</Hot>; se citar algo "que vale só
          para aquele slide", pense em <Hot tone="c">layout, transição do slide ou animação do
          objeto</Hot>. Essa chave resolve a maioria dos itens.
        </P>
      </Reveal>
    </SectionShell>
  );
}
