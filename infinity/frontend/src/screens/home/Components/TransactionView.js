import React, { useEffect, useRef, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import {handlePlotGastosFixos, handlePlotGastosUnicos} from "../../../plotters/handles/PlotHandles";
import TransactionCard from "./TransactionCard";
import TransactionList from "./TransactionList";
import FilterModal from "./FilterModal";
import {handleGetFilteredGastosUnicos} from "../HomeHandles";
import {updateCategoriaList} from "../../adicionar_despesas/handles/CategoriasHandles";

const TransactionView = () => {
    const getDateAYearAgo = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() - 1);
        return today;
    };
    const [filterData, setFilterData] = useState({
        categoria: '',
        descricao: '',
        dataFiltro: getDateAYearAgo().toISOString().slice(0, 10),
    });
    const [response, setResponse] = useState('');
    const [categorias, setUpdateCategorias] = useState(['Nenhuma']);
    useEffect(() => {
        const fetchData = async () => {
            await updateCategoriaList(setUpdateCategorias);
        };
        fetchData().then(r => {});
    }, []);

    return (
        <div>
            <FilterModal
                filterData={filterData}
                setFilterData={setFilterData}
                categorias={categorias}
            />
            <TransactionList
                filterData={filterData}
            />
        </div>
    );
};

export default TransactionView;
