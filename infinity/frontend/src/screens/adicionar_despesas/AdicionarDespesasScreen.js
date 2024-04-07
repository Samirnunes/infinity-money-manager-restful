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
import {InputInsertMeta} from "../metas/components/InputInsertMeta";
import {InputDeleteMeta} from "../metas/components/InputDeleteMeta";
import {GetMeta} from "../metas/components/GetMeta";

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
                    <ul className="list-group">
                        <h2>Gastos Únicos</h2>
                        <li className="list-item-larger">
                            <InputInsertGastoUnico
                                setResponse={setResponse}
                                categorias={categorias}
                            />
                        </li>
                        <li className="list-item-larger">
                            <InputDeleteGastoUnico
                                setResponse={setResponse}
                            />
                        </li>
                        <li className="list-item-larger">
                            <GetGastoUnico
                                setResponse={setResponse}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="list-group">
                        <h2>Gastos Fixos</h2>
                        <li className="list-item-larger">
                            <InputInsertGastoFixo
                                setResponse={setResponse}
                                categorias={categorias}
                            />
                        </li>
                        <li className="list-item-larger">
                            <InputDeleteGastoFixo
                                setResponse={setResponse}
                            />
                        </li>
                        <li className="list-item-larger">
                            <GetGastoFixo
                                setResponse={setResponse}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="list-group">
                        <h2>Categorias</h2>
                        <li className="list-item-larger">
                            <InputInsertCategoria
                                setResponse={setResponse}
                                setUpdateCategorias={setUpdateCategorias}
                            />
                        </li>
                        <li className="list-item-larger">
                            <InputDeleteCategoria
                                setResponse={setResponse}
                            />
                        </li>
                        <li className="list-item-larger">
                            <GetCategoria
                                setResponse={setResponse}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{display: 'flex', textAlign: 'left', justifyContent: 'center'}}>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default AdicionarDespesasScreen;