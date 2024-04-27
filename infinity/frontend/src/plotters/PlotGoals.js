import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import {handlePlotMetas} from './handles/PlotHandles'

const FinancialGoalsChart = () => {
    const [goalsData, setGoalsData] = useState([]);

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await handlePlotMetas(setGoalsData);
                console.log('Response:', setGoalsData);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartInstance.current !== null) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        const data = {
            labels: goalsData.map(goal => goal.nome),
            datasets: [{
                label: 'Dinheiro já economizado',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: goalsData.map(goal => goal.valor_arrecadado)
            }, {
                label: 'Dinheiro restante',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: goalsData.map(goal => goal.valor_alvo - goal.valor_arrecadado)
            }]
        };

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Metas Financeiras'
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Quantidade (reais)'
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
    }, [goalsData]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default FinancialGoalsChart;
