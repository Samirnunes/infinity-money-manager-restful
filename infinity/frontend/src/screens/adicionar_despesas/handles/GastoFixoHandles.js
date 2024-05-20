export const handleGetAllGastosFixos = async (setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/get-all-gastos-fixos',
            {
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

export const handleInsertGastoFixo = async (insertGastoFixoData, setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/insert-gasto-fixo',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                periodicidade: insertGastoFixoData.periodicidade,
                valor: insertGastoFixoData.valor,
                categoria: insertGastoFixoData.categoria,
                descricao: insertGastoFixoData.descricao,
                data: insertGastoFixoData.data,
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

export const handleModifyGastoFixo = async (modifyGastoFixoData, setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/modify-gasto-fixo',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                id: modifyGastoFixoData.id,
                periodicidade: modifyGastoFixoData.periodicidade,
                valor: modifyGastoFixoData.valor,
                categoria: modifyGastoFixoData.categoria,
                descricao: modifyGastoFixoData.descricao,
                data: modifyGastoFixoData.data,
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

export const handleDeleteGastoFixo = async (deleteGastoFixoData, setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/delete-gasto-fixo',
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    id: deleteGastoFixoData.id
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
