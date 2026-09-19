import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_2 } from "../../data/questions2";

export default function QuizSection2() {
  return (
    <SectionShell
      id="questoes"
      num="08"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-rose-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas, cruzando os dois módulos desta parte: segurança da informação e armazenamento/backup. O comentário de cada uma é uma mini-revisão."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_2} />
      </Reveal>
    </SectionShell>
  );
}
