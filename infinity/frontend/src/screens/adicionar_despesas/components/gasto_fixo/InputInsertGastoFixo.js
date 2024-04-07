import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleInsertGastoFixo} from "../../handles/GastoFixoHandles";

export function InputInsertGastoFixo({setResponse, categorias}) {
    const [insertGastoFixoData, setInsertGastoFixoData] = useState({
        valor: 0,
        periodicidade: 'Diária',
        categoria: 'Nenhuma',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    const periodicidades = [
        "Diária", "Semanal", "Mensal", "Bimestral", "Trimestral", "Semestral", "Anual"
    ]

    return (
        <>
            <label>
                <span>Valor:</span>
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
                <span>Periodicidade:</span>
                <select
                    className="droplist"
                    value={insertGastoFixoData.periodicidade}
                    onChange={(e) =>
                        handleChange(
                            'periodicidade',
                            e.target.value,
                            insertGastoFixoData,
                            setInsertGastoFixoData
                        )
                    }
                >
                    {periodicidades.map((periodicidade) => (
                        <option key={periodicidade} value={periodicidade}>
                            {periodicidade}
                        </option>
                    ))}
                </select>
            </label>
            <br/>
            <label>
                <span>Categoria:</span>
                <select
                    className="droplist"
                    value={insertGastoFixoData.categoria}
                    onChange={(e) =>
                        handleChange(
                            "categoria",
                            e.target.value,
                            insertGastoFixoData,
                            setInsertGastoFixoData
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
                <span>Data:</span>
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
                className="button"
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