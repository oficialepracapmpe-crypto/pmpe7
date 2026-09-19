import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Hash, Link2, MapPinned, Server } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../components/ui";

/* ---------------- anatomia interativa da URL ---------------- */
interface Segment {
  id: string;
  text: string;
  label: string;
  color: string; // tailwind classes p/ botão
  desc: string;
  trap?: string;
}

const SEGMENTS: (Segment | { sep: string })[] = [
  {
    id: "proto",
    text: "https",
    label: "Protocolo (esquema)",
    color: "bg-emerald-300/[0.12] text-emerald-200 border-emerald-300/40",
    desc: "Define COMO o recurso será acessado. Aqui, https = HTTP com criptografia TLS (a troca de dados vai cifrada). É a primeira informação de qualquer URL.",
    trap: "Banca adora dizer que 'https' indica a velocidade do site ou que significa 'hipertexto seguro brasileiro'. Bobagem: é apenas o ESQUEMA de acesso.",
  },
  { sep: "://" },
  {
    id: "host",
    text: "www.tjba.jus.br",
    label: "Domínio (hospedeiro/host)",
    color: "bg-yellow-300/[0.12] text-yellow-200 border-yellow-300/40",
    desc: "O nome registrado do servidor. Lendo da DIREITA para a esquerda: .br = Brasil (ccTLD); .jus = Poder Judiciário; tjba = o órgão (Tribunal de Justiça da Bahia); www = subdomínio clássico para páginas web.",
    trap: "Domínios revelam a natureza do site: .gov.br (governo federal BR), .edu.br (educação), .jus.br (judiciário), .leg.br (Poder Legislativo), .com (.com.br comercial), .org (organizações sem fins lucrativos).",
  },
  {
    id: "port",
    text: ":443",
    label: "Porta (quase sempre omitida)",
    color: "bg-cyan-300/[0.12] text-cyan-200 border-cyan-300/40",
    desc: "Identifica QUAL serviço do servidor atenderá a requisição. Quando omitida, o navegador usa a porta padrão do protocolo: 80 para HTTP e 443 para HTTPS.",
    trap: "A porta não é 'o número do site' nem tem relação com o ano. É a 'sala' do prédio: o IP/domínio é o endereço, a porta é o cômodo.",
  },
  {
    id: "path",
    text: "/pje/processos/consulta",
    label: "Caminho (path)",
    color: "bg-violet-300/[0.12] text-violet-200 border-violet-300/40",
    desc: "Onde o recurso mora DENTRO do servidor — como pastas em um armário: /pje/processos/consulta indica a página 'consulta' dentro da pasta 'processos', dentro de 'pje'.",
  },
  {
    id: "query",
    text: "?id=12345&fase=2",
    label: "Parâmetros (query string)",
    color: "bg-rose-300/[0.12] text-rose-200 border-rose-300/40",
    desc: "Dados enviados ao servidor no formato chave=valor. Sempre começam com ? e, quando há vários, se separam por &. Aqui o servidor recebe id=12345 e fase=2 (ex.: termos de uma busca).",
    trap: "Questões perguntam 'qual caractere inicia a query string?' → ?. 'Qual separa múltiplos parâmetros?' → &.",
  },
  {
    id: "frag",
    text: "#decisao",
    label: "Fragmento (âncora)",
    color: "bg-blue-300/[0.12] text-blue-200 border-blue-300/40",
    desc: "Aponta para uma SEÇÃO ESPECÍFICA dentro da página (o navegador rola até ela). É processado localmente — nem chega a ser enviado ao servidor.",
  },
];

