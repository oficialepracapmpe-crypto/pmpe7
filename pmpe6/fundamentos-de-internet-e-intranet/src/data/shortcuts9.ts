/* Catálogo exaustivo dos atalhos do LibreOffice Impress 7 (PT-BR),
   compilado da documentação oficial (help.libreoffice.org). */

export interface IGroup {
  id: string;
  label: string;
  intro: string;
  modo: "edicao" | "apresentacao";
}

export interface IShort {
  k: string;
  f: string;
  q?: 1;
  d?: 1; // DIFERENTE do PowerPoint PT-BR
}

export const I_GROUPS: IGroup[] = [
  {
    id: "geral",
    label: "Documento e comandos gerais",
    intro: "Novo, abrir, salvar, imprimir, sair e a barra de menus.",
    modo: "edicao",
  },
  {
    id: "fkeys",
    label: "Teclas de função (F1–F12)",
    intro: "As peculiaridades do Impress: duplicar, posição/tamanho, grupos e pontos.",
    modo: "edicao",
  },
  {
    id: "objetos",
    label: "Objetos: agrupar, ordenar, mover",
    intro: "A camada de objetos sobre o slide — o território do menu Desenhar.",
    modo: "edicao",
  },
  {
    id: "texto",
    label: "Texto e formatação",
    intro: "Negrito, itálico, alinhamentos, quebras e seleção dentro de caixas de texto.",
    modo: "edicao",
  },
  {
    id: "slides",
    label: "Slides e navegação",
    intro: "Percorrer slides, mover no painel de miniaturas e alternar modos de exibição.",
    modo: "edicao",
  },
  {
    id: "show",
    label: "▶ Durante a apresentação",
    intro: "O modo de tela cheia: avançar, voltar, telas B/W, caneta e pular para slide.",
    modo: "apresentacao",
  },
  {
    id: "zoom",
    label: "Zoom e exibição",
    intro: "Ajustar a visão do slide na janela de edição.",
    modo: "edicao",
  },
];

