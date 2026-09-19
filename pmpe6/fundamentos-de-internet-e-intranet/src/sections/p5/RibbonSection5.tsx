import { AnimatePresence, motion } from "framer-motion";
import { Flame, Info } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, Reveal, SectionShell } from "../../components/ui";

interface Grupo {
  nome: string;
  comandos: { c: string; nota?: string }[];
}
interface Guia {
  id: string;
  nome: string;
  tecla: string;
  resumo: string;
  prova: string;
  grupos: Grupo[];
}

const GUIAS: Guia[] = [
  {
    id: "arquivo",
    nome: "Arquivo",
    tecla: "Alt, F",
    resumo:
      "O modo Backstage: tudo o que diz respeito ao arquivo como um todo — nunca à formatação das células.",
    prova: "Proteger pasta de trabalho com senha e Exportar para PDF saem daqui.",
    grupos: [
      {
        nome: "Painel principal",
        comandos: [
          { c: "Informações", nota: "Proteger Pasta de Trabalho, Inspecionar, Versões" },
          { c: "Novo / Abrir (Ctrl+A)", nota: "em branco ou a partir de modelos" },
          { c: "Salvar (Ctrl+B) / Salvar como (F12)", nota: ".xlsx, .xlsm, .csv, .pdf" },
          { c: "Imprimir (Ctrl+P)", nota: "visualização, escala, orientação" },
          { c: "Compartilhar / Exportar" },
          { c: "Opções", nota: "fórmulas, salvamento automático, suplementos" },
        ],
      },
    ],
  },
  {
    id: "inicial",
    nome: "Página Inicial",
    tecla: "Alt + H",
    resumo:
      "A guia do dia a dia: formatar células, números e alinhamento, além de inserir/excluir linhas e usar AutoSoma e Localizar.",
    prova: "Mesclar e Centralizar, Formato de Número, Formatação Condicional e Pincel são os campeões.",
    grupos: [
      {
        nome: "Área de Transferência",
        comandos: [
          { c: "Colar / Colar Especial (Ctrl+Alt+V)", nota: "valores, fórmulas, formatos, transpor" },
          { c: "Recortar, Copiar" },
          { c: "Pincel de Formatação" },
        ],
      },
      {
        nome: "Fonte",
        comandos: [
          { c: "Fonte, tamanho, aumentar/diminuir" },
          { c: "Negrito (Ctrl+N), Itálico (Ctrl+I), Sublinhado (Ctrl+S)" },
          { c: "Bordas", nota: "contorno, todas as bordas, desenhar borda" },
          { c: "Cor de Preenchimento e Cor da Fonte" },
        ],
      },
      {
        nome: "Alinhamento",
        comandos: [
          { c: "Alinhar em cima/meio/embaixo e esquerda/centro/direita" },
          { c: "Orientação do texto (inclinado, vertical)" },
          { c: "Quebrar Texto Automaticamente", nota: "faz o texto caber em várias linhas na célula" },
          { c: "Mesclar e Centralizar", nota: "une células — clássico para títulos de tabela" },
          { c: "Aumentar/Diminuir recuo" },
        ],
      },
      {
        nome: "Número",
        comandos: [
          { c: "Formato de Número", nota: "Geral, Número, Moeda, Contábil, Data, Hora, Porcentagem, Fração, Texto" },
          { c: "Estilo de Moeda / Porcentagem (Ctrl+Shift+%) / Separador de Milhares" },
          { c: "Aumentar/Diminuir Casas Decimais" },
        ],
      },
      {
        nome: "Estilos",
        comandos: [
          { c: "Formatação Condicional", nota: "realçar regras, barras de dados, escalas de cor, ícones" },
          { c: "Formatar como Tabela" },
          { c: "Estilos de Célula" },
        ],
      },
      {
        nome: "Células",
        comandos: [
          { c: "Inserir / Excluir células, linhas, colunas e planilhas" },
          { c: "Formatar", nota: "altura da linha, largura da coluna, ocultar, renomear aba, proteger" },
        ],
      },
      {
        nome: "Edição",
        comandos: [
          { c: "AutoSoma (Alt+=)", nota: "soma, média, contagem, máximo e mínimo" },
          { c: "Preencher", nota: "para baixo, à direita, série" },
          { c: "Limpar", nota: "tudo, formatos, conteúdo, comentários" },
          { c: "Classificar e Filtrar / Localizar e Selecionar (Ctrl+L, Ctrl+U)" },
        ],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    tecla: "Alt + N",
    resumo:
      "Tudo o que se acrescenta à planilha: tabelas dinâmicas, gráficos, ilustrações, links e caixas de texto.",
    prova: "TABELA DINÂMICA e GRÁFICOS ficam aqui — não na guia Dados, como muita gente marca.",
    grupos: [
      {
        nome: "Tabelas",
        comandos: [
          { c: "Tabela Dinâmica", nota: "resumo/cruzamento de grandes bases" },
          { c: "Tabelas Dinâmicas Recomendadas" },
          { c: "Tabela", nota: "transforma o intervalo em tabela com filtros automáticos" },
        ],
      },
      {
        nome: "Ilustrações",
        comandos: [{ c: "Imagens, Formas, Ícones, SmartArt, Captura de Tela" }],
      },
      {
        nome: "Gráficos",
        comandos: [
          { c: "Colunas/Barras, Linhas, Pizza, Área, Dispersão, Radar" },
          { c: "Gráficos Recomendados e Gráfico Dinâmico" },
          { c: "Mapas 3D" },
        ],
      },
      {
        nome: "Minigráficos",
        comandos: [{ c: "Linha, Coluna, Ganhos/Perdas", nota: "gráficos dentro de uma única célula" }],
      },
      {
        nome: "Filtros",
        comandos: [{ c: "Segmentação de Dados e Linha do Tempo", nota: "filtros visuais para tabelas dinâmicas" }],
      },
      {
        nome: "Links e Texto",
        comandos: [
          { c: "Hiperlink (Ctrl+K)" },
          { c: "Caixa de Texto, Cabeçalho e Rodapé, WordArt" },
          { c: "Objeto, Equação e Símbolo" },
        ],
      },
    ],
  },
  {
    id: "layout",
    nome: "Layout da Página",
    tecla: "Alt + P",
    resumo:
      "A guia da IMPRESSÃO e da aparência da página: temas, margens, orientação, área de impressão e escala.",
    prova: "Imprimir Títulos (repetir a linha de cabeçalho em todas as páginas) e Área de Impressão são daqui.",
    grupos: [
      {
        nome: "Temas",
        comandos: [{ c: "Temas, Cores, Fontes e Efeitos" }],
      },
      {
        nome: "Configurar Página",
        comandos: [
          { c: "Margens" },
          { c: "Orientação", nota: "retrato × paisagem" },
          { c: "Tamanho (A4, Carta...)" },
          { c: "Área de Impressão", nota: "define só um trecho para imprimir" },
          { c: "Quebras, Plano de Fundo" },
          { c: "Imprimir Títulos", nota: "repete linhas/colunas de cabeçalho em todas as páginas" },
        ],
      },
      {
        nome: "Dimensionar para Ajustar",
        comandos: [
          { c: "Largura e Altura", nota: "ex.: caber em 1 página de largura" },
          { c: "Escala (%)" },
        ],
      },
      {
        nome: "Opções de Planilha",
        comandos: [
          { c: "Linhas de Grade: Exibir / Imprimir", nota: "por padrão aparecem na tela mas NÃO são impressas" },
          { c: "Títulos (letras e números): Exibir / Imprimir" },
        ],
      },
      {
        nome: "Organizar",
        comandos: [{ c: "Trazer para Frente, Enviar para Trás, Alinhar, Agrupar, Girar" }],
      },
    ],
  },
  {
    id: "formulas",
    nome: "Fórmulas",
    tecla: "Alt + M",
    resumo:
      "A biblioteca de funções e as ferramentas de auditoria — quem monta e depura cálculos vive aqui.",
    prova: "Rastrear Precedentes/Dependentes, Avaliar Fórmula e Gerenciador de Nomes são os diferenciais.",
    grupos: [
      {
        nome: "Biblioteca de Funções",
        comandos: [
          { c: "Inserir Função (Shift+F3)", nota: "assistente com busca e argumentos explicados" },
          { c: "AutoSoma (Alt+=)" },
          { c: "Usadas Recentemente, Financeira, Lógica, Texto" },
          { c: "Data e Hora, Pesquisa e Referência, Matemática e Trigonometria" },
          { c: "Mais Funções", nota: "estatística, engenharia, informações" },
        ],
      },
      {
        nome: "Nomes Definidos",
        comandos: [
          { c: "Gerenciador de Nomes (Ctrl+F3)", nota: "batize intervalos: =SOMA(Vendas)" },
          { c: "Definir Nome, Usar em Fórmula, Criar a partir da Seleção" },
        ],
      },
      {
        nome: "Auditoria de Fórmulas",
        comandos: [
          { c: "Rastrear Precedentes / Dependentes", nota: "setas mostrando quem alimenta quem" },
          { c: "Mostrar Fórmulas (Ctrl+`)", nota: "exibe as fórmulas em vez dos resultados" },
          { c: "Verificação de Erros e Avaliar Fórmula", nota: "executa o cálculo passo a passo" },
          { c: "Janela de Inspeção" },
        ],
      },
      {
        nome: "Cálculo",
        comandos: [
          { c: "Opções de Cálculo", nota: "automático × manual" },
          { c: "Calcular Agora (F9) / Calcular Planilha (Shift+F9)" },
        ],
      },
    ],
  },
  {
    id: "dados",
    nome: "Dados",
    tecla: "Alt + A",
    resumo:
      "Trazer, organizar e analisar dados: classificação, filtros, remoção de duplicatas, validação e testes de hipóteses.",
    prova: "Classificar, Filtrar, Remover Duplicatas, Texto para Colunas e Validação de Dados: todos AQUI.",
    grupos: [
      {
        nome: "Obter e Transformar Dados",
        comandos: [{ c: "De Texto/CSV, Da Web, De Tabela/Intervalo", nota: "Power Query" }],
      },
      {
        nome: "Consultas e Conexões",
        comandos: [{ c: "Atualizar Tudo, Conexões, Propriedades" }],
      },
      {
        nome: "Classificar e Filtrar",
        comandos: [
          { c: "Classificar de A a Z / Z a A" },
          { c: "Classificar (vários níveis)" },
          { c: "Filtro (Ctrl+Shift+L), Limpar, Reaplicar, Avançado" },
        ],
      },
      {
        nome: "Ferramentas de Dados",
        comandos: [
          { c: "Texto para Colunas", nota: "divide uma coluna em várias por delimitador" },
          { c: "Preenchimento Relâmpago", nota: "detecta o padrão e completa sozinho" },
          { c: "Remover Duplicatas" },
          { c: "Validação de Dados", nota: "listas suspensas e restrições de digitação" },
          { c: "Consolidar e Relações" },
        ],
      },
      {
        nome: "Previsão",
        comandos: [
          { c: "Teste de Hipóteses", nota: "Atingir Meta, Gerenciador de Cenários, Tabela de Dados" },
          { c: "Planilha de Previsão" },
        ],
      },
      {
        nome: "Estrutura de Tópicos",
        comandos: [{ c: "Agrupar, Desagrupar, Subtotal", nota: "recolher/expandir blocos de linhas" }],
      },
    ],
  },
  {
    id: "revisao",
    nome: "Revisão",
    tecla: "Alt + R",
    resumo:
      "Conferir o conteúdo e proteger a pasta: ortografia, comentários, acessibilidade e senhas de proteção.",
    prova: "PROTEGER PLANILHA × PROTEGER PASTA DE TRABALHO — a distinção é cobrada com frequência.",
    grupos: [
      {
        nome: "Revisão de Texto",
        comandos: [
          { c: "Verificar Ortografia (F7)" },
          { c: "Dicionário de Sinônimos, Pesquisa Inteligente" },
        ],
      },
      {
        nome: "Acessibilidade e Idioma",
        comandos: [{ c: "Verificar Acessibilidade, Traduzir" }],
      },
      {
        nome: "Comentários",
        comandos: [
          { c: "Novo Comentário / Nova Anotação (Shift+F2)" },
          { c: "Excluir, Anterior, Próximo, Mostrar Comentários" },
        ],
      },
      {
        nome: "Proteger",
        comandos: [
          { c: "Proteger Planilha", nota: "trava as células bloqueadas da aba atual" },
          { c: "Proteger Pasta de Trabalho", nota: "impede inserir/excluir/renomear planilhas" },
          { c: "Permitir Edição de Intervalos, Compartilhar Pasta de Trabalho" },
        ],
      },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    tecla: "Alt + W",
    resumo:
      "Como você enxerga a planilha: modos de exibição, congelar painéis, zoom, janelas e macros.",
    prova: "CONGELAR PAINÉIS é a estrela: mantém cabeçalhos fixos ao rolar a tela.",
    grupos: [
      {
        nome: "Modos de Exibição",
        comandos: [
          { c: "Normal" },
          { c: "Visualização da Quebra de Página", nota: "mostra as linhas azuis de corte" },
          { c: "Layout da Página", nota: "vê cabeçalho/rodapé e margens" },
          { c: "Modos de Exibição Personalizados" },
        ],
      },
      {
        nome: "Mostrar",
        comandos: [
          { c: "Régua, Linhas de Grade, Barra de Fórmulas, Títulos" },
        ],
      },
      {
        nome: "Zoom",
        comandos: [{ c: "Zoom, 100%, Zoom na Seleção" }],
      },
      {
        nome: "Janela",
        comandos: [
          { c: "Nova Janela, Organizar Tudo" },
          { c: "Congelar Painéis", nota: "linha superior, primeira coluna ou a partir da célula ativa" },
          { c: "Dividir, Ocultar/Reexibir" },
          { c: "Exibir Lado a Lado, Rolagem Sincronizada, Alternar Janelas" },
        ],
      },
      {
        nome: "Macros",
        comandos: [{ c: "Macros (Alt+F8)", nota: "gravar, executar e editar automações" }],
      },
    ],
  },
];

export default function RibbonSection5() {
  const [active, setActive] = useState("inicial");
  const guia = GUIAS.find((g) => g.id === active)!;

  return (
    <SectionShell
      id="guias"
      num="05"
      kicker="O mapa completo · clique em cada guia"
      title={
        <>
          A <span className="italic text-emerald-300">faixa de opções</span>, guia por guia
        </>
      }
      lead={
        <>
          Mesma arquitetura do Word — <Hot>guia → grupo → comando</Hot> —, com guias próprias do
          Excel: <Hot tone="e">Fórmulas</Hot> e <Hot tone="e">Dados</Hot>. Clique em cada aba
          abaixo e veja grupos, comandos e a nota "onde a banca bate".
        </>
      }
    >
      <Reveal>
        <div className="sticky top-[72px] z-30 bg-[#0a0910]/95 backdrop-blur-xl py-3 -mx-1 px-1 mb-6">
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {GUIAS.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[13px] font-bold cursor-pointer transition-all border ${
                  active === g.id
                    ? "bg-emerald-300 text-[#0a0910] border-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.3)]"
                    : "border-white/10 text-zinc-400 hover:border-emerald-300/50 hover:text-zinc-200 bg-white/[0.02]"
                }`}
              >
                {g.nome}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={guia.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.05] p-6 sm:p-7 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                Guia {guia.nome}
              </p>
              <kbd className="font-mono text-[10.5px] font-bold text-emerald-200 border border-emerald-300/30 bg-emerald-300/[0.1] rounded px-2 py-1">
                {guia.tecla}
              </kbd>
            </div>
            <p className="text-[15px] leading-relaxed text-zinc-300 mb-4">{guia.resumo}</p>
            <div className="flex items-start gap-2.5 rounded-xl border border-yellow-300/25 bg-yellow-300/[0.07] p-4">
              <Flame size={15} className="text-yellow-300 mt-0.5 shrink-0" />
              <p className="text-[13px] leading-relaxed text-yellow-100/90">
                <strong className="text-yellow-300">Onde a banca bate:</strong> {guia.prova}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {guia.grupos.map((gr) => (
              <div key={gr.nome} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500 mb-3.5 border-b border-white/[0.07] pb-2">
                  Grupo · {gr.nome}
                </p>
                <ul className="space-y-2.5">
                  {gr.comandos.map((c) => (
                    <li key={c.c} className="text-[13.5px] leading-relaxed">
                      <span className="text-zinc-200 font-medium">{c.c}</span>
                      {c.nota && <span className="text-zinc-500"> — {c.nota}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <Reveal>
        <Callout variant="conceito" title="guias contextuais do Excel">
          <div className="flex items-start gap-3">
            <Info size={15} className="text-violet-300 mt-0.5 shrink-0" />
            <p>
              Selecionou um <strong className="text-zinc-100">gráfico</strong>? Aparecem{" "}
              <strong className="text-zinc-100">Design do Gráfico</strong> e{" "}
              <strong className="text-zinc-100">Formatar</strong>. Clicou numa{" "}
              <strong className="text-zinc-100">tabela dinâmica</strong>? Surgem{" "}
              <strong className="text-zinc-100">Analisar</strong> e{" "}
              <strong className="text-zinc-100">Design</strong>. São guias que só existem quando o
              objeto está selecionado — e onde ficam os comandos específicos deles.
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="as 5 trocas de endereço favoritas das bancas">
          <p>
            <strong className="text-zinc-100">Tabela Dinâmica e Gráficos: Inserir</strong> (não
            Dados). <strong className="text-zinc-100">Filtro e Validação: Dados</strong> (não Página
            Inicial). <strong className="text-zinc-100">Formatação Condicional: Página Inicial</strong>{" "}
            (não Dados). <strong className="text-zinc-100">Congelar Painéis: Exibir</strong> (não
            Layout). <strong className="text-zinc-100">Imprimir Títulos e Área de Impressão: Layout
            da Página</strong> (não Arquivo).
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
