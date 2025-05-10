interface QuestionCardProps {
  question: string,
  answer: string,
}

function QuestionCard({
  question,
  answer
}: QuestionCardProps) {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
      <button>What is...</button>
    </div>
  )
}

export default QuestionCard