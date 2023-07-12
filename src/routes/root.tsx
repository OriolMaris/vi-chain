import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import useHerosList from '../hooks/useHerosList'
import HerosList from '../components/herosList'

export default function Root() {
  const [page, setPage] = useState<number>(0)
  const { heros, loading, error } = useHerosList(page)

  return (
    <>
      <div id="sidebar">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          heros && (
            <>
              <HerosList heros={heros} />
              <div>
                <button
                  onClick={() => setPage((prev) => prev - 1)}
                  disabled={page <= 0}
                >
                  Prev Page
                </button>
                page {page}
                <button onClick={() => setPage((prev) => prev + 1)}>
                  Next Page
                </button>
              </div>
            </>
          )
        )}
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
