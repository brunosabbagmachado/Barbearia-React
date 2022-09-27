import 'normalize.css'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from 'assets/logo.png';

export default function Navbar() {
    return (
        <nav className={styles.menu}>
            <img
                className={styles.menu__img}
                src={logo}
                alt="Logo Barbearia React"
            />

            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link to='/contato'>Contato</Link>
                </li>
                <li className={styles.menu__item}>
                    <Link to='empresa'>Empresa</Link>
                </li>
            </ul>
        </nav>
    )
}