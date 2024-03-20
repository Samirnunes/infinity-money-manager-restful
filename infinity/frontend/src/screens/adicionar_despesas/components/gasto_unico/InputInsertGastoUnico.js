import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleInsertGastoUnico} from "../../handles/GastoUnicoHandles";

export function InputInsertGastoUnico({setResponse}) {
    const [insertGastoUnicoData, setInsertGastoUnicoData] = useState({
        valor: 0,
        categoria: 'Outros',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label>
                Valor:
                <input type="number"
                       value={insertGastoUnicoData.valor}
                       onChange={(e) =>
                           handleChange(
                               'valor',
                               e.target.value,
                               insertGastoUnicoData,
                               setInsertGastoUnicoData
                           )
                }
                />
            </label>
            <br/>
            <label>
                Categoria:
                <input type="text"
                       value={insertGastoUnicoData.categoria}
                       onChange={(e) =>
                           handleChange(
                               'categoria',
                               e.target.value,
                               insertGastoUnicoData,
                               setInsertGastoUnicoData
                           )
                }
                />
            </label>
            <br/>
            <label>
                Descrição:
                <input type="text"
                       value={insertGastoUnicoData.descricao}
                       onChange={(e) =>
                           handleChange(
                               'descricao',
                               e.target.value,
                               insertGastoUnicoData,
                               setInsertGastoUnicoData
                           )
                }
                />
            </label>
            <br/>
            <label>
                Data:
                <input type="date"
                       value={insertGastoUnicoData.data}
                       onChange={(e) =>
                           handleChange(
                               'data',
                               e.target.value,
                               insertGastoUnicoData,
                               setInsertGastoUnicoData
                           )
                }
                />
            </label>
            <br/>
            <button
                className="insertGastoUnicoButton"
                onClick={() =>
                    handleInsertGastoUnico(
                        insertGastoUnicoData,
                        setResponse
                    )
            }>
                Adicionar gasto único
            </button>
        </>
    )
}