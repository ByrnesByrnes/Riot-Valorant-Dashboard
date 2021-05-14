import React from 'react'

export default function Champion({ id, name, country, img, abilities, champion,selectedChampion, setSelectedChampion, setViewChampion }) {
  return (
    <div 
      className={`champion ${selectedChampion.id === id ? 'selected' : ''}`} 
      onMouseEnter={() => setSelectedChampion(champion)}
      onClick={() => setViewChampion(champion)}
    >
      <div className="champion__info">
        <p className="champion__country">{country}</p>
        <h1 className="champion__name">{name}</h1>
      </div>
      <img className="champion__img" src={img} alt={`Champion${name}`} />
      <div className="champion__abilities">
        {abilities.map((ability, i) => (
          <div key={i}>    
            <img src={ability.img} alt="character ability" />  
          </div>
        ))}
      </div>    
    </div>
  )
};
