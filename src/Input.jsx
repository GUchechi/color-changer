import React from 'react'

const Input = ({colorValue, setColorValue, setHexValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color name</label>
        <input
        autoFocus
         type="text"
         placeholder='Add a new color'
         required
         value={colorValue}
         onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue()
          }}       
          />
    </form>
  )
}

export default Input
