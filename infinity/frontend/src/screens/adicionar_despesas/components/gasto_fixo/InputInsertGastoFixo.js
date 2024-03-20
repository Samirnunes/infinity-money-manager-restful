import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleInsertGastoFixo} from "../../handles/GastoFixoHandles";

export function InputInsertGastoFixo({setResponse}) {
    const [insertGastoFixoData, setInsertGastoFixoData] = useState({
        valor: 0,
        periodicidade: 'Mensal',
        categoria: 'Outros',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    return (
        <>
            <label>
                Valor:
                <input type="number"
                       value={insertGastoFixoData.valor}
                       onChange={(e) =>
                           handleChange(
                               'valor',
                               e.target.value,
                               insertGastoFixoData,
                               setInsertGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Periodicidade:
                <input type="text"
                       value={insertGastoFixoData.periodicidade}
                       onChange={(e) =>
                           handleChange(
                               'periodicidade',
                               e.target.value,
                               insertGastoFixoData,
                               setInsertGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Categoria:
                <input type="text"
                       value={insertGastoFixoData.categoria}
                       onChange={(e) =>
                           handleChange(
                               'categoria',
                               e.target.value,
                               insertGastoFixoData,
                               setInsertGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Descrição:
                <input type="text"
                       value={insertGastoFixoData.descricao}
                       onChange={(e) =>
                           handleChange(
                               'descricao',
                               e.target.value,
                               insertGastoFixoData,
                               setInsertGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                Data:
                <input type="date"
                       value={insertGastoFixoData.data}
                       onChange={(e) =>
                           handleChange(
                               'data',
                               e.target.value,
                               insertGastoFixoData,
                               setInsertGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="insertGastoFixoButton"
                onClick={() =>
                    handleInsertGastoFixo(
                        insertGastoFixoData,
                        setResponse
                    )
                }>
                Adicionar gasto fixo
            </button>
        </>
    )
}