import React from 'react'

export default function Champion({ name, country, img, abilities }) {
  return (
    <div className="champion">
      <div className="champion__info">
        <p className="champion__country">{country}</p>
        <h1 className="champion__name">{name}</h1>
      </div>
      <img className="champion_img" src={img} alt={`Champion${name}`} />
      <div className="champion__abilities">
        {abilities.map(ability => (
          <div>
            <img src={ability} alt="character ability" />
          </div>
        ))}
      </div>

    </div>
  )
};
