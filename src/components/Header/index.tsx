import Navbar from "./Navbar"
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Contato from 'pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Header(){
    return (
        <header>
        <Router>
            <Navbar />
            <Routes>
                <Route path='barbearia-react/' element={<Home />} />
                <Route path='barbearia-react/sobre' element={<Sobre />} />
                <Route path='barbearia-react/produtos' element={<Produtos />} />
                <Route path='barbearia-react/contato' element={<Contato />} />
            </Routes>
        </Router>
        </header>
    )
}