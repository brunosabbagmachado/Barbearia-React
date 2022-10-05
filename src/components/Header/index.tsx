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
                <Route path='' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </Router>
        </header>
    )
}