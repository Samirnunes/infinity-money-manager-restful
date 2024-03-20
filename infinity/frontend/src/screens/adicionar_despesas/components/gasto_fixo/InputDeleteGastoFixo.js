import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleDeleteGastoFixo} from "../../handles/GastoFixoHandles";

export function InputDeleteGastoFixo({setResponse}){
    const [deleteGastoFixoData, setDeleteGastoFixoData] = useState({
        id: 0,
    });

    return (
        <>
            <label>
                Excluir ID:
                <input type="number"
                       value={deleteGastoFixoData.id}
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               deleteGastoFixoData,
                               setDeleteGastoFixoData
                           )
                       }
                />
            </label>
            < br/>
            <button
                className="deleteGastoFixoButton"
                onClick={() =>
                    handleDeleteGastoFixo(
                        deleteGastoFixoData,
                        setResponse
                    )
                }>
                Deletar gasto fixo
            </button>
        </>
    )
}