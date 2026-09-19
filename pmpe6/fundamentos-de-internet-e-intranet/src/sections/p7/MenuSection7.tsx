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
    resumo: "O documento como um todo: criar, abrir, salvar, exportar, imprimir, assinar e proteger.",
    prova: "EXPORTAR COMO PDF e Assinaturas digitais estão aqui — e 'Recarregar' desfaz tudo desde o último salvamento.",
    blocos: [
      {
        nome: "Criar e abrir",
        itens: [
          { c: "Novo (Ctrl+N)", nota: "documento de texto, planilha, apresentação, desenho, fórmula, base" },
          { c: "Abrir (Ctrl+O) / Abrir arquivo remoto / Documentos recentes" },
          { c: "Assistentes", nota: "carta, fax, agenda, conversor de documentos" },
          { c: "Modelos", nota: "gerenciar e salvar como modelo (.ott)" },
          { c: "Fechar (Ctrl+W) / Recarregar", nota: "Recarregar descarta alterações não salvas" },
        ],
      },
      {
        nome: "Salvar e exportar",
        itens: [
          { c: "Salvar (Ctrl+S) / Salvar como (Ctrl+Shift+S) / Salvar tudo" },
          { c: "Exportar", nota: "para diversos formatos" },
          { c: "Exportar como PDF / Exportar diretamente como PDF", nota: "PDF/A, PDF híbrido, com senha e permissões" },
          { c: "Exportar como EPUB" },
          { c: "Enviar", nota: "por e-mail, criar documento mestre, esboço para apresentação" },
        ],
      },
      {
        nome: "Imprimir e proteger",
        itens: [
          { c: "Visualizar impressão (Ctrl+Shift+O)" },
          { c: "Imprimir (Ctrl+P) / Configurar impressora" },
          { c: "Assinaturas digitais" },
          { c: "Propriedades", nota: "autor, título, palavras-chave, estatísticas" },
          { c: "Sair do LibreOffice (Ctrl+Q)" },
        ],
      },
    ],
  },
  {
    id: "editar",
    nome: "Editar",
    tecla: "Alt + E",
    resumo: "Desfazer, área de transferência, localizar/substituir e o controle de alterações.",
    prova: "GRAVAR ALTERAÇÕES (o 'controlar alterações' do Writer) mora aqui, não em Ferramentas.",
    blocos: [
      {
        nome: "Desfazer e transferência",
        itens: [
          { c: "Desfazer (Ctrl+Z) / Refazer (Ctrl+Y) / Repetir" },
          { c: "Recortar, Copiar, Colar (Ctrl+X, C, V)" },
          { c: "Colar especial (Ctrl+Shift+V)", nota: "inclui 'texto sem formatação'" },
          { c: "Selecionar tudo (Ctrl+A) / Modos de seleção" },
        ],
      },
      {
        nome: "Localizar",
        itens: [
          { c: "Localizar (Ctrl+F)" },
          { c: "Localizar e substituir (Ctrl+H)", nota: "com expressões regulares e 'outros atributos'" },
        ],
      },
      {
        nome: "Revisão colaborativa",
        itens: [
          { c: "Gravar alterações → Registrar", nota: "equivale ao Controlar Alterações do Word" },
          { c: "Gravar alterações → Mostrar / Gerenciar", nota: "aceitar ou rejeitar cada edição" },
          { c: "Comparar documento / Mesclar documento" },
          { c: "Comentário / Anotação" },
        ],
      },
      {
        nome: "Referências e objetos",
        itens: [
          { c: "Campos, Notas de rodapé e de fim, Entrada de índice, Indicador" },
          { c: "Hyperlink, Referência, Modo de edição (Ctrl+Shift+M)" },
          { c: "Objeto / Vínculos a arquivos externos" },
        ],
      },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    tecla: "Alt + X",
    resumo: "Como você enxerga o documento: layouts, barras, painéis, réguas, marcas e zoom.",
    prova: "É aqui que se liga/desliga a Barra lateral, o Navegador, as réguas e os caracteres não imprimíveis.",
    blocos: [
      {
        nome: "Modos de exibição",
        itens: [
          { c: "Normal", nota: "layout de impressão, o padrão" },
          { c: "Web", nota: "exibe como página web, sem quebra de página" },
          { c: "Tela inteira (Ctrl+Shift+J)" },
          { c: "Interface do usuário", nota: "padrão, com abas, barra única, agrupada — a 'faixa de opções' opcional" },
        ],
      },
      {
        nome: "Painéis",
        itens: [
          { c: "Barra lateral (Ctrl+F5)" },
          { c: "Estilos (F11)" },
          { c: "Galeria / Navegador (F5)" },
          { c: "Barras de ferramentas", nota: "Padrão, Formatação, Tabela, Desenho, Localizar..." },
          { c: "Barra de status / Réguas / Limites do texto" },
        ],
      },
      {
        nome: "Marcas e zoom",
        itens: [
          { c: "Marcas de formatação (Ctrl+F10)", nota: "mostra ¶, espaços e tabulações" },
          { c: "Sombreamentos de campo (Ctrl+F8) / Nomes de campos (Ctrl+F9)" },
          { c: "Imagens e gráficos / Mostrar espaços em branco" },
          { c: "Zoom", nota: "largura da página, páginas lado a lado, percentual" },
        ],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    tecla: "Alt + I",
    resumo: "Tudo o que se acrescenta ao texto: quebras, imagens, tabelas de conteúdo, campos, cabeçalho e rodapé.",
    prova: "Quebra de página, Cabeçalho e rodapé, Número de página e Caractere especial: todos AQUI.",
    blocos: [
      {
        nome: "Páginas e quebras",
        itens: [
          { c: "Quebra de página (Ctrl+Enter)" },
          { c: "Mais quebras", nota: "de linha, de coluna, de página com estilo" },
          { c: "Cabeçalho e rodapé", nota: "ativar por estilo de página" },
          { c: "Número de página / Contagem de páginas" },
        ],
      },
      {
        nome: "Imagens e objetos",
        itens: [
          { c: "Imagem / Gráfico / Mídia (áudio e vídeo)" },
          { c: "Forma / Fontwork", nota: "o 'WordArt' do LibreOffice" },
          { c: "Caixa de texto / Quadro (frame)" },
          { c: "Objeto OLE / Fórmula (Math)" },
        ],
      },
      {
        nome: "Tabela e campos",
        itens: [
          { c: "Tabela (Ctrl+F12)" },
          { c: "Campo", nota: "data, hora, número de página, título, autor, contagem" },
          { c: "Caractere especial / Marca de formatação", nota: "espaço incondicional, hífen opcional" },
          { c: "Hyperlink / Indicador / Referência cruzada" },
        ],
      },
      {
        nome: "Notas e índices",
        itens: [
          { c: "Nota de rodapé e nota de fim" },
          { c: "Sumário e índice", nota: "sumário, índice alfabético, índice de ilustrações, bibliografia" },
          { c: "Legenda / Seção / Envelope" },
          { c: "Cabeçalho e rodapé, Data e hora, Assinatura" },
        ],
      },
    ],
  },
  {
    id: "formatar",
    nome: "Formatar",
    tecla: "Alt + F",
    resumo: "A formatação DIRETA: caractere, parágrafo, marcadores, colunas, página, imagem e objetos.",
    prova: "'Limpar formatação direta' (Ctrl+M) e 'Estilo de página' saem daqui — e o conceito direta × estilo é cobrado.",
    blocos: [
      {
        nome: "Texto",
        itens: [
          { c: "Caractere", nota: "fonte, tamanho, cor, efeitos, posição, realce" },
          { c: "Parágrafo", nota: "recuos, espaçamento, alinhamento, capitulares, bordas" },
          { c: "Texto", nota: "maiúsculas/minúsculas, sobrescrito, negrito rápido" },
          { c: "Marcadores e numeração / Listas" },
          { c: "Limpar formatação direta (Ctrl+M)" },
        ],
      },
      {
        nome: "Página e colunas",
        itens: [
          { c: "Estilo de página", nota: "margens, orientação, bordas, plano de fundo, cabeçalho" },
          { c: "Colunas", nota: "dividir o texto em 2, 3 ou mais colunas" },
          { c: "Marca d'água / Plano de fundo da página" },
          { c: "Seções / Quebra de página com estilo" },
        ],
      },
      {
        nome: "Objetos",
        itens: [
          { c: "Imagem", nota: "posição, disposição do texto, cortar, filtros" },
          { c: "Quadro e objeto / Nome e âncora" },
          { c: "Disposição do texto", nota: "o 'quebra de texto automática' do Word" },
          { c: "Alinhar, Organizar (frente/trás), Agrupar, Inverter, Girar" },
        ],
      },
    ],
  },
  {
    id: "estilos",
    nome: "Estilos",
    tecla: "Alt + S",
    resumo: "Menu EXCLUSIVO do LibreOffice: aplicar, criar, atualizar e gerenciar estilos de todos os tipos.",
    prova: "O Word não tem um menu 'Estilos' — no Writer ele é independente. Ctrl+0 a Ctrl+5 aplicam Corpo de texto e Títulos 1 a 5.",
    blocos: [
      {
        nome: "Aplicar rapidamente",
        itens: [
          { c: "Corpo de texto (Ctrl+0)" },
          { c: "Título 1 (Ctrl+1), Título 2 (Ctrl+2), Título 3 (Ctrl+3)..." },
          { c: "Citação, Lista com marcadores, Lista numerada" },
          { c: "Ênfase, Ênfase forte, Citação (estilos de CARACTERE)" },
        ],
      },
      {
        nome: "Gerenciar",
        itens: [
          { c: "Gerenciar estilos (F11)", nota: "painel com os 5 tipos: parágrafo, caractere, quadro, página e lista" },
          { c: "Novo estilo a partir da seleção (Shift+F11)" },
          { c: "Atualizar estilo selecionado (Ctrl+Shift+F11)" },
          { c: "Carregar estilos de modelo", nota: "importa a formatação de outro documento" },
          { c: "Editar estilo", nota: "muda a definição e todos os parágrafos se atualizam juntos" },
        ],
      },
    ],
  },
  {
    id: "tabela",
    nome: "Tabela",
    tecla: "Alt + T",
    resumo: "Menu próprio para tabelas: inserir, editar estrutura, converter, classificar e calcular.",
    prova: "No Word, isso fica em guias contextuais; no Writer, é um MENU FIXO da barra.",
    blocos: [
      {
        nome: "Criar e converter",
        itens: [
          { c: "Inserir tabela (Ctrl+F12)" },
          { c: "Converter → Texto em tabela / Tabela em texto" },
          { c: "Autoformatar estilos" },
        ],
      },
      {
        nome: "Estrutura",
        itens: [
          { c: "Inserir / Excluir linhas e colunas" },
          { c: "Selecionar célula, linha, coluna ou tabela" },
          { c: "Mesclar células / Dividir células / Mesclar tabela / Dividir tabela" },
          { c: "Tamanho", nota: "distribuir linhas e colunas uniformemente, altura mínima" },
        ],
      },
      {
        nome: "Dados",
        itens: [
          { c: "Classificar", nota: "ordena as linhas por até 3 critérios" },
          { c: "Fórmula (F2)", nota: "cálculos na tabela: =soma <A1:A5>" },
          { c: "Reconhecimento numérico / Repetir linhas de título" },
          { c: "Propriedades da tabela", nota: "bordas, plano de fundo, alinhamento, quebra entre páginas" },
        ],
      },
    ],
  },
  {
    id: "formulario",
    nome: "Formulário",
    tecla: "Alt + O",
    resumo: "Criação de formulários preenchíveis: campos de texto, caixas de seleção, botões e listas.",
    prova: "Existe como menu próprio desde o LibreOffice 6 — o Word esconde isso na guia Desenvolvedor.",
    blocos: [
      {
        nome: "Controles",
        itens: [
          { c: "Modo de design / Alternar assistentes" },
          { c: "Caixa de texto, Caixa de seleção, Botão de opção, Caixa de listagem, Botão de ação" },
          { c: "Campo formatado, Campo de data, Campo numérico" },
          { c: "Propriedades do controle e do formulário" },
        ],
      },
    ],
  },
  {
    id: "ferramentas",
    nome: "Ferramentas",
    tecla: "Alt + R",
    resumo: "Ortografia, idioma, numeração de capítulos, mala direta, macros, personalização e Opções.",
    prova: "O Assistente de MALA DIRETA e a caixa OPÇÕES (configurações gerais do programa) ficam neste menu.",
    blocos: [
      {
        nome: "Idioma e revisão",
        itens: [
          { c: "Ortografia (F7) / Verificação automática" },
          { c: "Dicionário de sinônimos (Ctrl+F7)" },
          { c: "Idioma", nota: "definir por seleção, parágrafo ou documento; hifenização" },
          { c: "Contagem de palavras" },
          { c: "Autocorreção / Autotexto (Ctrl+F3)" },
        ],
      },
      {
        nome: "Estrutura do documento",
        itens: [
          { c: "Numeração de capítulos", nota: "vincula os estilos Título aos níveis" },
          { c: "Numeração de linhas / Notas de rodapé e de fim" },
          { c: "Atualizar", nota: "campos, índices, tudo (F9)" },
          { c: "Classificar / Calcular (Ctrl++)" },
        ],
      },
      {
        nome: "Dados e automação",
        itens: [
          { c: "Assistente de Mala Direta" },
          { c: "Banco de dados bibliográfico / Fontes de dados (F4)" },
          { c: "Macros", nota: "gravar, editar, organizar — LibreOffice Basic" },
          { c: "Gerenciador de extensões / Filtros XML" },
        ],
      },
      {
        nome: "Configuração",
        itens: [
          { c: "Personalizar", nota: "menus, barras de ferramentas e TECLADO (criar atalhos próprios)" },
          { c: "Opções (Alt+F12)", nota: "todas as preferências do LibreOffice e do Writer" },
        ],
      },
    ],
  },
  {
    id: "janela",
    nome: "Janela",
    tecla: "Alt + J",
    resumo: "Gerencia as janelas abertas da suíte inteira.",
    prova: "Item curto: 'Nova janela' abre outra visão DO MESMO documento — não cria um arquivo novo.",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Nova janela", nota: "segunda visão do mesmo documento" },
          { c: "Fechar janela (Ctrl+W)" },
          { c: "Lista de documentos abertos", nota: "alterna entre Writer, Calc, Impress..." },
        ],
      },
    ],
  },
  {
    id: "ajuda",
    nome: "Ajuda",
    tecla: "Alt + U",
    resumo: "Documentação, dicas do dia, informações da versão e busca de comandos.",
    prova: "F1 abre a Ajuda; 'Sobre o LibreOffice' mostra a versão — item citado em questões de suporte.",
    blocos: [
      {
        nome: "Comandos",
        itens: [
          { c: "Ajuda do LibreOffice (F1)" },
          { c: "O que é isto? / Dica do dia" },
          { c: "Procurar comandos", nota: "busca por nome de comando (como o 'Diga-me' do Office)" },
          { c: "Verificar atualizações / Sobre o LibreOffice" },
        ],
      },
    ],
  },
];

