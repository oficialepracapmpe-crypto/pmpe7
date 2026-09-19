import { FileCode2, FileWarning, TriangleAlert } from "lucide-react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

const GROUPS: { g: string; items: { e: string; t: string; abre: string }[] }[] = [
  {
    g: "Texto e documentos",
    items: [
      { e: ".txt", t: "Texto puro, sem formatação", abre: "Bloco de Notas" },
      { e: ".rtf", t: "Texto com formatação leve", abre: "WordPad / Word" },
      { e: ".docx / .doc", t: "Documento do Word (doc = versão antiga)", abre: "Microsoft Word" },
      { e: ".odt", t: "Documento do Writer (padrão aberto)", abre: "LibreOffice Writer" },
      { e: ".pdf", t: "Documento para leitura/Impressão, formato fixo", abre: "Navegadores / leitores de PDF" },
    ],
  },
  {
    g: "Planilhas e dados",
    items: [
      { e: ".xlsx / .xls", t: "Planilha do Excel (xls = versão antiga)", abre: "Microsoft Excel" },
      { e: ".ods", t: "Planilha do Calc (padrão aberto)", abre: "LibreOffice Calc" },
      { e: ".csv", t: "Valores separados por vírgulas — texto puro", abre: "Excel / Bloco de Notas" },
      { e: ".accdb", t: "Banco de dados", abre: "Microsoft Access" },
    ],
  },
  {
    g: "Apresentações",
    items: [
      { e: ".pptx / .ppt", t: "Apresentação de slides", abre: "Microsoft PowerPoint" },
      { e: ".odp", t: "Apresentação do Impress", abre: "LibreOffice Impress" },
    ],
  },
  {
    g: "Imagens",
    items: [
      { e: ".jpg / .jpeg", t: "Foto com COMPACTAÇÃO COM PERDA, tamanho pequeno", abre: "Fotos / navegador" },
      { e: ".png", t: "Imagem SEM PERDA com TRANSPARÊNCIA", abre: "Fotos / navegador" },
      { e: ".gif", t: "Imagem com ANIMAÇÃO (vários quadros)", abre: "Navegador" },
      { e: ".bmp", t: "Bitmap puro, SEM compressão → arquivo pesado", abre: "Paint" },
      { e: ".svg", t: "Gráfico VETORIAL (escala sem serrilhar)", abre: "Navegador / editores" },
      { e: ".webp", t: "Formato moderno da web (leve, com transparência)", abre: "Navegador" },
    ],
  },
  {
    g: "Áudio e vídeo",
    items: [
      { e: ".mp3", t: "Áudio compactado com perda — o padrão das bancas", abre: "Reprodutores de mídia" },
      { e: ".wav", t: "Áudio com alta qualidade, arquivo grande", abre: "Reprodutores de mídia" },
      { e: ".ogg", t: "Áudio de padrão aberto", abre: "Reprodutores" },
      { e: ".mp4", t: "Vídeo — o formato mais usado hoje", abre: "Filmes e TV / navegador" },
      { e: ".mkv / .avi / .mov / .wmv", t: "Outros contêineres de vídeo, cobrados à espreita", abre: "Reprodutores" },
    ],
  },
  {
    g: "Compactação, sistema e web",
    items: [
      { e: ".zip / .rar / .7z", t: "Arquivos COMPACTADOS (o Explorer abre .zip nativamente)", abre: "Explorer / WinRAR / 7-Zip" },
      { e: ".exe / .msi", t: "Programas EXECUTÁVEIS/instaladores — máximo cuidado!", abre: "O próprio Windows" },
      { e: ".bat / .cmd", t: "Lote de comandos (script de console)", abre: "Prompt de Comando" },
      { e: ".html / .htm", t: "Página da Web", abre: "Navegador" },
      { e: ".iso", t: "Imagem exata de um CD/DVD (montável)", abre: "Explorer (Montar)" },
      { e: ".lnk", t: "ATALHO do Windows (atalho tem setinha no ícone)", abre: "O item de destino" },
      { e: ".dll / .sys / .ini / .log / .tmp / .bak", t: "Arquivos de sistema, configuração, registro e temporários", abre: "Sistema/configuração" },
    ],
  },
];

