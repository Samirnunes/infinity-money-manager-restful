import React, { useState } from 'react';

const App = () => {
  const [toPrint, setToPrint] = useState('');
  const [response, setResponse] = useState('');

  const handlePrint = async () => {
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

  return (
      <div>
        <h1>Spring Boot Kotlin Frontend</h1>
        <textarea
            placeholder="Enter text to print"
            value={toPrint}
            onChange={(e) => setToPrint(e.target.value)}
        />
        <button onClick={handlePrint}>Print Something</button>
        <div>
          <strong>Response:</strong> {response}
        </div>
      </div>
  );
};

export default App;