import type { Question } from "./questions";

export interface StudyPoint {
  name: string;
  concept: string;
  exam: string;
  trap: string;
  example: string;
  mnemonic: string;
}

export interface StudyGroup {
  title: string;
  intro: string;
  points: StudyPoint[];
}

export interface Topic {
  short: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  reading: string;
  terms: string[];
  context: string[];
  importance: string;
  distinctions: string[];
  groups: StudyGroup[];
  summary: { item: string; rule: string; clue: string }[];
  question: Question;
  questions?: Question[];
}

export const TOPICS: Topic[] = [
  {
    short: "Figuras de linguagem",
    eyebrow: "Língua Portuguesa · Tópico novo 1 de 4",
    title: "Figuras de linguagem",
    subtitle: "efeitos de sentido, classificação e leitura estratégica para a prova",
    description: "Um mapa completo das figuras de palavras, pensamento, sintaxe e som, sempre ligado ao efeito produzido no texto — exatamente onde as bancas tentam confundir o candidato.",
    reading: "~28 min",
    terms: ["metáfora", "metonímia", "antítese", "paradoxo", "ironia", "eufemismo", "hipérbole", "elipse", "zeugma", "silepse", "aliteração", "onomatopeia"],
    context: [
      "Figuras de linguagem são recursos expressivos que desviam ou ampliam o uso comum das palavras e das estruturas para produzir ênfase, imagem, emoção, musicalidade ou concisão. Elas nasceram do estudo da retórica greco-romana e permanecem centrais na literatura, na publicidade, no jornalismo e na fala cotidiana.",
      "Em prova, não basta decorar o nome: é preciso reconhecer o mecanismo linguístico e, sobretudo, o efeito de sentido no contexto. Uma mesma frase pode admitir mais de uma figura; a questão normalmente orienta qual aspecto deve ser observado.",
    ],
    importance: "Concursos militares cobram leitura precisa de ordens, textos institucionais, notícias e textos literários. A banca usa figuras para avaliar interpretação, semântica e capacidade de distinguir sentido literal de figurado.",
    distinctions: [
      "Metáfora cria equivalência implícita; comparação apresenta conectivo comparativo.",
      "Antítese aproxima ideias opostas; paradoxo funde ideias aparentemente incompatíveis.",
      "Elipse omite termo recuperável pelo contexto; zeugma omite termo já expresso.",
      "A figura deve ser identificada pelo funcionamento no trecho, não por uma palavra isolada.",
    ],
    groups: [
      {
        title: "Figuras de palavra ou semânticas",
        intro: "Alteram ou deslocam o sentido habitual das palavras.",
        points: [
          { name: "Comparação (símile)", concept: "Aproxima explicitamente dois seres por semelhança, com conectivos como “como”, “tal qual”, “feito” ou “assim como”.", exam: "A presença do conectivo e a característica comum entre os elementos comparados.", trap: "Nem todo “como” introduz comparação; ele pode indicar causa, conformidade ou modo.", example: "O pelotão avançou como uma muralha, compacto e disciplinado.", mnemonic: "Comparação mostra a ponte; metáfora esconde a ponte." },
          { name: "Metáfora", concept: "Transfere sentido por semelhança implícita: um termo passa a designar outro sem conectivo comparativo.", exam: "A troca do sentido denotativo por uma imagem construída no contexto.", trap: "Confundi-la com metonímia: metáfora opera por semelhança; metonímia, por proximidade lógica.", example: "A disciplina é o alicerce da tropa.", mnemonic: "Metáfora: A é B no plano da imagem." },
          { name: "Metonímia", concept: "Substitui um termo por outro com o qual mantém relação objetiva: autor/obra, parte/todo, causa/efeito, marca/produto, continente/conteúdo.", exam: "Identificar a relação de contiguidade que permite a substituição.", trap: "Em “li Machado de Assis”, não se lê a pessoa, mas sua obra; não é metáfora.", example: "O comando leu o Diário Oficial antes da formatura.", mnemonic: "Metonímia mora ao lado: troca por proximidade, não por semelhança." },
          { name: "Catacrese", concept: "Metáfora cristalizada usada por falta de termo específico; perdeu a sensação de novidade.", exam: "Expressões consagradas como “pé da mesa”, “braço da cadeira” e “embarcar no avião”.", trap: "Não é erro nem necessariamente linguagem poética; é uma extensão lexical estabilizada.", example: "O agente ocupou o braço direito da formação.", mnemonic: "Catacrese é metáfora que virou nome de uso." },
          { name: "Sinestesia", concept: "Cruza sensações de campos sensoriais diferentes: visão, audição, tato, olfato e paladar.", exam: "Reconhecer a combinação sensorial, inclusive com impressão subjetiva.", trap: "Um único adjetivo sensorial não basta; deve haver fusão ou transferência de sentidos.", example: "A voz áspera do comandante cortou o silêncio.", mnemonic: "SineSTESIA mistura os SENTIDOS." },
          { name: "Perífrase e antonomásia", concept: "Designam um ser por uma característica marcante; quando se refere a pessoa, costuma-se chamar antonomásia.", exam: "A expressão indireta que substitui nome próprio ou comum.", trap: "A perífrase não é simples descrição: ela efetivamente funciona no lugar do nome.", example: "A Terra dos Altos Coqueiros recebeu novos oficiais — referência a Pernambuco.", mnemonic: "Perífrase dá a volta; antonomásia põe um apelido consagrado." },
        ],
      },
      {
        title: "Figuras de pensamento",
        intro: "Atuam na organização das ideias e na atitude do enunciador.",
        points: [
          { name: "Antítese", concept: "Aproxima palavras ou ideias de sentidos opostos para criar contraste.", exam: "Pares semanticamente contrários presentes no mesmo contexto.", trap: "Oposição não precisa gerar contradição impossível; se gerar, pode haver paradoxo.", example: "Na crise, manteve a calma; no silêncio, ouviu o perigo.", mnemonic: "Antítese: lados opostos, ainda logicamente possíveis." },
          { name: "Paradoxo (oxímoro)", concept: "Reúne ideias aparentemente contraditórias numa unidade de sentido que exige interpretação.", exam: "A incompatibilidade lógica aparente, frequentemente com forte efeito expressivo.", trap: "Toda antítese tem oposição, mas nem toda oposição forma paradoxo.", example: "Após a ocorrência, instalou-se um silêncio ensurdecedor no quartel.", mnemonic: "Paradoxo parece impossível — até o contexto explicar." },
          { name: "Eufemismo", concept: "Atenua ideia desagradável, dura ou socialmente sensível.", exam: "O contraste entre uma formulação suave e uma realidade mais forte.", trap: "Atenuação não equivale a ironia; o eufemismo suaviza, a ironia sugere o contrário.", example: "O militar faltou com a verdade durante o depoimento.", mnemonic: "EUFEmismo deixa o fato mais leve." },
          { name: "Hipérbole", concept: "Exagera intencionalmente uma ideia para intensificá-la.", exam: "Marcas de excesso não literais e o efeito de ênfase.", trap: "Número alto ou superlativo pode ser literal; o contexto precisa mostrar exagero.", example: "O rádio tocou mil vezes durante a operação.", mnemonic: "Hiper = acima, excesso." },
          { name: "Ironia", concept: "Enuncia algo para fazer entender sentido diferente, muitas vezes contrário, com intenção crítica ou humorística.", exam: "Pistas contextuais que tornam inadequada a leitura literal.", trap: "Sem contexto ou entonação, nem toda frase elogiosa é irônica.", example: "“Excelente pontualidade”, disse o comandante ao soldado que chegou atrasado.", mnemonic: "Na ironia, leia o contexto antes de acreditar nas palavras." },
          { name: "Personificação (prosopopeia)", concept: "Atribui ações, sentimentos ou características humanas a seres não humanos.", exam: "Verbos e qualidades humanas aplicados a objetos, animais ou abstrações.", trap: "Animal agir conforme sua natureza não é personificação; precisa haver traço humano.", example: "A sirene gritou e acordou o batalhão.", mnemonic: "Prosopopeia põe pessoa no que não é pessoa." },
          { name: "Gradação", concept: "Organiza ideias em progressão crescente (clímax) ou decrescente (anticlímax).", exam: "A sequência orientada de intensidade, dimensão ou importância.", trap: "Uma simples enumeração sem escala não constitui gradação.", example: "Observou, suspeitou, confirmou e agiu.", mnemonic: "Gradação tem degraus." },
        ],
      },
      {
        title: "Figuras de sintaxe ou construção",
        intro: "Produzem efeito pela maneira como os termos são organizados, omitidos ou concordados.",
        points: [
          { name: "Elipse", concept: "Omite termo facilmente recuperável pelo contexto ou pela situação comunicativa.", exam: "Identificar o elemento não escrito que a estrutura exige ou permite inferir.", trap: "Não confundir com sujeito oculto apenas; a omissão pode atingir diferentes termos.", example: "Na viatura, dois policiais; na base, apenas o comandante. (havia)", mnemonic: "Elipse esconde; o contexto entrega." },
          { name: "Zeugma", concept: "É uma elipse de termo já mencionado anteriormente.", exam: "Localizar o termo expresso na primeira oração e omitido na seguinte.", trap: "Se o termo nunca apareceu, é elipse em sentido estrito, não zeugma.", example: "A equipe Alfa vistoriou o térreo; a Bravo, o primeiro andar. (vistoriou)", mnemonic: "Zeugma zera a repetição." },
          { name: "Pleonasmo", concept: "Repete uma ideia para reforço expressivo; quando involuntário e inútil, pode ser vício de linguagem.", exam: "Distinguir pleonasmo literário de redundância inadequada.", trap: "Construções como “vi com meus próprios olhos” podem ser expressivas no contexto.", example: "A ordem, ouvi-a eu mesmo durante a instrução.", mnemonic: "Pleonasmo repete: pode dar força ou virar sobra." },
          { name: "Anacoluto", concept: "Deixa um termo inicial solto, sem função sintática na oração que se desenvolve depois.", exam: "A quebra da construção e a mudança de rumo sintático.", trap: "Não é qualquer inversão; há ruptura, normalmente após tópico destacado.", example: "Aquela ocorrência, ninguém queria assumir a responsabilidade por ela.", mnemonic: "Anacoluto começa numa trilha e termina em outra." },
          { name: "Hipérbato", concept: "Inverte a ordem direta dos termos da oração.", exam: "Reorganizar a frase em sujeito + verbo + complementos para perceber a inversão.", trap: "Separação de termos pela inversão pode induzir erro de concordância e pontuação.", example: "Firmes permaneceram os policiais diante da ameaça.", mnemonic: "Hipérbato embaralha; ponha na ordem direta." },
          { name: "Silepse", concept: "Faz concordância com a ideia, e não com a forma gramatical: de gênero, número ou pessoa.", exam: "O referente mental que justifica a concordância aparentemente irregular.", trap: "Não classificar automaticamente como erro; verifique se há concordância ideológica.", example: "A tropa estava apreensiva, mas continuavam atentos. (silepse de número)", mnemonic: "Silepse segue o sentido." },
          { name: "Assíndeto e polissíndeto", concept: "Assíndeto omite conectivos; polissíndeto os repete intencionalmente.", exam: "Efeitos de rapidez, no primeiro, e insistência ou ritmo, no segundo.", trap: "Vírgulas em enumeração não bastam se não houver coordenação que poderia receber conjunção.", example: "Chegou, avaliou, comunicou, agiu. / E correu, e chamou, e protegeu.", mnemonic: "A-ssíndeto: ausência; poli-ssíndeto: muitos conectivos." },
        ],
      },
      {
        title: "Figuras de som",
        intro: "Exploram repetição ou imitação sonora para criar ritmo e expressividade.",
        points: [
          { name: "Aliteração", concept: "Repetição expressiva de sons consonantais.", exam: "O som, e não apenas a letra, repetido em posição perceptível.", trap: "Letras iguais podem representar sons diferentes; leia o trecho em voz mental.", example: "Rádios ruidosos romperam a rotina da ronda.", mnemonic: "ALiteração lembra repetição de consoantes ao longo da linha." },
          { name: "Assonância", concept: "Repetição expressiva de sons vocálicos.", exam: "A recorrência sonora das vogais e o ritmo produzido.", trap: "Não confundir com rima, que normalmente envolve a terminação dos versos.", example: "A guarda avançava calma pela praça.", mnemonic: "Assonância: som das vogais." },
          { name: "Onomatopeia", concept: "Palavra ou expressão que imita um som real.", exam: "A tentativa de reproduzir linguisticamente ruídos, vozes ou impactos.", trap: "Verbos como “estalar” nomeiam o som, mas “crac!” o imita diretamente.", example: "“Clique”: o rádio foi acionado; “vruum”: a viatura partiu.", mnemonic: "Onomatopeia faz o texto soar." },
        ],
      },
    ],
    summary: [
      { item: "Metáfora × comparação", rule: "Sem conectivo × com conectivo", clue: "A ponte está escondida × visível" },
      { item: "Metáfora × metonímia", rule: "Semelhança × proximidade lógica", clue: "Imagem × substituição objetiva" },
      { item: "Antítese × paradoxo", rule: "Oposição × contradição aparente", clue: "Contrários possíveis × união surpreendente" },
      { item: "Elipse × zeugma", rule: "Termo inferido × termo já mencionado", clue: "Omissão geral × antirrepetição" },
      { item: "Assíndeto × polissíndeto", rule: "Sem conectivos × conectivos repetidos", clue: "Rapidez × insistência" },
      { item: "Aliteração × assonância", rule: "Consoantes × vogais", clue: "Som consonantal × som vocálico" },
    ],
    question: { id: 101, banca: "Questão-treino · Estilo Cebraspe", tipo: "ce", enunciado: "No trecho “A sirene gritou, e o quartel inteiro despertou”, o verbo “gritou” atribui comportamento humano a um objeto, configurando prosopopeia; já em “um silêncio ensurdecedor”, há paradoxo.", correct: "C", comentario: "CERTO. A sirene recebe ação humana, o que caracteriza personificação ou prosopopeia. “Silêncio ensurdecedor” reúne no mesmo sintagma noções aparentemente incompatíveis, formando paradoxo (também chamado oxímoro)." },
  },
  {
    short: "Relações semânticas",
    eyebrow: "Língua Portuguesa · Tópico novo 2 de 4",
    title: "Relações semânticas",
    subtitle: "como orações, períodos e parágrafos constroem a lógica do texto",
    description: "Domine oposição, conclusão, concessão, causalidade, adição e alternância, com atenção aos conectores polissêmicos e às relações implícitas.",
    reading: "~18 min",
    terms: ["oposição", "contraste", "conclusão", "concessão", "causa", "consequência", "adição", "alternância", "coesão", "conector"],
    context: [
      "Relações semânticas são os vínculos de sentido que organizam informações entre orações, períodos ou parágrafos. Elas formam a arquitetura argumentativa do texto: mostram se uma ideia acrescenta, contrasta, explica, admite um obstáculo, oferece alternativas ou conclui.",
      "A relação pode ser marcada por conjunção, locução, advérbio, pontuação ou simplesmente inferida. Por isso, decorar listas de conectores ajuda, mas não substitui a leitura do contexto.",
    ],
    importance: "Na atividade militar, compreender a lógica de relatórios, normas e ordens evita interpretações equivocadas. Nas provas, o tema aparece em substituição de conectivos, reescrita e manutenção do sentido.",
    distinctions: [
      "Oposição corrige ou contrapõe; concessão admite um fato que não impede o resultado.",
      "Causa apresenta motivo; conclusão deriva uma inferência do que foi dito.",
      "O mesmo conector pode mudar de valor conforme o contexto: “e” pode indicar adição, consequência ou contraste.",
      "A relação pode atravessar parágrafos e ser retomada por expressões como “diante disso” e “por outro lado”.",
    ],
    groups: [
      { title: "Relações lógico-semânticas essenciais", intro: "Leia sempre as duas partes relacionadas e teste a paráfrase.", points: [
        { name: "Oposição ou contraste", concept: "Apresenta ideias em direções diferentes, corrige expectativa ou estabelece ressalva. Marcadores: mas, porém, contudo, todavia, entretanto, no entanto.", exam: "Troca entre conjunções adversativas sem alteração do sentido e valor adversativo de “e”.", trap: "“Mas” não é concessivo: liga coordenação adversativa; “embora” introduz oração subordinada concessiva.", example: "A área era extensa, mas a equipe concluiu a varredura.", mnemonic: "MAS muda a marcha do argumento." },
        { name: "Conclusão", concept: "Apresenta resultado lógico ou inferência construída a partir da informação anterior. Marcadores: logo, portanto, assim, por conseguinte, pois posposto.", exam: "A posição de “pois”: depois do verbo e entre vírgulas, tende a ser conclusivo.", trap: "Conclusão lógica não é sinônimo de consequência factual; “choveu, portanto a pista está molhada” é inferência.", example: "O perímetro foi isolado; portanto, a entrada depende de autorização.", mnemonic: "Portanto aponta para o ponto de chegada." },
        { name: "Concessão", concept: "Admite um fato contrário à expectativa, mas insuficiente para impedir o evento principal. Marcadores: embora, ainda que, mesmo que, apesar de, conquanto.", exam: "Reescritas entre “embora + subjuntivo” e “apesar de + infinitivo/substantivo”.", trap: "Concessão não nega o fato: “embora chovesse” pressupõe que chovia.", example: "Embora estivesse cansada, a equipe manteve a vigilância.", mnemonic: "Concede o obstáculo, conserva o resultado." },
        { name: "Causalidade", concept: "Relaciona motivo e efeito. Causa: porque, já que, visto que, uma vez que. Consequência: de modo que, tão... que, por isso.", exam: "Distinguir causa, explicação e consequência, inclusive quando a ordem é efeito → causa.", trap: "Em “Feche o portão, porque anoiteceu”, a segunda oração pode justificar a ordem (explicativa), não funcionar como causa gramatical do ato de fechar.", example: "Como havia risco no local, o comandante reforçou o patrulhamento.", mnemonic: "Pergunte “por quê?” para causa e “o que resultou?” para consequência." },
        { name: "Adição", concept: "Soma informações de mesma orientação argumentativa. Marcadores: e, nem, também, além disso, bem como, não só... mas também.", exam: "Correlação em “não só... mas também” e valor aditivo de “nem”.", trap: "O “e” pode ganhar valor adversativo (“tentou e não conseguiu”) ou consecutivo (“avance e será detido”).", example: "A patrulha registrou a ocorrência e preservou o local.", mnemonic: "Adição põe mais uma peça no relatório." },
        { name: "Alternância", concept: "Apresenta opções, exclusão, escolha ou variação. Marcadores: ou, ora... ora, quer... quer, seja... seja.", exam: "Diferença entre “ou” inclusivo (uma ou ambas) e exclusivo (uma, não ambas), decidida pelo contexto.", trap: "Nem toda alternância implica exclusão: “o candidato pode estudar por livro ou videoaula” pode permitir os dois meios.", example: "Ou o suspeito se identifica, ou será conduzido conforme a lei.", mnemonic: "Alternância abre caminhos; o contexto diz se eles podem se encontrar." },
      ]},
    ],
    summary: [
      { item: "Oposição", rule: "Contrapõe ideias", clue: "mas, porém, contudo" },
      { item: "Conclusão", rule: "Infere a partir do anterior", clue: "logo, portanto, pois (posposto)" },
      { item: "Concessão", rule: "Obstáculo incapaz de impedir", clue: "embora, ainda que, apesar de" },
      { item: "Causa/consequência", rule: "Motivo e efeito", clue: "porque, visto que / por isso, de modo que" },
      { item: "Adição", rule: "Soma argumentos", clue: "e, nem, também, além disso" },
      { item: "Alternância", rule: "Oferece opções", clue: "ou, ora... ora, seja... seja" },
    ],
    question: { id: 102, banca: "Questão-treino · Múltipla escolha", tipo: "multi", enunciado: "Em “Embora o acesso estivesse bloqueado, a equipe concluiu a vistoria; portanto, o relatório foi encaminhado”, os conectores destacados exprimem, respectivamente:", options: [{ key: "a", label: "causa e oposição" }, { key: "b", label: "concessão e conclusão" }, { key: "c", label: "oposição e explicação" }, { key: "d", label: "condição e consequência" }, { key: "e", label: "conformidade e adição" }], correct: "b", comentario: "Letra B. “Embora” admite um obstáculo que não impediu a conclusão da vistoria: concessão. “Portanto” apresenta uma inferência ou conclusão decorrente do período anterior." },
  },
  {
    short: "Funções do que e do se",
    eyebrow: "Língua Portuguesa · Tópico novo 3 de 4",
    title: "Funções do “que” e do “se”",
    subtitle: "morfologia, sintaxe e os testes que resolvem as pegadinhas",
    description: "Um roteiro de identificação para duas palavras multifuncionais: classe gramatical, papel sintático, concordância e mudança de sentido.",
    reading: "~30 min",
    terms: ["pronome relativo", "conjunção integrante", "partícula apassivadora", "índice de indeterminação", "reflexivo", "recíproco", "expletivo", "consecutivo"],
    context: [
      "“Que” e “se” são vocábulos multifuncionais: a mesma forma gráfica pode pertencer a classes diferentes e desempenhar funções distintas. A classificação depende da relação com os demais termos, não da palavra isolada.",
      "O método seguro é localizar os verbos, separar as orações, testar substituições e verificar se o vocábulo retoma antecedente, introduz oração, exerce função sintática ou apenas realça o enunciado.",
    ],
    importance: "O tema reúne morfologia, sintaxe, concordância e regência, por isso é excelente para bancas seletivas. Em concursos militares, aparece tanto em identificação direta quanto em reescritas.",
    distinctions: [
      "Pronome relativo “que” retoma antecedente e exerce função na oração; conjunção integrante não retoma termo nem exerce função interna.",
      "Com “se” apassivador, existe sujeito paciente e o verbo concorda; com índice de indeterminação, o verbo fica na 3ª pessoa do singular.",
      "“Se” reflexivo equivale a “a si mesmo”; recíproco, a “um ao outro”.",
      "Antes de classificar, examine a transitividade do verbo e a possibilidade de transformar a frase em voz passiva analítica.",
    ],
    groups: [
      { title: "Funções do “que”", intro: "Use os testes de retomada, substituição por “isso” e análise da oração introduzida.", points: [
        { name: "Pronome relativo", concept: "Retoma um antecedente e introduz oração adjetiva; dentro dela, exerce função sintática.", exam: "Descobrir a função substituindo “que” pelo antecedente: sujeito, objeto, complemento etc.", trap: "Se houver antecedente, ainda confirme a retomada; um “que” próximo a nome pode iniciar oração completiva.", example: "O relatório que chegou ao comando estava completo. (“que” = o relatório, sujeito de “chegou”)", mnemonic: "Relativo relaciona e retoma." },
        { name: "Conjunção integrante", concept: "Introduz oração subordinada substantiva, que geralmente pode ser substituída por “isso”.", exam: "O teste “verbo + isso”: “O comandante informou que a área estava segura” → informou isso.", trap: "A conjunção não exerce função sintática dentro da oração que inicia; a oração inteira exerce função na principal.", example: "A equipe confirmou que o portão estava fechado.", mnemonic: "Se a oração vira ISSO, o “que” integra." },
        { name: "Conjunção causal ou explicativa", concept: "Introduz causa ou justificativa, muitas vezes equivalente a “porque”.", exam: "Valor semântico no contexto, especialmente depois de ordem ou conselho.", trap: "Não aplicar o teste de “isso”; aqui a oração é adverbial/explicativa, não substantiva.", example: "Recolha o equipamento, que a operação terminou.", mnemonic: "Se explica o motivo, leia “porque”." },
        { name: "Conjunção consecutiva", concept: "Integra a correlação intensiva “tão/tanto/tamanho/tal... que”, apresentando consequência.", exam: "Identificar o intensificador na oração anterior.", trap: "O “que” sozinho não é consecutivo; depende da correlação e do sentido de resultado.", example: "A chuva foi tão intensa que a patrulha alterou a rota.", mnemonic: "TÃO... QUE: intensidade que desemboca em consequência." },
        { name: "Conjunção comparativa", concept: "Introduz o segundo termo de comparação, frequentemente após “mais”, “menos”, “melhor” ou “pior”.", exam: "Estruturas “mais... que”, “menos... que” e “melhor... que”.", trap: "Em “mais do que”, o “do” pode ser facultativo em várias construções sem mudar a comparação.", example: "A prevenção é mais eficaz que a reação tardia.", mnemonic: "Mais/menos chama o “que” para comparar." },
        { name: "Pronome interrogativo", concept: "Introduz pergunta direta ou indireta com sentido de “que coisa/qual coisa”.", exam: "Perguntas indiretas sem ponto de interrogação.", trap: "Não confundir pergunta indireta com oração substantiva introduzida por integrante; o interrogativo conserva valor semântico próprio.", example: "O oficial perguntou que documento faltava.", mnemonic: "Se pede uma resposta específica, é interrogativo." },
        { name: "Pronome ou advérbio exclamativo/intensificador", concept: "Em exclamações, intensifica substantivo, adjetivo ou advérbio.", exam: "Construções como “Que coragem!” e “Que longe fica!”.", trap: "A classe pode variar conforme o termo intensificado; priorize o valor exclamativo exigido pela questão.", example: "Que atuação precisa teve a equipe!", mnemonic: "Exclamação põe energia no “que”." },
        { name: "Partícula expletiva ou de realce", concept: "Pode ser retirada sem prejuízo essencial da estrutura ou do sentido proposicional, embora se perca ênfase.", exam: "Locuções como “é que”, “foi que” e usos de realce.", trap: "Retirar a partícula não pode destruir a gramática da frase.", example: "Foi a perícia que confirmou a origem do material.", mnemonic: "Expletivo explica pouco; realça muito." },
      ]},
      { title: "Funções do “se”", intro: "A transitividade verbal e a concordância são os principais indicadores.", points: [
        { name: "Partícula apassivadora", concept: "Com verbo transitivo direto ou direto e indireto, forma voz passiva sintética; o termo paciente é sujeito.", exam: "Transformação em passiva analítica e concordância: “Vendem-se coletes” → “Coletes são vendidos”.", trap: "O verbo deve concordar com o sujeito paciente: “Alugam-se salas”, não “aluga-se salas”.", example: "Divulgaram-se as novas normas no batalhão.", mnemonic: "Se dá para virar “é/são + particípio”, o SE apassiva." },
        { name: "Índice de indeterminação do sujeito", concept: "Indetermina o agente com verbo intransitivo, transitivo indireto ou de ligação, sempre na 3ª pessoa do singular.", exam: "Distinguir de apassivador pela transitividade e pela impossibilidade de passiva.", trap: "“Precisa-se de voluntários”: “de voluntários” é objeto indireto; o verbo fica no singular.", example: "Confia-se em equipes bem treinadas.", mnemonic: "VTI, VI ou VL + SE: singular e sujeito indeterminado." },
        { name: "Pronome reflexivo", concept: "Indica que o sujeito pratica e recebe a ação; equivale a “a si mesmo”.", exam: "Função sintática de objeto direto ou indireto.", trap: "Nem todo verbo pronominal expressa reflexividade; em “arrepender-se”, o “se” integra o verbo.", example: "O policial se protegeu atrás da barreira. (protegeu a si mesmo)", mnemonic: "Reflexivo volta ao próprio sujeito." },
        { name: "Pronome recíproco", concept: "Com sujeito plural, indica ação mútua; equivale a “um ao outro”.", exam: "Diferenciar reciprocidade de reflexividade individual.", trap: "O contexto decide: “os agentes se feriram” pode ser recíproco ou reflexivo.", example: "As equipes se cumprimentaram após a missão.", mnemonic: "Recíproco vai e volta entre dois ou mais." },
        { name: "Parte integrante do verbo", concept: "Integra verbo essencialmente pronominal ou cujo sentido/regência se estabelece com o pronome.", exam: "Verbos como arrepender-se, queixar-se, suicidar-se, referir-se.", trap: "Não há voz passiva nem ação a si mesmo; retirar o “se” pode tornar a forma inexistente ou mudar o sentido.", example: "O servidor se referiu ao protocolo correto.", mnemonic: "Aqui, verbo e SE marcham juntos." },
        { name: "Conjunção integrante", concept: "Introduz oração substantiva, normalmente interrogativa indireta, substituível por “isso”.", exam: "Distinguir do condicional: “Não sei se haverá reforço” → não sei isso.", trap: "Não há ideia de condição, mas dúvida ou conteúdo de conhecimento.", example: "O comando verificará se o efetivo é suficiente.", mnemonic: "Se a oração vira ISSO, o “se” integra." },
        { name: "Conjunção condicional", concept: "Introduz condição necessária ou suficiente para o fato principal; equivale a “caso”.", exam: "Relação hipótese → consequência e correlação verbal.", trap: "Não confundir com integrante após verbos de dúvida/pergunta.", example: "Se houver risco, a área será isolada.", mnemonic: "Se puder trocar por CASO, é condição." },
        { name: "Conjunção causal ou concessiva", concept: "Em usos menos frequentes, pode equivaler a “já que” (causa) ou “embora” (concessão), conforme o contexto.", exam: "Valores semânticos não prototípicos em textos literários ou formais.", trap: "Não classifique automaticamente todo “se” oracional como condicional.", example: "Se todos conheciam o risco, por que ignoraram o protocolo? (causa: já que)", mnemonic: "Quando “caso” não funciona, teste “já que” ou “embora”." },
        { name: "Partícula expletiva ou de realce", concept: "Acrescenta valor expressivo e pode ser retirada sem prejuízo sintático essencial.", exam: "Usos com verbos de movimento ou mudança: “foi-se”, “passou-se”.", trap: "A retirada pode reduzir ênfase ou alterar aspecto, embora preserve o núcleo informativo.", example: "Findou-se a longa espera pela autorização.", mnemonic: "Expletivo pode sair; o realce fica." },
      ]},
    ],
    summary: [
      { item: "QUE relativo", rule: "Retoma antecedente e exerce função", clue: "Troque pelo antecedente" },
      { item: "QUE integrante", rule: "Introduz oração substantiva", clue: "Troque a oração por “isso”" },
      { item: "SE apassivador", rule: "VTD/VTDI + sujeito paciente", clue: "Passiva analítica e concordância" },
      { item: "SE indeterminador", rule: "VI/VTI/VL + verbo no singular", clue: "Não admite passiva" },
      { item: "SE reflexivo/recíproco", rule: "A si mesmo / um ao outro", clue: "Teste a paráfrase" },
      { item: "SE integrante/condicional", rule: "Conteúdo / hipótese", clue: "“isso” / “caso”" },
    ],
    question: { id: 103, banca: "Questão-treino · Estilo Cebraspe", tipo: "ce", enunciado: "Em “Necessita-se de novos equipamentos” e “Adquiriram-se novos equipamentos”, o “se” desempenha a mesma função, pois em ambos os casos indetermina o sujeito.", correct: "E", comentario: "ERRADO. Em “necessita-se de”, o verbo é transitivo indireto: o “se” é índice de indeterminação do sujeito, e o verbo fica no singular. Em “adquiriram-se equipamentos”, “adquirir” é transitivo direto, “equipamentos” é sujeito paciente, o verbo concorda com ele e o “se” é partícula apassivadora. Passiva analítica: “novos equipamentos foram adquiridos”." },
  },
  {
    short: "Formação de palavras",
    eyebrow: "Língua Portuguesa · Tópico novo 4 de 4",
    title: "Formação de palavras",
    subtitle: "estrutura, derivação, composição e processos especiais",
    description: "Entenda como a língua cria vocábulos e aprenda a separar análise sincrônica de falsa etimologia — uma das armadilhas favoritas das bancas.",
    reading: "~24 min",
    terms: ["radical", "afixo", "derivação", "prefixação", "sufixação", "parassíntese", "regressiva", "imprópria", "justaposição", "aglutinação", "hibridismo"],
    context: [
      "Formação de palavras estuda os mecanismos pelos quais o léxico se amplia. Na tradição gramatical, os processos centrais são derivação, que cria palavra a partir de uma base, e composição, que reúne mais de um radical.",
      "A análise cobrada em prova costuma ser sincrônica: observa como os falantes reconhecem a estrutura da palavra hoje. Não se deve inventar decomposições apenas porque duas sequências de letras parecem coincidir.",
    ],
    importance: "O tema avalia domínio de morfologia e vocabulário, úteis à interpretação e à escrita precisa de documentos operacionais. As bancas exploram especialmente parassíntese, derivação regressiva e diferença entre justaposição e aglutinação.",
    distinctions: [
      "Derivação parte de um radical; composição reúne dois ou mais radicais.",
      "Parassíntese exige prefixo e sufixo simultâneos; prefixação e sufixação pode admitir etapas independentes.",
      "Derivação imprópria muda a classe sem alterar a forma; regressiva reduz a forma e geralmente cria substantivo de verbo.",
      "Justaposição preserva os elementos; aglutinação provoca perda ou alteração fonética.",
    ],
    groups: [
      { title: "Estrutura das palavras", intro: "Antes do processo, reconheça as peças que compõem o vocábulo.", points: [
        { name: "Radical, afixos e desinências", concept: "Radical concentra o núcleo lexical; prefixos e sufixos criam sentidos ou palavras; desinências indicam flexões nominais ou verbais.", exam: "Separar morfemas derivacionais dos flexionais.", trap: "Nem todo final recorrente é sufixo: em “meninas”, -a marca gênero e -s, número; são desinências.", example: "Em “desmobilização”: mobil é o radical; des- e -ização participam da derivação.", mnemonic: "Radical dá raiz; afixo cria; desinência flexiona." },
        { name: "Vogal temática e tema", concept: "Vogal temática liga o radical às desinências; tema é radical + vogal temática.", exam: "Nos verbos, -a-, -e- e -i- indicam as conjugações: patrulhar, prender, agir.", trap: "Vogal temática não é necessariamente desinência de gênero.", example: "Em “patrulávamos”, patrulh- é radical e -a- é vogal temática da 1ª conjugação.", mnemonic: "Tema = radical + vogal temática." },
      ]},
      { title: "Derivação", intro: "Um radical recebe afixo, sofre redução ou muda de classe.", points: [
        { name: "Derivação prefixal", concept: "Acrescenta prefixo antes da base, alterando o sentido sem necessariamente mudar a classe.", exam: "Identificar base e valor do prefixo: ilegal, refazer, contrapor.", trap: "A palavra deve existir sem o prefixo na análise atual: legal → ilegal.", example: "A equipe refez o isolamento. (re- + fez)", mnemonic: "Prefixo vem na frente." },
        { name: "Derivação sufixal", concept: "Acrescenta sufixo após a base e frequentemente muda a classe gramatical.", exam: "Reconhecer sufixos nominais, verbais e adverbiais.", trap: "Flexão não cria palavra nova; “policiais” é plural, não derivação sufixal.", example: "seguro → segurança; patrulha → patrulhamento.", mnemonic: "Sufixo sucede a base." },
        { name: "Derivação prefixal e sufixal", concept: "Acrescenta prefixo e sufixo em etapas independentes; existe palavra com apenas um dos afixos.", exam: "Testar formas intermediárias válidas.", trap: "Não confundir com parassíntese. Em “infelizmente”, existem “infeliz” e “felizmente”.", example: "deslealdade: desleal e lealdade existem.", mnemonic: "Se uma peça sai e a palavra sobrevive, não é parassíntese." },
        { name: "Derivação parassintética", concept: "Prefixo e sufixo entram simultaneamente; sem qualquer um deles, a forma correspondente não existe com o mesmo processo/sentido.", exam: "Aplicar o teste de retirada: entristecer; não há *tristecer nem *entriste.", trap: "Não basta ver prefixo e sufixo; a simultaneidade é indispensável.", example: "A madrugada entristeceu a família. (en- + triste + -ecer)", mnemonic: "Parassíntese é operação em dupla: os dois entram juntos." },
        { name: "Derivação regressiva", concept: "Forma palavra por redução da base, em geral substantivo abstrato de ação derivado de verbo.", exam: "Pares como atacar → ataque, patrulhar → patrulha, combater → combate.", trap: "A direção da derivação depende do sentido: o substantivo designa a ação verbal.", example: "O combate começou ao amanhecer. (combater → combate)", mnemonic: "Regressiva recua a forma." },
        { name: "Derivação imprópria (conversão)", concept: "Muda a classe gramatical sem alterar a forma da palavra; o contexto realiza a conversão.", exam: "Artigo substantivando verbo, adjetivo ou advérbio.", trap: "Não há afixo novo; a mudança é funcional.", example: "O agir rápido evitou danos. (“agir”, verbo, usado como substantivo)", mnemonic: "Imprópria troca a função sem trocar a roupa." },
      ]},
      { title: "Composição", intro: "Dois ou mais radicais se combinam para formar uma unidade lexical.", points: [
        { name: "Composição por justaposição", concept: "Une elementos sem perda fonética relevante; os radicais permanecem reconhecíveis.", exam: "Palavras como guarda-chuva, passatempo, segunda-feira e girassol.", trap: "A ausência de hífen não transforma automaticamente o processo em aglutinação.", example: "O paraquedas foi inspecionado antes da missão.", mnemonic: "Justaposição: peças justas, mas preservadas." },
        { name: "Composição por aglutinação", concept: "Une radicais com perda ou alteração fonética de pelo menos um elemento.", exam: "Palavras clássicas: planalto (plano + alto), aguardente (água + ardente), embora (em + boa + hora).", trap: "Mudança apenas ortográfica não basta; observe alteração/perda na forma sonora.", example: "O helicóptero sobrevoou o planalto. (plano + alto)", mnemonic: "Aglutinação cola e altera." },
      ]},
      { title: "Processos especiais e ampliação lexical", intro: "Além dos processos centrais, a língua incorpora e modela palavras de outras formas.", points: [
        { name: "Hibridismo", concept: "Combina elementos de línguas diferentes na mesma palavra.", exam: "Exemplos tradicionais como televisão (grego + latim) e automóvel (grego + latim).", trap: "Empréstimo estrangeiro inteiro não é hibridismo; é necessário combinar origens.", example: "A telecomunicação apoiou a operação integrada.", mnemonic: "Híbrido mistura origens." },
        { name: "Abreviação ou redução", concept: "Encurta palavra mantendo seu sentido básico.", exam: "foto (fotografia), moto (motocicleta), pneu (pneumático).", trap: "Não confundir com sigla, formada por letras ou segmentos de uma expressão.", example: "A foto foi anexada ao registro.", mnemonic: "Abreviação corta, mas preserva a identidade." },
        { name: "Sigla e acrônimo", concept: "Sigla reúne iniciais; acrônimo é lido como palavra e pode usar segmentos, conforme a classificação adotada.", exam: "Distinguir leitura soletrada e leitura silábica: PMPE × Unesco.", trap: "As gramáticas variam na terminologia; siga o critério explícito da questão.", example: "A PMPE participou da operação; a Unesco aparece em outro contexto institucional.", mnemonic: "Sigla soletra; acrônimo articula — regra prática." },
        { name: "Onomatopeia", concept: "Cria forma lexical pela imitação aproximada de sons.", exam: "Reconhecer vocábulos como tique-taque, zum-zum e clique.", trap: "A onomatopeia pode ser simultaneamente estudada como figura sonora e processo lexical.", example: "O clique do dispositivo confirmou o encaixe.", mnemonic: "O som vira palavra." },
        { name: "Estrangeirismo e empréstimo", concept: "Incorpora item de outra língua, com ou sem adaptação gráfica e fonológica.", exam: "Formas não adaptadas, como download, e adaptadas, como futebol.", trap: "A origem estrangeira não impede flexão e integração ao português.", example: "O briefing antecedeu a operação; os briefings foram arquivados.", mnemonic: "Empréstimo entra e pode ganhar farda portuguesa." },
        { name: "Neologismo", concept: "É palavra nova ou sentido novo para palavra existente, criado para nomear realidade ou efeito expressivo.", exam: "Neologismo lexical, semântico e formações ocasionais.", trap: "Nem todo termo desconhecido é neologismo; pode ser arcaísmo, regionalismo ou tecnicismo.", example: "“Ciberpatrulhamento” nomeia atuação de vigilância em ambiente digital.", mnemonic: "Neo = novo: na forma ou no sentido." },
      ]},
    ],
    summary: [
      { item: "Prefixal/sufixal", rule: "Afixo antes/depois", clue: "refazer / segurança" },
      { item: "Prefixal e sufixal", rule: "Afixos independentes", clue: "Há formas intermediárias" },
      { item: "Parassintética", rule: "Afixos simultâneos", clue: "Retire um: a forma não sobrevive" },
      { item: "Regressiva", rule: "Redução da base", clue: "Verbo → nome de ação" },
      { item: "Imprópria", rule: "Mudança de classe sem mudança formal", clue: "O contexto altera a função" },
      { item: "Justaposição/aglutinação", rule: "Preserva/altera os elementos", clue: "guarda-chuva / planalto" },
    ],
    question: { id: 104, banca: "Questão-treino · Múltipla escolha", tipo: "multi", enunciado: "Assinale a alternativa em que a classificação do processo de formação está correta.", options: [{ key: "a", label: "entristecer — derivação prefixal e sufixal independente" }, { key: "b", label: "deslealdade — derivação parassintética" }, { key: "c", label: "planalto — composição por aglutinação" }, { key: "d", label: "guarda-chuva — composição por aglutinação" }, { key: "e", label: "o agir — derivação regressiva" }], correct: "c", comentario: "Letra C. “Planalto” resulta de plano + alto, com alteração/perda fonética, portanto aglutinação. “Entristecer” é parassintética; “deslealdade” admite etapas independentes; “guarda-chuva” é justaposição; em “o agir”, há derivação imprópria, pois o verbo passa a substantivo sem mudança formal." },
  },
];
