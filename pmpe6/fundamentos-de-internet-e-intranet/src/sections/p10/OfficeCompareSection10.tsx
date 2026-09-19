import {
  ArrowRight,
  Check,
  FileSpreadsheet,
  FileText,
  LayoutDashboard,
  Presentation,
  Table2,
} from "lucide-react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

type Row = {
  aspect: string;
  microsoft: string;
  libre: string;
  note: string;
};

const GENERAL_ROWS: Row[] = [
  {
    aspect: "Fabricante e licença",
    microsoft: "Microsoft Office 2019; software proprietário, normalmente ativado por licença.",
    libre: "LibreOffice 7; suíte livre e de código aberto, mantida pela The Document Foundation e pela comunidade.",
    note: "Ambos são suítes de produtividade para uso local e podem trabalhar sem conexão permanente à Internet.",
  },
  {
    aspect: "Organização da interface",
    microsoft: "Faixa de Opções (Ribbon): guias, grupos e comandos; Arquivo abre a área Backstage.",
    libre: "Barra de menus, barras de ferramentas e Barra lateral; a organização pode ser personalizada.",
    note: "Os comandos existem nos dois ecossistemas, mas a localização e o nome mudam.",
  },
  {
    aspect: "Formato de documento",
    microsoft: "Office Open XML: DOCX, XLSX e PPTX como padrões editáveis do Word, Excel e PowerPoint.",
    libre: "OpenDocument Format: ODT, ODS e ODP como padrões nativos do Writer, Calc e Impress.",
    note: "PDF é formato de distribuição/exportação, não o formato de trabalho nativo.",
  },
  {
    aspect: "Interoperabilidade",
    microsoft: "Abre ODT, ODS e ODP em versões compatíveis e permite salvar em vários formatos.",
    libre: "Abre DOCX, XLSX e PPTX e pode salvar nesses formatos.",
    note: "Arquivos simples costumam ser bem transferidos; macros, fontes, fórmulas avançadas, layout e efeitos podem mudar.",
  },
  {
    aspect: "Atalhos",
    microsoft: "Atalhos localizados podem seguir a tradução do comando em português; exemplo: Ctrl+B salva no Word.",
    libre: "Muitos atalhos seguem nomes internacionais; exemplo: Ctrl+B aplica negrito e Ctrl+S salva.",
    note: "Não se deve transportar automaticamente um atalho do Office para o LibreOffice.",
  },
  {
    aspect: "PDF e impressão",
    microsoft: "Exportação para PDF pelo menu Arquivo/Exportar ou Salvar como, além de impressão.",
    libre: "Botão e comando Exportar diretamente como PDF, além de impressão.",
    note: "Nos dois, PDF preserva a aparência para entrega, mas não substitui o arquivo editável.",
  },
  {
    aspect: "Automação",
    microsoft: "Macros geralmente associadas ao VBA e a formatos habilitados para macro.",
    libre: "Macros podem usar LibreOffice Basic, Python e outros mecanismos; compatibilidade com VBA não é perfeita.",
    note: "Macro é um ponto de atenção de segurança e de compatibilidade entre suítes.",
  },
];

