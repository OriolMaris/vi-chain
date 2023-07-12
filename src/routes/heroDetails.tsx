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
            <ListLink text="Comics" list={hero?.comics?.items}></ListLink>
            <ListLink text="Series" list={hero?.series?.items}></ListLink>
            <ListLink text="Stories" list={hero?.stories?.items}></ListLink>
            <ListLink text="Events" list={hero?.events?.items}></ListLink>
          </>
        )
      )}
    </div>
  )
}
