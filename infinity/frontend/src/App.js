import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Metas from './screens/Metas';
import AdicionarDespesas from "./screens/AdicionarDespesas";
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
                            <Link to="/adicionar-despesas">Adicionar despesas screen</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/metas"
                        element={<Metas />} />
                    <Route
                        path="/adicionar-despesas"
                        element={<AdicionarDespesas />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;