function Footer() {

  const style: { [key: string]: React.CSSProperties } = {
    container: {
      background: '#FF69B4',
      paddingTop: '2em',
      paddingBottom: '2em',
      border: '1px solid pink',
      borderRadius: '1em',
      marginTop: '2em'
    },
    text: {
      color: 'white',
      textAlign: 'center',
    }
  }

  return (
    <div style={style.container}>
      <h1 style={style.text}>Created By Kerlin</h1>
    </div>

  )
}

export default Footer