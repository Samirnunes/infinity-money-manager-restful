import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleDeleteGastoUnico} from "../../handles/GastoUnicoHandles";

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
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               deleteGastoUnicoData,
                               setDeleteGastoUnicoData
                           )
                }
                />
            </label>
            < br/>
            <button
                className="deleteGastoUnicoButton"
                onClick={() =>
                    handleDeleteGastoUnico(
                        deleteGastoUnicoData,
                        setResponse
                    )
            }>
                Deletar gasto único
            </button>
        </>
    )
}