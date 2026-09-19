import { motion } from "framer-motion";
import { Flame, Keyboard, MonitorPlay, Pencil, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Callout, P, Reveal, SectionShell } from "../../components/ui";
import { PS_DATA, PS_GROUPS, type PShortcut } from "../../data/shortcuts6";

function Keys({ combo }: { combo: string }) {
  const livre = /·|arrastar|clique|número|Alt \+ S, B|Alt \+ W,|Alt \+ J/i.test(combo);
  if (livre) return <span className="font-mono text-[11.5px] font-semibold text-orange-200">{combo}</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {combo.split(" + ").map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600 text-[10px]">+</span>}
          <kbd className="font-mono text-[10.5px] font-bold text-orange-200 border border-orange-300/25 bg-orange-300/[0.08] rounded px-1.5 py-[3px] whitespace-nowrap">
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

type Modo = "todos" | "edicao" | "apresentacao";

export default function PptShortcutsSection() {
  const [modo, setModo] = useState<Modo>("todos");
  const [group, setGroup] = useState("todos");
  const [query, setQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);

  const flat = useMemo(() => {
    const all: (PShortcut & { g: string; m: string })[] = [];
    PS_GROUPS.forEach((g) => PS_DATA[g.id].forEach((s) => all.push({ ...s, g: g.label, m: g.modo })));
    return all;
  }, []);

  const gruposVisiveis = useMemo(
    () => PS_GROUPS.filter((g) => modo === "todos" || g.modo === modo),
    [modo]
  );

  const result = useMemo(() => {
    const nq = normalize(query);
    const match = (s: PShortcut & { g: string; m: string }) =>
      (!onlyHot || s.q) &&
      (modo === "todos" || s.m === modo) &&
      (nq === "" || normalize(`${s.k} ${s.f} ${s.g}`).includes(nq));

    if (group === "todos") {
      return { todos: flat.filter(match) } as Record<string, (PShortcut & { g: string; m: string })[]>;
    }
    const g = PS_GROUPS.find((x) => x.id === group)!;
    return {
      [group]: (PS_DATA[group] as PShortcut[])
        .map((s) => ({ ...s, g: "", m: g.modo }))
        .filter(match),
    };
  }, [group, query, onlyHot, modo, flat]);

  const shown = Object.values(result).reduce((n, arr) => n + arr.length, 0);
  const total = flat.length;

  return (
    <SectionShell
      id="atalhos"
      num="05"
      kicker="A joia desta parte · edição + modo apresentação"
      title={
        <>
          <span className="italic text-orange-300">Todos</span> os atalhos do PowerPoint 2019
        </>
      }
      lead={
        <>
          Mais de <strong className="text-zinc-100">130 combinações</strong> da documentação
          oficial, divididas em dois universos: os de{" "}
          <strong className="text-zinc-100">edição</strong> (montando os slides) e os do{" "}
          <strong className="text-orange-300">modo de apresentação</strong> (com a plateia na
          frente) — estes últimos são exclusivos do PowerPoint e caem muito.
        </>
      }
    >
      {/* seletor de universo */}
      <Reveal>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {([
            { k: "todos", t: "Todos os atalhos", i: Keyboard, d: `${total} combinações` },
            { k: "edicao", t: "Modo de edição", i: Pencil, d: "criando os slides" },
            { k: "apresentacao", t: "Modo apresentação", i: MonitorPlay, d: "com a plateia na frente" },
          ] as const).map((m) => (
            <button
              key={m.k}
              onClick={() => {
                setModo(m.k as Modo);
                setGroup("todos");
              }}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left cursor-pointer transition-colors ${
                modo === m.k
                  ? "border-orange-300/60 bg-orange-300/[0.1]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-orange-300/35"
              }`}
            >
              <m.i size={18} className={modo === m.k ? "text-orange-300" : "text-zinc-500"} />
              <div className="leading-tight">
                <p className={`text-[13px] font-bold ${modo === m.k ? "text-orange-200" : "text-zinc-300"}`}>{m.t}</p>
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
                placeholder="Buscar atalho ou função... (ex.: tela preta, caneta, novo slide)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-10 py-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-orange-300/60 focus:bg-orange-300/[0.04] transition-colors"
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
            {[{ id: "todos", label: "Todos os grupos" }, ...gruposVisiveis.map((g) => ({ id: g.id, label: g.label }))].map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-bold cursor-pointer transition-colors ${
                  group === g.id
                    ? "bg-orange-300 text-[#0a0910]"
                    : "border border-white/12 text-zinc-400 hover:border-orange-300/50 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-[11.5px] text-zinc-500">
            Exibindo <span className="text-orange-300 font-bold font-mono">{shown}</span> de{" "}
            <span className="font-mono">{total}</span> atalhos catalogados
          </p>
        </div>
      </Reveal>

      {(Object.entries(result) as [string, (PShortcut & { g: string; m: string })[]][]).map(([gid, items]) => {
        if (items.length === 0) return null;
        const g = PS_GROUPS.find((x) => x.id === gid);
        return (
          <div key={gid} className="mb-10">
            {g && (
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
                  {g.modo === "apresentacao" ? (
                    <MonitorPlay size={19} className="text-orange-300" />
                  ) : (
                    <Keyboard size={19} className="text-orange-300" />
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
                g?.modo === "apresentacao" ? "border-orange-300/25" : "border-white/[0.07]"
              }`}
            >
              {items.map((s, i) => (
                <div
                  key={`${gid}-${s.k}-${i}`}
                  className={`flex flex-col md:flex-row md:items-center gap-2.5 md:gap-5 px-4 sm:px-5 py-3.5 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors ${
                    i % 2 === 0 ? "bg-white/[0.015]" : ""
                  } ${s.m === "apresentacao" ? "bg-orange-300/[0.02]" : ""}`}
                >
                  <div className="md:w-[290px] shrink-0 flex items-center gap-2">
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
            Nenhum atalho encontrado para <span className="text-orange-300 font-mono">"{query}"</span>.
          </p>
          <p className="text-zinc-600 text-[12.5px] mt-2">Tente "slide", "animação", "laser" ou limpe os filtros.</p>
        </div>
      )}

      <Reveal>
        <Callout variant="macete" title="o kit de sobrevivência do apresentador">
          <p>
            Antes de subir ao palco, grave seis teclas:{" "}
            <strong className="text-zinc-100">F5</strong> (começa do início) ·{" "}
            <strong className="text-zinc-100">Shift+F5</strong> (começa daqui) ·{" "}
            <strong className="text-zinc-100">N/P</strong> ou setas (avança/volta) ·{" "}
            <strong className="text-zinc-100">B</strong> (tela preta) ·{" "}
            <strong className="text-zinc-100">número + Enter</strong> (pula para um slide) ·{" "}
            <strong className="text-zinc-100">Esc</strong> (encerra). Com essas seis você conduz
            qualquer apresentação — e responde qualquer questão do tema.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="atenção às variações de versão e teclado">
          <p>
            Alguns atalhos do modo apresentação variam conforme a versão e o layout de teclado: a
            documentação em português registra{" "}
            <strong className="text-zinc-100">Ctrl+C</strong> para caneta e{" "}
            <strong className="text-zinc-100">Ctrl+Q</strong> para laser, enquanto o padrão
            internacional (e a maioria dos materiais) usa{" "}
            <strong className="text-zinc-100">Ctrl+P</strong> (pen/caneta),{" "}
            <strong className="text-zinc-100">Ctrl+L</strong> (laser) e{" "}
            <strong className="text-zinc-100">E</strong> (erase/apagar). Se a questão cobrar, siga a
            alternativa que apareça — as demais teclas do grupo (Ctrl+A = seta, Ctrl+M = mostrar/ocultar
            tinta) são estáveis.
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Fechando a trilogia do Office: os atalhos <strong className="text-zinc-100">Ctrl+O, Ctrl+A,
          Ctrl+B, Ctrl+P, Ctrl+N/I/S e Ctrl+T</strong> se repetem em Word, Excel e PowerPoint. O que
          distingue cada programa são os "atalhos de ofício": no Word, F7 e Ctrl+Enter; no Excel,
          F2, F4 e Alt+=; no PowerPoint, <strong className="text-zinc-100">Ctrl+M, F5, Shift+F5 e as
          teclas B/W</strong>.
        </P>
      </Reveal>
    </SectionShell>
  );
}
