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