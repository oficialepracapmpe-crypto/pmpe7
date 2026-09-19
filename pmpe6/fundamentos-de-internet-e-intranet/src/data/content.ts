export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "internet", num: "01", label: "O que é a Internet" },
  { id: "intranet", num: "02", label: "O que é a Intranet" },
  { id: "extranet", num: "03", label: "Extranet, em contexto" },
  { id: "comparativo", num: "04", label: "Internet × Intranet × Extranet" },
  { id: "navegadores", num: "05", label: "Navegadores" },
  { id: "email", num: "06", label: "Correio eletrônico" },
  { id: "url", num: "07", label: "URL, domínios e DNS" },
  { id: "protocolos", num: "08", label: "Protocolos essenciais" },
  { id: "questoes", num: "09", label: "Questões comentadas" },
  { id: "resumo", num: "10", label: "Resumo de revisão" },
];

export const HOT_TERMS = [
  "TCP/IP",
  "HTTP · porta 80",
  "HTTPS · porta 443",
  "FTP · portas 20/21",
  "SMTP (envio)",
  "POP3 · porta 110",
  "IMAP · porta 143",
  "DNS · porta 53",
  "URL = endereço",
  "Cc × Cco",
  "cookies",
  "cache",
  "navegação anônima",
  "Web ≠ Internet",
  "backbone",
  "ISP / provedor",
  "VPN (extranet)",
  "IPv4 × IPv6",
  ".gov.br",
  "hiperlink",
];
