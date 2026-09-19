import { useEffect, useState } from "react";
import type { NavItem } from "../data/content";

export default function Toc({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-28 hidden xl:block w-[260px] shrink-0 self-start">
      <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-zinc-500 mb-4 pl-3">
        Nesta parte
      </p>
      <ul className="space-y-0.5 border-l border-white/[0.07]">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`toc-link group flex items-center gap-3 -ml-px pl-3 py-[7px] text-[13px] text-zinc-500 hover:text-zinc-200 ${
                active === item.id ? "active" : ""
              }`}
            >
              <span
                className={`toc-dot w-1 h-1 rounded-full bg-zinc-700 transition-all ${
                  active === item.id ? "" : "group-hover:bg-zinc-400"
                }`}
              />
              <span className="font-mono text-[10px] opacity-60">{item.num}</span>
              <span className="font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 ml-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 mb-2">
          Bancas-alvo
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Cebraspe", "FGV", "FCC", "Vunesp", "Consulplan"].map((b) => (
            <span
              key={b}
              className="text-[10.5px] font-semibold text-zinc-400 border border-white/10 rounded-full px-2.5 py-1"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
