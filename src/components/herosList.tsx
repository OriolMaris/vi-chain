import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hero, HerosListI } from '../interfaces/hero'
import logo from '../images/marvelLogo.png'

const HerosList = ({ heros }: HerosListI) => {
  return (
    <nav>
      <img src={logo} className="logoList" alt="Logo" />
      <ul>
        {heros?.map((element: Hero, key: number) => {
          return (
            <li key={key}>
              <NavLink to={`/hero/${element.id}`}>{element.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HerosList
