import {
  Crosshair,
  Fish,
  ListChecks,
  MessageSquare,
  Phone,
  QrCode,
  ShieldQuestion,
  Smartphone,
} from "lucide-react";
import { Callout, Hot, P, Reveal, SectionShell } from "../../components/ui";

const VARIANTS = [
  {
    icon: Fish,
    n: "Phishing",
    d: "A isca clássica: e-mail ou site FALSO imitando banco, Receita ou Correios para 'pescar' senhas e dados. Clichê de prova!",
  },
  {
    icon: Crosshair,
    n: "Spear phishing",
    d: "Phishing DIRECIONADO (spear = lança): mensagem personalizada para uma vítima ou cargo específico — ex.: o contador da prefeitura.",
  },
  {
    icon: MessageSquare,
    n: "Smishing",
    d: "Phishing por SMS/mensagem (SMS + phishing): 'Seu CPF foi bloqueado, clique aqui'. Muito comum no WhatsApp.",
  },
  {
    icon: Phone,
    n: "Vishing",
    d: "Phishing por VOZ (voice): ligação de falso 'gerente do banco' pedindo códigos e senhas.",
  },
  {
    icon: QrCode,
    n: "Quishing",
    d: "Phishing via QR Code adulterado — o código leva a uma página clonada de pagamento.",
  },
];

const RED_FLAGS = [
  "Urgência e ameaça ('sua conta será bloqueada HOJE')",
  "Pedido de senha, token ou dados bancários por mensagem",
  "Remetente com domínio estranho ou quase igual (go0gle.com)",
  "Links encurtados ou que apontam para outro endereço",
  "Erros de português e formatação amadora",
  "Prêmios incríveis que você nunca disputou",
  "Anexos inesperados, sobretudo .exe e .zip",
  "Botão de 'atualizar dados cadastrais' por e-mail",
];

const PRACTICES = [
  {
    t: "Ative o 2FA/MFA",
    d: "Autenticação em 2 fatores: além da senha, um segundo fator (código no celular, app autenticador, biometria). Mesmo que roubem sua senha, a conta continua protegida. Muito cobrado!",
  },
  {
    t: "Senhas fortes e únicas",
    d: "Longas (12+ caracteres), misturando letras, números e símbolos — e diferentes em cada serviço. Nada de data de nascimento ou '123456'. Um gerenciador de senhas ajuda.",
  },
  {
    t: "Desconfie e confira",
    d: "Não clique: digite o endereço oficial no navegador ou use o app oficial. Passe o mouse sobre o link para ver o destino real. Ligue para a empresa pelo número oficial.",
  },
  {
    t: "Mantenha tudo atualizado",
    d: "Sistema operacional, navegador e apps atualizados fecham as brechas que os golpes técnicos exploram.",
  },
];

export default function SocialSection() {
  return (
    <SectionShell
      id="phishing"
      num="05"
      kicker="Módulo A · o elo mais fraco é a pessoa"
      title={
        <>
          <span className="italic text-rose-300">Phishing</span> e engenharia social
        </>
      }
      lead={
        <>
          <Hot tone="r">Engenharia social</Hot> é a arte de{" "}
          <Hot tone="r">manipular pessoas</Hot> para obter informações ou acessos — em vez de
          atacar a tecnologia, ataca-se a confiança. E a técnica número 1, cara a toda banca, é o{" "}
          <Hot tone="y">phishing</Hot>.
        </>
      }
    >
      <Reveal>
        <Callout variant="conceito" title="definição para gravar">
          <p>
            Phishing (de <em>fishing</em>, "pescar") é o golpe em que o criminoso{" "}
            <strong className="text-zinc-100">imita uma entidade confiável</strong> (banco, Receita
            Federal, Correios, Netflix...) por e-mail, SMS ou site falso para induzir a vítima a{" "}
            <strong className="text-zinc-100">revelar dados</strong> (senhas, cartões) ou{" "}
            <strong className="text-zinc-100">instalar malware</strong>. Repare: quem "comete o
            erro" é o usuário — por isso é engenharia social, e não invasão técnica.
          </p>
        </Callout>
      </Reveal>

      {/* variantes */}
      <Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {VARIANTS.map((v) => (
            <div
              key={v.n}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-rose-300/35 transition-colors"
            >
              <v.icon size={19} className="text-rose-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{v.n}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{v.d}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-dashed border-rose-300/30 bg-rose-300/[0.04] p-5 flex items-center">
            <p className="text-[13px] leading-relaxed text-zinc-300">
              <ShieldQuestion size={15} className="inline text-rose-300 -mt-0.5 mr-1" />
              <strong className="text-zinc-100">Macete de banca:</strong> sm{" "}
              <strong className="text-zinc-100">S</strong>hing = S ={" "}
              <strong className="text-zinc-100">SMS</strong>; vishing = V ={" "}
              <strong className="text-zinc-100">voz</strong>. Cebraspe e Vunesp já cobraram os dois
              nomes às escondidas.
            </p>
          </div>
        </div>
      </Reveal>

      {/* sinais de alerta */}
      <Reveal>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 my-6">
          <div className="flex items-center gap-2.5 mb-5">
            <ListChecks size={18} className="text-yellow-300" />
            <h3 className="font-display text-2xl text-[#f4f1ea]">
              Checklist: como farejar um phishing em 10 segundos
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8">
            {RED_FLAGS.map((r, i) => (
              <p
                key={r}
                className="flex items-start gap-3 text-[13.5px] leading-relaxed text-zinc-300 py-2.5 border-b border-white/[0.05]"
              >
                <span className="font-mono text-[10px] font-bold text-[#0a0910] bg-yellow-300 rounded px-1.5 py-0.5 mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {r}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      {/* boas práticas */}
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {PRACTICES.map((p) => (
            <div
              key={p.t}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 hover:border-emerald-300/30 transition-colors"
            >
              <Smartphone size={18} className="text-emerald-300 mb-3" />
              <h3 className="text-[14.5px] font-bold text-zinc-100 mb-1.5">{p.t}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{p.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <Callout variant="pegadinha" title="a isca na isca">
            <p>
              <em>"Se a página tem o cadeado de HTTPS, o usuário pode confiar que o site é
              legítimo."</em> → <strong className="text-rose-300">ERRADO!</strong> O cadeado indica
              apenas que a <strong className="text-zinc-100">conexão está criptografada</strong> —
              sites de phishing também conseguem certificado e exibem cadeado. Confira o{" "}
              <strong className="text-zinc-100">domínio</strong> na barra de endereços!
            </p>
          </Callout>
          <Callout variant="prova">
            <p>
              Outra recorrente: <em>"que medida evita que uma senha roubada por phishing seja
              usada?"</em> → <strong className="text-zinc-100">autenticação em dois fatores
              (2FA)</strong>. Antivírus e firewall ajudam, mas a resposta das bancas para golpes
              contra pessoas é quase sempre <Hot tone="e">2FA + orientação do usuário</Hot>.
            </p>
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <P>
          Para fechar o módulo, guarde a cadeia causal do golpe moderno: o{" "}
          <Hot tone="r">phishing</Hot> (engenharia social) entrega a senha ou instala o{" "}
          <Hot tone="r">trojan/Spyware</Hot>, que pode baixar o{" "}
          <Hot tone="r">ransomware</Hot> — e aí só duas coisas salvam você:{" "}
          <Hot tone="e">prevenção</Hot>... e <Hot tone="y">backup</Hot>. Que é exatamente o assunto
          do próximo módulo.
        </P>
      </Reveal>
    </SectionShell>
  );
}
