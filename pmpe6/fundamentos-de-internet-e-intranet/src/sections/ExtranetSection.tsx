import { Factory, Handshake, LockKeyhole } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

export default function ExtranetSection() {
  return (
    <SectionShell
      id="extranet"
      num="03"
      kicker="Contexto · a ponte controlada"
      title={
        <>
          E a <span className="italic text-emerald-300">Extranet</span>, o que é?
        </>
      }
      lead={
        <>
          A <Hot tone="e">Extranet</Hot> é a <Hot tone="e">extensão controlada da Intranet</Hot>{" "}
          para pessoas <Hot tone="e">externas autorizadas</Hot> — fornecedores, clientes, parceiros,
          filiais. É como abrir uma "janela" específica da rede interna para quem está fora, sempre
          com <Hot tone="e">login e senha</Hot> e, normalmente, por meio de uma{" "}
          <Hot tone="e">VPN</Hot>.
        </>
      }
    >
      <Reveal>
        <Callout variant="conceito" title="definição para gravar">
          <p>
            Extranet é a <strong className="text-zinc-100">parte da Intranet</strong> que é
            deliberadamente <strong className="text-zinc-100">disponibilizada a usuários
            externos</strong>, porém <strong className="text-zinc-100">restrita e
            autenticada</strong>. Não é aberta ao público geral — quem não tem credencial, não
            entra.
          </p>
        </Callout>
      </Reveal>

      {/* diagrama aninhado */}
      <Reveal>
        <div className="my-10 mx-auto max-w-2xl">
          <div className="rounded-[28px] border border-cyan-300/25 bg-cyan-300/[0.04] p-5 sm:p-8 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 mb-4">
              Internet — aberta a todo o mundo
            </p>
            <div className="rounded-[22px] border border-violet-300/30 bg-violet-300/[0.06] p-5 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300 mb-4">
                Intranet — só o público interno
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-[12.5px]">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-zinc-300">
                  Portal interno
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 text-zinc-300">
                  Sistemas de RH
                </div>
                <div className="rounded-xl border border-dashed border-emerald-300/50 bg-emerald-300/[0.1] p-3 text-emerald-200 font-semibold relative">
                  Extranet
                  <span className="block text-[10.5px] font-normal text-emerald-300/80 mt-1">
                    janela p/ externos autorizados
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[12.5px] text-zinc-500">
              A extranet fica na "borda": <span className="text-zinc-300">dentro</span> da intranet,{" "}
              <span className="text-zinc-300">visível</span> a parceiros de fora — mas nunca ao
              público geral.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <P>
          O mecanismo de segurança mais associado à extranet é a <Hot tone="e">VPN (Virtual Private
          Network)</Hot>: um <Hot tone="e">túnel criptografado</Hot> criado sobre a Internet pública
          para que o acesso remoto à intranet aconteça com <Hot tone="e">sigilo e
          autenticidade</Hot>. Quando uma questão falar em "funcionário acessando a intranet de
          casa com segurança", a resposta quase sempre envolve VPN — e o cenário descreve uma
          extranet.
        </P>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          {[
            {
              icon: Factory,
              t: "Fornecedor no estoque",
              d: "O fornecedor consulta o nível de estoque da empresa para repor produtos automaticamente.",
            },
            {
              icon: Handshake,
              t: "Área do parceiro",
              d: "Escritório de advocacia externo acessa os processos dos quais é responsável no sistema do cliente.",
            },
            {
              icon: LockKeyhole,
              t: "Home office seguro",
              d: "Servidor acessa os sistemas internos do órgão de casa, via VPN, com seu login.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-emerald-300/30 transition-colors"
            >
              <c.icon size={19} className="text-emerald-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha">
            <p>
              <em>"A extranet é uma rede pública, acessível a qualquer internauta."</em> →{" "}
              <strong className="text-rose-300">ERRADO!</strong> Ser aberta ao público é a
              definição de <strong className="text-zinc-100">Internet</strong>. A extranet é, por
              essência, <strong className="text-zinc-100">restrita a externos AUTORIZADOS</strong>.
            </p>
          </Callout>
          <Callout variant="macete">
            <p>
              Pense numa casa: a <strong className="text-zinc-100">rua</strong> é a Internet (todos
              passam); a <strong className="text-zinc-100">sala</strong> trancada é a Intranet (só a
              família); a <strong className="text-zinc-100">varanda</strong>, onde você recebe a
              visita de confiança que <em>não</em> entra nos quartos, é a Extranet.
            </p>
          </Callout>
        </div>
      </Reveal>
    </SectionShell>
  );
}
