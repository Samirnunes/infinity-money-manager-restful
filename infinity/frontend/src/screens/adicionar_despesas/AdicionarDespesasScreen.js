import React, {useState} from 'react';
import {InputInsertGastoUnico} from "./components/gasto_unico/InputInsertGastoUnico";
import {InputDeleteGastoUnico} from "./components/gasto_unico/InputDeleteGastoUnico";
import {InputInsertCategoria} from "./components/categoria/InputInsertCategoria";
import {ListGastoUnico} from "./components/gasto_unico/ListGastoUnico";
import {ListCategoria} from "./components/categoria/ListCategoria";
import {InputDeleteCategoria} from "./components/categoria/InputDeleteCategoria";
import {ListGastoFixo} from "./components/gasto_fixo/ListGastoFixo";
import {InputInsertGastoFixo} from "./components/gasto_fixo/InputInsertGastoFixo";
import {InputDeleteGastoFixo} from "./components/gasto_fixo/InputDeleteGastoFixo";

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
                    <InputInsertGastoFixo
                        setResponse={setResponse}
                    />
                    <br/>
                    <InputDeleteGastoFixo
                        setResponse={setResponse}
                    />
                    <br/>
                    <ListGastoFixo
                        setResponse={setResponse}
                    />
                </div>
                <div>
                    <InputInsertCategoria
                        setResponse={setResponse}
                    />
                    <br />
                    <InputDeleteCategoria
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