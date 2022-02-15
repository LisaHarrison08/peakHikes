import React from "react"
import './App.css';
import Home from "./components/Home"
import Traveldata from "./data"

function App() {
  const travelExp = Traveldata.map(item => {
    return <Home 
        key={item.id} 
        title={item.title} 
        location={item.location} 
        startDate={item.startDate} 
        endDate={item.endDate} 
        description={item.description} 
        image={item.image} 
        description={item.description}
    />
  })
  return (
    <div>
      {travelExp}
    </div>
  )
}

export default App;