const WORD_WRITER_ROWS: Row[] = [
  {
    aspect: "Uso principal",
    microsoft: "Word 2019: criação, edição, revisão, diagramação e impressão de documentos.",
    libre: "Writer 7: criação, edição, revisão, estilos, campos, tabelas e exportação de documentos.",
    note: "A finalidade central é a mesma: processar texto com formatação e estrutura.",
  },
  {
    aspect: "Formato padrão",
    microsoft: ".docx",
    libre: ".odt",
    note: "Word também abre/salva ODT; Writer também abre/salva DOCX. Ao trocar de formato, revise o layout.",
  },
  {
    aspect: "Interface e menus",
    microsoft: "Guias Página Inicial, Inserir, Design, Layout, Referências, Correspondências, Revisão e Exibir; Arquivo/Backstage.",
    libre: "Menus Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Tabela, Formulário, Ferramentas, Janela e Ajuda; barras e Sidebar.",
    note: "Não existe correspondência literal guia a guia: no Writer vários recursos ficam nos menus e na Barra lateral.",
  },
  {
    aspect: "Formatação",
    microsoft: "Página Inicial concentra fonte, parágrafo, estilos e área de transferência; Design reúne temas e formatação do documento.",
    libre: "Formatar e Estilos concentram caractere, parágrafo, página e estilos; F11 abre a janela de Estilos.",
    note: "Os dois aceitam estilos e formatação direta; estilos são preferíveis para documentos estruturados.",
  },
  {
    aspect: "Página e seção",
    microsoft: "Layout: margens, orientação, tamanho, colunas, quebras e recuos; cabeçalho/rodapé em Inserir.",
    libre: "Formatar → Estilo de página ou propriedades da página; quebras e cabeçalhos aparecem em menus contextuais e Inserir.",
    note: "O conceito de página, margem, orientação e quebra existe nos dois, mas o caminho muda.",
  },
  {
    aspect: "Referências",
    microsoft: "Referências: sumário, notas, citações, bibliografia, legendas e índice.",
    libre: "Inserir e o menu Referências/Índices, além de recursos de campos e estilos.",
    note: "Título 1, Título 2 e outros estilos alimentam o sumário automático em ambos.",
  },
  {
    aspect: "Mala direta",
    microsoft: "Guia Correspondências: iniciar, destinatários, campos, regras e concluir mala direta.",
    libre: "Assistente de Mala Direta e comandos nos menus Ferramentas/Inserir; usa fontes de dados e campos.",
    note: "A função existe nos dois, mas 'Correspondências' é uma guia do Word, não um menu equivalente do Writer.",
  },
  {
    aspect: "Revisão",
    microsoft: "Revisão: ortografia, comentários, controle de alterações, comparar e proteger.",
    libre: "Ferramentas e menus de revisão: ortografia, alterações, comentários, comparar e proteger documento.",
    note: "F7 verifica ortografia nos dois; os nomes e a posição de alguns comandos variam.",
  },
  {
    aspect: "Atalhos mais cobrados",
    microsoft: "Ctrl+N = negrito; Ctrl+B = salvar; Ctrl+T = selecionar tudo; Ctrl+J = justificar; F12 = Salvar como.",
    libre: "Ctrl+B = negrito; Ctrl+S = salvar; Ctrl+A = selecionar tudo; Ctrl+J = justificar; F11 = Estilos.",
    note: "Ctrl+J coincide; Ctrl+B, Ctrl+N, Ctrl+T e Ctrl+A são armadilhas clássicas de comparação.",
  },
];

const EXCEL_CALC_ROWS: Row[] = [
  {
    aspect: "Uso principal",
    microsoft: "Excel 2019: cálculos, tabelas, gráficos, análise, filtros e automação de dados.",
    libre: "Calc 7: planilhas, fórmulas, funções, gráficos, filtros, análise e automação de dados.",
    note: "A lógica de células, linhas, colunas, fórmulas e intervalos é compartilhada.",
  },
  {
    aspect: "Formato padrão",
    microsoft: ".xlsx",
    libre: ".ods",
    note: "XLSX e ODS são editáveis; exportar para PDF é adequado para leitura, não para continuar calculando.",
  },
  {
    aspect: "Dimensão da planilha",
    microsoft: "1.048.576 linhas e 16.384 colunas; última coluna XFD.",
    libre: "1.048.576 linhas e 16.384 colunas; última coluna AMJ.",
    note: "O número de colunas pode ser igual, mas a identificação da última coluna é diferente.",
  },
  {
    aspect: "Fórmulas e referências",
    microsoft: "Fórmulas começam com =; A1 relativa, $A$1 absoluta, A$1 e $A1 mistas; F4 alterna referências.",
    libre: "Fórmulas começam com =; usa referências relativas, absolutas e mistas; F4 alterna referências.",
    note: "A semântica de referências é muito semelhante; nomes de funções e separadores podem depender do idioma/localidade.",
  },
  {
    aspect: "Funções e separadores",
    microsoft: "SOMA, MÉDIA, SE, CONT.SE, PROCV e outras; argumentos frequentemente separados por ponto e vírgula na configuração PT-BR.",
    libre: "SOMA, MÉDIA, SE, CONT.SE, PROCV e equivalentes; a sintaxe pode pedir adaptação ao salvar em XLSX.",
    note: "Confira o nome da função e o separador quando migrar fórmulas entre formatos.",
  },
  {
    aspect: "Tabela dinâmica",
    microsoft: "Tabela Dinâmica, normalmente acessada por Inserir; campos são arrastados para linhas, colunas, valores e filtros.",
    libre: "Tabela Dinâmica, com caminho pelo menu Inserir; também resume campos e valores.",
    note: "O recurso é equivalente em finalidade, mas detalhes, layout e compatibilidade podem variar.",
  },
  {
    aspect: "Atalhos compartilhados",
    microsoft: "F2 edita célula; F4 alterna referência; Ctrl+; insere data; Alt+= AutoSoma.",
    libre: "F2 edita célula; F4 alterna referência; Ctrl+S salva; Ctrl+F2 Assistente de Funções.",
    note: "F2 e F4 são âncoras entre os dois; Ctrl+S/ Ctrl+B e F12 exigem atenção.",
  },
  {
    aspect: "Atalhos que diferem",
    microsoft: "Ctrl+B salva em PT-BR; Ctrl+Shift+L ativa filtro; Shift+F3 insere função.",
    libre: "Ctrl+B aplica negrito; Ctrl+F2 abre funções; F12 agrupa; Ctrl+` mostra fórmulas.",
    note: "A tradução do comando altera atalhos no Office; o Calc conserva vários atalhos internacionais.",
  },
  {
    aspect: "Menus e comandos",
    microsoft: "Guias Página Inicial, Inserir, Layout da Página, Fórmulas, Dados, Revisão e Exibir.",
    libre: "Menus Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Planilha, Dados, Ferramentas, Janela e Ajuda.",
    note: "Dados, fórmulas, filtros e formatação estão nos dois, mas a navegação não é equivalente por posição.",
  },
];

