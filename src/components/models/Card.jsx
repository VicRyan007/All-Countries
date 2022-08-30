import React from 'react'
import './paises.css'

export default function Card(props){
    return (
        <div className="col-7 col-lg-3 borda pais">
            <div className="col-7 col-lg-3 borda pais">
                <img src={props.flag} alt="" />
                <span>{props.name}</span>
            </div>
        </div>
    )
}