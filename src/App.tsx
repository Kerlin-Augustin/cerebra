import Title from './Title'
import CategoryCard from './Cards/CatergoryCard'
import PointsCard from './Cards/PointsCard'
import Footer from './Footer'
import { useState } from 'react'

function App() {

  const style: { [key: string]: React.CSSProperties } = {
    categoriesTitleCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '10px',
    },
    pointsCardsWorth: {
      display: 'grid',
      gridTemplateRows: 'repeat(5, 1fr)',
      gap: '10px',
    },
    pointsCardsWorthContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '10px'
    }
  }

  const [isQuestionPending, setIsQuestionPending] = useState(false)
  const [isAnswerComplete, setIsAnsweredComplete] = useState(false)

  const pointsCardClick = () => {
    setIsAnsweredComplete(true)
  }

  const categoriesTitle = [
    <CategoryCard title="Dentistry" />,
    <CategoryCard title="Midwifery" />,
    <CategoryCard title="Anesthesia" />,
    <CategoryCard title="Doctor" />,
    <CategoryCard title="Common Medical Practice" />]

  const pointsCards = [
    <PointsCard isPending={false} isAnswered={isAnswerComplete} questionWorth={200} />,
    <PointsCard isPending={false} isAnswered={false} questionWorth={400} />,
    <PointsCard isPending={false} isAnswered={false} questionWorth={600} />,
    <PointsCard isPending={false} isAnswered={false} questionWorth={800} />,
    <PointsCard isPending={false} isAnswered={false} questionWorth={1000} />,]

  const allCategoriesTitle = categoriesTitle.map((card, index) => {
    return (
      <div key={index}>
        {card}
      </div>
    )
  })

  const allPointsCards = pointsCards.map((card, index) => {
    return (
      <div key={index} onClick={pointsCardClick}>
        {card}
      </div>
    )
  })

  const numberOfRepeats = 5;

  return (
    <div style={{ margin: '1em' }}>
      <Title />
      <div style={style.categoriesTitleCards}>
        {allCategoriesTitle}
      </div>
      <div style={style.pointsCardsWorthContainer}>
        {Array.from({ length: numberOfRepeats }, (_, index) => (
          <div key={index} style={style.pointsCardsWorth}>
            {allPointsCards}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