const POWERPOINT_IMPRESS_ROWS: Row[] = [
  {
    aspect: "Uso principal",
    microsoft: "PowerPoint 2019: apresentações com slides, temas, transições, animações, notas e modo do apresentador.",
    libre: "Impress 7: apresentações com slides, mestres, transições, animações, notas e modos de exibição.",
    note: "A estrutura slide → objetos → apresentação é compartilhada.",
  },
  {
    aspect: "Formato padrão",
    microsoft: ".pptx",
    libre: ".odp",
    note: "PowerPoint também trabalha com ODP; Impress abre e salva PPTX/PPT, com possibilidade de ajustes.",
  },
  {
    aspect: "Interface",
    microsoft: "Faixa de Opções com Página Inicial, Inserir, Design, Transições, Animações, Apresentação de Slides, Revisão e Exibir.",
    libre: "Barra de menus, Painel de slides à esquerda, Barra lateral à direita e Barra de exibição na base.",
    note: "No Impress, 'Trocar Slide' fica na Barra lateral; não é uma guia da Ribbon.",
  },
  {
    aspect: "Slide mestre",
    microsoft: "Exibir → Slide Mestre; controla tema, layouts, fontes, posições e elementos repetidos.",
    libre: "Exibir → Mestre → Slide Mestre ou aba Tabelas Mestres da Barra lateral.",
    note: "O conceito é o mesmo, mas 'Tabelas Mestres' é uma nomenclatura do Impress.",
  },
  {
    aspect: "Transições",
    microsoft: "Guia Transições: efeito entre slides, opções de efeito, duração, som e avanço.",
    libre: "Barra lateral → Trocar Slide: efeito, velocidade, som e avanço.",
    note: "Transição = entre slides nos dois programas.",
  },
  {
    aspect: "Animações",
    microsoft: "Guia Animações e Painel de Animação: efeitos dos objetos dentro do slide.",
    libre: "Barra lateral → Animação Personalizada: entrada, ênfase, saída, trajetória e ordem.",
    note: "Animação = dentro do slide; não confunda com transição.",
  },
  {
    aspect: "Atalhos de apresentação",
    microsoft: "F5 inicia do começo; Shift+F5 inicia do slide atual; B/W escurecem/clareiam a tela; Esc encerra.",
    libre: "F5 inicia; B/W escurecem/clareiam a tela; Esc encerra; número + Enter pode saltar a um slide.",
    note: "F5, B, W e Esc são âncoras úteis nos dois; Shift+F5 é associado ao PowerPoint.",
  },
  {
    aspect: "Atalhos que diferem",
    microsoft: "Ctrl+M novo slide; Ctrl+D duplica; Ctrl+P imprime durante a edição.",
    libre: "Shift+F3 duplica; F4 abre Posição e Tamanho; P ativa caneta durante a apresentação.",
    note: "Memorize por aplicativo: Ctrl+D não deve ser transferido automaticamente para o Impress.",
  },
  {
    aspect: "Modos de exibição",
    microsoft: "Normal, Estrutura de Tópicos, Classificação de Slides, Página de Anotações e Apresentação.",
    libre: "Normal, Estrutura de Tópicos, Notas, Classificação de Slides e Apresentação.",
    note: "Os nomes são muito próximos, mas o Impress usa Barra de exibição e Barra lateral.",
  },
];

function ComparisonTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/[0.09] bg-[#0d0c14]">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-white/[0.1] bg-white/[0.04]">
            <th className="w-[17%] p-4 text-[10px] font-bold uppercase tracking-[0.17em] text-yellow-300">Aspecto</th>
            <th className="w-[28%] p-4 text-[10px] font-bold uppercase tracking-[0.17em] text-blue-300">Microsoft Office 2019</th>
            <th className="w-[28%] p-4 text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-300">LibreOffice 7</th>
            <th className="w-[27%] p-4 text-[10px] font-bold uppercase tracking-[0.17em] text-zinc-400">Semelhança / pegadinha</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspect} className="border-b border-white/[0.06] last:border-0 align-top hover:bg-white/[0.025] transition-colors">
              <th className="p-4 text-[12.5px] font-semibold leading-relaxed text-zinc-200">{row.aspect}</th>
              <td className="p-4 text-[12.5px] leading-relaxed text-zinc-300">{row.microsoft}</td>
              <td className="p-4 text-[12.5px] leading-relaxed text-zinc-300">{row.libre}</td>
              <td className="p-4 text-[12.5px] leading-relaxed text-zinc-400">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PairHeader({ id, icon: Icon, label, color, description }: { id: string; icon: typeof FileText; label: string; color: string; description: string }) {
  return (
    <div id={id} className="scroll-mt-24 flex flex-wrap items-center gap-4 mb-5">
      <span className={`grid place-items-center w-12 h-12 rounded-2xl border ${color}`}><Icon size={22} /></span>
      <div>
        <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-zinc-500">Comparação por módulo</p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#f4f1ea]">{label}</h3>
        <p className="text-[13px] leading-relaxed text-zinc-500 mt-1 max-w-3xl">{description}</p>
      </div>
    </div>
  );
}