function UrlAnatomy() {
  const [active, setActive] = useState<string>("host");
  const seg = SEGMENTS.find((s) => "id" in s && s.id === active) as Segment | undefined;

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-6">
        Toque em cada parte da URL para entender
      </p>
      <div className="flex flex-wrap items-center gap-y-3 font-mono text-base sm:text-[21px] leading-none">
        {SEGMENTS.map((s, i) =>
          "sep" in s ? (
            <span key={i} className="px-1 text-zinc-600">
              {s.sep}
            </span>
          ) : (
            <button
              key={s.id}
              onClick={() => setActive(s.id === active ? "" : s.id)}
              className={`px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
                active === s.id
                  ? `${s.color} scale-[1.03]`
                  : "border-transparent text-zinc-300 hover:bg-white/[0.06]"
              }`}
            >
              {s.text}
            </button>
          )
        )}
      </div>

      <AnimatePresence mode="wait">
        {seg && (
          <motion.div
            key={seg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-7 border-t border-white/[0.08] pt-6"
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <span
                className={`w-2.5 h-2.5 rounded-full ${seg.color.split(" ")[0].replace("/[0.12]", "")}`}
              />
              <h4 className="font-display text-xl text-[#f4f1ea]">{seg.label}</h4>
              <code className="font-mono text-[12px] text-zinc-500">{seg.text}</code>
            </div>
            <p className="text-[14.5px] leading-relaxed text-zinc-300 max-w-3xl">{seg.desc}</p>
            {seg.trap && (
              <p className="mt-3 text-[13px] leading-relaxed text-rose-200/90 bg-rose-400/[0.07] border border-rose-400/25 rounded-xl p-4">
                <strong className="text-rose-300">Atenção, banca:</strong> {seg.trap}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- seção ---------------- */
export default function UrlSection() {
  return (
    <SectionShell
      id="url"
      num="07"
      kicker="Endereçamento · como achar tudo na Web"
      title={
        <>
          URL, domínios e <span className="italic text-yellow-300">DNS</span>
        </>
      }
      lead={
        <>
          A <Hot>URL</Hot> (Uniform Resource Locator) é o <Hot>endereço completo</Hot> de um
          recurso na rede — a "Localização Uniforme de Recursos". É o que você digita na barra de
          endereços do navegador: protocolo + domínio + caminho (+ extras).
        </>
      }
    >
      <Reveal>
        <UrlAnatomy />
      </Reveal>

      <Reveal>
        <P>
          Repare no primeiro componente de nosso exemplo:{" "}
          <code className="font-mono text-[13px] text-yellow-200">www.tjba.jus.br</code> é um{" "}
          <Hot>nome de domínio</Hot> — um "apelido" amigável registrado (no Brasil, a terminação{" "}
          <code className="font-mono text-[13px] text-yellow-200">.br</code> é gerida pelo{" "}
          <Hot>Registro.br</Hot>; mundialmente, pela <Hot>ICANN</Hot>). Mas os computadores, na
          verdade, só se localizam por <Hot tone="c">endereços IP</Hot> — números como{" "}
          <code className="font-mono text-[13px] text-cyan-200">200.160.2.3</code>. Quem faz essa
          "tradução" é o próximo personagem.
        </P>
      </Reveal>

      {/* DNS */}
      <Reveal>
        <div className="rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-300/[0.07] to-transparent p-6 sm:p-8 my-6">
          <div className="flex items-center gap-2.5 mb-4">
            <ArrowLeftRight size={18} className="text-cyan-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">
              DNS — a "agenda telefônica" da Internet
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-300 max-w-3xl">
            O <Hot tone="c">DNS (Domain Name System)</Hot> é o serviço que{" "}
            <Hot tone="c">traduz nomes de domínio em endereços IP</Hot> — e vice-versa. Você digita{" "}
            <code className="font-mono text-[13px] text-cyan-200">www.tjba.jus.br</code>; o servidor
            DNS responde o IP correspondente; só então o navegador encontra a máquina certa. Sem
            DNS, teríamos de decorar números para cada site. Porta:{" "}
            <code className="font-mono text-[13px] text-cyan-200">53</code>.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[13px]">
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300">
              www.exemplo.com.br
            </span>
            <ArrowLeftRight size={15} className="text-cyan-300" />
            <span className="px-3 py-1.5 rounded-lg bg-cyan-300/10 border border-cyan-300/30 text-cyan-200">
              192.0.2.1
            </span>
            <span className="text-zinc-500 text-[12px] ml-2">← resolução de nomes</span>
          </div>
          <Callout variant="pegadinha">
            <p>
              DNS <strong className="text-zinc-100">não</strong> é "provedor de Internet",{" "}
              <strong className="text-zinc-100">não</strong> hospeda sites e{" "}
              <strong className="text-zinc-100">não</strong> criptografa nada. Sua única missão:{" "}
              <Hot tone="c">resolver (traduzir) nomes em IPs</Hot>. Item com "DNS garante o sigilo
              das conexões" → <strong className="text-rose-300">ERRADO</strong>.
            </p>
          </Callout>
        </div>
      </Reveal>

      {/* IPv4 x IPv6 */}
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-8">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Server size={19} className="text-yellow-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-yellow-200 mb-2">IPv4</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              <strong className="text-zinc-200">32 bits</strong>, escrito como 4 números de{" "}
              <strong className="text-zinc-200">0 a 255</strong> separados por pontos. Ex.:{" "}
              <code className="font-mono text-[12.5px] text-zinc-200">192.168.0.1</code>. Está se
              esgotando no mundo. Faixas <strong className="text-zinc-200">privadas</strong> (rede
              interna): 10.x.x.x, 172.16–31.x.x e 192.168.x.x.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Server size={19} className="text-cyan-300 mb-3" />
            <h3 className="font-mono text-lg font-bold text-cyan-200 mb-2">IPv6</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              Sucessor com <strong className="text-zinc-200">128 bits</strong>, escrito em
              hexadecimal separado por dois-pontos. Ex.:{" "}
              <code className="font-mono text-[12.5px] text-zinc-200">2001:0db8::1</code>. Nasceu
              para resolver a escassez de endereços do IPv4.
            </p>
          </div>
        </div>
        <Callout variant="prova">
          <p>
            Pergunta recorrente da FGV: "qual é um endereço IPv4 válido?" Elimine qualquer opção com
            bloco <strong className="text-zinc-100">maior que 255</strong> (ex.: 192.168.0.
            <strong className="text-rose-300">300</strong> é inválido!). Outro clássico: colar o
            conceito de <Hot tone="c">DHCP</Hot> — o serviço que{" "}
            <Hot tone="c">atribui IP automaticamente</Hot> às máquinas da rede.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="exemplo">
            <div className="flex items-start gap-3">
              <MapPinned size={16} className="text-cyan-300 mt-1 shrink-0" />
              <p>
                URL completa de verdade:{" "}
                <code className="font-mono text-[12.5px] text-cyan-200 break-all">
                  https://www.google.com/search?q=concursos
                </code>{" "}
                — o parâmetro <code className="font-mono text-[12px]">q=concursos</code> é o termo
                buscado viajando na query string.
              </p>
            </div>
          </Callout>
          <Callout variant="conceito" title="e o hiperlink?">
            <div className="flex items-start gap-3">
              <Link2 size={16} className="text-violet-300 mt-1 shrink-0" />
              <p>
                Hiperlink (ou link) é o <strong className="text-zinc-100">elemento clicável</strong>{" "}
                (texto, imagem, botão) que aponta para uma URL. Um texto cheio de links é um{" "}
                <strong className="text-zinc-100">hipertexto</strong> — a base da Web, escrita em
                HTML.
              </p>
            </div>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Um detalhe fino que pode aparecer em provas mais exigentes: ao clicar numa âncora como{" "}
          <Hash size={13} className="inline text-zinc-500" />{" "}
          <code className="font-mono text-[13px] text-blue-200">#decisao</code>, o navegador apenas{" "}
          <Hot tone="v">rola a página até aquela seção</Hot> — nenhuma nova requisição é enviada ao
          servidor por causa do fragmento.
        </P>
      </Reveal>
    </SectionShell>
  );
}
