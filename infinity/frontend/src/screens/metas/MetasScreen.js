import React, {useState} from 'react';
import {handleInsertChange, handleDeleteChange} from "../ScreenUtils"
import {handleGetAllMetas, handleInsertMeta, handleDeleteMeta} from "./MetasHandles";

const MetasScreen = () => {
    const [response, setResponse] = useState('');
    const [insertData, setInsertData] = useState({
        nome: "",
        valorAlvo: 0.0,
        valorArrecadado: 0.0,
        prazo: new Date().toISOString().split('T')[0],
    });
    const [deleteData, setDeleteData] = useState({
        id: 0,
    });

    return (
        <div style={{backgroundColor: 'white', height: '100vh', textAlign: 'center'}}>
            <h1 style={{color: 'black'}}>Metas</h1>
            <div style={{textAlign: 'left'}}>
                {/* Form for data input */}
                <label>
                    Nome:
                    <input type="text"
                           value={insertData.nome}
                           onChange={(e)=> handleInsertChange('nome', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Valor Alvo:
                    <input type="number"
                           value={insertData.valorAlvo}
                           onChange={(e)=> handleInsertChange('valorAlvo', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Valor Arrecadado:
                    <input type="number"
                           value={insertData.valorArrecadado}
                           onChange={(e)=> handleInsertChange('valorArrecadado', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Prazo:
                    <input type="date"
                           value={insertData.prazo}
                           onChange={(e)=> handleInsertChange('prazo', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <button
                    className="insertGastoUnicoButton"
                    onClick={() => handleInsertMeta(insertData, setResponse)}>
                    Adicionar meta
                </button>

                <br/>
                <br/>

                <label>
                    Excluir ID:
                    <input type="number"
                           value={deleteData.id}
                           onChange={(e)=> handleDeleteChange('id', e.target.value, setDeleteData, deleteData)}
                    />
                </label>
                <br/>
                <br/>
                <button
                    className="deleteGastoUnicoButton"
                    onClick={() => handleDeleteMeta(deleteData, setResponse)}>
                    Deletar meta
                </button>

                <br/>
                <br/>

                <button
                    className="getAllGastosUnicosButton"
                    onClick={() => handleGetAllMetas(setResponse)}>
                    Listar metas
                </button>

                <div style={{textAlign: 'left'}}>
                    <strong>Response:</strong>
                    <pre>{response}</pre>
                </div>
            </div>
        </div>
    );
};

export default MetasScreen;