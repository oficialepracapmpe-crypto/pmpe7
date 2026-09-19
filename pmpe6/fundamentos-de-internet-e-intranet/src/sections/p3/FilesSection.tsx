import { motion } from "framer-motion";
import {
  Check,
  FileText,
  Folder,
  FolderTree,
  HardDrive,
  Pencil,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* miniquiz interativo: nomes válidos × inválidos */
const NAMES = [
  { n: "oficio_2026.pdf", ok: true, why: "Sublinhado (_) é permitido. Válido." },
  { n: "relatorio<final>.docx", ok: false, why: "Os sinais < e > são PROIBIDOS em nomes de arquivo." },
  { n: "aula 03 - atalhos.txt", ok: true, why: "Espaços e hífen são permitidos. Válido." },
  { n: "foto:familia.jpg", ok: false, why: "Dois-pontos (:) é proibido — o Windows reserva o : para unidades, como C:." },
  { n: "backup.zip", ok: true, why: "Clássico e válido." },
  { n: "pergunta?.txt", ok: false, why: "Interrogação (?) é proibida (o sistema a usa como 'curinga' em buscas, junto com o *)." },
];

function NameChip({ n, ok, why }: { n: string; ok: boolean; why: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className={`w-full text-left rounded-xl border p-4 transition-all cursor-pointer ${
        open
          ? ok
            ? "border-emerald-400/50 bg-emerald-400/[0.08]"
            : "border-rose-400/50 bg-rose-400/[0.08]"
          : "border-white/[0.08] bg-white/[0.02] hover:border-white/25"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[13.5px] text-zinc-200 truncate">{n}</span>
        {open ? (
          ok ? (
            <Check size={16} className="text-emerald-300 shrink-0" />
          ) : (
            <X size={16} className="text-rose-300 shrink-0" />
          )
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            válido?
          </span>
        )}
      </div>
      <motion.div animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="pt-2.5 text-[12.5px] leading-relaxed text-zinc-400">{why}</p>
      </motion.div>
    </button>
  );
}

/* escada de unidades */
const UNITS = [
  { u: "1 Byte", b: "8 bits — 1 caractere" },
  { u: "1 KB", b: "≈ 1.024 bytes" },
  { u: "1 MB", b: "≈ 1.024 KB (uma foto)" },
  { u: "1 GB", b: "≈ 1.024 MB (um filme leve)" },
  { u: "1 TB", b: "≈ 1.024 GB (um HD externo)" },
];

export default function FilesSection() {
  return (
    <SectionShell
      id="arquivos"
      num="01"
      kicker="Organização · o alfabeto da máquina"
      title={
        <>
          Arquivos, pastas e a lógica de <span className="italic text-violet-300">organização</span>
        </>
      }
      lead={
        <>
          <Hot tone="v">Arquivo</Hot> é qualquer conjunto de dados gravado com um{" "}
          <Hot>nome + extensão</Hot> (documento, foto, música, programa).{" "}
          <Hot tone="v">Pasta</Hot> (ou diretório) é o "envelope" que agrupa arquivos e outras
          pastas. Juntos, formam uma <Hot>árvore hierárquica</Hot> — a base de tudo no Windows.
        </>
      }
    >
      {/* árvore + caminho */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-8">
          <div className="flex items-center gap-2.5 mb-5">
            <FolderTree size={17} className="text-violet-300" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-300">
              A árvore de diretórios e o tal do "caminho"
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="font-mono text-[13px] leading-loose text-zinc-300">
              <p><HardDrive size={13} className="inline text-yellow-300 -mt-0.5" /> C:\ <span className="text-zinc-600">← raiz da unidade</span></p>
              <p className="pl-4">└─ <Folder size={13} className="inline text-violet-300 -mt-0.5" /> Users</p>
              <p className="pl-10">└─ <Folder size={13} className="inline text-violet-300 -mt-0.5" /> Maria</p>
              <p className="pl-16">└─ <Folder size={13} className="inline text-violet-300 -mt-0.5" /> Documentos</p>
              <p className="pl-[88px]">└─ <FileText size={13} className="inline text-cyan-300 -mt-0.5" /> <span className="text-cyan-200">oficio.docx</span></p>
            </div>
            <div>
              <p className="text-[13.5px] leading-relaxed text-zinc-400 mb-3">
                O <strong className="text-zinc-200">caminho (path)</strong> é o "endereço completo"
                do arquivo — da raiz até ele. Bancas cobram ler e interpretar caminhos:
              </p>
              <code className="block font-mono text-[12.5px] leading-relaxed break-all rounded-xl border border-yellow-300/25 bg-yellow-300/[0.06] px-4 py-3 text-yellow-200">
                C:\Users\Maria\Documentos\oficio.docx
              </code>
              <p className="mt-3 text-[12.5px] text-zinc-500">
                Leia: unidade <em>C:</em> → pasta Users → pasta Maria → pasta Documentos → arquivo{" "}
                <em>oficio.docx</em>. A barra invertida <code className="font-mono">\</code> separa
                os níveis (na Web, usa-se <code className="font-mono">/</code> — não confunda!).
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* regras de nomes */}
      <Reveal>
        <div className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.04] p-6 sm:p-7 my-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-3">
            As 10 regras de nomeação que enchem provas
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[13.5px] leading-relaxed text-zinc-300">
            <li>Proibidos: <code className="font-mono text-rose-200">&lt; &gt; : " / \ | ? *</code></li>
            <li>Nome + extensão não podem se repetir <strong className="text-zinc-100">na mesma pasta</strong>.</li>
            <li>Mesmo nome em <strong className="text-zinc-100">pastas diferentes</strong> pode.</li>
            <li>Windows <strong className="text-zinc-100">não diferencia</strong> maiúsculas de minúsculas ("REL" = "rel").</li>
            <li>O nome não pode terminar em ponto final nem em espaço.</li>
            <li>Extensões como .exe e .bat são executáveis — cuidado ao abrir.</li>
            <li>Nomes reservados não podem ser usados: CON, PRN, AUX, NUL, COM1, LPT1...</li>
            <li>Pode usar espaço, hífen, sublinhado, números e acentos à vontade.</li>
            <li>Limite clássico: 255 caracteres no caminho completo.</li>
            <li>Dois arquivos com mesmo nome e <strong className="text-zinc-100">extensões diferentes</strong> podem coexistir.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">
          Teste instantâneo — clique para revelar se o nome é válido
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {NAMES.map((x) => (
            <NameChip key={x.n} {...x} />
          ))}
        </div>
      </Reveal>

      {/* unidades + operações */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 mb-4">
              Unidades de medida — a escada dos bytes
            </p>
            <div className="space-y-2">
              {UNITS.map((u, i) => (
                <div key={u.u} className="flex items-center gap-3">
                  <span
                    className="shrink-0 grid place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/[0.08] font-mono text-[12px] font-bold text-cyan-200 px-3 py-1.5"
                    style={{ marginLeft: `${i * 10}px` }}
                  >
                    {u.u}
                  </span>
                  <span className="text-[12.5px] text-zinc-500">{u.b}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] leading-relaxed text-zinc-400">
              <strong className="text-zinc-200">bit × Byte:</strong> 1 Byte = 8 bits. Banca cobra:
              velocidade de internet em mega<strong className="text-zinc-200">bits</strong>/s (Mb/s)
              não é igual a mega<strong className="text-zinc-200">Bytes</strong>/s (MB/s) — 100
              Mb/s ≈ 12,5 MB/s.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-4">
              Operações do dia a dia (e onde a banca pega)
            </p>
            <ul className="space-y-3 text-[13px] leading-relaxed text-zinc-400">
              <li className="flex gap-2.5"><Pencil size={14} className="text-emerald-300 mt-0.5 shrink-0" /><span><strong className="text-zinc-200">Renomear:</strong> selecione e pressione <kbd className="font-mono text-[11px] text-emerald-200">F2</kbd> ou clique com o botão direito → Renomear.</span></li>
              <li className="flex gap-2.5"><Trash2 size={14} className="text-emerald-300 mt-0.5 shrink-0" /><span><strong className="text-zinc-200">Excluir:</strong> Delete manda para a <strong className="text-zinc-200">Lixeira</strong> (reversível); Shift+Del é <strong className="text-zinc-200">permanente</strong>. Arquivo de pen drive excluído normalmente NÃO vai para a Lixeira!</span></li>
              <li className="flex gap-2.5"><FileText size={14} className="text-emerald-300 mt-0.5 shrink-0" /><span><strong className="text-zinc-200">Copiar × Mover:</strong> copiar duplica (origem continua); mover/recortar transfere. Arrastar entre unidades diferentes = copia; dentro da mesma = move.</span></li>
              <li className="flex gap-2.5"><Search size={14} className="text-emerald-300 mt-0.5 shrink-0" /><span><strong className="text-zinc-200">Pesquisar:</strong> os curingas <code className="font-mono">*</code> (qualquer sequência) e <code className="font-mono">?</code> (um caractere) funcionam nas buscas: <code className="font-mono">*.pdf</code> acha todos os PDFs.</span></li>
              <li className="flex gap-2.5"><Folder size={14} className="text-emerald-300 mt-0.5 shrink-0" /><span><strong className="text-zinc-200">Propriedades (Alt+Enter):</strong> tamanho, datas de criação/modificação e atributos: <strong className="text-zinc-200">oculto</strong> e <strong className="text-zinc-200">somente leitura</strong>.</span></li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Callout variant="pegadinha">
          <p>
            <em>"A Lixeira armazena arquivos excluídos por tempo ilimitado."</em> →{" "}
            <strong className="text-rose-300">ERRADO!</strong> Ela tem um{" "}
            <strong className="text-zinc-100">limite de espaço por unidade</strong>: quando enche,
            os itens mais antigos são apagados de verdade. E atenção tripla: itens excluídos de{" "}
            <Hot tone="r">pen drive e compartilhamentos de rede</Hot>{" "}
            <strong className="text-zinc-100">não passam pela Lixeira</strong> do computador.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Por fim, o trio de locais que você precisa reconhecer de olhos fechados:{" "}
          <Hot tone="v">Este Computador</Hot> (unidades C:, D:, pen drives...), as pastas pessoais{" "}
          <Hot tone="v">Documentos, Downloads, Imagens, Vídeos e Música</Hot> e a{" "}
          <Hot tone="v">Área de Trabalho (desktop)</Hot> — que é uma pasta como outra qualquer
          dentro do perfil do usuário, só que visível em tela cheia.
        </P>
      </Reveal>
    </SectionShell>
  );
}
