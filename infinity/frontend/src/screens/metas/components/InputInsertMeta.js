import React, {useState} from "react";
import {handleChange} from "../../ScreenUtils";
import {handleInsertMeta} from "../handles/MetasHandles";
import '../../../App.css'

export function InputInsertMeta({setResponse}){
    const [insertData, setInsertData] = useState({
        nome: "",
        valorAlvo: 0.0,
        valorArrecadado: 0.0,
        prazo: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label style={{ marginRight: '10px' }}>
                <span>Nome:</span>
                <input type="text"
                       value={insertData.nome}
                       onChange={(e) =>
                           handleChange(
                               'nome',
                               e.target.value,
                               insertData,
                               setInsertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor Alvo:</span>
                <input type="number"
                       value={insertData.valorAlvo}
                       onChange={(e) =>
                           handleChange(
                               'valorAlvo',
                               e.target.value,
                               insertData,
                               setInsertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor Arrecadado:</span>
                <input type="number"
                       value={insertData.valorArrecadado}
                       onChange={(e) =>
                           handleChange(
                               'valorArrecadado',
                               e.target.value,
                               insertData,
                               setInsertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Prazo:</span>
                <input type="date"
                       value={insertData.prazo}
                       onChange={(e) =>
                           handleChange(
                               'prazo',
                               e.target.value,
                               insertData,
                               setInsertData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="button"
                onClick={() =>
                    handleInsertMeta(
                        insertData,
                        setResponse
                    )
                }>
                Adicionar meta
            </button>
        </>
    )
}