import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../components/ui";

const CHECKLIST = [
  "Internet = rede das redes, TCP/IP, descentralizada. Web ≠ Internet (Web é um serviço).",
  "Intranet = mesma tecnologia da Internet, mas privada; funciona SEM Internet.",
  "Extranet = pedaço da intranet aberto a EXTERNOS AUTORIZADOS (via VPN).",
  "Navegação anônima só esconde o histórico LOCAL — provedor e sites continuam vendo.",
  "Cookie = texto que guarda preferências; cache = acelera carregamento. Não são vírus.",
  "E-mail: envia com SMTP; recebe com POP3 (baixa/110) ou IMAP (sincroniza/143).",
  "Cco: quem recebe vê Para e Cc; ninguém vê quem está em Cco.",
  "URL = protocolo://domínio:porta/caminho?query#fragmento.",
  "DNS traduz nomes em IP (porta 53). IPv4: 4 blocos de 0 a 255.",
  "Portas: HTTP 80 · HTTPS 443 · FTP 20/21 · SMTP 25/587 · POP3 110 · IMAP 143.",
];

const ERROS = [
  "Afirmar que a Internet tem dono ou um órgão controlador central.",
  "Dizer que intranet precisa de Internet para funcionar.",
  "Chamar extranet de 'rede pública'.",
  "Trocar POP3 por IMAP (ou dizer que SMTP recebe mensagens).",
  "Afirmar que o HTTPS deixa o usuário 'invisível' — ele criptografa, não anonimiza.",
  "Confundir atalhos: Ctrl+Shift+N (Chrome, anônima) × Ctrl+Shift+P (Firefox/Edge).",
];

export default function SummarySection({ onGoPart2 }: { onGoPart2: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="10"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-yellow-300">de véspera</span>
        </>
      }
      lead="Se você tiver apenas cinco minutos antes da prova, leia isto. É a Parte 1 inteira destilada em duas listas."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5">
              <CheckCircle2 size={14} /> Afirmações que costumam ser CERTAS
            </p>
            <ul className="space-y-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-zinc-300">
                  <CheckCircle2 size={16} className="text-emerald-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
              <XCircle size={14} /> Afirmações que são quase sempre ERRADAS
            </p>
            <ul className="space-y-3.5">
              {ERROS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-zinc-300">
                  <XCircle size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* próximas partes */}
      <Reveal className="mt-14">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Esta foi a Parte 1. Continue a série:</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <button
              onClick={onGoPart2}
              className="group text-left rounded-xl border border-yellow-300/40 bg-yellow-300/[0.07] p-5 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 group-hover:text-[#0a0910] mb-2">
                Parte 2 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                Segurança da informação (malwares, criptografia, phishing) + armazenamento e backup
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-yellow-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                Parte 3 · disponível no menu acima
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-500">
                Sistemas operacionais e arquivos + TODOS os atalhos do Windows
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                Parte 4 · em breve
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-500">
                Pacotes de escritório: Word, Writer, Excel e Calc
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
