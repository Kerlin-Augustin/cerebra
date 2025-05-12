interface QuestionCardProps {
  question: string,
  answer: string,
  handleClick: () => void,
}

function QuestionCard({
  question,
  answer,
  handleClick
}: QuestionCardProps) {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
      <button onClick={handleClick}>What is...</button>
    </div>
  )
}

export default QuestionCard