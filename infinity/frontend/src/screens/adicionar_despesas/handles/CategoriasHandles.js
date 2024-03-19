export const handleGetAllCategorias = async (setResponse) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/get-all-categorias', {
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

export const handleInsertCategoria = async (categoriaData, setResponse) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/infinity/adicionar-despesas/insert-categoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                categoria: categoriaData.categoria
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