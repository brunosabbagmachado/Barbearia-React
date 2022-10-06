import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Produtos from 'pages/Produtos';
import Contato from 'pages/Contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/barbearia-react/' element={<Home />} />
                    <Route path='/barbearia-react/sobre' element={<Sobre />} />
                    <Route path='/barbearia-react/produtos' element={<Produtos />} />
                    <Route path='/barbearia-react/contato' element={<Contato />} />
                </Routes>
                <Footer />
            </Router>
        </>

    )
}