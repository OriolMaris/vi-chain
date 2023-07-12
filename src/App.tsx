import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import HeroDetails from './routes/heroDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'hero/:heroId',
        element: <HeroDetails />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
