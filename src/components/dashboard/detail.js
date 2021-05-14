import React from 'react'

export function Detail({ability}) {
    
  return (
    <div className="detail">
      <div className="detail__description">
        <h2>Basic</h2>
        <h3>Slow Orb</h3>
        <p>Cast our a radinite orb that breaks into a slowing field upon impact with the ground.</p>
      </div>
      <div className="detail__img">
        <img src={ability.img} alt="" />
      </div>
    </div>
  )
};
