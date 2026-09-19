import {
  ArrowDownUp,
  BarChart3,
  CheckSquare,
  Copy,
  Filter,
  Palette,
  PieChart,
  Printer,
  Snowflake,
  Table,
  Target,
  Wand2,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const RECURSOS = [
  {
    icon: ArrowDownUp,
    t: "Classificar (ordenar)",
    d: "Organiza os dados de A a Z, de Z a A, do menor para o maior, por cor ou por vários níveis (ex.: por Estado e, dentro dele, por Vendas). Guia DADOS.",
  },
  {
    icon: Filter,
    t: "Filtro e AutoFiltro",
    d: "Exibe apenas as linhas que atendem a critérios, ocultando as demais sem apagá-las (Ctrl+Shift+L). Filtros de texto, número, data e por cor. Guia DADOS.",
  },
  {
    icon: Table,
    t: "Tabela Dinâmica",
    d: "Resume e cruza grandes volumes de dados arrastando campos para Linhas, Colunas, Valores e Filtros — sem digitar uma fórmula. Guia INSERIR.",
  },
  {
    icon: BarChart3,
    t: "Gráficos",
    d: "Colunas, barras, linhas, pizza, dispersão, área, combinado... Criados a partir da seleção (F11 em nova folha, Alt+F1 embutido). Guia INSERIR.",
  },
  {
    icon: Palette,
    t: "Formatação Condicional",
    d: "Formata células automaticamente conforme regras: realçar maiores que X, duplicados, barras de dados, escalas de cor e conjuntos de ícones. Guia PÁGINA INICIAL.",
  },
  {
    icon: CheckSquare,
    t: "Validação de Dados",
    d: "Restringe o que pode ser digitado numa célula (lista suspensa, intervalo de números, datas) e exibe mensagem de erro. Guia DADOS.",
  },
  {
    icon: Snowflake,
    t: "Congelar Painéis",
    d: "Mantém cabeçalhos visíveis ao rolar a planilha (congelar linha superior, primeira coluna ou a partir da célula ativa). Guia EXIBIR.",
  },
  {
    icon: Copy,
    t: "Alça de preenchimento",
    d: "O quadradinho no canto da seleção: arraste para copiar fórmulas (ajustando referências relativas) ou gerar sequências — 1, 2, 3... / jan, fev, mar...",
  },
  {
    icon: Wand2,
    t: "Colar Especial",
    d: "Cola só valores (descartando fórmulas), só formatos, só fórmulas, transpor (troca linhas por colunas) ou operações. Ctrl+Alt+V.",
  },
  {
    icon: Target,
    t: "Atingir Meta e Solver",
    d: "Análise de hipóteses: 'que valor preciso em A1 para que B1 resulte 1.000?'. Também há Cenários e Tabela de Dados. Guia DADOS → Teste de Hipóteses.",
  },
  {
    icon: PieChart,
    t: "Minigráficos (sparklines)",
    d: "Gráficos minúsculos dentro de UMA célula, mostrando a tendência de uma linha de dados. Guia INSERIR.",
  },
  {
    icon: Printer,
    t: "Impressão inteligente",
    d: "Área de impressão, títulos repetidos em todas as páginas, ajustar para 1 página de largura, quebras de página e cabeçalho/rodapé. Guia LAYOUT DA PÁGINA.",
  },
];

export default function ResourcesSection() {
  return (
    <SectionShell
      id="recursos"
      num="04"
      kicker="Capacidades · além das fórmulas"
      title={
        <>
          Demais <span className="italic text-emerald-300">funcionalidades</span> do Excel
        </>
      }
      lead={
        <>
          Calcular é só metade do serviço. O Excel também{" "}
          <Hot tone="e">organiza, filtra, resume, visualiza, valida e protege</Hot> dados — e cada
          um desses recursos tem endereço fixo na faixa de opções (que mapeamos no próximo
          capítulo).
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {RECURSOS.map((r, i) => (
          <Reveal key={r.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-emerald-300/40 hover:bg-emerald-300/[0.04] transition-colors">
              <r.icon size={19} className="text-emerald-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{r.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{r.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* formatos + proteção */}
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="font-display text-xl text-[#f4f1ea] mb-4">Formatos de arquivo</h3>
            <div className="space-y-2.5 text-[13px] leading-relaxed">
              <p className="text-zinc-400"><code className="font-mono text-emerald-200">.xlsx</code> — padrão atual (2007+), sem macros.</p>
              <p className="text-zinc-400"><code className="font-mono text-emerald-200">.xls</code> — formato antigo (97–2003), abre em modo de compatibilidade.</p>
              <p className="text-zinc-400"><code className="font-mono text-emerald-200">.xlsm</code> — pasta de trabalho HABILITADA PARA MACROS.</p>
              <p className="text-zinc-400"><code className="font-mono text-emerald-200">.csv</code> — texto puro separado por vírgula/ponto e vírgula: perde fórmulas e formatação.</p>
              <p className="text-zinc-400"><code className="font-mono text-emerald-200">.xltx</code> — modelo · <code className="font-mono text-emerald-200">.pdf</code> — exportação para leitura.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h3 className="font-display text-xl text-[#f4f1ea] mb-4">Proteção em três níveis</h3>
            <div className="space-y-2.5 text-[13px] leading-relaxed">
              <p className="text-zinc-400"><strong className="text-zinc-200">Proteger Planilha</strong> (guia Revisão) — impede alterar células bloqueadas da aba atual.</p>
              <p className="text-zinc-400"><strong className="text-zinc-200">Proteger Pasta de Trabalho</strong> — impede inserir, excluir, renomear ou ocultar planilhas.</p>
              <p className="text-zinc-400"><strong className="text-zinc-200">Criptografar com Senha</strong> (Arquivo → Informações) — exige senha para ABRIR o arquivo.</p>
              <p className="text-zinc-500 text-[12.5px] pt-2 border-t border-white/[0.07]">
                Detalhe fino: todas as células já vêm marcadas como "bloqueadas", mas isso{" "}
                <strong className="text-zinc-300">só passa a valer depois</strong> que a planilha é
                protegida.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <Callout variant="pegadinha" title="filtrar não é excluir">
            <p>
              <em>"O filtro apaga as linhas que não atendem ao critério."</em> →{" "}
              <strong className="text-rose-300">ERRADO!</strong> Ele apenas{" "}
              <strong className="text-zinc-100">OCULTA</strong> temporariamente; ao limpar o filtro,
              tudo volta. Parente próximo: <strong className="text-zinc-100">classificar</strong>{" "}
              reordena as linhas de fato (por isso, selecione a tabela inteira para não desalinhar
              colunas!).
            </p>
          </Callout>
          <Callout variant="prova" title="as três 'condicionais' que se confundem">
            <p>
              <strong className="text-zinc-100">Formatação Condicional</strong> = pinta a célula
              conforme regra. <strong className="text-zinc-100">Validação de Dados</strong> = impede
              digitar valor fora do permitido. <strong className="text-zinc-100">Função SE</strong> =
              devolve resultados diferentes conforme o teste. Três coisas distintas, três guias
              distintas (Página Inicial, Dados e Fórmulas).
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Por fim, lembre-se da <Hot tone="e">barra de status</Hot> do Excel: ao selecionar um
          intervalo numérico, ela já exibe{" "}
          <Hot tone="c">Média, Contagem e Soma</Hot> no canto inferior direito — sem digitar uma
          única fórmula. É um "cálculo relâmpago" que costuma aparecer nas questões sobre a
          interface.
        </P>
      </Reveal>
    </SectionShell>
  );
}
