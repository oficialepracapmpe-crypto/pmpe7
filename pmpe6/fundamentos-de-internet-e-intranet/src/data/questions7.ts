import type { Question } from "./questions";

export const QUESTIONS_7: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O formato de arquivo nativo do LibreOffice Writer é o .odt, padrão ODF (OpenDocument Format), embora o programa também abra e salve arquivos no formato .docx, do Microsoft Word.",
    correct: "C",
    comentario:
      "CERTO. ODT (Open Document Text) é o nativo do Writer, baseado no padrão aberto ODF — adotado inclusive pela Administração Pública brasileira (e-PING). A interoperabilidade com .doc/.docx existe, mas pode haver pequenas perdas de formatação em documentos complexos.",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Writer em português, a combinação de teclas que aplica NEGRITO ao texto selecionado é:",
    options: [
      { key: "a", label: "Ctrl+N" },
      { key: "b", label: "Ctrl+B" },
      { key: "c", label: "Ctrl+G" },
      { key: "d", label: "Ctrl+Shift+N" },
      { key: "e", label: "Ctrl+E" },
    ],
    correct: "b",
    comentario:
      "Letra B. Atenção à diferença que mais derruba candidato: no WRITER os atalhos seguem o padrão internacional — Ctrl+B = Bold (negrito), Ctrl+I = itálico, Ctrl+U = sublinhado. Já no WORD PT-BR é Ctrl+N (negrito) e Ctrl+S (sublinhado). No Writer, Ctrl+N cria NOVO documento!",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "A tecla de função que abre o NAVEGADOR do LibreOffice Writer — painel que permite saltar rapidamente entre títulos, tabelas, figuras, seções e indicadores do documento — é:",
    options: [
      { key: "a", label: "F3" },
      { key: "b", label: "F5" },
      { key: "c", label: "F7" },
      { key: "d", label: "F11" },
      { key: "e", label: "F12" },
    ],
    correct: "b",
    comentario:
      "Letra B. F5 = Navegador (no Word, F5 abre 'Ir para'). Complete o quarteto do Writer: F7 = ortografia; F11 = janela de Estilos; F12 = alternar lista ordenada (numerada); F3 = autotexto.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No LibreOffice Writer, o comando Ctrl+S salva o documento atual, ao passo que, no Microsoft Word em português, a mesma combinação aplica sublinhado ao texto selecionado.",
    correct: "C",
    comentario:
      "CERTO — e essa é a pegadinha-rainha do tema. Writer: Ctrl+S = Save (salvar). Word PT-BR: Ctrl+S = Sublinhado (salvar é Ctrl+B). Sempre confira de qual programa a questão está falando antes de marcar.",
  },
  {
    id: 5,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Writer 7, o recurso Exportar como PDF encontra-se no menu:",
    options: [
      { key: "a", label: "Editar" },
      { key: "b", label: "Inserir" },
      { key: "c", label: "Arquivo" },
      { key: "d", label: "Ferramentas" },
      { key: "e", label: "Formatar" },
    ],
    correct: "c",
    comentario:
      "Letra C. Menu ARQUIVO → Exportar como → Exportar como PDF (há também o botão de exportação direta na barra de ferramentas). Exportar para PDF é recurso NATIVO de todo o LibreOffice, sem necessidade de suplementos.",
  },
  {
    id: 6,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Diferentemente do Microsoft Word, que organiza seus comandos em uma faixa de opções com guias, a interface padrão do LibreOffice Writer 7 organiza seus comandos em:",
    options: [
      { key: "a", label: "uma faixa de opções idêntica à do Word." },
      { key: "b", label: "uma barra de menus (Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Tabela...) com barras de ferramentas." },
      { key: "c", label: "apenas atalhos de teclado, sem menus." },
      { key: "d", label: "um menu circular acionado pelo botão direito." },
      { key: "e", label: "abas dinâmicas geradas por inteligência artificial." },
    ],
    correct: "b",
    comentario:
      "Letra B. A interface padrão do LibreOffice é a clássica BARRA DE MENUS + barras de ferramentas + Barra Lateral. (Existe a opção experimental 'Interface com abas', em Exibir → Interface do usuário, que imita a faixa de opções — mas não é o padrão.)",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No LibreOffice Writer, o menu Estilos permite aplicar e gerenciar estilos de parágrafo e de caractere, sendo possível aplicar o estilo Título 1 ao parágrafo atual por meio da combinação Ctrl+1.",
    correct: "C",
    comentario:
      "CERTO. O Writer tem um MENU PRÓPRIO chamado Estilos (que o Word não possui — lá os estilos ficam num grupo da guia Página Inicial). Ctrl+1 a Ctrl+5 aplicam Título 1 a Título 5, e Ctrl+0 devolve o parágrafo ao estilo Corpo de texto.",
  },
  {
    id: 8,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Writer, para remover toda a formatação direta aplicada manualmente a um texto selecionado (negrito, cor, tamanho), devolvendo-o à aparência definida pelo estilo, utiliza-se:",
    options: [
      { key: "a", label: "Ctrl+M" },
      { key: "b", label: "Ctrl+Z" },
      { key: "c", label: "Ctrl+Delete" },
      { key: "d", label: "Ctrl+Shift+D" },
      { key: "e", label: "Ctrl+Alt+F" },
    ],
    correct: "a",
    comentario:
      "Letra A. Ctrl+M = Limpar Formatação Direta (menu Formatar → Limpar formatação direta). Diferença conceitual cobrada: 'formatação direta' é a aplicada manualmente sobre o texto; a 'formatação por estilos' é a recomendada, pois muda tudo de uma vez.",
  },
];
