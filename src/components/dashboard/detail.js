import React from 'react'

export function Detail({ability}) {
    
  return (
    <div className="detail">
      <div className="detail__description">
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
