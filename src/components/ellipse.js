import React from 'react'
import PropTypes from 'prop-types'


export default function Ellipse({size, color}) {
  return (
    <div 
      className="ellipse"
      style={{
        height: `${size}em`,
        width: `${size}em`,
        color: color,
      }}>

    </div>
  )
}


Ellipse.defaultProps = {
  size: 1,
  color: "EFEFEF"
}

Ellipse.protoTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}