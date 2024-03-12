export const handleGetAllGastosUnicos = async (setResponse) => {
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

export const handleInsertGastoUnico = async (insertData, setResponse) => {
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

export const handleDeleteGastoUnico = async (deleteData, setResponse) => {
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