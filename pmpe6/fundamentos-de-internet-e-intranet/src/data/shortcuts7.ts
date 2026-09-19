/* Catálogo exaustivo dos atalhos do LibreOffice Writer 7 (PT-BR),
   compilado da documentação oficial (help.libreoffice.org). */

export interface WGroup {
  id: string;
  label: string;
  intro: string;
}

export interface WShort {
  k: string;
  f: string;
  q?: 1; // muito cobrado
  d?: 1; // DIFERENTE do Word PT-BR
}

export const W7_GROUPS: WGroup[] = [
  {
    id: "geral",
    label: "Documento e comandos gerais",
    intro: "Novo, abrir, salvar, imprimir, exportar, desfazer — a base de tudo.",
  },
  {
    id: "fkeys",
    label: "Teclas de função (F1–F12)",
    intro: "O conjunto mais peculiar do Writer: quase todas diferem do Word.",
  },
  {
    id: "formato",
    label: "Formatação de caractere e parágrafo",
    intro: "Negrito, itálico, alinhamentos e estilos — terreno das maiores diferenças.",
  },
  {
    id: "estilos",
    label: "Estilos de parágrafo",
    intro: "Aplicar Título 1 a 5 e Corpo de texto diretamente pelo teclado.",
  },
  {
    id: "edicao",
    label: "Edição, seleção e área de transferência",
    intro: "Copiar, colar especial, modos de seleção (F8) e exclusões inteligentes.",
  },
  {
    id: "navegacao",
    label: "Navegação pelo documento",
    intro: "Mover o cursor por palavras, parágrafos, páginas, cabeçalho e rodapé.",
  },
  {
    id: "insercao",
    label: "Inserção, quebras e caracteres especiais",
    intro: "Quebras de linha/página/coluna, hífens e espaços incondicionais, campos.",
  },
  {
    id: "tabelas",
    label: "Tabelas, quadros e objetos",
    intro: "Criar e percorrer tabelas, calcular, redimensionar e mover objetos.",
  },
];

