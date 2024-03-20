import {handleGetAllMetas} from "../handles/MetasHandles";
import React from "react";


export function ListMeta({setResponse}){
    return (
        <>
            <button
                className="getAllGastosUnicosButton"
                onClick={() =>
                    handleGetAllMetas(
                        setResponse
                    )
                }>
                Listar metas
            </button>
        </>
    )
}