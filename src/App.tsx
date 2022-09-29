import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Contato from 'pages/Contato';
import Produtos from 'pages/Produtos';
import Footer from 'components/Footer';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    )
}