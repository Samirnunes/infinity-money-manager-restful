// AdicionarDespesas.js
import React, { useState } from 'react';

const AdicionarDespesas = () => {
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

    const handleGetAllGastosUnicos = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/get-all-gastos-unicos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setResponse(JSON.stringify(result, null, 2));
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleInsertGastoUnico = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/insert-gasto-unico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    valor: insertData.valor,
                    categoria: insertData.categoria,
                    descricao: insertData.descricao,
                    data: insertData.data,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseBody = await response.text();
            setResponse(responseBody)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleDeleteGastoUnico = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/delete-gasto-unico', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    id: deleteData.id
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseBody = await response.text();
            setResponse(responseBody)
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleInsertChange = (field, value) => {
        setInsertData({
            ...insertData,
            [field]: value,
        });
    };

    const handleDeleteChange = (field, value) => {
        setDeleteData({
            ...deleteData,
            [field]: value,
        });
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Adicionar Despesas</h1>
            <div style={{textAlign: 'left'}}>
                {/* Form for data input */}
                <label>
                    Valor:
                    <input type="number"
                           value={insertData.valor}
                           onChange={(e) => handleInsertChange('valor', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Categoria:
                    <input type="text"
                           value={insertData.categoria}
                           onChange={(e) => handleInsertChange('categoria', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Descrição:
                    <input type="text"
                           value={insertData.descricao}
                           onChange={(e) => handleInsertChange('descricao', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Data:
                    <input type="date"
                           value={insertData.data}
                           onChange={(e) => handleInsertChange('data', e.target.value)}
                    />
                </label>
                <br/>
                <button className="insertGastoUnicoButton" onClick={handleInsertGastoUnico}>Adicionar Gasto Único
                </button>
                <br/>
                <br/>
                <br/>
                <label>
                    Excluir ID:
                    <input type="number"
                           value={deleteData.id}
                           onChange={(e) => handleDeleteChange('id', e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                <button
                    className="deleteGastoUnicoButton"
                    onClick={handleDeleteGastoUnico}>
                    Deletar Gasto Único
                </button>
                <br/>
                <br/>
                <button
                    className="getAllGastosUnicosButton"
                    onClick={handleGetAllGastosUnicos}>
                    Listar Gastos Únicos
                </button>
            </div>
            <div style={{textAlign: 'left'}}>
                <strong>Response:</strong>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default AdicionarDespesas;