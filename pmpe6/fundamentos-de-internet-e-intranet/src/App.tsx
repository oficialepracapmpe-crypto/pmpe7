import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  BookOpenCheck,
  GraduationCap,
  Highlighter,
  Keyboard,
  ListChecks,
  MousePointerClick,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { useEffect, useState } from "react";
import Hero, { type HeroData } from "./components/Hero";
import Nav from "./components/Nav";
import Toc from "./components/Toc";
import { HOT_TERMS, NAV_ITEMS } from "./data/content";
import { HOT_TERMS_2, NAV_ITEMS_2 } from "./data/content2";
import { HOT_TERMS_3, NAV_ITEMS_3 } from "./data/content3";
import { HOT_TERMS_4, NAV_ITEMS_4 } from "./data/content4";
import { HOT_TERMS_5, NAV_ITEMS_5 } from "./data/content5";
import { HOT_TERMS_6, NAV_ITEMS_6 } from "./data/content6";
import { HOT_TERMS_7, NAV_ITEMS_7 } from "./data/content7";
import { HOT_TERMS_8, NAV_ITEMS_8 } from "./data/content8";
import { HOT_TERMS_9, NAV_ITEMS_9 } from "./data/content9";
import { HOT_TERMS_10, NAV_ITEMS_10 } from "./data/content10";
/* Parte 1 */
import BrowsersSection from "./sections/BrowsersSection";
import CompareSection from "./sections/CompareSection";
import EmailSection from "./sections/EmailSection";
import ExtranetSection from "./sections/ExtranetSection";
import InternetSection from "./sections/InternetSection";
import IntranetSection from "./sections/IntranetSection";
import ProtocolsSection from "./sections/ProtocolsSection";
import QuizSection from "./sections/QuizSection";
import SummarySection from "./sections/SummarySection";
import UrlSection from "./sections/UrlSection";
/* Parte 2 */
import BackupSection from "./sections/p2/BackupSection";
import CryptoSection from "./sections/p2/CryptoSection";
import DefenseSection from "./sections/p2/DefenseSection";
import MalwareSection from "./sections/p2/MalwareSection";
import PrinciplesSection from "./sections/p2/PrinciplesSection";
import QuizSection2 from "./sections/p2/QuizSection2";
import SocialSection from "./sections/p2/SocialSection";
import StorageSection from "./sections/p2/StorageSection";
import Summary2 from "./sections/p2/Summary2";
/* Parte 3 */
import ExtensionsSection from "./sections/p3/ExtensionsSection";
import FilesSection from "./sections/p3/FilesSection";
import ProgramsSection from "./sections/p3/ProgramsSection";
import QuizSection3 from "./sections/p3/QuizSection3";
import ShortcutsSection from "./sections/p3/ShortcutsSection";
import Summary3 from "./sections/p3/Summary3";
import WindowsSection from "./sections/p3/WindowsSection";
/* Parte 4 */
import FeaturesSection from "./sections/p4/FeaturesSection";
import InterfaceSection from "./sections/p4/InterfaceSection";
import OpenSection from "./sections/p4/OpenSection";
import QuizSection4 from "./sections/p4/QuizSection4";
import RibbonSection from "./sections/p4/RibbonSection";
import Summary4 from "./sections/p4/Summary4";
import WordShortcutsSection from "./sections/p4/WordShortcutsSection";
/* Parte 5 */
import ConceptsSection from "./sections/p5/ConceptsSection";
import ExcelShortcutsSection from "./sections/p5/ExcelShortcutsSection";
import FunctionsSection from "./sections/p5/FunctionsSection";
import OpenSection5 from "./sections/p5/OpenSection5";
import QuizSection5 from "./sections/p5/QuizSection5";
import ResourcesSection from "./sections/p5/ResourcesSection";
import RibbonSection5 from "./sections/p5/RibbonSection5";
import Summary5 from "./sections/p5/Summary5";
/* Parte 6 */
import ConceptsSection6 from "./sections/p6/ConceptsSection6";
import FeaturesSection6 from "./sections/p6/FeaturesSection6";
import OpenSection6 from "./sections/p6/OpenSection6";
import PptShortcutsSection from "./sections/p6/PptShortcutsSection";
import QuizSection6 from "./sections/p6/QuizSection6";
import RibbonSection6 from "./sections/p6/RibbonSection6";
import Summary6 from "./sections/p6/Summary6";
/* Parte 7 */
import ConceptsSection7 from "./sections/p7/ConceptsSection7";
import FeaturesSection7 from "./sections/p7/FeaturesSection7";
import MenuSection7 from "./sections/p7/MenuSection7";
import OpenSection7 from "./sections/p7/OpenSection7";
import QuizSection7 from "./sections/p7/QuizSection7";
import Summary7 from "./sections/p7/Summary7";
import WriterShortcutsSection from "./sections/p7/WriterShortcutsSection";
/* Parte 8 */
import CalcShortcutsSection from "./sections/p8/CalcShortcutsSection";
import ConceptsSection8 from "./sections/p8/ConceptsSection8";
import FeaturesSection8 from "./sections/p8/FeaturesSection8";
import MenuSection8 from "./sections/p8/MenuSection8";
import OpenSection8 from "./sections/p8/OpenSection8";
import QuizSection8 from "./sections/p8/QuizSection8";
import Summary8 from "./sections/p8/Summary8";
/* Parte 9 */
import ConceptsSection9 from "./sections/p9/ConceptsSection9";
import FeaturesSection9 from "./sections/p9/FeaturesSection9";
import ImpressShortcutsSection from "./sections/p9/ImpressShortcutsSection";
import MenuSection9 from "./sections/p9/MenuSection9";
import OpenSection9 from "./sections/p9/OpenSection9";
import QuizSection9 from "./sections/p9/QuizSection9";
import Summary9 from "./sections/p9/Summary9";
/* Parte 10 */
import OfficeCompareSection10 from "./sections/p10/OfficeCompareSection10";
import QuizSection10 from "./sections/p10/QuizSection10";
import AnswerKeySection10 from "./sections/p10/AnswerKeySection10";
import Summary10 from "./sections/p10/Summary10";

