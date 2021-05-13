import React from 'react'

export default function Champion({name, country, img}) {
  return (
    <div className="champion">
      <div className="champion__info">
        <p className="champion__country">{country}</p>
        <h1 className="champion__name">{name}</h1>
      </div>
      <img className="champion_img" src={img} alt="champion name" />
      <div className="champion__abilities">
      <div>
        <img src="./images/champions/abilities/vector-1.svg" alt="" />
      </div>
      <div>
        <img src="./images/champions/abilities/vector-2.svg" alt="" />
      </div>
      <div>
        <img src="./images/champions/abilities/vector-3.svg" alt="" />
      </div>
      <div>
        <img src="./images/champions/abilities/vector-4.svg" alt="" />
      </div>
      </div>

    </div>
  )
};
