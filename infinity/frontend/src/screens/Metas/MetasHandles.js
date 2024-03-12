export const handleGetAllMetas = async (setResponse) => {
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

export const handleInsertMeta = async (insertData, setResponse) => {
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

export const handleDeleteMeta= async (deleteData, setResponse) => {
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
