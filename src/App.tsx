import Title from './Title'
import CategoryCard from './Cards/CatergoryCard'
import PointsCard from './Cards/PointsCard'
import Footer from './Footer'
import { useState } from 'react'

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
    }
  }

  // Create a 2D array to track the state of each card
  // First dimension: category (column)
  // Second dimension: points value (row)
  const [answeredCards, setAnsweredCards] = useState(
    Array(5).fill(0).map(() => Array(5).fill(false))
  );

  const pointsCardClick = (categoryIndex: number, pointIndex: number) => {
    // Create a deep copy of the current state
    const newAnsweredCards = answeredCards.map(category => [...category]);
    
    // Toggle the state for the specific card
    newAnsweredCards[categoryIndex][pointIndex] = true;
    
    // Update the state
    setAnsweredCards(newAnsweredCards);
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
                  isPending={false} 
                  isAnswered={answeredCards[categoryIndex][pointIndex]} 
                  questionWorth={worth} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App