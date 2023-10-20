import React from "react";
import Card from "./Card"
import emojisdata from "../emojisdata"

function emoji(e){
    return <Card 
    key={e.id}
    emoji={e.emoji}
    title={e.title}
    info={e.info}
    />;
}

function App(){
    return <div>
        <div className="title"><h1>😃 EMOJIPEDIA 😃</h1></div>
        <div className="centerAlign">
        {emojisdata.map(emoji)}
        </div>
    </div>
}

let meaningTxt = emojisdata.map((e)=>{return e.info})
meaningTxt.map((e)=>{e.substring(0,100)})


console.log(meaningTxt)

export default App