import { FileUp, Gauge, Layers, Lock, Medal, ShieldCheck, Unplug } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

const PROTOCOLS = [
  {
    n: "HTTP",
    porta: "80",
    faz: "Transferência de hipertexto — páginas da Web",
    prova: "É 'stateless': não guarda memória entre requisições (por isso existem cookies).",
    hot: true,
  },
  {
    n: "HTTPS",
    porta: "443",
    faz: "HTTP + criptografia TLS/SSL e certificado digital",
    prova: "O cadeado garante tráfego CIFRADO, não que o site seja honesto — phishing também pode ter cadeado!",
    hot: true,
  },
  {
    n: "FTP",
    porta: "20 / 21",
    faz: "Transferência de arquivos (upload/download)",
    prova: "Porta 21 = controle (comandos); porta 20 = dados (o arquivo em si).",
    hot: true,
  },
  {
    n: "SMTP",
    porta: "25 / 587",
    faz: "ENVIO de e-mails",
    prova: "Só envia. Quem recebe é POP3 ou IMAP.",
    hot: true,
  },
  {
    n: "POP3",
    porta: "110",
    faz: "Recebimento de e-mail — baixa e (por padrão) apaga do servidor",
    prova: "Leitura offline; cuidado ao usar em 2 dispositivos.",
    hot: true,
  },
  {
    n: "IMAP",
    porta: "143",
    faz: "Recebimento de e-mail — mantém no servidor e sincroniza pastas",
    prova: "Ideal para celular + PC simultâneos.",
    hot: false,
  },
  {
    n: "DNS",
    porta: "53",
    faz: "Tradução de nomes de domínio em endereços IP",
    prova: "Não hospeda sites; apenas 'resolve' nomes.",
    hot: false,
  },
  {
    n: "DHCP",
    porta: "67 / 68",
    faz: "Atribuição automática de configurações IP",
    prova: "Dispensa configurar IP manualmente em cada máquina.",
    hot: false,
  },
  {
    n: "SSH",
    porta: "22",
    faz: "Acesso remoto seguro (criptografado) a outro computador",
    prova: "Substituto seguro do Telnet (porta 23, sem criptografia).",
    hot: false,
  },
];

