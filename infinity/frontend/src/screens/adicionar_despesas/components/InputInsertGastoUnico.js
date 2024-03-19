import React, {useState} from "react";
import {handleInsertChange} from "../../ScreenUtils";
import {handleInsertGastoUnico} from "../handles/GastoUnicoHandles";

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
                       onChange={(e) => handleInsertChange('valor', e.target.value, setInsertGastoUnicoData, insertGastoUnicoData)}
                />
            </label>
            <br/>
            <label>
                Categoria:
                <input type="text"
                       value={insertGastoUnicoData.categoria}
                       onChange={(e) => handleInsertChange('categoria', e.target.value, setInsertGastoUnicoData, insertGastoUnicoData)}
                />
            </label>
            <br/>
            <label>
                Descrição:
                <input type="text"
                       value={insertGastoUnicoData.descricao}
                       onChange={(e) => handleInsertChange('descricao', e.target.value, setInsertGastoUnicoData, insertGastoUnicoData)}
                />
            </label>
            <br/>
            <label>
                Data:
                <input type="date"
                       value={insertGastoUnicoData.data}
                       onChange={(e) => handleInsertChange('data', e.target.value, setInsertGastoUnicoData, insertGastoUnicoData)}
                />
            </label>
            <br/>
            <button
                className="insertGastoUnicoButton"
                onClick={() => handleInsertGastoUnico(insertGastoUnicoData, setResponse)}>
                Adicionar gasto único
            </button>
        </>
    )
}