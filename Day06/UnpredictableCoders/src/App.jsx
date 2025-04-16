
import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Fotter from './components/Fotter/Fotter'


function App() {


  

  return (
    <div id='main'>
      <Navbar/>
      <Outlet/>
      <Fotter/>
    </div>
  )
}

export default App
