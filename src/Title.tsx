function Title() {

  const stylingHeader: { [key: string]: React.CSSProperties } = {
    container: {
      background: 'pink',
      paddingTop: '2em',
      paddingBottom: '2em',
      margin: '1em',
      border: '1px solid #FF69B4',
      borderRadius: '1em'
    },
    text: {
      color: 'white',
      textAlign: 'center',
    }
  }

  return (
  <div style={stylingHeader.container}>
    <h1 style={stylingHeader.text}>Welcome to Cerebra's!</h1>
  </div>
  )
}

export default Title