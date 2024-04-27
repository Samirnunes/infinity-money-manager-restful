import React, {useState} from "react";
import {handlePrint} from "./HomeHandles";
import FinancialGoalsChart from "../../plotters/PlotGoals";
import TransactionsChart from "../../plotters/PlotTransactions";

const HomeScreen = () => {
    const [toPrint, setToPrint] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className="plot">
            <h1>Despesas por mês</h1>
            <TransactionsChart/>
            <h1>Progresso das metas</h1>
            <FinancialGoalsChart/>
        </div>

    );
};

export default HomeScreen;



