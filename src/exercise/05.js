// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({size, background, children}) {
  return (
    <div
      className={`box box--${size}`}
      style={{background: background, fontStyle: 'italic'}}
    >
      {children}
    </div>
  )
}

// const smallBox = (
//   <div className="box box--small" style={{background: 'lightblue', fontStyle: 'italic'}} >
//     small lightblue box
//   </div>
// )

const smallBox = (
  <Box size="small" background="lightblue">
    small lightblue box
  </Box>
)

// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{background: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )

const mediumBox = (
  <Box size="medium" background="pink">
    medium pink box
  </Box>
)

// const largeBox = (
//   <div
//     className="box box--large"
//     style={{background: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

const largeBox = (
  <Box size="large" background="orange">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
