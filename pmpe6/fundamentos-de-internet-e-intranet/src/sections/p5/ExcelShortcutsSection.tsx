import { motion } from "framer-motion";
import { Flame, Keyboard, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Callout, P, Reveal, SectionShell } from "../../components/ui";
import { XS_DATA, XS_GROUPS, type XShortcut } from "../../data/shortcuts5";

function Keys({ combo }: { combo: string }) {
  const livre = /arrastar|clique|Alça|Alt, /i.test(combo);
  if (livre) return <span className="font-mono text-[11.5px] font-semibold text-emerald-200">{combo}</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {combo.split(" + ").map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600 text-[10px]">+</span>}
          <kbd className="font-mono text-[10.5px] font-bold text-emerald-200 border border-emerald-300/25 bg-emerald-300/[0.08] rounded px-1.5 py-[3px] whitespace-nowrap">
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

export default function ExcelShortcutsSection() {
  const [group, setGroup] = useState("todos");
  const [query, setQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);

  const flat = useMemo(() => {
    const all: (XShortcut & { g: string })[] = [];
    XS_GROUPS.forEach((g) => XS_DATA[g.id].forEach((s) => all.push({ ...s, g: g.label })));
    return all;
  }, []);

  const total = flat.length;

  const result = useMemo(() => {
    const nq = normalize(query);
    const match = (s: XShortcut & { g: string }) =>
      (!onlyHot || s.q) && (nq === "" || normalize(`${s.k} ${s.f} ${s.g}`).includes(nq));
    if (group === "todos") return { todos: flat.filter(match) } as Record<string, (XShortcut & { g: string })[]>;
    return {
      [group]: (XS_DATA[group] as (XShortcut & { g: string })[]).map((s) => ({ ...s, g: "" })).filter(match),
    };
  }, [group, query, onlyHot, flat]);

  const shown = Object.values(result).reduce((n, arr) => n + arr.length, 0);

  return (
    <SectionShell
      id="atalhos"
      num="06"
      kicker="A joia desta parte · use a busca"
      title={
        <>
          <span className="italic text-emerald-300">Todos</span> os atalhos do Excel 2019
        </>
      }
      lead={
        <>
          Catálogo com <strong className="text-zinc-100">mais de 130 combinações</strong> da
          documentação oficial, organizadas em 8 famílias — incluindo a tabela das teclas F1–F12. A{" "}
          <span className="text-yellow-300 font-semibold">chama</span> marca as mais cobradas.
          Busque por tecla ("Ctrl+1") ou por função ("filtro", "data").
        </>
      }
    >
      <Reveal>
        <div className="sticky top-[72px] z-30 rounded-2xl border border-white/[0.08] bg-[#0d0c14]/95 backdrop-blur-xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar atalho ou função... (ex.: autossoma, moeda, planilha)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-10 py-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-emerald-300/60 focus:bg-emerald-300/[0.04] transition-colors"
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
            {[{ id: "todos", label: "Todos" }, ...XS_GROUPS.map((g) => ({ id: g.id, label: g.label }))].map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-bold cursor-pointer transition-colors ${
                  group === g.id
                    ? "bg-emerald-300 text-[#0a0910]"
                    : "border border-white/12 text-zinc-400 hover:border-emerald-300/50 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-[11.5px] text-zinc-500">
            Exibindo <span className="text-emerald-300 font-bold font-mono">{shown}</span> de{" "}
            <span className="font-mono">{total}</span> atalhos catalogados
          </p>
        </div>
      </Reveal>

      {(Object.entries(result) as [string, (XShortcut & { g: string })[]][]).map(([gid, items]) => {
        if (items.length === 0) return null;
        const g = XS_GROUPS.find((x) => x.id === gid);
        return (
          <div key={gid} className="mb-10">
            {g && (
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
                  <Keyboard size={19} className="text-emerald-300" /> {g.label}
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
                  <div className="md:w-[270px] shrink-0 flex items-center gap-2">
                    {!!s.q && <Flame size={13} className="text-yellow-300 shrink-0" />}
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
            Nenhum atalho encontrado para <span className="text-emerald-300 font-mono">"{query}"</span>.
          </p>
          <p className="text-zinc-600 text-[12.5px] mt-2">Tente "soma", "célula", "gráfico" ou limpe os filtros.</p>
        </div>
      )}

      <Reveal>
        <Callout variant="prova" title="o pódio absoluto do Excel">
          <p>
            Doze para nunca esquecer: <strong className="text-zinc-100">Ctrl+O/A/B/W</strong>{" "}
            (novo, abrir, salvar, fechar) · <strong className="text-zinc-100">F2</strong> (editar
            célula) · <strong className="text-zinc-100">F4</strong> (alternar referência dentro da
            fórmula) · <strong className="text-zinc-100">Alt+=</strong> (autossoma) ·{" "}
            <strong className="text-zinc-100">Ctrl+1</strong> (formatar células) ·{" "}
            <strong className="text-zinc-100">Ctrl+;</strong> (data de hoje) ·{" "}
            <strong className="text-zinc-100">Ctrl+Home / Ctrl+End</strong> (início/última célula) ·{" "}
            <strong className="text-zinc-100">Ctrl+Page Down/Up</strong> (trocar de aba) ·{" "}
            <strong className="text-zinc-100">Shift+F11</strong> (nova planilha) ·{" "}
            <strong className="text-zinc-100">F11</strong> (gráfico em nova folha) ·{" "}
            <strong className="text-zinc-100">Ctrl+Shift+L</strong> (filtro) ·{" "}
            <strong className="text-zinc-100">Alt+Enter</strong> (quebra de linha na célula).
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Perceba a simetria com o Word: <strong className="text-zinc-100">Ctrl+O, Ctrl+A, Ctrl+B,
          Ctrl+W, Ctrl+N/I/S e Ctrl+T</strong> têm o mesmo significado nos dois programas (é o padrão
          do Office PT-BR). O que muda são os atalhos "de planilha" — F2, F4, Alt+=, Ctrl+1,
          Ctrl+Page Down —, e são exatamente esses que as bancas usam para separar quem estudou
          Excel de quem só decorou Word.
        </P>
      </Reveal>
    </SectionShell>
  );
}
