import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Intro from './Components/Intro/Intro.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import Menu from './Components/Menu/Menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '',
        element:<Intro/>
      },
      {
        path: '/Home',
        element: <Intro />
      },
      {
        path:'/About',
        element: <About />
      },
      {
        path:'/Contact',
        element: <Contact />
      },
      {
        path:'/Blogs',
        element: <Blogs />
      },
      {
        path: '/Menu',
        element: <Menu/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
