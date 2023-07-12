import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hero, HerosListI } from '../interfaces/hero'

const HerosList = ({ heros }: HerosListI) => {
  return (
    <nav>
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
