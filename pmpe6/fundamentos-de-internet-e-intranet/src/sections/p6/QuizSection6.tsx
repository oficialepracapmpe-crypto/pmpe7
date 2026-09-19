import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_6 } from "../../data/questions6";

export default function QuizSection6() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-orange-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cobrindo transição × animação, slide mestre, atalhos de apresentação, anotações do orador, ocultar slide e formatos de arquivo."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_6} />
      </Reveal>
    </SectionShell>
  );
}
