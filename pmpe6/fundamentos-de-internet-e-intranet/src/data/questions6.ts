import type { Question } from "./questions";

export const QUESTIONS_6: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No PowerPoint, transição é o efeito visual aplicado a um objeto dentro do slide, ao passo que animação é o efeito exibido na passagem de um slide para outro.",
    correct: "E",
    comentario:
      "ERRADO — está invertido! TRANSIÇÃO é o efeito ENTRE slides (na passagem de um para o outro); ANIMAÇÃO é o efeito aplicado a OBJETOS dentro do slide (texto, imagem, gráfico). Cada uma tem sua própria guia na faixa de opções.",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Durante uma apresentação de slides em execução, para iniciar a exibição a partir do PRIMEIRO slide utiliza-se F5. Para iniciar a apresentação a partir do slide que está selecionado no momento, deve-se pressionar:",
    options: [
      { key: "a", label: "Ctrl+F5" },
      { key: "b", label: "Shift+F5" },
      { key: "c", label: "Alt+F5" },
      { key: "d", label: "F6" },
      { key: "e", label: "Ctrl+Shift+F5" },
    ],
    correct: "b",
    comentario:
      "Letra B. F5 = do início; Shift+F5 = do slide atual; Alt+F5 = inicia no Modo de Exibição do Apresentador. Esse trio é presença garantida nas provas.",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "O recurso do PowerPoint que permite alterar, de uma só vez, a fonte, o plano de fundo, a posição dos espaços reservados e os elementos que se repetem em TODOS os slides da apresentação é:",
    options: [
      { key: "a", label: "o Classificador de Slides." },
      { key: "b", label: "a Apresentação Personalizada." },
      { key: "c", label: "o Slide Mestre." },
      { key: "d", label: "o Painel de Animação." },
      { key: "e", label: "o Modo de Exibição do Apresentador." },
    ],
    correct: "c",
    comentario:
      "Letra C. O SLIDE MESTRE (guia Exibir → Modos de Exibição Mestres) é o 'molde' da apresentação: o que se altera nele é refletido automaticamente em todos os slides que usam aquele layout. Economiza horas de formatação manual.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Durante a execução de uma apresentação de slides, pressionar a tecla B exibe uma tela totalmente preta, e pressionar novamente a mesma tecla retorna à apresentação.",
    correct: "C",
    comentario:
      "CERTO. B (de black) alterna a tela preta e W (de white) alterna a tela branca — úteis para prender a atenção da plateia no orador. Equivalentes: ponto (.) para preto e vírgula (,) para branco.",
  },
  {
    id: 5,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No PowerPoint 2019, o comando usado para inserir um novo slide na apresentação corresponde ao atalho:",
    options: [
      { key: "a", label: "Ctrl+O" },
      { key: "b", label: "Ctrl+N" },
      { key: "c", label: "Ctrl+M" },
      { key: "d", label: "Ctrl+D" },
      { key: "e", label: "Ctrl+Enter" },
    ],
    correct: "c",
    comentario:
      "Letra C. Ctrl+M insere um NOVO SLIDE (o 'M' vem de 'novo slide' no padrão do Office). Não confunda: Ctrl+O cria nova APRESENTAÇÃO; Ctrl+D DUPLICA o slide selecionado; Ctrl+N aplica negrito.",
  },
  {
    id: 6,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Um usuário deseja que determinado slide permaneça no arquivo, mas NÃO seja exibido durante a apresentação. O recurso adequado é:",
    options: [
      { key: "a", label: "excluir o slide." },
      { key: "b", label: "ocultar o slide." },
      { key: "c", label: "aplicar transição nula ao slide." },
      { key: "d", label: "mover o slide para o final." },
      { key: "e", label: "proteger o slide com senha." },
    ],
    correct: "b",
    comentario:
      "Letra B. OCULTAR SLIDE (guia Apresentação de Slides) mantém o slide no arquivo, mas o pula na exibição — o número dele aparece riscado no painel de miniaturas. Excluir seria perder o conteúdo.",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "As anotações do orador (notas), digitadas no painel de anotações abaixo do slide, são exibidas na tela da plateia durante a apresentação em tela cheia.",
    correct: "E",
    comentario:
      "ERRADO. As anotações do orador são privativas: aparecem apenas para quem apresenta, no MODO DE EXIBIÇÃO DO APRESENTADOR (segunda tela), ou quando impressas no formato 'Anotações'. A plateia vê somente o slide.",
  },
  {
    id: 8,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "A extensão de arquivo que faz a apresentação do PowerPoint abrir DIRETAMENTE em modo de exibição de slides (tela cheia), sem exibir a janela de edição, é:",
    options: [
      { key: "a", label: ".pptx" },
      { key: "b", label: ".potx" },
      { key: "c", label: ".ppsx" },
      { key: "d", label: ".pptm" },
      { key: "e", label: ".pdf" },
    ],
    correct: "c",
    comentario:
      "Letra C. O .ppsx (PowerPoint Show) executa a apresentação de imediato. Compare: .pptx = apresentação editável padrão; .potx = modelo; .pptm = com macros habilitadas.",
  },
];
