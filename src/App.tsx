import Title from './Title'
import CategoryCard from './CatergoryCard'

function App() {

  const style: {[key: string]: React.CSSProperties} = {
    categoriesTitleCards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '10px',
    }
  }

  const categoriesTitle = [<CategoryCard title="Dentistry"/>, <CategoryCard title="Midwifery"/>, <CategoryCard title="Anesthesia"/>, <CategoryCard title="Doctor"/>, <CategoryCard title="Common Medical Practice"/>]

  const allCategoriesTitle = categoriesTitle.map((card, index) => {
    return <div key={index}>{card}</div>
  })

  return (
    <div style={{margin: '1em'}}>
      <Title />
      <div style={style.categoriesTitleCards}>
        {allCategoriesTitle}
      </div>
    </div>
  )
}

export default App