export default function OfficeCompareSection10() {
  return (
    <SectionShell
      id="comparativo"
      num="01"
      kicker="Consolidação · o quadro que a banca adora"
      title={<>Microsoft Office 2019 <span className="italic text-yellow-300">×</span> LibreOffice 7</>}
      lead={<>A comparação não é apenas de nomes: envolve <Hot>formatos nativos</Hot>, interface, menus, atalhos, licenças e compatibilidade. Use as tabelas para identificar o que é igual na finalidade e o que muda no caminho até o comando.</>}
    >
      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { icon: FileText, title: "Texto", left: "Word · .docx", right: "Writer · .odt", tone: "border-blue-300/25 bg-blue-300/[0.05] text-blue-300" },
            { icon: FileSpreadsheet, title: "Planilha", left: "Excel · .xlsx", right: "Calc · .ods", tone: "border-emerald-300/25 bg-emerald-300/[0.05] text-emerald-300" },
            { icon: Presentation, title: "Apresentação", left: "PowerPoint · .pptx", right: "Impress · .odp", tone: "border-rose-300/25 bg-rose-300/[0.05] text-rose-300" },
            { icon: Check, title: "Em comum", left: "editar · revisar", right: "imprimir · PDF", tone: "border-yellow-300/25 bg-yellow-300/[0.05] text-yellow-300" },
          ].map((item) => (
            <div key={item.title} className={`rounded-2xl border p-4 ${item.tone}`}>
              <item.icon size={18} className="mb-3" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">{item.title}</p>
              <p className="text-[13px] font-semibold text-zinc-200">{item.left}</p>
              <div className="flex items-center gap-2 my-1 text-zinc-600"><ArrowRight size={12} /><span className="text-[10px]">equivalente</span></div>
              <p className="text-[13px] font-semibold text-zinc-200">{item.right}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="a regra do formato nativo">
          <p><strong className="text-zinc-100">Office 2019:</strong> DOCX, XLSX e PPTX. <strong className="text-zinc-100">LibreOffice 7:</strong> ODT, ODS e ODP. Todos os programas conseguem trabalhar com formatos do outro ecossistema, mas <strong className="text-zinc-100">abrir não significa preservar 100% do layout, das macros ou dos recursos avançados</strong>.</p>
        </Callout>
      </Reveal>

      <Reveal>
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">Visão transversal · diferenças de plataforma</p>
          <ComparisonTable rows={GENERAL_ROWS} />
        </div>
      </Reveal>

      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4">Semelhanças que valem para as três duplas</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {[
            "Os três módulos têm edição, formatação, impressão, exportação para PDF, modelos e revisão.",
            "Os dois pacotes podem funcionar localmente; conexão pode ser útil para nuvem, atualizações e colaboração, mas não define o formato do arquivo.",
            "DOCX/XLSX/PPTX e ODT/ODS/ODP são arquivos editáveis; PDF é mais indicado para distribuição final.",
            "A compatibilidade aumenta quando o documento usa recursos simples e fontes disponíveis nos dois ambientes.",
          ].map((text) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />
              <p className="text-[13px] leading-relaxed text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <PairHeader id="word-writer" icon={FileText} label="Word 2019 × Writer 7" color="border-blue-300/30 bg-blue-300/[0.06] text-blue-300" description="Processadores de texto: mesma finalidade, formatos diferentes e a maior troca de nomenclatura entre Faixa de Opções e barra de menus." />
        <ComparisonTable rows={WORD_WRITER_ROWS} />
      </Reveal>

      <Reveal className="mt-14">
        <PairHeader id="excel-calc" icon={Table2} label="Excel 2019 × Calc 7" color="border-emerald-300/30 bg-emerald-300/[0.06] text-emerald-300" description="Planilhas: a lógica de célula e fórmula é muito próxima, mas atalhos, funções, dimensões identificadas e caminhos de menu rendem pegadinhas." />
        <ComparisonTable rows={EXCEL_CALC_ROWS} />
      </Reveal>

      <Reveal className="mt-14">
        <PairHeader id="powerpoint-impress" icon={Presentation} label="PowerPoint 2019 × Impress 7" color="border-rose-300/30 bg-rose-300/[0.06] text-rose-300" description="Apresentações: os dois trabalham com slides, mestres, transições e animações; a Ribbon do PowerPoint contrasta com os painéis e menus do Impress." />
        <ComparisonTable rows={POWERPOINT_IMPRESS_ROWS} />
      </Reveal>

      <Reveal className="mt-12">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5"><LayoutDashboard size={19} className="text-yellow-300" /><h3 className="font-display text-2xl text-[#f4f1ea]">Mapa rápido de nomenclaturas</h3></div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Word → Writer", rows: ["Faixa de Opções → barra de menus + Sidebar", "Correspondências → Assistente de Mala Direta", "Revisão → Ferramentas/menus de revisão", "Design/Layout → Formatar, Estilos e página"] },
              { title: "Excel → Calc", rows: ["Fórmulas → fórmulas e funções", "Tabela Dinâmica → Tabela Dinâmica", "Página Inicial/Dados → menus e barras", "Inserir Função → Ctrl+F2 no Calc"] },
              { title: "PowerPoint → Impress", rows: ["Transições → Trocar Slide", "Animações → Animação Personalizada", "Slide Mestre → Tabelas Mestres", "Apresentação de Slides → Apresentação"] },
            ].map((group) => (
              <div key={group.title} className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5">
                <h4 className="text-[13px] font-bold text-zinc-100 mb-3">{group.title}</h4>
                <ul className="space-y-2">{group.rows.map((row) => <li key={row} className="flex items-start gap-2 text-[12px] leading-relaxed text-zinc-400"><span className="text-yellow-300">→</span>{row}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
