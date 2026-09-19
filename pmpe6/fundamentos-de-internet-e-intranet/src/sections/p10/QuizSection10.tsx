import Quiz from "../../components/Quiz";
import { Reveal, SectionShell } from "../../components/ui";
import { QUESTIONS_10 } from "../../data/questions10";

export default function QuizSection10() {
  return (
    <SectionShell
      id="questoes"
      num="05"
      kicker="Simulado final · todos os módulos"
      title={<>Quiz geral <span className="italic text-yellow-300">de consolidação</span></>}
      lead="Quarenta questões de múltipla escolha, em estilo de concurso público, misturando Internet, segurança da informação, Windows, Microsoft Office 2019 e LibreOffice 7. Responda primeiro; depois confira o gabarito comentado na seção seguinte."
    >
      <Reveal>
        <Quiz questions={QUESTIONS_10} />
      </Reveal>
    </SectionShell>
  );
}
