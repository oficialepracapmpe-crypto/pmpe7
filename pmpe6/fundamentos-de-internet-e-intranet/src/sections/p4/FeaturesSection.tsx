import {
  FileDown,
  FileText,
  Highlighter,
  Image,
  LayoutTemplate,
  ListOrdered,
  ListTree,
  MailPlus,
  MessagesSquare,
  PenTool,
  Save,
  SpellCheck,
  Table2,
  Users,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const FEATURES = [
  {
    icon: PenTool,
    t: "Digitar, editar e formatar textos",
    d: "O núcleo: criar e revisar textos com fontes, tamanhos, cores, efeitos (negrito, itálico, sublinhado, tachado, subscrito/sobrescrito), alinhamentos, recuos, espaçamento entre linhas e entre parágrafos.",
  },
  {
    icon: SpellCheck,
    t: "Revisão de conteúdo",
    d: "Verificação ortográfica e gramatical em tempo real (sublinhados vermelho/azul), painel Editor, dicionário de sinônimos, tradução, contagem de palavras e definição de idioma por trecho.",
  },
  {
    icon: Users,
    t: "Colaboração e controle",
    d: "Comentários, Controlar Alterações (aceitar/rejeitar edições), comparar e combinar versões, coautoria em tempo real quando o arquivo está na nuvem e proteção por senha ou restrição de edição.",
  },
  {
    icon: Table2,
    t: "Tabelas e organização de dados",
    d: "Inserir e desenhar tabelas, mesclar/dividir células, converter texto em tabela (e o inverso), classificar, aplicar fórmulas simples e estilos visuais prontos.",
  },
  {
    icon: Image,
    t: "Ilustrações e elementos gráficos",
    d: "Imagens e vídeos (locais e online), formas, ícones, SmartArt (organogramas e fluxos), gráficos vinculados a dados, caixas de texto, WordArt e capturas de tela.",
  },
  {
    icon: LayoutTemplate,
    t: "Layout e design de página",
    d: "Margens, orientação retrato/paisagem, tamanhos de papel (A4...), colunas de texto, quebras de página e de seção, temas, cores e marca d'água.",
  },
  {
    icon: ListOrdered,
    t: "Listas e estrutura",
    d: "Marcadores, listas numeradas e multinível, estilos de parágrafo e de título que organizam o documento em hierarquia — e alimentam o sumário automático.",
  },
  {
    icon: ListTree,
    t: "Documentos longos e referências",
    d: "Sumário automático, notas de rodapé e de fim, legendas de figuras, índice remissivo, citações e bibliografia com estilos (APA, ABNT...), referências cruzadas e indicadores.",
  },
  {
    icon: MailPlus,
    t: "Mala direta",
    d: "Produção em massa de cartas, e-mails, etiquetas e envelopes personalizados a partir de listas de destinatários (Excel, Access, contatos do Outlook).",
  },
  {
    icon: MessagesSquare,
    t: "Cabeçalhos, rodapés e numeração",
    d: "Cabeçalho/rodapé editáveis (com imagem e tabela), número de página em várias posições, seções com cabeçalhos diferentes, primeira página distinta e pares/ímpares.",
  },
  {
    icon: Highlighter,
    t: "Modelos e automação",
    d: "Modelos prontos (currículos, ofícios, atas), criação de modelos próprios (.dotx), blocos de construção (partes rápidas), automação com macros gravadas e VBA.",
  },
  {
    icon: FileDown,
    t: "Salvar, exportar e compartilhar",
    d: "Salvar em disco ou nuvem (OneDrive), histórico de versões, exportar para PDF/XPS preservando a formatação, imprimir com visualização e compartilhar por e-mail/link.",
  },
];

export default function FeaturesSection() {
  return (
    <SectionShell
      id="funcoes"
      num="02"
      kicker="Capacidades · o que esse motor faz"
      title={
        <>
          Todas as funcionalidades do <span className="italic text-blue-300">Word 2019</span>
        </>
      }
      lead={
        <>
          O Word é um <Hot tone="c">processador (editor) de textos</Hot>: o programa da família
          Office para criar, editar, formatar, revisar e publicar documentos. Se um item de prova
          disser "planilhas eletrônicas", é Excel; "slides", PowerPoint; "texto e documentos", é o
          nosso Word.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {FEATURES.map((f, i) => (
          <Reveal key={f.t} delay={i * 0.04}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-blue-300/40 hover:bg-blue-300/[0.05] transition-colors">
              <f.icon size={19} className="text-blue-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{f.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* formatos de arquivo */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Save size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">Os formatos de arquivo do Word</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[13px] leading-relaxed">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
              <p className="font-mono font-bold text-blue-200 text-[14px] mb-1">.docx</p>
              <p className="text-zinc-400">Padrão desde 2007 (XML). Não armazena macros — e, por isso, é mais seguro.</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
              <p className="font-mono font-bold text-blue-200 text-[14px] mb-1">.doc</p>
              <p className="text-zinc-400">Formato antigo (97–2003). Aberto hoje em "modo de compatibilidade".</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
              <p className="font-mono font-bold text-blue-200 text-[14px] mb-1">.docm</p>
              <p className="text-zinc-400">Documento do Word COM macros habilitados.</p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-4">
              <p className="font-mono font-bold text-blue-200 text-[14px] mb-1">.dotx / .pdf</p>
              <p className="text-zinc-400">Modelo do Word / exportação de leitura com layout fixo (não é o formato nativo!).</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="prova" title="exportar PDF é daqui">
            <div className="flex items-start gap-3">
              <FileText size={15} className="text-yellow-300 mt-0.5 shrink-0" />
              <p>
                "Arquivo → Exportar → Criar documento PDF/XPS" e "Arquivo → Salvar como → tipo
                PDF": os dois caminhos existem e caem em prova. Lembretes de gabarito: o Word{" "}
                <strong className="text-zinc-100">não se destina a editar planilhas nem
                apresentações</strong> — pode EMBUTIR objetos desses tipos dentro do texto.
              </p>
            </div>
          </Callout>
          <Callout variant="conceito" title="recursos 'inteligentes' do 2019">
            <p>
              A versão 2019 ainda inclui: <strong className="text-zinc-100">Editor</strong> (revisão
              por painel), <strong className="text-zinc-100">designer/desenhos com caneta digital</strong>{" "}
              (guia Desenho), <strong className="text-zinc-100">ditação por voz</strong> (com conta
              Microsoft 365), legendas e tradução assistida, e o campo{" "}
              <strong className="text-zinc-100">Diga-me</strong> (Alt+Q) que encontra qualquer
              comando sem caçar na faixa.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Conectando com o que vem a seguir: cada funcionalidade destas vive em algum ponto da{" "}
          <Hot tone="c">faixa de opções</Hot>. Dominar o mapa <Hot tone="y">guia → grupo →
          comando</Hot> é o que transforma uma pergunta de "onde fica?" em ponto garantido — e é
          exatamente o que faremos no capítulo <strong className="text-zinc-100">04</strong>.
        </P>
      </Reveal>
    </SectionShell>
  );
}
