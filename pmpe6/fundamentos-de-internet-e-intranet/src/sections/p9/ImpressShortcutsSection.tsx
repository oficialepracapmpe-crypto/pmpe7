import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeftRight, Flame, Keyboard, MonitorPlay, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";
import { I_DATA, I_GROUPS, I_DIFERENCAS, type IShort } from "../../data/shortcuts9";

function Keys({ combo }: { combo: string }) {
  const livre = /·|arrastar|clique|\(|numérico|ao | — /i.test(combo);
  if (livre) return <span className="font-mono text-[11.5px] font-semibold text-rose-200">{combo}</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {combo.split(" + ").map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600 text-[10px]">+</span>}
          <kbd className="font-mono text-[10.5px] font-bold text-rose-200 border border-rose-300/25 bg-rose-300/[0.08] rounded px-1.5 py-[3px] whitespace-nowrap">
            {p}
          </kbd>
        </span>
      ))}
    </span>
  );
}

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function ImpressShortcutsSection() {
  const [modo, setModo] = useState<"todos" | "edicao" | "apresentacao">("todos");
  const [group, setGroup] = useState("todos");
  const [query, setQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);
  const [onlyDiff, setOnlyDiff] = useState(false);

  const flat = useMemo(() => {
    const all: (IShort & { g: string; m: string })[] = [];
    I_GROUPS.forEach((g) => I_DATA[g.id].forEach((s) => all.push({ ...s, g: g.label, m: g.modo })));
    return all;
  }, []);

  const gruposVisiveis = useMemo(
    () => I_GROUPS.filter((g) => modo === "todos" || g.modo === modo),
    [modo]
  );

  const result = useMemo(() => {
    const nq = normalize(query);
    const match = (s: IShort & { g: string; m: string }) =>
      (!onlyHot || s.q) && (!onlyDiff || s.d) && (modo === "todos" || s.m === modo) && (nq === "" || normalize(`${s.k} ${s.f} ${s.g}`).includes(nq));
    if (group === "todos") return { todos: flat.filter(match) } as Record<string, (IShort & { g: string; m: string })[]>;
    return {
      [group]: (I_DATA[group] as IShort[]).map((s) => ({ ...s, g: "", m: I_GROUPS.find((x) => x.id === group)!.modo })).filter(match),
    };
  }, [group, query, onlyHot, onlyDiff, modo, flat]);

  const shown = Object.values(result).reduce((n, arr) => n + arr.length, 0);
  const total = flat.length;

  return (
    <SectionShell
      id="atalhos"
      num="05"
      kicker="A joia desta parte · edição + modo apresentação"
      title={
        <>
          Atalhos do Impress <span className="text-zinc-500">+</span>{" "}
          <span className="italic text-rose-300">PPT × Impress</span>
        </>
      }
      lead={
        <>
          Mais de <strong className="text-zinc-100">100 combinações</strong> da documentação
          oficial, nos dois universos: edição e{" "}
          <strong className="text-rose-300">modo de apresentação</strong>. As{" "}
          <strong className="text-zinc-100">âncoras universais</strong> (F5, B e W — iguais ao
          PowerPoint) convivem com as exclusivas do Impress (Shift+F3 duplicar, F4 posição e
          tamanho, F3 grupos).
        </>
      }
    >
      {/* TABELA DE DIFERENÇAS */}
      <Reveal>
        <div className="rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-400/[0.08] to-transparent p-6 sm:p-8 my-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ArrowLeftRight size={19} className="text-rose-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">
              O confronto direto: PowerPoint PT-BR × Impress
            </h3>
          </div>
          <p className="text-[13.5px] text-zinc-400 mb-5">
            Este é o capítulo mais "simétrico" da suíte livre:{" "}
            <strong className="text-emerald-300">F5, B e W são iguais</strong> nos dois programas —
            as âncoras que você carrega de uma suíte para a outra. As diferenças moram na edição:
            duplicar, agrupar e o quarteto Ctrl+N/A/B/S.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.09]">
            <table className="w-full min-w-[720px] text-[13px]">
              <thead>
                <tr className="bg-white/[0.05] text-left">
                  <th className="p-3.5 font-display text-base text-zinc-200 w-[26%]">Ação</th>
                  <th className="p-3.5 font-display text-base text-orange-300 w-[20%]">PowerPoint</th>
                  <th className="p-3.5 font-display text-base text-rose-300 w-[20%]">Impress</th>
                  <th className="p-3.5 font-display text-base text-emerald-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {I_DIFERENCAS.map((d, i) => {
                  const igual = d.alerta?.startsWith("IGUAL") || d.alerta?.startsWith("Igual") || d.alerta?.startsWith("Praticamente");
                  return (
                    <tr
                      key={d.acao}
                      className={`border-t border-white/[0.05] ${
                        igual ? "bg-emerald-300/[0.05]" : i % 2 === 0 ? "bg-white/[0.015]" : ""
                      }`}
                    >
                      <td className="p-3.5 text-zinc-300 font-medium">{d.acao}</td>
                      <td className="p-3.5">
                        <code className="font-mono text-[12px] text-orange-200">{d.ppt}</code>
                      </td>
                      <td className="p-3.5">
                        <code className="font-mono text-[12px] text-rose-200">{d.imp}</code>
                      </td>
                      <td className="p-3.5 text-[12.5px]">
                        {igual ? (
                          <span className="text-emerald-300 font-bold">✓ ÂNCORA — igual nos dois</span>
                        ) : (
                          <span className="text-zinc-400">{d.alerta ?? "—"}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-300/25 bg-emerald-300/[0.07] p-4">
            <Flame size={16} className="text-emerald-300 mt-0.5 shrink-0" />
            <p className="text-[13px] leading-relaxed text-emerald-50/90">
              <strong className="text-emerald-300">Kit de sobrevivência do apresentador (vale para as duas suítes):</strong>{" "}
              <strong className="text-zinc-100">F5</strong> (começa), <strong className="text-zinc-100">B</strong> (tela
              preta), <strong className="text-zinc-100">W</strong> (tela branca),{" "}
              <strong className="text-zinc-100">número + Enter</strong> (pula para o slide),{" "}
              <strong className="text-zinc-100">E</strong> (apaga rabiscos) e{" "}
              <strong className="text-zinc-100">Esc</strong> (encerra). A única diferença do palco: a
              caneta, que no Impress é <strong className="text-rose-200">P</strong> e no PowerPoint é Ctrl+P.
            </p>
          </div>
        </div>
      </Reveal>

      {/* seletor de universo */}
      <Reveal>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {([
            { k: "todos", t: "Todos os atalhos", i: Keyboard, d: `${total} combinações` },
            { k: "edicao", t: "Modo de edição", i: Keyboard, d: "montando os slides" },
            { k: "apresentacao", t: "Modo apresentação", i: MonitorPlay, d: "com a plateia na frente" },
          ] as const).map((m) => (
            <button
              key={m.k}
              onClick={() => {
                setModo(m.k as typeof modo);
                setGroup("todos");
              }}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left cursor-pointer transition-colors ${
                modo === m.k
                  ? "border-rose-300/60 bg-rose-300/[0.1]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-rose-300/35"
              }`}
            >
              <m.i size={18} className={modo === m.k ? "text-rose-300" : "text-zinc-500"} />
              <div className="leading-tight">
                <p className={`text-[13px] font-bold ${modo === m.k ? "text-rose-200" : "text-zinc-300"}`}>{m.t}</p>
                <p className="text-[11px] text-zinc-500">{m.d}</p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* busca */}
      <Reveal>
        <div className="sticky top-[72px] z-30 rounded-2xl border border-white/[0.08] bg-[#0d0c14]/95 backdrop-blur-xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar atalho ou função... (ex.: duplicar, grupo, tela preta)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-10 py-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-rose-300/60 focus:bg-rose-300/[0.04] transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 cursor-pointer"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <label
                className={`flex items-center gap-2 rounded-xl border px-3.5 py-3 cursor-pointer select-none transition-colors text-[12px] font-semibold ${
                  onlyHot ? "border-yellow-300/60 bg-yellow-300/10 text-yellow-200" : "border-white/10 text-zinc-400 hover:border-white/25"
                }`}
              >
                <input type="checkbox" className="hidden" checked={onlyHot} onChange={(e) => setOnlyHot(e.target.checked)} />
                <Flame size={14} className={onlyHot ? "text-yellow-300" : "text-zinc-600"} />
                Mais cobrados
              </label>
              <label
                className={`flex items-center gap-2 rounded-xl border px-3.5 py-3 cursor-pointer select-none transition-colors text-[12px] font-semibold ${
                  onlyDiff ? "border-rose-400/60 bg-rose-400/10 text-rose-200" : "border-white/10 text-zinc-400 hover:border-white/25"
                }`}
              >
                <input type="checkbox" className="hidden" checked={onlyDiff} onChange={(e) => setOnlyDiff(e.target.checked)} />
                <AlertTriangle size={14} className={onlyDiff ? "text-rose-300" : "text-zinc-600"} />
                Só os diferentes do PPT
              </label>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {[{ id: "todos", label: "Todos os grupos" }, ...gruposVisiveis.map((g) => ({ id: g.id, label: g.label }))].map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-bold cursor-pointer transition-colors ${
                  group === g.id
                    ? "bg-rose-300 text-[#0a0910]"
                    : "border border-white/12 text-zinc-400 hover:border-rose-300/50 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-[11.5px] text-zinc-500">
            Exibindo <span className="text-rose-300 font-bold font-mono">{shown}</span> de{" "}
            <span className="font-mono">{total}</span> atalhos catalogados
          </p>
        </div>
      </Reveal>

      {(Object.entries(result) as [string, (IShort & { g: string; m: string })[]][]).map(([gid, items]) => {
        if (items.length === 0) return null;
        const g = I_GROUPS.find((x) => x.id === gid);
        return (
          <div key={gid} className="mb-10">
            {g && (
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
                  {g.modo === "apresentacao" ? (
                    <MonitorPlay size={19} className="text-rose-300" />
                  ) : (
                    <Keyboard size={19} className="text-rose-300" />
                  )}
                  {g.label}
                  <span className="font-mono text-[11px] font-normal text-zinc-500 border border-white/10 rounded-full px-2.5 py-1">
                    {items.length}
                  </span>
                </h3>
                <p className="text-[13px] text-zinc-500 mt-1.5">{g.intro}</p>
              </div>
            )}
            <motion.div
              layout
              className={`rounded-2xl border overflow-hidden ${
                g?.modo === "apresentacao" ? "border-rose-300/25" : "border-white/[0.07]"
              }`}
            >
              {items.map((s, i) => (
                <div
                  key={`${gid}-${s.k}-${i}`}
                  className={`flex flex-col md:flex-row md:items-center gap-2.5 md:gap-5 px-4 sm:px-5 py-3.5 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors ${
                    s.d ? "bg-rose-400/[0.04]" : i % 2 === 0 ? "bg-white/[0.015]" : ""
                  } ${s.m === "apresentacao" && g?.modo === "apresentacao" ? "bg-rose-300/[0.02]" : ""}`}
                >
                  <div className="md:w-[290px] shrink-0 flex items-center gap-2">
                    {!!s.q && <Flame size={13} className="text-yellow-300 shrink-0" />}
                    {!!s.d && <AlertTriangle size={12} className="text-rose-300 shrink-0" />}
                    <Keys combo={s.k} />
                  </div>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {s.f}
                    {!!s.d && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.12em] text-rose-300/80">
                        · difere do PPT
                      </span>
                    )}
                    {group === "todos" && s.g && (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                        · {s.g}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}

      {shown === 0 && (
        <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <p className="text-zinc-400 text-[14px]">
            Nenhum atalho encontrado para <span className="text-rose-300 font-mono">"{query}"</span>.
          </p>
          <p className="text-zinc-600 text-[12.5px] mt-2">Tente "slide", "grupo", "caneta" ou limpe os filtros.</p>
        </div>
      )}

      <Reveal>
        <Callout variant="prova" title="o pódio absoluto do Impress">
          <p>
            Doze para gravar: <strong className="text-zinc-100">Ctrl+N/O/S</strong> (novo, abrir,
            salvar) · <strong className="text-zinc-100">Ctrl+B/I/U</strong> (negrito, itálico,
            sublinhado) · <strong className="text-zinc-100">F5</strong> (apresentação — âncora!) ·{" "}
            <strong className="text-zinc-100">Shift+F3</strong> (duplicar) ·{" "}
            <strong className="text-zinc-100">F4</strong> (posição e tamanho) ·{" "}
            <strong className="text-zinc-100">F3 / Ctrl+F3</strong> (entrar / sair do grupo) ·{" "}
            <strong className="text-zinc-100">Shift+Ctrl+G</strong> (agrupar) ·{" "}
            <strong className="text-zinc-100">Ctrl+Enter</strong> (próximo objeto / novo slide) ·{" "}
            <strong className="text-zinc-100">B / W</strong> (telas preta / branca — âncoras!) ·{" "}
            <strong className="text-zinc-100">P</strong> (caneta) ·{" "}
            <strong className="text-zinc-100">Esc</strong> (encerrar).
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Fechando a suíte livre com a síntese de sempre: os atalhos do Impress seguem o{" "}
          <Hot tone="y">padrão internacional do LibreOffice</Hot> (Ctrl+S salvar, Ctrl+B negrito,
          Ctrl+Q sair) — pense em inglês e acerte. E as âncoras{" "}
          <Hot tone="e">F5, B, W, E e Esc</Hot> funcionam igualmente no PowerPoint: leve-as de
          bandeja para a prova.
        </P>
      </Reveal>
    </SectionShell>
  );
}
