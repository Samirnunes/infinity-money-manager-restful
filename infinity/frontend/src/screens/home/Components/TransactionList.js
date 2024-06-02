import React, { useEffect, useRef, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import {handlePlotGastosFixos, handlePlotGastosUnicos} from "../../../plotters/handles/PlotHandles";
import TransactionCard from "./TransactionCard";
import {handleGetFilteredGastosFixos, handleGetFilteredGastosUnicos} from "../HomeHandles";

const TransactionList = ({ filterData }) => {
    const [gastosUnicosData, setGastosUnicosData] = useState([]);
    const [gastosFixosData, setGastosFixosData] = useState([]);

    function addFixedTransactions(fixedTransaction, uniqueTransactions, filterDate) {
        const today = new Date();
        const referenceDate = new Date(fixedTransaction.data);
        const filterDateObj = new Date(filterDate);
        const newDate = new Date(Math.max(referenceDate.getTime(), filterDateObj.getTime())); // Copiando a data do gasto

        while (newDate <= today) {
            // Append transaction to list
            const newTransaction = {
                "id": fixedTransaction.id,
                "valor": fixedTransaction.valor,
                "categoria": fixedTransaction.categoria,
                "descricao": fixedTransaction.descricao,
                // Converter a data para o formato "YYYY-MM-DD"
                "data": newDate.toISOString().slice(0, 10),
                "metas_id": fixedTransaction.metas_id
            };
            uniqueTransactions.push(newTransaction);

            // Get the periodicy
            switch (fixedTransaction.periodicidade) {
                case "Diária":
                    newDate.setDate(newDate.getDate() + 1);
                    break;
                case "Semanal":
                    newDate.setDate(newDate.getDate() + 7);
                    break;
                case "Mensal":
                    newDate.setMonth(newDate.getMonth() + 1);
                    break;
                case "Bimestral":
                    newDate.setMonth(newDate.getMonth() + 2);
                    break;
                case "Trimestral":
                    newDate.setMonth(newDate.getMonth() + 3);
                    break;
                case "Semestral":
                    newDate.setMonth(newDate.getMonth() + 6);
                    break;
                case "Anual":
                    newDate.setFullYear(newDate.getFullYear() + 1);
                    break;
                default:
                    return;
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await handleGetFilteredGastosUnicos(filterData, setGastosUnicosData);
                console.log('Gastos Unicos Data:', gastosUnicosData);
                await handleGetFilteredGastosFixos(filterData, setGastosFixosData);
                console.log('Gastos Fixos Data:', gastosFixosData);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, [filterData]);

    useEffect(() => {
        gastosFixosData.forEach(function(gasto) {
            addFixedTransactions(gasto, gastosUnicosData, filterData.dataFiltro);
        });
    }, [gastosFixosData, gastosUnicosData, filterData]);

    const groupedGastos = gastosUnicosData.reduce((groups, gasto) => {
        const date = gasto.data;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(gasto);
        return groups;
    }, {});

    const sortedDates = Object.keys(groupedGastos).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div>
            {sortedDates.map(date => (
                <div key={date}>
                    <hr/>
                    <h2>{date}</h2>
                    {groupedGastos[date].map((gasto, index, array) => (
                        <React.Fragment key={gasto.id}>
                            <TransactionCard
                                tipo={gasto.categoria || "Sem Categoria"}
                                descricao={gasto.descricao}
                                valor={gasto.valor}
                            />
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
