import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import HomeScreen from "./screens/home/HomeScreen";
import MetasScreen from './screens/metas/MetasScreen';
import AdicionarDespesasScreen from "./screens/adicionar_despesas/AdicionarDespesasScreen";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="list-group">
                        <li className="list-item">
                            <NavLink exact to="/" activeClassName="active" className="button">
                                Home
                            </NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/metas" activeClassName="active" className="button">
                                Metas
                            </NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/adicionar-despesas" activeClassName="active" className="button">
                                Adicionar Despesas
                            </NavLink>
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
                    <Route
                        path="/teste"
                        element={<HomeScreen />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;