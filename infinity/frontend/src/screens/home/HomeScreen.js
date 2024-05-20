import React, {useState} from "react";
import {handlePrint} from "./HomeHandles";
import FinancialGoalsChart from "../../plotters/PlotGoals";
import TransactionsChart from "../../plotters/PlotTransactions";
import {InputInsertGastoUnico} from "../adicionar_despesas/components/gasto_unico/InputInsertGastoUnico";
import {InputDeleteGastoUnico} from "../adicionar_despesas/components/gasto_unico/InputDeleteGastoUnico";
import {GetGastoUnico} from "../adicionar_despesas/components/gasto_unico/GetGastoUnico";
import {InputInsertGastoFixo} from "../adicionar_despesas/components/gasto_fixo/InputInsertGastoFixo";
import {InputDeleteGastoFixo} from "../adicionar_despesas/components/gasto_fixo/InputDeleteGastoFixo";
import {GetGastoFixo} from "../adicionar_despesas/components/gasto_fixo/GetGastoFixo";
import {InputInsertCategoria} from "../adicionar_despesas/components/categoria/InputInsertCategoria";
import {InputDeleteCategoria} from "../adicionar_despesas/components/categoria/InputDeleteCategoria";
import {GetCategoria} from "../adicionar_despesas/components/categoria/GetCategoria";
import TransactionList from "./Components/TransactionList";

const HomeScreen = () => {
    const [toPrint, setToPrint] = useState('');
    const [response, setResponse] = useState('');

    return(
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'left' }}>
                <div style={{marginRight: '20px'}}>
                    <ul className="list-group">
                        <h2>Receitas</h2>
                        <li className="list-item-larger">
                            <TransactionsChart style={{width: '400px', height: '200px'}}/>
                        </li>
                        <li className="list-item-larger">
                            <TransactionList/>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="list-group">
                        <h2>Despesas</h2>
                        <li className="list-item-larger">
                            <TransactionsChart style={{width: '400px', height: '200px'}}/>
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

export default HomeScreen;



