import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AnotherScreen from './AnotherScreen';
import './App.css';

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
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/red">Another screen</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/red" element={<AnotherScreen />} />
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>Spring Boot Kotlin Frontend</h1>
                                <textarea
                                    placeholder="Enter text to print"
                                    value={toPrint}
                                    onChange={(e) => setToPrint(e.target.value)}
                                />
                                <button className="button1" onClick={handlePrint}>
                                    Print Something
                                </button>
                                <div>
                                    <strong>Response:</strong> {response}
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;