export const W7_DATA: Record<string, WShort[]> = {
  geral: [
    { k: "Ctrl + N", f: "Cria um NOVO documento de texto.", q: 1, d: 1 },
    { k: "Ctrl + Shift + N", f: "Abre a caixa MODELOS (novo documento a partir de modelo)." },
    { k: "Ctrl + O", f: "ABRE um documento existente.", q: 1, d: 1 },
    { k: "Ctrl + S", f: "SALVA o documento atual.", q: 1, d: 1 },
    { k: "Ctrl + Shift + S", f: "SALVAR COMO (novo nome, local ou formato).", q: 1, d: 1 },
    { k: "Ctrl + P", f: "Abre a caixa IMPRIMIR.", q: 1 },
    { k: "Ctrl + Shift + O", f: "Ativa/desativa a VISUALIZAÇÃO DE IMPRESSÃO.", d: 1 },
    { k: "Ctrl + W", f: "FECHA o documento atual (a janela)." },
    { k: "Ctrl + Q", f: "SAI do LibreOffice (encerra o aplicativo).", q: 1, d: 1 },
    { k: "Ctrl + Z", f: "DESFAZ a última ação.", q: 1 },
    { k: "Ctrl + Y", f: "REFAZ a ação desfeita.", q: 1, d: 1 },
    { k: "Ctrl + F", f: "Abre a barra LOCALIZAR.", q: 1 },
    { k: "Ctrl + H", f: "Abre LOCALIZAR E SUBSTITUIR.", q: 1, d: 1 },
    { k: "Ctrl + Shift + J", f: "Alterna o modo TELA INTEIRA.", d: 1 },
    { k: "Ctrl + F5", f: "Mostra/oculta a BARRA LATERAL (Sidebar)." },
    { k: "Alt", f: "Ativa a barra de menus (sublinhando as letras de acesso: Alt+A = Arquivo, Alt+E = Editar...).", q: 1 },
    { k: "Ctrl + Alt + Shift + ?", f: "Abre a lista de comandos e macros disponíveis (Ferramentas → Macros)." },
    { k: "F1", f: "Abre a Ajuda do LibreOffice." },
  ],
  fkeys: [
    { k: "F2", f: "Abre a BARRA DE FÓRMULAS (para cálculos dentro do texto ou da tabela).", d: 1 },
    { k: "Ctrl + F2", f: "Abre a caixa INSERIR CAMPOS (data, número de página, autor...).", d: 1 },
    { k: "F3", f: "Completa o AUTOTEXTO (digite a sigla e pressione F3).", q: 1, d: 1 },
    { k: "Ctrl + F3", f: "Abre a caixa para EDITAR o autotexto." },
    { k: "F4", f: "Abre/fecha a exibição das FONTES DE DADOS (bancos cadastrados, base da mala direta).", d: 1 },
    { k: "Shift + F4", f: "Seleciona o próximo quadro (frame)." },
    { k: "F5", f: "Ativa/desativa o NAVEGADOR — salta entre títulos, tabelas, figuras e indicadores.", q: 1, d: 1 },
    { k: "Shift + F5", f: "Volta o cursor à posição em que estava quando o documento foi salvo pela última vez." },
    { k: "Ctrl + Shift + F5", f: "Ativa o Navegador e vai direto ao campo 'número da página'." },
    { k: "F7", f: "Abre a verificação de ORTOGRAFIA e gramática.", q: 1 },
    { k: "Ctrl + F7", f: "Abre o DICIONÁRIO DE SINÔNIMOS.", q: 1 },
    { k: "F8", f: "Liga/desliga o MODO DE EXTENSÃO de seleção (as setas passam a selecionar).", q: 1 },
    { k: "Ctrl + F8", f: "Ativa/desativa o sombreamento dos CAMPOS (fundo cinza)." },
    { k: "Shift + F8", f: "Modo de seleção ADICIONAL (soma trechos separados, como o Ctrl+clique)." },
    { k: "Ctrl + Shift + F8", f: "Modo de seleção em BLOCO (coluna vertical de texto)." },
    { k: "F9", f: "ATUALIZA os campos do documento.", q: 1 },
    { k: "Ctrl + F9", f: "Mostra/oculta os CÓDIGOS dos campos." },
    { k: "Shift + F9", f: "CALCULA a tabela (recalcula fórmulas)." },
    { k: "Ctrl + Shift + F9", f: "Atualiza os campos e as listas de entrada." },
    { k: "Ctrl + F10", f: "Mostra/oculta os CARACTERES NÃO IMPRIMÍVEIS (marcas de parágrafo ¶, espaços, tabulações).", q: 1, d: 1 },
    { k: "F11", f: "Abre a janela/painel ESTILOS — o coração do Writer.", q: 1, d: 1 },
    { k: "Shift + F11", f: "CRIA um novo estilo a partir da formatação da seleção.", d: 1 },
    { k: "Ctrl + Shift + F11", f: "ATUALIZA o estilo selecionado com a formatação atual." },
    { k: "Ctrl + F11", f: "Coloca o foco na caixa 'Aplicar estilos' (barra de formatação)." },
    { k: "F12", f: "Alterna LISTA ORDENADA (numerada) no parágrafo.", q: 1, d: 1 },
    { k: "Shift + F12", f: "Alterna LISTA NÃO ORDENADA (marcadores).", d: 1 },
    { k: "Ctrl + Shift + F12", f: "Desativa listas ordenadas e não ordenadas." },
    { k: "Ctrl + F12", f: "INSERE ou edita uma TABELA.", q: 1, d: 1 },
    { k: "Ctrl + Shift + F4", f: "Abre/fecha a exibição das fontes de dados." },
  ],
  formato: [
    { k: "Ctrl + B", f: "NEGRITO (Bold).", q: 1, d: 1 },
    { k: "Ctrl + I", f: "ITÁLICO." , q: 1 },
    { k: "Ctrl + U", f: "SUBLINHADO (Underline).", q: 1, d: 1 },
    { k: "Ctrl + D", f: "SUBLINHADO DUPLO.", d: 1 },
    { k: "Ctrl + Shift + P", f: "SOBRESCRITO (x²).", d: 1 },
    { k: "Ctrl + Shift + B", f: "SUBSCRITO (H₂O).", d: 1 },
    { k: "Ctrl + L", f: "Alinha o parágrafo à ESQUERDA (Left).", q: 1, d: 1 },
    { k: "Ctrl + E", f: "CENTRALIZA o parágrafo.", q: 1 },
    { k: "Ctrl + R", f: "Alinha o parágrafo à DIREITA (Right).", q: 1, d: 1 },
    { k: "Ctrl + J", f: "JUSTIFICA o parágrafo.", q: 1 },
    { k: "Ctrl + M", f: "LIMPA a formatação direta (volta ao estilo).", q: 1, d: 1 },
    { k: "Ctrl + Shift + Espaço", f: "Insere espaço incondicional (não quebra linha nem estica na justificação)." },
    { k: "Ctrl + Shift + Espaço", f: "Espaço incondicional — mantém duas palavras sempre na mesma linha." },
    { k: "Ctrl + 1 ... Ctrl + 5", f: "Aplica os estilos de parágrafo TÍTULO 1 a TÍTULO 5.", q: 1 },
    { k: "Ctrl + 0", f: "Aplica o estilo de parágrafo CORPO DE TEXTO.", q: 1, d: 1 },
  ],
  estilos: [
    { k: "F11", f: "Abre o painel de ESTILOS (parágrafo, caractere, quadro, página, lista).", q: 1 },
    { k: "Ctrl + 0 (zero)", f: "Estilo Corpo de texto — desfaz um título aplicado por engano.", q: 1 },
    { k: "Ctrl + 1", f: "Estilo Título 1 (nível mais alto do sumário).", q: 1 },
    { k: "Ctrl + 2", f: "Estilo Título 2." },
    { k: "Ctrl + 3", f: "Estilo Título 3." },
    { k: "Ctrl + 4", f: "Estilo Título 4." },
    { k: "Ctrl + 5", f: "Estilo Título 5." },
    { k: "Shift + F11", f: "Novo estilo a partir da seleção." },
    { k: "Ctrl + Shift + F11", f: "Atualizar o estilo com a formatação atual." },
    { k: "Tab / Shift + Tab (início do parágrafo)", f: "Rebaixa / promove o NÍVEL do título ou do item de lista.", q: 1 },
    { k: "Ctrl + ↑ / Ctrl + ↓", f: "MOVE o parágrafo atual (ou os selecionados) para cima/baixo.", d: 1 },
  ],
  edicao: [
    { k: "Ctrl + X / Ctrl + C / Ctrl + V", f: "Recortar / Copiar / Colar.", q: 1 },
    { k: "Ctrl + Shift + V", f: "COLAR ESPECIAL — inclui 'texto sem formatação'.", q: 1 },
    { k: "Ctrl + A", f: "SELECIONA TUDO no documento.", q: 1, d: 1 },
    { k: "Shift + setas", f: "Estende a seleção caractere a caractere / linha a linha." },
    { k: "Ctrl + Shift + ← / →", f: "Seleciona palavra por palavra." },
    { k: "Ctrl + Shift + ↑ / ↓", f: "Seleciona até o início/fim do parágrafo." },
    { k: "Shift + Home / End", f: "Seleciona até o início / fim da linha." },
    { k: "Ctrl + Shift + Home / End", f: "Seleciona até o início / fim do documento." },
    { k: "Shift + PageUp / PageDown", f: "Seleciona uma tela para cima / para baixo." },
    { k: "F8", f: "Modo de extensão: as setas passam a estender a seleção (Esc sai).", q: 1 },
    { k: "Shift + F8", f: "Modo de seleção adicional (vários trechos soltos)." },
    { k: "Ctrl + Shift + F8", f: "Modo de seleção em bloco/coluna." },
    { k: "Delete / Backspace", f: "Apaga um caractere à direita / à esquerda." },
    { k: "Ctrl + Del", f: "Apaga até o FIM da palavra.", q: 1 },
    { k: "Ctrl + Backspace", f: "Apaga até o INÍCIO da palavra.", q: 1 },
    { k: "Ctrl + Shift + Del", f: "Apaga do cursor até o FIM da frase.", d: 1 },
    { k: "Ctrl + Shift + Backspace", f: "Apaga do cursor até o INÍCIO da frase.", d: 1 },
    { k: "Insert", f: "Alterna entre os modos INSERIR e SOBRESCREVER.", q: 1 },
    { k: "Ctrl + + (mais)", f: "CALCULA o texto selecionado e copia o resultado (ex.: selecione '12*7' e some).", d: 1 },
  ],
  navegacao: [
    { k: "Ctrl + ← / →", f: "Move o cursor uma PALAVRA para a esquerda/direita.", q: 1 },
    { k: "Ctrl + ↑ / ↓", f: "Move para o início do parágrafo anterior/seguinte." },
    { k: "Home / End", f: "Início / fim da LINHA." },
    { k: "Ctrl + Home / Ctrl + End", f: "Início / fim do DOCUMENTO.", q: 1 },
    { k: "PageUp / PageDown", f: "Uma tela para cima / para baixo." },
    { k: "Ctrl + PageUp", f: "Alterna o cursor entre o texto e o CABEÇALHO.", d: 1 },
    { k: "Ctrl + PageDown", f: "Alterna o cursor entre o texto e o RODAPÉ.", d: 1 },
    { k: "F5", f: "Navegador: pule direto para qualquer título, tabela, figura ou indicador.", q: 1 },
    { k: "Shift + F5", f: "Retorna à posição do cursor do último salvamento." },
    { k: "Ctrl + Shift + F5", f: "Navegador com foco no campo 'número da página'." },
  ],
  insercao: [
    { k: "Enter", f: "Novo PARÁGRAFO." },
    { k: "Shift + Enter", f: "QUEBRA DE LINHA dentro do mesmo parágrafo.", q: 1 },
    { k: "Ctrl + Enter", f: "QUEBRA DE PÁGINA manual.", q: 1 },
    { k: "Ctrl + Shift + Enter", f: "QUEBRA DE COLUNA (em texto com várias colunas).", q: 1 },
    { k: "Alt + Enter", f: "Insere um parágrafo antes/depois de uma tabela, seção ou quadro na borda do documento.", d: 1 },
    { k: "Ctrl + Hífen (-)", f: "Hífen OPCIONAL (só aparece se a palavra quebrar na linha)." },
    { k: "Ctrl + Shift + Hífen", f: "Hífen INCONDICIONAL (nunca quebra a palavra)." },
    { k: "Ctrl + Shift + Espaço", f: "ESPAÇO incondicional (mantém palavras juntas)." },
    { k: "Ctrl + F2", f: "Caixa INSERIR CAMPOS (data, hora, número de página, título, autor).", q: 1 },
    { k: "F3", f: "Expande o AUTOTEXTO digitado (atalho do Writer que o Word não tem igual).", q: 1 },
    { k: "Ctrl + Tab", f: "Próxima sugestão do Completar Palavra Automaticamente; dentro de tabela, insere tabulação." },
    { k: "Ctrl + Shift + Tab", f: "Sugestão anterior do Completar Palavra Automaticamente." },
  ],
  tabelas: [
    { k: "Ctrl + F12", f: "INSERE uma tabela (abre a caixa de diálogo).", q: 1 },
    { k: "Tab", f: "Vai para a próxima célula; na última célula, CRIA uma nova linha.", q: 1 },
    { k: "Shift + Tab", f: "Volta para a célula anterior." },
    { k: "Ctrl + Tab", f: "Insere uma TABULAÇÃO dentro da célula (sem trocar de célula)." },
    { k: "Ctrl + Home", f: "Na tabela: início da célula → início da tabela → início do documento (pressionando de novo)." },
    { k: "Ctrl + End", f: "Na tabela: fim da célula → fim da tabela → fim do documento." },
    { k: "Shift + F9", f: "Recalcula as fórmulas da tabela." },
    { k: "F2 (na tabela)", f: "Abre a barra de fórmulas da tabela (=soma, média...)." },
    { k: "Alt + setas", f: "Redimensiona a coluna/linha pela borda direita/inferior da célula." },
    { k: "Alt + Shift + setas", f: "Redimensiona pela borda esquerda/superior." },
    { k: "Ctrl + Shift + T", f: "Remove a PROTEÇÃO das células da tabela." },
    { k: "Shift + Ctrl + Del", f: "Na tabela: exclui o conteúdo/linhas conforme a seleção." },
    { k: "Esc (dentro de quadro)", f: "Seleciona o quadro; pressionando de novo, tira o cursor dele." },
    { k: "Ctrl + setas (objeto selecionado)", f: "MOVE o objeto/quadro pelo slide de texto." },
    { k: "Ctrl + Tab (objeto)", f: "Seleciona a âncora do objeto (no modo Editar pontos)." },
  ],
};

