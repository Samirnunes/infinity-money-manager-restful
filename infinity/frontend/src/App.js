import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from "./screens/Home/HomeScreen";
import MetasScreen from './screens/Metas/MetasScreen';
import AdicionarDespesasScreen from "./screens/AdicionarDespesas/AdicionarDespesasScreen";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/metas">Metas</Link>
                        </li>
                        <li>
                            <Link to="/adicionar-despesas">Adicionar Despesas</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={<HomeScreen />}
                    />
                    <Route
                        path="/metas"
                        element={<MetasScreen />} />
                    <Route
                        path="/adicionar-despesas"
                        element={<AdicionarDespesasScreen />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;