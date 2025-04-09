import { useState } from "react"

interface PointsCardProps {
  questionWorth: number
}

function PointsCard({
  questionWorth
}: PointsCardProps) {

  const [isHovered, setIsHovered] = useState(false)

  const style: { [key: string]: React.CSSProperties } = {
    container: {
      borderRadius: '1em',
      background: isHovered ? '#D21F3C' : 'pink',
      border: '1px solid #FF69B4',
      textAlign: 'center',
      marginTop: '1em',
      cursor: 'pointer',
    },
    text: {
      color: 'white',
      fontSize: '2em'
    }
  }

  return (
    <div
      style={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={style.text}>{questionWorth}</h2>
    </div>
  )
}

export default PointsCard