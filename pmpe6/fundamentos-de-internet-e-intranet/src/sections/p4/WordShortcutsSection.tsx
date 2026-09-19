import { AnimatePresence, motion } from "framer-motion";
import { Flame, Keyboard, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Callout, P, Reveal, SectionShell } from "../../components/ui";
import { FKEYS, WS_DATA, WS_GROUPS, type WShortcut } from "../../data/shortcuts4";

function Keys({ combo }: { combo: string }) {
  const hasMouse = /clique|rolagem|vezes|segundos/i.test(combo);
  if (hasMouse) return <span className="font-mono text-[11.5px] font-semibold text-blue-200">{combo}</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {combo.split(" + ").map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600 text-[10px]">+</span>}
          <kbd className="font-mono text-[10.5px] font-bold text-blue-200 border border-blue-300/25 bg-blue-300/[0.08] rounded px-1.5 py-[3px] whitespace-nowrap">
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

export default function WordShortcutsSection() {
  const [group, setGroup] = useState<string>("todos");
  const [query, setQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);
  const [showFKeys, setShowFKeys] = useState(true);

  const flat = useMemo(() => {
    const all: (WShortcut & { g: string })[] = [];
    WS_GROUPS.forEach((g) => WS_DATA[g.id].forEach((s) => all.push({ ...s, g: g.label })));
    return all;
  }, []);

  const total = flat.length;

  const result = useMemo(() => {
    const nq = normalize(query);
    const match = (s: WShortcut & { g: string }) =>
      (!onlyHot || s.q) && (nq === "" || normalize(`${s.k} ${s.f} ${s.g}`).includes(nq));

    if (group === "todos") return { todos: flat.filter(match) } as Record<string, (WShortcut & { g: string })[]>;
    return {
      [group]: (WS_DATA[group] as (WShortcut & { g: string })[]).map((s) => ({ ...s, g: "" })).filter(match),
    };
  }, [group, query, onlyHot, flat]);

  const shown = Object.values(result).reduce((n, arr) => n + arr.length, 0);

  return (
    <SectionShell
      id="atalhos"
      num="05"
      kicker="A joia desta parte · use a busca"
      title={
        <>
          <span className="italic text-blue-300">Todos</span> os atalhos do Word 2019
        </>
      }
      lead={
        <>
          Catálogo com <strong className="text-zinc-100">mais de 150 combinações</strong> compilado
          da documentação oficial, em 9 famílias + a tabela completa das <strong className="text-zinc-100">teclas
          F1–F12</strong>. A <span className="text-yellow-300 font-semibold">chama</span> marca as
          mais cobradas. Busque por tecla ("Ctrl+N") ou função ("mala direta").
        </>
      }
    >
      {/* barra de busca */}
      <Reveal>
        <div className="sticky top-[72px] z-30 rounded-2xl border border-white/[0.08] bg-[#0d0c14]/95 backdrop-blur-xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar atalho ou função... (ex.: negrito, sumário, ctrl+e)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-10 py-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-blue-300/60 focus:bg-blue-300/[0.04] transition-colors"
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
            <label
              className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 cursor-pointer select-none transition-colors text-[12.5px] font-semibold ${
                onlyHot
                  ? "border-yellow-300/60 bg-yellow-300/10 text-yellow-200"
                  : "border-white/10 text-zinc-400 hover:border-white/25"
              }`}
            >
              <input type="checkbox" className="hidden" checked={onlyHot} onChange={(e) => setOnlyHot(e.target.checked)} />
              <Flame size={14} className={onlyHot ? "text-yellow-300" : "text-zinc-600"} />
              Só os mais cobrados
            </label>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {[{ id: "todos", label: "Todos" }, ...WS_GROUPS.map((g) => ({ id: g.id, label: g.label }))].map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-bold cursor-pointer transition-colors ${
                  group === g.id
                    ? "bg-blue-400 text-[#0a0910]"
                    : "border border-white/12 text-zinc-400 hover:border-blue-300/50 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-[11.5px] text-zinc-500">
            Exibindo <span className="text-blue-300 font-bold font-mono">{shown}</span> de{" "}
            <span className="font-mono">{total}</span> atalhos + tabela de teclas de função abaixo
          </p>
        </div>
      </Reveal>

      {/* listagem */}
      {(Object.entries(result) as [string, (WShortcut & { g: string })[]][]).map(([gid, items]) => {
        if (items.length === 0) return null;
        const g = WS_GROUPS.find((x) => x.id === gid);
        return (
          <div key={gid} className="mb-10">
            {g && (
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
                  <Keyboard size={19} className="text-blue-300" /> {g.label}
                  <span className="font-mono text-[11px] font-normal text-zinc-500 border border-white/10 rounded-full px-2.5 py-1">
                    {items.length}
                  </span>
                </h3>
                <p className="text-[13px] text-zinc-500 mt-1.5">{g.intro}</p>
              </div>
            )}
            <motion.div layout className="rounded-2xl border border-white/[0.07] overflow-hidden">
              {items.map((s, i) => (
                <div
                  key={`${gid}-${s.k}-${i}`}
                  className={`flex flex-col md:flex-row md:items-center gap-2.5 md:gap-5 px-4 sm:px-5 py-3.5 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors ${
                    i % 2 === 0 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <div className="md:w-[290px] shrink-0 flex items-center gap-2">
                    {!!s.q && <Flame size={13} className="text-yellow-300 shrink-0" aria-label="muito cobrado" />}
                    <Keys combo={s.k} />
                  </div>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {s.f}
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
            Nenhum atalho encontrado para <span className="text-blue-300 font-mono">"{query}"</span>.
          </p>
          <p className="text-zinc-600 text-[12.5px] mt-2">Tente "salvar", "justificar", "campo" ou limpe os filtros.</p>
        </div>
      )}

      {/* teclas F */}
      <Reveal className="mt-6">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
              <Keyboard size={19} className="text-blue-300" /> As 12 teclas de função em detalhe
            </h3>
            <button
              onClick={() => setShowFKeys((v) => !v)}
              className="ml-auto rounded-full border border-blue-300/40 bg-blue-300/10 px-4 py-1.5 text-[11.5px] font-bold text-blue-200 hover:bg-blue-300/20 transition-colors cursor-pointer"
            >
              {showFKeys ? "Recolher tabela" : "Expandir tabela"}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {showFKeys && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
                  <table className="w-full min-w-[760px] text-[12.5px]">
                    <thead>
                      <tr className="bg-white/[0.04] text-left">
                        <th className="p-3 font-display text-blue-300 w-[70px]">Tecla</th>
                        <th className="p-3 font-display text-zinc-200">Sozinha</th>
                        <th className="p-3 font-display text-zinc-200">+ Shift</th>
                        <th className="p-3 font-display text-zinc-200">+ Ctrl</th>
                        <th className="p-3 font-display text-zinc-200">+ Alt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FKEYS.map((r, i) => (
                        <tr key={r.f} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}>
                          <td className="p-3">
                            <kbd className="font-mono text-[11px] font-bold text-[#0a0910] bg-blue-300 rounded px-2 py-1">{r.f}</kbd>
                          </td>
                          <td className="p-3 text-zinc-300 align-top">{r.sozinha}</td>
                          <td className="p-3 text-zinc-400 align-top">{r.shift}</td>
                          <td className="p-3 text-zinc-400 align-top">{r.ctrl}</td>
                          <td className="p-3 text-zinc-400 align-top">{r.alt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="o pódio absoluto do Word">
          <p>
            Se só der para guardar doze: <strong className="text-zinc-100">Ctrl+O/A/B/W</strong>{" "}
            (novo, abrir, salvar, fechar) · <strong className="text-zinc-100">Ctrl+N/I/S</strong>{" "}
            (negrito, itálico, sublinhado) · <strong className="text-zinc-100">Ctrl+Q/E/G/J</strong>{" "}
            (esquerda, centralizar, direita, justificar) · <strong className="text-zinc-100">Ctrl+T</strong>{" "}
            (seleciona tudo) · <strong className="text-zinc-100">Ctrl+Enter</strong> (quebra de
            página) · <strong className="text-zinc-100">F7</strong> (ortografia) ·{" "}
            <strong className="text-zinc-100">Shift+F3</strong> (maiúsculas) ·{" "}
            <strong className="text-zinc-100">F12</strong> (salvar como) ·{" "}
            <strong className="text-zinc-100">Ctrl+Shift+E</strong> (controlar alterações) ·{" "}
            <strong className="text-zinc-100">F4</strong> (repetir última ação) ·{" "}
            <strong className="text-zinc-100">F8</strong> (estender seleção).
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Padrão de pegadinha da FGV/FGV-family: misturar o atalho do <strong className="text-zinc-100">Word
          PT-BR</strong> com o do Word em inglês ou com atalhos do Windows. Âncoras mentais:{" "}
          <strong className="text-zinc-100">O</strong> de novO documento, <strong className="text-zinc-100">A</strong>{" "}
          de Abrir, <strong className="text-zinc-100">B</strong> de guardar ("salvar"),{" "}
          <strong className="text-zinc-100">T</strong> de Tudo, <strong className="text-zinc-100">N</strong>{" "}
          de Negrito e a família de alinhamentos <strong className="text-zinc-100">Q-E-G-J</strong>{" "}
          sem tradução direta.
        </P>
      </Reveal>
    </SectionShell>
  );
}
