import { ArrowRight, BookMarked, CheckCircle2, XCircle } from "lucide-react";
import { Reveal, SectionShell } from "../../components/ui";

const CHECKLIST = [
  "C.I.D.A.: Confidencialidade (sigilo), Integridade (sem adulteração), Disponibilidade (no ar), Autenticidade (autoria real).",
  "DDoS e ransomware violam, sobretudo, a Disponibilidade.",
  "Vírus precisa de hospedeiro; worm se autopropaga pela rede; trojan não se replica e engana o usuário.",
  "Ransomware criptografa e pede RESGATE; keylogger grava teclas; spyware espiona; hoax é boato, não malware.",
  "Firewall filtra TRÁFEGO; antivírus caça PRAGAS — e nenhum dos dois garante 100%.",
  "Sigilo: cifrar com a chave PÚBLICA do destinatário. Assinatura: cifrar o hash com a própria PRIVADA.",
  "Assinatura digital garante autenticidade + integridade + não-repúdio — mas NÃO sigilo.",
  "Cadeado HTTPS criptografa a conexão, não prova que o site é legítimo; confira o domínio.",
  "SSD e pen drive = memória flash, sem partes móveis; HD = magnético e mecânico; nuvem exige internet.",
  "Backup: incremental copia desde o ÚLTIMO backup; diferencial, desde o último COMPLETO. Regra 3-2-1.",
];

const ERROS = [
  "Trocar confidencialidade por disponibilidade (a troca nº 1 das bancas).",
  "Afirmar que trojan se autorreplica pela rede (isso é worm).",
  "Dizer que antivírus atualizado elimina 100% das ameaças.",
  "Afirmar que a assinatura digital garante o sigilo do documento.",
  "Dizer que hash pode ser 'descriptografado' (é mão única).",
  "Afirmar que sincronização com a nuvem dispensa backup.",
  "Afirmar que o incremental é mais lento de fazer e mais rápido de restaurar (é o contrário!).",
];

const NEXT_PARTS = [
  { parte: "Parte 4", tema: "Pacotes de escritório: Word, Writer, Excel e Calc" },
  { parte: "Parte 5", tema: "IA, computação em nuvem e governo digital nas provas atuais" },
  { parte: "Revisão geral", tema: "Simulado completo comentado reunindo todas as partes" },
];

export default function Summary2({ onGoPart3 }: { onGoPart3: () => void }) {
  return (
    <SectionShell
      id="resumo"
      num="09"
      kicker="Revisão final · salve este mapa"
      title={
        <>
          Resumo <span className="italic text-rose-300">de véspera</span>
        </>
      }
      lead="Os dois módulos destilados em duas listas. Se estiver verde, pode marcar sem medo; se aparecer em prova algo da lista vermelha, marque ERRADO e sorria."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300 mb-5">
              <CheckCircle2 size={14} /> Verdades de gabarito
            </p>
            <ul className="space-y-3.5">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-zinc-300">
                  <CheckCircle2 size={16} className="text-emerald-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.04] p-6 sm:p-7 h-full">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-rose-300 mb-5">
              <XCircle size={14} /> Armadilhas sempre ERRADAS
            </p>
            <ul className="space-y-3.5">
              {ERROS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-zinc-300">
                  <XCircle size={16} className="text-rose-300 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">A série continua</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <button
              onClick={onGoPart3}
              className="group text-left rounded-xl border border-yellow-300/40 bg-yellow-300/[0.07] p-5 hover:bg-yellow-300 hover:text-[#0a0910] transition-colors cursor-pointer"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 group-hover:text-[#0a0910] mb-2">
                Parte 3 · disponível agora
              </p>
              <p className="text-[13.5px] leading-relaxed text-zinc-300 group-hover:text-[#0a0910]">
                Sistemas operacionais e arquivos + TODOS os atalhos do Windows
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-yellow-200 group-hover:text-[#0a0910]">
                Abrir agora <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </p>
            </button>
            {NEXT_PARTS.map((p) => (
              <div
                key={p.parte}
                className="rounded-xl border border-white/[0.08] bg-[#0d0c14] p-5 hover:border-yellow-300/40 transition-colors"
              >
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-yellow-300 mb-2">
                  {p.parte} · em breve
                </p>
                <p className="text-[13.5px] leading-relaxed text-zinc-400">{p.tema}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