export default function ExtensionsSection() {
  return (
    <SectionShell
      id="extensoes"
      num="02"
      kicker="Organização · o sobrenome dos arquivos"
      title={
        <>
          <span className="italic text-violet-300">Extensões</span> de arquivo: o mapa completo
        </>
      }
      lead={
        <>
          A extensão é o trecho final do nome, após o ponto (<code className="font-mono text-[13px] text-violet-200">.pdf</code>), que{" "}
          <Hot>indica o tipo/conteúdo</Hot> do arquivo e define{" "}
          <Hot tone="v">qual programa o abre por padrão</Hot>. É por causa dela que um duplo clique
          numa foto abre o visualizador de imagens, e não o Word.
        </>
      }
    >
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <Callout variant="conceito" title="associação de programas">
            <p>
              O Windows guarda uma tabela: <strong className="text-zinc-100">".docx abre com o
              Word"</strong>. Trocar a associação (botão direito → Abrir com → escolher outro app
              padrão) <strong className="text-zinc-100">não altera o arquivo</strong> — só o
              programa que o abre com duplo clique.
            </p>
          </Callout>
          <Callout variant="pegadinha" title="renomear não é converter">
            <div className="flex items-start gap-3">
              <FileWarning size={16} className="text-rose-300 mt-1 shrink-0" />
              <p>
                <em>"Renomeei foto.jpg para foto.mp3 e virei música."</em> →{" "}
                <strong className="text-rose-300">ERRADO!</strong> Mudar a extensão{" "}
                <strong className="text-zinc-100">não converte o conteúdo</strong> — só deixa o
                arquivo ilegível/confuso. Converter exige um programa conversor de fato.
              </p>
            </div>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="exemplo" title="extensões ocultas: o golpe mais velho do Windows">
          <div className="flex items-start gap-3">
            <TriangleAlert size={16} className="text-cyan-300 mt-1 shrink-0" />
            <p>
              Por padrão, o Explorer PODE ocultar as extensões conhecidas. Golpe clássico: o arquivo{" "}
              <code className="font-mono text-[12.5px] text-rose-200">fatura.pdf.exe</code>{" "}
              aparece como <code className="font-mono text-[12.5px] text-zinc-200">fatura.pdf</code>{" "}
              — parece documento, mas é um <strong className="text-zinc-100">programa
              (vírus)</strong>. Defesa: Explorer → Exibir → Mostrar →{" "}
              <strong className="text-zinc-100">Extensões de nomes de arquivos</strong>. Bancas
              cobram esse risco quando falam de segurança + Windows juntas.
            </p>
          </div>
        </Callout>
      </Reveal>

      {/* tabelona por grupo */}
      <div className="space-y-8 mt-10">
        {GROUPS.map((g) => (
          <Reveal key={g.g}>
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <FileCode2 size={15} className="text-violet-300" />
                <h3 className="font-display text-xl text-[#f4f1ea]">{g.g}</h3>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full min-w-[640px] text-[13px]">
                  <thead>
                    <tr className="bg-white/[0.04] text-left">
                      <th className="p-3.5 font-semibold text-zinc-400 w-[170px]">Extensão</th>
                      <th className="p-3.5 font-semibold text-zinc-400">O que é</th>
                      <th className="p-3.5 font-semibold text-zinc-400 w-[220px]">Abre com</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.items.map((it, i) => (
                      <tr
                        key={it.e}
                        className={`border-t border-white/[0.05] ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}
                      >
                        <td className="p-3.5 font-mono font-bold text-violet-200">{it.e}</td>
                        <td className="p-3.5 text-zinc-300">{it.t}</td>
                        <td className="p-3.5 text-zinc-500">{it.abre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Callout variant="prova" title="top 5 que não podem faltar na cabeça">
          <p>
            <Hot tone="v">.jpg</Hot> foto com perda · <Hot tone="v">.png</Hot> sem perda + transparência ·{" "}
            <Hot tone="v">.gif</Hot> animada · <Hot tone="v">.csv</Hot> texto de dados separados por vírgula ·{" "}
            <Hot tone="v">.pdf</Hot> layout fixo para leitura. E o trio "versão antiga × nova":
            doc/docx, xls/xlsx, ppt/pptx — o <strong className="text-zinc-100">X no fim marca o
            formato XML moderno</strong> (2007+).
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
