export const handlePrint = async (toPrint, setResponse) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/infinity/print', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: toPrint,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        setResponse(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const handleGetFilteredGastosUnicos = async (filterData, setResponse) => {
    try {
        const params = new URLSearchParams();

        if (filterData.categoria) {
            params.append('categoria', filterData.categoria);
        }
        if (filterData.descricao) {
            params.append('descricao', filterData.descricao);
        }
        if (filterData.dataFiltro) {
            params.append('dataFiltro', filterData.dataFiltro);
        }

        const response = await fetch(
            `http://localhost:8080/api/v1/infinity/adicionar-despesas/get-filtered-gastos-unicos?${params.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setResponse(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const handleGetFilteredGastosFixos = async (filterData, setResponse) => {
    try {
        const params = new URLSearchParams();

        if (filterData.categoria) {
            params.append('categoria', filterData.categoria);
        }
        if (filterData.descricao) {
            params.append('descricao', filterData.descricao);
        }

        const response = await fetch(
            `http://localhost:8080/api/v1/infinity/adicionar-despesas/get-filtered-gastos-fixos?${params.toString()}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setResponse(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
};