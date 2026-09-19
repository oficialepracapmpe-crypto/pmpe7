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
  resumo: string;
  prova: string;
  grupos: Grupo[];
}

const GUIAS: Guia[] = [
  {
    id: "arquivo",
    nome: "Arquivo",
    resumo:
      "Não é bem uma 'guia de comandos': abre o modo BACKSTAGE — a recepção do documento. Tudo que envolve o arquivo como um todo mora aqui (nunca a formatação do texto).",
    prova: "Exportar PDF e Salvar como (F12) são daqui. Comando favorito das bancas: 'Arquivo → Exportar → Criar PDF/XPS'.",
    grupos: [
      {
        nome: "Painel principal",
        comandos: [
          { c: "Informações", nota: "Proteger, Inspecionar, Versões, Propriedades" },
          { c: "Novo", nota: "documento em branco ou a partir de modelos" },
          { c: "Abrir (Ctrl+A)", nota: "Recentes, OneDrive, Este Computador" },
          { c: "Salvar (Ctrl+B) / Salvar como (F12)", nota: "formatos: .docx, .pdf, .odt, .rtf..." },
          { c: "Histórico", nota: "versões anteriores salvas na nuvem" },
          { c: "Imprimir (Ctrl+P)", nota: "visualização + configurações de impressão" },
          { c: "Compartilhar" },
          { c: "Exportar", nota: "Criar PDF/XPS e alterar tipo de arquivo" },
          { c: "Fechar (Ctrl+W)" },
          { c: "Conta / Opções", nota: "personalizar faixa, revisão de texto, salvamento" },
        ],
      },
    ],
  },
  {
    id: "inicial",
    nome: "Página Inicial",
    resumo:
      "A guia do dia a dia: tudo que é formatação de TEXTO e parágrafo. É onde você passa 80% do tempo — e de onde saem 80% das questões.",
    prova: "Pincel de formatação, N/I/S, maiúsculas (Shift+F3), mostrar ¶ e espaçamento entre linhas são os campeões.",
    grupos: [
      {
        nome: "Área de Transferência",
        comandos: [
          { c: "Colar / opções de colagem", nota: "manter origem, mesclar, só texto (Ctrl+Shift+V)" },
          { c: "Recortar (Ctrl+X) / Copiar (Ctrl+C)" },
          { c: "Pincel de Formatação", nota: "copia a FORMATAÇÃO de um trecho para outro; 2 cliques = repete" },
        ],
      },
      {
        nome: "Fonte",
        comandos: [
          { c: "Fonte e Tamanho", nota: "aumentar/diminuir fonte (Ctrl+Shift+> e <)" },
          { c: "Negrito (Ctrl+N), Itálico (Ctrl+I), Sublinhado (Ctrl+S)" },
          { c: "Tachado, Subscrito (Ctrl+=), Sobrescrito (Ctrl+Shift+=)" },
          { c: "Efeitos e tipografia" },
          { c: "Cor da fonte / Realce de texto (marca-texto)" },
          { c: "Maiúsculas e Minúsculas (Aa / Shift+F3)" },
          { c: "Limpar Formatação" },
        ],
      },
      {
        nome: "Parágrafo",
        comandos: [
          { c: "Marcadores, Numeração, Lista de vários níveis" },
          { c: "Alinhar esquerda (Ctrl+Q), Centralizar (Ctrl+E), Direita (Ctrl+G), Justificar (Ctrl+J)" },
          { c: "Aumentar/Diminuir recuo (Ctrl+M / Ctrl+Shift+M)" },
          { c: "Espaçamento entre linhas e parágrafos", nota: "Ctrl+1 simples, Ctrl+5 → 1,5, Ctrl+2 duplo" },
          { c: "Sombreamento e Bordas" },
          { c: "Classificar (A–Z) e Mostrar/ocultar ¶" },
        ],
      },
      {
        nome: "Estilos",
        comandos: [
          { c: "Normal, Sem Espaçamento, Título 1... (Alt+Ctrl+1/2/3)", nota: "base do sumário automático" },
          { c: "Alterar Estilos (conjuntos de formatação)" },
        ],
      },
      {
        nome: "Edição",
        comandos: [
          { c: "Localizar (Ctrl+F / clássico Ctrl+L)" },
          { c: "Substituir (Ctrl+H / clássico Ctrl+U)" },
          { c: "Selecionar", nota: "tudo, objetos, texto com formatação semelhante" },
        ],
      },
    ],
  },
  {
    id: "inserir",
    nome: "Inserir",
    resumo:
      "Colocar qualquer coisa DENTRO do documento: páginas, objetos, elementos de estrutura e símbolos.",
    prova: "Número de página, cabeçalho/rodapé e letra capitular ficam AQUI — a troca clássica é com 'Layout'.",
    grupos: [
      {
        nome: "Páginas",
        comandos: [
          { c: "Capa" },
          { c: "Página em branco" },
          { c: "Quebra de página (Ctrl+Enter)", nota: "a quebra manual mais cobrada" },
        ],
      },
      {
        nome: "Tabelas",
        comandos: [
          { c: "Tabela (grade, Inserir, Desenhar)", nota: "converter TEXTO em tabela também é daqui" },
          { c: "Planilha do Excel e Tabelas rápidas" },
        ],
      },
      {
        nome: "Ilustrações",
        comandos: [
          { c: "Imagens (Este dispositivo / online)" },
          { c: "Formas, Ícones, Modelos 3D" },
          { c: "SmartArt", nota: "organogramas, fluxos, hierarquias" },
          { c: "Gráfico e Captura de tela" },
        ],
      },
      {
        nome: "Links",
        comandos: [
          { c: "Hiperlink (Ctrl+K)" },
          { c: "Indicador e Referência cruzada" },
        ],
      },
      {
        nome: "Cabeçalho e Rodapé",
        comandos: [
          { c: "Cabeçalho e Rodapé" },
          { c: "Número de página", nota: "início da página, final, margens — cobradíssimo" },
        ],
      },
      {
        nome: "Texto",
        comandos: [
          { c: "Caixa de Texto" },
          { c: "Partes Rápidas (blocos de construção)" },
          { c: "WordArt" },
          { c: "Letra Capitular", nota: "primeira letra gigante do parágrafo — clássico de prova" },
          { c: "Linha de assinatura, Data e hora, Objeto" },
        ],
      },
      {
        nome: "Símbolos",
        comandos: [
          { c: "Equação (Alt+=)" },
          { c: "Símbolo", nota: "© ® ™ e qualquer caractere da tabela" },
        ],
      },
    ],
  },
  {
    id: "desenho",
    nome: "Desenho",
    resumo:
      "Guia dos dispositivos de toque/caneta: escrever à mão livre sobre o documento. Simples em prova — basta saber que existe e onde está.",
    prova: "Se a questão falar em caneta, marca-texto à mão livre ou 'tinta digital', a casa é esta.",
    grupos: [
      {
        nome: "Ferramentas de desenho",
        comandos: [
          { c: "Canetas, lápis e marca-texto" },
          { c: "Borracha e seleção por laço" },
          { c: "Desenhar com toque" },
          { c: "Converter tinta em texto/formas/matemática" },
        ],
      },
    ],
  },
  {
    id: "design",
    nome: "Design",
    resumo:
      "A identidade visual do documento inteiro de uma vez: temas e elementos de plano de fundo da página.",
    prova: "MARCA D'ÁGUA é a moradora mais famosa — todo ano alguém marca Inserir e perde 1 ponto.",
    grupos: [
      {
        nome: "Formatação do Documento",
        comandos: [
          { c: "Temas", nota: "pacote inteiro de cores + fontes + efeitos" },
          { c: "Cores, Fontes, Efeitos do tema" },
          { c: "Espaçamento entre Parágrafos (predefinições)" },
          { c: "Definir como Padrão" },
        ],
      },
      {
        nome: "Plano de Fundo da Página",
        comandos: [
          { c: "Marca d'Água", nota: "texto/imagem translúcido no fundo (CONFIDENCIAL, MINUTA...)" },
          { c: "Cor da Página" },
          { c: "Bordas da Página", nota: "moldura ao redor da página inteira" },
        ],
      },
    ],
  },
  {
    id: "layout",
    nome: "Layout",
    resumo:
      "A engenharia da página: margens, papel, orientação, colunas e quebras — mais o posicionamento fino de objetos e o espaçamento de parágrafos.",
    prova: "Margens + Orientação + Tamanho + Colunas + Quebras: o pentacampeonato das questões. 'De layout' = geometria da página.",
    grupos: [
      {
        nome: "Configurar Página",
        comandos: [
          { c: "Margens", nota: "Normal, Estreita, Larga, Personalizada..." },
          { c: "Orientação", nota: "Retrato × Paisagem" },
          { c: "Tamanho", nota: "A4, A5, Carta, Ofício..." },
          { c: "Colunas", nota: "texto em 2+ colunas, com linha divisória" },
          { c: "Quebras", nota: "de página E de seção (próxima página, contínua, par/ímpar)" },
          { c: "Números de linha / Hifenização" },
        ],
      },
      {
        nome: "Parágrafo",
        comandos: [
          { c: "Recuar (esquerda e direita, em cm)" },
          { c: "Espaçamento Antes/Depois (em pontos)" },
        ],
      },
      {
        nome: "Organizar",
        comandos: [
          { c: "Posição do objeto na página" },
          { c: "Quebra de texto automática", nota: "em linha, quadrado, estreita, através..." },
          { c: "Trazer para frente / Enviar para trás" },
          { c: "Alinhar objetos e Girar" },
        ],
      },
    ],
  },
  {
    id: "referencias",
    nome: "Referências",
    resumo:
      "A guia dos trabalhos longos e acadêmicos: estrutura, notas e citações — terra do ABNT.",
    prova: "Sumário automático + notas de rodapé + citação/bibliografia são o trio cobrado sempre junto.",
    grupos: [
      {
        nome: "Sumário",
        comandos: [
          { c: "Sumário", nota: "automático a partir dos estilos TÍTULO; botão Atualizar sumário (ou F9)" },
        ],
      },
      {
        nome: "Notas de Rodapé",
        comandos: [
          { c: "Inserir Nota de Rodapé (Alt+Ctrl+F)", nota: "nota no fim da PÁGINA" },
          { c: "Inserir Nota de Fim (Alt+Ctrl+D)", nota: "nota no fim do DOCUMENTO/seção" },
          { c: "Mostrar Notas / Próxima nota" },
        ],
      },
      {
        nome: "Citações e Bibliografia",
        comandos: [
          { c: "Inserir Citação" },
          { c: "Gerenciar Fontes" },
          { c: "Estilo", nota: "APA, ABNT, Chicago..." },
          { c: "Bibliografia", nota: "lista de referências gerada automaticamente" },
        ],
      },
      {
        nome: "Legendas",
        comandos: [
          { c: "Inserir Legenda (figuras/tabelas)" },
          { c: "Índice de figuras / Atualizar tabela" },
        ],
      },
      {
        nome: "Índice",
        comandos: [
          { c: "Marcar Entrada de Índice" },
          { c: "Inserir Índice (remissivo)" },
        ],
      },
    ],
  },
  {
    id: "correspondencias",
    nome: "Correspondências",
    resumo:
      "A guia da MALA DIRETA: produzir muitos documentos personalizados a partir de um modelo + uma lista de dados.",
    prova: "Toda questão de 'etiquetas/cartas para 500 sócios' aponta para cá. Fonte de dados clássica: planilha do Excel.",
    grupos: [
      {
        nome: "Criar",
        comandos: [
          { c: "Envelopes e Etiquetas (unitários)" },
        ],
      },
      {
        nome: "Iniciar Mala Direta",
        comandos: [
          { c: "Iniciar Mala Direta", nota: "Cartas, Emails, Envelopes, Etiquetas, Diretório" },
          { c: "Selecionar Destinatários", nota: "nova lista ou lista existente (Excel, Access, Outlook)" },
          { c: "Editar Lista de Destinatários" },
        ],
      },
      {
        nome: "Gravar e Inserir Campos",
        comandos: [
          { c: "Realçar Campos de Mesclagem" },
          { c: "Bloco de Endereço / Linha de Saudação" },
          { c: "Inserir Campo de Mesclagem (Alt+Shift+F)" },
          { c: "Regras e Correspondência de campos" },
        ],
      },
      {
        nome: "Visualizar Resultados",
        comandos: [
          { c: "Visualizar Resultados (Alt+Shift+K)", nota: "alterna campos × dados reais" },
          { c: "Localizar destinatário / Verificar erros" },
        ],
      },
      {
        nome: "Concluir",
        comandos: [
          { c: "Concluir e Mesclar", nota: "Editar documentos, Imprimir ou Enviar por e-mail" },
        ],
      },
    ],
  },
  {
    id: "revisao",
    nome: "Revisão",
    resumo:
      "A mesa do revisor: corrigir, comentar, acompanhar mudanças e proteger o documento de edições.",
    prova: "F7/Shift+F7 + Controlar Alterações + Restringir edição. As bancas amam perguntar 'onde se aceita a alteração do colega'.",
    grupos: [
      {
        nome: "Revisão de Texto",
        comandos: [
          { c: "Ortografia e Gramática (F7)" },
          { c: "Dicionário de Sinônimos (Shift+F7)" },
          { c: "Estatísticas / Contar Palavras (Ctrl+Shift+G)" },
        ],
      },
      {
        nome: "Acessibilidade e Idioma",
        comandos: [
          { c: "Verificador de acessibilidade" },
          { c: "Idioma", nota: "definir idioma de revisão por trecho" },
        ],
      },
      {
        nome: "Comentários",
        comandos: [
          { c: "Novo Comentário (Ctrl+Alt+M)" },
          { c: "Excluir, Anterior/Próximo, Mostrar comentários" },
        ],
      },
      {
        nome: "Controle",
        comandos: [
          { c: "Controlar Alterações (Ctrl+Shift+E)", nota: "marca edições p/ aceite posterior" },
          { c: "Exibição: Marcação simples / Todas / Sem marcação / Original" },
          { c: "Mostrar marcações" },
        ],
      },
      {
        nome: "Alterações",
        comandos: [
          { c: "Aceitar / Rejeitar", nota: "uma a uma ou todas de uma vez; anterior/próxima" },
        ],
      },
      {
        nome: "Comparar e Proteger",
        comandos: [
          { c: "Comparar / Combinar documentos", nota: "duas versões lado a lado num diff" },
          { c: "Restringir edição", nota: "limita formatação/edição (ex.: só comentários) — pode virar ler documento" },
          { c: "Bloquear autores" },
        ],
      },
    ],
  },
  {
    id: "exibir",
    nome: "Exibir",
    resumo:
      "Como você vê o documento — modos de trabalho, réguas e zoom, divisão de janelas e macros.",
    prova: "Os 3 modos (Leitura, Layout de Impressão, Layout da Web) na barra de status + onde fica a Régua: aqui.",
    grupos: [
      {
        nome: "Modos de Exibição",
        comandos: [
          { c: "Leitura", nota: "foco em leitura (Alt+W, F)" },
          { c: "Layout de Impressão", nota: "o padrão: vê a página como sairá impressa" },
          { c: "Layout da Web", nota: "sem quebra de página, como página web" },
        ],
      },
      {
        nome: "Mostrar",
        comandos: [
          { c: "Régua" },
          { c: "Linhas de Grade" },
          { c: "Painel de Navegação (Ctrl+F)" },
        ],
      },
      {
        nome: "Zoom",
        comandos: [
          { c: "Zoom, 100%, Uma página, Várias páginas, Largura da página" },
        ],
      },
      {
        nome: "Janelas",
        comandos: [
          { c: "Nova Janela" },
          { c: "Organizar Tudo" },
          { c: "Dividir (Ctrl+Alt+S)" },
          { c: "Exibir Lado a Lado + Rolagem Sincronizada" },
          { c: "Redefinir Posição da Janela / Alternar Janelas (Ctrl+F6)" },
        ],
      },
      {
        nome: "Macros",
        comandos: [
          { c: "Macros (Alt+F8)", nota: "gravar e executar automações" },
        ],
      },
    ],
  },
];

