/* Catálogo exaustivo dos atalhos do LibreOffice Calc 7 (PT-BR),
   compilado da documentação oficial (help.libreoffice.org). */

export interface CGroup {
  id: string;
  label: string;
  intro: string;
}

export interface CShort {
  k: string;
  f: string;
  q?: 1; // muito cobrado
  d?: 1; // DIFERENTE do Excel PT-BR
}

export const C_GROUPS: CGroup[] = [
  {
    id: "geral",
    label: "Documento e comandos gerais",
    intro: "Novo, abrir, salvar, imprimir e sair — o quarteto mortal mora aqui.",
  },
  {
    id: "navega",
    label: "Navegação e cursor",
    intro: "Andar por células, blocos de dados, telas e planilhas (abas).",
  },
  {
    id: "selecao",
    label: "Seleção de células",
    intro: "Linhas, colunas, intervalos, blocos de dados e a planilha inteira.",
  },
  {
    id: "edicao",
    label: "Edição e entrada de dados",
    intro: "Editar, preencher intervalos, inserir/excluir células e conteúdo.",
  },
  {
    id: "formulas",
    label: "Fórmulas, funções e auditoria",
    intro: "Assistente de funções, referências, recálculo, rastrear precedentes e dependentes.",
  },
  {
    id: "formato",
    label: "Formatação e formatos de número",
    intro: "A caixa Formatar células e os formatos rápidos pelo teclado.",
  },
  {
    id: "planilhas",
    label: "Planilhas, linhas e colunas",
    intro: "Gerenciar abas, ajustar largura/altura e agrupar dados.",
  },
  {
    id: "fkeys",
    label: "Teclas de função (F1–F12)",
    intro: "O mapa completo das doze teclas — com as diferenças para o Excel.",
  },
];

