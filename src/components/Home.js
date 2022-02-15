import React from "react"
import './Home.css';

function Home(props){
    return(
        <div className="card">
            <img src={`../images/${props.item.image}`} className="card--image" />
            <h1>{props.item.title}</h1>
            <p>{props.item.location}</p>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Home;