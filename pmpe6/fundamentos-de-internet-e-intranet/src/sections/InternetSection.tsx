import { Cable, Globe, Landmark, Ship, Waypoints } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

export default function InternetSection() {
  return (
    <SectionShell
      id="internet"
      num="01"
      kicker="Fundamentos · o conceito mais cobrado"
      title={
        <>
          O que é a <span className="italic text-yellow-300">Internet</span>?
        </>
      }
      lead={
        <>
          A <Hot>Internet</Hot> é uma <Hot>rede mundial de computadores</Hot> — a famosa{" "}
          <Hot>"rede das redes"</Hot> — formada pela interconexão de milhões de redes públicas e
          privadas que conversam entre si usando o mesmo idioma: o conjunto de protocolos{" "}
          <Hot tone="c">TCP/IP</Hot>.
        </>
      }
    >
      <div className="space-y-2">
        <Reveal>
          <Callout variant="conceito" title="definição para gravar">
            <p>
              Internet é a <strong className="text-zinc-100">infraestrutura física e lógica</strong>{" "}
              (cabos, roteadores, servidores e protocolos) que interliga redes heterogêneas no mundo
              inteiro, permitindo a troca de dados por meio de{" "}
              <strong className="text-zinc-100">comutação por pacotes</strong>. Ela é{" "}
              <strong className="text-zinc-100">descentralizada</strong>: não tem dono nem um órgão
              que a controle por completo.
            </p>
          </Callout>
        </Reveal>

        <Reveal>
          <P>
            Na prática: quando você acessa um site, seu computador quebra a informação em pequenos{" "}
            <Hot tone="c">pacotes</Hot> que viajam por caminhos diferentes — cabos de fibra óptica,
            cabos submarinos, satélites — e são <Hot tone="c">remontados no destino</Hot>. É o
            protocolo <Hot tone="c">TCP</Hot> que garante que nada se perca no caminho, e o{" "}
            <Hot tone="c">IP</Hot> que cuida do endereçamento de cada pacote.
          </P>
        </Reveal>

        {/* pilares */}
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                icon: Waypoints,
                t: "Origem: ARPANET (1969)",
                d: "Criada pela ARPA, agência do Departamento de Defesa dos EUA, para interligar universidades e centros de pesquisa. É a 'avó' da Internet atual. No Brasil, o acesso comercial foi liberado em 1995.",
              },
              {
                icon: Cable,
                t: "Backbone — a espinha dorsal",
                d: "São os links de altíssima capacidade (fibra óptica, cabos submarinos) que formam a 'rodovia principal' por onde trafegam os dados entre continentes e provedores.",
              },
              {
                icon: Ship,
                t: "ISP — Provedor de acesso",
                d: "Empresa que vende a conexão ao usuário final (Vivo, Claro, TIM, Oi...). Atenção: provedor de ACESSO (conecta você) é diferente de provedor de CONTEÚDO (produz o que você vê, como portais de notícia).",
              },
              {
                icon: Landmark,
                t: "Quem 'organiza' a Internet",
                d: "ICANN coordena domínios e endereços IP; IETF padroniza protocolos (TCP/IP, HTTP); W3C padroniza as tecnologias da Web (HTML...). Nenhum deles 'controla' a rede inteira.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] transition-colors"
              >
                <c.icon size={20} className="text-cyan-300 mb-3" />
                <h3 className="text-[15px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
                <p className="text-[13.5px] leading-relaxed text-zinc-400">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* web x internet */}
        <Reveal>
          <div className="rounded-2xl border border-yellow-300/25 bg-gradient-to-br from-yellow-300/[0.08] to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <Globe size={18} className="text-yellow-300" />
              <h3 className="font-display text-xl text-[#f4f1ea]">
                Internet <span className="text-yellow-300">×</span> World Wide Web — a confusão
                campeã
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 text-[14.5px] leading-relaxed">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 mb-2">
                  Internet = infraestrutura
                </p>
                <p className="text-zinc-300">
                  É a rede física global. Sobre ela trafegam <em>todos</em> os serviços: e-mail,
                  transferência de arquivos (FTP), chamadas de voz (VoIP), streaming, jogos online...
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-300 mb-2">
                  Web (WWW) = um serviço da Internet
                </p>
                <p className="text-zinc-300">
                  É o sistema de <Hot>páginas de hipertexto</Hot> interligadas por{" "}
                  <Hot>hiperlinks</Hot>, acessado via navegador com o protocolo{" "}
                  <Hot tone="y">HTTP</Hot>. Criada por <Hot tone="y">Tim Berners-Lee</Hot> no CERN
                  (1989–1991).
                </p>
              </div>
            </div>
            <Callout variant="pegadinha">
              <p>
                A banca afirma: <em>"Internet e World Wide Web são sinônimos."</em> →{" "}
                <strong className="text-rose-300">ERRADO!</strong> A Web é apenas{" "}
                <strong className="text-zinc-100">um dos serviços</strong> que funcionam sobre a
                Internet. Você usa Internet sem usar a Web toda vez que envia um e-mail pelo
                Outlook ou ouve música num app de streaming.
              </p>
            </Callout>
          </div>
        </Reveal>

        <Reveal>
          <Callout variant="prova">
            <p>
              Decore a trinca: <Hot>rede das redes</Hot> · protocolos <Hot tone="c">TCP/IP</Hot> ·{" "}
              <Hot>descentralizada</Hot>. Se a questão disser que a Internet "pertence ao governo
              americano" ou "é administrada por uma única entidade mundial", marque{" "}
              <strong className="text-rose-300">ERRADO</strong> sem medo.
            </p>
          </Callout>
        </Reveal>
      </div>
    </SectionShell>
  );
}
