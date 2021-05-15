import React, { useState, useEffect } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import Champion from './champion';
import { Detail } from './dashboard/detail'


export default function CharacterDisplay({ champions, selectedChampion, setSelectedChampion }) {
  const [viewChampion, setViewChampion] = useState(champions[1])
  const [currentAbility, setCurrentAbility] = useState(0)

  // Removes one of 4 abilities 
  let currentAbilities = selectedChampion.abilities.filter((_, i) => i !== 1)

  console.log(viewChampion, 'selected')

  const handleSkillSelect = e => {
    e.preventDefault()
    console.log(e.target)
    setCurrentAbility(Number(e.target.id))
  }

  useEffect(() => {

  }, [])


  return (
    <>
      {
        viewChampion ?
          <>
            <div
              className="dashboard__left"
            >
              <h1 className="dashboard__category">agents</h1>
            </div>

            <div className="dashboard__right">
              {champions.map(champ => (
                <Champion
                  key={champ.id}
                  id={champ.id}
                  name={champ.name}
                  country={champ.country}
                  img={champ.img}
                  abilities={champ.abilities}
                  champion={champ}

                  setViewChampion={setViewChampion}
                  selectedChampion={selectedChampion}
                  setSelectedChampion={setSelectedChampion}
                />
              ))}
            </div>
            <div className="dashboard__info">
              {
                currentAbilities.map((ability, i) => (
                  <Detail key={i} ability={ability} />
                ))
              }
              <div className="dashboard__char-next">
                <IoMdArrowDropright />
              </div>
            </div>
          </>
          :
          <>

            <div className="view-champion">
              <div className="view-champion__left">
                <div className="view-champion__story">
                  <h3 className="view-champion__title">Lore and Storyline</h3>
                  <p className="view-champion__text">In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.</p>
                  <p className="view-champion__text">Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.</p>
                  <p className="view-champion__text">There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match. </p>
                </div>
                <div className="view-champion__details">
                  <div>
                   { viewChampion.abilities.map(ability => (
                      <video 
                        className={`view-champion__stream ${ability.id === currentAbility ? 'selected' : ''}`}  
                        preload="true" 
                        loop 
                        playsInline 
                        poster
                        autoplay
                        muted
                        controls
                        type="video/mp4" 
                        src={ability.vid}
                      ></video>
                    ))}
                  </div>

                  <div className="view-champion__content">
                    <h3
                      onClick={() => setViewChampion(false)}
                      className="view-champion__title">Agents Information</h3>
                    <div>
                      <div className="view-champion__stats">
                        <p>Name: <span>{viewChampion.name}</span></p>
                        <p>Counrty: <span>{viewChampion.country}</span></p>
                        <p>signature ability: <span>{viewChampion.abilities[2].name}</span></p>
                        <p>Abilities: <span>{viewChampion.abilities[0].name}, {viewChampion.abilities[1].name}</span></p>
                        <p>ultimate: <span>{viewChampion.abilities[3].name}</span></p>
                      </div>

                      <div className="view-champion__selector">
                      {
                        viewChampion.abilities.map(ability => (
                          <div 
                            key={ability.id} 
                            onClick={handleSkillSelect}
                            id={ability.id}
                            className={`${ability.id === currentAbility ? 'selected' : ''}`}
                          ></div>
                        ))
                      }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-champion__abilities">
                {viewChampion.abilities.map(ability => (
                  <div 
                    key={ability.id}
                    onClick={handleSkillSelect}
                    id={ability.id}
                    className="view-champion__ability"
                  >
                    <div 
                      className={`view-champion__ability-img ${ability.id === currentAbility ? 'selected' : ''}`}
                    >
                      {ability.img}
                    </div>
                    <h3 className="view-champion__ability-title">{ability.name}:</h3>
                    <p className="view-champion__ability-description">{ability.description}</p>
                  </div>
                ))}
                </div>
              <div className="view-champion__image">
                <img className="view-champion__main-img" src="./images/champions/jett/jett-body.png" alt="" />
              </div>
              </div>
                <h1 className="view-champion__name">jett</h1>
            </div>
            <div className="dashboard__info">
              {
                currentAbilities.map((ability, i) => (
                  <Detail key={i} ability={ability} />
                ))
              }
            </div>
          </>
      }
    </>
  )
};
