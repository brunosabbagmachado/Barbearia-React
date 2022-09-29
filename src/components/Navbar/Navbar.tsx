import 'normalize.css'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from 'assets/logo.png';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <img
                    className={styles.img}
                    src={logo}
                    alt="Logo Barbearia React"
                />
            </Link>

            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/contato'>Contato</Link>
                </li>
                <li className={styles.item}>
                    <Link to='empresa'>Empresa</Link>
                </li>
            </ul>
        </nav>
    )
}