export const updateCategoriaList = async (setUpdateCategorias) => {
    try {
        const categoriasList = await fetchAllCategorias();
        setUpdateCategorias(categoriasList);
    } catch (error) {
        console.error("Erro ao atualizar as categorias:", error);
    }
}

export const fetchAllCategorias = async() => {
    const response = await fetch(
        'http://localhost:8080/api/v1/infinity/adicionar-despesas/get-all-categorias',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export const handleGetAllCategorias = async (setResponse) => {
    try {
        const result = await fetchAllCategorias();
        setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const handleInsertCategoria = async (insertCategoriaData, setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/insert-categoria',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                categoria: insertCategoriaData.categoria
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

export const handleDeleteCategoria = async (deleteCategoriaData, setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/delete-categoria',
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    categoria: deleteCategoriaData.categoria
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