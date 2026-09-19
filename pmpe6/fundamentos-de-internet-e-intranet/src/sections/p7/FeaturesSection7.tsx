import {
  BookOpenText,
  Columns3,
  FileSignature,
  FileStack,
  Image,
  Languages,
  ListTree,
  Mail,
  PenLine,
  Shapes,
  Sigma,
  SpellCheck,
  Table2,
  Users,
  Wand2,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const FEATURES = [
  {
    icon: PenLine,
    t: "Digitação, edição e formatação",
    d: "Fonte, tamanho, cor, negrito/itálico/sublinhado (simples, duplo, ondulado), tachado, sobrescrito/subscrito, espaçamento entre caracteres, alinhamentos, recuos, entrelinhas, marcadores e numeração.",
  },
  {
    icon: ListTree,
    t: "Estilos e formatação automática",
    d: "Estilos de parágrafo, caractere, quadro, PÁGINA e lista (F11). Autocorreção, Completar palavras e Autoformatação de tabelas e texto.",
  },
  {
    icon: BookOpenText,
    t: "Documentos longos",
    d: "Sumário automático a partir dos estilos de título, índices alfabéticos e de ilustrações, notas de rodapé e de fim, legendas, referências cruzadas e indicadores.",
  },
  {
    icon: Table2,
    t: "Tabelas com cálculo",
    d: "Inserir (Ctrl+F12), mesclar/dividir células, autoformatar, classificar e até CALCULAR com fórmulas (=soma, média) usando a barra de fórmulas (F2) — sem precisar do Calc.",
  },
  {
    icon: Image,
    t: "Imagens e objetos",
    d: "Imagens com filtros e recorte, quadros de texto (frames), formas, Fontwork (equivalente ao WordArt), gráficos, objetos OLE e a Galeria de clip-arts.",
  },
  {
    icon: Columns3,
    t: "Layout de página",
    d: "Margens, orientação, tamanho, colunas, bordas, marca d'água (via plano de fundo/Fontwork), cabeçalho e rodapé, numeração, quebras de página e de coluna.",
  },
  {
    icon: SpellCheck,
    t: "Revisão de texto",
    d: "Ortografia e gramática (F7), dicionário de sinônimos (Ctrl+F7), hifenização, contagem de palavras e definição de idioma por trecho.",
  },
  {
    icon: Users,
    t: "Colaboração",
    d: "Anotações/comentários, Gravar alterações (equivalente ao Controlar Alterações), aceitar/rejeitar edições, comparar e mesclar documentos.",
  },
  {
    icon: Mail,
    t: "Assistente de Mala Direta",
    d: "Gera cartas, e-mails e etiquetas personalizados a partir de uma fonte de dados (planilha do Calc, .csv, banco no Base ou catálogo de endereços).",
  },
  {
    icon: FileSignature,
    t: "Segurança do documento",
    d: "Salvar com senha, senha separada para edição (abrir somente leitura), assinatura digital do documento e remoção de dados pessoais.",
  },
  {
    icon: Sigma,
    t: "Fórmulas e objetos especiais",
    d: "Inserção de fórmulas matemáticas com o módulo Math, caracteres especiais, cabeçalhos com campos automáticos e envio direto do texto para o Impress como apresentação.",
  },
  {
    icon: Languages,
    t: "Exportação e interoperabilidade",
    d: "Exportar como PDF (inclusive PDF/A e PDF híbrido com o ODF embutido), EPUB, HTML e XHTML; abrir e salvar nos formatos do Microsoft Office.",
  },
  {
    icon: FileStack,
    t: "Documento mestre",
    d: "Recurso poderoso para obras longas: reúne vários arquivos .odt como subdocumentos (capítulos), com numeração e sumário unificados.",
  },
  {
    icon: Shapes,
    t: "Formulários",
    d: "Menu próprio (Formulário) para criar campos de texto, caixas de seleção, botões e listas — útil para formulários preenchíveis em PDF.",
  },
  {
    icon: Wand2,
    t: "Automação",
    d: "Gravação e edição de macros (LibreOffice Basic), Assistentes (carta, fax, agenda) e extensões instaláveis.",
  },
];

export default function FeaturesSection7() {
  return (
    <SectionShell
      id="recursos"
      num="03"
      kicker="Capacidades · o que o Writer faz"
      title={
        <>
          Todas as <span className="italic text-teal-300">funcionalidades</span> do Writer
        </>
      }
      lead={
        <>
          Tudo o que se espera de um processador de textos profissional — e alguns recursos que o
          Word não tem, como os <Hot tone="e">estilos de página</Hot>, o{" "}
          <Hot tone="e">documento mestre</Hot> e a exportação nativa para{" "}
          <Hot tone="e">PDF híbrido e EPUB</Hot>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {FEATURES.map((f, i) => (
          <Reveal key={f.t} delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-teal-300/40 hover:bg-teal-300/[0.04] transition-colors">
              <f.icon size={19} className="text-teal-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{f.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* equivalências de nomenclatura */}
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4 mt-10">
          Mesma função, outro nome — o dicionário Word ⇄ Writer
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[640px] text-[13.5px]">
            <thead>
              <tr className="bg-white/[0.04] text-left">
                <th className="p-4 font-display text-base text-blue-300 w-[38%]">No Word</th>
                <th className="p-4 font-display text-base text-teal-300 w-[38%]">No Writer</th>
                <th className="p-4 font-display text-base text-zinc-300">Observação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { w: "Controlar Alterações", l: "Gravar alterações", o: "Menu Editar → Gravar alterações → Registrar" },
                { w: "Comentário", l: "Anotação / Comentário", o: "Ctrl+Alt+C insere no Writer" },
                { w: "WordArt", l: "Fontwork", o: "Inserir → Fontwork" },
                { w: "Faixa de opções (guias)", l: "Barra de menus + barras de ferramentas", o: "Interface com abas é opcional" },
                { w: "Pincel de Formatação", l: "Clonar formatação", o: "O ícone é um pincel nos dois" },
                { w: "Seções (config. de página)", l: "Estilos de página", o: "Conceito mais forte no Writer" },
                { w: "Painel de Navegação", l: "Navegador (F5)", o: "Lista títulos, tabelas, figuras..." },
                { w: "Blocos de Construção / Partes Rápidas", l: "Autotexto (F3)", o: "Digite a sigla e tecle F3" },
                { w: "Mala Direta", l: "Assistente de Mala Direta", o: "Menu Ferramentas" },
                { w: "Salvar como PDF", l: "Exportar como PDF", o: "Menu Arquivo → Exportar como" },
              ].map((r, i) => (
                <tr key={r.w} className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}>
                  <td className="p-4 text-zinc-300">{r.w}</td>
                  <td className="p-4 text-teal-200 font-medium">{r.l}</td>
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
              <strong className="text-zinc-100">Estilos de página</strong> (cada página com sua
              configuração), <strong className="text-zinc-100">documento mestre</strong> (reúne
              capítulos em arquivos separados), <strong className="text-zinc-100">PDF híbrido</strong>{" "}
              (um PDF que o LibreOffice reabre como documento editável) e a exportação nativa para{" "}
              <strong className="text-zinc-100">EPUB</strong>. Nada disso existe igual no Word.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="o Writer edita PDF?">
            <p>
              <em>"O Writer permite abrir e editar arquivos PDF."</em> → cuidado:{" "}
              <strong className="text-zinc-100">quem abre PDF para edição é o LibreOffice
              DRAW</strong>, não o Writer. O Writer{" "}
              <strong className="text-zinc-100">exporta</strong> para PDF; e o PDF{" "}
              <strong className="text-zinc-100">híbrido</strong> gerado pelo próprio LibreOffice
              pode ser reaberto como documento editável.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Por fim, um detalhe cultural que vira item de prova: o Writer usa{" "}
          <Hot tone="e">fontes livres</Hot> por padrão — <Hot>Liberation Serif</Hot> (métrica
          compatível com Times New Roman) e <Hot>Liberation Sans</Hot> (compatível com Arial) —,
          justamente para que documentos trocados com o Word mantenham a mesma paginação.
        </P>
      </Reveal>
    </SectionShell>
  );
}
