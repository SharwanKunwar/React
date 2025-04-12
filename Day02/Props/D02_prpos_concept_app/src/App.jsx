
import './App.css'
import MyCard from './myComponents/MyCard'

const cardDetails = [
  {
  imgUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
  content: "Props (short for properties) are used to pass data from one component to another in React.\nThey allow components to be dynamic and reusable by giving them input values.",
  MyName: "Sharwan jung kunwar",
  profession: "Developer at unpredictable"
},
{
  imgUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
  content: "React Hooks allow functional components to use state and lifecycle features. Added in React 16.8, they simplify code, remove class usage, and support cleaner logic with hooks like useState, useEffect, and custom hooks.",
  MyName: "Sharwan jung kunwar",
  profession: "Developer at unpredictable"
},
]
function App() {
  

  return (
    <>
    <MyCard Obj = {cardDetails[0]}/>
    <MyCard Obj = {cardDetails[1]}/>
    
    </>
  )
}

export default App
