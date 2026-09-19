import { BookMarked, CheckCircle2, GraduationCap, ShieldCheck, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "Internet é a infraestrutura; Web é um serviço. DNS resolve nomes; SMTP envia; POP3/IMAP recebem.",
  "HTTPS cifra a comunicação, mas não torna a pessoa anônima. Extranet é acesso externo autorizado à rede privada.",
  "Phishing é engenharia social; ransomware sequestra dados; backup deve ser testado e, se possível, seguir a regra 3-2-1.",
  "Win+L bloqueia o Windows; Shift+Delete ignora a Lixeira; driver faz a ponte entre sistema e hardware.",
  "Word, Excel e PowerPoint usam DOCX, XLSX e PPTX. Writer, Calc e Impress usam ODT, ODS e ODP.",
  "Word usa Faixa de Opções; LibreOffice 7 usa barra de menus, barras de ferramentas e Barra lateral.",
  "Word Ctrl+B salva em português; Writer Ctrl+B aplica negrito. Excel e Calc compartilham a lógica de fórmulas, mas não todos os atalhos.",
  "PowerPoint Transições e Animações correspondem, no Impress, a Trocar Slide e Animação Personalizada.",
  "Transição acontece entre slides; animação atua nos objetos dentro do slide.",
  "Formato editável é melhor para continuar trabalhando; PDF é melhor para distribuir uma versão visual estável.",
];

const TRAPS = [
  "Dizer que .odt, .ods e .odp são formatos do Microsoft Office: são os formatos nativos do LibreOffice.",
  "Afirmar que abrir DOCX/XLSX/PPTX no LibreOffice preserva sempre macros, fontes, fórmulas e layout avançado.",
  "Confundir Ctrl+B do Word em português (salvar) com Ctrl+B do Writer/Calc (negrito).",
  "Usar Ctrl+D para duplicar no Impress como se fosse PowerPoint; no material, a âncora é Shift+F3.",
  "Trocar transição por animação ou afirmar que ambas ocorrem entre slides.",
  "Tratar navegação anônima, HTTPS ou VPN como sinônimos de anonimato absoluto.",
];

export default function Summary10() {
  return (
    <SectionShell
      id="resumo"
      num="07"
      kicker="Fechamento · a série inteira em um mapa"
      title={<>Resumo final <span className="italic text-yellow-300">de véspera</span></>}
      lead="A Parte 10 consolida os cinco eixos do material. Use este checklist para a última revisão e volte às tabelas quando a dúvida for de equivalência entre os pacotes."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.04] p-6 sm:p-7">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5"><CheckCircle2 size={14} /> Checklist essencial</p>
            <ul className="space-y-3.5">{CHECKLIST.map((item) => <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-300" />{item}</li>)}</ul>
          </div>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-rose-300/25 bg-rose-300/[0.04] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5"><XCircle size={14} /> Pegadinhas para não errar</p>
              <ul className="space-y-3">{TRAPS.map((item) => <li key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300"><XCircle size={15} className="mt-0.5 shrink-0 text-rose-300" />{item}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-yellow-300/25 bg-yellow-300/[0.05] p-6 sm:p-7">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-yellow-300 mb-4"><ShieldCheck size={15} /> Estratégia de prova</p>
              <p className="text-[14px] leading-relaxed text-zinc-300">Quando a questão trouxer um atalho, identifique primeiro o programa e o idioma da interface. Quando trouxer um formato, pergunte se ele é nativo, de intercâmbio ou de distribuição. Quando trouxer segurança, separe confidencialidade, integridade, disponibilidade, autenticidade e anonimato.</p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-yellow-300/[0.1] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5"><GraduationCap size={21} className="text-yellow-300" /><h3 className="font-display text-2xl text-[#f4f1ea]">Material consolidado</h3></div>
          <p className="text-[14.5px] leading-relaxed text-zinc-300 max-w-3xl">Internet, segurança, Windows, Office e LibreOffice agora estão conectados em um único mapa de revisão. Faça o quiz sem consultar, leia o gabarito e use as tabelas comparativas para eliminar as pegadinhas de nomenclatura, formato e atalho.</p>
          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            {["Internet + segurança", "Windows + arquivos", "Office + LibreOffice"].map((item, index) => <div key={item} className={`rounded-xl border p-4 ${index === 0 ? "border-cyan-300/30 bg-cyan-300/[0.05]" : index === 1 ? "border-violet-300/30 bg-violet-300/[0.05]" : "border-yellow-300/30 bg-yellow-300/[0.05]"}`}><p className="text-[13px] font-semibold text-zinc-200">{item}</p><p className="text-[11px] text-zinc-500 mt-1">revisão integrada</p></div>)}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-4"><BookMarked size={18} className="text-zinc-400" /><h3 className="font-display text-xl text-[#f4f1ea]">Como revisar depois</h3></div>
          <p className="text-[13.5px] leading-relaxed text-zinc-400">Refaça o quiz em outro momento, alterne entre as Partes no seletor superior e procure no índice o tema em que errou. Em uma prova real, leia com atenção palavras absolutas como “sempre”, “nunca”, “exclusivamente” e “sem possibilidade de perda”: elas costumam sinalizar a pegadinha.</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