/* ---------- comparativo Word PT-BR × Writer ---------- */
export interface Diff {
  acao: string;
  word: string;
  writer: string;
  alerta?: string;
}

export const DIFERENCAS: Diff[] = [
  { acao: "Novo documento", word: "Ctrl + O", writer: "Ctrl + N", alerta: "No Writer, Ctrl+O é ABRIR!" },
  { acao: "Abrir documento", word: "Ctrl + A", writer: "Ctrl + O", alerta: "No Writer, Ctrl+A é SELECIONAR TUDO!" },
  { acao: "Salvar", word: "Ctrl + B", writer: "Ctrl + S", alerta: "No Writer, Ctrl+B é NEGRITO!" },
  { acao: "Salvar como", word: "F12", writer: "Ctrl + Shift + S" },
  { acao: "Selecionar tudo", word: "Ctrl + T", writer: "Ctrl + A" },
  { acao: "Negrito", word: "Ctrl + N", writer: "Ctrl + B", alerta: "No Writer, Ctrl+N cria NOVO documento!" },
  { acao: "Itálico", word: "Ctrl + I", writer: "Ctrl + I", alerta: "O único que não muda." },
  { acao: "Sublinhado", word: "Ctrl + S", writer: "Ctrl + U" },
  { acao: "Alinhar à esquerda", word: "Ctrl + Q", writer: "Ctrl + L" },
  { acao: "Centralizar", word: "Ctrl + E", writer: "Ctrl + E", alerta: "Igual nos dois." },
  { acao: "Alinhar à direita", word: "Ctrl + G", writer: "Ctrl + R" },
  { acao: "Justificar", word: "Ctrl + J", writer: "Ctrl + J", alerta: "Igual nos dois." },
  { acao: "Refazer", word: "Ctrl + R", writer: "Ctrl + Y", alerta: "Ctrl+R no Writer alinha à DIREITA!" },
  { acao: "Localizar e substituir", word: "Ctrl + U", writer: "Ctrl + H", alerta: "Ctrl+U no Writer é SUBLINHADO!" },
  { acao: "Limpar formatação", word: "Ctrl + Barra de espaço", writer: "Ctrl + M" },
  { acao: "Sair do programa", word: "Alt + F4", writer: "Ctrl + Q" },
  { acao: "Ir para / Navegador", word: "F5 (Ir para)", writer: "F5 (Navegador)" },
  { acao: "Inserir tabela", word: "sem atalho padrão", writer: "Ctrl + F12" },
  { acao: "Painel de estilos", word: "Ctrl + Shift + S (Aplicar Estilos)", writer: "F11" },
  { acao: "Marcas de parágrafo ¶", word: "Ctrl + Shift + 8", writer: "Ctrl + F10" },
  { acao: "Lista numerada", word: "sem atalho padrão", writer: "F12" },
  { acao: "Autotexto", word: "F3 (após digitar a sigla)", writer: "F3" },
];
