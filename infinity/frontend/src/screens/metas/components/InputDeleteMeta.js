import {handleChange} from "../../ScreenUtils";
import {handleDeleteMeta} from "../handles/MetasHandles";
import React, {useState} from "react";
import '../../../App.css'

export function InputDeleteMeta({setResponse}){

    const [deleteData, setDeleteData] = useState({
        id: 0,
    });

    return (
        <>
            <label>
                <span>Excluir ID:</span>
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
            <br/>
            <button
                className="button"
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