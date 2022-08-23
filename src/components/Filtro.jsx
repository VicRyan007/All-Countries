import React, { useState } from "react";


function Filtro() {
    const [inputValue, setInputValue] = useState()
    return (
        <div className="row">
            <div className="col-12 col-lg-10">
                <input value={inputValue} onChange={(valor) => setInputValue(valor.target.value)} type="text"className="form-control" />
            </div>
            <div className="col-12 col-lg-1">
                <strong>Países: 999</strong>
            </div>
            <div className="col-12 col-lg-1">
                <strong>População: 9.000.000</strong>
            </div>
            <p>{inputValue}</p>
        </div>
    )
}

export default Filtro;