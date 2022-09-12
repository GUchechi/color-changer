import React from 'react'

const Square = ({colorValue}) => {
  return (
    <section
      className='square'
      style={{ backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : "Empty Color Value "}</p>
    </section>
  )
}

Square.defaultProps = {

}

export default Square
