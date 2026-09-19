import type { Question } from "./questions";

export const QUESTIONS_4: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No Microsoft Word, é possível gerar um sumário automático mesmo que nenhum texto do documento esteja formatado com estilos de título.",
    correct: "E",
    comentario:
      "ERRADO. O sumário automático (guia Referências > Sumário) é construído a partir dos ESTILOS de título (Título 1, Título 2...) aplicados aos capítulos. Sem estilos, o Word não sabe o que é capítulo — e o sumário sai vazio.",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No Word 2019, o comando Marca d'Água, usado para exibir a palavra 'CONFIDENCIAL' ao fundo das páginas, está localizado na guia:",
    options: [
      { key: "a", label: "Página Inicial" },
      { key: "b", label: "Inserir" },
      { key: "c", label: "Design" },
      { key: "d", label: "Revisão" },
      { key: "e", label: "Exibir" },
    ],
    correct: "c",
    comentario:
      "Letra C. Marca d'Água mora na guia DESIGN, grupo Plano de Fundo da Página, ao lado de Cor da Página e Bordas da Página. É item de prova certinho: bancas trocam com Inserir o tempo todo.",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No Microsoft Word 2019 em português, pressionar Ctrl+N sobre um texto selecionado aplica a formatação:",
    options: [
      { key: "a", label: "novo documento" },
      { key: "b", label: "negrito" },
      { key: "c", label: "numeração de linhas" },
      { key: "d", label: "tinta normal (remove cores)" },
      { key: "e", label: "nota de rodapé" },
    ],
    correct: "b",
    comentario:
      "Letra B. Tríade imortal: Ctrl+N = Negrito, Ctrl+I = Itálico, Ctrl+S = Sublinhado. 'Novo documento' é Ctrl+O — a pegadinha mora na letra A.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O recurso Mala Direta, da guia Correspondências, permite gerar documentos personalizados em lote — como cartas, etiquetas e envelopes — a partir de uma fonte de dados, como uma planilha do Excel com a lista de destinatários.",
    correct: "C",
    comentario:
      "CERTO alegremente. Mala Direta = modelo + fonte de dados → muitos documentos personalizados, cada qual com saudação e endereço do seu destinatário. Fontes aceitas: Excel, Access, contatos do Outlook, listas digitadas.",
  },
  {
    id: 5,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Para alterar as margens e a orientação (retrato/paisagem) de um documento do Word 2019, deve-se acessar a guia:",
    options: [
      { key: "a", label: "Página Inicial" },
      { key: "b", label: "Inserir" },
      { key: "c", label: "Referências" },
      { key: "d", label: "Layout" },
      { key: "e", label: "Exibir" },
    ],
    correct: "d",
    comentario:
      "Letra D. Guia LAYOUT, grupo Configurar Página: Margens, Orientação, Tamanho, Colunas e Quebras. Margens são 'layout', não 'design' — guarde essa dupla.",
  },
  {
    id: 6,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No Word 2019 em português, a combinação de teclas Ctrl+T seleciona todo o conteúdo do documento.",
    correct: "C",
    comentario:
      "CERTO. No Word PT-BR, T de 'Tudo' seleciona tudo. Cuidado com materiais traduzidos: no Word em INGLÊS é Ctrl+A (all) — mas no nosso, Ctrl+A abre documentos!",
  },
  {
    id: 7,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado: "A tecla de função que aciona a verificação de ortografia e gramática no Word é:",
    options: [
      { key: "a", label: "F1" },
      { key: "b", label: "F4" },
      { key: "c", label: "F5" },
      { key: "d", label: "F7" },
      { key: "e", label: "F12" },
    ],
    correct: "d",
    comentario:
      "Letra D. F7 = Ortografia e Gramática (painel Editor). Prima dela cobrada junto: Shift+F7 abre o Dicionário de Sinônimos. F1 = Ajuda; F5 = Ir para; F12 = Salvar como.",
  },
  {
    id: 8,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Na guia Revisão do Word, o recurso Controlar Alterações registra cada edição feita no documento, permitindo que o autor aceite ou rejeite as modificações sugeridas por revisores.",
    correct: "C",
    comentario:
      "CERTO. Controlar Alterações (Ctrl+Shift+E) marca inserções e exclusões como se fosse um 'corretor de prova': o dono do documento depois aceita ou rejeita uma a uma (ou todas). Atalho clássico junto: Ctrl+Alt+M insere comentário.",
  },
];
