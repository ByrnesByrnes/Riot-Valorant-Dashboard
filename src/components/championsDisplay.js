import React, { useState, useEffect } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import Champion from './champion';
import { Detail } from './dashboard/detail'


export default function CharacterDisplay({ champions, selectedChampion, setSelectedChampion }) {
  const [viewChampion, setViewChampion] = useState(false)

  // Removes one of 4 abilities 
  let currentAbilities = selectedChampion.abilities.filter((_, i) => i !== 1)

  console.log(viewChampion, 'selected')

  useEffect(() => {

  }, [])


  return (
    <>
      {
        !viewChampion ?
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
                    <img className="view-champion__stream" src="./images/champions/stream.png" alt="stream" />
                  </div>

                  <div className="view-champion__content">
                    <h3
                      onClick={() => setViewChampion(false)}
                      className="view-champion__title">Agents Information</h3>
                    <div>
                      <div className="view-champion__stats">
                        <p>Name: <span>{viewChampion.name}</span></p>
                        <p>Counrty: <span>{viewChampion.country}</span></p>
                        <p>signature ability: <span>Tailwind</span></p>
                        <p>Abilities: <span>cloudburst, updraft</span></p>
                        <p>ultimete: <span>blade storm</span></p>
                      </div>

                      <div className="view-champion__selector">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="view-champion__abilities">
                {viewChampion.abilities.map((ability, i) => (

                  <div key={i} className="view-champion__ability">
                    <div className="view-champion__ability-img">
                      <img src={ability.img} alt="" />
                    </div>
                    <h3 className="view-champion__ability-title">{ability.name}:</h3>
                    <p className="view-champion__ability-description">{ability.description}</p>
                  </div>
                ))}
                </div>
              </div>
              <div className="view-champion__right">


                <img className="view-champion__main-img" src="./images/champions/jett/jett-body.png" alt="" />
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
