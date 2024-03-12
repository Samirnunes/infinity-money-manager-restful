// AdicionarDespesasScreen.js
import React, { useState } from 'react';
import {handleInsertChange, handleDeleteChange} from "../ScreenUtils"
import {handleGetAllGastosUnicos, handleInsertGastoUnico, handleDeleteGastoUnico} from "./AdicionarDespesasHandles";

const AdicionarDespesasScreen = () => {
    const [response, setResponse] = useState('');
    const [insertData, setInsertData] = useState({
        valor: 0,
        categoria: 'Outros',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });
    const [deleteData, setDeleteData] = useState({
        id: 0,
    });

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Adicionar Despesas</h1>
            <div style={{textAlign: 'left'}}>
                {/* Form for data input */}
                <label>
                    Valor:
                    <input type="number"
                           value={insertData.valor}
                           onChange={(e)=> handleInsertChange('valor', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Categoria:
                    <input type="text"
                           value={insertData.categoria}
                           onChange={(e)=> handleInsertChange('categoria', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Descrição:
                    <input type="text"
                           value={insertData.descricao}
                           onChange={(e)=> handleInsertChange('descricao', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <label>
                    Data:
                    <input type="date"
                           value={insertData.data}
                           onChange={(e)=> handleInsertChange('data', e.target.value, setInsertData, insertData)}
                    />
                </label>
                <br/>
                <button
                    className="insertGastoUnicoButton"
                    onClick={() => handleInsertGastoUnico(insertData, setResponse)}>
                    Adicionar gasto único
                </button>
                <br/>
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
                    onClick={()=> handleDeleteGastoUnico(deleteData, setResponse)}>
                    Deletar gasto único
                </button>
                <br/>
                <br/>
                <button
                    className="getAllGastosUnicosButton"
                    onClick={()=> handleGetAllGastosUnicos(setResponse)}>
                    Listar gastos únicos
                </button>
            </div>
            <div style={{textAlign: 'left'}}>
                <strong>Response:</strong>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default AdicionarDespesasScreen;