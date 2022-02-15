import React from "react"


function Home(props){
    return(
        <div className="card">
            <img src={`../images/${props.image}`} className="card--image" />
            <h1>{props.title}</h1>
            <p>{props.location}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Home;