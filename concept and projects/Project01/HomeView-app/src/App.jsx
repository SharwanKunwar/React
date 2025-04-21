
import './App.css'
import Fotter from './components/Fotter/Fotter'
import Navbar from './components/Header/Navbar'

import { Outlet} from 'react-router'

function App() {
  

  return (
    <>
     <div className='app-outer'>
      <Navbar/>
      <Outlet/>
      <Fotter/>
     </div>
    </>
  )
}

export default App
