import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_3 } from "../../data/questions3";

export default function QuizSection3() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-violet-300">comentadas</span>
        </>
      }
      lead="Oito questões no estilo das bancas cobrindo organização de arquivos, extensões, Plug and Play, ambiente Windows e os atalhos que você acabou de dominar."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_3} />
      </Reveal>
    </SectionShell>
  );
}
