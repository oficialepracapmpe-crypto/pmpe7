import { AnimatePresence, motion } from "framer-motion";
import { Flame, Info } from "lucide-react";
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
    resumo: "O documento como um todo — idêntico ao do Writer, com planilhas no lugar de textos.",
    prova: "Exportar como PDF e Propriedades saem daqui. 'Recarregar' descarta tudo desde o último salvamento.",
    blocos: [
      {
        nome: "Criar e abrir",
        itens: [
          { c: "Novo (Ctrl+N) / Abrir (Ctrl+O) / Documentos recentes" },
          { c: "Assistentes" },
          { c: "Modelos", nota: "salvar como modelo .ots" },
          { c: "Fechar (Ctrl+W) / Recarregar" },
        ],
      },
      {
        nome: "Salvar e exportar",
        itens: [
          { c: "Salvar (Ctrl+S) / Salvar como (Ctrl+Shift+S) / Salvar tudo" },
          { c: "Exportar / Exportar como PDF" },
          { c: "Enviar / Assinaturas digitais" },
          { c: "Imprimir (Ctrl+P) / Propriedades / Sair (Ctrl+Q)" },
        ],
      },
    ],
  },
  {
    id: "editar",
    nome: "Editar",
    tecla: "Alt + E",
    resumo: "Além dos clássicos: preencher intervalos, excluir células e conteúdo, e gerenciar planilhas.",
    prova: "PREENCHER (Ctrl+D, Ctrl+R) e Excluir conteúdo (Backspace) moram aqui — a pegadinha é achar que estão em Formatar.",
    blocos: [
      {
        nome: "Clássicos",
        itens: [
          { c: "Desfazer (Ctrl+Z) / Refazer (Ctrl+Y)" },
          { c: "Recortar, Copiar, Colar, Colar especial (Ctrl+Shift+V)" },
          { c: "Selecionar tudo (Ctrl+A) / Modos de seleção" },
          { c: "Localizar e substituir (Ctrl+H)" },
        ],
      },
      {
        nome: "Preencher",
        itens: [
          { c: "Preencher → Para baixo (Ctrl+D)", nota: "copia a célula de cima" },
          { c: "Preencher → Para a direita (Ctrl+R)" },
          { c: "Preencher → Para cima / Para a esquerda" },
          { c: "Preencher → Série", nota: "progressões aritméticas e geométricas" },
        ],
      },
      {
        nome: "Excluir",
        itens: [
          { c: "Excluir células (Ctrl+−)", nota: "com deslocamento de linhas/colunas" },
          { c: "Excluir conteúdo (Backspace)", nota: "abre a caixa: fórmulas, formatos, notas..." },
          { c: "Excluir planilha" },
          { c: "Alterações (rastreio, comparar, mesclar)" },
        ],
      },
      {
        nome: "Planilha",
        itens: [
          { c: "Renomear / Mover ou copiar / Selecionar" },
          { c: "Ocultar / Exibir / Cabeçalhos de linhas e colunas" },
        ],
      },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    tecla: "Alt + X",
    resumo: "Modos de exibição, barras, cabeçalhos, linha de entrada e zoom.",
    prova: "Mostrar fórmulas (Ctrl+`) e Congelar linhas/colunas estão aqui — o 'Congelar Painéis' do Excel.",
    blocos: [
      {
        nome: "Modos e barras",
        itens: [
          { c: "Normal / Quebra de página" },
          { c: "Cabeçalhos de colunas e linhas" },
          { c: "Linha de entrada / Barra de status / Barra lateral (Ctrl+F5)" },
          { c: "Barras de ferramentas / Tela inteira (Ctrl+Shift+J)" },
        ],
      },
      {
        nome: "Congelar e zoom",
        itens: [
          { c: "Congelar linhas e colunas", nota: "congela tudo acima/à esquerda da célula ativa" },
          { c: "Zoom / Largura da página / Página inteira" },
          { c: "Mostrar fórmulas (Ctrl+`)", nota: "exibe =SOMA() em vez do resultado" },
        ],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    tecla: "Alt + I",
    resumo: "Células, linhas, colunas, planilhas, FUNÇÕES, gráficos e a Tabela Dinâmica.",
    prova: "Assistente de Funções (Ctrl+F2) e TABELA DINÂMICA estão aqui — o endereço é o mesmo do Excel (Inserir).",
    blocos: [
      {
        nome: "Estrutura",
        itens: [
          { c: "Células (Ctrl+Shift++)", nota: "desloca células/linhas/colunas" },
          { c: "Linhas / Colunas" },
          { c: "Planilha", nota: "nova aba em branco ou a partir de arquivo" },
        ],
      },
      {
        nome: "Cálculo e análise",
        itens: [
          { c: "Função (Ctrl+F2)", nota: "o Assistente de Funções" },
          { c: "Nome → Definir (Ctrl+F3) / Inserir / Rótulos" },
          { c: "Tabela Dinâmica", nota: "resumo cruzado de dados" },
        ],
      },
      {
        nome: "Objetos",
        itens: [
          { c: "Gráfico (assistente completo)" },
          { c: "Imagem / Mídia / Forma / Fontwork" },
          { c: "Hyperlink / Cabeçalho e rodapé" },
          { c: "Nota (Ctrl+F1) / Caractere especial" },
        ],
      },
      {
        nome: "Campos",
        itens: [
          { c: "Contagem de páginas / Data e hora" },
          { c: "Formato de número", nota: "moeda, porcentagem, data — atalhos rápidos" },
        ],
      },
    ],
  },
  {
    id: "formatar",
    nome: "Formatar",
    tecla: "Alt + F",
    resumo: "A formatação direta: células, linhas, colunas, planilha, página, formatação condicional e mesclar.",
    prova: "Formatar CÉLULAS (Ctrl+1) é o comando mais usado do Calc — e Formatação Condicional mora AQUI (no Excel é Página Inicial).",
    blocos: [
      {
        nome: "Células e estrutura",
        itens: [
          { c: "Células (Ctrl+1)", nota: "números, fonte, efeitos, alinhamento, bordas, fundo, proteção" },
          { c: "Linhas → Altura, Ocultar, Mostrar" },
          { c: "Colunas → Largura, Ocultar, Mostrar, Largura ideal" },
          { c: "Mesclar células / Dividir células" },
        ],
      },
      {
        nome: "Planilha e página",
        itens: [
          { c: "Planilha → Renomear, Ocultar, Mostrar, Mover" },
          { c: "Página", nota: "estilo de página: margens, orientação, bordas, cabeçalho" },
          { c: "Intervalo de impressão", nota: "definir, editar, limpar, adicionar" },
        ],
      },
      {
        nome: "Condicional e limpeza",
        itens: [
          { c: "Formatação condicional", nota: "cor/barras/ícones conforme o valor" },
          { c: "Mostrar fórmulas (Ctrl+`)" },
          { c: "Autoformatar / Limpar formatação direta (Ctrl+M)" },
        ],
      },
    ],
  },
  {
    id: "estilos",
    nome: "Estilos",
    tecla: "Alt + S",
    resumo: "Menu exclusivo do LibreOffice: estilos de CÉLULA e de PÁGINA — formatação em massa que o Excel não tem nativa.",
    prova: "F11 abre o painel de Estilos; 'Padrão', 'Moeda', 'Porcentagem' e 'Resultado' são estilos de célula prontos.",
    blocos: [
      {
        nome: "Aplicar e gerenciar",
        itens: [
          { c: "Gerenciar estilos (F11)" },
          { c: "Novo estilo a partir da seleção (Shift+F11)" },
          { c: "Atualizar estilo selecionado (Ctrl+Shift+F11)" },
          { c: "Carregar estilos de modelo" },
        ],
      },
      {
        nome: "Estilos de célula prontos",
        itens: [
          { c: "Padrão, Moeda, Porcentagem, Decimal, Científico" },
          { c: "Título, Cabeçalho, Resultado, Aviso, Erro, Nota" },
          { c: "Estilos de página: Padrão, Primeira página, Relatório" },
        ],
      },
    ],
  },
  {
    id: "dados",
    nome: "Dados",
    tecla: "Alt + D",
    resumo: "O coração analítico: filtros, classificação, subtotais, validação, texto em colunas, consolidação e agrupamento.",
    prova: "TUDO de manipulação de dados mora aqui: Classificar, Filtro, Subtotais, Validação, Texto em Colunas, Consolidar, Agrupar (F12).",
    blocos: [
      {
        nome: "Definir e filtrar",
        itens: [
          { c: "Definir intervalo", nota: "batiza um bloco de células" },
          { c: "Filtro → Autofiltro", nota: "setinhas nos cabeçalhos" },
          { c: "Filtro → Filtro padrão / Filtro avançado / Ocultar" },
        ],
      },
      {
        nome: "Organizar",
        itens: [
          { c: "Classificar", nota: "até 3 critérios, com opções e seções" },
          { c: "Subtotais", nota: "totais automáticos por categoria" },
          { c: "Validação", nota: "listas suspensas e restrições de digitação" },
        ],
      },
      {
        nome: "Transformar e consolidar",
        itens: [
          { c: "Texto em colunas", nota: "divide coluna por delimitador (CSV)" },
          { c: "Consolidar", nota: "agrega vários intervalos num resumo" },
          { c: "Grupo → Agrupar (F12) / Desagrupar (Ctrl+F12) / Autoesquema" },
        ],
      },
      {
        nome: "Recalcular",
        itens: [
          { c: "Recalcular (F9) / Atualizar (F9)" },
        ],
      },
    ],
  },
  {
    id: "ferramentas",
    nome: "Ferramentas",
    tecla: "Alt + R",
    resumo: "Ortografia, Detective (auditoria), Atingir Meta, Solver, proteção, macros e Opções.",
    prova: "ATINGIR META e PROTEGER DOCUMENTO estão AQUI (no Excel ficam em Dados e Revisão, respectivamente!).",
    blocos: [
      {
        nome: "Revisão",
        itens: [
          { c: "Ortografia (F7) / Dicionário de sinônimos (Ctrl+F7)" },
          { c: "Idioma / Contagem de palavras" },
          { c: "Autocorreção" },
        ],
      },
      {
        nome: "Auditoria e análise",
        itens: [
          { c: "Detective → Rastrear precedentes (Shift+F9)" },
          { c: "Detective → Rastrear dependentes (Shift+F5) / Remover setas" },
          { c: "Atingir Meta", nota: "que valor em A1 gera X em B1?" },
          { c: "Solver / Cenários" },
        ],
      },
      {
        nome: "Segurança e sistema",
        itens: [
          { c: "Proteger documento → Planilha / Pasta de trabalho", nota: "com senha" },
          { c: "Macros / Galeria / Extensões" },
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
    prova: "'Nova janela' abre outra visão do MESMO documento.",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Nova janela / Fechar janela" },
          { c: "Lista de documentos abertos" },
        ],
      },
    ],
  },
  {
    id: "ajuda",
    nome: "Ajuda",
    tecla: "Alt + U",
    resumo: "Documentação, dicas e informações da versão.",
    prova: "'Sobre o LibreOffice' mostra a versão — citado em questões de suporte.",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Ajuda do LibreOffice (F1)" },
          { c: "O que é isto? / Dica do dia / Procurar comandos" },
          { c: "Verificar atualizações / Sobre" },
        ],
      },
    ],
  },
];

