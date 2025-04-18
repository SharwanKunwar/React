import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div id='main'>
          <Login/>
          <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
