import React, {useState} from 'react';

const Metas = () => {
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

    const handleGetAllMetas = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/metas/get-all-metas', {
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

    const handleInsertMeta = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/metas/insert-meta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    nome: insertData.nome,
                    valorAlvo: insertData.valorAlvo,
                    valorArrecadado: insertData.valorArrecadado,
                    prazo: insertData.prazo,
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

    const handleDeleteMeta= async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/metas/delete-meta', {
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
            console.log(responseBody)
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
        <div style={{backgroundColor: 'white', height: '100vh', textAlign: 'center'}}>
            <h1 style={{color: 'black'}}>Metas</h1>
            <div style={{textAlign: 'left'}}>
                {/* Form for data input */}
                <label>
                    Nome:
                    <input type="text"
                           value={insertData.nome}
                           onChange={(e) => handleInsertChange('nome', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Valor Alvo:
                    <input type="number"
                           value={insertData.valorAlvo}
                           onChange={(e) => handleInsertChange('valorAlvo', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Valor Arrecadado:
                    <input type="number"
                           value={insertData.valorArrecadado}
                           onChange={(e) => handleInsertChange('valorArrecadado', e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Prazo:
                    <input type="date"
                           value={insertData.prazo}
                           onChange={(e) => handleInsertChange('prazo', e.target.value)}
                    />
                </label>
                <br/>
                <button
                    className="insertGastoUnicoButton"
                    onClick={handleInsertMeta}>
                    Adicionar meta
                </button>

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
                    onClick={handleDeleteMeta}>
                    Deletar meta
                </button>

                <br/>
                <br/>

                <button
                    className="getAllGastosUnicosButton"
                    onClick={handleGetAllMetas}>
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

export default Metas;