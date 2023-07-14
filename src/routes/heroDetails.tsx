import React from 'react'
import { useParams } from 'react-router-dom'
import useHerosDetail from '../hooks/useHerosDetails'
import ListLink from '../components/listLink'
import HeroBasicData from '../components/heroDetailBasicData'

export default function HeroDetails() {
  const { heroId } = useParams()
  const { hero, loading, error } = useHerosDetail(heroId)

  return (
    <div className="detail">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        hero && (
          <>
            <HeroBasicData hero={hero} />
            <ListLink
              text="Comics"
              id="comics"
              list={hero?.comics?.items}
            ></ListLink>
            <ListLink
              text="Series"
              id="series"
              list={hero?.series?.items}
            ></ListLink>
            <ListLink
              text="Stories"
              id="stories"
              list={hero?.stories?.items}
            ></ListLink>
            <ListLink
              text="Events"
              id="events"
              list={hero?.events?.items}
            ></ListLink>
          </>
        )
      )}
    </div>
  )
}
