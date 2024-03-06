import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./Home";
import AnotherScreen from './AnotherScreen';
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
                            <Link to="/red">Another screen</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/red"
                        element={<AnotherScreen />} />
                    <Route
                        path="/"
                        element={<Home />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;