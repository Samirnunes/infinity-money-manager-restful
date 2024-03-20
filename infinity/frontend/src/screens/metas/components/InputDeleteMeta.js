import {handleChange} from "../../ScreenUtils";
import {handleDeleteMeta} from "../handles/MetasHandles";
import React, {useState} from "react";


export function InputDeleteMeta({setResponse}){

    const [deleteData, setDeleteData] = useState({
        id: 0,
    });

    return (
        <>
            <label>
                Excluir ID:
                <input type="number"
                       value={deleteData.id}
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               setDeleteData,
                               deleteData
                           )
                       }
                />
            </label>
            <button
                className="deleteGastoUnicoButton"
                onClick={() =>
                    handleDeleteMeta(
                        deleteData,
                        setResponse
                    )
                }>
                Deletar meta
            </button>
        </>
    )
}