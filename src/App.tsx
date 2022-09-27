import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Home from 'pages/Home/Home';
import Contato from 'pages/Contato/Contato';
import Empresa from 'pages/Empresa/Empresa';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contato' element={<Contato />}/>
                <Route path='/empresa' element={<Empresa />}/>
            </Routes>
        </Router>
    )
}