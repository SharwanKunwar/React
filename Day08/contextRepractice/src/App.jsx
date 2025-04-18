
import './App.css'
import Profile02 from './components/Profile02'
import Login02 from './components/Login02'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
     <div id="app-outer">
      <Profile02/>
      <Login02/>
     </div>
    </UserContextProvider>
  )
}

export default App
