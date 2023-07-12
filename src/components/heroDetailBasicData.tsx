import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBasicDataI } from '../interfaces/hero'

const HeroBasicData = ({ hero }: HeroBasicDataI) => {
  return (
    <>
      <p>
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
