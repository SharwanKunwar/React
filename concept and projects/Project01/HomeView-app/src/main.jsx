import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Quotes from './components/Quotes/Quotes.jsx'
import GithubCard from './components/GithubCard/GithubCard.jsx'
import Intro from './components/Intro/Intro.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Intro/>
      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/Quotes',
        element: <Quotes/>
      },
      {
        path: '/GithubCard',
        element: <GithubCard/>
      },
      {
        path: '/About',
        element: <About/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
