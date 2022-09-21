import React from 'react'
import { useState } from 'react';
import randomcolor from 'randomcolor'

const SquareDiv = ({style, mouseOver, onClick}) => {
    return (<div onMouseOver={mouseOver} mouseOver={mouseOver} onClick={onClick} style={style}/>)
  }

const Example = () => {

    const [action, setAction] = useState()
  const initStyle = {
    backgroundColor: 'black',
    width: '255px',
    height: '255px'
  }
  let mouseOverStyle = {
    backgroundColor: randomcolor(),
    width: '255px',
    height: '255px'
  }


  const mouseOver = () => {
    console.log('asd')
    setAction('mouseOver')
  }

  let Square

  switch(action){
    case 'mouseOver':
      Square = <SquareDiv onClick={mouseOver} mouseOver={mouseOver} style={mouseOverStyle}/>
      break
    case 'dobleClick':
      Square = <SquareDiv onClick={mouseOver} mouseOver={mouseOver} style={initStyle}/>
      break
    default:
      Square = <SquareDiv onClick={mouseOver} mouseOver={mouseOver} style={initStyle}/>
      break
  }

  return (
    <div>
         {Square}
    </div>
  )
}

export default Example