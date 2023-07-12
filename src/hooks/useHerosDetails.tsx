import { useEffect, useState } from 'react'
import { getCharacterId } from '../services/apiHeros'
import { Hero, HeroListResponse } from '../interfaces/hero'

const useHerosDetail = (heroId?: string) => {
  const [hero, setHero] = useState<Hero>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setLoading(true)
    heroId &&
      getCharacterId(+heroId)
        .then((data: HeroListResponse) => {
          setHero(data.results[0])
        })
        .catch((error) => setError(error))
    setLoading(false)
  }, [heroId])

  return { hero, loading, error }
}

export default useHerosDetail
