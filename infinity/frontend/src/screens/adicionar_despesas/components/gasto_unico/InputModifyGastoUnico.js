import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleModifyGastoUnico} from "../../handles/GastoUnicoHandles";

export function InputModifyGastoUnico({setResponse, categorias}) {
    const [modifyGastoUnicoData, setModifyGastoUnicoData] = useState({
        id: 0,
        valor: 0,
        categoria: categorias[0],
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label>
                <span>ID:</span>
                <input type="number"
                       value={modifyGastoUnicoData.id}
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               modifyGastoUnicoData,
                               setModifyGastoUnicoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor:</span>
                <input type="number"
                       value={modifyGastoUnicoData.valor}
                       onChange={(e) =>
                           handleChange(
                               'valor',
                               e.target.value,
                               modifyGastoUnicoData,
                               setModifyGastoUnicoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Categoria:</span>
                <select
                    className="droplist"
                    value={modifyGastoUnicoData.categoria}
                    onChange={(e) =>
                        handleChange(
                            "categoria",
                            e.target.value,
                            modifyGastoUnicoData,
                            setModifyGastoUnicoData
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
                       value={modifyGastoUnicoData.descricao}
                       onChange={(e) =>
                           handleChange(
                               'descricao',
                               e.target.value,
                               modifyGastoUnicoData,
                               setModifyGastoUnicoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Data:</span>
                <input type="date"
                       value={modifyGastoUnicoData.data}
                       onChange={(e) =>
                           handleChange(
                               'data',
                               e.target.value,
                               modifyGastoUnicoData,
                               setModifyGastoUnicoData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="button"
                onClick={() =>
                    handleModifyGastoUnico(
                        modifyGastoUnicoData,
                        setResponse
                    )
                }>
                Modificar gasto único
            </button>
        </>
    )
}
