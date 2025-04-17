import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Resource from './components/Resource/Resource.jsx'
import Platform from './components/Platform/Platform.jsx'
import Intro from './components/Intro/Intro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Intro/>
      },
      {
        path: '/Platform',
        element: <Platform/>
      },
      {
        path: '/Resource',
        element: <Resource/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