export default function ProtocolsSection() {
  return (
    <SectionShell
      id="protocolos"
      num="08"
      kicker="A gramática da rede · o coração da disciplina"
      title={
        <>
          Protocolos <span className="italic text-yellow-300">essenciais</span>
        </>
      }
      lead={
        <>
          Protocolo é um <Hot>conjunto de regras</Hot> que padroniza como duas máquinas conversam.
          Na Internet, todos pertencem à grande família <Hot tone="c">TCP/IP</Hot> — e cada serviço
          tem o seu: Web, e-mail, arquivos...
        </>
      }
    >
      {/* TCP/IP */}
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/[0.06] p-6">
            <Gauge size={19} className="text-yellow-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-yellow-200 mb-2">
              TCP <span className="text-zinc-500 font-sans text-sm">· Transporte</span>
            </h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-300">
              <strong className="text-zinc-100">Confiável e orientado à conexão</strong>: divide a
              mensagem em pacotes, numera tudo, confirma recebimento e retransmite o que se perdeu.
              Garante <strong className="text-zinc-100">entrega completa e em ordem</strong>.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.05] p-6">
            <Layers size={19} className="text-cyan-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-cyan-200 mb-2">
              IP <span className="text-zinc-500 font-sans text-sm">· Rede/Internet</span>
            </h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-300">
              <strong className="text-zinc-100">Endereça e roteia</strong> os pacotes até o destino.
              Não promete nada: o IP sozinho{" "}
              <strong className="text-zinc-100">não garante entrega</strong> — quem confere o
              serviço é o TCP.
            </p>
          </div>
        </div>
        <Callout variant="exemplo">
          <p>
            E o <strong className="text-zinc-100">UDP</strong>? Irmão "apressado" do TCP:{" "}
            <strong className="text-zinc-100">rápido, mas sem garantias</strong> — não confirma nem
            reenvia pacotes. Perfeito onde perder um pacote não estraga nada, mas atraso estraga:{" "}
            <Hot tone="e">streaming ao vivo</Hot>, <Hot tone="e">ligações VoIP</Hot> e{" "}
            <Hot tone="e">jogos online</Hot> (e o DNS!).
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          A pilha TCP/IP é organizada em <Hot>4 camadas</Hot>, que a Cebraspe costuma pedir em
          ordem: <Hot tone="c">Aplicação</Hot> (programas e serviços: HTTP, SMTP...) →{" "}
          <Hot tone="c">Transporte</Hot> (TCP/UDP) → <Hot tone="c">Internet/Rede</Hot> (IP) →{" "}
          <Hot tone="c">Enlace/Acesso à rede</Hot> (placa de rede, cabo, Wi-Fi). Os protocolos da
          tabela abaixo moram todos na camada de Aplicação.
        </P>
      </Reveal>

      {/* tabela */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Tabela-mestra — protocolo, porta e função
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[720px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-zinc-200">Protocolo</th>
                <th className="p-4 font-display text-base text-zinc-200 w-[110px]">Porta</th>
                <th className="p-4 font-display text-base text-zinc-200">O que faz</th>
                <th className="p-4 font-display text-base text-zinc-200 w-[34%]">Cai na prova</th>
              </tr>
            </thead>
            <tbody>
              {PROTOCOLS.map((p, i) => (
                <tr
                  key={p.n}
                  className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}
                >
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="font-mono font-bold text-yellow-200">{p.n}</span>
                      {p.hot && (
                        <Medal size={12} className="text-yellow-400" aria-label="muito cobrado" />
                      )}
                    </span>
                  </td>
                  <td className="p-4">
                    <kbd className="font-mono text-[11.5px] font-semibold text-cyan-200 border border-cyan-300/25 bg-cyan-300/[0.07] rounded-md px-2 py-1">
                      {p.porta}
                    </kbd>
                  </td>
                  <td className="p-4 text-zinc-300">{p.faz}</td>
                  <td className="p-4 text-zinc-400 text-[13px]">{p.prova}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* aprofundamento http */}
      <Reveal className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
          <Lock size={19} className="text-emerald-300 mb-3" />
          <h3 className="text-[15px] font-bold text-zinc-100 mb-2">HTTPS na prática</h3>
          <p className="text-[13.5px] leading-relaxed text-zinc-400">
            Ao acessar seu banco, o navegador e o servidor criam um canal{" "}
            <strong className="text-zinc-200">criptografado com TLS</strong> (sucessor do SSL),
            validado por <strong className="text-zinc-200">certificado digital</strong>. O cadeado
            na barra de endereço indica <strong className="text-zinc-200">sigilo do tráfego</strong>{" "}
            — ninguém "lê" os dados no caminho.
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
          <FileUp size={19} className="text-yellow-300 mb-3" />
          <h3 className="text-[15px] font-bold text-zinc-100 mb-2">HTTP em detalhe</h3>
          <p className="text-[13.5px] leading-relaxed text-zinc-400">
            Funciona por <strong className="text-zinc-200">requisição/resposta</strong>: o navegador
            pede (métodos <strong className="text-zinc-200">GET</strong> para buscar e{" "}
            <strong className="text-zinc-200">POST</strong> para enviar dados) e o servidor
            responde com a página + um código de status (o famoso{" "}
            <strong className="text-zinc-200">404</strong> = página não encontrada).
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Callout variant="pegadinha">
            <div className="flex items-start gap-3">
              <Unplug size={16} className="text-rose-300 mt-1 shrink-0" />
              <p>
                <em>"O HTTP mantém o estado da conexão entre uma página e outra."</em> →{" "}
                <strong className="text-rose-300">ERRADO!</strong> O HTTP é{" "}
                <strong className="text-zinc-100">stateless</strong> (sem estado): cada requisição é
                independente. Quem "lembra" sua sessão/carrinho são os{" "}
                <strong className="text-zinc-100">cookies</strong>.
              </p>
            </div>
          </Callout>
          <Callout variant="macete">
            <div className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-emerald-300 mt-1 shrink-0" />
              <p>
                Portas mais cobradas, em verso: <strong className="text-zinc-100">80 é o HTTP,
                443 é seguro (S), 21 FTP manda arquivo, 25 o SMTP envia, 110 POP3 puxa, 143 o IMAP
                guarda, 53 o DNS traduz.</strong>
              </p>
            </div>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="resumo da ópera">
          <p>
            Serviço × protocolo é questão certa: <Hot>Www → HTTP(S)</Hot>{" "}
            <Hot>Arquivos → FTP</Hot> <Hot>E-mail → SMTP (envio) + POP3/IMAP (recebimento)</Hot>{" "}
            <Hot>Nomes → DNS</Hot>. Se aparecer "SMTP recebe mensagens" ou "FTP envia e-mails",
            marque <strong className="text-rose-300">ERRADO</strong> e vá para a próxima com um
            sorriso.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
