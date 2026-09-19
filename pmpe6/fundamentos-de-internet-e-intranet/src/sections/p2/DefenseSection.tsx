import { BrickWall, Filter, MailX, ScanSearch, ShieldCheck, ShieldX, TrendingUp } from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

export default function DefenseSection() {
  return (
    <SectionShell
      id="defesas"
      num="03"
      kicker="Módulo A · as muralhas do castelo"
      title={
        <>
          <span className="italic text-rose-300">Antivírus</span> e{" "}
          <span className="italic text-yellow-300">firewall</span>
        </>
      }
      lead={
        <>
          As duas ferramentas de defesa mais cobradas — e as mais confundidas entre si. Regra de
          ouro: <Hot>antivírus caça pragas</Hot> dentro da máquina;{" "}
          <Hot tone="y">firewall vigia a fronteira</Hot>, filtrando o tráfego da rede.
        </>
      }
    >
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {/* antivírus */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:border-rose-300/30 transition-colors">
            <ScanSearch size={22} className="text-rose-300 mb-4" />
            <h3 className="font-display text-2xl text-[#f4f1ea] mb-3">Antivírus</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-300">
              <li className="flex gap-2.5">
                <ShieldCheck size={15} className="text-rose-300 mt-0.5 shrink-0" />
                Detecta, bloqueia e remove malwares (vírus, trojans, spyware...).
              </li>
              <li className="flex gap-2.5">
                <TrendingUp size={15} className="text-rose-300 mt-0.5 shrink-0" />
                Trabalha por <strong className="text-zinc-100">assinaturas</strong> (catálogo de
                pragas conhecidas) e por <strong className="text-zinc-100">heurística</strong>{" "}
                (comportamento suspeito).
              </li>
              <li className="flex gap-2.5">
                <ShieldX size={15} className="text-rose-300 mt-0.5 shrink-0" />
                Precisa estar <strong className="text-zinc-100">sempre atualizado</strong> — sem
                atualização, pragas novas passam despercebidas.
              </li>
              <li className="flex gap-2.5">
                <ShieldX size={15} className="text-rose-300 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-zinc-100">Nunca garante 100%</strong> de proteção. Item
                  que afirme isso está errado.
                </span>
              </li>
            </ul>
            <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
              Exemplos: Windows Defender (Microsoft Defender — nativo do Windows), Avast, Kaspersky,
              AVG. Há também <strong className="text-zinc-300">antispywares</strong> específicos.
            </p>
          </div>

          {/* firewall */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 hover:border-yellow-300/30 transition-colors">
            <BrickWall size={22} className="text-yellow-300 mb-4" />
            <h3 className="font-display text-2xl text-[#f4f1ea] mb-3">Firewall</h3>
            <ul className="space-y-2.5 text-[13.5px] leading-relaxed text-zinc-300">
              <li className="flex gap-2.5">
                <Filter size={15} className="text-yellow-300 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-zinc-100">Filtra o tráfego</strong> que entra e sai da
                  rede, conforme regras (portas, endereços IP, protocolos, programas).
                </span>
              </li>
              <li className="flex gap-2.5">
                <BrickWall size={15} className="text-yellow-300 mt-0.5 shrink-0" />
                É a <strong className="text-zinc-100">barreira entre a rede interna (intranet) e a
                Internet</strong> — "portaria" do condomínio.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck size={15} className="text-yellow-300 mt-0.5 shrink-0" />
                Pode ser <strong className="text-zinc-100">hardware</strong> (aparelho dedicado) ou{" "}
                <strong className="text-zinc-100">software</strong> (Firewall do Windows, nativo).
              </li>
              <li className="flex gap-2.5">
                <ShieldX size={15} className="text-yellow-300 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-zinc-100">Não é antivírus:</strong> não detecta nem
                  remove vírus — controla fluxos de rede.
                </span>
              </li>
            </ul>
            <p className="mt-4 pt-4 border-t border-white/[0.07] text-[12.5px] text-zinc-500">
              Relacionado: <strong className="text-zinc-300">proxy</strong> = servidor intermediário
              que atende requisições em nome dos clientes, podendo filtrar conteúdo e guardar
              cache.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Outras defesas que aparecem em prova: <Hot>anti-spam</Hot> (filtra mensagens não
          solicitadas), <Hot>antispyware</Hot> (caça espiões), as{" "}
          <Hot>atualizações de segurança do sistema operacional</Hot> (corrigem as falhas que os
          worms exploram — pular o Windows Update é abrir a porta para o lobo) e boas senhas com{" "}
          <Hot>autenticação em dois fatores</Hot>.
        </P>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <Callout variant="pegadinha">
            <p>
              <em>"Com um firewall ativo e um antivírus atualizado, o computador está totalmente
              imune a ataques."</em> → <strong className="text-rose-300">ERRADO!</strong> Nenhuma
              solução oferece segurança absoluta — principalmente porque o{" "}
              <strong className="text-zinc-100">fator humano</strong> (clique em link falso, senha
              fraca) continua sendo o elo mais frágil.
            </p>
          </Callout>
          <Callout variant="prova">
            <div className="flex items-start gap-3">
              <MailX size={16} className="text-yellow-300 mt-1 shrink-0" />
              <p>
                Pergunta clássica: "qual ferramenta protege contra SPAM?" →{" "}
                <strong className="text-zinc-100">filtro anti-spam</strong>, não o firewall nem o
                antivírus tradicional. E lembre: firewall{" "}
                <strong className="text-zinc-100">pessoal</strong> (do Windows) filtra programas e
                portas; firewall <strong className="text-zinc-100">corporativo</strong> protege a
                rede inteira (hardware, ex.: ao lado do roteador).
              </p>
            </div>
          </Callout>
        </div>
      </Reveal>
    </SectionShell>
  );
}
