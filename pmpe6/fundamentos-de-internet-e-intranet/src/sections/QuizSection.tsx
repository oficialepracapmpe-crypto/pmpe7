import Quiz from "../components/Quiz";
import { Reveal, SectionShell } from "../components/ui";
import { QUESTIONS } from "../data/questions";

export default function QuizSection() {
  return (
    <SectionShell
      id="questoes"
      num="09"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-yellow-300">comentadas</span>
        </>
      }
      lead="As oito questões abaixo simulam o estilo das principais bancas e cobrem exatamente o que você estudou nesta parte. Responda, erre sem medo e leia cada comentário — é nele que a fixação acontece."
    >
      <Reveal>
        <Quiz questions={QUESTIONS} />
      </Reveal>
    </SectionShell>
  );
}
