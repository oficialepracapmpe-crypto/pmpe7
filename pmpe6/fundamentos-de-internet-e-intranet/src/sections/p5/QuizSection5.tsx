import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_5 } from "../../data/questions5";

export default function QuizSection5() {
  return (
    <SectionShell
      id="questoes"
      num="07"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-emerald-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cobrindo intervalos, referências absolutas, funções MÉDIA e SE, mensagens de erro, conceitos de pasta de trabalho e localização de comandos."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_5} />
      </Reveal>
    </SectionShell>
  );
}
