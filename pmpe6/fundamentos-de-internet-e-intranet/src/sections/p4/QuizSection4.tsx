import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_4 } from "../../data/questions4";

export default function QuizSection4() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-blue-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cruzando localização de comandos nas guias, atalhos do Word PT-BR e os recursos mais cobrados (sumário, mala direta, controlar alterações)."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_4} />
      </Reveal>
    </SectionShell>
  );
}
