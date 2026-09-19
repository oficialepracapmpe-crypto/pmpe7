import { AnimatePresence, motion } from "framer-motion";
import { Flame, Info } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

interface Grupo {
  nome: string;
  comandos: { c: string; nota?: string }[];
}
interface Guia {
  id: string;
  nome: string;
  tecla: string;
  resumo: string;
  prova: string;
  grupos: Grupo[];
}

const GUIAS: Guia[] = [
  {
    id: "arquivo",
    nome: "Arquivo",
    tecla: "Alt, F",
    resumo: "O modo Backstage: o arquivo como um todo — criar, abrir, salvar, exportar, imprimir e proteger.",
    prova: "Exportar para PDF/vídeo e 'Criar Apresentação de Slides do PowerPoint (.ppsx)' saem daqui.",
    grupos: [
      {
        nome: "Painel principal",
        comandos: [
          { c: "Informações", nota: "Proteger Apresentação, Inspecionar, Versões" },
          { c: "Novo / Abrir (Ctrl+A)", nota: "em branco, temas e modelos" },
          { c: "Salvar (Ctrl+B) / Salvar como (F12)", nota: ".pptx, .ppsx, .potx, .pdf, .mp4" },
          { c: "Imprimir (Ctrl+P)", nota: "slides, folhetos, anotações, estrutura de tópicos" },
          { c: "Compartilhar / Exportar", nota: "criar vídeo, criar PDF, empacotar para CD" },
          { c: "Opções", nota: "revisão, salvamento, personalizar faixa de opções" },
        ],
      },
    ],
  },
  {
    id: "inicial",
    nome: "Página Inicial",
    tecla: "Alt + H",
    resumo: "O dia a dia da edição: criar e organizar slides, formatar texto e manipular formas.",
    prova: "Novo Slide, LAYOUT, Redefinir e Seção ficam no primeiro grupo — cobrados com frequência.",
    grupos: [
      {
        nome: "Área de Transferência",
        comandos: [
          { c: "Colar / Colar Especial (Ctrl+Alt+V)" },
          { c: "Recortar, Copiar, Pincel de Formatação" },
        ],
      },
      {
        nome: "Slides",
        comandos: [
          { c: "Novo Slide (Ctrl+M)", nota: "abre a galeria de layouts" },
          { c: "Layout", nota: "troca a estrutura de espaços reservados do slide atual" },
          { c: "Redefinir", nota: "devolve os espaços reservados às posições originais do mestre" },
          { c: "Seção", nota: "agrupa slides em blocos nomeados" },
        ],
      },
      {
        nome: "Fonte",
        comandos: [
          { c: "Fonte, tamanho, aumentar/diminuir (Ctrl+Shift+> e <)" },
          { c: "Negrito (Ctrl+N), Itálico (Ctrl+I), Sublinhado (Ctrl+S), Tachado, Sombra" },
          { c: "Espaçamento entre Caracteres, Maiúsculas/Minúsculas (Shift+F3)" },
          { c: "Cor da Fonte e Limpar Formatação" },
        ],
      },
      {
        nome: "Parágrafo",
        comandos: [
          { c: "Marcadores e Numeração" },
          { c: "Diminuir/Aumentar Nível da Lista", nota: "promover e rebaixar tópicos" },
          { c: "Alinhamentos (Ctrl+Q, Ctrl+E, Ctrl+G, Ctrl+J) e Espaçamento entre Linhas" },
          { c: "Colunas, Direção do Texto, Alinhar Texto", nota: "alinhamento vertical na caixa" },
          { c: "Converter em SmartArt" },
        ],
      },
      {
        nome: "Desenho",
        comandos: [
          { c: "Galeria de Formas" },
          { c: "Organizar", nota: "trazer para frente, enviar para trás, alinhar, agrupar, girar" },
          { c: "Estilos Rápidos, Preenchimento, Contorno e Efeitos de Forma" },
        ],
      },
      {
        nome: "Edição",
        comandos: [{ c: "Localizar (Ctrl+F), Substituir (Ctrl+U), Selecionar", nota: "inclui o Painel de Seleção" }],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    tecla: "Alt + N",
    resumo: "Tudo o que se acrescenta ao slide: tabelas, imagens, ilustrações, links, texto, símbolos e mídia.",
    prova: "Cabeçalho e Rodapé, Número do Slide, Álbum de Fotografias, Ação e Vídeo/Áudio estão aqui.",
    grupos: [
      { nome: "Slides", comandos: [{ c: "Novo Slide", nota: "também disponível aqui" }, { c: "Zoom", nota: "Resumo, Seção e Slide — novidade do 2019" }] },
      { nome: "Tabelas", comandos: [{ c: "Tabela", nota: "inserir, desenhar ou colar planilha do Excel" }] },
      { nome: "Imagens", comandos: [{ c: "Imagens (dispositivo/online), Instantâneo, Álbum de Fotografias" }] },
      { nome: "Ilustrações", comandos: [{ c: "Formas, Ícones, Modelos 3D, SmartArt, Gráfico" }] },
      { nome: "Suplementos", comandos: [{ c: "Obter Suplementos, Meus Suplementos" }] },
      { nome: "Links", comandos: [{ c: "Zoom, Link/Hiperlink (Ctrl+K)" }, { c: "Ação", nota: "define o que acontece ao clicar/passar o mouse sobre o objeto" }] },
      { nome: "Comentários", comandos: [{ c: "Comentário (Ctrl+Alt+M)" }] },
      {
        nome: "Texto",
        comandos: [
          { c: "Caixa de Texto, WordArt, Objeto" },
          { c: "Cabeçalho e Rodapé", nota: "inclui data/hora, número do slide e texto de rodapé" },
          { c: "Número do Slide, Data e Hora" },
        ],
      },
      { nome: "Símbolos", comandos: [{ c: "Equação (Alt+=), Símbolo" }] },
      { nome: "Mídia", comandos: [{ c: "Vídeo (do dispositivo ou online), Áudio, Gravação de Tela" }] },
    ],
  },
  {
    id: "desenhar",
    nome: "Desenhar",
    tecla: "Alt + J, I",
    resumo: "Escrita à mão livre com caneta/toque — e a conversão de tinta digital em formas e texto.",
    prova: "Aparece pouco, mas saiba que existe: canetas, marca-texto, borracha, laço e 'Tinta em Forma'.",
    grupos: [
      { nome: "Ferramentas", comandos: [{ c: "Selecionar, Borracha, Seleção por Laço" }] },
      { nome: "Canetas", comandos: [{ c: "Canetas, lápis e marca-textos personalizáveis" }] },
      { nome: "Converter", comandos: [{ c: "Tinta em Forma, Tinta em Matemática" }] },
      { nome: "Reproduzir", comandos: [{ c: "Reprodução de Tinta", nota: "reexibe o traçado como animação" }] },
    ],
  },
  {
    id: "design",
    nome: "Design",
    tecla: "Alt + G",
    resumo: "A identidade visual: temas, variantes de cor, tamanho do slide e formato do plano de fundo.",
    prova: "TAMANHO DO SLIDE (16:9 × 4:3) e Formatar Plano de Fundo moram aqui — não em Layout/Exibir.",
    grupos: [
      { nome: "Temas", comandos: [{ c: "Galeria de Temas", nota: "pacote de cores + fontes + efeitos + plano de fundo" }] },
      { nome: "Variantes", comandos: [{ c: "Variantes de cor do tema" }, { c: "Cores, Fontes, Efeitos, Estilos de Plano de Fundo" }] },
      {
        nome: "Personalizar",
        comandos: [
          { c: "Tamanho do Slide", nota: "Widescreen 16:9 (padrão) ou Padrão 4:3" },
          { c: "Formatar Plano de Fundo", nota: "cor sólida, gradiente, textura ou imagem" },
          { c: "Ideias de Design (Designer)" },
        ],
      },
    ],
  },
  {
    id: "transicoes",
    nome: "Transições",
    tecla: "Alt + K",
    resumo: "O efeito da PASSAGEM entre slides — uma por slide — mais o controle de como o slide avança.",
    prova: "Aplicar a Todos e 'Avançar Slide: Após [tempo]' (apresentação automática) são os itens-chave.",
    grupos: [
      { nome: "Visualizar", comandos: [{ c: "Visualizar", nota: "reproduz a transição do slide atual" }] },
      {
        nome: "Transição para Este Slide",
        comandos: [
          { c: "Galeria de transições", nota: "Sutil (Aparecer, Esmaecer, Empurrar, Revelar), Empolgante (Cortinas, Vórtice, Origami) e Conteúdo Dinâmico" },
          { c: "Transformar (Morph)", nota: "novidade moderna: move objetos suavemente entre slides" },
          { c: "Opções de Efeito", nota: "direção do efeito (da direita, de cima...)" },
        ],
      },
      {
        nome: "Intervalo",
        comandos: [
          { c: "Som", nota: "efeito sonoro ao trocar o slide" },
          { c: "Duração", nota: "tempo do efeito em segundos" },
          { c: "Aplicar a Todos", nota: "replica a transição para toda a apresentação" },
          { c: "Avançar Slide: Ao Clicar com o Mouse / Após [tempo]", nota: "a base da apresentação automática" },
        ],
      },
    ],
  },
  {
    id: "animacoes",
    nome: "Animações",
    tecla: "Alt + A",
    resumo: "O movimento dos OBJETOS dentro do slide: entrada, ênfase, saída e trajetórias.",
    prova: "Painel de Animação, Pincel de Animação e Iniciar (ao clicar / com o anterior / após o anterior).",
    grupos: [
      { nome: "Visualizar", comandos: [{ c: "Visualizar as animações do slide" }] },
      {
        nome: "Animação",
        comandos: [
          { c: "Galeria: Entrada, Ênfase, Saída e Trajetórias de Animação" },
          { c: "Opções de Efeito", nota: "direção, sequência (por parágrafo, tudo de uma vez)" },
        ],
      },
      {
        nome: "Animação Avançada",
        comandos: [
          { c: "Adicionar Animação", nota: "permite MAIS DE UM efeito no mesmo objeto" },
          { c: "Painel de Animação", nota: "lista e reordena todos os efeitos do slide" },
          { c: "Disparar (gatilho)", nota: "animação disparada ao clicar em outro objeto" },
          { c: "Pincel de Animação (Alt+Shift+C / V)" },
        ],
      },
      {
        nome: "Intervalo",
        comandos: [
          { c: "Iniciar", nota: "Ao Clicar / Com o Anterior / Após o Anterior" },
          { c: "Duração e Atraso (em segundos)" },
          { c: "Reordenar Animação", nota: "mover antes / mover depois" },
        ],
      },
    ],
  },
  {
    id: "apresentacao",
    nome: "Apresentação de Slides",
    tecla: "Alt + S",
    resumo: "Configurar e executar o show: de onde começar, apresentação personalizada, ensaio e monitores.",
    prova: "Ocultar Slide, Testar Intervalos, Apresentação Personalizada e Usar Modo de Exibição do Apresentador.",
    grupos: [
      {
        nome: "Iniciar Apresentação de Slides",
        comandos: [
          { c: "Do Começo (F5)" },
          { c: "Do Slide Atual (Shift+F5)" },
          { c: "Apresentar Online" },
          { c: "Apresentação de Slides Personalizada", nota: "roteiro com apenas alguns slides, na ordem desejada" },
        ],
      },
      {
        nome: "Configurar",
        comandos: [
          { c: "Configurar Apresentação de Slides", nota: "exibida por um orador, por uma pessoa (janela) ou em quiosque (repete sozinha)" },
          { c: "Ocultar Slide", nota: "o slide fica no arquivo, mas não é exibido" },
          { c: "Testar Intervalos", nota: "cronometra cada slide para exibição automática" },
          { c: "Gravar Apresentação de Slides", nota: "narração, tinta e vídeo do apresentador" },
          { c: "Reproduzir Narrações, Usar Intervalos, Mostrar Controles de Mídia" },
        ],
      },
      {
        nome: "Monitores",
        comandos: [
          { c: "Monitor", nota: "escolhe em qual tela a apresentação aparece" },
          { c: "Usar Modo de Exibição do Apresentador", nota: "notas + cronômetro + próximo slide na tela do orador" },
        ],
      },
    ],
  },
  {
    id: "revisao",
    nome: "Revisão",
    tecla: "Alt + R",
    resumo: "Conferir e colaborar: ortografia, sinônimos, tradução, acessibilidade, comentários e comparação.",
    prova: "F7 (ortografia) e Comparar apresentações; também a proteção por restrição de edição.",
    grupos: [
      { nome: "Revisão de Texto", comandos: [{ c: "Verificar Ortografia (F7), Dicionário de Sinônimos" }] },
      { nome: "Acessibilidade", comandos: [{ c: "Verificar Acessibilidade" }] },
      { nome: "Idioma", comandos: [{ c: "Traduzir, Idioma de Revisão" }] },
      { nome: "Comentários", comandos: [{ c: "Novo Comentário (Ctrl+Alt+M), Excluir, Anterior, Próximo, Mostrar Comentários" }] },
      { nome: "Comparar", comandos: [{ c: "Comparar, Aceitar, Rejeitar, Painel de Revisão, Terminar Revisão" }] },
      { nome: "Tinta", comandos: [{ c: "Ocultar Tinta", nota: "esconde as anotações feitas à mão" }] },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    tecla: "Alt + W",
    resumo: "Modos de exibição, MODOS MESTRES, réguas e guias, zoom, cor e gerenciamento de janelas.",
    prova: "É AQUI que fica o SLIDE MESTRE (grupo Modos de Exibição Mestres) — a pergunta mais cobrada da guia.",
    grupos: [
      {
        nome: "Modos de Exibição de Apresentação",
        comandos: [
          { c: "Normal, Modo de Exibição de Estrutura de Tópicos" },
          { c: "Classificação de Slides, Anotações, Modo de Exibição de Leitura" },
        ],
      },
      {
        nome: "Modos de Exibição Mestres",
        comandos: [
          { c: "Slide Mestre", nota: "o molde de todos os slides — logotipo, fontes, rodapé" },
          { c: "Folheto Mestre", nota: "aparência da impressão em folhetos" },
          { c: "Anotações Mestre", nota: "aparência da impressão com notas" },
        ],
      },
      { nome: "Mostrar", comandos: [{ c: "Régua, Linhas de Grade, Guias, Anotações" }] },
      { nome: "Zoom", comandos: [{ c: "Zoom, Ajustar à Janela" }] },
      { nome: "Cor/Escala de Cinza", comandos: [{ c: "Cor, Escala de Cinza, Preto e Branco", nota: "simula a impressão sem cor" }] },
      { nome: "Janela", comandos: [{ c: "Nova Janela, Organizar Tudo, Cascata, Mover Divisão, Alternar Janelas" }] },
      { nome: "Macros", comandos: [{ c: "Macros (Alt+F8)" }] },
    ],
  },
];

export default function RibbonSection6() {
  const [active, setActive] = useState("inicial");
  const guia = GUIAS.find((g) => g.id === active)!;

  return (
    <SectionShell
      id="guias"
      num="04"
      kicker="O mapa completo · clique em cada guia"
      title={
        <>
          A <span className="italic text-orange-300">faixa de opções</span>, guia por guia
        </>
      }
      lead={
        <>
          Mesma arquitetura <Hot>guia → grupo → comando</Hot> do Word e do Excel, com três guias
          exclusivas do PowerPoint: <Hot tone="y">Transições</Hot>, <Hot tone="y">Animações</Hot> e{" "}
          <Hot tone="y">Apresentação de Slides</Hot>. Clique nas abas e explore.
        </>
      }
    >
      <Reveal>
        <div className="sticky top-[72px] z-30 bg-[#0a0910]/95 backdrop-blur-xl py-3 -mx-1 px-1 mb-6">
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {GUIAS.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[13px] font-bold cursor-pointer transition-all border ${
                  active === g.id
                    ? "bg-orange-300 text-[#0a0910] border-orange-300 shadow-[0_0_24px_rgba(253,186,116,0.3)]"
                    : "border-white/10 text-zinc-400 hover:border-orange-300/50 hover:text-zinc-200 bg-white/[0.02]"
                }`}
              >
                {g.nome}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={guia.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-orange-300/25 bg-orange-300/[0.05] p-6 sm:p-7 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-300">
                Guia {guia.nome}
              </p>
              <kbd className="font-mono text-[10.5px] font-bold text-orange-200 border border-orange-300/30 bg-orange-300/[0.1] rounded px-2 py-1">
                {guia.tecla}
              </kbd>
            </div>
            <p className="text-[15px] leading-relaxed text-zinc-300 mb-4">{guia.resumo}</p>
            <div className="flex items-start gap-2.5 rounded-xl border border-yellow-300/25 bg-yellow-300/[0.07] p-4">
              <Flame size={15} className="text-yellow-300 mt-0.5 shrink-0" />
              <p className="text-[13px] leading-relaxed text-yellow-100/90">
                <strong className="text-yellow-300">Onde a banca bate:</strong> {guia.prova}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {guia.grupos.map((gr) => (
              <div key={gr.nome} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-3.5 border-b border-white/[0.07] pb-2">
                  Grupo · {gr.nome}
                </p>
                <ul className="space-y-2.5">
                  {gr.comandos.map((c) => (
                    <li key={c.c} className="text-[13.5px] leading-relaxed">
                      <span className="text-zinc-200 font-medium">{c.c}</span>
                      {c.nota && <span className="text-zinc-500"> — {c.nota}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <Reveal>
        <Callout variant="conceito" title="guias contextuais do PowerPoint">
          <div className="flex items-start gap-3">
            <Info size={15} className="text-violet-300 mt-0.5 shrink-0" />
            <p>
              Selecionou uma <strong className="text-zinc-100">imagem</strong>? Surge{" "}
              <strong className="text-zinc-100">Formato de Imagem</strong>. Uma{" "}
              <strong className="text-zinc-100">forma/caixa de texto</strong>?{" "}
              <strong className="text-zinc-100">Formato da Forma</strong>. Uma{" "}
              <strong className="text-zinc-100">tabela</strong>? Design e Layout de Tabela. Um{" "}
              <strong className="text-zinc-100">vídeo</strong>? Formato e{" "}
              <strong className="text-zinc-100">Reprodução</strong> (onde se apara o vídeo e se
              define início automático).
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="as 5 trocas de endereço favoritas">
          <p>
            <strong className="text-zinc-100">Slide Mestre: Exibir</strong> (não Design).{" "}
            <strong className="text-zinc-100">Tamanho do slide 16:9: Design</strong> (não Exibir).{" "}
            <strong className="text-zinc-100">Ocultar Slide e Testar Intervalos: Apresentação de
            Slides</strong> (não Transições).{" "}
            <strong className="text-zinc-100">Cabeçalho/Rodapé e Número do Slide: Inserir</strong>.{" "}
            <strong className="text-zinc-100">Layout do slide: Página Inicial</strong> (não Design).
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