export const C_DATA: Record<string, CShort[]> = {
  geral: [
    { k: "Ctrl + N", f: "Cria um NOVO documento de planilha.", q: 1, d: 1 },
    { k: "Ctrl + O", f: "ABRE uma planilha existente.", q: 1, d: 1 },
    { k: "Ctrl + S", f: "SALVA a planilha atual.", q: 1, d: 1 },
    { k: "Ctrl + Shift + S", f: "SALVAR COMO (novo nome, local ou formato).", q: 1, d: 1 },
    { k: "Ctrl + P", f: "Abre a caixa IMPRIMIR.", q: 1 },
    { k: "Ctrl + W", f: "FECHA o documento atual." },
    { k: "Ctrl + Q", f: "SAI do LibreOffice.", q: 1, d: 1 },
    { k: "Ctrl + Z / Ctrl + Y", f: "Desfaz / refaz a última ação.", q: 1 },
    { k: "Ctrl + X / C / V", f: "Recortar / Copiar / Colar.", q: 1 },
    { k: "Ctrl + Shift + V", f: "COLAR ESPECIAL (inclui 'texto sem formatação').", q: 1 },
    { k: "Ctrl + Shift + X", f: "Corta SOMENTE o conteúdo, mantendo a formatação da célula — exclusivo do Calc.", d: 1 },
    { k: "Ctrl + F", f: "Abre a barra LOCALIZAR." },
    { k: "Ctrl + H", f: "Abre LOCALIZAR E SUBSTITUIR." },
    { k: "Ctrl + F5", f: "Mostra/oculta a BARRA LATERAL." },
    { k: "Ctrl + Shift + J", f: "Alterna o modo TELA INTEIRA." },
    { k: "Alt", f: "Ativa a barra de menus (letras de acesso sublinhadas)." },
    { k: "F1", f: "Ajuda do LibreOffice." },
  ],
  navega: [
    { k: "Setas", f: "Movem o cursor uma célula na direção indicada." },
    { k: "Ctrl + setas", f: "Salta para o INÍCIO/FIM do bloco de dados naquela direção (como no Excel).", q: 1 },
    { k: "Home", f: "Vai para a primeira célula da LINHA atual." },
    { k: "End", f: "Vai para a última coluna com dados." },
    { k: "Ctrl + Home", f: "Volta para A1 — o começo da planilha.", q: 1 },
    { k: "Ctrl + End", f: "Vai para a última célula com dados." },
    { k: "PageUp / PageDown", f: "Uma tela para cima / para baixo." },
    { k: "Ctrl + PageUp", f: "Vai para a planilha (aba) ANTERIOR; na visualização de impressão, página anterior.", q: 1 },
    { k: "Ctrl + PageDown", f: "Vai para a planilha SEGUINTE; na visualização, página seguinte.", q: 1 },
    { k: "Alt + PageUp / PageDown", f: "Uma tela para a ESQUERDA / DIREITA (rolagem horizontal)." },
    { k: "F5", f: "Ativa/desativa o NAVEGADOR (lista planilhas, intervalos nomeados, imagens...).", q: 1, d: 1 },
    { k: "Shift + Ctrl + F2", f: "Move o cursor para a LINHA DE ENTRADA (para digitar a fórmula)." },
    { k: "Ctrl + F6", f: "Alterna entre janelas de documento abertas." },
  ],
  selecao: [
    { k: "Shift + setas", f: "Estende a seleção célula a célula." },
    { k: "Ctrl + Shift + setas", f: "Estende a seleção até o fim do bloco de dados naquela direção.", q: 1 },
    { k: "Shift + Home / End", f: "Seleciona até a primeira célula da linha / última coluna com valores." },
    { k: "Shift + PageUp / PageDown", f: "Estende a seleção uma página para cima / para baixo." },
    { k: "Shift + Barra de espaço", f: "Seleciona a LINHA atual.", q: 1 },
    { k: "Ctrl + Barra de espaço", f: "Seleciona a COLUNA atual.", q: 1 },
    { k: "Ctrl + Shift + Barra de espaço", f: "Seleciona TODAS as células da planilha.", q: 1 },
    { k: "Ctrl + A", f: "Seleciona todo o intervalo de dados (ou a planilha inteira, se já estiver no intervalo).", q: 1, d: 1 },
    { k: "F8", f: "Ativa/desativa o MODO DE SELEÇÃO ADICIONAL (as setas estendem; clique soma trechos).", q: 1 },
    { k: "Ctrl + * (numérico) + A", f: "Seleciona o BLOCO de dados que contém o cursor." },
    { k: "Ctrl + / (numérico)", f: "Seleciona o intervalo de FÓRMULAS DE MATRIZ que contém o cursor." },
    { k: "Ctrl + arrastar", f: "Seleciona várias áreas DIFERENTES de células (não contíguas)." },
  ],
  edicao: [
    { k: "F2", f: "EDITA a célula ativa (na célula ou na linha de entrada). Pressionado de novo, alterna entre navegar pela planilha e mover o cursor no texto da fórmula.", q: 1 },
    { k: "Enter", f: "Confirma a entrada e move o cursor (direção configurável em Ferramentas → Opções → Calc → Geral)." },
    { k: "Shift + Enter", f: "Confirma e move o cursor na direção OPOSTA à configurada." },
    { k: "Ctrl + Enter", f: "Preenche TODAS as células do intervalo selecionado com a entrada atual.", q: 1 },
    { k: "Shift + Ctrl + Enter", f: "Confirma como FÓRMULA DE MATRIZ (exibida entre { }).", q: 1 },
    { k: "Ctrl + D", f: "PREENCHE PARA BAIXO: copia a célula de cima para toda a seleção.", q: 1 },
    { k: "Ctrl + R", f: "PREENCHE PARA A DIREITA: copia a célula à esquerda." },
    { k: "Backspace", f: "Abre a caixa EXCLUIR CONTEÚDO — escolha o que apagar (fórmulas, números, formatos, notas...).", q: 1, d: 1 },
    { k: "Delete", f: "Exclui o conteúdo DIRETAMENTE, sem abrir a caixa de diálogo." , d: 1 },
    { k: "Ctrl + Shift + +", f: "Abre INSERIR células/linhas/colunas (menu Inserir → Células).", q: 1 },
    { k: "Ctrl + -", f: "Abre EXCLUIR células (menu Editar → Excluir células).", q: 1 },
    { k: "Ctrl + Shift + Enter", f: "Fórmula de matriz (todas as células do intervalo recebem o mesmo cálculo)." },
    { k: "Ctrl + ;", f: "Insere a DATA atual (valor fixo)." },
    { k: "Ctrl + Shift + ;", f: "Insere a HORA atual (valor fixo)." },
    { k: "Esc", f: "Cancela a entrada em andamento." },
  ],
  formulas: [
    { k: "Ctrl + F2", f: "Abre o ASSISTENTE DE FUNÇÕES (o 'Inserir Função' do Calc).", q: 1, d: 1 },
    { k: "F2", f: "Edita a célula; com fórmula, as setas passam a inserir ENDEREÇOS no cálculo." },
    { k: "F4", f: "Alterna a referência: A1 → $A$1 → A$1 → $A1 → A1 (o 'botão do cifrão').", q: 1 },
    { k: "Ctrl + F3", f: "Abre a caixa DEFINIR NOMES (intervalos nomeados).", q: 1 },
    { k: "F9", f: "RECALCULA as fórmulas modificadas da planilha atual (ou atualiza a tabela dinâmica/gráfico selecionado).", q: 1 },
    { k: "Ctrl + Shift + F9", f: "Recalcula TODAS as fórmulas de TODAS as planilhas.", d: 1 },
    { k: "Ctrl + F9", f: "Atualiza o GRÁFICO selecionado." },
    { k: "Shift + F9", f: "RASTREIA PRECEDENTES: setas mostrando quem alimenta a fórmula.", q: 1, d: 1 },
    { k: "Shift + F5", f: "RASTREIA DEPENDENTES: quem usa esta célula.", d: 1 },
    { k: "Ctrl + ` (acento grave)", f: "Mostra/oculta as FÓRMULAS em vez dos valores, em todas as células." },
    { k: "Ctrl + F8", f: "Realça as células que contêm VALORES (sombreamento de valores)." },
    { k: "Ctrl + F1", f: "Exibe a ANOTAÇÃO (nota) anexada à célula atual." },
    { k: "F7", f: "Verificação ORTOGRÁFICA da planilha." },
    { k: "Ctrl + F7", f: "Dicionário de SINÔNIMOS da célula com texto." },
    { k: "Alt + =", f: "Abre o Assistente de Funções posicionado para SOMA (autossoma)." },
  ],
  formato: [
    { k: "Ctrl + 1", f: "Abre a caixa FORMATAR CÉLULAS — o atalho mais importante da formatação.", q: 1 },
    { k: "Ctrl + Shift + 1", f: "Formato numérico: duas casas decimais + separador de milhar." },
    { k: "Ctrl + Shift + 2", f: "Formato EXPONENCIAL (no Excel, esta tecla é formato de HORA!).", d: 1 },
    { k: "Ctrl + Shift + 3", f: "Formato de DATA padrão." },
    { k: "Ctrl + Shift + 4", f: "Formato MONETÁRIO padrão (R$)." },
    { k: "Ctrl + Shift + 5", f: "Formato de PORCENTAGEM com duas casas." },
    { k: "Ctrl + Shift + 6", f: "Formato PADRÃO/Geral (no Excel, esta tecla é científico!).", d: 1 },
    { k: "Ctrl + B / I / U", f: "Negrito / Itálico / Sublinhado.", q: 1, d: 1 },
    { k: "Ctrl + L / E / R / J", f: "Alinhar à esquerda / centralizar / à direita / justificar.", d: 1 },
    { k: "Ctrl + Shift + F10", f: "Mostra a dica de ferramenta do elemento em foco." },
  ],
  planilhas: [
    { k: "Shift + F11", f: "Cria uma nova planilha (aba) — ou, nos ajustes, use o botão + na barra de abas." },
    { k: "Ctrl + arrastar aba", f: "Cria uma CÓPIA da planilha arrastada para a nova posição." },
    { k: "Duplo clique na aba", f: "RENOMEIA a planilha." },
    { k: "Shift + Ctrl + PageUp", f: "ADICIONA a planilha anterior à seleção (agrupa abas)." },
    { k: "Shift + Ctrl + PageDown", f: "Adiciona a planilha seguinte à seleção." },
    { k: "Alt + → / ←", f: "AUMENTA / DIMINUI a largura da coluna atual.", q: 1, d: 1 },
    { k: "Alt + ↓ / ↑", f: "Aumenta / diminui a ALTURA da linha atual.", d: 1 },
    { k: "Alt + Shift + setas", f: "OTIMIZA automaticamente a largura da coluna / altura da linha." },
    { k: "F12", f: "AGRUPA o intervalo de dados selecionado (estrutura de tópicos). No Excel, F12 é Salvar como!", q: 1, d: 1 },
    { k: "Ctrl + F12", f: "DESAGRUPA o intervalo selecionado." },
    { k: "Ctrl + F5", f: "Mostra/oculta a Barra lateral (Propriedades, Estilos, Navegador)." },
  ],
  fkeys: [
    { k: "F1", f: "Ajuda. Ctrl+F1 exibe a anotação da célula." },
    { k: "F2", f: "EDITA a célula (igual ao Excel).", q: 1 },
    { k: "F3", f: "Insere um NOME definido (intervalo nomeado)." },
    { k: "F4", f: "Alterna referências relativas/absolutas (igual ao Excel).", q: 1 },
    { k: "F5", f: "NAVEGADOR (no Excel, F5 é Ir para — e abre a caixa Ir Para).", q: 1, d: 1 },
    { k: "F6", f: "Circula o foco entre áreas da janela." },
    { k: "F7", f: "Ortografia (igual ao Excel).", q: 1 },
    { k: "F8", f: "Modo de seleção adicional (no Excel, F8 estende a seleção com cliques)." },
    { k: "F9", f: "Recalcula a planilha atual; Ctrl+F9 atualiza gráfico; Ctrl+Shift+F9 recalcula tudo.", q: 1 },
    { k: "F10", f: "Ativa as letras de acesso dos menus." },
    { k: "F11", f: "Abre a janela ESTILOS de célula/página (o Excel não tem equivalente direto).", q: 1, d: 1 },
    { k: "F12", f: "AGRUPA o intervalo selecionado (no Excel, F12 = Salvar como!).", q: 1, d: 1 },
  ],
};