/* ---------- tipo ---------- */
type Part = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/* ---------- dados dos heroes ---------- */
const HERO_1: HeroData = {
  eyebrow: "Informática · Parte 1 de uma série",
  title: "Internet & Intranet",
  subtitle: (
    <>
      conceitos, navegadores, e-mail, URLs e protocolos —{" "}
      <span className="text-yellow-300 not-italic font-medium">do jeito que a banca cobra</span>
    </>
  ),
  description: (
    <>
      Material completo e didático elaborado para concursos públicos: linguagem clara, exemplos
      práticos, <span className="text-zinc-200 font-medium">pegadinhas mapeadas</span> e os termos
      exatos que aparecem nas provas de Cebraspe, FGV, FCC e afins.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "10", small: "capítulos nesta parte" },
    { icon: Timer, big: "~40 min", small: "de leitura focada" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
    { icon: MousePointerClick, big: "100%", small: "interativo e prático" },
  ],
  terms: HOT_TERMS,
  palette: "warm",
  termsLabel: "Termos mais cobrados",
  startId: "internet",
};

const HERO_2: HeroData = {
  eyebrow: "Informática · Parte 2 de uma série",
  title: (
    <>
      Segurança da informação & <span className="text-rose-300">armazenamento de dados</span>
    </>
  ),
  subtitle: (
    <>
      princípios, malwares, antivírus e firewall, criptografia, phishing, dispositivos e backups —{" "}
      <span className="text-yellow-300 not-italic font-medium">
        estruturado para revisar na véspera
      </span>
    </>
  ),
  description: (
    <>
      Dois módulos em um só material: o <span className="text-zinc-200 font-medium">Módulo A</span>{" "}
      destrincha a proteção da informação (CIDA, pragas digitais, chaves, golpes); o{" "}
      <span className="text-zinc-200 font-medium">Módulo B</span> ensina onde os dados vivem e como
      protegê-los com cópias de segurança. Com simuladores interativos e questões comentadas.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "9", small: "capítulos nesta parte" },
    { icon: Timer, big: "~35 min", small: "de leitura focada" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
    { icon: ShieldCheck, big: "2", small: "módulos integrados" },
  ],
  terms: HOT_TERMS_2,
  palette: "cool",
  termsLabel: "Termos mais cobrados",
  startId: "principios",
};

