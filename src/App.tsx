import { useState } from 'react'
import Title from './Title'
import CategoryCard from './Cards/CategoryCard'
import PointsCard from './Cards/PointsCard'
import Footer from './Footer'
import QuestionCard from './Cards/QuestionCard'
import axios from 'axios'

function App() {
  const style = {
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
    },
    overlayCards: {
      position: 'absolute',
      margin: '18em 8em',
      top: 0,
      left: 0,
      width: '85vw',
      height: '53vh',
      backgroundColor: 'rgb(255, 255, 255)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      borderRadius: '1em',
      border: '1px solid #FF69B4'
    } as React.CSSProperties
  }

  const [answeredCards, setAnsweredCards] = useState(
    Array(5).fill(0).map(() => Array(5).fill(false))
  );

  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const pointsCardClick = (categoryIndex: number, pointIndex: number) => {
    const newAnsweredCards = answeredCards.map(category => [...category]);
    newAnsweredCards[categoryIndex][pointIndex] = true;
    const overlayValue = newAnsweredCards[categoryIndex][pointIndex] = true;
    console.log(newAnsweredCards)
    setIsOverlayOpen(overlayValue)
    setAnsweredCards(newAnsweredCards);
  }

  const handleClick = () => {
    axios
      .get('/api/categoryQuestion')
      .then(res => {
        console.log(res)
      })
  }

  const categoriesTitle = [
    <CategoryCard title="Dentistry" />,
    <CategoryCard title="Midwifery" />,
    <CategoryCard title="Anesthesia" />,
    <CategoryCard title="Doctor" />,
    <CategoryCard title="Common Medical Practice" />
  ];

  const pointsValues = [200, 400, 600, 800, 1000];

  const allCategoriesTitle = categoriesTitle.map((card, index) => (
    <div key={index}>
      {card}
    </div>
  ));

  const numberOfCategories = 5;

  return (
    <div style={{ margin: '1em' }}>
      <Title />
      <div style={style.categoriesTitleCards}>
        {allCategoriesTitle}
      </div>
      <div style={style.pointsCardsWorthContainer}>
        {Array.from({ length: numberOfCategories }, (_, categoryIndex) => (
          <div key={categoryIndex} style={style.pointsCardsWorth}>
            {pointsValues.map((worth, pointIndex) => (
              <div
                key={pointIndex}
                onClick={() => pointsCardClick(categoryIndex, pointIndex)}
              >
                <PointsCard
                  isPending='null'
                  isAnswered={answeredCards[categoryIndex][pointIndex]}
                  questionWorth={worth}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {isOverlayOpen &&
        <div style={style.overlayCards}>
          <QuestionCard question='What is a Dentist?' answer='' handleClick={handleClick}/>
        </div>}
      <Footer />
    </div>
  )
}

export default App