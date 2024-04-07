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
                <span>Excluir ID:</span>
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
                className="button"
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