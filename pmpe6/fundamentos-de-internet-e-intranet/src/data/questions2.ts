import type { Question } from "./questions";

export const QUESTIONS_2: Question[] = [
  {
    id: 1,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "A confidencialidade é o princípio da segurança da informação que garante que os dados estejam sempre disponíveis para os usuários autorizados, mesmo diante de falhas de hardware.",
    correct: "E",
    comentario:
      "ERRADO — troca de conceitos, a mais clássica do tema. Disponibilidade permanente é função do princípio da DISPONIBILIDADE. Confidencialidade = sigilo: só autorizados ACESSAM a informação.",
  },
  {
    id: 2,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Um malware criptografou todos os arquivos do servidor de um órgão público e deixou um bilhete exigindo pagamento em criptomoeda para devolver o acesso. Esse tipo de ataque é conhecido como",
    options: [
      { key: "a", label: "spyware." },
      { key: "b", label: "adware." },
      { key: "c", label: "ransomware." },
      { key: "d", label: "keylogger." },
      { key: "e", label: "hoax." },
    ],
    correct: "c",
    comentario:
      "Letra C. Ransomware = sequestro de dados (ransom = resgate), geralmente por criptografia dos arquivos. Defesa mais eficaz: backups atualizados — e jamais pagar o resgate.",
  },
  {
    id: 3,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "O cavalo de Troia é um tipo de malware que se autorreplica automaticamente através da rede, sem depender de qualquer ação do usuário.",
    correct: "E",
    comentario:
      "ERRADO. Essa é a definição de WORM. O trojan NÃO se replica: ele se disfarça de programa legítimo e precisa que o usuário, enganado, o execute — daí o nome 'presente grego'.",
  },
  {
    id: 4,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Em um sistema de criptografia assimétrica, Maria deseja enviar a José uma mensagem que SOMENTE ele consiga ler. Para cifrar a mensagem, Maria deve utilizar",
    options: [
      { key: "a", label: "a sua própria chave privada." },
      { key: "b", label: "a chave pública de José." },
      { key: "c", label: "a chave privada de José." },
      { key: "d", label: "a sua própria chave pública." },
      { key: "e", label: "uma função hash." },
    ],
    correct: "b",
    comentario:
      "Letra B. Sigilo = cifrar com a chave PÚBLICA do DESTINATÁRIO (qualquer um pode cifrar para José; só a chave PRIVADA dele decifra). Cifrar com a própria privada seria ASSINATURA digital — garante autoria, não sigilo.",
  },
  {
    id: 5,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "No esquema de backup incremental, cada execução copia somente os dados que foram criados ou alterados desde a realização do último backup completo.",
    correct: "E",
    comentario:
      "ERRADO — inversão clássica! Quem usa como referência o último backup COMPLETO é o backup DIFERENCIAL. O incremental copia o que mudou desde o ÚLTIMO BACKUP, de qualquer tipo.",
  },
  {
    id: 6,
    banca: "Estilo FCC · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "Ao trocar o equipamento de um usuário, o setor de TI optou por um dispositivo de armazenamento que NÃO possui partes móveis, oferece alta velocidade de leitura e grande resistência a impactos. Trata-se de um",
    options: [
      { key: "a", label: "HD de 7200 RPM." },
      { key: "b", label: "SSD." },
      { key: "c", label: "DVD-RW." },
      { key: "d", label: "unidade de fita LTO." },
      { key: "e", label: "disquete de alta densidade." },
    ],
    correct: "b",
    comentario:
      "Letra B. SSD = chips de memória flash, sem partes móveis: rápido, silencioso e resistente a choques. O HD ainda é mecânico (discos giratórios + braço), logo mais lento e frágil a impactos.",
  },
  {
    id: 7,
    banca: "Estilo Cebraspe · Certo ou Errado",
    tipo: "ce",
    enunciado:
      "A simples sincronização de uma pasta local com um serviço de armazenamento em nuvem não caracteriza, por si só, um backup, pois a exclusão local de um arquivo poderá ser igualmente refletida na nuvem.",
    correct: "C",
    comentario:
      "CERTO. Sincronização espelha o estado atual: apagou de um lado, some do outro; ransomware cifrou um lado, o desastre sincroniza. Backup exige cópias com VERSÕES preservadas e, idealmente, fora do local (regra 3-2-1).",
  },
  {
    id: 8,
    banca: "Estilo FGV · Múltipla escolha",
    tipo: "multi",
    enunciado:
      "A assinatura digital realizada com base em um certificado ICP-Brasil assegura, principalmente:",
    options: [
      { key: "a", label: "o sigilo do conteúdo do documento assinado." },
      {
        key: "b",
        label: "a autenticidade, a integridade e o não-repúdio do documento.",
      },
      { key: "c", label: "a disponibilidade permanente do documento na nuvem." },
      { key: "d", label: "que o documento não poderá ser alvo de phishing." },
      { key: "e", label: "a confidencialidade da chave pública do signatário." },
    ],
    correct: "b",
    comentario:
      "Letra B. Assinatura digital = hash do documento cifrado com a chave PRIVADA do autor: prova QUEM assinou (autenticidade), que NADA mudou (integridade) e impede a negativa de autoria (não-repúdio). Não confere sigilo ao conteúdo!",
  },
];
