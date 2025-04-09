import Title from './Title'
import CategoryCard from './Cards/CatergoryCard'
import PointsCard from './Cards/PointsCard'
import Footer from './Cards/Footer'

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

  const categoriesTitle = [
    <CategoryCard title="Dentistry" />,
    <CategoryCard title="Midwifery" />,
    <CategoryCard title="Anesthesia" />,
    <CategoryCard title="Doctor" />,
    <CategoryCard title="Common Medical Practice" />]

  const pointsCards = [
    <PointsCard questionWorth={200} />,
    <PointsCard questionWorth={400} />,
    <PointsCard questionWorth={600} />,
    <PointsCard questionWorth={800} />,
    <PointsCard questionWorth={1000} />,]

  const allCategoriesTitle = categoriesTitle.map((card, index) => {
    return (
      <div key={index}>
        {card}
      </div>
    )
  })

  const allPointsCards = pointsCards.map((card, index) => {
    return (
      <div key={index}>
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
