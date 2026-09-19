import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeftRight, Flame, Keyboard, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";
import { DIFERENCAS, W7_DATA, W7_GROUPS, type WShort } from "../../data/shortcuts7";

function Keys({ combo }: { combo: string }) {
  const livre = /\.\.\.|\/|\(|setas/i.test(combo);
  if (livre) return <span className="font-mono text-[11.5px] font-semibold text-teal-200">{combo}</span>;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {combo.split(" + ").map((p, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-zinc-600 text-[10px]">+</span>}
          <kbd className="font-mono text-[10.5px] font-bold text-teal-200 border border-teal-300/25 bg-teal-300/[0.08] rounded px-1.5 py-[3px] whitespace-nowrap">
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

export default function WriterShortcutsSection() {
  const [group, setGroup] = useState("todos");
  const [query, setQuery] = useState("");
  const [onlyHot, setOnlyHot] = useState(false);
  const [onlyDiff, setOnlyDiff] = useState(false);

  const flat = useMemo(() => {
    const all: (WShort & { g: string })[] = [];
    W7_GROUPS.forEach((g) => W7_DATA[g.id].forEach((s) => all.push({ ...s, g: g.label })));
    return all;
  }, []);

  const total = flat.length;

  const result = useMemo(() => {
    const nq = normalize(query);
    const match = (s: WShort & { g: string }) =>
      (!onlyHot || s.q) &&
      (!onlyDiff || s.d) &&
      (nq === "" || normalize(`${s.k} ${s.f} ${s.g}`).includes(nq));
    if (group === "todos") return { todos: flat.filter(match) } as Record<string, (WShort & { g: string })[]>;
    return {
      [group]: (W7_DATA[group] as (WShort & { g: string })[]).map((s) => ({ ...s, g: "" })).filter(match),
    };
  }, [group, query, onlyHot, onlyDiff, flat]);

  const shown = Object.values(result).reduce((n, arr) => n + arr.length, 0);

  return (
    <SectionShell
      id="atalhos"
      num="05"
      kicker="A joia desta parte · com alerta de diferença"
      title={
        <>
          Atalhos do Writer <span className="text-zinc-500">+</span>{" "}
          <span className="italic text-teal-300">Word × Writer</span>
        </>
      }
      lead={
        <>
          Mais de <strong className="text-zinc-100">130 combinações</strong> da documentação
          oficial. E, como o LibreOffice segue o padrão{" "}
          <strong className="text-zinc-100">internacional</strong> (Ctrl+B = Bold) enquanto o Word
          PT-BR usa as iniciais em português (Ctrl+N = Negrito), marcamos com{" "}
          <span className="text-rose-300 font-semibold">⚠ diferente do Word</span> cada atalho que
          muda — é ali que a banca ataca.
        </>
      }
    >
      {/* TABELA DE DIFERENÇAS — destaque máximo */}
      <Reveal>
        <div className="rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-400/[0.08] to-transparent p-6 sm:p-8 my-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ArrowLeftRight size={19} className="text-rose-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">
              O confronto direto: Word PT-BR × Writer
            </h3>
          </div>
          <p className="text-[13.5px] text-zinc-400 mb-5">
            Se você decorar apenas esta tabela, já elimina a maioria dos erros em provas que cobram
            as duas suítes. As linhas em vermelho são as{" "}
            <strong className="text-rose-300">armadilhas cruzadas</strong>: a tecla existe nos dois
            programas, mas faz coisas diferentes.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/[0.09]">
            <table className="w-full min-w-[700px] text-[13px]">
              <thead>
                <tr className="bg-white/[0.05] text-left">
                  <th className="p-3.5 font-display text-base text-zinc-200 w-[26%]">Ação</th>
                  <th className="p-3.5 font-display text-base text-blue-300 w-[20%]">Word PT-BR</th>
                  <th className="p-3.5 font-display text-base text-teal-300 w-[20%]">Writer</th>
                  <th className="p-3.5 font-display text-base text-rose-300">Cuidado!</th>
                </tr>
              </thead>
              <tbody>
                {DIFERENCAS.map((d, i) => (
                  <tr
                    key={d.acao}
                    className={`border-t border-white/[0.05] ${
                      d.alerta && !d.alerta.startsWith("Igual") && !d.alerta.startsWith("O único")
                        ? "bg-rose-400/[0.05]"
                        : i % 2 === 0
                          ? "bg-white/[0.015]"
                          : ""
                    }`}
                  >
                    <td className="p-3.5 text-zinc-300 font-medium">{d.acao}</td>
                    <td className="p-3.5">
                      <code className="font-mono text-[12px] text-blue-200">{d.word}</code>
                    </td>
                    <td className="p-3.5">
                      <code className="font-mono text-[12px] text-teal-200">{d.writer}</code>
                    </td>
                    <td className="p-3.5 text-[12.5px] text-zinc-400">{d.alerta ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-yellow-300/25 bg-yellow-300/[0.07] p-4">
            <AlertTriangle size={16} className="text-yellow-300 mt-0.5 shrink-0" />
            <p className="text-[13px] leading-relaxed text-yellow-100/90">
              <strong className="text-yellow-300">O quarteto mortal:</strong> as teclas{" "}
              <strong className="text-zinc-100">Ctrl+N, Ctrl+A, Ctrl+B e Ctrl+S</strong> existem nos
              dois programas e fazem <strong className="text-zinc-100">coisas completamente
              diferentes</strong>. No Word PT-BR: novo, abrir, salvar e sublinhado. No Writer:
              negrito, selecionar tudo, novo e salvar. Leia sempre QUAL programa a questão cita.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="macete" title="por que essa confusão existe?">
          <p>
            O <strong className="text-zinc-100">Word em português</strong> traduziu os atalhos para
            as iniciais das palavras em PT (<strong className="text-zinc-100">N</strong>egrito,{" "}
            <strong className="text-zinc-100">S</strong>ublinhado, sal<strong className="text-zinc-100">B</strong>ar...).
            O <strong className="text-zinc-100">LibreOffice</strong> manteve o padrão{" "}
            <strong className="text-zinc-100">internacional em inglês</strong>:{" "}
            <strong className="text-zinc-100">B</strong>old, <strong className="text-zinc-100">U</strong>nderline,{" "}
            <strong className="text-zinc-100">S</strong>ave, <strong className="text-zinc-100">N</strong>ew,{" "}
            <strong className="text-zinc-100">O</strong>pen, <strong className="text-zinc-100">A</strong>ll,{" "}
            <strong className="text-zinc-100">L</strong>eft, <strong className="text-zinc-100">R</strong>ight,{" "}
            <strong className="text-zinc-100">Q</strong>uit. Pense em inglês e você acerta todos os
            atalhos do Writer.
          </p>
        </Callout>
      </Reveal>

      {/* busca */}
      <Reveal>
        <div className="sticky top-[72px] z-30 rounded-2xl border border-white/[0.08] bg-[#0d0c14]/95 backdrop-blur-xl p-4 sm:p-5 mb-6 mt-10">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar atalho ou função... (ex.: navegador, estilo, tabela)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-10 py-3 text-[13.5px] text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-teal-300/60 focus:bg-teal-300/[0.04] transition-colors"
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
                Só os diferentes do Word
              </label>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {[{ id: "todos", label: "Todos" }, ...W7_GROUPS.map((g) => ({ id: g.id, label: g.label }))].map((g) => (
              <button
                key={g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-bold cursor-pointer transition-colors ${
                  group === g.id
                    ? "bg-teal-300 text-[#0a0910]"
                    : "border border-white/12 text-zinc-400 hover:border-teal-300/50 hover:text-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-[11.5px] text-zinc-500">
            Exibindo <span className="text-teal-300 font-bold font-mono">{shown}</span> de{" "}
            <span className="font-mono">{total}</span> atalhos catalogados
          </p>
        </div>
      </Reveal>

      {(Object.entries(result) as [string, (WShort & { g: string })[]][]).map(([gid, items]) => {
        if (items.length === 0) return null;
        const g = W7_GROUPS.find((x) => x.id === gid);
        return (
          <div key={gid} className="mb-10">
            {g && (
              <div className="mb-4">
                <h3 className="font-display text-2xl text-[#f4f1ea] flex items-center gap-3">
                  <Keyboard size={19} className="text-teal-300" /> {g.label}
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
                    s.d ? "bg-rose-400/[0.04]" : i % 2 === 0 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <div className="md:w-[270px] shrink-0 flex items-center gap-2">
                    {!!s.q && <Flame size={13} className="text-yellow-300 shrink-0" />}
                    {!!s.d && <AlertTriangle size={12} className="text-rose-300 shrink-0" aria-label="diferente do Word" />}
                    <Keys combo={s.k} />
                  </div>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    {s.f}
                    {!!s.d && (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.12em] text-rose-300/80">
                        · difere do Word
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
            Nenhum atalho encontrado para <span className="text-teal-300 font-mono">"{query}"</span>.
          </p>
          <p className="text-zinc-600 text-[12.5px] mt-2">Tente "salvar", "título", "quebra" ou limpe os filtros.</p>
        </div>
      )}

      <Reveal>
        <Callout variant="prova" title="o pódio absoluto do Writer">
          <p>
            Doze para gravar: <strong className="text-zinc-100">Ctrl+N/O/S</strong> (novo, abrir,
            salvar) · <strong className="text-zinc-100">Ctrl+B/I/U</strong> (negrito, itálico,
            sublinhado) · <strong className="text-zinc-100">Ctrl+L/E/R/J</strong> (alinhamentos) ·{" "}
            <strong className="text-zinc-100">Ctrl+A</strong> (selecionar tudo) ·{" "}
            <strong className="text-zinc-100">Ctrl+M</strong> (limpar formatação) ·{" "}
            <strong className="text-zinc-100">F5</strong> (Navegador) ·{" "}
            <strong className="text-zinc-100">F7</strong> (ortografia) ·{" "}
            <strong className="text-zinc-100">F11</strong> (Estilos) ·{" "}
            <strong className="text-zinc-100">Ctrl+F12</strong> (tabela) ·{" "}
            <strong className="text-zinc-100">Ctrl+F10</strong> (marcas ¶) ·{" "}
            <strong className="text-zinc-100">Ctrl+1/0</strong> (Título 1 / Corpo de texto) ·{" "}
            <strong className="text-zinc-100">Ctrl+Q</strong> (sair).
          </p>
        </Callout>
      </Reveal>

      <Reveal>
        <P>
          Uma última carta na manga: o LibreOffice permite{" "}
          <Hot tone="e">personalizar qualquer atalho</Hot> em{" "}
          <Hot>Ferramentas → Personalizar → aba Teclado</Hot> — inclusive para deixá-los iguais aos
          do Word. É um recurso que o Word não oferece com a mesma facilidade, e que já apareceu
          como item verdadeiro em provas.
        </P>
      </Reveal>
    </SectionShell>
  );
}
