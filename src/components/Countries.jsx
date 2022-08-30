import React from "react"
import Card from "./models/Card"
import '../../css/pais.css';


export default function Countries(props){
    return (
        <div className="row container borda justify-content-around">
                {props.listaPaises.map((p,i) => {
                    return <Card key={i} name={p.name} flag={p.flag}/>
                })}
        </div>
    )
}