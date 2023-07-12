import React from 'react'
import { Link } from 'react-router-dom'
import { BasicArrayResponse, ListLinkI } from '../interfaces/hero'

const ListLink = ({ text, list }: ListLinkI) => {
  return (
    <>
      <p>
        <b>{text}</b>
      </p>
      {list?.map((serie: BasicArrayResponse, key: number) => {
        return (
          <div key={key}>
            {serie.name}, {serie.type}{' '}
            <Link to={serie.resourceURI}>{serie.resourceURI}</Link>
          </div>
        )
      })}
    </>
  )
}

export default ListLink
