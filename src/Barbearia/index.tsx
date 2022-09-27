import 'normalize.css'
import styles from './Barbearia.module.scss'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from 'pages/Home';
import Empresa from 'pages/Empresa';
import Contato from 'pages/Contato';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function Barbearia() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/empresa">
                    <Empresa />
                </Route>
                <Route path="/contato">
                    <Contato />
                </Route>
            </Switch>
        </Router>
    )
}