import React, {useEffect, useState} from 'react';
import {InputInsertGastoUnico} from "./components/gasto_unico/InputInsertGastoUnico";
import {InputDeleteGastoUnico} from "./components/gasto_unico/InputDeleteGastoUnico";
import {InputInsertCategoria} from "./components/categoria/InputInsertCategoria";
import {GetGastoUnico} from "./components/gasto_unico/GetGastoUnico";
import {GetCategoria} from "./components/categoria/GetCategoria";
import {InputDeleteCategoria} from "./components/categoria/InputDeleteCategoria";
import {GetGastoFixo} from "./components/gasto_fixo/GetGastoFixo";
import {InputInsertGastoFixo} from "./components/gasto_fixo/InputInsertGastoFixo";
import {InputDeleteGastoFixo} from "./components/gasto_fixo/InputDeleteGastoFixo";
import {updateCategoriaList} from "./handles/CategoriasHandles";

const AdicionarDespesasScreen = () => {
    const [response, setResponse] = useState('');
    const [categorias, setUpdateCategorias] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await updateCategoriaList(setUpdateCategorias);
        };
        fetchData().then(r => {});
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Adicionar Despesas</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'left' }}>
                <div style={{marginRight: '20px'}}>
                    <h2>Gastos Únicos</h2>
                    <InputInsertGastoUnico
                        setResponse={setResponse}
                        categorias={categorias}
                    />
                    <br/>
                    <InputDeleteGastoUnico
                        setResponse={setResponse}
                    />
                    <br/>
                    <GetGastoUnico
                        setResponse={setResponse}
                    />
                </div>
                <div>
                    <h2>Gastos Fixos</h2>
                    <InputInsertGastoFixo
                        setResponse={setResponse}
                        categorias={categorias}
                    />
                    <br/>
                    <InputDeleteGastoFixo
                        setResponse={setResponse}
                    />
                    <br/>
                    <GetGastoFixo
                        setResponse={setResponse}
                    />
                </div>
                <div>
                    <h2>Categorias</h2>
                    <InputInsertCategoria
                        setResponse={setResponse}
                        setUpdateCategorias={setUpdateCategorias}
                    />
                    <br/>
                    <InputDeleteCategoria
                        setResponse={setResponse}
                    />
                    <br/>
                    <GetCategoria
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