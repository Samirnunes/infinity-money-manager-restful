import React, { useState } from 'react';
import { InputInsertGastoUnico } from "./components/InputInsertGastoUnico";
import { InputDeleteGastoUnico } from "./components/InputDeleteGastoUnico";
import { InputInsertCategoria } from "./components/InputInsertCategoria";
import { ListGastoUnico } from "./components/ListGastoUnico";
import { ListCategoria } from "./components/ListCategoria";

const AdicionarDespesasScreen = () => {
    const [response, setResponse] = useState('');

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Adicionar Despesas</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'left' }}>
                <div style={{ marginRight: '20px' }}>
                    <InputInsertGastoUnico
                        setResponse={setResponse}
                    />
                    <br />
                    <InputDeleteGastoUnico
                        setResponse={setResponse}
                    />
                    <br />
                    <ListGastoUnico
                        setResponse={setResponse}
                    />
                </div>
                <div>
                    <InputInsertCategoria
                        setResponse={setResponse}
                    />
                    <br />
                    <ListCategoria
                        setResponse={setResponse}
                    />
                </div>
            </div>
            <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'center' }}>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default AdicionarDespesasScreen;