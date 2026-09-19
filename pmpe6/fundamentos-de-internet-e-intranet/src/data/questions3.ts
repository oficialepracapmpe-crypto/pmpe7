import type { Question } from "./questions";

export const QUESTIONS_3: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Dois arquivos com o mesmo nome podem coexistir em uma mesma pasta do Windows, desde que possuam extensões diferentes.",
    correct: "C",
    comentario:
      "CERTO. O que não pode se repetir na mesma pasta é nome + extensão. oficio.docx e oficio.pdf convivem sem problema; dois oficio.docx, não.",
  },
  {
    id: 2,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado: "Ao nomear um arquivo no Windows 11, o usuário NÃO poderá utilizar o caractere:",
    options: [
      { key: "a", label: "- (hífen)" },
      { key: "b", label: "_ (sublinhado)" },
      { key: "c", label: "> (sinal de maior)" },
      { key: "d", label: "espaço em branco" },
      { key: "e", label: ". (ponto)" },
    ],
    correct: "c",
    comentario:
      'Letra C. Os caracteres proibidos em nomes de arquivos são: < > : " / \\ | ? * — além dos nomes reservados (CON, PRN, AUX, NUL, COM1, LPT1...). Hífen, sublinhado, espaço e ponto (no meio do nome) são permitidos.',
  },
  {
    id: 3,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "A extensão associada por padrão a documentos de planilha do Microsoft Excel, na versão atual do pacote Office, é:",
    options: [
      { key: "a", label: ".xls" },
      { key: "b", label: ".xlsx" },
      { key: "c", label: ".ocs" },
      { key: "d", label: ".csv" },
      { key: "e", label: ".accdb" },
    ],
    correct: "b",
    comentario:
      "Letra B. .xlsx é o padrão das versões modernas (2007+); .xls era o padrão antigo (97–2003); .csv é texto separado por vírgulas; .accdb é banco de dados do Access.",
  },
  {
    id: 4,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Em dispositivos compatíveis com a tecnologia Plug and Play, o sistema operacional reconhece e configura automaticamente o hardware conectado, dispensando, em geral, a intervenção manual do usuário na instalação dos drivers.",
    correct: "C",
    comentario:
      "CERTO. Essa é a essência do PnP ('conecte e use'): o Windows detecta o dispositivo e instala/configura o driver sozinho (buscando, se preciso, no Windows Update). Exemplo clássico: periféricos USB.",
  },
  {
    id: 5,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No Explorador de Arquivos, ao se pressionar Shift+Delete sobre um arquivo, o item é enviado à Lixeira, de onde poderá ser restaurado posteriormente.",
    correct: "E",
    comentario:
      "ERRADO. Shift+Delete exclui PERMANENTEMENTE, sem passar pela Lixeira. Para enviar à Lixeira, usa-se apenas Delete (ou Ctrl+D)... ou arrastar o ícone para a Lixeira.",
  },
  {
    id: 6,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado: "No Windows 11, pressionar a combinação Win+D provoca a ação de:",
    options: [
      { key: "a", label: "abrir a pasta Downloads do usuário." },
      { key: "b", label: "exibir a área de trabalho, minimizando todas as janelas abertas." },
      { key: "c", label: "desligar o computador após confirmação." },
      { key: "d", label: "abrir o Explorador de Arquivos na pasta Documentos." },
      { key: "e", label: "duplicar a área de trabalho virtual atual." },
    ],
    correct: "b",
    comentario:
      "Letra B. Win+D = Desktop: mostra/oculta a área de trabalho. Prima dele: Win+M (minimiza todas — sem alternar de volta com o mesmo atalho) e Win+Home (minimiza todas, exceto a ativa).",
  },
  {
    id: 7,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Para abrir o Gerenciador de Tarefas do Windows DIRETAMENTE, sem passar por telas intermediárias, deve-se pressionar:",
    options: [
      { key: "a", label: "Ctrl+Alt+Del" },
      { key: "b", label: "Alt+F4" },
      { key: "c", label: "Ctrl+Shift+Esc" },
      { key: "d", label: "Win+X" },
      { key: "e", label: "Ctrl+Esc" },
    ],
    correct: "c",
    comentario:
      "Letra C. Ctrl+Shift+Esc abre o Gerenciador de Tarefas na hora. Ctrl+Alt+Del até chega lá, mas passa pela tela de segurança — por isso as bancas perguntam pelo atalho 'direto': Ctrl+Shift+Esc.",
  },
  {
    id: 8,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Por reunir em um mesmo painel sensível ao toque as funções de exibição e de entrada de comandos, a tela sensível ao toque (touchscreen) de um notebook é classificada como dispositivo tanto de entrada quanto de saída de dados.",
    correct: "C",
    comentario:
      "CERTO. É a pegadinha favorita sobre periféricos: a tela EXIBE (saída) e CAPTA toques (entrada). Multifuncional (impressora + scanner) também é dispositivo misto.",
  },
];
