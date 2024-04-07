import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleInsertGastoUnico} from "../../handles/GastoUnicoHandles";

export function InputInsertGastoUnico({setResponse, categorias}) {
    const [insertGastoUnicoData, setInsertGastoUnicoData] = useState({
        valor: 0,
        categoria: 'Nenhuma',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label>
                <span>Valor:</span>
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
                <span>Categoria:</span>
                <select
                    className="droplist"
                    value={insertGastoUnicoData.categoria}
                    onChange={(e) =>
                        handleChange(
                            "categoria",
                            e.target.value,
                            insertGastoUnicoData,
                            setInsertGastoUnicoData
                        )
                    }
                >
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </label>
            <br/>
            <label>
                <span>Descrição:</span>
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
                <span>Data:</span>
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
                className="button"
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