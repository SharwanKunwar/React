
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login05 from './components/Login05'
import Profile05 from './components/Profile05'

function App() {

  return (
    <UserContextProvider>
      <Login05/>
      <Profile05/>
    </UserContextProvider>
  )
}

export default App
