import type { Question } from "./questions";

export const QUESTIONS_8: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O LibreOffice Calc permite abrir, editar e salvar arquivos nos formatos do Microsoft Excel (.xlsx e .xls), embora seu formato nativo de salvamento seja o .ods, do padrão aberto ODF.",
    correct: "C",
    comentario:
      "CERTO. O Calc tem interoperabilidade praticamente total com o Excel: abre .xlsx/.xls e salva nesses formatos (com aviso de possível perda em recursos avançados). O nativo é o .ods (Open Document Spreadsheet).",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Calc em português, para SALVAR a planilha atual, pressiona-se:",
    options: [
      { key: "a", label: "Ctrl+B" },
      { key: "b", label: "Ctrl+S" },
      { key: "c", label: "Ctrl+G" },
      { key: "d", label: "F12" },
      { key: "e", label: "Ctrl+Shift+S" },
    ],
    correct: "b",
    comentario:
      "Letra B. No Calc, Ctrl+S = Save (salvar) — padrão internacional. No Excel PT-BR, salvar é Ctrl+B. As pegadinhas cruzadas: Ctrl+B no Calc aplica NEGRITO; F12 no Calc AGRUPA dados (não é salvar como!).",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Calc, a combinação que abre o Assistente de Funções (equivalente ao 'Inserir Função' do Excel, que lá é Shift+F3) é:",
    options: [
      { key: "a", label: "Ctrl+F2" },
      { key: "b", label: "Shift+F3" },
      { key: "c", label: "F2" },
      { key: "d", label: "Ctrl+F3" },
      { key: "e", label: "Alt+=" },
    ],
    correct: "a",
    comentario:
      "Letra A. Ctrl+F2 abre o Assistente de Funções do Calc. No mesmo teclado: F2 edita a célula (igual ao Excel), Ctrl+F3 abre 'Definir nomes' (gerenciar intervalos nomeados) e F4 alterna as referências $A$1 (também igual).",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No LibreOffice Calc, pressionar a tecla F4 sobre uma referência na linha de entrada alterna a mesma entre os modos relativo (A1), absoluto ($A$1) e misto (A$1, $A1).",
    correct: "C",
    comentario:
      "CERTO — igualzinho ao Excel. F4 é o 'botão do cifrão' nos dois programas. (No Excel, F4 fora da fórmula repete a última ação; no Calc, F4 abre/fecha as Fontes de Dados.)",
  },
  {
    id: 5,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Calc, o recurso Tabela Dinâmica, que resume e cruza grandes volumes de dados, é encontrado no menu:",
    options: [
      { key: "a", label: "Dados" },
      { key: "b", label: "Inserir" },
      { key: "c", label: "Formatar" },
      { key: "d", label: "Ferramentas" },
      { key: "e", label: "Exibir" },
    ],
    correct: "b",
    comentario:
      "Letra B. No Calc 7: menu INSERIR → Tabela Dinâmica. Já Classificar, Filtro, Subtotais, Validação, Texto em Colunas, Consolidar e Agrupar ficam no menu DADOS.",
  },
  {
    id: 6,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Calc, para aumentar ou diminuir a LARGURA DA COLUNA atual usando apenas o teclado, pressiona-se:",
    options: [
      { key: "a", label: "Ctrl+seta para a direita / esquerda" },
      { key: "b", label: "Alt+seta para a direita / esquerda" },
      { key: "c", label: "Ctrl+Shift+seta" },
      { key: "d", label: "Shift+seta para a direita / esquerda" },
      { key: "e", label: "F2 e depois seta" },
    ],
    correct: "b",
    comentario:
      "Letra B. Alt+→/← aumenta/diminui a largura da coluna; Alt+↓/↑ faz o mesmo com a altura da linha; Alt+Shift+setas otimiza o tamanho automaticamente. No Excel, Ctrl+setas NAVEGAM entre blocos de dados — e no Calc também! O ajuste de largura é território da tecla ALT.",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No LibreOffice Calc, pressionar Backspace sobre células selecionadas abre a caixa de diálogo 'Excluir conteúdo', permitindo escolher o que remover (fórmulas, formatos, notas etc.), ao passo que a tecla Delete exclui o conteúdo diretamente, sem exibir a caixa.",
    correct: "C",
    comentario:
      "CERTO — comportamento documentado e cobrado. No Excel, a tecla Delete limpa o conteúdo sem diálogo (e não há equivalente ao Backspace-do-Calc). Detalhe de prova: a caixa do Calc permite apagar 'só formatos' ou 'só fórmulas' em separado.",
  },
  {
    id: 8,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No LibreOffice Calc, o menu FERRAMENTAS concentra, entre outros, o recurso usado para descobrir qual valor uma célula precisa ter para que um resultado desejado seja atingido (equivalente ao 'Atingir Meta' do Excel). Esse recurso chama-se:",
    options: [
      { key: "a", label: "Solver" },
      { key: "b", label: "Detective" },
      { key: "c", label: "Atingir Meta" },
      { key: "d", label: "Válido? — Cenários" },
      { key: "e", label: "Consolidar" },
    ],
    correct: "c",
    comentario:
      "Letra C. Ferramentas → Atingir Meta: pergunta 'que valor em A1 faz B1 resultar em X?'. O Solver é o irmão avançado (vários objetivos e restrições); o Detective rastreia precedentes/dependentes; Cenários compara hipóteses; Consolidar agrega intervalos.",
  },
];
