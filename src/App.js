import React from "react"
import './App.css';
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Header from "./components/Header"
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
      < Header />
      < Navigation />
      {travelExp}
      < Footer />
    </div>
  )
}

export default App;
