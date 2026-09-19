import { Building2, KeyRound, Server, ShieldCheck, Users } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

export default function IntranetSection() {
  return (
    <SectionShell
      id="intranet"
      num="02"
      kicker="Fundamentos · a rede privada"
      title={
        <>
          O que é a <span className="italic text-violet-300">Intranet</span>?
        </>
      }
      lead={
        <>
          A <Hot tone="v">Intranet</Hot> é uma <Hot tone="v">rede privada</Hot> — de uma empresa,
          órgão público ou instituição — que utiliza <Hot tone="v">as mesmas tecnologias e
          protocolos da Internet</Hot> (TCP/IP, navegadores, páginas web, e-mail), mas com acesso{" "}
          <Hot tone="v">restrito ao público interno</Hot>, como funcionários e colaboradores.
        </>
      }
    >
      <Reveal>
        <Callout variant="conceito" title="definição para gravar">
          <p>
            Intranet é a <strong className="text-zinc-100">"Internet particular" de uma
            organização</strong>: mesma tecnologia, mesmo jeito de usar (abre no navegador, tem
            páginas e links), porém <strong className="text-zinc-100">protegida</strong> — em
            geral por <strong className="text-zinc-100">firewall</strong> — e exigindo{" "}
            <strong className="text-zinc-100">autenticação</strong> (login e senha) dos usuários
            autorizados.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Pense na intranet de um Tribunal: lá dentro circulam o portal interno de notícias, o
          sistema de processos, o holerite digital, o mural de comunicados e a agenda do órgão.
          Tudo isso funciona com páginas web e links — como na Internet —, mas{" "}
          <Hot tone="v">ninguém de fora acessa</Hot>. E mais: por padrão, a intranet{" "}
          <Hot tone="v">funciona mesmo sem conexão com a Internet</Hot>, pois ela roda sobre a rede
          local (LAN) da organização.
        </P>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {[
            {
              icon: Building2,
              t: "Privada e corporativa",
              d: "Pertence a uma organização. Só existe 'dentro' dela (rede local).",
            },
            {
              icon: KeyRound,
              t: "Acesso restrito",
              d: "Exige autenticação. Cada servidor/estagiário tem suas credenciais e permissões.",
            },
            {
              icon: ShieldCheck,
              t: "Protegida por firewall",
              d: "Barreira de segurança que filtra o tráfego entre a rede interna e o mundo externo.",
            },
            {
              icon: Server,
              t: "Serviços internos",
              d: "Portal corporativo, sistemas de RH, intranet de projetos, compartilhamento de arquivos.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-violet-300/30 transition-colors"
            >
              <c.icon size={19} className="text-violet-300 mb-3" />
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
              <em>"A intranet só funciona quando a empresa está conectada à Internet."</em> →{" "}
              <strong className="text-rose-300">ERRADO!</strong> A intranet opera{" "}
              <strong className="text-zinc-100">independentemente da Internet</strong>. Ela{" "}
              <em>pode</em> estar conectada à rede mundial (e geralmente está), mas isso não é
              requisito.
            </p>
          </Callout>
          <Callout variant="prova">
            <p>
              O examinador adora dizer que intranet "usa protocolos próprios e exclusivos".{" "}
              <strong className="text-rose-300">ERRADO!</strong> O grande trunfo da intranet é usar
              a <strong className="text-zinc-100">mesma pilha TCP/IP e as mesmas ferramentas</strong>{" "}
              da Internet — o que muda é <em>quem</em> pode acessar.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="exemplo">
          <div className="flex items-start gap-3">
            <Users size={16} className="text-cyan-300 mt-1 shrink-0" />
            <p>
              Você é técnico judiciário. De manhã, abre o navegador e acessa{" "}
              <code className="font-mono text-cyan-200 text-[13px]">
                https://portal.interno.tjba.jus.br
              </code>{" "}
              para ler um comunicado da presidência. O endereço existe e funciona{" "}
              <strong className="text-zinc-100">somente na rede do Tribunal</strong>: em casa, pelo
              seu provedor, aquela página simplesmente não abre. Isso é intranet.
            </p>
          </div>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
