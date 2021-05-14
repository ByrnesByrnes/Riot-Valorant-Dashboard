import React, {useState, useEffect} from 'react'
import {Header} from './header'
import {Footer} from './footer'
import {champions} from '../../champions-data'
import { ChampionsDisplay} from '../'

export default function Dashboard() {
  const [selectedChampion, setSelectedChampion] = useState(champions[3])

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
          <ChampionsDisplay
            champions={champions} 
            selectedChampion={selectedChampion} 
            setSelectedChampion={setSelectedChampion}
          />
      </div>
      <Footer />
    </div>
  )
}