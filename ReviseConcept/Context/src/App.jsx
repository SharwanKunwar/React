import Card from "./Components/Card"
import CardSet from "./Components/CardSet"
import UserContextProvider from "./Context/UserContextProvider"

function App() {  

  return (
    <div className="bg-black w-full h-full flex justify-center items-center gap-10">
    <UserContextProvider>
    <CardSet/>
    <Card/>
    </UserContextProvider>
    </div>
  )
}

export default App
