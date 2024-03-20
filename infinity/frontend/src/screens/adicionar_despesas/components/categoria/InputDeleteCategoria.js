import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleDeleteGastoUnico} from "../../handles/GastoUnicoHandles";
import {handleDeleteCategoria} from "../../handles/CategoriasHandles";

export function InputDeleteCategoria({setResponse}){
    const [deleteCategoriaData, setDeleteCategoriaData] = useState({
        categoria: "",
    });

    return (
        <>
            <label>
                Categoria a excluir:
                <input type="text"
                       value={deleteCategoriaData.categoria}
                       onChange={(e) =>
                           handleChange(
                               'categoria',
                               e.target.value,
                               deleteCategoriaData,
                               setDeleteCategoriaData
                           )
                       }
                />
            </label>
            < br/>
            <button
                className="deleteCategoriaButton"
                onClick={() =>
                    handleDeleteCategoria(
                        deleteCategoriaData,
                        setResponse
                    )
                }>
                Deletar categoria
            </button>
        </>
    )
}