import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_9 } from "../../data/questions9";

export default function QuizSection9() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-rose-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cobrindo o formato .odp, as âncoras F5/B/W, os atalhos que divergem do PowerPoint, os painéis laterais, os menus exclusivos e o Slide Mestre."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_9} />
      </Reveal>
    </SectionShell>
  );
}