export default function MenuSection7() {
  const [active, setActive] = useState("estilos");
  const menu = MENUS.find((m) => m.id === active)!;

  return (
    <SectionShell
      id="menus"
      num="04"
      kicker="O mapa completo · clique em cada menu"
      title={
        <>
          A <span className="italic text-teal-300">barra de menus</span>, item a item
        </>
      }
      lead={
        <>
          Onze menus, do Arquivo ao Ajuda. Repare nos <Hot tone="e">três menus exclusivos</Hot> que o
          Word não possui: <Hot tone="y">Estilos</Hot>, <Hot tone="y">Tabela</Hot> (fixo, e não
          contextual) e <Hot tone="y">Formulário</Hot>.
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
                    ? "bg-teal-300 text-[#0a0910] border-teal-300 shadow-[0_0_24px_rgba(94,234,212,0.3)]"
                    : "border-white/10 text-zinc-400 hover:border-teal-300/50 hover:text-zinc-200 bg-white/[0.02]"
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
          <div className="rounded-2xl border border-teal-300/25 bg-teal-300/[0.05] p-6 sm:p-7 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                Menu {menu.nome}
              </p>
              <kbd className="font-mono text-[10.5px] font-bold text-teal-200 border border-teal-300/30 bg-teal-300/[0.1] rounded px-2 py-1">
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
        <Callout variant="conceito" title="como o Writer organiza os comandos">
          <div className="flex items-start gap-3">
            <Info size={15} className="text-violet-300 mt-0.5 shrink-0" />
            <p>
              Pressione <strong className="text-zinc-100">Alt</strong> e as letras de acesso dos
              menus ficam sublinhadas — depois é só teclar a letra (Alt+A = Arquivo, Alt+E = Editar,
              Alt+S = Estilos...). Além dos menus, os mesmos comandos aparecem nas{" "}
              <strong className="text-zinc-100">barras de ferramentas</strong>, na{" "}
              <strong className="text-zinc-100">barra lateral</strong> e no{" "}
              <strong className="text-zinc-100">menu de contexto</strong> (botão direito) — quatro
              caminhos para o mesmo destino.
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="as 5 localizações que mais caem">
          <p>
            <strong className="text-zinc-100">Exportar como PDF: Arquivo</strong>.{" "}
            <strong className="text-zinc-100">Gravar alterações: Editar</strong> (no Word é a guia
            Revisão!). <strong className="text-zinc-100">Marcas de formatação ¶: Exibir</strong>{" "}
            (Ctrl+F10). <strong className="text-zinc-100">Estilo de página e Colunas: Formatar</strong>.{" "}
            <strong className="text-zinc-100">Mala Direta, Macros e Opções: Ferramentas</strong>.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
