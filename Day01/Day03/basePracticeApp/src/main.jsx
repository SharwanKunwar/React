import { Children } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function myApp(){
//   return(
//     <div>
//       <h2>Love</h2>
//       <p>This is the wanna be life</p>
//     </div>
//   )
// }

// const reactElement = {
//   type: "h1",
//   attributes: {
//     id: "myName",
//     class: "h1Text",
//     color: "red"
//   },
//   text: "i am the h1 one"
// }

// //out knowledge
// const jayMahakal = (
//   <h1 id='name' className='text'>This is h1 do you see me</h1>
// )

//how react works

// const reactElement = React.createElement("h1",{id: "name",className: "text",})
// const reactElement = React.createElement('a',{href: 'https://google.com', id: 'name',className: 'text'},'click me')


createRoot(document.getElementById('root')).render(
  
  // myApp()
  // <reactElement/>
  // jayMahakal
  // reactElement
  <App />
  
)

// ReactDOM.createRoot(document.querySelector("#root"))
// .render(
//   <reactElement/>
// )
