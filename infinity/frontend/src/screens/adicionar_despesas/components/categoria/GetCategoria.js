import {handleGetAllCategorias} from "../../handles/CategoriasHandles";
import React from "react";


export function GetCategoria({setResponse}){
    return (
        <>
            <button
                className="button"
                onClick={() =>
                    handleGetAllCategorias(
                        setResponse
                    )
            }>
                Listar categorias
            </button>
        </>
    )
}