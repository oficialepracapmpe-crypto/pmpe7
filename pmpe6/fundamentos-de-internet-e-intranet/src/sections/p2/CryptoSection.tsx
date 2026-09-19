import {
  ArrowRight,
  BadgeCheck,
  Cake,
  FileLock,
  Fingerprint,
  Hash,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
  Unlock,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

/* ------- explicador interativo: sigilo × assinatura ------- */
const SCENARIOS = {
  sigilo: {
    label: "Quero SIGILO",
    objetivo:
      "Maria quer mandar uma mensagem secreta para José, e só ele poderá lê-la.",
    steps: [
      { icon: UserRound, txt: "Maria escreve a mensagem" },
      { icon: KeyRound, txt: "Cifra com a CHAVE PÚBLICA de José" },
      { icon: Mail, txt: "A mensagem viaja cifrada (ilegível para terceiros)" },
      { icon: Unlock, txt: "Só a CHAVE PRIVADA de José a decifra" },
    ],
    garante: ["Confidencialidade (sigilo)"],
    alerta:
      "Gabarito da banca: sigilo = cifrar com a chave PÚBLICA do DESTINATÁRIO. Qualquer um pode cifrar para José; só José abre.",
  },
  assinatura: {
    label: "Quero ASSINAR",
    objetivo:
      "Maria quer provar que o documento é dela e que ninguém o alterou.",
    steps: [
      { icon: Cake, txt: "Gera-se o HASH do documento (impressão digital única)" },
      { icon: KeyRound, txt: "Maria cifra o hash com sua própria CHAVE PRIVADA" },
      { icon: FileLock, txt: "Documento + hash cifrado = assinatura digital" },
      { icon: BadgeCheck, txt: "Todos verificam com a CHAVE PÚBLICA de Maria e recalculam o hash" },
    ],
    garante: ["Autenticidade", "Integridade", "Não-repúdio"],
    alerta:
      "Atenção: a assinatura digital NÃO garante sigilo — o conteúdo do documento continua legível para qualquer um.",
  },
} as const;

type ScenarioKey = keyof typeof SCENARIOS;

function KeyExplainer() {
  const [sc, setSc] = useState<ScenarioKey>("sigilo");
  const S = SCENARIOS[sc];
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-5">
        Demonstração interativa — qual chave usar?
      </p>
      <div className="flex flex-wrap gap-2.5 mb-6">
        {(Object.keys(SCENARIOS) as ScenarioKey[]).map((k) => (
          <button
            key={k}
            onClick={() => setSc(k)}
            className={`rounded-full px-5 py-2.5 text-[13px] font-bold cursor-pointer transition-colors ${
              sc === k
                ? "bg-yellow-300 text-[#0a0910]"
                : "border border-white/15 text-zinc-300 hover:border-yellow-300/50"
            }`}
          >
            {SCENARIOS[k].label}
          </button>
        ))}
      </div>
      <p className="text-[14.5px] text-zinc-400 italic mb-6">{S.objetivo}</p>

      <div className="grid sm:grid-cols-4 gap-3">
        {S.steps.map((s, i) => (
          <div key={`${sc}-${i}`} className="relative">
            <div className="h-full rounded-xl border border-white/[0.09] bg-[#0d0c14] p-4">
              <s.icon size={18} className="text-yellow-300 mb-2.5" />
              <p className="text-[12.5px] leading-relaxed text-zinc-300">{s.txt}</p>
              <p className="absolute top-3 right-3 font-mono text-[10px] text-zinc-600">{i + 1}</p>
            </div>
            {i < 3 && (
              <ArrowRight
                size={14}
                className="hidden sm:block absolute top-1/2 -right-[13px] -translate-y-1/2 text-zinc-600 z-10"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {S.garante.map((g) => (
          <span
            key={g}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-200 border border-emerald-300/30 bg-emerald-300/[0.08] rounded-full px-3 py-1.5"
          >
            <ShieldCheck size={12} /> Garante: {g}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-rose-200/90 bg-rose-400/[0.07] border border-rose-400/25 rounded-xl p-4">
        <strong className="text-rose-300">Decore:</strong> {S.alerta}
      </p>
    </div>
  );
}

export default function CryptoSection() {
  return (
    <SectionShell
      id="criptografia"
      num="04"
      kicker="Módulo A · o capítulo favorito da FGV"
      title={
        <>
          <span className="italic text-rose-300">Criptografia</span>, hash e assinatura digital
        </>
      }
      lead={
        <>
          Criptografia é a técnica de <Hot>embaralhar dados</Hot> com uma chave, tornando-os
          ilegíveis para quem não tiver a chave certa. É o principal mecanismo de{" "}
          <Hot>confidencialidade</Hot> — e o assunto que mais reprova candidato por causa da troca
          entre chaves.
        </>
      }
    >
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.05] p-6">
            <KeyRound size={20} className="text-cyan-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-2">
              Simétrica — <span className="text-cyan-300">1 chave</span>
            </h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-300">
              A <strong className="text-zinc-100">mesma chave</strong> cifra e decifra.{" "}
              <strong className="text-zinc-100">Rápida</strong>, ideal para grandes volumes (ex.:
              algoritmo AES). Ponto fraco: como entregar a chave secreta ao destinatário sem que
              ninguém a intercepte?
            </p>
          </div>
          <div className="rounded-2xl border border-violet-300/25 bg-violet-300/[0.05] p-6">
            <div className="flex gap-2 mb-3">
              <KeyRound size={20} className="text-violet-300" />
              <KeyRound size={20} className="text-yellow-300" />
            </div>
            <h3 className="font-display text-xl text-[#f4f1ea] mb-2">
              Assimétrica — <span className="text-violet-300">par de chaves</span>
            </h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-300">
              Cada pessoa tem uma <strong className="text-yellow-200">chave PÚBLICA</strong> (livre,
              distribuída) e uma <strong className="text-violet-200">chave PRIVADA</strong>{" "}
              (secreta, só sua). O que uma cifra, <strong className="text-zinc-100">somente a
              parceira</strong> decifra. Mais lenta, mas resolve a distribuição de chaves.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <KeyExplainer />
      </Reveal>

      {/* hash + certificado */}
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Hash size={20} className="text-yellow-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-2">Função Hash</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              Algoritmo de <strong className="text-zinc-200">mão única</strong> (MD5, SHA-1,
              SHA-256) que gera um resumo fixo — a "impressão digital" do arquivo. Mudou{" "}
              <strong className="text-zinc-200">1 bit</strong>, muda o hash inteiro. Serve para
              garantir <strong className="text-zinc-200">integridade</strong>.{" "}
              <strong className="text-zinc-200">Não existe "descriptografar hash"</strong> — ele não
              é reversível.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
            <Fingerprint size={20} className="text-yellow-300 mb-3" />
            <h3 className="font-display text-xl text-[#f4f1ea] mb-2">Certificado digital</h3>
            <p className="text-[13.5px] leading-relaxed text-zinc-400">
              Documento eletrônico que <strong className="text-zinc-200">vincula uma chave pública a
              uma identidade</strong> (pessoa/empresa/site), emitido por uma{" "}
              <strong className="text-zinc-200">Autoridade Certificadora (AC)</strong>. No Brasil, a
              infraestrutura oficial é a <strong className="text-zinc-200">ICP-Brasil</strong>. É o
              que sustenta o cadeado do HTTPS e a assinatura com validade jurídica.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha" title="a troca de chaves favorita">
            <p>
              <em>"Para assinar digitalmente, o remetente cifra a mensagem com a chave PÚBLICA do
              destinatário."</em> → <strong className="text-rose-300">ERRADO!</strong> Isso
              descreve <strong className="text-zinc-100">SIGILO</strong>. Assinatura é com a{" "}
              <strong className="text-zinc-100">chave PRIVADA do próprio remetente</strong> (sobre o
              hash) — e não garante confidencialidade.
            </p>
          </Callout>
          <Callout variant="macete" title="regra do cadeado e da caneta">
            <p>
              <strong className="text-zinc-100">
                <Lock size={13} className="inline -mt-0.5" /> Sigilo:
              </strong>{" "}
              cifro com a chave <strong className="text-yellow-300">pública DELE</strong> (só a
              privada dele abre).{" "}
              <strong className="text-zinc-100">
                <Fingerprint size={13} className="inline -mt-0.5" /> Assinatura:
              </strong>{" "}
              "carimbo" com a <strong className="text-violet-300">MINHA privada</strong> (todos
              conferem com a minha pública). Privada é assinatura minha; pública é envelope para
              outros me escreverem segredos.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova">
          <p>
            Conexão com a Parte 1: o <Hot tone="y">HTTPS</Hot> usa criptografia{" "}
            <Hot tone="c">híbrida</Hot> — assimétrica no aperto de mãos inicial (validando o{" "}
            <Hot tone="c">certificado digital</Hot> do site) para combinar uma chave{" "}
            <Hot tone="c">simétrica</Hot> de sessão, que cifra o restante do tráfego com velocidade.
            E a <Hot tone="c">VPN</Hot> cria um túnel criptografado sobre a rede pública — lembra
            da extranet?
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
