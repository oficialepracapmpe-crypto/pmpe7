import { AnimatePresence, motion } from "framer-motion";
import { Flame } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

interface Bloco {
  nome: string;
  itens: { c: string; nota?: string }[];
}
interface Menu {
  id: string;
  nome: string;
  tecla: string;
  resumo: string;
  prova: string;
  blocos: Bloco[];
}

const MENUS: Menu[] = [
  {
    id: "arquivo",
    nome: "Arquivo",
    tecla: "Alt + A",
    resumo: "O documento como um todo — idêntico ao do Writer e do Calc.",
    prova: "Exportar como PDF e Assistentes (de apresentação) saem daqui.",
    blocos: [
      {
        nome: "Painel principal",
        itens: [
          { c: "Novo (Ctrl+N) / Abrir (Ctrl+O) / Recentes / Modelos" },
          { c: "Salvar (Ctrl+S) / Salvar como (Ctrl+Shift+S)" },
          { c: "Exportar / Exportar como PDF" },
          { c: "Imprimir (Ctrl+P) / Propriedades / Sair (Ctrl+Q)" },
        ],
      },
    ],
  },
  {
    id: "editar",
    nome: "Editar",
    tecla: "Alt + E",
    resumo: "Clássicos + duplicar objetos + gerenciar slides e campos.",
    prova: "DUPLICAR (Shift+F3) mora aqui — a pegadinha é esperar Ctrl+D.",
    blocos: [
      {
        nome: "Clássicos",
        itens: [
          { c: "Desfazer / Refazer / Recortar / Copiar / Colar / Colar especial" },
          { c: "Selecionar tudo (Ctrl+A) / Localizar e substituir (Ctrl+H)" },
          { c: "Duplicar (Shift+F3)", nota: "o Ctrl+D do PowerPoint" },
        ],
      },
      {
        nome: "Campos e objetos",
        itens: [
          { c: "Campos (data, hora, número do slide, autor)" },
          { c: "Hyperlink / Imagem / Objeto / Âncora" },
        ],
      },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    tecla: "Alt + X",
    resumo: "Modos de exibição, mestres, painéis, barras e zoom.",
    prova: "O SLIDE MESTRE fica em Exibir → Mestre → Slide Mestre — endereço mais cobrado da suíte livre.",
    blocos: [
      {
        nome: "Modos",
        itens: [
          { c: "Normal / Estrutura de Tópicos / Notas / Classificação de Slides" },
          { c: "Apresentação (F5)" },
        ],
      },
      {
        nome: "Mestre",
        itens: [
          { c: "Mestre → Slide Mestre", nota: "edita o molde de todos os slides" },
          { c: "Mestre → Notas Mestre" },
        ],
      },
      {
        nome: "Painéis e zoom",
        itens: [
          { c: "Barra lateral (Ctrl+F5) / Navegador (Ctrl+Shift+F5)" },
          { c: "Barras de ferramentas / Barra de status" },
          { c: "Zoom / Tela inteira (Ctrl+Shift+J)" },
        ],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    tecla: "Alt + I",
    resumo: "Tudo o que se acrescenta ao slide: slides, imagens, mídia, gráficos, tabelas e campos.",
    prova: "Novo Slide, Gráfico, Tabela, Mídia e Hiperlink: todos aqui.",
    blocos: [
      {
        nome: "Estrutura",
        itens: [
          { c: "Novo Slide / Slide do arquivo" },
          { c: "Cabeçalho e rodapé / Data e hora / Número do slide" },
        ],
      },
      {
        nome: "Objetos",
        itens: [
          { c: "Imagem / Mídia (áudio e vídeo) / Objeto OLE" },
          { c: "Gráfico / Tabela / Planilha do Calc" },
          { c: "Forma / Fontwork (o WordArt livre)" },
          { c: "Hyperlink (Ctrl+K) / Nota / Caractere especial / Fórmula" },
        ],
      },
    ],
  },
  {
    id: "formatar",
    nome: "Formatar",
    tecla: "Alt + F",
    resumo: "Formatação de caracteres, parágrafos, objetos, páginas e estilos de página.",
    prova: "Posição e Tamanho (F4) e Caracteres/Parágrafo moram aqui.",
    blocos: [
      {
        nome: "Texto",
        itens: [
          { c: "Caracteres / Parágrafo / Marcadores e numeração" },
          { c: "Página (estilo de página do slide)" },
        ],
      },
      {
        nome: "Objetos e slides",
        itens: [
          { c: "Posição e tamanho (F4)" },
          { c: "Objeto / Agrupar / Combinar / Organizar" },
          { c: "Slide → Layout / Propriedades de design" },
          { c: "Estilos e formatação (F11)" },
        ],
      },
    ],
  },
  {
    id: "estilos",
    nome: "Estilos",
    tecla: "Alt + S",
    resumo: "Estilos gráficos e de apresentação — formatação em massa consistente.",
    prova: "F11 abre o painel; 'Novo estilo' cria a partir da seleção (Shift+F11).",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Novo / Atualizar (Shift+F11 / Ctrl+Shift+F11)" },
          { c: "Gerenciar (F11)" },
          { c: "Estilos de apresentação: Título, Subtítulo, Título 1..." },
        ],
      },
    ],
  },
  {
    id: "slide",
    nome: "Slide",
    tecla: "Alt + S? — Alt + L",
    resumo: "MENU EXCLUSIVO: tudo sobre o slide atual — layout, propriedades, visibilidade e exclusão.",
    prova: "O PowerPoint não tem esse menu. Layout, Ocultar Slide, Propriedades do Slide e Excluir Slide moram aqui.",
    blocos: [
      {
        nome: "Estrutura",
        itens: [
          { c: "Layout", nota: "troca o layout do slide atual (Título, Título e Conteúdo...)" },
          { c: "Novo slide (do layout)" },
          { c: "Ocultar Slide / Exibir Slide", nota: "o slide fica no arquivo, mas não é exibido" },
          { c: "Excluir Slide / Renomear Slide" },
        ],
      },
      {
        nome: "Propriedades",
        itens: [
          { c: "Propriedades do Slide", nota: "nome, transição em resumo, temporização" },
          { c: "Propriedades de design (tema)" },
        ],
      },
    ],
  },
  {
    id: "apresentacao",
    nome: "Apresentação",
    tecla: "Alt + P? — Alt + A",
    resumo: "MENU EXCLUSIVO: configurar e executar o show — início, ensaio, personalização e configurações.",
    prova: "F5, Ensaio de Intervalos, Apresentação Personalizada e Configurações: o quarteto mais cobrado.",
    blocos: [
      {
        nome: "Executar",
        itens: [
          { c: "Apresentação (F5) / Apresentação do slide atual" },
          { c: "Repetir apresentação", nota: "loop infinito — modo quiosque" },
          { c: "Apresentação personalizada", nota: "roteiro com apenas alguns slides" },
        ],
      },
      {
        nome: "Configurar",
        itens: [
          { c: "Configurações da apresentação", nota: "padrão, automática, janela, looping, intervalos" },
          { c: "Ensaio de intervalos", nota: "cronometra cada slide ao vivo" },
          { c: "Miniaturas de slides / mouse como caneta" },
        ],
      },
    ],
  },
  {
    id: "desenhar",
    nome: "Desenhar",
    tecla: "Alt + R? — Alt + D",
    resumo: "MENU EXCLUSIVO: as ferramentas de desenho herdadas do Draw — formas, pontos, combinação e arranjo.",
    prova: "Agrupar (Shift+Ctrl+G), Combinar (Shift+Ctrl+K), Pontos (F8) e as galerias de formas: território deste menu.",
    blocos: [
      {
        nome: "Formas e linhas",
        itens: [
          { c: "Linha / Setas / Retângulo / Elipse / Curva" },
          { c: "Formas Básicas, Símbolos, Setas de Bloco, Fluxograma, Callouts, Estrelas" },
          { c: "Texto / Fontwork" },
        ],
      },
      {
        nome: "Edição de formas",
        itens: [
          { c: "Pontos (F8)", nota: "edita os vértices da forma" },
          { c: "Agrupar (Shift+Ctrl+G) / Desagrupar (Shift+Ctrl+A)" },
          { c: "Combinar (Shift+Ctrl+K) / Dividir" },
          { c: "Arranjar (frente, trás, invertido, frente ao fundo)" },
        ],
      },
    ],
  },
  {
    id: "ferramentas",
    nome: "Ferramentas",
    tecla: "Alt + R",
    resumo: "Ortografia, idioma, macros, galeria, personalização e Opções.",
    prova: "Mesma estrutura dos outros módulos — a caixa OPÇÕES (Alt+F12) é daqui.",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Ortografia (F7) / Sinônimos (Ctrl+F7) / Idioma" },
          { c: "Galeria / Macros / Extensões" },
          { c: "Personalizar / Opções (Alt+F12)" },
        ],
      },
    ],
  },
  {
    id: "janela",
    nome: "Janela",
    tecla: "Alt + J",
    resumo: "Gerencia as janelas abertas da suíte.",
    prova: "Item curto e raro — 'Nova janela' abre outra visão do mesmo documento.",
    blocos: [
      { nome: "Comandos", itens: [{ c: "Nova janela / Fechar / Documentos abertos" }] },
    ],
  },
  {
    id: "ajuda",
    nome: "Ajuda",
    tecla: "Alt + U",
    resumo: "Documentação e informações da versão.",
    prova: "'Sobre o LibreOffice' mostra a versão.",
    blocos: [
      { nome: "Comandos", itens: [{ c: "Ajuda (F1) / Dica do dia / Sobre" }] },
    ],
  },
];

