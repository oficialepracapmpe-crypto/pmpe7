import { ArrowUp, BookOpenCheck, GraduationCap, ListChecks, MousePointerClick, Timer } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Hero, { type HeroData } from "./components/Hero";
import Nav from "./components/Nav";
import Toc from "./components/Toc";
import { TOPICS } from "./data/portuguese";
import { TOPICS_2 } from "./data/portuguese2";
import { INFORMATICS_TOPICS } from "./data/informatics";
import { LINDB_TOPICS } from "./data/lindb";
import { CRIMINAL_LAW_TOPICS } from "./data/criminalLaws";
import { CRIMINAL_PROCEDURE_TOPICS } from "./data/criminalProcedure";
import { HUMAN_RIGHTS_1_TOPICS } from "./data/humanRights1";
import { HUMAN_RIGHTS_2_TOPICS } from "./data/humanRights2";
import TopicPage from "./sections/TopicPage";

export type Part = number;
const ALL_TOPICS = [...TOPICS, ...TOPICS_2, ...INFORMATICS_TOPICS, ...LINDB_TOPICS, ...CRIMINAL_LAW_TOPICS, ...CRIMINAL_PROCEDURE_TOPICS, ...HUMAN_RIGHTS_1_TOPICS, ...HUMAN_RIGHTS_2_TOPICS];
type Theme = "dark" | "light";

const NAV_ITEMS = [
  { id: "contexto", num: "01", label: "Contexto e natureza" },
  { id: "analise", num: "02", label: "Análise ponto a ponto" },
  { id: "resumo", num: "03", label: "Quadro-resumo" },
  { id: "questao", num: "04", label: "Questão-treino" },
];

export default function App() {
  const [part, setPart] = useState<Part>(1);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("pmpe-theme") as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const topic = ALL_TOPICS[part - 1];
  const subject = part <= 6 ? "Português" : part <= 13 ? "Informática" : part === 14 ? "Direito Administrativo" : part <= 16 ? "Direito Penal" : part === 17 ? "Processo Penal" : "Direitos Humanos";

  const hero = useMemo<HeroData>(() => ({
    eyebrow: topic.eyebrow,
    title: topic.title,
    subtitle: <>{topic.subtitle} — <span className="text-yellow-300 not-italic font-medium">do jeito que a banca cobra</span></>,
    description: <>Material completo e didático para o concurso de Oficial PMPE, com <span className="text-zinc-200 font-medium">contexto, pegadinhas, exemplos policiais, macetes</span> e questão comentada.</>,
    stats: [
      { icon: BookOpenCheck, big: String(topic.groups.reduce((sum, group) => sum + group.points.length, 0)), small: "itens analisados" },
      { icon: Timer, big: topic.reading, small: "de leitura focada" },
      { icon: ListChecks, big: String(topic.questions?.length ?? 1), small: (topic.questions?.length ?? 1) > 1 ? "questões comentadas" : "questão comentada" },
      { icon: MousePointerClick, big: "100%", small: "interativo e responsivo" },
    ],
    terms: topic.terms,
    palette: (["warm", "cool", "fresh", "azure", "leaf", "ember", "teal", "lime", "rose"] as const)[(part - 1) % 9],
    termsLabel: "Termos mais cobrados",
    startId: "contexto",
  }), [part, topic]);

  const goPart = (next: Part) => {
    setPart(next);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("pmpe-theme", theme);
    const color = theme === "dark" ? "#0a0910" : "#f5f1e8";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
  }, [theme]);

  useEffect(() => {
    document.title = `${topic.title} · Material para Oficial PMPE`;
  }, [topic.title]);

  return (
    <div className="app-shell noise min-h-screen bg-[#0a0910] antialiased">
      <Nav part={part} onSelectPart={goPart} partTitle={topic.short} subject={subject} topics={ALL_TOPICS.map((item) => item.short)} theme={theme} onToggleTheme={() => setTheme((value) => value === "dark" ? "light" : "dark")} />
      <AnimatePresence mode="wait">
        <motion.div key={`hero-${part}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Hero data={hero} />
        </motion.div>
      </AnimatePresence>

      <main className="content-main relative bg-blueprint">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="xl:flex xl:gap-14 pt-6 pb-24">
            <Toc items={NAV_ITEMS} key={part} />
            <motion.div key={part} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="study-content min-w-0 flex-1 max-w-[880px]">
              <TopicPage topic={topic} />
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="site-footer border-t border-white/[0.07] bg-[#0d0c14]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3"><span className="grid place-items-center w-10 h-10 rounded-xl bg-yellow-300 text-[#0a0910]"><GraduationCap size={20} /></span><div className="leading-tight"><p className="text-sm font-bold text-[#f4f1ea]">Material para Oficial PMPE</p><p className="text-[11.5px] text-zinc-500">Prompts 1 a 8 · Material completo do novo edital</p></div></div>
          <div className="text-[12px] leading-relaxed text-zinc-500 sm:text-right"><p>Material didático com foco em concursos militares estaduais.</p><p className="text-zinc-600">Redação Oficial não foi incluída, conforme a remoção indicada no edital.</p></div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="back-top fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-yellow-300/30 bg-[#0d0c14]/90 text-yellow-300 shadow-xl backdrop-blur hover:bg-yellow-300 hover:text-[#0a0910] cursor-pointer" aria-label="Voltar ao topo"><ArrowUp size={18} /></motion.button>}
    </AnimatePresence>
  );
}
