import React, {useState} from 'react';
import {InputInsertMeta} from "./components/InputInsertMeta";
import {InputDeleteMeta} from "./components/InputDeleteMeta";
import {InputModifyMeta} from "./components/InputModifyMeta";
import {GetMeta} from "./components/GetMeta";
import {NavLink} from "react-router-dom";

const MetasScreen = () => {
    const [response, setResponse] = useState('');

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Metas</h1>
            <div style={{display: 'flex', justifyContent: 'space-evenly', textAlign: 'left'}}>
                <ul className="list-group">
                    <li className="list-item-larger">
                        <InputInsertMeta
                            setResponse={setResponse}
                        />
                    </li>
                    <li className="list-item-larger">
                        <InputDeleteMeta
                            setResponse={setResponse}
                        />
                    </li>
                    <li className="list-item-larger">
                        <InputModifyMeta
                            setResponse={setResponse}
                        />
                    </li>
                    <li className="list-item-larger">
                        <GetMeta
                            setResponse={setResponse}
                        />
                    </li>
                </ul>
            </div>
            <div style={{display: 'flex', textAlign: 'left', justifyContent: 'center'}}>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default MetasScreen;
