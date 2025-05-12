interface CategoryCardProps {
  title: string
}

function CategoryCard({
  title
}: CategoryCardProps) {

  const style: {[key: string]: React.CSSProperties} = {
    container: {
      borderRadius: '1em',
      background: '#FF69B4',
      border: '1px solid pink',
      textAlign: 'center',
      marginTop: '1em',
    },
    text: {
      color: 'white',
    }
  }

  return (
    <div style={style.container}>
      <h2 style={style.text}>{title}</h2>
    </div>
  )
}

export default CategoryCard