import {handleGetAllGastosUnicos} from "../../handles/GastoUnicoHandles";
import React from "react";

export function GetGastoUnico({setResponse}){
    return (
        <>
            <button
                className="button"
                onClick={() =>
                    handleGetAllGastosUnicos(
                        setResponse
                    )
            }>
                Listar gastos únicos
            </button>
        </>
    )
}