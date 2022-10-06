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
                    <Route path='' element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/contato' element={<Contato />} />
                </Routes>
                <Footer />
            </Router>
        </>

    )
}