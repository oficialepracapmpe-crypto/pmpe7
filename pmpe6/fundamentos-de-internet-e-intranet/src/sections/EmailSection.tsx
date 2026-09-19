import {
  AtSign,
  Download,
  Forward,
  Inbox,
  MonitorSmartphone,
  Paperclip,
  Reply,
  ReplyAll,
  Send,
  ShieldAlert,
} from "lucide-react";
import { Callout, Hot, Reveal, SectionShell } from "../components/ui";

export default function EmailSection() {
  return (
    <SectionShell
      id="email"
      num="06"
      kicker="Ferramentas · o serviço mais antigo da rede"
      title={
        <>
          Correio eletrônico: <span className="italic text-yellow-300">e-mail sem mistério</span>
        </>
      }
      lead={
        <>
          O e-mail é um serviço de <Hot>troca de mensagens assíncronas</Hot> pela rede — cada
          mensagem fica guardada em uma caixa postal até que o destinatário a leia. Não depende de
          os dois lados estarem online ao mesmo tempo.
        </>
      }
    >
      {/* anatomia do endereço */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
            Anatomia de um endereço de e-mail
          </p>
          <div className="flex flex-wrap items-center justify-center gap-y-4 font-mono text-xl sm:text-3xl">
            <span className="px-4 py-2 rounded-xl bg-cyan-300/[0.12] text-cyan-200 border border-cyan-300/30">
              joao.silva
            </span>
            <span className="px-3 py-2 text-yellow-300 font-bold">@</span>
            <span className="px-4 py-2 rounded-xl bg-emerald-300/[0.12] text-emerald-200 border border-emerald-300/30">
              gmail.com
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6 text-[13px] leading-relaxed">
            <p className="text-zinc-400">
              <span className="text-cyan-300 font-bold">Nome da caixa postal</span> — a identificação
              do usuário dentro daquele serviço.
            </p>
            <p className="text-zinc-400">
              <span className="text-yellow-300 font-bold">
                <AtSign size={13} className="inline -mt-0.5" /> Arroba
              </span>{" "}
              — separa <em>quem</em> recebe de <em>onde</em> está a caixa: lê-se "em" (joao.silva{" "}
              <em>em</em> gmail.com).
            </p>
            <p className="text-zinc-400">
              <span className="text-emerald-300 font-bold">Domínio</span> — o servidor/provedor de
              e-mail responsável pela caixa.
            </p>
          </div>
        </div>
      </Reveal>

      {/* campos */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Os campos do cabeçalho — terreno fértil para pegadinhas
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[640px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-zinc-200 w-[110px]">Campo</th>
                <th className="p-4 font-display text-base text-zinc-200">Função</th>
                <th className="p-4 font-display text-base text-zinc-200 w-[42%]">
                  O que a banca cobra
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/[0.05]">
                <td className="p-4 font-mono font-bold text-cyan-300">Para</td>
                <td className="p-4 text-zinc-300">Destinatário principal da mensagem.</td>
                <td className="p-4 text-zinc-400">
                  Pode conter vários endereços separados por vírgula ou ponto e vírgula.
                </td>
              </tr>
              <tr className="border-t border-white/[0.05] bg-white/[0.015]">
                <td className="p-4 font-mono font-bold text-yellow-300">Cc</td>
                <td className="p-4 text-zinc-300">
                  <strong className="text-zinc-100">Cópia</strong> (carbon copy): recebe a mensagem
                  de forma <strong className="text-zinc-100">visível</strong> a todos.
                </td>
                <td className="p-4 text-zinc-400">
                  Todos os destinatários veem quem está em Cc.
                </td>
              </tr>
              <tr className="border-t border-white/[0.05]">
                <td className="p-4 font-mono font-bold text-rose-300">Cco / Bcc</td>
                <td className="p-4 text-zinc-300">
                  <strong className="text-zinc-100">Cópia oculta</strong> (blind carbon copy):
                  recebe sem que os demais saibam.
                </td>
                <td className="p-4 text-zinc-400">
                  Quem está em Cco <strong className="text-zinc-200">enxerga</strong> Para e Cc —
                  mas ninguém enxerga quem está em Cco. Nem outros Cco!
                </td>
              </tr>
              <tr className="border-t border-white/[0.05] bg-white/[0.015]">
                <td className="p-4 font-mono font-bold text-violet-300">Assunto</td>
                <td className="p-4 text-zinc-300">Título/tema da mensagem (subject).</td>
                <td className="p-4 text-zinc-400">
                  É opcional — mensagem enviada sem assunto não "volta" nem é bloqueada.
                </td>
              </tr>
              <tr className="border-t border-white/[0.05]">
                <td className="p-4 font-mono font-bold text-emerald-300">Anexo</td>
                <td className="p-4 text-zinc-300">
                  Arquivos enviados junto (ícone de clipe <Paperclip size={12} className="inline" />
                  ).
                </td>
                <td className="p-4 text-zinc-400">
                  Limite típico de tamanho (Gmail: 25 MB) e principal vetor de vírus — cuidado com
                  executáveis.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-3 gap-4 my-8">
          {[
            {
              icon: Reply,
              t: "Responder",
              d: "A resposta vai apenas para o REMETENTE original.",
            },
            {
              icon: ReplyAll,
              t: "Responder a todos",
              d: "Vai para o remetente + todos de Para e Cc. Quem estava em Cco NÃO recebe (afinal, ninguém sabia que ele existia).",
            },
            {
              icon: Forward,
              t: "Encaminhar",
              d: "Envia a mensagem (com anexos) a um NOVO destinatário, que não participava da conversa.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-cyan-300/30 transition-colors"
            >
              <c.icon size={19} className="text-cyan-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* protocolos do e-mail */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          A trinca de protocolos do e-mail — decore quem faz o quê
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/[0.06] p-5">
            <Send size={19} className="text-yellow-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-yellow-200">SMTP</h3>
            <p className="text-[13px] leading-relaxed text-zinc-300 mt-1.5">
              <strong className="text-zinc-100">Envia</strong> e-mails: leva a mensagem do seu
              programa até o servidor e entre servidores. Porta clássica 25 (envio: 587).
            </p>
            <p className="mt-3 text-[12px] font-semibold text-yellow-300/90">
              Macete: <em>Sua Mensagem Tá Partindo</em>.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.05] p-5">
            <Download size={19} className="text-cyan-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-cyan-200">POP3</h3>
            <p className="text-[13px] leading-relaxed text-zinc-300 mt-1.5">
              <strong className="text-zinc-100">Baixa</strong> as mensagens do servidor para o
              computador e, por padrão, <strong className="text-zinc-100">apaga do servidor</strong>{" "}
              — leitura offline. Porta 110.
            </p>
            <p className="mt-3 text-[12px] font-semibold text-cyan-300/90">
              Macete: POP3 <em>Puxa</em> (tira do servidor).
            </p>
          </div>
          <div className="rounded-2xl border border-violet-300/25 bg-violet-300/[0.05] p-5">
            <Inbox size={19} className="text-violet-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-violet-200">IMAP</h3>
            <p className="text-[13px] leading-relaxed text-zinc-300 mt-1.5">
              <strong className="text-zinc-100">Mantém</strong> as mensagens no servidor e{" "}
              <strong className="text-zinc-100">sincroniza</strong> pastas — ideal para ler no
              celular e no PC. Porta 143.
            </p>
            <p className="mt-3 text-[12px] font-semibold text-violet-300/90">
              Macete: IMAP &nbsp;=&nbsp; <em>fICA no servidor</em>.
            </p>
          </div>
        </div>
        <Callout variant="pegadinha">
          <p>
            A troca <strong className="text-zinc-100">POP3 ↔ IMAP</strong> é a pegadinha nº 1 de
            e-mail. Lembre: quem <em>"puxa e some do servidor"</em> é o POP3; quem sincroniza
            deixando tudo na nuvem é o IMAP. E nenhum dos dois envia — envio é território do{" "}
            <strong className="text-zinc-100">SMTP</strong>.
          </p>
        </Callout>
      </Reveal>

      {/* webmail x cliente */}
      <Reveal className="mt-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <MonitorSmartphone size={19} className="text-yellow-300 mb-3" />
            <h3 className="text-[15px] font-bold text-zinc-100 mb-2">Webmail</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              E-mail acessado <strong className="text-zinc-200">pelo navegador</strong>, sem
              instalar nada: Gmail, Outlook.com, Yahoo. As mensagens ficam na nuvem e você as lê de
              qualquer lugar.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Inbox size={19} className="text-yellow-300 mb-3" />
            <h3 className="text-[15px] font-bold text-zinc-100 mb-2">Cliente de e-mail</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              <strong className="text-zinc-200">Programa instalado</strong> no computador/celular
              que gerencia contas: Microsoft Outlook, Mozilla Thunderbird, Apple Mail. Usa
              SMTP/POP3/IMAP para conversar com o servidor.
            </p>
          </div>
        </div>
        <Callout variant="prova">
          <p>
            <strong className="text-zinc-100">Spam</strong> = mensagem não solicitada, em massa
            (lixo eletrônico). <strong className="text-zinc-100">Phishing</strong> = e-mail falso
            que <em>imita</em> bancos/órgãos para <Hot tone="r">roubar dados</Hot> — o usuário é
            induzido a clicar em link malicioso. Dica de segurança sempre cobrada: desconfie,
            verifique o remetente real e{" "}
            <strong className="text-zinc-100">não abra anexos inesperados</strong>.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="exemplo">
          <div className="flex items-start gap-3">
            <ShieldAlert size={16} className="text-cyan-300 mt-1 shrink-0" />
            <p>
              Situação de prova: "Maria enviou um ofício Para a chefia, com Cc ao protocolo e Cco ao
              jurídico." Perguntas clássicas: o jurídico <strong className="text-zinc-100">sabe
              que a chefia recebeu</strong> (ele vê Para e Cc), mas a chefia{" "}
              <strong className="text-zinc-100">não sabe</strong> que o jurídico recebeu. Se a
              chefia usar "responder a todos", o jurídico{" "}
              <strong className="text-zinc-100">não</strong> recebe a resposta.
            </p>
          </div>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