export const I_DATA: Record<string, IShort[]> = {
  geral: [
    { k: "Ctrl + N", f: "Cria uma NOVA apresentação.", q: 1, d: 1 },
    { k: "Ctrl + O", f: "ABRE uma apresentação existente.", q: 1, d: 1 },
    { k: "Ctrl + S", f: "SALVA a apresentação atual.", q: 1, d: 1 },
    { k: "Ctrl + Shift + S", f: "SALVAR COMO (novo nome, local ou formato: .odp, .pptx, .pdf).", q: 1, d: 1 },
    { k: "Ctrl + P", f: "Abre a caixa IMPRIMIR (slides, folhetos, anotações).", q: 1 },
    { k: "Ctrl + W", f: "FECHA o documento." },
    { k: "Ctrl + Q", f: "SAI do LibreOffice.", q: 1, d: 1 },
    { k: "Ctrl + Z / Ctrl + Y", f: "Desfaz / refaz.", q: 1 },
    { k: "Ctrl + X / C / V", f: "Recortar / Copiar / Colar.", q: 1 },
    { k: "Ctrl + Shift + V", f: "Colar especial (inclui 'texto sem formatação')." },
    { k: "Ctrl + A", f: "Seleciona TODOS os objetos do slide." , d: 1 },
    { k: "Ctrl + F / Ctrl + H", f: "Localizar / Localizar e substituir." },
    { k: "Ctrl + K", f: "Insere um HYPERLINK." },
    { k: "Alt", f: "Ativa a barra de menus (Alt+A = Arquivo, Alt+E = Editar...)." },
    { k: "F1", f: "Ajuda do LibreOffice." },
    { k: "Ctrl + F5", f: "Mostra/oculta a BARRA LATERAL (painel de tarefas)." },
    { k: "Ctrl + Shift + J", f: "Alterna o modo TELA INTEIRA." },
  ],
  fkeys: [
    { k: "F2", f: "EDITA o texto do objeto selecionado (entra na caixa de texto).", q: 1 },
    { k: "F3", f: "ENTRA no grupo (para editar os objetos individuais).", q: 1, d: 1 },
    { k: "Ctrl + F3", f: "SAI do grupo e volta à exibição normal.", d: 1 },
    { k: "Shift + F3", f: "DUPLICA o objeto selecionado (o Ctrl+D do PowerPoint).", q: 1, d: 1 },
    { k: "F4", f: "Abre a caixa POSIÇÃO E TAMANHO do objeto selecionado.", q: 1, d: 1 },
    { k: "F5", f: "INICIA a apresentação de slides — a grande âncora com o PowerPoint.", q: 1 },
    { k: "Ctrl + Shift + F5", f: "Ativa o NAVEGADOR (no Writer/Calc é F5 sozinho!).", q: 1, d: 1 },
    { k: "F7", f: "Verificação de ORTOGRAFIA.", q: 1 },
    { k: "Ctrl + F7", f: "Dicionário de SINÔNIMOS." },
    { k: "F8", f: "Edita os PONTOS do polígono/forma selecionada.", d: 1 },
    { k: "Ctrl + Shift + F8", f: "Ajusta o texto ao quadro (adapta o bloco ao conteúdo)." },
    { k: "F11", f: "Abre a janela de ESTILOS de gráfico e apresentação.", q: 1 },
    { k: "Shift + F11", f: "Cria um novo estilo a partir da seleção." },
  ],
  objetos: [
    { k: "Shift + Ctrl + G", f: "AGRUPA os objetos selecionados.", q: 1, d: 1 },
    { k: "Shift + Ctrl + A", f: "DESAGRUPA o grupo selecionado.", q: 1, d: 1 },
    { k: "Shift + Ctrl + K", f: "COMBINA objetos: funde dois ou mais numa só forma.", d: 1 },
    { k: "Ctrl + Shift + K", f: "DIVIDE o objeto combinado (volta a ser vários)." , d: 1},
    { k: "Ctrl + + (mais)", f: "Traz o objeto UMA posição para a frente." },
    { k: "Shift + Ctrl + +", f: "Traz o objeto para a FRENTE (topo da pilha)." },
    { k: "Ctrl + − (menos)", f: "Envia o objeto UMA posição para trás." },
    { k: "Shift + Ctrl + −", f: "Envia o objeto para o FUNDO (fundo da pilha)." },
    { k: "Setas (objeto selecionado)", f: "MOVEM o objeto na direção da seta." },
    { k: "Ctrl + setas", f: "Movem a EXIBIÇÃO da página (rolagem fina)." },
    { k: "Shift + arrastar", f: "Limita o movimento a horizontal/vertical (ou mantém proporção ao redimensionar)." },
    { k: "Ctrl + arrastar", f: "Cria uma CÓPIA do objeto arrastado (com 'Copiar ao mover' ativo)." },
    { k: "Alt (ao desenhar)", f: "Desenha/redimensiona A PARTIR DO CENTRO do objeto." },
    { k: "Tab / Shift + Tab", f: "Seleciona os objetos na ORDEM em que foram criados (e inversa).", q: 1 },
    { k: "Ctrl + clique", f: "Entra no grupo / seleciona o objeto ATRÁS do selecionado." },
    { k: "Ctrl + Shift + clique", f: "Seleciona o objeto NA FRENTE do selecionado." },
    { k: "Esc", f: "Sai do modo atual (grupo, edição de pontos, seleção)." },
    { k: "Enter", f: "Ativa o objeto de espaço reservado selecionado (só com o quadro selecionado)." },
    { k: "Ctrl + Enter", f: "Vai para o próximo objeto de texto; no último, INSERE um novo slide com o mesmo layout.", q: 1 },
  ],
  texto: [
    { k: "Ctrl + B", f: "NEGRITO.", q: 1, d: 1 },
    { k: "Ctrl + I", f: "ITÁLICO.", q: 1 },
    { k: "Ctrl + U", f: "SUBLINHADO.", q: 1, d: 1 },
    { k: "Ctrl + L / E / R / J", f: "Alinhar à esquerda / centralizar / à direita / justificar.", d: 1 },
    { k: "Shift + Enter", f: "Quebra de linha SEM mudar de parágrafo.", q: 1 },
    { k: "Ctrl + Hífen (−)", f: "Hífen opcional (só aparece se a palavra quebrar)." },
    { k: "Ctrl + Shift + −", f: "Hífen INCONDICIONAL (nunca separa a palavra)." },
    { k: "Ctrl + Shift + Espaço", f: "Espaço incondicional (não quebra linha nem estica)." },
    { k: "Ctrl + setas", f: "Move o cursor PALAVRA a palavra (↑/↓: parágrafo a parágrafo)." },
    { k: "Ctrl + Shift + setas", f: "Seleciona palavra a palavra / até o fim do parágrafo." },
    { k: "Shift + Home / End", f: "Seleciona até o início / fim da linha." },
    { k: "Ctrl + Home / Ctrl + End", f: "Início / fim do bloco de texto do slide." },
    { k: "Ctrl + Del", f: "Apaga até o FIM da palavra." },
    { k: "Ctrl + Backspace", f: "Apaga até o INÍCIO da palavra." },
    { k: "Ctrl + Shift + Del", f: "Apaga até o fim da FRASE." },
    { k: "Ctrl + Shift + Backspace", f: "Apaga até o início da frase." },
  ],
  slides: [
    { k: "PageUp / PageDown", f: "Vai para o slide ANTERIOR / SEGUINTE na edição.", q: 1 },
    { k: "Ctrl + Shift + PageDown", f: "Move os slides selecionados UMA posição para baixo no painel de miniaturas.", q: 1 },
    { k: "Ctrl + Shift + PageUp", f: "Move os slides selecionados uma posição para cima." },
    { k: "Ctrl + Shift + End / Home", f: "Move os slides selecionados para o FIM / INÍCIO da lista." },
    { k: "Home / End (miniaturas)", f: "Foca o primeiro / último slide." },
    { k: "Enter (no Painel de slides)", f: "Alterna para o modo Normal com o slide ativo / ADICIONA um novo slide." },
    { k: "Ctrl + Enter", f: "Passa ao próximo objeto de texto; no fim, insere novo slide com o mesmo layout.", q: 1 },
    { k: "Alt + Shift? — ver modos", f: "Modos de exibição: use a Barra de exibição ou menu Exibir → Normal, Estrutura, Notas, Classificação." },
  ],
  show: [
    { k: "F5", f: "INICIA a apresentação de slides (do primeiro slide).", q: 1 },
    { k: "Esc ou − (menos)", f: "ENCERRA a apresentação e volta à edição.", q: 1 },
    { k: "Espaço · Enter · → · ↓ · PageDown · clique", f: "AVANÇA: reproduz o próximo efeito; sem efeito, vai ao próximo slide.", q: 1 },
    { k: "← · ↑ · PageUp · Backspace · clique-direito", f: "VOLTA: repete o efeito anterior; sem efeito, exibe o slide anterior.", q: 1 },
    { k: "Ctrl + PageDown", f: "Vai para o PRÓXIMO slide sem reproduzir os efeitos." },
    { k: "Ctrl + PageUp", f: "Volta ao slide ANTERIOR sem reproduzir os efeitos." },
    { k: "número + Enter", f: "Pula DIRETO para o slide daquele número (digite 7 e Enter → slide 7).", q: 1 },
    { k: "Home", f: "Salta para o PRIMEIRO slide da apresentação." },
    { k: "End", f: "Salta para o ÚLTIMO slide." },
    { k: "B ou . (ponto)", f: "Tela PRETA até a próxima tecla/roda do mouse — igual ao PowerPoint.", q: 1 },
    { k: "W ou , (vírgula)", f: "Tela BRANCA até a próxima tecla — igual ao PowerPoint.", q: 1 },
    { k: "P", f: "Usa o mouse como CANETA para rabiscar sobre o slide (no PowerPoint é Ctrl+P).", q: 1, d: 1 },
    { k: "E", f: "APAGA as marcações de caneta feitas na tela." },
    { k: "Ctrl + A", f: "DESLIGA o modo caneta do ponteiro (volta à seta)." },
  ],
  zoom: [
    { k: "+ (mais)", f: "Aumenta o zoom." },
    { k: "− (menos)", f: "Diminui o zoom." },
    { k: "× (numérico)", f: "Ajusta a PÁGINA à janela (ver o slide inteiro)." },
    { k: "÷ (numérico)", f: "Aplica mais zoom na SELEÇÃO atual." },
    { k: "Ctrl + Shift + J", f: "Alterna o modo TELA INTEIRA." },
  ],
};

