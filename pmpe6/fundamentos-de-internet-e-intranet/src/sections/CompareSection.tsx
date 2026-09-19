import { motion } from "framer-motion";
import { ArrowRight, CircleHelp, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Callout, Reveal, SectionShell } from "../components/ui";

const ROWS: { label: string; inet: string; intra: string; extra: string }[] = [
  {
    label: "Natureza",
    inet: "Rede pública e mundial",
    intra: "Rede privada, de uma organização",
    extra: "Recorte da intranet aberto a externos",
  },
  {
    label: "Quem acessa",
    inet: "Qualquer pessoa",
    intra: "Somente o público interno (funcionários)",
    extra: "Parceiros externos autorizados (clientes, fornecedores)",
  },
  {
    label: "Autenticação",
    inet: "Em geral, dispensa login",
    intra: "Exige credenciais internas",
    extra: "Exige credenciais — geralmente via VPN",
  },
  {
    label: "Tecnologia",
    inet: "TCP/IP, HTTP, DNS...",
    intra: "As MESMAS da Internet",
    extra: "As MESMAS da Internet",
  },
  {
    label: "Segurança",
    inet: "Tráfego aberto por padrão",
    intra: "Firewall + políticas internas",
    extra: "Firewall + criptografia (VPN)",
  },
  {
    label: "Exemplo clássico",
    inet: "Sites de notícias, redes sociais",
    intra: "Portal interno do Tribunal",
    extra: "Fornecedor consultando o estoque",
  },
];

const FLASH = [
  {
    q: "Portal com o cardápio do RU que qualquer cidadão consulta pelo celular.",
    a: "Internet",
    tone: "text-cyan-300 border-cyan-300/40 bg-cyan-300/10",
  },
  {
    q: "Sistema de ponto eletrônico que só abre na rede do órgão, com login de servidor.",
    a: "Intranet",
    tone: "text-violet-300 border-violet-300/40 bg-violet-300/10",
  },
  {
    q: "Transportadora acessa o módulo de entregas do sistema da loja, via VPN.",
    a: "Extranet",
    tone: "text-emerald-300 border-emerald-300/40 bg-emerald-300/10",
  },
];

function Flashcard({ q, a, tone }: { q: string; a: string; tone: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className={`relative w-full text-left rounded-2xl border p-5 min-h-[132px] transition-all duration-300 cursor-pointer ${
        flipped ? tone : "border-white/[0.09] bg-white/[0.025] hover:border-white/25"
      }`}
    >
      <motion.div
        key={flipped ? "a" : "q"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {!flipped ? (
          <>
            <span className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-2">
              <CircleHelp size={13} /> É Internet, Intranet ou Extranet?
            </span>
            <p className="text-[14px] leading-relaxed text-zinc-300">{q}</p>
          </>
        ) : (
          <>
            <span className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] opacity-80 mb-2">
              <ArrowRight size={13} /> Resposta
            </span>
            <p className="font-display text-2xl font-semibold">{a}</p>
          </>
        )}
      </motion.div>
      <RotateCcw
        size={13}
        className="absolute bottom-4 right-4 opacity-40"
      />
    </button>
  );
}

export default function CompareSection() {
  return (
    <SectionShell
      id="comparativo"
      num="04"
      kicker="Consolidação · quadro-síntese"
      title={
        <>
          Internet <span className="text-zinc-500">×</span>{" "}
          <span className="italic text-yellow-300">Intranet</span>{" "}
          <span className="text-zinc-500">×</span>{" "}
          <span className="italic text-emerald-300">Extranet</span>
        </>
      }
      lead="O confronto lado a lado que resolve 90% das questões da disciplina. Repare: a tecnologia é a mesma — o que muda é quem tem permissão de entrar."
    >
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] -mx-1">
          <table className="w-full min-w-[720px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-semibold text-zinc-500 w-[130px]"></th>
                <th className="p-4 font-display text-lg text-cyan-300">Internet</th>
                <th className="p-4 font-display text-lg text-violet-300">Intranet</th>
                <th className="p-4 font-display text-lg text-emerald-300">Extranet</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr
                  key={r.label}
                  className={i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"}
                >
                  <td className="p-4 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500 align-top">
                    {r.label}
                  </td>
                  <td className="p-4 text-zinc-300 align-top border-l border-white/[0.05]">
                    {r.inet}
                  </td>
                  <td className="p-4 text-zinc-300 align-top border-l border-white/[0.05]">
                    {r.intra}
                  </td>
                  <td className="p-4 text-zinc-300 align-top border-l border-white/[0.05]">
                    {r.extra}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Teste rápido — clique para revelar
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {FLASH.map((f) => (
            <Flashcard key={f.q} {...f} />
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="macete" title="a frase que salva na prova">
          <p>
            <strong className="text-zinc-100">"Mesma tecnologia, públicos diferentes."</strong>{" "}
            Internet = <strong className="text-cyan-300">todos</strong>; Intranet ={" "}
            <strong className="text-violet-300">só os de dentro</strong>; Extranet ={" "}
            <strong className="text-emerald-300">os de dentro + parceiros de fora escolhidos a
            dedo</strong>.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
