import React, {useState} from "react";
import {handleDeleteChange} from "../../ScreenUtils";
import {handleDeleteGastoUnico} from "../handles/GastoUnicoHandles";

export function InputDeleteGastoUnico({setResponse}){
    const [deleteGastoUnicoData, setDeleteGastoUnicoData] = useState({
        id: 0,
    });

    return (
        <>
            <label>
                Excluir ID:
                <input type="number"
                       value={deleteGastoUnicoData.id}
                       onChange={(e) => handleDeleteChange('id', e.target.value, setDeleteGastoUnicoData, deleteGastoUnicoData)}
                />
            </label>
            < br/>
            <button
                className="deleteGastoUnicoButton"
                onClick={() => handleDeleteGastoUnico(deleteGastoUnicoData, setResponse)}>
                Deletar gasto único
            </button>
        </>
    )
}