// AdicionarDespesas.js
import React, { useState } from 'react';

const AdicionarDespesas = () => {
    const [response, setResponse] = useState('');
    const [formData, setFormData] = useState({
        id: 1,
        valor: 0,
        categoria: 'Outros',
        descricao: '',
        data: new Date().toISOString().split('T')[0],
    });

    const handleGetGastoUnico = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/get-gasto-unico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ id: formData.id }),
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
                    valor: formData.valor,
                    categoria: formData.categoria,
                    descricao: formData.descricao,
                    data: formData.data,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseBody = await response.text();
            if (!responseBody) {
                setResponse('Inserted Gasto Unico Successfully.');
            } else {
                const result = JSON.parse(responseBody);
                setResponse(JSON.stringify(result, null, 2));
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    return (
        <div>
            <h1>Adicionar Despesas Frontend</h1>
            <div>
                {/* Form for data input */}
                <label>
                    ID:
                    <input type="number" value={formData.id} onChange={(e) => handleChange('id', e.target.value)} />
                </label>
                <label>
                    Valor:
                    <input type="number" value={formData.valor} onChange={(e) => handleChange('valor', e.target.value)} />
                </label>
                <label>
                    Categoria:
                    <input type="text" value={formData.categoria} onChange={(e) => handleChange('categoria', e.target.value)} />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={formData.descricao} onChange={(e) => handleChange('descricao', e.target.value)} />
                </label>
                <label>
                    Data:
                    <input type="date" value={formData.data} onChange={(e) => handleChange('data', e.target.value)} />
                </label>

                {/* Buttons for each operation */}
                <button onClick={handleGetGastoUnico}>Get Gasto Unico</button>
                <button onClick={handleInsertGastoUnico}>Insert Gasto Unico</button>
            </div>
            <div>
                <strong>Response:</strong>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default AdicionarDespesas;