export default function MenuSection9() {
  const [active, setActive] = useState("slide");
  const menu = MENUS.find((m) => m.id === active)!;

  return (
    <SectionShell
      id="menus"
      num="04"
      kicker="O mapa completo · clique em cada menu"
      title={
        <>
          A <span className="italic text-rose-300">barra de menus</span>, item a item
        </>
      }
      lead={
        <>
          Doze menus, do Arquivo ao Ajuda — e <Hot tone="y">três exclusivos</Hot> que o PowerPoint
          não possui: <Hot tone="y">Slide</Hot>, <Hot tone="y">Apresentação</Hot> e{" "}
          <Hot tone="y">Desenhar</Hot>. É neles que as questões de localização se concentram.
        </>
      }
    >
      <Reveal>
        <div className="sticky top-[72px] z-30 bg-[#0a0910]/95 backdrop-blur-xl py-3 -mx-1 px-1 mb-6">
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {MENUS.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[13px] font-bold cursor-pointer transition-all border ${
                  active === m.id
                    ? "bg-rose-300 text-[#0a0910] border-rose-300 shadow-[0_0_24px_rgba(253,164,175,0.3)]"
                    : "border-white/10 text-zinc-400 hover:border-rose-300/50 hover:text-zinc-200 bg-white/[0.02]"
                }`}
              >
                {m.nome}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={menu.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.05] p-6 sm:p-7 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-2">
              Menu {menu.nome}
            </p>
            <p className="text-[15px] leading-relaxed text-zinc-300 mb-4">{menu.resumo}</p>
            <div className="flex items-start gap-2.5 rounded-xl border border-yellow-300/25 bg-yellow-300/[0.07] p-4">
              <Flame size={15} className="text-yellow-300 mt-0.5 shrink-0" />
              <p className="text-[13px] leading-relaxed text-yellow-100/90">
                <strong className="text-yellow-300">Onde a banca bate:</strong> {menu.prova}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {menu.blocos.map((b) => (
              <div key={b.nome} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-3.5 border-b border-white/[0.07] pb-2">
                  {b.nome}
                </p>
                <ul className="space-y-2.5">
                  {b.itens.map((it) => (
                    <li key={it.c} className="text-[13.5px] leading-relaxed">
                      <span className="text-zinc-200 font-medium">{it.c}</span>
                      {it.nota && <span className="text-zinc-500"> — {it.nota}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <Reveal>
        <Callout variant="prova" title="as 5 localizações que mais caem">
          <p>
            <strong className="text-zinc-100">Slide Mestre: Exibir → Mestre</strong>.{" "}
            <strong className="text-zinc-100">Transições: Barra lateral → Trocar Slide</strong>{" "}
            (não é um menu!). <strong className="text-zinc-100">Animações: Barra lateral → Animação
            Personalizada</strong>. <strong className="text-zinc-100">Ocultar Slide: menu
            Slide</strong>. <strong className="text-zinc-100">Ensaio e Configurações: menu
            Apresentação</strong>. E o detalhe fino: no Impress,{" "}
            <strong className="text-zinc-100">não existe menu "Transições" ou "Animações"</strong>{" "}
            como no PowerPoint — é tudo painel lateral.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
