export type QuestionType = "ce" | "multi";

export interface Question {
  id: number;
  banca: string;
  tipo: QuestionType;
  enunciado: string;
  options?: { key: string; label: string }[];
  correct: string; // "C" | "E" | "a"..."e"
  comentario: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "A World Wide Web (WWW) e a Internet são termos sinônimos, uma vez que ambos designam a infraestrutura física mundial de redes interligadas.",
    correct: "E",
    comentario:
      "ERRADO. A Internet é a infraestrutura (a rede física); a Web é apenas UM dos serviços que funcionam sobre ela — o sistema de páginas de hipertexto acessado via HTTP. E-mail, FTP, VoIP e streaming também são serviços da Internet distintos da Web.",
  },
  {
    id: 2,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "A intranet de uma organização é capaz de operar normalmente mesmo que a rede local dessa organização esteja completamente desconectada da Internet.",
    correct: "C",
    comentario:
      "CERTO. A intranet roda sobre a rede interna (LAN) com a pilha TCP/IP. A conexão com a Internet é opcional — comum, mas não necessária. Gabe clássico que derruba quem associa intranet à existência da Internet.",
  },
  {
    id: 3,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "No Google Chrome, o modo de navegação anônima (Ctrl + Shift + N) caracteriza-se por IMPEDIR que",
    options: [
      { key: "a", label: "o provedor de acesso à Internet identifique os sites visitados." },
      { key: "b", label: "os sites visitados obtenham o endereço IP do usuário." },
      { key: "c", label: "o administrador da rede da empresa monitore a navegação do funcionário." },
      {
        key: "d",
        label:
          "o histórico de navegação, os cookies e os dados de formulários sejam gravados no computador após o fechamento da janela.",
      },
      { key: "e", label: "o usuário seja identificado durante o acesso a sites de compras." },
    ],
    correct: "d",
    comentario:
      "Letra D. A navegação anônima só evita a gravação LOCAL de histórico, cookies e formulários. Provedor, sites visitados e administrador da rede continuam enxergando a navegação — as alternativas A, B, C e E descrevem exatamente o que ela NÃO faz.",
  },
  {
    id: 4,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Uma servidora redigiu uma mensagem em seu cliente de correio eletrônico e clicou em 'Enviar'. Nesse processo, o protocolo responsável por transportar a mensagem do programa até o servidor de e-mails é o",
    options: [
      { key: "a", label: "POP3." },
      { key: "b", label: "IMAP." },
      { key: "c", label: "SMTP." },
      { key: "d", label: "HTTP." },
      { key: "e", label: "FTP." },
    ],
    correct: "c",
    comentario:
      "Letra C. SMTP = envio (Sua Mensagem Tá Partindo). POP3 e IMAP são protocolos de RECEBIMENTO; HTTP é o protocolo da Web; FTP transfere arquivos.",
  },
  {
    id: 5,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "Um usuário que recebe uma mensagem por ter sido incluído no campo Cco (cópia oculta) é capaz de identificar os endereços constantes nos campos Para e Cc dessa mensagem.",
    correct: "C",
    comentario:
      "CERTO. Quem está em Cco recebe a mensagem completa e VÊ os destinatários de Para e Cc — a ocultação é unidirecional: ninguém (nem outros Cco) sabe que o destinatário em cópia oculta existe.",
  },
  {
    id: 6,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Considere a URL: https://www.exemplo.gov.br/servicos/consulta?id=12345#resultado. Nesse endereço, o trecho que representa um fragmento (âncora), interpretado localmente pelo navegador sem nova requisição ao servidor, é",
    options: [
      { key: "a", label: "https" },
      { key: "b", label: "www.exemplo.gov.br" },
      { key: "c", label: "/servicos/consulta" },
      { key: "d", label: "?id=12345" },
      { key: "e", label: "#resultado" },
    ],
    correct: "e",
    comentario:
      "Letra E. A âncora/fragmento vem depois do # e aponta para uma seção interna da página. Relembrando: https = protocolo; domínio = host; /servicos/consulta = caminho; ?id=12345 = query string.",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O protocolo HTTPS, por ser voltado à transferência segura de hipertexto, utiliza por padrão a porta 443 e exige que o servidor possua um certificado digital para estabelecer o canal criptografado.",
    correct: "C",
    comentario:
      "CERTO. HTTPS = HTTP sobre TLS/SSL, porta padrão 443, com certificado digital validando a identidade do servidor. (Se a questão trocasse 443 por 80, estaria errada — 80 é a porta do HTTP simples.)",
  },
  {
    id: 8,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado: "Assinale a alternativa que apresenta um endereço IPv4 válido:",
    options: [
      { key: "a", label: "192.168.0.300" },
      { key: "b", label: "10.0.0.1" },
      { key: "c", label: "256.10.1.1" },
      { key: "d", label: "172.300.16.8" },
      { key: "e", label: "192.168.1.256" },
    ],
    correct: "b",
    comentario:
      "Letra B. No IPv4, cada bloco (octeto) vai de 0 a 255. Todas as demais alternativas têm bloco maior que 255 (300 ou 256) — logo, inválidas. 10.0.0.1 ainda é um IP de faixa PRIVADA, típico de redes locais.",
  },
];
