
import './App.css'
import About from './components/About/About'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'

function App() {
  

  return (
    <>
        <div id='app-outer'>
          {/* <Navbar/> */}
          <Home/>
          <About/>
        </div>
    </>
  )
}

export default App