/* ---------- comparativo Excel PT-BR × Calc ---------- */
export interface CDiff {
  acao: string;
  excel: string;
  calc: string;
  alerta?: string;
}

export const C_DIFERENCAS: CDiff[] = [
  { acao: "Novo documento", excel: "Ctrl + O", calc: "Ctrl + N", alerta: "No Calc, Ctrl+O é ABRIR!" },
  { acao: "Abrir documento", excel: "Ctrl + A", calc: "Ctrl + O", alerta: "No Calc, Ctrl+A é SELECIONAR TUDO!" },
  { acao: "Salvar", excel: "Ctrl + B", calc: "Ctrl + S", alerta: "No Calc, Ctrl+B é NEGRITO!" },
  { acao: "Salvar como", excel: "F12", calc: "Ctrl + Shift + S", alerta: "F12 no Calc AGRUPA dados!" },
  { acao: "Negrito", excel: "Ctrl + N", calc: "Ctrl + B", alerta: "No Calc, Ctrl+N cria NOVO documento!" },
  { acao: "Sublinhado", excel: "Ctrl + S", calc: "Ctrl + U" },
  { acao: "Selecionar tudo", excel: "Ctrl + T", calc: "Ctrl + A" },
  { acao: "Alinhar à esquerda", excel: "Ctrl + Q", calc: "Ctrl + L" },
  { acao: "Centralizar", excel: "Ctrl + E", calc: "Ctrl + E", alerta: "Igual nos dois." },
  { acao: "Alinhar à direita", excel: "Ctrl + G", calc: "Ctrl + R" },
  { acao: "Justificar", excel: "Ctrl + J", calc: "Ctrl + J", alerta: "Igual nos dois." },
  { acao: "Formatar células", excel: "Ctrl + 1", calc: "Ctrl + 1", alerta: "Igual nos dois — decore!" },
  { acao: "Editar célula", excel: "F2", calc: "F2", alerta: "Igual nos dois — decore!" },
  { acao: "Referências $A$1", excel: "F4", calc: "F4", alerta: "Igual nos dois — decore!" },
  { acao: "Inserir função (assistente)", excel: "Shift + F3", calc: "Ctrl + F2" },
  { acao: "Autossoma", excel: "Alt + =", calc: "Alt + = (via assistente)" },
  { acao: "Recalcular (tudo)", excel: "F9 (todas as pastas)", calc: "Ctrl + Shift + F9", alerta: "F9 no Calc recalcula só a planilha atual!" },
  { acao: "Rastrear precedentes", excel: "Ctrl + [ (guia Fórmulas)", calc: "Shift + F9" },
  { acao: "Rastrear dependentes", excel: "Ctrl + ] (guia Fórmulas)", calc: "Shift + F5" },
  { acao: "Excluir conteúdo", excel: "Delete (sem diálogo)", calc: "Backspace abre a CAIXA de diálogo", alerta: "Delete no Calc apaga direto, sem caixa!" },
  { acao: "Mostrar fórmulas", excel: "Ctrl + ' (ou Ctrl+`)", calc: "Ctrl + `" },
  { acao: "Estilos", excel: "— (guia Página Inicial)", calc: "F11" },
  { acao: "Navegador", excel: "—", calc: "F5" },
  { acao: "Largura da coluna", excel: "— (arrastar com o mouse)", calc: "Alt + → / ←" },
  { acao: "Agrupar dados", excel: "Alt + Shift + →", calc: "F12" },
  { acao: "Sair do programa", excel: "Alt + F4", calc: "Ctrl + Q" },
];
