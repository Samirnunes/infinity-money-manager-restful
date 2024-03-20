import React, {useState} from 'react';
import {InputInsertMeta} from "./components/InputInsertMeta";
import {InputDeleteMeta} from "./components/InputDeleteMeta";
import {ListMeta} from "./components/ListMeta";

const MetasScreen = () => {
    const [response, setResponse] = useState('');

    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'black'}}>Metas</h1>
            <div style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'left'}}>
                <div style={{ marginRight: '20px' }}>
                <InputInsertMeta
                    setResponse={setResponse}
                />
                <br/>
                <InputDeleteMeta
                    setResponse={setResponse}
                />
                <br/>
                <ListMeta
                    setResponse={setResponse}
                />
                </div>
            </div>
            <div style={{display: 'flex', textAlign: 'left', justifyContent: 'center' }}>
                    <pre>{response}</pre>
                </div>
            </div>
    );
};

export default MetasScreen;