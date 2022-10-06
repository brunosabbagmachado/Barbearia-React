import 'normalize.css'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/barbearia-react/'>
                <h2 className={styles.logo}>Barber<span>React</span></h2>
            </Link>

            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to='/barbearia-react/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/barbearia-react/sobre'>Sobre nós</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/barbearia-react/produtos'>Produtos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/barbearia-react/contato'>Contato</Link>
                </li>
            </ul>
            <a href="#" className={styles.botao__login}>Login</a>
        </nav>
    )
}