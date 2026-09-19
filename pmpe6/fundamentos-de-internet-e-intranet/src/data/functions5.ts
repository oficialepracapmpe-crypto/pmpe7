export interface XFunc {
  n: string; // nome
  s: string; // sintaxe
  d: string; // o que faz
  ex: string; // exemplo com resultado
  q?: 1;
}

export interface XFuncCat {
  id: string;
  label: string;
  cor: string; // classe tailwind de texto
  intro: string;
  fns: XFunc[];
}

export const FUNC_CATS: XFuncCat[] = [
  {
    id: "mat",
    label: "Matemáticas e estatísticas",
    cor: "text-emerald-300",
    intro: "As funções de contagem e cálculo — presença garantida em qualquer prova.",
    fns: [
      { n: "SOMA", s: "=SOMA(núm1;núm2;...)", d: "Soma os valores de células e intervalos.", ex: "=SOMA(A1:A10) → soma as dez células", q: 1 },
      { n: "MÉDIA", s: "=MÉDIA(intervalo)", d: "Média aritmética. IGNORA células vazias e textos.", ex: "=MÉDIA(A1:A4) com 10, 20, vazio, 30 → 20", q: 1 },
      { n: "MÁXIMO", s: "=MÁXIMO(intervalo)", d: "Retorna o MAIOR valor do intervalo.", ex: "=MÁXIMO(B2:B50) → a maior nota", q: 1 },
      { n: "MÍNIMO", s: "=MÍNIMO(intervalo)", d: "Retorna o MENOR valor do intervalo.", ex: "=MÍNIMO(B2:B50) → a menor nota", q: 1 },
      { n: "MAIOR", s: "=MAIOR(intervalo;k)", d: "O k-ésimo maior valor (2º maior, 3º maior...).", ex: "=MAIOR(A1:A10;2) → o segundo maior" },
      { n: "MENOR", s: "=MENOR(intervalo;k)", d: "O k-ésimo menor valor.", ex: "=MENOR(A1:A10;3) → o terceiro menor" },
      { n: "CONT.NÚM", s: "=CONT.NÚM(intervalo)", d: "Conta apenas as células que contêm NÚMEROS.", ex: "=CONT.NÚM(A1:A10) → quantas têm número", q: 1 },
      { n: "CONT.VALORES", s: "=CONT.VALORES(intervalo)", d: "Conta as células NÃO VAZIAS (números e textos).", ex: "=CONT.VALORES(A1:A10) → quantas estão preenchidas", q: 1 },
      { n: "CONTAR.VAZIO", s: "=CONTAR.VAZIO(intervalo)", d: "Conta as células VAZIAS do intervalo.", ex: "=CONTAR.VAZIO(A1:A10) → quantas faltam preencher" },
      { n: "MULT", s: "=MULT(núm1;núm2)", d: "Multiplica os valores informados.", ex: "=MULT(A1;B1) → produto dos dois" },
      { n: "ARRED", s: "=ARRED(núm;dígitos)", d: "Arredonda ao número de casas decimais indicado.", ex: "=ARRED(3,14159;2) → 3,14", q: 1 },
      { n: "TRUNCAR / INT", s: "=TRUNCAR(núm;dígitos) · =INT(núm)", d: "TRUNCAR corta as casas sem arredondar; INT devolve a parte inteira (arredonda para baixo).", ex: "=TRUNCAR(3,99) → 3 · =INT(3,99) → 3" },
      { n: "MOD", s: "=MOD(núm;divisor)", d: "RESTO da divisão — usado para testar par/ímpar.", ex: "=MOD(7;2) → 1", q: 1 },
      { n: "RAIZ / POTÊNCIA", s: "=RAIZ(núm) · =POTÊNCIA(núm;pot)", d: "Raiz quadrada e potenciação.", ex: "=RAIZ(81) → 9 · =POTÊNCIA(2;3) → 8" },
      { n: "ABS", s: "=ABS(núm)", d: "Valor absoluto (sem sinal).", ex: "=ABS(-15) → 15" },
      { n: "MED / MODO", s: "=MED(intervalo) · =MODO(intervalo)", d: "Mediana (valor central) e moda (valor mais frequente).", ex: "=MED(A1:A9) → valor do meio" },
    ],
  },
  {
    id: "log",
    label: "Lógicas e condicionais",
    cor: "text-yellow-300",
    intro: "O grupo que mais derruba candidato: testes lógicos e somas/contagens com critério.",
    fns: [
      { n: "SE", s: "=SE(teste; se_verdadeiro; se_falso)", d: "Testa uma condição e devolve um resultado para verdadeiro e outro para falso. Textos vão entre aspas.", ex: '=SE(A1>=7;"Aprovado";"Reprovado")', q: 1 },
      { n: "SE aninhado", s: "=SE(t1;v1;SE(t2;v2;v3))", d: "Um SE dentro do outro, para três ou mais faixas de resultado.", ex: '=SE(A1>=9;"A";SE(A1>=7;"B";"C"))', q: 1 },
      { n: "E", s: "=E(teste1;teste2;...)", d: "VERDADEIRO só se TODAS as condições forem verdadeiras.", ex: "=E(A1>5;B1<10) → VERDADEIRO/FALSO", q: 1 },
      { n: "OU", s: "=OU(teste1;teste2;...)", d: "VERDADEIRO se PELO MENOS UMA condição for verdadeira.", ex: "=OU(A1>5;B1>5)", q: 1 },
      { n: "NÃO", s: "=NÃO(teste)", d: "Inverte o resultado lógico.", ex: "=NÃO(A1>5) → FALSO se A1 for maior que 5" },
      { n: "SE + E/OU", s: "=SE(E(t1;t2);v1;v2)", d: "Combinação clássica de prova: condição composta dentro do SE.", ex: '=SE(E(A1>=7;B1>=75);"Aprovado";"Reprovado")', q: 1 },
      { n: "SOMASE", s: "=SOMASE(intervalo; critério; [int_soma])", d: "Soma apenas os valores que atendem a UM critério.", ex: '=SOMASE(B2:B10;"Sul";C2:C10) → soma as vendas do Sul', q: 1 },
      { n: "SOMASES", s: "=SOMASES(int_soma; int1; crit1; ...)", d: "Soma com VÁRIOS critérios simultâneos (repare: o intervalo de soma vem primeiro).", ex: '=SOMASES(C2:C10;B2:B10;"Sul";D2:D10;"2026")' },
      { n: "CONT.SE", s: "=CONT.SE(intervalo; critério)", d: "Conta quantas células atendem a um critério.", ex: '=CONT.SE(A1:A50;"Aprovado") → quantos aprovados', q: 1 },
      { n: "CONT.SES", s: "=CONT.SES(int1;crit1;int2;crit2)", d: "Conta com vários critérios ao mesmo tempo.", ex: '=CONT.SES(A:A;"Sul";B:B;">1000")' },
      { n: "MÉDIASE", s: "=MÉDIASE(intervalo;critério;[int_média])", d: "Média apenas dos valores que atendem ao critério.", ex: '=MÉDIASE(B2:B20;">=7")' },
      { n: "SEERRO", s: "=SEERRO(valor; valor_se_erro)", d: "Substitui mensagens de erro por um texto/valor amigável.", ex: '=SEERRO(A1/B1;"Verifique") → evita #DIV/0!', q: 1 },
    ],
  },
  {
    id: "busca",
    label: "Pesquisa e referência",
    cor: "text-cyan-300",
    intro: "Como cruzar tabelas — o PROCV é a estrela absoluta dos concursos.",
    fns: [
      { n: "PROCV", s: "=PROCV(valor; matriz; nº_coluna; [tipo])", d: "Procura um valor na PRIMEIRA COLUNA de uma tabela e devolve o conteúdo da coluna indicada. Use FALSO (0) para correspondência EXATA.", ex: "=PROCV(A2;E2:G50;3;FALSO) → traz o dado da 3ª coluna", q: 1 },
      { n: "PROCH", s: "=PROCH(valor; matriz; nº_linha; [tipo])", d: "Igual ao PROCV, mas procura na primeira LINHA (busca horizontal).", ex: "=PROCH(A1;A1:Z2;2;FALSO)" },
      { n: "ÍNDICE", s: "=ÍNDICE(matriz; linha; [coluna])", d: "Devolve o valor que está no cruzamento de linha e coluna informadas.", ex: "=ÍNDICE(A1:C10;3;2) → valor da 3ª linha, 2ª coluna" },
      { n: "CORRESP", s: "=CORRESP(valor; intervalo; [tipo])", d: "Informa a POSIÇÃO de um valor dentro de um intervalo.", ex: "=CORRESP(\"Ana\";A1:A20;0) → 5 (5ª posição)" },
      { n: "ÍNDICE + CORRESP", s: "=ÍNDICE(col_result; CORRESP(valor; col_busca; 0))", d: "Dupla que supera o PROCV: busca em qualquer direção.", ex: "=ÍNDICE(C2:C50;CORRESP(A2;A2:A50;0))" },
      { n: "DESLOC", s: "=DESLOC(ref; linhas; colunas)", d: "Retorna uma referência deslocada a partir de uma célula base.", ex: "=DESLOC(A1;2;1) → conteúdo de B3" },
    ],
  },
  {
    id: "texto",
    label: "Texto e data/hora",
    cor: "text-violet-300",
    intro: "Manipular strings e trabalhar com datas — as datas, no Excel, são números!",
    fns: [
      { n: "CONCATENAR / &", s: '=CONCATENAR(t1;t2) · =A1&" "&B1', d: "Junta textos de várias células em uma só.", ex: '=A1&" "&B1 → "Maria Silva"', q: 1 },
      { n: "MAIÚSCULA / MINÚSCULA / PRI.MAIÚSCULA", s: "=MAIÚSCULA(texto)", d: "Converte o texto para caixa alta, baixa ou primeira letra maiúscula.", ex: '=MAIÚSCULA("ana") → ANA' },
      { n: "ESQUERDA / DIREITA", s: "=ESQUERDA(texto;n) · =DIREITA(texto;n)", d: "Extrai n caracteres do início ou do fim do texto.", ex: '=ESQUERDA("Brasil";3) → Bra', q: 1 },
      { n: "EXT.TEXTO", s: "=EXT.TEXTO(texto; início; qtd)", d: "Extrai caracteres do MEIO do texto.", ex: '=EXT.TEXTO("Concurso";4;4) → curs' },
      { n: "NÚM.CARACT", s: "=NÚM.CARACT(texto)", d: "Conta os caracteres (incluindo espaços).", ex: '=NÚM.CARACT("Excel") → 5' },
      { n: "ARRUMAR", s: "=ARRUMAR(texto)", d: "Remove espaços extras antes, depois e duplicados no meio.", ex: '=ARRUMAR("  olá   ") → "olá"' },
      { n: "HOJE / AGORA", s: "=HOJE() · =AGORA()", d: "Data atual / data e hora atuais — atualizam sozinhas a cada recálculo (funções voláteis).", ex: "=HOJE() → 12/05/2026", q: 1 },
      { n: "DIA / MÊS / ANO", s: "=ANO(data)", d: "Extraem cada parte de uma data.", ex: "=ANO(A1) → 2026" },
      { n: "DIAS / DATADIF", s: "=DIAS(fim;início)", d: "Diferença em dias entre duas datas (datas são números de série!).", ex: "=DIAS(B1;A1) → 30" },
      { n: "DIA.DA.SEMANA", s: "=DIA.DA.SEMANA(data;tipo)", d: "Número correspondente ao dia da semana.", ex: "=DIA.DA.SEMANA(HOJE();2) → 1 = segunda" },
    ],
  },
];

export const TOTAL_FUNCS = FUNC_CATS.reduce((n, c) => n + c.fns.length, 0);

export const ERROS_EXCEL = [
  { e: "#####", d: "A coluna está ESTREITA demais para exibir o número (ou há data/hora negativa). Solução: alargar a coluna. Não é erro de fórmula!", q: 1 },
  { e: "#DIV/0!", d: "Divisão por ZERO ou por célula vazia.", q: 1 },
  { e: "#NOME?", d: "O Excel não reconheceu o NOME digitado: função escrita errado (=SOMAR) ou texto sem aspas.", q: 1 },
  { e: "#VALOR!", d: "Tipo de argumento errado — ex.: somar texto com número.", q: 1 },
  { e: "#REF!", d: "REFERÊNCIA inválida: a célula referenciada foi excluída.", q: 1 },
  { e: "#N/D", d: "Valor Não Disponível: típico do PROCV que não encontrou correspondência.", q: 1 },
  { e: "#NULO!", d: "Interseção vazia entre dois intervalos (uso incorreto do espaço como operador)." },
  { e: "#NÚM!", d: "Valor numérico inválido para a operação (ex.: raiz de número negativo)." },
];
