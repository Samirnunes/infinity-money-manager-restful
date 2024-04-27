import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import {handlePlotGastosUnicos} from "./handles/PlotHandles";
import {handlePlotGastosFixos} from "./handles/PlotHandles";

const TransactionsChart = () => {
        const [gastosUnicosData, setGastosUnicosData] = useState([]);
        const [gastosFixosData, setGastosFixosData] = useState([]);

        const chartRef = useRef(null);
        const chartInstance = useRef(null);


        function addFixedTransactions(fixedTransaction, uniqueTransactions) {
            const today = new Date();
            const referenceDate = new Date(fixedTransaction.data);
            const newDate = new Date(referenceDate); // Copiando a data do gasto

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
                    await handlePlotGastosUnicos(setGastosUnicosData);
                    console.log('Response:', setGastosUnicosData);
                    await handlePlotGastosFixos(setGastosFixosData);
                    console.log('Response:', setGastosFixosData);
                } catch (error) {
                    console.error('Error:', error.message);
                }
            };

            fetchData();
        }, []);

    useEffect(() => {
        gastosFixosData.forEach(function(gasto) {
            addFixedTransactions(gasto, gastosUnicosData);
        });
    }, [gastosFixosData, gastosUnicosData]);

    const groupedGastosUnicos = gastosUnicosData.reduce(function(acc, obj) {
        const date = new Date(obj.data);
        const monthNames = ['Janeiro', 'Fevereiro', 'Março',
            'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
            'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const key = month + ' ' + year;
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key] += obj.valor;
        return acc;
    }, {});

    const values = Object.values(groupedGastosUnicos);
    const dates = Object.keys(groupedGastosUnicos);


    useEffect(() => {
        if (chartInstance.current !== null) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        const data = {
            labels: dates,
            datasets: [{
                label: 'Valor (reais)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: values
            }]
        };

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    x: {
                        scaleLabel: {
                            display: true,
                            labelString: 'Mês'
                        }
                    },
                    y: {
                        scaleLabel: {
                            display: true,
                            labelString: 'Soma do Valor'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, [gastosUnicosData, gastosFixosData]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default TransactionsChart;
