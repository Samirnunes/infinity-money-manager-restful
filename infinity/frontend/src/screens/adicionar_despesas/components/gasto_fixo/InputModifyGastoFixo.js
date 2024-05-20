import React, {useState} from "react";
import {handleChange} from "../../../ScreenUtils";
import {handleModifyGastoFixo} from "../../handles/GastoFixoHandles";

export function InputModifyGastoFixo({setResponse, categorias}) {
    const [modifyGastoFixoData, setModifyGastoFixoData] = useState({
        id: 0,
        valor: 0,
        periodicidade: 'Diária',
        categoria: categorias[0],
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    const periodicidades = [
        "Diária", "Semanal", "Mensal", "Bimestral", "Trimestral", "Semestral", "Anual"
    ]

    return (
        <>
            <label>
                <span>ID:</span>
                <input type="number"
                       value={modifyGastoFixoData.id}
                       onChange={(e) =>
                           handleChange(
                               'id',
                               e.target.value,
                               modifyGastoFixoData,
                               setModifyGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Valor:</span>
                <input type="number"
                       value={modifyGastoFixoData.valor}
                       onChange={(e) =>
                           handleChange(
                               'valor',
                               e.target.value,
                               modifyGastoFixoData,
                               setModifyGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Periodicidade:</span>
                <select
                    className="droplist"
                    value={modifyGastoFixoData.periodicidade}
                    onChange={(e) =>
                        handleChange(
                            'periodicidade',
                            e.target.value,
                            modifyGastoFixoData,
                            setModifyGastoFixoData
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
                    value={modifyGastoFixoData.categoria}
                    onChange={(e) =>
                        handleChange(
                            "categoria",
                            e.target.value,
                            modifyGastoFixoData,
                            setModifyGastoFixoData
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
                       value={modifyGastoFixoData.descricao}
                       onChange={(e) =>
                           handleChange(
                               'descricao',
                               e.target.value,
                               modifyGastoFixoData,
                               setModifyGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <label>
                <span>Data:</span>
                <input type="date"
                       value={modifyGastoFixoData.data}
                       onChange={(e) =>
                           handleChange(
                               'data',
                               e.target.value,
                               modifyGastoFixoData,
                               setModifyGastoFixoData
                           )
                       }
                />
            </label>
            <br/>
            <button
                className="button"
                onClick={() =>
                    handleModifyGastoFixo(
                        modifyGastoFixoData,
                        setResponse
                    )
                }>
                Modificar gasto fixo
            </button>
        </>
    )
}
