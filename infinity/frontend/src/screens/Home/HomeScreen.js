import React, {useState} from "react";
import {handlePrint} from "./HomeHandles";

const HomeScreen = () => {
    const [toPrint, setToPrint] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div>
            <h1>Spring Boot Kotlin Frontend</h1>
            <textarea
                placeholder="Enter text to print"
                value={toPrint}
                onChange={(e) => setToPrint(e.target.value)}
            />
            <button className="Print" onClick={() => handlePrint(toPrint, setResponse)}>
                Print Something
            </button>
            <div>
                <strong>Response:</strong> {response}
            </div>
        </div>
    );
};

export default HomeScreen;