const HERO_3: HeroData = {
  eyebrow: "Informática · Parte 3 de uma série",
  title: (
    <>
      Sistemas operacionais & <span className="text-violet-300">arquivos</span>
    </>
  ),
  subtitle: (
    <>
      organização de arquivos e pastas, extensões, Plug and Play e o ambiente Windows —{" "}
      <span className="text-yellow-300 not-italic font-medium">
        com a lista mais completa de atalhos que você já viu
      </span>
    </>
  ),
  description: (
    <>
      Do gerenciamento de arquivos ao dia a dia no Windows 11, tudo mastigado — e, a pedido dos
      alunos, um <span className="text-zinc-200 font-medium">catálogo exaustivo com mais de
      130 atalhos nativos</span>, pesquisável e filtrável por família, com marcação dos mais
      cobrados nas provas.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~35 min", small: "de leitura focada" },
    { icon: Keyboard, big: "130+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_3,
  palette: "fresh",
  termsLabel: "Termos mais cobrados",
  startId: "arquivos",
};

const HERO_4: HeroData = {
  eyebrow: "Informática · Parte 4 de uma série · Pacote Office",
  title: (
    <>
      Microsoft <span className="text-blue-300">Word 2019</span>
    </>
  ),
  subtitle: (
    <>
      de como abrir o programa à mala direta: a faixa de opções guia por guia e{" "}
      <span className="text-yellow-300 not-italic font-medium">
        absolutamente todos os atalhos em português
      </span>
    </>
  ),
  description: (
    <>
      O guia definitivo do processador de textos mais cobrado em concursos: anatomia da tela,{" "}
      <span className="text-zinc-200 font-medium">explorador interativo de todas as guias</span>{" "}
      (Página Inicial a Exibir), catálogo pesquisável de atalhos com a tabela completa das teclas
      F1–F12 e questões comentadas no estilo das bancas.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~45 min", small: "de leitura focada" },
    { icon: Keyboard, big: "150+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_4,
  palette: "azure",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_5: HeroData = {
  eyebrow: "Informática · Parte 5 de uma série · Pacote Office",
  title: (
    <>
      Microsoft <span className="text-emerald-300">Excel 2019</span>
    </>
  ),
  subtitle: (
    <>
      células, fórmulas e funções, tabelas dinâmicas e gráficos —{" "}
      <span className="text-yellow-300 not-italic font-medium">
        com todos os atalhos em português
      </span>
    </>
  ),
  description: (
    <>
      A planilha eletrônica que mais aparece em provas, destrinchada: grade{" "}
      <span className="text-zinc-200 font-medium">interativa de células</span>, referências
      relativas × absolutas, um navegador com{" "}
      <span className="text-zinc-200 font-medium">44 funções comentadas</span>, todas as guias da
      faixa de opções e o catálogo pesquisável de atalhos.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "8", small: "capítulos nesta parte" },
    { icon: Timer, big: "~50 min", small: "de leitura focada" },
    { icon: Keyboard, big: "130+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_5,
  palette: "leaf",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_6: HeroData = {
  eyebrow: "Informática · Parte 6 de uma série · Pacote Office",
  title: (
    <>
      Microsoft <span className="text-orange-300">PowerPoint 2019</span>
    </>
  ),
  subtitle: (
    <>
      transições, animações, slide mestre e o modo de apresentação —{" "}
      <span className="text-yellow-300 not-italic font-medium">
        com todos os atalhos, inclusive os do palco
      </span>
    </>
  ),
  description: (
    <>
      O fechamento da trilogia Office: demonstração{" "}
      <span className="text-zinc-200 font-medium">animada de transição × animação</span>, o Slide
      Mestre explicado, todas as guias da faixa de opções e um catálogo dividido em{" "}
      <span className="text-zinc-200 font-medium">atalhos de edição e atalhos do modo
      apresentação</span> — os que você usa com a plateia na frente.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~40 min", small: "de leitura focada" },
    { icon: Keyboard, big: "130+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_6,
  palette: "ember",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_7: HeroData = {
  eyebrow: "Informática · Parte 7 de uma série · LibreOffice 7",
  title: (
    <>
      LibreOffice <span className="text-teal-300">Writer</span>
    </>
  ),
  subtitle: (
    <>
      a suíte livre nas provas: menus, estilos, ODF e{" "}
      <span className="text-yellow-300 not-italic font-medium">
        todos os atalhos — com alerta do que muda em relação ao Word
      </span>
    </>
  ),
  description: (
    <>
      O processador de textos livre destrinchado: maquete da interface de{" "}
      <span className="text-zinc-200 font-medium">barra de menus</span>, explorador dos{" "}
      <span className="text-zinc-200 font-medium">11 menus</span>, 15 blocos de funcionalidades,
      dicionário de equivalências Word ⇄ Writer e um catálogo de atalhos que marca em vermelho{" "}
      <span className="text-zinc-200 font-medium">cada tecla que faz coisa diferente no Word</span>.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~45 min", small: "de leitura focada" },
    { icon: Keyboard, big: "130+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_7,
  palette: "teal",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_8: HeroData = {
  eyebrow: "Informática · Parte 8 de uma série · LibreOffice 7",
  title: (
    <>
      LibreOffice <span className="text-lime-300">Calc</span>
    </>
  ),
  subtitle: (
    <>
      a planilha livre: menus, dados, tabelas dinâmicas e{" "}
      <span className="text-yellow-300 not-italic font-medium">
        todos os atalhos — com alerta do que muda em relação ao Excel
      </span>
    </>
  ),
  description: (
    <>
      O equivalente livre do Excel, destrinchado: maquete da interface com{" "}
      <span className="text-zinc-200 font-medium">linha de entrada</span> e caixa de nome,
      explorador dos <span className="text-zinc-200 font-medium">10 menus</span>, dicionário de
      equivalências Excel ⇄ Calc, catálogo de atalhos com filtro{" "}
      <span className="text-zinc-200 font-medium">"só os diferentes do Excel"</span> e as três
      âncoras que não mudam entre os dois programas.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~40 min", small: "de leitura focada" },
    { icon: Keyboard, big: "110+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_8,
  palette: "lime",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_9: HeroData = {
  eyebrow: "Informática · Parte 9 de uma série · LibreOffice 7",
  title: (
    <>
      LibreOffice <span className="text-rose-300">Impress</span>
    </>
  ),
  subtitle: (
    <>
      transições, animações, slide mestre e apresentação —{" "}
      <span className="text-yellow-300 not-italic font-medium">
        com as âncoras universais e as diferenças para o PowerPoint
      </span>
    </>
  ),
  description: (
    <>
      O editor de apresentações da suíte livre, destrinchado: os{" "}
      <span className="text-zinc-200 font-medium">dois painéis laterais</span> detalhados (Slides e
      Barra lateral), os <span className="text-zinc-200 font-medium">três menus exclusivos</span>{" "}
      (Slide, Apresentação e Desenhar), o confronto PPT × Impress e o catálogo de atalhos dividido
      em edição e <span className="text-zinc-200 font-medium">modo de apresentação</span>.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "7", small: "capítulos nesta parte" },
    { icon: Timer, big: "~35 min", small: "de leitura focada" },
    { icon: Keyboard, big: "100+", small: "atalhos catalogados" },
    { icon: ListChecks, big: "8", small: "questões comentadas" },
  ],
  terms: HOT_TERMS_9,
  palette: "rose",
  termsLabel: "Termos mais cobrados",
  startId: "abrir",
};

const HERO_10: HeroData = {
  eyebrow: "Informática · Parte 10 de 10 · Consolidação final",
  title: (
    <>
      Office 2019 <span className="text-yellow-300">×</span> LibreOffice 7
    </>
  ),
  subtitle: (
    <>
      quadro comparativo, formatos, menus, atalhos e um simulado geral —{" "}
      <span className="text-yellow-300 not-italic font-medium">a revisão que fecha a série</span>
    </>
  ),
  description: (
    <>
      A última parte conecta todos os temas: Internet, segurança, Windows, Word, Excel, PowerPoint,
      Writer, Calc e Impress. Compare o que é equivalente, identifique o que muda e teste seu
      domínio em <span className="text-zinc-200 font-medium">40 questões de concurso com gabarito comentado</span>.
    </>
  ),
  stats: [
    { icon: BookOpenCheck, big: "3", small: "duplas comparadas" },
    { icon: Timer, big: "~60 min", small: "de revisão focada" },
    { icon: Keyboard, big: "40", small: "questões gerais" },
    { icon: ListChecks, big: "100%", small: "gabarito comentado" },
  ],
  terms: HOT_TERMS_10,
  palette: "warm",
  termsLabel: "Termos mais cobrados",
  startId: "comparativo",
};

/* ---------- utilitários ---------- */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-yellow-300 text-[#0a0910] shadow-[0_8px_30px_rgba(253,224,71,0.35)] hover:shadow-[0_8px_40px_rgba(253,224,71,0.55)] transition-shadow cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      <Highlighter size={13} className="text-yellow-300/40 rotate-45" />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
    </div>
  );
}

const PART_META: Record<Part, { title: string; tab: string; footer: string; next: string }> = {
  1: {
    title: "Informática para Concursos · Parte 1 — Internet & Intranet",
    tab: "Parte 1 · Internet & Intranet",
    footer: "Parte 1 — Internet, Intranet e ferramentas",
    next: "Continue na Parte 2 — segurança e backup!",
  },
  2: {
    title: "Informática para Concursos · Parte 2 — Segurança & Armazenamento",
    tab: "Parte 2 · Segurança & Backup",
    footer: "Parte 2 — Segurança da informação, armazenamento e backup",
    next: "Siga para a Parte 3 — Windows e atalhos!",
  },
  3: {
    title: "Informática para Concursos · Parte 3 — Sistemas Operacionais & Arquivos",
    tab: "Parte 3 · Windows & Arquivos",
    footer: "Parte 3 — Sistemas operacionais, arquivos e atalhos do Windows",
    next: "Agora o escritório: Parte 4 — Word 2019!",
  },
  4: {
    title: "Informática para Concursos · Parte 4 — Microsoft Word 2019",
    tab: "Parte 4 · Word 2019",
    footer: "Parte 4 — Microsoft Word 2019 completo",
    next: "Agora as planilhas: Parte 5 — Excel 2019!",
  },
  5: {
    title: "Informática para Concursos · Parte 5 — Microsoft Excel 2019",
    tab: "Parte 5 · Excel 2019",
    footer: "Parte 5 — Microsoft Excel 2019 completo",
    next: "Finalize o Office: Parte 6 — PowerPoint 2019!",
  },
  6: {
    title: "Informática para Concursos · Parte 6 — Microsoft PowerPoint 2019",
    tab: "Parte 6 · PowerPoint 2019",
    footer: "Parte 6 — Microsoft PowerPoint 2019 completo",
    next: "Agora a suíte livre: Parte 7 — LibreOffice Writer!",
  },
  7: {
    title: "Informática para Concursos · Parte 7 — LibreOffice Writer",
    tab: "Parte 7 · LibreOffice Writer",
    footer: "Parte 7 — LibreOffice Writer completo",
    next: "Agora as planilhas livres: Parte 8 — LibreOffice Calc!",
  },
  8: {
    title: "Informática para Concursos · Parte 8 — LibreOffice Calc",
    tab: "Parte 8 · LibreOffice Calc",
    footer: "Parte 8 — LibreOffice Calc completo",
    next: "Finalize a suíte livre: Parte 9 — Impress!",
  },
  9: {
    title: "Informática para Concursos · Parte 9 — LibreOffice Impress",
    tab: "Parte 9 · LibreOffice Impress",
    footer: "Parte 9 — LibreOffice Impress completo",
    next: "Agora a consolidação: Parte 10 — Office × LibreOffice e simulado geral!",
  },
  10: {
    title: "Informática para Concursos · Parte 10 — Comparativo e Quiz Geral",
    tab: "Parte 10 · Comparativo + Quiz Geral",
    footer: "Parte 10 — Comparativo Office × LibreOffice e quiz geral",
    next: "Série completa concluída! Revise pelas abas acima.",
  },
};

const HEROES: Record<Part, HeroData> = {
  1: HERO_1,
  2: HERO_2,
  3: HERO_3,
  4: HERO_4,
  5: HERO_5,
  6: HERO_6,
  7: HERO_7,
  8: HERO_8,
  9: HERO_9,
  10: HERO_10,
};
const NAVS: Record<Part, typeof NAV_ITEMS> = {
  1: NAV_ITEMS,
  2: NAV_ITEMS_2,
  3: NAV_ITEMS_3,
  4: NAV_ITEMS_4,
  5: NAV_ITEMS_5,
  6: NAV_ITEMS_6,
  7: NAV_ITEMS_7,
  8: NAV_ITEMS_8,
  9: NAV_ITEMS_9,
  10: NAV_ITEMS_10,
};

/* ---------- app ---------- */
export default function App() {
  const [part, setPart] = useState<Part>(10);

  const goPart = (p: Part) => {
    setPart(p);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    document.title = PART_META[part].title;
  }, [part]);

  const meta = PART_META[part];

  return (
    <div className="noise min-h-screen bg-[#0a0910] antialiased">
      <Nav part={part} onSelectPart={goPart} partTitle={meta.tab} />

      <Hero data={HEROES[part]} key={part} />

      <main className="relative bg-blueprint">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="xl:flex xl:gap-14 pt-6 pb-24">
            <Toc items={NAVS[part]} key={part} />

            <div className="study-content min-w-0 flex-1 max-w-[880px]">
              {part === 1 && (
                <>
                  <InternetSection />
                  <Divider />
                  <IntranetSection />
                  <Divider />
                  <ExtranetSection />
                  <Divider />
                  <CompareSection />
                  <Divider />
                  <BrowsersSection />
                  <Divider />
                  <EmailSection />
                  <Divider />
                  <UrlSection />
                  <Divider />
                  <ProtocolsSection />
                  <Divider />
                  <QuizSection />
                  <Divider />
                  <SummarySection onGoPart2={() => goPart(2)} />
                </>
              )}
              {part === 2 && (
                <>
                  <PrinciplesSection />
                  <Divider />
                  <MalwareSection />
                  <Divider />
                  <DefenseSection />
                  <Divider />
                  <CryptoSection />
                  <Divider />
                  <SocialSection />
                  <Divider />
                  <StorageSection />
                  <Divider />
                  <BackupSection />
                  <Divider />
                  <QuizSection2 />
                  <Divider />
                  <Summary2 onGoPart3={() => goPart(3)} />
                </>
              )}
              {part === 3 && (
                <>
                  <FilesSection />
                  <Divider />
                  <ExtensionsSection />
                  <Divider />
                  <ProgramsSection />
                  <Divider />
                  <WindowsSection />
                  <Divider />
                  <ShortcutsSection />
                  <Divider />
                  <QuizSection3 />
                  <Divider />
                  <Summary3 onGoPart4={() => goPart(4)} />
                </>
              )}
              {part === 4 && (
                <>
                  <OpenSection />
                  <Divider />
                  <FeaturesSection />
                  <Divider />
                  <InterfaceSection />
                  <Divider />
                  <RibbonSection />
                  <Divider />
                  <WordShortcutsSection />
                  <Divider />
                  <QuizSection4 />
                  <Divider />
                  <Summary4 onGoPart5={() => goPart(5)} />
                </>
              )}
              {part === 5 && (
                <>
                  <OpenSection5 />
                  <Divider />
                  <ConceptsSection />
                  <Divider />
                  <FunctionsSection />
                  <Divider />
                  <ResourcesSection />
                  <Divider />
                  <RibbonSection5 />
                  <Divider />
                  <ExcelShortcutsSection />
                  <Divider />
                  <QuizSection5 />
                  <Divider />
                  <Summary5 onGoPart6={() => goPart(6)} />
                </>
              )}
              {part === 6 && (
                <>
                  <OpenSection6 />
                  <Divider />
                  <ConceptsSection6 />
                  <Divider />
                  <FeaturesSection6 />
                  <Divider />
                  <RibbonSection6 />
                  <Divider />
                  <PptShortcutsSection />
                  <Divider />
                  <QuizSection6 />
                  <Divider />
                  <Summary6 onGoPart7={() => goPart(7)} />
                </>
              )}
              {part === 7 && (
                <>
                  <OpenSection7 />
                  <Divider />
                  <ConceptsSection7 />
                  <Divider />
                  <FeaturesSection7 />
                  <Divider />
                  <MenuSection7 />
                  <Divider />
                  <WriterShortcutsSection />
                  <Divider />
                  <QuizSection7 />
                  <Divider />
                  <Summary7 onGoPart8={() => goPart(8)} />
                </>
              )}
              {part === 8 && (
                <>
                  <OpenSection8 />
                  <Divider />
                  <ConceptsSection8 />
                  <Divider />
                  <FeaturesSection8 />
                  <Divider />
                  <MenuSection8 />
                  <Divider />
                  <CalcShortcutsSection />
                  <Divider />
                  <QuizSection8 />
                  <Divider />
                  <Summary8 onGoPart9={() => goPart(9)} />
                </>
              )}
              {part === 9 && (
                <>
                  <OpenSection9 />
                  <Divider />
                  <ConceptsSection9 />
                  <Divider />
                  <FeaturesSection9 />
                  <Divider />
                  <MenuSection9 />
                  <Divider />
                  <ImpressShortcutsSection />
                  <Divider />
                  <QuizSection9 />
                  <Divider />
                  <Summary9 />
                </>
              )}
              {part === 10 && (
                <>
                  <OfficeCompareSection10 />
                  <Divider />
                  <QuizSection10 />
                  <Divider />
                  <AnswerKeySection10 />
                  <Divider />
                  <Summary10 />
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.07] bg-[#0d0c14]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-yellow-300 text-[#0a0910]">
              <GraduationCap size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-[#f4f1ea]">Informática para Concursos</p>
              <p className="text-[11.5px] text-zinc-500">Série completa de estudos · {meta.footer}</p>
            </div>
          </div>
          <div className="text-[12px] leading-relaxed text-zinc-500 sm:text-right">
            <p>Material didático gratuito, elaborado com foco em Cebraspe, FGV, FCC e Vunesp.</p>
            <p className="text-zinc-600">{meta.next}</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
