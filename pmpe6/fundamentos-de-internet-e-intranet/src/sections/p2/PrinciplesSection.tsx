import { motion } from "framer-motion";
import { Eye, FileCheck, Fingerprint, Lock, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

interface Pillar {
  id: string;
  icon: LucideIcon;
  name: string;
  color: string;
  def: string;
  garante: string;
  violacao: string;
  exemplo: string;
}

const PILLARS: Pillar[] = [
  {
    id: "conf",
    icon: Lock,
    name: "Confidencialidade",
    color: "text-rose-300 border-rose-300/40 bg-rose-300/[0.08]",
    def: "sigilo: só pessoas autorizadas acessam a informação",
    garante: "Criptografia, senhas, controle de acesso, VPN.",
    violacao: "Um vazamento de dados de clientes na dark web.",
    exemplo: "Você criptografa o HD do notebook: mesmo roubado, ninguém lê seus arquivos.",
  },
  {
    id: "int",
    icon: FileCheck,
    name: "Integridade",
    color: "text-yellow-300 border-yellow-300/40 bg-yellow-300/[0.08]",
    def: "a informação não é alterada de forma indevida ou não autorizada",
    garante: "Funções hash, assinatura digital, permissões de escrita.",
    violacao: "Alguém altera o valor de um boleto no meio do caminho.",
    exemplo: "O hash do arquivo baixado confere com o do site oficial: nada foi adulterado.",
  },
  {
    id: "disp",
    icon: Zap,
    name: "Disponibilidade",
    color: "text-cyan-300 border-cyan-300/40 bg-cyan-300/[0.08]",
    def: "a informação está acessível sempre que for necessária",
    garante: "Backup, redundância de servidores, proteção contra DDoS, no-breaks.",
    violacao: "Ataque de negação de serviço (DDoS) tira o site do ar; ransomware trava tudo.",
    exemplo: "O sistema do órgão tem servidor reserva: se um cai, o outro assume sem você perceber.",
  },
  {
    id: "aut",
    icon: Fingerprint,
    name: "Autenticidade",
    color: "text-violet-300 border-violet-300/40 bg-violet-300/[0.08]",
    def: "garantia de que a origem/autoria é realmente quem diz ser",
    garante: "Login e senha, certificado digital, biometria, 2FA, assinatura digital.",
    violacao: "Um estelionatário se passa pelo gerente do seu banco.",
    exemplo: "O selo da ICP-Brasil comprova que o documento foi assinado pelo servidor X.",
  },
];

function PillarCard({ p }: { p: Pillar }) {
  const [open, setOpen] = useState(false);
  const Icon = p.icon;
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className={`w-full text-left rounded-2xl border p-5 sm:p-6 transition-all cursor-pointer ${
        open ? p.color : "border-white/[0.07] bg-white/[0.025] hover:border-white/20"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon size={20} />
        <h3 className="font-display text-xl font-semibold">{p.name}</h3>
      </div>
      <p className="text-[13.5px] leading-relaxed text-zinc-300/90">
        <em>{p.def}</em>
      </p>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 mt-4 border-t border-white/10 space-y-3 text-[13px] leading-relaxed">
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Como se garante:</strong> {p.garante}
          </p>
          <p className="text-zinc-300">
            <strong className="text-zinc-100">Violação típica:</strong> {p.violacao}
          </p>
          <p className="text-zinc-400 italic">
            <strong className="text-zinc-200 not-italic">Exemplo prático: </strong>
            {p.exemplo}
          </p>
        </div>
      </motion.div>
      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] opacity-50">
        {open ? "— recolher" : "+ ver como proteger"}
      </p>
    </button>
  );
}

export default function PrinciplesSection() {
  return (
    <SectionShell
      id="principios"
      num="01"
      kicker="Módulo A · Segurança da Informação"
      title={
        <>
          Os <span className="italic text-rose-300">princípios</span> da segurança da informação
        </>
      }
      lead={
        <>
          Segurança da Informação é o conjunto de medidas para{" "}
          <Hot tone="r">proteger a informação</Hot> — em qualquer formato — contra{" "}
          <Hot tone="r">acesso, alteração ou destruição não autorizados</Hot>. Tudo se apoia em
          pilares que as bancas adoram trocar entre si: memorize o{" "}
          <Hot>C.I.D.A.</Hot> (mais dois coadjuvantes).
        </>
      }
    >
      <Reveal>
        <P>
          Clique em cada pilar para ver como ele é garantido na prática, qual é a violação
          típica e um exemplo do dia a dia. Depois, preste atenção no macete: é ele que separa os
          aprovados dos reprovados em questões de troca de conceito.
        </P>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {PILLARS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <PillarCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="conceito" title="os dois coadjuvantes">
            <p>
              <strong className="text-zinc-100">Não-repúdio (irretratabilidade):</strong> o autor
              não pode <em>negar</em> que realizou a ação — ex.: quem assinou digitalmente não pode
              dizer "não fui eu". <strong className="text-zinc-100">Legalidade:</strong> conformidade
              com leis e normas (LGPD!).
            </p>
          </Callout>
          <Callout variant="macete" title="C.I.D.A. na ponta da língua">
            <p>
              <strong className="text-rose-300">C</strong>onfidencialidade ={" "}
              <strong className="text-zinc-100">C</strong>adeado (sigilo) ·{" "}
              <strong className="text-yellow-300">I</strong>ntegridade ={" "}
              <strong className="text-zinc-100">I</strong>ntacta (sem adulteração) ·{" "}
              <strong className="text-cyan-300">D</strong>isponibilidade = sempre{" "}
              <strong className="text-zinc-100">D</strong>isponível no ar ·{" "}
              <strong className="text-violet-300">A</strong>utenticidade ={" "}
              <strong className="text-zinc-100">A</strong>utoria comprovada.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <Callout variant="pegadinha">
          <div className="flex items-start gap-3">
            <Eye size={16} className="text-rose-300 mt-1 shrink-0" />
            <p>
              <em>"A confidencialidade garante que a informação esteja sempre disponível para os
              usuários."</em> → <strong className="text-rose-300">ERRADO!</strong> Quem garante
              disponibilidade é... a <strong className="text-zinc-100">Disponibilidade</strong>.
              Confidencialidade é <strong className="text-zinc-100">sigilo</strong>. Bancas trocam
              esses dois conceitos o tempo inteiro — e também adoram dizer que "integridade impede
              acesso não autorizado" (isso é confidencialidade; integridade impede{" "}
              <strong className="text-zinc-100">ALTERAÇÃO</strong> indevida).
            </p>
          </div>
        </Callout>
      </Reveal>

      <Reveal>
        <Callout variant="prova">
          <p>
            O <ShieldCheck size={14} className="inline text-yellow-300 -mt-0.5" /> ataque de{" "}
            <strong className="text-zinc-100">negação de serviço (DoS/DDoS)</strong> — bombardear o
            servidor com requisições até derrubá-lo — viola qual pilar?{" "}
            <Hot>Disponibilidade</Hot>. O <strong className="text-zinc-100">ransomware</strong>,
            que tranca seus dados, viola principalmente... disponibilidade também (e atrapalha a
            integridade). Guarde esses dois "vilões": eles são o gancho favorito das bancas.
          </p>
        </Callout>
      </Reveal>
    </SectionShell>
  );
}
