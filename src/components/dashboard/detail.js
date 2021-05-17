import React from 'react'
import propTypes from 'prop-types'

export function Detail({ability, alignIt}) {
    
  return (
    <div className="detail">
      <div className="detail__description" style={{justifyContent: alignIt}}>
        <h2>{ability.type}</h2>
        <h3>{ability.name}</h3>
        <p>{ability.description}</p>
      </div>
      <div className="detail__img">
        {ability.img}
      </div>
    </div>
  )
};

Detail.defaultProps = {
  alignIt: 'flex-start'
}