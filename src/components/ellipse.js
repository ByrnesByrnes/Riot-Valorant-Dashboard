import React from 'react'
import PropTypes from 'prop-types'

// Styles are located in globals.scss
export default function Ellipse({size, color, top, bottom, left, right}) {
  return (
    <div 
      className="ellipse"
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        top: top,
        bottom: bottom,
        left: left,
        right: right
      }}>
    </div>
  )
}


Ellipse.defaultProps = {
  size: "5em",
  color: "#EFEFEF"
}

Ellipse.protoTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}