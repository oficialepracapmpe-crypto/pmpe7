import { motion } from "framer-motion";
import { CalendarDays, Copy, DatabaseBackup, History, Layers } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* ------- linha do tempo interativa ------- */
const DAYS = [
  { d: "Segunda", full: true, inc: 100, dif: 100, note: "backup COMPLETO — copia tudo" },
  { d: "Terça", full: false, inc: 5, dif: 5, note: "+5 GB alterados" },
  { d: "Quarta", full: false, inc: 8, dif: 13, note: "+8 GB alterados" },
  { d: "Quinta", full: false, inc: 3, dif: 16, note: "+3 GB alterados" },
];

function Timeline() {
  const [mode, setMode] = useState<"inc" | "dif">("inc");
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-2">
        Simulador: uma semana de backups (base de 100 GB)
      </p>
      <p className="text-[13px] text-zinc-500 mb-6">
        Na segunda-feira faz-se um backup completo. Nos demais dias, alterne o tipo e observe{" "}
        <strong className="text-zinc-300">quanto cada dia copia</strong> — largura da barra = tamanho.
      </p>

      <div className="flex flex-wrap gap-2.5 mb-7">
        <button
          onClick={() => setMode("inc")}
          className={`rounded-full px-5 py-2.5 text-[13px] font-bold cursor-pointer transition-colors ${
            mode === "inc"
              ? "bg-cyan-300 text-[#0a0910]"
              : "border border-white/15 text-zinc-300 hover:border-cyan-300/50"
          }`}
        >
          Incremental
        </button>
        <button
          onClick={() => setMode("dif")}
          className={`rounded-full px-5 py-2.5 text-[13px] font-bold cursor-pointer transition-colors ${
            mode === "dif"
              ? "bg-violet-300 text-[#0a0910]"
              : "border border-white/15 text-zinc-300 hover:border-violet-300/50"
          }`}
        >
          Diferencial
        </button>
      </div>

      <div className="space-y-3">
        {DAYS.map((day) => {
          const size = mode === "inc" ? day.inc : day.dif;
          return (
            <div key={day.d} className="flex items-center gap-4">
              <span className="w-[72px] shrink-0 text-[12px] font-semibold text-zinc-400">
                {day.d}
              </span>
              <div className="flex-1 h-9 rounded-lg bg-white/[0.04] overflow-hidden relative">
                <motion.div
                  className={`h-full rounded-lg ${
                    day.full
                      ? "bg-yellow-300"
                      : mode === "inc"
                        ? "bg-cyan-300/80"
                        : "bg-violet-300/80"
                  }`}
                  animate={{ width: `${size}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="absolute inset-0 flex items-center pl-3 font-mono text-[11.5px] font-bold text-[#0a0910] mix-blend-multiply">
                  {size} GB
                </span>
              </div>
              <span className="hidden md:block w-[210px] shrink-0 text-[11.5px] text-zinc-500">
                {day.note}
              </span>
            </div>
          );
        })}
      </div>

      <div
        className={`mt-6 rounded-xl border p-4 text-[13.5px] leading-relaxed ${
          mode === "inc"
            ? "border-cyan-300/30 bg-cyan-300/[0.06] text-cyan-100/90"
            : "border-violet-300/30 bg-violet-300/[0.06] text-violet-100/90"
        }`}
      >
        {mode === "inc" ? (
          <p>
            <strong className="text-cyan-200">Restauração de sexta-feira (incremental):</strong>{" "}
            você precisa do completo de segunda <strong>+ TODOS os incrementais seguintes, em
            ordem</strong> (terça → quarta → quinta) = <strong>4 conjuntos</strong>. Se um deles
            corromper, os posteriores se perdem. Backup diário rápido e pequeno; restauração
            lenta e frágil.
          </p>
        ) : (
          <p>
            <strong className="text-violet-200">Restauração de sexta-feira (diferencial):</strong>{" "}
            você precisa do completo de segunda <strong>+ APENAS o último diferencial</strong>{" "}
            (quinta, que acumulou tudo desde o completo) = <strong>2 conjuntos</strong>. Cada dia o
            diferencial fica maior, mas restaurar é bem mais simples.
          </p>
        )}
      </div>
    </div>
  );
}

const TYPES = [
  {
    icon: DatabaseBackup,
    name: "Completo (full)",
    color: "border-yellow-300/30 bg-yellow-300/[0.06]",
    ic: "text-yellow-300",
    d: "Copia TODOS os dados selecionados, a cada execução. É a base (obrigatória) de qualquer esquema.",
    pros: "Restaura: só 1 conjunto → a MAIS RÁPIDA de restaurar.",
    cons: "Fazer: mais LENTO e ocupa MAIS ESPAÇO.",
  },
  {
    icon: Layers,
    name: "Incremental",
    color: "border-cyan-300/30 bg-cyan-300/[0.05]",
    ic: "text-cyan-300",
    d: "Copia apenas o que mudou desde o ÚLTIMO BACKUP — seja ele completo ou incremental. Referência: o imediatamente anterior.",
    pros: "Fazer: o MAIS RÁPIDO e econômico em espaço.",
    cons: "Restaura: completo + todos os incrementais, na sequência → a mais lenta e arriscada.",
  },
  {
    icon: History,
    name: "Diferencial",
    color: "border-violet-300/30 bg-violet-300/[0.05]",
    ic: "text-violet-300",
    d: "Copia tudo o que mudou desde o ÚLTIMO BACKUP COMPLETO. Cresce um pouco a cada dia, acumulando mudanças.",
    pros: "Restaura: completo + só o último diferencial → simples e intermediária.",
    cons: "Fazer: fica maior e mais lento a cada dia (mais que o incremental).",
  },
];

export default function BackupSection() {
  return (
    <SectionShell
      id="backup"
      num="07"
      kicker="Módulo B · o seguro de vida dos dados"
      title={
        <>
          Backup: <span className="italic text-yellow-300">completo</span>,{" "}
          <span className="italic text-cyan-300">incremental</span> e{" "}
          <span className="italic text-violet-300">diferencial</span>
        </>
      }
      lead={
        <>
          <Hot>Backup</Hot> (cópia de segurança) é a <Hot>cópia extra</Hot> de dados importantes,
          guardada <Hot>em local separado</Hot>, para recuperar perdas — falha de disco, roubo,
          exclusão acidental ou ataque de ransomware. A pergunta de todo concurso:{" "}
          <Hot tone="c">qual tipo copia o quê</Hot>, referente a qual marco?
        </>
      }
    >
      {/* regra 3-2-1 */}
      <Reveal>
        <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.05] p-6 sm:p-7 mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Copy size={18} className="text-emerald-300" />
            <h3 className="font-display text-xl text-[#f4f1ea]">
              Regra 3-2-1 — a regra de ouro das boas práticas
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-[13.5px] leading-relaxed">
            <div className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
              <p className="font-display text-4xl font-bold text-emerald-300">3</p>
              <p className="text-zinc-300 mt-1.5">cópias dos dados (o original + 2 backups)</p>
            </div>
            <div className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
              <p className="font-display text-4xl font-bold text-emerald-300">2</p>
              <p className="text-zinc-300 mt-1.5">mídias/tecnologias diferentes (ex.: HD externo + nuvem)</p>
            </div>
            <div className="rounded-xl bg-[#0d0c14] border border-white/[0.08] p-4 text-center">
              <p className="font-display text-4xl font-bold text-emerald-300">1</p>
              <p className="text-zinc-300 mt-1.5">cópia fora do local (off-site — ex.: na nuvem)</p>
            </div>
          </div>
          <p className="mt-4 text-[12.5px] text-zinc-400">
            Se o backup fica gavetado na mesma mesa do notebook e a sala pega fogo... você entendeu
            o porquê da cópia fora do local.
          </p>
        </div>
      </Reveal>

      {/* tipos */}
      <Reveal>
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {TYPES.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 ${t.color}`}>
              <t.icon size={20} className={`${t.ic} mb-3`} />
              <h3 className="font-display text-xl text-[#f4f1ea] mb-2">{t.name}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-300 mb-4">{t.d}</p>
              <p className="text-[12.5px] leading-relaxed text-emerald-200/85 mb-1.5">{t.pros}</p>
              <p className="text-[12.5px] leading-relaxed text-rose-200/85">{t.cons}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Timeline />
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha" title="a inversão que reprova metade da sala">
            <p>
              <em>"O backup incremental copia, a cada execução, todos os dados alterados desde o
              último backup COMPLETO."</em> → <strong className="text-rose-300">ERRADO!
              INVERTEU!</strong> Quem olha para o último <strong className="text-zinc-100">completo</strong>{" "}
              é o <strong className="text-zinc-100">diferencial</strong>. O incremental olha para o{" "}
              <strong className="text-zinc-100">último backup, qualquer que seja</strong>.
            </p>
          </Callout>
          <Callout variant="macete" title="incremental × diferencial sem errar nunca mais">
            <p>
              <strong className="text-cyan-300">IN</strong>cremental = o{" "}
              <strong className="text-zinc-100">IN</strong>divíduo imediatamente anterior (último
              backup qualquer). <strong className="text-violet-300">Di</strong>ferencial = desde o
              último <strong className="text-zinc-100">Dia do FULL</strong> (completo). E mais:
              quem é <strong className="text-zinc-100">preguiçoso para gravar</strong> (incremental)
              é <strong className="text-zinc-100">trabalhoso para restaurar</strong> — e
              vice-versa.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="exemplo" title="onde fazer backup na prática?">
          <div className="flex items-start gap-3">
            <CalendarDays size={16} className="text-cyan-300 mt-1 shrink-0" />
            <p>
              Ferramentas citadas em prova: <strong className="text-zinc-100">Histórico de
              Arquivos</strong> e Backup e Restauração (Windows), <strong className="text-zinc-100">
              Time Machine</strong> (macOS), cópias em <strong className="text-zinc-100">HD
              externo, NAS</strong> e <strong className="text-zinc-100">nuvem com versionamento</strong>{" "}
              (que mantém versões antigas — aí sim funciona como backup). Agende rotinas: backup
              manual é o que nunca é feito.
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Fechando o raciocínio de prova: backup serve para garantir{" "}
          <Hot tone="c">disponibilidade</Hot> dos dados (lembra do C.I.D.A.?) — e, com
          versionamento, também ajuda a recuperar a <Hot tone="y">integridade</Hot> após adulterações
          e sequestros. É a única resposta honesta à pergunta "e se o ransomware criptografar
          tudo?".
        </P>
      </Reveal>
    </SectionShell>
  );
}
