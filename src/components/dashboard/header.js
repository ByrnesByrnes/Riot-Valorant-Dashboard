import React from 'react'
import {MdArrowDropDown} from 'react-icons/md'

export function Header() {
  return (
    <div className="header">
    <div className="header__left">
      <div className="header__logo-content">
        <img className="header__logo" src="./images/logo/riotgames.svg" alt="riot games" />
        <img src="./images/logo/logo.svg" alt="V shape logo" />
      </div>
      <nav>
        <ul className="header__nav">
          <li className="header__nav-link"><a href="#">game</a></li>
          <li className="header__nav-link"><a href="#">champions</a></li>
          <li className="header__nav-link"><a href="#">News <MdArrowDropDown/></a></li>
          <li className="header__nav-link"><a href="#">Patch notes</a></li>
          <li className="header__nav-link"><a href="#">Discover <MdArrowDropDown/></a></li>
          <li className="header__nav-link"><a href="#">Esports</a></li>
          <li className="header__nav-link"><a href="#">universe</a></li>
          <li className="header__nav-link"><a href="#">shop</a></li>
          <li className="header__nav-link"><a href="#">support</a></li>
        </ul>
      </nav>
    </div>
      <div className="header__user-profile">
        <img src="./images/logo/icon.svg" alt="user icon" />
        <li className="header__nav-link"><a href="#">Uptaut</a><MdArrowDropDown/></li>
      </div>
    </div>
  )
}