export default function MenuSection8() {
  const [active, setActive] = useState("dados");
  const menu = MENUS.find((m) => m.id === active)!;

  return (
    <SectionShell
      id="menus"
      num="04"
      kicker="O mapa completo · clique em cada menu"
      title={
        <>
          A <span className="italic text-lime-300">barra de menus</span>, item a item
        </>
      }
      lead={
        <>
          Dez menus, do Arquivo ao Ajuda. Os <Hot tone="e">dois menus exclusivos</Hot> da planilha
          são <Hot tone="y">Dados</Hot> (o coração analítico) e <Hot tone="y">Estilos</Hot> — e
          note: o menu Tabela que existe no Writer <em>não existe</em> no Calc.
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
                    ? "bg-lime-300 text-[#0a0910] border-lime-300 shadow-[0_0_24px_rgba(190,242,100,0.3)]"
                    : "border-white/10 text-zinc-400 hover:border-lime-300/50 hover:text-zinc-200 bg-white/[0.02]"
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
          <div className="rounded-2xl border border-lime-300/25 bg-lime-300/[0.05] p-6 sm:p-7 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-300">
                Menu {menu.nome}
              </p>
              <kbd className="font-mono text-[10.5px] font-bold text-lime-200 border border-lime-300/30 bg-lime-300/[0.1] rounded px-2 py-1">
                {menu.tecla}
              </kbd>
            </div>
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
        <Callout variant="conceito" title="o Calc não tem menu 'Tabela'">
          <div className="flex items-start gap-3">
            <Info size={15} className="text-violet-300 mt-0.5 shrink-0" />
            <p>
              Diferente do Writer (que tem menu Tabela e Formulário), o Calc não precisa deles: as
              tabelas <em>são</em> o próprio documento. Em vez disso, ganha o menu{" "}
              <strong className="text-zinc-100">DADOS</strong> — com tudo de manipulação de dados —
              e mantém o menu <strong className="text-zinc-100">ESTILOS</strong>, agora com estilos
              de <strong className="text-zinc-100">célula</strong> e de{" "}
              <strong className="text-zinc-100">página</strong>.
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="as 5 trocas de endereço favoritas (Excel → Calc)">
          <p>
            <strong className="text-zinc-100">Formatação Condicional: Formatar</strong> (no Excel é
            Página Inicial). <strong className="text-zinc-100">Atingir Meta: Ferramentas</strong>{" "}
            (no Excel é Dados). <strong className="text-zinc-100">Proteger: Ferramentas → Proteger
            documento</strong> (no Excel é Revisão).{" "}
            <strong className="text-zinc-100">Preencher: Editar</strong> (no Excel é Página
            Inicial). <strong className="text-zinc-100">Rastrear precedentes: Ferramentas →
            Detective</strong> (no Excel é guia Fórmulas).
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
