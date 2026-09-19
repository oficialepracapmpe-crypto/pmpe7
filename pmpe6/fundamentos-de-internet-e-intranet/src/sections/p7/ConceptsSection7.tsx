import {
  Compass,
  FileType2,
  LayoutList,
  PanelRight,
  Ruler,
  Sparkles,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

/* maquete da janela do Writer */
function WriterMockup() {
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-[#0d0c14] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* título */}
      <div className="flex items-center gap-3 bg-[#106a43] px-4 py-2">
        <span className="grid place-items-center w-5 h-5 rounded bg-white text-[#106a43] font-display font-black text-[11px]">W</span>
        <span className="text-[11.5px] text-white/90 font-medium">Sem título 1 — LibreOffice Writer</span>
      </div>

      {/* BARRA DE MENUS */}
      <div className="flex gap-0 bg-[#f3f2f1] px-2 py-1 border-b border-black/10 overflow-x-auto">
        {["Arquivo","Editar","Exibir","Inserir","Formatar","Estilos","Tabela","Formulário","Ferramentas","Janela","Ajuda"].map((m, i) => (
          <span
            key={m}
            className={`whitespace-nowrap px-2.5 py-1 text-[10px] font-medium rounded ${i === 5 ? "bg-[#106a43]/15 text-[#106a43] font-bold" : "text-neutral-600"}`}
          >
            {m}
          </span>
        ))}
        <span className="ml-auto text-[8.5px] text-neutral-400 self-center pl-3 whitespace-nowrap">← BARRA DE MENUS (não é faixa de opções!)</span>
      </div>

      {/* barras de ferramentas */}
      <div className="bg-[#f7f7f7] border-b border-black/10 px-3 py-1.5 space-y-1">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-sm bg-neutral-300/70" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-2">barra Padrão</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] px-2 py-0.5 rounded bg-white border border-neutral-300 text-neutral-600">Corpo de texto</span>
          <span className="text-[8px] px-2 py-0.5 rounded bg-white border border-neutral-300 text-neutral-600">Liberation Serif</span>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-sm bg-neutral-300/70" />
          ))}
          <span className="text-[8px] text-neutral-500 ml-2">barra de Formatação</span>
        </div>
      </div>

      {/* corpo */}
      <div className="flex bg-[#e6e6e6]">
        <div className="flex-1 p-4">
          <div className="h-3 bg-white/70 border border-black/10 rounded-sm mb-2 flex items-end gap-3 px-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="w-px h-1.5 bg-neutral-400" />
            ))}
            <span className="text-[7px] text-neutral-500 ml-auto">régua</span>
          </div>
          <div className="mx-auto max-w-md bg-white rounded-sm shadow-sm border border-black/10 px-6 py-5 space-y-1.5">
            <div className="h-2 w-2/5 rounded bg-[#106a43]/60" />
            <div className="h-1.5 w-full rounded bg-neutral-200" />
            <div className="h-1.5 w-full rounded bg-neutral-200" />
            <div className="h-1.5 w-3/5 rounded bg-neutral-200" />
          </div>
        </div>
        {/* barra lateral */}
        <div className="w-[104px] shrink-0 bg-[#f7f7f7] border-l border-black/10 p-2">
          <p className="text-[7.5px] font-bold text-neutral-500 uppercase tracking-wide mb-1.5">Barra lateral</p>
          {["Propriedades", "Estilos", "Galeria", "Navegador"].map((s) => (
            <p key={s} className="text-[8px] text-neutral-500 py-1 border-b border-neutral-200">{s}</p>
          ))}
        </div>
      </div>

      {/* status */}
      <div className="flex items-center gap-3 bg-[#106a43] px-4 py-1.5 text-[9px] text-white/85 flex-wrap">
        <span>Página 1 de 3</span>
        <span>412 palavras, 2.310 caracteres</span>
        <span>Estilo: Corpo de texto</span>
        <span>Português (Brasil)</span>
        <span className="ml-auto">Inserir · 100%</span>
      </div>
    </div>
  );
}

