import {handleGetAllCategorias} from "../../handles/CategoriasHandles";
import React from "react";


export function ListCategoria({setResponse}){
    return (
        <>
            <button
                className="getAllCategoriasButton"
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