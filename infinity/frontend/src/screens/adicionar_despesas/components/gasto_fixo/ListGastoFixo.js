import React from "react";
import {handleGetAllGastosFixos} from "../../handles/GastoFixoHandles";

export function ListGastoFixo({setResponse}){
    return (
        <>
            <button
                className="getAllGastosFixosButton"
                onClick={() =>
                    handleGetAllGastosFixos(
                        setResponse
                    )
                }>
                Listar gastos fixos
            </button>
        </>
    )
}