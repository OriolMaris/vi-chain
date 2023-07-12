import { useEffect, useState } from 'react'
import { getCharacters } from '../services/apiHeros'
import { Hero, HeroListResponse } from '../interfaces/hero'

const useHerosList = (page: number) => {
  const [heros, setHeros] = useState<Hero[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setLoading(true)
    getCharacters(page)
      .then((data: HeroListResponse) => {
        setHeros(data.results)
        console.log({ data })
      })
      .catch((error) => setError(error))
    setLoading(false)
  }, [page])

  return { heros, loading, error }
}

export default useHerosList
