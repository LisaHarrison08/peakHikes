import React from "react"
import './Home.css';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col m-4">
                    <img src={`../images/${props.item.image}`} className="card--image" />
                </div>
                <div className="col m-8">
                    <div className="card--text">
                        <h1>{props.item.title}</h1>
                        <p>{props.item.location}</p>
                        <p>{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;

// <div className="container">
        //     <div className="card">
        //             <img src={`../images/${props.item.image}`} className="card--image"/>
        //         <div className="card--text">
        //             <h1>{props.item.title}</h1>
        //             <p>{props.item.location}</p>
        //             <p>{props.item.description}</p>
        //         </div>
        //     </div>

        // </div>