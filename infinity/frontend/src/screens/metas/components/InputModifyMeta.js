import React, {useState} from "react";
import {handleChange} from "../../ScreenUtils";
import {handleModifyMeta} from "../handles/MetasHandles";
import '../../../App.css'

export function InputModifyMeta({setResponse}){
    const [modifyData, setModifyData] = useState({
        id: "",
        nome: "",
        valorAlvo: 0.0,
        valorArrecadado: 0.0,
        prazo: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label style={{ marginRight: '10px' }}>
                <span>ID:</span>
                <input type="text"
                       value={modifyData.id}
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               modifyData,
                               setModifyData
                           )
                       }
                />
            </label>
            <br/>
            <label style={{ marginRight: '10px' }}>
                <span>Nome:</span>
                <input type="text"
                       value={modifyData.nome}
                       onChange={(e) =>
                           handleChange(
                               'nome',
                               e.target.value,
                               modifyData,
                               setModifyData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor Alvo:</span>
                <input type="number"
                       value={modifyData.valorAlvo}
                       onChange={(e) =>
                           handleChange(
                               'valorAlvo',
                               e.target.value,
                               modifyData,
                               setModifyData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor Arrecadado:</span>
                <input type="number"
                       value={modifyData.valorArrecadado}
                       onChange={(e) =>
                           handleChange(
                               'valorArrecadado',
                               e.target.value,
                               modifyData,
                               setModifyData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Prazo:</span>
                <input type="date"
                       value={modifyData.prazo}
                       onChange={(e) =>
                           handleChange(
                               'prazo',
                               e.target.value,
                               modifyData,
                               setModifyData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="button"
                onClick={() =>
                    handleModifyMeta(
                        modifyData,
                        setResponse
                    )
                }>
                Modificar meta
            </button>
        </>
    )
}
