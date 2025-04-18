
import './App.css'
import SetCardData from './components/Card/SetCard/SetCardData'
import Card from './components/Card/ViewCard/Card'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div id='app-outer'>
        <div id='card-view'>
          <Card/>
        </div>
        
        <div id='set-card'>
        <SetCardData/>
        </div>

      </div>
    </UserContextProvider>
  )
}

export default App
