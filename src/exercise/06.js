// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleOnSubmit = e => {
    e.preventDefault()
    // console.log(e.target.elements[0].value);
    // onSubmitUsername(e.target.elements[0].value);
    const value = inputRef.current.value
    console.log(inputRef)
    onSubmitUsername(value)
  }

  const handleChange = e => {
    // if (e.target.value === e.target.value.toLowerCase()) {
      setValue(e.target.value.toLowerCase())
      setError(null)
    // } else setError('username must be lower case')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={value}
        />
        {error ? error : null}
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
