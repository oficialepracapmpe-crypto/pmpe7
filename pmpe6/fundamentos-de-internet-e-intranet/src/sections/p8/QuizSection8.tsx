import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_8 } from "../../data/questions8";

export default function QuizSection8() {
  return (
    <SectionShell
      id="questoes"
      num="06"
      kicker="Fixação · hora de treinar"
      title={
        <>
          Questões <span className="italic text-lime-300">comentadas</span>
        </>
      }
      lead="Oito questões no padrão das bancas cobrindo o formato .ods, os atalhos que divergem do Excel, o Assistente de Funções, o endereço da Tabela Dinâmica, a largura de coluna pelo teclado e o comportamento do Backspace."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_8} />
      </Reveal>
    </SectionShell>
  );
}
