import React from "react"
import './App.css';
import Home from "./components/Home"
import Traveldata from "./data"

function App() {
  const travelExp = Traveldata.map(item => {
    return <Home 
        key={item.id} 
        item={item}
    />
  })
  return (
    <div>
      {travelExp}
    </div>
  )
}

export default App;
