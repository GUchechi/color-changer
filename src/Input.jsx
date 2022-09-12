import React from 'react'
import colorNames from 'colornames'

const Input = ({
  colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
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
              setHexValue(colorNames(e.target.value));
          }}       
          />
        <button
          onClick={(e) => {
            setIsDarkText(!isDarkText)
          }}
        >Toggle Text</button>

    </form>
  )
}

export default Input
