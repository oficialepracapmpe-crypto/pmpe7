import type { Topic } from "./portuguese";

export const TOPICS_2: Topic[] = [
  {
    short: "Sintaxe da oração e do período",
    eyebrow: "Língua Portuguesa · Prompt 2 · Tópico expandido 1 de 2",
    title: "Sintaxe da oração e do período",
    subtitle: "termos da oração, coordenação e subordinação sem decoreba cega",
    description: "Da identificação do sujeito às orações subordinadas: um roteiro funcional para analisar relações sintáticas, concordância, regência e pontuação como a banca exige.",
    reading: "~42 min",
    terms: ["sujeito", "predicado", "objeto direto", "complemento nominal", "agente da passiva", "adjunto adnominal", "aposto", "coordenação", "oração substantiva", "oração adjetiva", "oração adverbial"],
    context: [
      "Sintaxe é a área da gramática que estuda as relações entre palavras, termos e orações. Na oração, observa-se a função de cada constituinte; no período, examina-se como duas ou mais orações se articulam por coordenação ou subordinação.",
      "A análise eficiente começa pelo verbo: conte as formas verbais, verifique sua predicação, procure o sujeito e só depois classifique complementos e acessórios. No período composto, identifique conectivos e substitua a oração por termo equivalente quando possível.",
    ],
    importance: "A sintaxe sustenta concordância, regência, crase e pontuação — assuntos de alta incidência em concursos militares. Também assegura leitura precisa de normas, ordens, relatórios e comunicações operacionais.",
    distinctions: [
      "Sujeito não é necessariamente quem pratica a ação; na voz passiva, ele recebe a ação.",
      "Objeto completa verbo; complemento nominal completa nome e normalmente tem sentido passivo.",
      "Adjunto adnominal caracteriza/determina substantivo; complemento nominal completa sentido de nome abstrato, adjetivo ou advérbio.",
      "Coordenação liga orações sintaticamente independentes; subordinação faz uma oração exercer função em outra.",
    ],
    groups: [
      {
        title: "Termos essenciais da oração",
        intro: "Sujeito e predicado estruturam, em regra, a oração — mas existem orações sem sujeito.",
        points: [
          { name: "Sujeito: conceito e núcleo", concept: "É o termo sobre o qual se declara algo e com o qual o verbo normalmente concorda. Seu núcleo é a palavra central, geralmente substantivo ou pronome.", exam: "Localizar o verbo, formular a pergunta adequada e confirmar pela concordância, sem depender da posição.", trap: "Não confunda o primeiro termo da frase nem o agente semântico com sujeito gramatical: “Aos policiais cabem decisões difíceis” tem sujeito “decisões difíceis”.", example: "Chegaram ao quartel os novos equipamentos. (sujeito: os novos equipamentos)", mnemonic: "O verbo entrega o sujeito pela concordância." },
          { name: "Sujeito simples e composto", concept: "Simples tem um núcleo; composto tem dois ou mais núcleos, ainda que um deles esteja elíptico em construção coordenada.", exam: "Contar núcleos, não palavras: “A nova equipe tática” tem um só núcleo, equipe.", trap: "Um sujeito no plural pode ser simples; “Os agentes” possui apenas o núcleo agentes.", example: "O comandante e a equipe avaliaram a ocorrência. (dois núcleos)", mnemonic: "Simples ou composto depende do número de núcleos." },
          { name: "Sujeito oculto, indeterminado e inexistente", concept: "Oculto é recuperável pela desinência ou contexto; indeterminado existe, mas não é identificado; em oração sem sujeito, o verbo é impessoal.", exam: "3ª pessoa do plural sem referente; 3ª do singular + se com VI/VTI/VL; haver com sentido de existir; fazer indicando tempo/clima.", trap: "“Houveram ocorrências” está errado no padrão culto: o verbo impessoal fica no singular — “houve ocorrências”.", example: "Patrulhamos a área (nós, oculto); precisa-se de reforço (indeterminado); houve chamados (sem sujeito).", mnemonic: "Oculto eu recupero; indeterminado eu não nomeio; inexistente não existe." },
          { name: "Predicado verbal, nominal e verbo-nominal", concept: "Verbal tem núcleo verbo significativo; nominal tem núcleo predicativo ligado por verbo de ligação; verbo-nominal reúne ação e predicativo.", exam: "Verificar se há predicativo e se o verbo conserva sentido de ação.", trap: "O mesmo verbo pode mudar: “O policial ficou atento” (ligação) × “ficou no posto” (intransitivo).", example: "A patrulha avançou. / A patrulha permaneceu alerta. / A patrulha voltou exausta.", mnemonic: "Ação; estado; ação + estado." },
          { name: "Predicativo do sujeito e do objeto", concept: "Atribui característica ao sujeito ou ao objeto, por verbo de ligação ou verbo significativo.", exam: "Relacionar o atributo ao termo caracterizado: “A comissão considerou o plano seguro”.", trap: "Não confundir predicativo com adjunto adnominal: predicativo é atribuição mediada pela estrutura verbal.", example: "Os agentes chegaram preparados. / O comandante julgou a área segura.", mnemonic: "Predicativo predica uma qualidade durante o fato verbal." },
        ],
      },
      {
        title: "Termos integrantes da oração",
        intro: "Completam sentidos de verbos ou nomes e incluem o agente da voz passiva.",
        points: [
          { name: "Objeto direto", concept: "Completa verbo transitivo direto, em regra sem preposição obrigatória; pode ser substituído por o, a, os, as.", exam: "Objeto direto preposicionado, pleonástico e oracional, além da transformação para a voz passiva.", trap: "Presença de preposição não impede OD: “Aos colegas, respeitou-os” e “amar a Deus” apresentam objeto direto preposicionado.", example: "A equipe preservou o local. (preservou-o)", mnemonic: "VTD pede complemento direto e costuma admitir passiva." },
          { name: "Objeto indireto", concept: "Completa verbo transitivo indireto mediante preposição exigida pelo verbo; pode ser retomado por lhe/lhes em certos casos.", exam: "Regência do verbo e distinção de adjunto adverbial.", trap: "A preposição sozinha não prova OI: em “mora em Recife”, o termo indica lugar e o verbo é intransitivo.", example: "O comandante confiou na equipe. (confiou em quem?)", mnemonic: "Objeto indireto chega pela preposição que o verbo exige." },
          { name: "Complemento nominal", concept: "Completa substantivo abstrato, adjetivo ou advérbio por preposição; frequentemente representa alvo/paciente da ideia nominal.", exam: "Contraste com adjunto adnominal em expressões preposicionadas.", trap: "Em “defesa da cidade”, a cidade é defendida (CN); em “defesa do batalhão”, o batalhão pode defender (adjunto), conforme o contexto.", example: "A população tinha necessidade de proteção e estava favorável à operação.", mnemonic: "CN completa Nome e costuma receber a ideia." },
          { name: "Agente da passiva", concept: "Na voz passiva analítica, indica quem pratica a ação, introduzido normalmente por por, pelo ou de.", exam: "Conversão entre voz passiva e ativa: agente da passiva torna-se sujeito da ativa.", trap: "Pode ser omitido; sua ausência não elimina a voz passiva.", example: "A área foi isolada pelos policiais. (os policiais isolaram a área)", mnemonic: "Na passiva, o agente age, mas não é sujeito." },
        ],
      },
      {
        title: "Termos acessórios e termo independente",
        intro: "Acrescentam determinação, circunstância ou explicação; o vocativo é independente.",
        points: [
          { name: "Adjunto adnominal", concept: "Determina, especifica ou caracteriza substantivo. Pode ser artigo, pronome adjetivo, numeral, adjetivo, locução adjetiva ou expressão preposicionada de valor ativo/possessivo.", exam: "Diferenciá-lo de complemento nominal e predicativo.", trap: "Com substantivo concreto, a expressão preposicionada tende a ser adjunto: “viatura da corporação”.", example: "Aquelas duas novas viaturas da PM chegaram.", mnemonic: "Adjunto anda junto do substantivo." },
          { name: "Adjunto adverbial", concept: "Expressa circunstância de tempo, lugar, modo, causa, finalidade, condição, intensidade, instrumento e outras, modificando verbo, adjetivo ou advérbio.", exam: "Valor semântico e efeito da mudança de posição, especialmente sobre vírgulas.", trap: "Nem todo termo preposicionado é objeto; pergunte se completa regência ou apenas acrescenta circunstância.", example: "Durante a madrugada, a equipe agiu com cautela no centro.", mnemonic: "Adjunto adverbial monta o cenário do fato." },
          { name: "Aposto", concept: "Explica, resume, enumera, especifica ou distribui outro termo de valor nominal.", exam: "Aposto explicativo entre vírgulas e especificativo sem vírgula.", trap: "Não confundir com vocativo: aposto refere-se sintaticamente a um termo; vocativo chama o interlocutor.", example: "A PMPE, instituição centenária, atua em Pernambuco. / O coronel Silva chegou.", mnemonic: "Aposto aposta uma informação sobre um nome." },
          { name: "Vocativo", concept: "Termo independente usado para chamar ou interpelar o interlocutor; deve ser isolado por vírgula(s).", exam: "Pontuação em qualquer posição da frase.", trap: "Vocativo não é sujeito: em “Soldados, avancem”, o sujeito de avancem é vocês, oculto.", example: "Senhores candidatos, leiam atentamente o enunciado.", mnemonic: "Chamou? Isolou." },
        ],
      },
      {
        title: "Período simples",
        intro: "Uma única oração pode conter locução verbal e muitos termos.",
        points: [
          { name: "Oração absoluta", concept: "Período simples contém uma oração, organizada em torno de um verbo ou locução verbal, e é chamada oração absoluta.", exam: "Contagem correta de orações, distinguindo locução verbal de dois predicados.", trap: "“A equipe deve permanecer atenta” tem uma oração: deve permanecer forma uma locução verbal.", example: "Os novos policiais devem iniciar o treinamento amanhã.", mnemonic: "Conte núcleos verbais, mas mantenha unida a locução." },
          { name: "Frase, oração e período", concept: "Frase é enunciado com sentido; oração possui verbo ou locução; período é frase organizada em uma ou mais orações.", exam: "Enunciados nominais e períodos compostos.", trap: "“Silêncio!” é frase, mas não oração; “Chegamos.” é frase, oração e período simples.", example: "“Atenção!” / “A patrulha chegou.” / “A patrulha chegou e iniciou a ronda.”", mnemonic: "Frase tem sentido; oração tem verbo; período fecha o enunciado." },
        ],
      },
      {
        title: "Período composto por coordenação",
        intro: "Orações coordenadas são sintaticamente independentes, embora mantenham relação de sentido.",
        points: [
          { name: "Coordenada assindética", concept: "Liga-se a outra oração sem conjunção coordenativa, normalmente por vírgula, ponto e vírgula ou dois-pontos.", exam: "Reconhecer coordenação mesmo sem conectivo expresso.", trap: "Ausência de conjunção não significa ausência de relação semântica.", example: "A equipe chegou, isolou a área, iniciou a busca.", mnemonic: "A-ssindética: sem síndeto, sem conectivo." },
          { name: "Coordenada sindética aditiva", concept: "Soma fatos ou argumentos por e, nem, bem como, não só... mas também.", exam: "Valor adversativo ou consecutivo eventual de “e”.", trap: "Classifique pelo sentido contextual, não apenas pela conjunção.", example: "A patrulha registrou o fato e comunicou o comando.", mnemonic: "Aditiva adiciona." },
          { name: "Coordenada sindética adversativa", concept: "Contrapõe ou restringe ideia anterior por mas, porém, contudo, todavia, entretanto.", exam: "Vírgula antes da conjunção e deslocamento de porém/contudo entre vírgulas.", trap: "“Mas” é adversativa; “embora” é subordinativa concessiva.", example: "O acesso era difícil, mas a equipe avançou.", mnemonic: "Adversativa muda a direção do argumento." },
          { name: "Coordenada sindética alternativa", concept: "Apresenta escolha ou alternância por ou, ora... ora, quer... quer, seja... seja.", exam: "Alternância inclusiva ou exclusiva conforme o contexto.", trap: "“Ou” pode retificar: “o comandante, ou melhor, o chefe da operação”.", example: "Ou o grupo recua, ou a barreira será reforçada.", mnemonic: "Alternativa abre rotas." },
          { name: "Coordenada sindética conclusiva", concept: "Apresenta conclusão ou inferência por logo, portanto, por conseguinte, assim e pois posposto.", exam: "Pontuação de conjunções deslocadas e distinção do “pois” explicativo.", trap: "“Portanto” não introduz causa; apresenta resultado lógico.", example: "A perícia terminou; portanto, o local foi liberado.", mnemonic: "Conclusiva chega ao resultado." },
          { name: "Coordenada sindética explicativa", concept: "Justifica declaração anterior, frequentemente ordem ou hipótese, por porque, que, pois anteposto.", exam: "Diferença entre explicativa coordenada e causal subordinada.", trap: "A classificação pode depender da natureza da oração anterior: ordem + justificativa favorece explicativa.", example: "Mantenham distância, pois a área ainda oferece risco.", mnemonic: "Explicativa responde por que eu disse isso." },
        ],
      },
      {
        title: "Orações subordinadas substantivas",
        intro: "Exercem funções típicas de substantivo e, em geral, podem ser substituídas por “isso”.",
        points: [
          { name: "Subjetiva", concept: "Exerce função de sujeito da oração principal.", exam: "Estruturas “é necessário que”, “convém que”, verbos na passiva e unipessoais.", trap: "O verbo da principal fica na 3ª pessoa do singular porque seu sujeito é a oração inteira.", example: "É necessário que todos conheçam o protocolo. (Isso é necessário.)", mnemonic: "Se ISSO é sujeito, a oração é subjetiva." },
          { name: "Objetiva direta", concept: "Exerce função de objeto direto de verbo da principal, sem preposição obrigatória.", exam: "Verbos declarativos, cognitivos e volitivos seguidos de que/se.", trap: "A conjunção integrante não é objeto; a oração inteira é.", example: "O comando informou que a área estava segura. (informou isso)", mnemonic: "Verbo direto + ISSO." },
          { name: "Objetiva indireta", concept: "Exerce função de objeto indireto, com preposição exigida pelo verbo principal.", exam: "Regência preservada antes da conjunção.", trap: "Não suprima a preposição em registro formal quando o verbo a exige.", example: "A equipe necessita de que o acesso seja liberado. (necessita disso)", mnemonic: "Verbo exige preposição + oração." },
          { name: "Completiva nominal", concept: "Completa sentido de nome da oração principal, com preposição.", exam: "Distinguir da objetiva indireta observando se completa nome ou verbo.", trap: "Em “tem certeza de que”, a oração completa o substantivo certeza, não o verbo ter.", example: "Havia certeza de que o reforço chegaria.", mnemonic: "Nome incompleto + oração = completiva nominal." },
          { name: "Predicativa", concept: "Exerce função de predicativo do sujeito, geralmente após verbo de ligação.", exam: "Estrutura “o fato/a verdade é que...”.", trap: "Não classifique como objetiva direta só porque a oração vem depois do verbo.", example: "A orientação é que ninguém ultrapasse a faixa.", mnemonic: "Sujeito + é + ISSO: predicativa." },
          { name: "Apositiva", concept: "Explica termo anterior, frequentemente após dois-pontos, funcionando como aposto.", exam: "Termos antecipadores como desejo, ordem, objetivo, fato.", trap: "A pontuação é pista, não critério único.", example: "O comandante fez um pedido: que todos mantivessem a calma.", mnemonic: "Apositiva explica um nome anterior." },
        ],
      },
      {
        title: "Orações subordinadas adjetivas",
        intro: "Introduzidas por pronome relativo, caracterizam um antecedente nominal.",
        points: [
          { name: "Adjetiva restritiva", concept: "Delimita o antecedente, selecionando parte do conjunto; não recebe vírgulas.", exam: "Mudança de sentido causada pela inserção de vírgulas.", trap: "Retirar a oração pode ampliar indevidamente a referência.", example: "Os candidatos que estudaram a norma acertaram. (somente os que estudaram)", mnemonic: "Restritiva recorta, sem vírgulas." },
          { name: "Adjetiva explicativa", concept: "Acrescenta informação sobre antecedente já definido ou tomado em sua totalidade; é isolada por vírgulas.", exam: "Efeito generalizante e valor acessório.", trap: "Vírgula não é mero estilo: pode alterar quais indivíduos a afirmação abrange.", example: "Os policiais, que receberam treinamento, iniciaram a operação. (todos receberam)", mnemonic: "Explicativa comenta, entre vírgulas." },
          { name: "Função do pronome relativo", concept: "O relativo conecta orações, retoma antecedente e exerce função sintática na subordinada.", exam: "Regência em “a que”, “de que”, “em que”, “cujo” e “onde”.", trap: "“Cujo” concorda com o termo posterior e não admite artigo: “a equipe cuja atuação...”.", example: "Este é o protocolo a que o instrutor se referiu.", mnemonic: "Ponha o antecedente no lugar do relativo para descobrir sua função." },
        ],
      },
      {
        title: "Orações subordinadas adverbiais",
        intro: "Exercem função de adjunto adverbial e exprimem circunstâncias.",
        points: [
          { name: "Causal", concept: "Indica causa do fato principal: porque, como, já que, visto que.", exam: "Diferença entre causal e explicativa.", trap: "“Como” causal costuma vir anteposto e equivale a “já que”.", example: "Como havia risco, a área foi isolada.", mnemonic: "Causa responde por que o fato ocorreu." },
          { name: "Comparativa", concept: "Estabelece comparação: como, que/do que, quanto, assim como.", exam: "Verbo elíptico no segundo termo da comparação.", trap: "A omissão do verbo não transforma o trecho em frase sem oração: “agiu como o instrutor orientou”.", example: "A equipe reagiu melhor do que o cenário permitia prever.", mnemonic: "Comparativa põe medidas lado a lado." },
          { name: "Concessiva", concept: "Apresenta obstáculo que não impede o fato principal: embora, ainda que, mesmo que, conquanto.", exam: "Uso do subjuntivo e distinção de adversativa.", trap: "O fato concedido é admitido, não negado.", example: "Embora chovesse, a patrulha continuou.", mnemonic: "Concede o obstáculo, mantém o resultado." },
          { name: "Condicional", concept: "Indica condição ou hipótese: se, caso, contanto que, desde que.", exam: "Correlação entre tempos e modos verbais.", trap: "“Desde que” pode ser temporal ou condicional conforme o sentido.", example: "Caso haja alteração, o comando será avisado.", mnemonic: "Condição abre uma hipótese." },
          { name: "Conformativa", concept: "Expressa conformidade: conforme, segundo, consoante, como.", exam: "Distinguir “como” conformativo, causal e comparativo.", trap: "Teste “de acordo com”: se funcionar, há conformidade.", example: "A equipe atuou conforme determina o protocolo.", mnemonic: "Conforme = de acordo com." },
          { name: "Consecutiva", concept: "Indica consequência, geralmente em correlação com tão, tanto, tamanho ou tal: que, de modo que.", exam: "A intensidade na principal e o resultado na subordinada.", trap: "Não confundir consequência com conclusão lógica.", example: "A fumaça era tão densa que a equipe recuou.", mnemonic: "Intensidade desemboca em efeito." },
          { name: "Final", concept: "Indica finalidade: para que, a fim de que, porque em uso formal.", exam: "Diferença entre causa e finalidade pela orientação temporal/intencional.", trap: "“Para + infinitivo” forma oração reduzida final quando há valor de propósito.", example: "O perímetro foi ampliado para que a perícia trabalhasse com segurança.", mnemonic: "Final responde para quê." },
          { name: "Proporcional", concept: "Indica variação paralela: à medida que, à proporção que, quanto mais... mais.", exam: "Crase obrigatória em “à medida que” e correlações proporcionais.", trap: "“Na medida em que” tende a valor causal; “à medida que”, proporcional.", example: "À medida que anoitecia, o patrulhamento era reforçado.", mnemonic: "Duas grandezas caminham juntas." },
          { name: "Temporal", concept: "Localiza o fato no tempo: quando, enquanto, assim que, logo que, mal.", exam: "Relações de simultaneidade, anterioridade e posterioridade.", trap: "“Mal” pode ser advérbio, substantivo ou conjunção temporal equivalente a “assim que”.", example: "Assim que recebeu a ordem, a equipe partiu.", mnemonic: "Temporal responde quando." },
        ],
      },
    ],
    summary: [
      { item: "Sujeito × agente da passiva", rule: "Concorda com o verbo × pratica ação na passiva", clue: "Paciente × agente" },
      { item: "OD × OI", rule: "Sem preposição exigida × com preposição exigida", clue: "Regência do verbo" },
      { item: "CN × adjunto adnominal", rule: "Completa nome × determina substantivo", clue: "Paciente/alvo × agente/posse" },
      { item: "Coordenação × subordinação", rule: "Independência sintática × função em outra oração", clue: "Lado a lado × encaixe" },
      { item: "Adjetiva restritiva × explicativa", rule: "Recorta × comenta", clue: "Sem vírgula × com vírgula" },
      { item: "Substantiva × adverbial", rule: "Função de nome × circunstância", clue: "Teste “isso” × valor semântico" },
    ],
    question: { id: 201, banca: "Questão-treino · Múltipla escolha", tipo: "multi", enunciado: "Em “É necessário que a equipe preserve o local que a perícia examinará, embora haja pressão para liberá-lo”, as orações destacadas classificam-se, respectivamente, como:", options: [{ key: "a", label: "substantiva subjetiva, adjetiva restritiva e adverbial concessiva" }, { key: "b", label: "substantiva objetiva direta, adjetiva explicativa e adverbial causal" }, { key: "c", label: "substantiva predicativa, adjetiva restritiva e coordenada adversativa" }, { key: "d", label: "substantiva subjetiva, substantiva objetiva direta e adverbial condicional" }, { key: "e", label: "substantiva completiva nominal, adjetiva explicativa e adverbial consecutiva" }], correct: "a", comentario: "Letra A. “Que a equipe preserve...” funciona como sujeito de “é necessário” (subjetiva). “Que a perícia examinará” restringe o referente “local” e não vem entre vírgulas (adjetiva restritiva). “Embora haja pressão” admite obstáculo incapaz de impedir o fato principal (adverbial concessiva)." },
  },
  {
    short: "Pontuação e funções textuais",
    eyebrow: "Língua Portuguesa · Prompt 2 · Tópico expandido 2 de 2",
    title: "Pontuação",
    subtitle: "funções sintáticas, discursivas e expressivas dos sinais no texto",
    description: "Pontuar não é marcar pausas para respirar: é organizar relações sintáticas, hierarquizar informações e orientar os efeitos de sentido.",
    reading: "~32 min",
    terms: ["vírgula", "ponto e vírgula", "dois-pontos", "travessão", "parênteses", "colchetes", "reticências", "aspas", "vocativo", "oração adjetiva"],
    context: [
      "Pontuação é o conjunto de sinais gráficos que segmenta o texto, explicita relações sintáticas e semânticas, regula vozes discursivas e produz efeitos expressivos. Sua história acompanha a passagem da leitura oral para práticas de leitura silenciosa e a necessidade de tornar a estrutura escrita mais clara.",
      "As regras combinam sintaxe e intenção discursiva. Alguns usos são obrigatórios, outros facultativos ou estilísticos; mesmo quando duas formas são gramaticais, a escolha pode alterar foco, ritmo ou sentido.",
    ],
    importance: "Relatórios e documentos operacionais exigem clareza e ausência de ambiguidades. Nas provas, pontuação aparece em correção gramatical, reescrita, mudança de sentido e justificativa funcional dos sinais.",
    distinctions: [
      "Vírgula não se explica por “pausa para respirar”, mas por estrutura sintática e organização informativa.",
      "Não se separa sujeito de verbo nem verbo de complemento apenas porque o trecho é longo.",
      "Restritiva sem vírgulas seleciona parte do grupo; explicativa entre vírgulas acrescenta comentário.",
      "Travessão, parênteses e vírgulas podem isolar segmentos, mas produzem graus diferentes de destaque.",
    ],
    groups: [
      {
        title: "Sinais de fechamento e entonação",
        intro: "Ponto, exclamação e interrogação delimitam enunciados e orientam sua modalidade.",
        points: [
          { name: "Ponto final", concept: "Encerra período declarativo e marca segmentação forte; também integra abreviaturas em determinados padrões.", exam: "Substituição por ponto e vírgula ou dois-pontos e efeitos sobre a conexão entre ideias.", trap: "Trocar vírgula entre orações independentes por ponto pode corrigir estrutura, mas reduz a integração discursiva.", example: "A área foi liberada. O relatório seguiu para o comando.", mnemonic: "Ponto fecha a unidade e dá novo fôlego argumentativo." },
          { name: "Ponto de interrogação", concept: "Marca pergunta direta, dúvida ou efeito retórico. Perguntas indiretas normalmente terminam com ponto final.", exam: "Distinguir interrogativa direta de oração interrogativa indireta.", trap: "“O oficial perguntou se havia risco.” não recebe interrogação: trata-se de pergunta indireta.", example: "A equipe já confirmou a identidade? / O comandante perguntou se a identidade fora confirmada.", mnemonic: "Pergunta direta mostra o sinal; indireta incorpora a pergunta." },
          { name: "Ponto de exclamação", concept: "Marca ordem, surpresa, emoção, ênfase ou chamamento, conforme o contexto.", exam: "Efeito expressivo e combinação com interrogação em textos menos formais.", trap: "O sinal não transforma automaticamente a frase em imperativa; a modalidade depende da construção.", example: "Afastem-se da área de risco!", mnemonic: "Exclamação aumenta a intensidade, não define sozinha o sentido." },
        ],
      },
      {
        title: "Vírgula: estrutura da oração",
        intro: "A vírgula separa elementos coordenados, deslocados ou intercalados — nunca blocos sintáticos essenciais sem motivo.",
        points: [
          { name: "Enumeração e coordenação", concept: "Separa termos de mesma função e orações coordenadas assindéticas; pode aparecer antes de conjunções adversativas, conclusivas e explicativas.", exam: "Vírgula antes de “e” quando há sujeitos diferentes, valor adversativo, intercalação ou efeito expressivo.", trap: "Em enumeração simples, normalmente não se põe vírgula antes do último “e”.", example: "A equipe fotografou, catalogou e recolheu os objetos; tentou avançar, mas recuou.", mnemonic: "Mesma função em série: vírgula organiza a fila." },
          { name: "Adjunto adverbial deslocado", concept: "Isola adjunto adverbial antecipado ou intercalado, sobretudo quando longo; com adjunto curto, a vírgula pode ser facultativa.", exam: "Obrigatoriedade relativa ao tamanho, à intercalação e à clareza.", trap: "Na ordem direta, o adjunto final geralmente dispensa vírgula: “A equipe saiu durante a madrugada”.", example: "Durante a madrugada de domingo, a patrulha reforçou a vigilância.", mnemonic: "Circunstância fora do lugar habitual ganha moldura." },
          { name: "Vocativo", concept: "Isola o chamamento em qualquer posição da frase.", exam: "Diferença de sentido entre “Não, comandante” e “Não comandante”.", trap: "O vocativo não é sujeito e deve sempre ser isolado.", example: "Soldados, mantenham a formação. / Mantenham, soldados, a formação.", mnemonic: "Chamou? Isolou." },
          { name: "Aposto explicativo e expressões explicativas", concept: "Isola informação explicativa, retificativa ou exemplificativa: isto é, ou seja, por exemplo, aliás.", exam: "Aposto especificativo sem vírgula versus explicativo com vírgulas.", trap: "Em “o coronel Silva”, Silva especifica e não é isolado; em “Silva, o coronel da unidade,” explica.", example: "A PMPE, força auxiliar e reserva do Exército, integra a segurança pública.", mnemonic: "Explicou sem restringir? Abra e feche a moldura." },
          { name: "Termos intercalados e conjunções deslocadas", concept: "Isola comentários do enunciador e conectores fora da posição inicial, como portanto, contudo e porém.", exam: "Pontuação de “pois” conclusivo e conectores intercalados.", trap: "Conjunção curta não elimina a necessidade de isolamento quando está deslocada.", example: "A operação, segundo o relatório, atingiu o objetivo. A equipe deve, portanto, retornar.", mnemonic: "O que entra no meio sai entre duas vírgulas." },
          { name: "Elipse e zeugma", concept: "A vírgula pode assinalar omissão de termo, sobretudo verbo já expresso.", exam: "Paralelismo em estruturas como “uns fizeram X; outros, Y”.", trap: "A vírgula não substitui aleatoriamente qualquer palavra; a omissão precisa ser recuperável.", example: "A equipe Alfa inspecionou o térreo; a Bravo, o andar superior.", mnemonic: "Na zeugma, a vírgula ocupa o posto do termo dispensado." },
          { name: "Orações subordinadas adverbiais", concept: "Antepostas ou intercaladas, são normalmente isoladas; pospostas podem receber vírgula por clareza ou ênfase, conforme a relação.", exam: "Causal, concessiva, condicional, temporal e outras em posição inicial.", trap: "Não aplique uma regra puramente baseada no conectivo; considere posição e integração.", example: "Embora houvesse risco, a equipe prosseguiu.", mnemonic: "Adverbial antecipada anuncia o cenário e fecha com vírgula." },
          { name: "Orações adjetivas explicativas", concept: "São isoladas por vírgulas porque acrescentam comentário sobre referente já identificado ou totalizado.", exam: "Mudança de abrangência ao retirar ou inserir vírgulas.", trap: "A vírgula pode mudar o sentido: “os agentes que treinaram” ≠ “os agentes, que treinaram”.", example: "Os novos equipamentos, que chegaram ontem, serão distribuídos.", mnemonic: "Explicativa comenta; restritiva recorta." },
          { name: "Proibições essenciais", concept: "Não se separa sujeito de verbo, verbo de complemento, nome de complemento ou oração principal de substantiva encaixada, salvo elemento intercalado.", exam: "Erros provocados por sujeito longo e falsa pausa oral.", trap: "Extensão não autoriza vírgula: “A atuação coordenada das equipes de patrulhamento garantiu a segurança”.", example: "O treinamento contínuo dos novos policiais aumenta a eficiência. (sem vírgula após policiais)", mnemonic: "Não corte as ligações essenciais." },
        ],
      },
      {
        title: "Ponto e vírgula e dois-pontos",
        intro: "Sinais intermediários organizam blocos e anunciam relações explicativas.",
        points: [
          { name: "Ponto e vírgula", concept: "Marca separação maior que a vírgula e menor que o ponto; organiza orações extensas, itens complexos ou partes que já contêm vírgulas.", exam: "Separação de coordenadas adversativas/conclusivas longas e enumerações normativas.", trap: "Não use ponto e vírgula entre oração subordinada substantiva e sua principal.", example: "A equipe Alfa cuidou do perímetro externo; a Bravo, que chegou depois, assumiu o interior.", mnemonic: "Ponto e vírgula separa blocos que ainda marcham juntos." },
          { name: "Dois-pontos", concept: "Anunciam explicação, enumeração, consequência enfática, síntese, citação ou fala.", exam: "Relação prospectiva: o segmento posterior desenvolve algo anunciado antes.", trap: "Evite dois-pontos entre verbo e complemento se não houver elemento antecipador: “adquiriu: rádios e coletes” é inadequado no uso comum.", example: "A ordem era clara: ninguém ultrapassaria o isolamento.", mnemonic: "Dois-pontos abrem a porta para o que vem explicar." },
        ],
      },
      {
        title: "Travessão, parênteses e colchetes",
        intro: "Todos podem inserir informação, mas diferem em voz, destaque e contexto de uso.",
        points: [
          { name: "Travessão", concept: "Introduz fala no discurso direto, separa intervenção do narrador ou isola segmento com destaque maior que vírgulas.", exam: "Pares de travessões e combinação com sinais exigidos pela oração principal.", trap: "Se o trecho intercalado termina antes do fim da frase, o segundo travessão não pode ser esquecido.", example: "A decisão — tomada após a perícia — preservou a segurança da equipe.", mnemonic: "Travessão põe holofote ou troca a voz." },
          { name: "Parênteses", concept: "Isolam comentário secundário, referência, data, sigla ou informação acessória com menor integração ao fluxo principal.", exam: "Diferença de destaque em relação a vírgulas e travessões.", trap: "A pontuação da frase externa permanece quando necessária; o conteúdo parentético não apaga a estrutura principal.", example: "A corporação recebeu novos equipamentos (rádios, coletes e câmeras) em setembro.", mnemonic: "Parênteses falam mais baixo, à margem do fluxo." },
          { name: "Colchetes", concept: "Marcam intervenção dentro de texto já entre parênteses ou inserção editorial em citação, inclusive esclarecimento e omissão com reticências.", exam: "Uso de [sic] e [...] em citações.", trap: "Colchetes indicam que a intervenção não pertencia originalmente ao trecho citado.", example: "O relatório afirma que “eles [os peritos] chegaram às 8h”.", mnemonic: "Colchetes mostram a mão do editor." },
        ],
      },
      {
        title: "Reticências e aspas",
        intro: "Esses sinais gerenciam suspensão, vozes, citações e distanciamento semântico.",
        points: [
          { name: "Reticências", concept: "Indicam interrupção, hesitação, continuidade, suspense, emoção ou omissão; o efeito depende do gênero e do contexto.", exam: "Valor expressivo e diferença entre reticências autorais (...) e supressão editorial [...].", trap: "Não significam sempre dúvida; podem sugerir ameaça, sequência aberta ou fala interrompida.", example: "Se o suspeito avançar... — o comandante interrompeu a instrução para demonstrar o procedimento.", mnemonic: "Reticências deixam o sentido em movimento." },
          { name: "Aspas em citação", concept: "Delimitam citação direta curta, fala incorporada ou título de parte de obra, conforme a convenção editorial.", exam: "Diferença entre discurso direto e indireto e manutenção fiel das palavras citadas.", trap: "Citação indireta não recebe aspas, pois reproduz conteúdo, não palavras exatas.", example: "O manual determina: “preserve o local até a chegada da perícia”.", mnemonic: "Aspas emprestam a voz de outro texto." },
          { name: "Aspas de distanciamento", concept: "Destacam palavra estrangeira, neologismo, uso impróprio, irônico ou expressão mencionada como palavra.", exam: "Efeito de ressalva, ironia ou metalinguagem.", trap: "Aspas não devem ser usadas apenas para dar ênfase neutra; podem sugerir desconfiança.", example: "O informante apresentou um “álibi” que não resistiu à verificação.", mnemonic: "Aspas podem dizer: usei a palavra, mas mantenho distância." },
          { name: "Aspas simples", concept: "Em convenção frequente, aparecem dentro de trecho já entre aspas duplas ou para indicar significado de palavra.", exam: "Hierarquia de citações encaixadas.", trap: "A norma editorial pode variar; preserve consistência no mesmo texto.", example: "O instrutor explicou: “A expressão ‘voz de prisão’ tem efeitos jurídicos específicos”.", mnemonic: "Aspas simples cabem dentro das duplas." },
        ],
      },
    ],
    summary: [
      { item: "Vírgula", rule: "Separa coordenados, deslocados e intercalados", clue: "Não corta ligações essenciais" },
      { item: "Ponto e vírgula", rule: "Organiza blocos complexos relacionados", clue: "Mais que vírgula, menos que ponto" },
      { item: "Dois-pontos", rule: "Anunciam desenvolvimento", clue: "Explicação, lista, síntese ou citação" },
      { item: "Travessão", rule: "Destaca inserção ou muda a voz", clue: "Holofote discursivo" },
      { item: "Parênteses/colchetes", rule: "Comentário lateral/intervenção editorial", clue: "Margem do autor/editor" },
      { item: "Reticências/aspas", rule: "Suspensão/delimitação e distanciamento", clue: "Sentido aberto/voz marcada" },
    ],
    question: { id: 202, banca: "Questão-treino · Estilo Cebraspe", tipo: "ce", enunciado: "No período “Os policiais que concluíram o curso atuarão na operação”, a inserção de vírgulas antes de “que” e depois de “curso” manteria a correção gramatical, mas alteraria o sentido: a oração passaria de restritiva a explicativa e sugeriria que todos os policiais mencionados concluíram o curso.", correct: "C", comentario: "CERTO. Sem vírgulas, a oração “que concluíram o curso” seleciona apenas parte dos policiais. Entre vírgulas, torna-se explicativa e apresenta a conclusão do curso como informação atribuída ao conjunto já identificado. A correção permanece, mas a abrangência muda." },
  },
];
