import {
  CassetteTape,
  Cloud,
  Disc3,
  HardDrive,
  MemoryStick,
  RefreshCw,
  Zap,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const DEVICES = [
  {
    icon: HardDrive,
    n: "HD (disco rígido)",
    sub: "magnético · com partes móveis",
    d: "Discos giratórios lidos por um braço mecânico (5400/7200 RPM). Alta capacidade (TBs) e melhor custo por GB, mas mais lento, ruidoso e sensível a impactos.",
    prova: "Se a questão falar em 'partes mecânicas' ou 'queda danificou o disco', é HD.",
    tone: "hover:border-yellow-300/35",
    ic: "text-yellow-300",
  },
  {
    icon: Zap,
    n: "SSD (unidade de estado sólido)",
    sub: "chips de memória flash · sem partes móveis",
    d: "Guarda dados em chips, não em discos giratórios: muito mais rápido, silencioso e resistente a choques. Custo por GB maior que o HD. Interfaces SATA e NVMe.",
    prova: "'Não possui partes móveis' + velocidade = SSD. Trava da FGV!",
    tone: "hover:border-cyan-300/35",
    ic: "text-cyan-300",
  },
  {
    icon: MemoryStick,
    n: "Pen drive e cartões (SD/microSD)",
    sub: "memória flash · portáteis",
    d: "Pequenos, leves, sem partes móveis: ideais para transportar arquivos. Também usam memória flash — a mesma família do SSD, com menos desempenho.",
    prova: "Pen drive NÃO é memória RAM nem HD: é memória flash, não volátil.",
    tone: "hover:border-violet-300/35",
    ic: "text-violet-300",
  },
  {
    icon: Cloud,
    n: "Armazenamento em nuvem",
    sub: "servidores remotos · via internet",
    d: "Seus arquivos ficam em data centers de terceiros (Google Drive, OneDrive, Dropbox, iCloud, MEGA). Acesso de qualquer dispositivo, mas DEPENDE de conexão com a Internet.",
    prova: "Nuvem = computador de outra pessoa. Exige internet e login.",
    tone: "hover:border-emerald-300/35",
    ic: "text-emerald-300",
  },
  {
    icon: CassetteTape,
    n: "Fita magnética (LTO/DAT)",
    sub: "sequencial · grandes volumes",
    d: "Antiga, porém viva nos data centers: barata por TB e ótima para arquivamento de longo prazo e backup corporativo. Acesso sequencial e lento.",
    prova: "Bancas adoram o 'plot twist': fita magnética ainda é usada para backup em empresas.",
    tone: "hover:border-rose-300/35",
    ic: "text-rose-300",
  },
  {
    icon: Disc3,
    n: "CD / DVD / Blu-ray",
    sub: "ópticos · legado",
    d: "Mídias ópticas lidas por laser. Versões -R: graváveis uma única vez; -RW: regraváveis. Caíram em desuso, mas seguem nos editais como 'mídias de backup'.",
    prova: "Diferencie R (uma gravação) de RW (várias). Capacidade: CD 700 MB, DVD 4,7 GB.",
    tone: "hover:border-blue-300/35",
    ic: "text-blue-300",
  },
];

const ROWS = [
  { d: "HD", tec: "Magnético, discos giratórios", movel: "Sim", vel: "Média/baixa", uso: "Muito espaço, custo baixo (arquivos grandes)" },
  { d: "SSD", tec: "Memória flash (chips)", movel: "Não", vel: "Alta/muito alta", uso: "Sistema operacional e velocidade" },
  { d: "Pen drive", tec: "Memória flash", movel: "Não", vel: "Média", uso: "Transporte rápido de arquivos" },
  { d: "Nuvem", tec: "Servidores remotos (Internet)", movel: "—", vel: "Depende da conexão", uso: "Acesso de qualquer lugar, sincronização" },
  { d: "Fita LTO", tec: "Magnética sequencial", movel: "Sim", vel: "Baixa (sequencial)", uso: "Backup corporativo de longo prazo" },
];

export default function StorageSection() {
  return (
    <SectionShell
      id="armazenamento"
      num="06"
      kicker="Módulo B · onde os dados moram"
      title={
        <>
          Dispositivos de <span className="italic text-cyan-300">armazenamento</span> de dados
        </>
      }
      lead={
        <>
          Armazenamento <Hot>secundário</Hot> (ou de massa) é o que guarda dados de forma{" "}
          <Hot>não volátil</Hot> — permanecem gravados mesmo sem energia. Contraste com a{" "}
          <Hot tone="r">memória RAM</Hot>, que é <Hot>volátil</Hot>: desligou, apagou.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {DEVICES.map((dv, i) => (
          <Reveal key={dv.n} delay={i * 0.05}>
            <div
              className={`h-full rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors ${dv.tone}`}
            >
              <dv.icon size={20} className={`${dv.ic} mb-3`} />
              <h3 className="text-[15px] font-bold text-zinc-100">{dv.n}</h3>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2.5">
                {dv.sub}
              </p>
              <p className="text-[13px] leading-relaxed text-zinc-400 mb-3">{dv.d}</p>
              <p className="text-[12px] leading-relaxed text-yellow-200/80 border-t border-white/[0.06] pt-3">
                <strong className="text-yellow-300">Na prova:</strong> {dv.prova}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* tabela */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Quadro comparativo — releia na véspera
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[680px] text-[13px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-zinc-200">Dispositivo</th>
                <th className="p-4 font-display text-base text-zinc-200">Tecnologia</th>
                <th className="p-4 font-display text-base text-zinc-200 w-[130px]">Partes móveis</th>
                <th className="p-4 font-display text-base text-zinc-200 w-[150px]">Velocidade</th>
                <th className="p-4 font-display text-base text-zinc-200">Uso típico</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr
                  key={r.d}
                  className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}
                >
                  <td className="p-4 font-mono font-bold text-yellow-200">{r.d}</td>
                  <td className="p-4 text-zinc-300">{r.tec}</td>
                  <td className="p-4 text-zinc-300">{r.movel}</td>
                  <td className="p-4 text-zinc-300">{r.vel}</td>
                  <td className="p-4 text-zinc-400">{r.uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Callout variant="pegadinha" title="sincronizar não é fazer backup">
            <div className="flex items-start gap-3">
              <RefreshCw size={16} className="text-rose-300 mt-1 shrink-0" />
              <p>
                <em>"Ter os arquivos sincronizados com o Google Drive dispensa backup."</em> →{" "}
                <strong className="text-rose-300">CUIDADO!</strong> Se você apagar um arquivo no
                computador, ele também <strong className="text-zinc-100">some da nuvem</strong> na
                sincronização — e se um ransomware cifrar os arquivos, a bagunça também sincroniza.
                Backup de verdade <strong className="text-zinc-100">preserva versões e cópias
                separadas</strong>.
              </p>
            </div>
          </Callout>
          <Callout variant="prova">
            <p>
              Três afirmações CORRETAS que já caíram: pen drive usa{" "}
              <strong className="text-zinc-100">memória flash</strong>; SSD é{" "}
              <strong className="text-zinc-100">mais resistente a impactos</strong> que o HD (sem
              partes móveis); armazenamento em nuvem{" "}
              <strong className="text-zinc-100">requer acesso à Internet</strong>. São os três
              ganchos mais comuns do tema.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          E para organizar a memória de prova, a hierarquia mental:{" "}
          <Hot tone="r">RAM</Hot> (rápida, cara, volátil, trabalho do momento) →{" "}
          <Hot tone="c">SSD/HD</Hot> (permanente, dentro da máquina) →{" "}
          <Hot tone="v">pen drive/HD externo</Hot> (permanente e móvel) →{" "}
          <Hot tone="e">nuvem</Hot> (permanente, remota, em qualquer lugar). Quanto mais longe do
          processador, maior a capacidade e menor a velocidade.
        </P>
      </Reveal>
    </SectionShell>
  );
}
