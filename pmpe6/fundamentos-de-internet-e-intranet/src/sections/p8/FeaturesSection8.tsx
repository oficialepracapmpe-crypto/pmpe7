import {
  BarChart3,
  Calculator,
  Filter,
  Group,
  LineChart,
  Lock,
  Split,
  Target,
  TableProperties,
  Wand2,
  Braces,
  Database,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const FEATURES = [
  {
    icon: Calculator,
    t: "Cálculos e fórmulas",
    d: "Operadores, precedência, funções matemáticas, estatísticas, lógicas, financeiras, de data/hora e de texto — com os mesmos nomes do Excel PT-BR e o Assistente de Funções (Ctrl+F2).",
  },
  {
    icon: Braces,
    t: "Fórmulas de matriz",
    d: "Confirme com Shift+Ctrl+Enter e o intervalo inteiro recebe o mesmo cálculo de uma vez — matriz imutável (as células não podem ser editadas individualmente).",
  },
  {
    icon: TableProperties,
    t: "Tabelas dinâmicas",
    d: "Inserir → Tabela Dinâmica: resumo cruzado arrastando campos para Linhas, Colunas, Dados e Filtros — com atualização por F9.",
  },
  {
    icon: BarChart3,
    t: "Gráficos",
    d: "Colunas, barras, linhas, pizza, área, dispersão, radar, bolsa... com o assistente de gráficos e atualização por Ctrl+F9.",
  },
  {
    icon: Filter,
    t: "Filtros e ordenação",
    d: "Autofiltro (setinhas nos cabeçalhos), Filtro Padrão, Filtro Avançado e Classificar por até 3 critérios — tudo no menu Dados.",
  },
  {
    icon: Group,
    t: "Subtotais e agrupamento",
    d: "Subtotais automáticos por categoria (menu Dados) e agrupamento de linhas/colunas em estrutura recolhível (F12 / Ctrl+F12).",
  },
  {
    icon: Target,
    t: "Análise de hipóteses",
    d: "Atingir Meta (que valor em A1 resulta em X?), Operações Múltiplas (tabela de hipóteses) e o Solver — ambos em Ferramentas.",
  },
  {
    icon: Database,
    t: "Dados externos",
    d: "Importa tabelas de páginas web (HTML), arquivos CSV, TXT e bancos de dados; e o Detective rastreia precedentes e dependentes (Shift+F9 / Shift+F5).",
  },
  {
    icon: Split,
    t: "Consolidação e cenários",
    d: "Consolida vários intervalos em um resumo (menu Dados) e cria Cenários para comparar hipóteses lado a lado.",
  },
  {
    icon: Lock,
    t: "Proteção",
    d: "Proteger planilha (células travadas) e proteger documento inteiros, ambos em Ferramentas → Proteger documento — com senha.",
  },
  {
    icon: LineChart,
    t: "Formatação condicional e validação",
    d: "Regras de cores por valor (menu Formatar) e Validação de Dados com listas suspensas e mensagens (menu Dados).",
  },
  {
    icon: Wand2,
    t: "Automação e interoperabilidade",
    d: "Macros em LibreOffice Basic, modelos (.ots), estilos de célula e página, exportação para PDF/HTML e salvamento direto em .xlsx.",
  },
];

export default function FeaturesSection8() {
  return (
    <SectionShell
      id="recursos"
      num="03"
      kicker="Capacidades · o que o Calc faz"
      title={
        <>
          Todas as <span className="italic text-lime-300">funcionalidades</span> do Calc
        </>
      }
      lead={
        <>
          Tudo o que se espera de uma planilha profissional — e os{" "}
          <Hot tone="e">estilos de célula</Hot>, um recurso de formatação em massa que o Excel não
          tem de forma nativa. As funções você já conhece da Parte 5; o que muda é{" "}
          <Hot tone="y">onde cada coisa mora</Hot>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {FEATURES.map((f, i) => (
          <Reveal key={f.t} delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-lime-300/40 hover:bg-lime-300/[0.04] transition-colors">
              <f.icon size={19} className="text-lime-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{f.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* equivalências de nomenclatura */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4 mt-10">
          Mesma função, outro nome — o dicionário Excel ⇄ Calc
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[680px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-emerald-300 w-[34%]">No Excel</th>
                <th className="p-4 font-display text-base text-lime-300 w-[34%]">No Calc</th>
                <th className="p-4 font-display text-base text-zinc-300">Observação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { w: "Guia de Fórmulas → Inserir Função", l: "Assistente de Funções (Ctrl+F2)", o: "Mesma caixa, outro atalho" },
                { w: "Barra de fórmulas", l: "Linha de entrada", o: "Mesmo órgão" },
                { w: "Caixa de Nome", l: "Caixa de nome", o: "Idêntica" },
                { w: "Tabela Dinâmica (guia Inserir)", l: "Tabela Dinâmica (menu Inserir)", o: "Mesmo endereço" },
                { w: "Rastrear precedentes (guia Fórmulas)", l: "Detective → Rastrear precedentes (Shift+F9)", o: "Menu Ferramentas" },
                { w: "Atingir Meta (guia Dados)", l: "Atingir Meta (menu Ferramentas)", o: "Endereço diferente!" },
                { w: "Textp para Colunas", l: "Texto em Colunas (menu Dados)", o: "Mesmo endereço" },
                { w: "Proteger Planilha (guia Revisão)", l: "Proteger documento (menu Ferramentas)", o: "Endereço diferente!" },
                { w: "Preencher → Série", l: "Preencher → Série (menu Editar)", o: "Menu Editar, não Página Inicial" },
                { w: "Excluir conteúdo (guia Página Inicial)", l: "Excluir conteúdo (Backspace abre a caixa)", o: "No Excel, Delete apaga direto" },
                { w: "Congelar Painéis (guia Exibir)", l: "Congelar linhas/colunas (Exibir → Congelar)", o: "Mesmo endereço" },
                { w: "Intervalo nomeado (Ctrl+F3)", l: "Definir nomes (Ctrl+F3)", o: "Mesmo atalho!" },
              ].map((r, i) => (
                <tr key={r.w} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}>
                  <td className="p-4 text-zinc-300">{r.w}</td>
                  <td className="p-4 text-lime-200 font-medium">{r.l}</td>
                  <td className="p-4 text-zinc-500 text-[12.5px]">{r.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Callout variant="prova" title="recursos exclusivos que rendem questão">
            <p>
              <strong className="text-zinc-100">Estilos de célula</strong> (F11 — formatação em
              massa sem "formatar como tabela"),{" "}
              <strong className="text-zinc-100">fórmulas de matriz imutáveis</strong> (a estrutura
              não se desmonta), <strong className="text-zinc-100">Ctrl+Shift+X</strong> (recorta
              conteúdo mantendo formatação) e o{" "}
              <strong className="text-zinc-100">Detective</strong> com atalhos próprios. Nada disso
              existe igual no Excel.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="Atingir Meta e Proteger: mudaram de casa">
            <p>
              No Excel, <strong className="text-zinc-100">Atingir Meta</strong> está na guia Dados
              (Teste de Hipóteses). No Calc, mudou para o menu{" "}
              <strong className="text-zinc-100">FERRAMENTAS</strong>. O mesmo vale para{" "}
              <strong className="text-zinc-100">Proteger Planilha</strong>: no Excel é guia Revisão;
              no Calc, <strong className="text-zinc-100">Ferramentas → Proteger documento</strong>.
              Bancas adoram trocar esses endereços.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Sobre os <Hot tone="e">limites</Hot>: 1.048.576 linhas × 16.384 colunas (até AMJ), 32.000
          caracteres por célula e 1.024 planilhas por documento — virtualmente os mesmos números do
          Excel moderno. Se a questão citar "65.536 linhas", está falando do limite antigo
          (Excel 2003 ou ODF legado).
        </P>
      </Reveal>
    </SectionShell>
  );
}
