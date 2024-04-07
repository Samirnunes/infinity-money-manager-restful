import {handleGetAllMetas} from "../handles/MetasHandles";
import React from "react";
import '../../../App.css'


export function GetMeta({setResponse}){
    return (
        <>
            <button
                className="button"
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