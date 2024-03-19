import {handleGetAllGastosUnicos} from "../handles/GastoUnicoHandles";
import React from "react";

export function ListGastoUnico({setResponse}){
    return (
        <>
            <button
                className="getAllGastosUnicosButton"
                onClick={() => handleGetAllGastosUnicos(setResponse)}>
                Listar gastos únicos
            </button>
        </>
    )
}