/* ---------- comparativo PowerPoint PT-BR × Impress ---------- */
export interface IDiff {
  acao: string;
  ppt: string;
  imp: string;
  alerta?: string;
}

export const I_DIFERENCAS: IDiff[] = [
  { acao: "Novo documento", ppt: "Ctrl + O", imp: "Ctrl + N" },
  { acao: "Abrir documento", ppt: "Ctrl + A", imp: "Ctrl + O" },
  { acao: "Salvar", ppt: "Ctrl + B", imp: "Ctrl + S", alerta: "Ctrl+B no Impress é negrito!" },
  { acao: "Salvar como", ppt: "F12", imp: "Ctrl + Shift + S" },
  { acao: "Negrito", ppt: "Ctrl + N", imp: "Ctrl + B" },
  { acao: "Sublinhado", ppt: "Ctrl + S", imp: "Ctrl + U" },
  { acao: "Selecionar tudo", ppt: "Ctrl + T", imp: "Ctrl + A" },
  { acao: "Alinhar à esquerda", ppt: "Ctrl + Q", imp: "Ctrl + L" },
  { acao: "Centralizar", ppt: "Ctrl + E", imp: "Ctrl + E", alerta: "Igual nos dois." },
  { acao: "Justificar", ppt: "Ctrl + J", imp: "Ctrl + J", alerta: "Igual nos dois." },
  { acao: "Novo slide", ppt: "Ctrl + M", imp: "Ctrl + Enter (no último objeto)", alerta: "No Impress, Ctrl+M não insere slide!" },
  { acao: "Duplicar objeto", ppt: "Ctrl + D", imp: "Shift + F3", alerta: "Ctrl+D não duplica no Impress!" },
  { acao: "Iniciar apresentação", ppt: "F5", imp: "F5", alerta: "IGUAL — a âncora universal!" },
  { acao: "Slide atual", ppt: "Shift + F5", imp: "— (não há equivalente)" },
  { acao: "Encerrar", ppt: "Esc", imp: "Esc ou −", alerta: "Praticamente igual." },
  { acao: "Tela preta", ppt: "B ou .", imp: "B ou .", alerta: "IGUAL — âncora!" },
  { acao: "Tela branca", ppt: "W ou ,", imp: "W ou ,", alerta: "IGUAL — âncora!" },
  { acao: "Caneta (apresentação)", ppt: "Ctrl + P", imp: "P", alerta: "Só a letra P no Impress!" },
  { acao: "Apagar marcações", ppt: "E", imp: "E", alerta: "Igual nos dois." },
  { acao: "Agrupar", ppt: "Ctrl + G", imp: "Shift + Ctrl + G" },
  { acao: "Desagrupar", ppt: "Ctrl + Shift + G", imp: "Shift + Ctrl + A", alerta: "O desagrupar MUDA de tecla!" },
  { acao: "Trazer para frente (topo)", ppt: "Ctrl + Shift + ]", imp: "Shift + Ctrl + +" },
  { acao: "Enviar para trás", ppt: "Ctrl + Shift + [", imp: "Ctrl + −" },
  { acao: "Posição e tamanho", ppt: "— (Formatar da Forma)", imp: "F4" },
  { acao: "Navegador", ppt: "— ", imp: "Ctrl + Shift + F5" },
  { acao: "Estilos", ppt: "—", imp: "F11" },
  { acao: "Sair do programa", ppt: "Alt + F4", imp: "Ctrl + Q" },
];
