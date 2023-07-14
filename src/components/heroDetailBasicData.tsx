import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBasicDataI } from '../interfaces/hero'
import logo from '../images/marvel.png'

const HeroBasicData = ({ hero }: HeroBasicDataI) => {
  return (
    <>
      <img src={logo} className="logoDetail" alt="Logo" />
      <p id="name">
        <b>Name: </b>
        {hero.name}
      </p>
      <p>
        <b>Description: </b>
        {hero.description}
      </p>
      {hero?.urls?.map((link: any, key: number) => {
        return (
          <div key={key}>
            <b>{link.type}</b>: <Link to={link.url}>{link.url}</Link>
          </div>
        )
      })}
    </>
  )
}

export default HeroBasicData
