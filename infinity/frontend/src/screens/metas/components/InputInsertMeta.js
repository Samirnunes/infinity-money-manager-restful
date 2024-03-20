import React, {useState} from "react";
import {handleChange} from "../../ScreenUtils";
import {handleInsertMeta} from "../handles/MetasHandles";


export function InputInsertMeta({setResponse}){
    const [insertData, setInsertData] = useState({
        nome: "",
        valorAlvo: 0.0,
        valorArrecadado: 0.0,
        prazo: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label>
                Nome:
                <input type="text"
                       value={insertData.nome}
                       onChange={(e) =>
                           handleChange(
                               'nome',
                               e.target.value,
                               setInsertData,
                               insertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Valor Alvo:
                <input type="number"
                       value={insertData.valorAlvo}
                       onChange={(e) =>
                           handleChange(
                               'valorAlvo',
                               e.target.value,
                               setInsertData,
                               insertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Valor Arrecadado:
                <input type="number"
                       value={insertData.valorArrecadado}
                       onChange={(e) =>
                           handleChange(
                               'valorArrecadado',
                               e.target.value,
                               setInsertData,
                               insertData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Prazo:
                <input type="date"
                       value={insertData.prazo}
                       onChange={(e) =>
                           handleChange(
                               'prazo',
                               e.target.value,
                               setInsertData,
                               insertData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="insertGastoUnicoButton"
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