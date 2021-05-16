import React, { useState, useEffect } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { RiArrowGoBackFill } from 'react-icons/ri'
import Champion from './champion';
import { Detail } from './dashboard/detail'
import {useTrail, animated} from 'react-spring'

export default function CharacterDisplay({ champions, selectedChampion, setSelectedChampion }) {
  const [viewChampion, setViewChampion] = useState(false)
  const [currentAbility, setCurrentAbility] = useState(0)

  // Removes one of 4 abilities 
  let currentAbilities = selectedChampion.abilities.filter((_, i) => i !== 1)

  const handleSkillSelect = e => {
    e.preventDefault()
    setCurrentAbility(Number(e.target.id))
  }

  // animation for champions into display
  const trail = useTrail(champions.length, {
    from: {
      opacity: 0,
      transform: 'translateX(-200%)'
    },
    opacity: 1,
    transform: 'translateX(0)',
    delay: 1000
  })

  // animation for abilities into display
  const leftTrail = useTrail(currentAbilities.length, {
    from: {
      opacity: 0,
      transform: 'translateX(150%)'
    },
    opacity: 1,
    transform: 'translateX(0)',
    delay: 2000
  })

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

              {trail.map((styles,i) => (
                  <animated.div key={i} style={styles}>
                    <Champion
                        id={champions[i].id}
                        name={champions[i].name}
                        country={champions[i].country}
                        img={champions[i].img}
                        abilities={champions[i].abilities}
                        champion={champions[i]}
                        setViewChampion={setViewChampion}
                        selectedChampion={selectedChampion}
                        setSelectedChampion={setSelectedChampion}
                      />
                  </animated.div>
                ))}
            </div>
            <div className="dashboard__info">
              {
                leftTrail.map((styles, i) => (
                  <animated.div key={i} style={styles}>
                    <Detail ability={currentAbilities[i]} />
                  </animated.div>
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
                  <div>
                    <h3 className="view-champion__title">Lore and Storyline</h3>
                    <div  
                      className="view-champion__back"
                      onClick={() => setViewChampion(false)}> 
                      <RiArrowGoBackFill />
                    </div>
                  </div>
                  <p className="view-champion__text">In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.</p>
                  <p className="view-champion__text">Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.</p>
                  <p className="view-champion__text">There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match. </p>
                </div>
                <div className="view-champion__details">
                  <div>
                    {viewChampion.abilities.map(ability => (
                      <video
                        key={ability.id}
                        className={`view-champion__stream ${ability.id === currentAbility ? 'selected' : ''}`}
                        preload="true"
                        loop
                        playsInline
                        autoPlay
                        muted
                        type="video/mp4"
                        src={ability.vid}
                      ></video>
                    ))}
                  </div>

                  <div className="view-champion__content">
                    <h3
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
                  <div className="view-champion__main-img">
                    <img src={viewChampion.largeImg} alt={viewChampion.name} />
                    <h1 className="view-champion__name">{viewChampion.name}</h1>
                  </div>
                </div>
              </div>
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
