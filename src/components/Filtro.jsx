import React, { useState } from "react";


function Filtro(props) {
    
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(event){
        setInputValue(event.target.value)
        props.onChangeFilterValue(event.target.value)
    }


    return (
        <div className="row">
            <div className="col-12 col-lg-10">
                <input value={inputValue} onChange={(handleInputChange)} type="text"className="form-control" />
            </div>
            <div className="col-12 col-lg-1">
                <strong>Países: {props.totalPaises}</strong>
            </div>
            <div className="col-12 col-lg-1">
                <strong>População: {props.populacaoTotal}</strong>
            </div>
        </div>
    )
}

export default Filtro;