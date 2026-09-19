import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_7 } from "../../data/questions7";

export default function QuizSection7() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-teal-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cobrindo o formato ODF, a barra de menus, os atalhos que divergem do Word, o Navegador, os estilos e a limpeza de formatação direta."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_7} />
      </Reveal>
    </SectionShell>
  );
}
