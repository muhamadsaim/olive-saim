import React from 'react'

const notFound = {
  height: '100vh',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center'
}
const NotFound = () => {
  return (
      <div style={notFound}>
          <h1>404- Not Found</h1>
          <h3>The page you are looking for dose not exist.</h3>
    </div>
  )
}

export default NotFound