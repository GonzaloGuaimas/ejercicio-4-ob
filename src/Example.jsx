import React from 'react'
import { useState, useEffect } from 'react';
import randomcolor from 'randomcolor'

const Example = () => {
  const [color, setColor] = useState('#000000')

  const initStyle = {
    backgroundColor: color,
    width: '255px',
    height: '255px'
  }
  var interval = null
  const onChangeColor = () => {
    interval = setInterval(() => {
        setColor(randomcolor())
    }, 500);
  }
  const onStopChangeColor = () => {
    clearInterval(interval);
  }
  const onDoubleClickChangeColor = () => {
    clearInterval(interval);
  }

  return (
    <div 
        onMouseOver={onChangeColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onDoubleClickChangeColor}
        style={initStyle}
        >
    </div>
  )
}

export default Example