export default function ConceptsSection7() {
  return (
    <SectionShell
      id="conceitos"
      num="02"
      kicker="Orientação · a tela por dentro"
      title={
        <>
          Interface e conceitos do <span className="italic text-teal-300">Writer</span>
        </>
      }
      lead={
        <>
          A diferença visual salta aos olhos: em vez da faixa de opções com guias, o Writer usa a
          clássica <Hot tone="e">barra de menus</Hot> + <Hot tone="e">barras de ferramentas</Hot> +{" "}
          <Hot tone="e">barra lateral</Hot>. Saber nomear cada peça é meio caminho para acertar as
          questões de localização.
        </>
      }
    >
      <Reveal>
        <WriterMockup />
      </Reveal>

      {/* elementos */}
      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {[
            { icon: LayoutList, t: "Barra de menus", d: "Arquivo, Editar, Exibir, Inserir, Formatar, Estilos, Tabela, Formulário, Ferramentas, Janela e Ajuda. É o mapa oficial de todos os comandos." },
            { icon: Sparkles, t: "Barras de ferramentas", d: "Padrão (novo, abrir, salvar, PDF, imprimir...) e Formatação (estilo, fonte, negrito, alinhamentos). Podem ser ligadas/desligadas em Exibir → Barras de ferramentas." },
            { icon: PanelRight, t: "Barra lateral (Sidebar)", d: "Painel à direita com Propriedades, Estilos, Galeria, Navegador e Página. Atalho: Ctrl+F5. Exclusividade do LibreOffice." },
            { icon: Ruler, t: "Réguas", d: "Horizontal e vertical, controlam margens, recuos e tabulações. Ligar/desligar em Exibir → Réguas." },
            { icon: Compass, t: "Navegador (F5)", d: "Painel que lista títulos, tabelas, quadros, imagens, seções, indicadores e hiperlinks — clique duplo e o cursor salta até lá." },
            { icon: FileType2, t: "Barra de status", d: "Página atual/total, contagem de palavras e caracteres, ESTILO do parágrafo, idioma, modo Inserir/Sobrescrever e zoom." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 hover:border-teal-300/35 transition-colors">
              <c.icon size={19} className="text-teal-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{c.t}</h3>
              <p className="text-[12.5px] leading-relaxed text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="a pergunta de interface mais provável">
          <p>
            <em>"No LibreOffice Writer, os comandos estão organizados em guias de uma faixa de
            opções."</em> → <strong className="text-rose-300">ERRADO</strong> na interface padrão:
            são <strong className="text-zinc-100">menus</strong>. Existe, sim, a opção experimental{" "}
            <strong className="text-zinc-100">Exibir → Interface do usuário → Com abas</strong>, que
            imita a faixa do Office — mas o padrão de instalação continua sendo a barra de menus.
          </p>
        </Callout>
      </Reveal>

      {/* formatos */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 my-8">
          <h3 className="font-display text-2xl text-[#f4f1ea] mb-2">Formatos de arquivo — o padrão ODF</h3>
          <p className="text-[13.5px] leading-relaxed text-zinc-400 mb-5">
            O <strong className="text-zinc-200">ODF (OpenDocument Format)</strong> é um padrão{" "}
            <strong className="text-zinc-200">aberto</strong> e certificado pela ISO, nativo do
            LibreOffice. O Writer também lê e grava formatos da Microsoft.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[13px] leading-relaxed">
            {[
              { e: ".odt", d: "Texto do Writer — o formato NATIVO.", hot: true },
              { e: ".ott", d: "MODELO de documento de texto." },
              { e: ".fodt", d: "Texto ODF em arquivo XML plano (sem compactação)." },
              { e: ".docx / .doc", d: "Formatos do Word: o Writer abre e salva neles." },
              { e: ".rtf / .txt", d: "Texto formatado / texto puro." },
              { e: ".pdf", d: "EXPORTAÇÃO nativa (Arquivo → Exportar como PDF).", hot: true },
              { e: ".html", d: "Página web (o Writer também edita documentos HTML)." },
              { e: ".epub", d: "Livro digital — exportação nativa do Writer 6+." },
            ].map((f) => (
              <div key={f.e} className={`rounded-xl border p-4 ${f.hot ? "border-teal-300/40 bg-teal-300/[0.07]" : "border-white/[0.07] bg-white/[0.03]"}`}>
                <p className="font-mono font-bold text-teal-200 text-[14px] mb-1">{f.e}</p>
                <p className="text-zinc-400">{f.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
            Extensões ODF dos outros módulos, sempre cobradas em conjunto:{" "}
            <strong className="text-zinc-300">.ods</strong> (Calc),{" "}
            <strong className="text-zinc-300">.odp</strong> (Impress),{" "}
            <strong className="text-zinc-300">.odg</strong> (Draw),{" "}
            <strong className="text-zinc-300">.odb</strong> (Base),{" "}
            <strong className="text-zinc-300">.odf</strong> (Math).
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha" title="salvar ≠ exportar">
            <p>
              O Writer <strong className="text-zinc-100">exporta</strong> para PDF (Arquivo →
              Exportar como PDF) — o PDF não é um formato de "salvamento editável". E, ao salvar em{" "}
              <strong className="text-zinc-100">.docx</strong>, o programa exibe um aviso de possível
              perda de recursos: manter o formato ODF preserva tudo.
            </p>
          </Callout>
          <Callout variant="conceito" title="estilo: a alma do Writer">
            <p>
              O Writer é construído em torno de <strong className="text-zinc-100">estilos</strong>:
              de <strong className="text-zinc-100">parágrafo</strong> (Corpo de texto, Título 1...),
              de <strong className="text-zinc-100">caractere</strong>, de{" "}
              <strong className="text-zinc-100">quadro</strong>, de{" "}
              <strong className="text-zinc-100">página</strong> (exclusividade poderosa!) e de{" "}
              <strong className="text-zinc-100">lista</strong>. O painel abre com{" "}
              <strong className="text-zinc-100">F11</strong> — e há um menu inteiro dedicado a eles.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Uma peculiaridade elegante do Writer: os <Hot tone="e">estilos de página</Hot>. Enquanto
          no Word a configuração de página muda por <em>seções</em>, no Writer cada página pode ter
          um estilo próprio (Padrão, Primeira página, Paisagem, Nota de rodapé...) — com margens,
          orientação, colunas, bordas e cabeçalho definidos no próprio estilo. É um dos pontos em
          que a suíte livre é conceitualmente mais organizada que a concorrente.
        </P>
      </Reveal>
    </SectionShell>
  );
}
