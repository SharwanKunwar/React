
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import TakeData from './components/TakeData'
import View from './components/View'

function App() {

  return (
    <UserContextProvider>
      <TakeData/>
      <View/>
    </UserContextProvider>
  )
}

export default App
