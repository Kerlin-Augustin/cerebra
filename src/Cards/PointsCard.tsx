interface PointsCardProps {
  questionWorth: number
}

function PointsCard({
  questionWorth
}: PointsCardProps){

  const style: {[key: string]: React.CSSProperties} = {
    container: {
      borderRadius: '1em',
      background: 'pink',
      border: '1px solid #FF69B4',
      textAlign: 'center',
      marginTop: '1em',
    },
    text: {
      color: 'white',
      fontSize: '2em'
    }
  }

  return (
    <div style={style.container}>
      <h2 style={style.text}>{questionWorth}</h2>
    </div>
  )
}

export default PointsCard