export default function RibbonSection() {
  const [active, setActive] = useState("inicial");
  const guia = GUIAS.find((g) => g.id === active)!;

  return (
    <SectionShell
      id="guias"
      num="04"
      kicker="O mapa completo · clique em cada guia"
      title={
        <>
          A <span className="italic text-blue-300">faixa de opções</span>, guia por guia
        </>
      }
      lead={
        <>
          Cada guia abaixo abre seu <Hot>cérebro completo</Hot>: propósito, grupos, comandos
          principais e a nota "onde a banca bate". Estude clicando como se estivesse dentro do
          próprio Word.
        </>
      }
    >
      {/* seletor de guias */}
      <Reveal>
        <div className="sticky top-[72px] z-30 bg-[#0a0910]/95 backdrop-blur-xl py-3 -mx-1 px-1 mb-6">
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {GUIAS.map((g) => (
              <button
                key={g.id}
                onClick={() => setActive(g.id)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-[13px] font-bold cursor-pointer transition-all border ${
                  active === g.id
                    ? "bg-blue-400 text-[#0a0910] border-blue-400 shadow-[0_0_24px_rgba(96,165,250,0.35)]"
                    : "border-white/10 text-zinc-400 hover:border-blue-300/50 hover:text-zinc-200 bg-white/[0.02]"
                }`}
              >
                {g.nome}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* painel da guia ativa */}
      <AnimatePresence mode="wait">
        <motion.div
          key={guia.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-blue-300/25 bg-blue-300/[0.05] p-6 sm:p-7 mb-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-300 mb-2">
              Guia {guia.nome}
            </p>
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
              <div
                key={gr.nome}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
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
        <Callout variant="conceito" title="bônus de prova: guias que aparecem e somem">
          <div className="flex items-start gap-3">
            <Info size={15} className="text-violet-300 mt-0.5 shrink-0" />
            <p>
              Selecionou uma <strong className="text-zinc-100">tabela</strong>? Surge{" "}
              <strong className="text-zinc-100">Ferramentas de Tabela</strong> (guias Design e
              Layout). Selecionou uma <strong className="text-zinc-100">imagem</strong>? Surge{" "}
              <strong className="text-zinc-100">Formato de Imagem</strong>. São as{" "}
              <strong className="text-zinc-100">guias contextuais</strong> — questão certa quando
              pedem "onde configuro bordas de uma tabela": no Design das Ferramentas de Tabela, não
              no Design do documento!
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova" title="pneumonia de localização: as 5 trocas favoritas">
          <p>
            <strong className="text-zinc-100">Marca d'água: Design</strong> (não Inserir).{" "}
            <strong className="text-zinc-100">Número de página: Inserir</strong> (não Layout).{" "}
            <strong className="text-zinc-100">Margens: Layout</strong> (não Design).{" "}
            <strong className="text-zinc-100">Sumário: Referências</strong> (não Exibir).{" "}
            <strong className="text-zinc-100">Letra capitular: Inserir</strong> (não Página Inicial).
            Grave esse quinteto e derrube metade das questões de localização do Word.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
