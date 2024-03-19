import {handleInsertChange} from "../../ScreenUtils";
import {handleInsertCategoria} from "../handles/CategoriasHandles";
import React, {useState} from "react";


export function InputInsertCategoria({setResponse}){
    const [insertCategoriaData, setInsertCategoriaData] = useState({
        categoria: 'Outros',
    });

    return (
        <>
            <label>
                Nova categoria:
                <input type="text"
                       value={insertCategoriaData.categoria}
                       onChange={(e) => handleInsertChange('categoria', e.target.value, setInsertCategoriaData, insertCategoriaData)}
                />
            </label>
            <br/>
            <button
                className="insertCategoriaButton"
                onClick={() => handleInsertCategoria(insertCategoriaData, setResponse)}>
                Adicionar nova categoria
            </button>
        </>
    )
}