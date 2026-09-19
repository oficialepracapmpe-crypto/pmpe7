import type { Question } from "./questions";

export const QUESTIONS_9: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O formato de arquivo nativo do LibreOffice Impress é o .odp (OpenDocument Presentation), e o programa também abre e salva apresentações nos formatos do PowerPoint (.pptx e .ppt).",
    correct: "C",
    comentario:
      "CERTO. ODP é o nativo (padrão ODF); a interoperabilidade com .pptx/.ppt é praticamente total, incluindo transições e animações básicas. Completo a família: .odt (Writer), .ods (Calc), .odp (Impress), .odg (Draw), .odb (Base).",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Tanto no LibreOffice Impress quanto no Microsoft PowerPoint, a tecla que INICIA a apresentação de slides a partir do primeiro slide é:",
    options: [
      { key: "a", label: "F2" },
      { key: "b", label: "F5" },
      { key: "c", label: "F9" },
      { key: "d", label: "Ctrl+P" },
      { key: "e", label: "Alt+F5" },
    ],
    correct: "b",
    comentario:
      "Letra B. F5 é a grande ÂNCORA entre os dois programas: inicia a apresentação no Impress e no PowerPoint. (No PowerPoint, Shift+F5 começa do slide atual; no Impress não há equivalente direto — usa-se F5 ou o menu Apresentação.)",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Impress, para DUPLICAR o objeto selecionado (que no PowerPoint seria Ctrl+D), pressiona-se:",
    options: [
      { key: "a", label: "Ctrl+D" },
      { key: "b", label: "Shift+F3" },
      { key: "c", label: "Ctrl+Shift+D" },
      { key: "d", label: "F4" },
      { key: "e", label: "Ctrl+Alt+D" },
    ],
    correct: "b",
    comentario:
      "Letra B. No Impress, DUPLICAR é Shift+F3. Prima-irmãs: F4 abre Posição e Tamanho; F3 entra no grupo; Ctrl+F3 sai do grupo; F8 edita pontos. Todas exclusivas do Impress.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Durante uma apresentação de slides no LibreOffice Impress, pressionar B exibe uma tela preta e W exibe uma tela branca, até que qualquer tecla seja pressionada — comportamento idêntico ao do Microsoft PowerPoint.",
    correct: "C",
    comentario:
      "CERTO — a dupla B/W é outra âncora universal: B (ou ponto) escurece a tela; W (ou vírgula) embranquece. No Impress, o ponto e a vírgula também funcionam como equivalentes, exatamente como no PowerPoint.",
  },
  {
    id: 5,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Impress 7, os efeitos de transição entre slides são configurados na aba da BARRA LATERAL (painel de tarefas) chamada:",
    options: [
      { key: "a", label: "Propriedades" },
      { key: "b", label: "Layouts" },
      { key: "c", label: "Trocar Slide" },
      { key: "d", label: "Animação Personalizada" },
      { key: "e", label: "Tabelas Mestres de Slides" },
    ],
    correct: "c",
    comentario:
      "Letra C. A aba TROCAR SLIDE da Barra lateral concentra transições, velocidade, som e avanço (ao clicar ou automático). Já a aba ANIMAÇÃO PERSONALIZADA cuida dos efeitos dos objetos dentro do slide — a mesma divisão conceitual do PowerPoint (transição × animação).",
  },
  {
    id: 6,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O LibreOffice Impress possui um menu dedicado chamado 'Slide', no qual se encontram comandos como Layout, Propriedades do Slide, Renomear Slide e Excluir Slide — algo que o PowerPoint não possui, pois organiza esses comandos de outra forma.",
    correct: "C",
    comentario:
      "CERTO. O Impress tem TRÊS menus exclusivos: SLIDE (layout, propriedades, ocultar/mostrar, excluir), APRESENTAÇÃO (iniciar, configurar, ensaiar intervalos) e DESENHAR (ferramentas de desenho). No PowerPoint, esses comandos estão espalhados pela faixa de opções.",
  },
  {
    id: 7,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado: "No LibreOffice Impress, para AGRUPAR objetos selecionados, pressiona-se:",
    options: [
      { key: "a", label: "Ctrl+G" },
      { key: "b", label: "Ctrl+Shift+G" },
      { key: "c", label: "Ctrl+Shift+A" },
      { key: "d", label: "Shift+Ctrl+K" },
      { key: "e", label: "Alt+G" },
    ],
    correct: "b",
    comentario:
      "Letra B. No Impress: Shift+Ctrl+G agrupa e Shift+Ctrl+A desagrupa. (No PowerPoint é Ctrl+G / Ctrl+Shift+G — note que o DESAGRUPAR muda de tecla!) E Shift+Ctrl+K COMBINA objetos, fundindo-os numa só forma.",
  },
  {
    id: 8,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Durante uma apresentação no LibreOffice Impress, para usar o mouse como CANETA e rabiscar sobre o slide, pressiona-se:",
    options: [
      { key: "a", label: "Ctrl+P" },
      { key: "b", label: "P" },
      { key: "c", label: "C" },
      { key: "d", label: "Ctrl+C" },
      { key: "e", label: "Alt+P" },
    ],
    correct: "b",
    comentario:
      "Letra B. No Impress, a caneta é a tecla P sozinha (no PowerPoint é Ctrl+P — e lá Ctrl+P também é imprimir na edição!). E apaga as marcações com E, igual nos dois; Ctrl+A desliga o modo caneta.",
  },
];
