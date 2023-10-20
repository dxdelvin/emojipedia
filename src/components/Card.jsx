import React from "react";

function Card(props){
    return(
        <div>
            <dl className="card">
            <dt>
            <span>{props.emoji}</span>
                <h2>{props.title}</h2>
                <p>{props.info}</p>
            </dt>
            </dl>
        </div>
    )
}

export default Card