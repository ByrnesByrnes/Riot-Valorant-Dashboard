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
          <Champion name="Phoenix" country="United Kingdom" img="./images/champions/phoenix/art.png"/>
          <Champion name="jett" country="South Korea" img="./images/champions/jett/art.png"/>
          <Champion name="sova" country="Russia" img="./images/champions/sova/sova.png"/>
          <Champion name="sage" country="China" img="./images/champions/sage/sage.png"/>
        </div>
      </div>

      <Footer />
    </div>
  )
}