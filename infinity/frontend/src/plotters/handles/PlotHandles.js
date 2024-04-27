export const handlePlotMetas = async (setResponse) => {
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
        setResponse(JSON.parse(JSON.stringify(result, null, 2)));
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const handlePlotGastosUnicos = async (setResponse) => {
    try {
        const response = await fetch(
            'http://localhost:8080/api/v1/infinity/adicionar-despesas/get-all-gastos-unicos',
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
        setResponse(JSON.parse(JSON.stringify(result, null, 2)));
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export const handlePlotGastosFixos = async (setResponse) => {
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
        setResponse(JSON.parse(JSON.stringify(result, null, 2)));
    } catch (error) {
        console.error('Error:', error.message);
    }
};