import type { Question } from "./questions";

export const QUESTIONS_5: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No Microsoft Excel, a fórmula =SOMA(A1:A10) soma somente os valores das células A1 e A10.",
    correct: "E",
    comentario:
      "ERRADO. Os DOIS-PONTOS (:) indicam INTERVALO CONTÍNUO: de A1 ATÉ A10, ou seja, as dez células. Para somar apenas A1 e A10, usa-se ponto e vírgula: =SOMA(A1;A10). Essa dupla ':' × ';' é a pegadinha mais cobrada do Excel.",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "A célula B2 contém a fórmula =A1*$C$1. Ao copiá-la para a célula B3, a fórmula resultante será:",
    options: [
      { key: "a", label: "=A1*$C$1" },
      { key: "b", label: "=A2*$C$1" },
      { key: "c", label: "=A2*$C$2" },
      { key: "d", label: "=A1*$C$2" },
      { key: "e", label: "=B2*$C$1" },
    ],
    correct: "b",
    comentario:
      "Letra B. Ao copiar UMA LINHA para baixo: a referência RELATIVA A1 acompanha e vira A2; a ABSOLUTA $C$1 fica travada (o $ congela coluna e linha). Regra de ouro: cifrão trava o que vem depois dele.",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Considere A1=10, A2=20, A3=vazio e A4=30. O resultado de =MÉDIA(A1:A4) será:",
    options: [
      { key: "a", label: "15" },
      { key: "b", label: "20" },
      { key: "c", label: "60" },
      { key: "d", label: "12,5" },
      { key: "e", label: "#DIV/0!" },
    ],
    correct: "b",
    comentario:
      "Letra B. A função MÉDIA IGNORA células vazias (e textos): soma 10+20+30 = 60 e divide por 3 (e não por 4) = 20. Cuidado: célula com ZERO digitado entra na conta; célula VAZIA, não.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Em uma pasta de trabalho do Excel, o elemento chamado 'planilha' corresponde ao arquivo salvo em disco, ao passo que a 'pasta de trabalho' é cada uma das abas exibidas na parte inferior da janela.",
    correct: "E",
    comentario:
      "ERRADO — está invertido! A PASTA DE TRABALHO é o arquivo (.xlsx); as PLANILHAS (worksheets) são as abas dentro dele (Planilha1, Planilha2...). Uma pasta de trabalho pode conter várias planilhas.",
  },
  {
    id: 5,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Um usuário digitou em D1 a fórmula =SE(C1>=7;\"Aprovado\";\"Reprovado\"). Sabendo que C1 contém o valor 7, o resultado exibido em D1 será:",
    options: [
      { key: "a", label: "Reprovado" },
      { key: "b", label: "Aprovado" },
      { key: "c", label: "VERDADEIRO" },
      { key: "d", label: "#VALOR!" },
      { key: "e", label: "7" },
    ],
    correct: "b",
    comentario:
      'Letra B. O operador >= inclui o próprio 7, então o teste lógico é VERDADEIRO e a função devolve o segundo argumento ("Aprovado"). Estrutura: =SE(teste; valor_se_verdadeiro; valor_se_falso), com os textos sempre entre aspas.',
  },
  {
    id: 6,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Ao excluir uma coluna que era usada por uma fórmula, a célula com a fórmula passa a exibir a mensagem de erro:",
    options: [
      { key: "a", label: "#DIV/0!" },
      { key: "b", label: "#NOME?" },
      { key: "c", label: "#REF!" },
      { key: "d", label: "#N/D" },
      { key: "e", label: "#####" },
    ],
    correct: "c",
    comentario:
      "Letra C. #REF! = referência inválida (a célula referenciada deixou de existir). Memorize os vizinhos: #DIV/0! divisão por zero; #NOME? nome de função digitado errado; #N/D valor não disponível (típico de PROCV sem correspondência); ##### apenas coluna estreita demais.",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No Excel, ao se pressionar a tecla F4 durante a edição de uma fórmula, com o cursor sobre uma referência de célula, alternam-se os modos relativo, absoluto e misto dessa referência.",
    correct: "C",
    comentario:
      "CERTO. F4 é o 'botão do cifrão': A1 → $A$1 → A$1 → $A1 → A1, em ciclo. (Fora da edição de fórmula, F4 repete a última ação — dois papéis para a mesma tecla.)",
  },
  {
    id: 8,
    banca: "Estilo Vunesp · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No Excel 2019, o recurso Tabela Dinâmica, usado para resumir e cruzar grandes volumes de dados, encontra-se na guia:",
    options: [
      { key: "a", label: "Página Inicial" },
      { key: "b", label: "Inserir" },
      { key: "c", label: "Dados" },
      { key: "d", label: "Fórmulas" },
      { key: "e", label: "Exibir" },
    ],
    correct: "b",
    comentario:
      "Letra B. Tabela Dinâmica (e Gráfico Dinâmico) ficam na guia INSERIR, primeiro grupo — ao lado de Tabela. Já Classificar, Filtrar, Remover Duplicatas e Validação de Dados moram na guia DADOS.",
  },
];
