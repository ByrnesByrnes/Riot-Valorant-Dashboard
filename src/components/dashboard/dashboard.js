import React from 'react'
import {Header} from './header'
import {Footer} from './footer'
import {Champion} from '../'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">

        <div className="dashboard__left">
          <h1 className="dashboard__category stroke">agents</h1>
        </div>

        <div className="dashboard__right">
          <Champion 
            name="Phoenix" 
            country="United Kingdom" 
            img="./images/champions/phoenix/art.png"
            abilities={[
              './images/champions/abilities/vector-1.svg',
              './images/champions/abilities/vector-2.svg',
              './images/champions/abilities/vector-3.svg',
              './images/champions/abilities/vector-4.svg'
            ]}
          />
          <Champion 
            name="jett" 
            country="South Korea" 
            img="./images/champions/jett/art.png"
            abilities={[
              './images/champions/abilities/vector-5.svg',
              './images/champions/abilities/vector-6.svg',
              './images/champions/abilities/vector-7.svg',
              './images/champions/abilities/vector-8.svg'
            ]}
          />
          <Champion 
            name="sova" 
            country="Russia" 
            img="./images/champions/sova/sova.png"
            abilities={[
              './images/champions/abilities/vector-9.svg',
              './images/champions/abilities/vector-10.svg',
              './images/champions/abilities/vector-11.svg',
              './images/champions/abilities/vector-12.svg'
            ]}
          />
          <Champion 
            name="sage" 
            country="China" 
            img="./images/champions/sage/sage.png"
            abilities={[
              './images/champions/abilities/vector-13.svg',
              './images/champions/abilities/vector-14.svg',
              './images/champions/abilities/vector-15.svg',
              './images/champions/abilities/vector-16.svg'
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}